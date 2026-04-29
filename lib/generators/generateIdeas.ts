import { ideaSeeds } from "@/lib/data/ideaSeeds";
import type { IdeaInput, IdeaOutput } from "@/types/ideas";
export function generateIdeas(input: IdeaInput): IdeaOutput {
  const ranked=ideaSeeds.map(i=>({i,s:(i.department.includes(input.department)?1:0)+(i.mood.includes(input.mood)?1:0)+(i.projectFormat.includes(input.projectFormat)?1:0)})).sort((a,b)=>b.s-a.s);
  const ideas=ranked.slice(0,3).map(x=>x.i);
  return {card:{id:"ideas",title:"أفكار جاهزة",summary:"3 أفكار سريعة قابلة للتنفيذ.",doNow:["اختار فكرة واحدة"],nextSteps:["اعمل اسكتش"],materials:[],explainItLikeThis:"اخترت أفكار مرتبطة بالسياق.",juryDefenseLine:"الاختيارات مبنية على القسم والمزاج.",avoidSaying:["أي فكرة تمشي"],confidence:ideas.length?0.8:0.4,urgency:"medium"},ideas:ideas.length?ideas:ideaSeeds.slice(0,3)};
}
