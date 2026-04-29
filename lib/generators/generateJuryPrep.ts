import { juryTemplates } from "@/lib/data/juryTemplates";
import type { JuryInput, JuryOutput } from "@/types/jury";
export function generateJuryPrep(input:JuryInput):JuryOutput{
  const items=juryTemplates.filter(t=>(!t.departments||t.departments.includes(input.department))&&(!t.projectFormats||t.projectFormats.includes(input.projectFormat))).slice(0,6);
  return {card:{id:"jury",title:"تحضير لجنة",summary:"أسئلة متوقعة بإجابات عملية.",doNow:["تمرّن على 6 أسئلة"],nextSteps:["عدّل إجاباتك على مشروعك"],materials:[],explainItLikeThis:"حضّرت الردود المختصرة مع دليل بصري.",juryDefenseLine:"كل إجابة مرتبطة بقرار تصميم واضح.",avoidSaying:["مش فاكر"],confidence:0.78,urgency:"medium"},items:items.length?items:juryTemplates.slice(0,6)};
}
