import { fallbackOutputs } from "@/lib/data/fallbackOutputs";
import { rescueRules } from "@/lib/data/rescueRules";
import type { EmergencyPlan } from "@/types/emergency";

export function generateEmergencyPlan(): EmergencyPlan {
  const basePlan = fallbackOutputs.emergency as EmergencyPlan;

  return {
    ...basePlan,
    doNow: rescueRules.slice(0, 3).map((rule) => rule.text),
    cheapAlternatives: [
      ...basePlan.cheapAlternatives,
      rescueRules.find((rule) => rule.intent === "materials")?.text ?? ""
    ].filter(Boolean)
  };
}
