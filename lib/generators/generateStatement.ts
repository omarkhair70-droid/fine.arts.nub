import { statementTemplates } from "@/lib/data/statementTemplates";
import type { StatementInput, StatementOutput } from "@/types/statement";
export function generateStatement(input:StatementInput):StatementOutput{
  const statement=statementTemplates.find(s=>(!s.departments||s.departments.includes(input.department)))||statementTemplates[0];
  return {card:{id:"statement",title:"بيان فني",summary:"نسخة قصيرة ورسمية وعامية بسيطة.",doNow:["عدّل {topic} باسم مشروعك"],nextSteps:["اختصره قبل العرض"],materials:[],explainItLikeThis:"البيان بيشرح الفكرة بدون تعقيد.",juryDefenseLine:"الصياغة مرتبطة بقرارات تنفيذية واضحة.",avoidSaying:["كلام إنشائي"],confidence:0.74,urgency:"low"},statement};
}
