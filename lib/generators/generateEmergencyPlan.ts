import { fallbackOutputs } from "@/lib/data/fallbackOutputs";
import { rescueRules, type RescueRule } from "@/lib/data/rescueRules";
import type { EmergencyInput, EmergencyPlan } from "@/types/emergency";

function scoreRule(rule: RescueRule, input: EmergencyInput): number {
  let score = 0;

  if (rule.departments?.includes(input.department)) score += 3;
  if (rule.projectFormats?.includes(input.projectFormat)) score += 3;
  if (rule.budgetLevels?.includes(input.budgetLevel)) score += 2;
  if (rule.experienceLevels?.includes(input.experienceLevel)) score += 2;
  if (input.mood && rule.moods?.includes(input.mood)) score += 1;

  if (rule.daysLeftMin !== undefined && input.daysLeft >= rule.daysLeftMin) score += 2;
  if (rule.daysLeftMax !== undefined && input.daysLeft <= rule.daysLeftMax) score += 2;

  return score;
}

function priorityFromDays(daysLeft: number): EmergencyPlan["priority"] {
  if (daysLeft <= 1) return "high";
  if (daysLeft <= 3) return "medium";
  return "low";
}

export function generateEmergencyPlan(input?: EmergencyInput): EmergencyPlan {
  const basePlan = fallbackOutputs.emergency as EmergencyPlan;

  if (!input) {
    return {
      ...basePlan,
      doNow: rescueRules
        .filter((rule) => ["scope", "execution"].includes(rule.intent))
        .slice(0, 3)
        .map((rule) => rule.text),
      cheapAlternatives: [
        ...basePlan.cheapAlternatives,
        ...rescueRules
          .filter((rule) => rule.intent === "materials")
          .slice(0, 2)
          .map((rule) => rule.text)
      ]
    };
  }

  const rankedRules = rescueRules
    .map((rule) => ({ rule, score: scoreRule(rule, input) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  const doNow = rankedRules
    .filter((item) => item.rule.intent === "scope" || item.rule.intent === "execution")
    .slice(0, 3)
    .map((item) => item.rule.text);

  const cheapAlternatives = [
    ...basePlan.cheapAlternatives,
    ...rankedRules
      .filter((item) => item.rule.intent === "materials")
      .slice(0, 3)
      .map((item) => item.rule.text)
  ];

  const pressureLabel = input.daysLeft <= 1 ? "ضغط عالي جدًا" : input.daysLeft <= 3 ? "ضغط متوسط" : "ضغط منخفض";

  return {
    ...basePlan,
    summary: `خطة طوارئ لقسم ${input.department} بصيغة ${input.projectFormat} مع ${pressureLabel} لأن المتبقي ${input.daysLeft} يوم.`,
    priority: priorityFromDays(input.daysLeft),
    doNow: doNow.length ? doNow : basePlan.doNow,
    cheapAlternatives: cheapAlternatives.filter(Boolean)
  };
}
