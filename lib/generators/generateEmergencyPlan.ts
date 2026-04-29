import { rescueRules } from "@/lib/data/rescueRules";
import { fallbackOutputs } from "@/lib/data/fallbackOutputs";
import { clamp } from "@/lib/rules/normalizeInput";
import { scoreByIncludes } from "@/lib/rules/scoreMatches";
import type { EmergencyInput, EmergencyOutput } from "@/types/emergency";
export function generateEmergencyPlan(input: EmergencyInput): EmergencyOutput {
  const days = clamp(input.daysLeft,0,30);
  const scored = rescueRules.map(r=>({r,s:scoreByIncludes(input.department,r.conditions.department)+scoreByIncludes(input.projectFormat,r.conditions.projectFormat)})).sort((a,b)=>b.s-a.s);
  const best = scored[0]?.s ? scored[0].r : rescueRules[0];
  const fb = fallbackOutputs.beginnerOneDayVeryLow;
  return {
    card:{id:best.id,title:"خطة إنقاذ",summary:best.emergencySentenceTemplate,doNow:best.quickPlan,nextSteps:best.beginnerAdjustment,materials:best.suggestedMaterials.map(m=>({name:m,reason:"متاح وسريع"})),explainItLikeThis:best.emergencySentenceTemplate,juryDefenseLine:best.emergencySentenceTemplate,avoidSaying:fb.avoidSaying as string[],confidence:Math.min(1,0.5+scored[0].s*0.2),urgency:days<=1?"high":days<=3?"medium":"low"},
    dayPlan:best.dayPlanTemplate,presentationOrder:best.presentationOrder,commonMistakes:best.commonMistakes
  };
}
