import type { RescueRuleContent } from "@/types/rescue";
const mkRisk=(m:string,w:string,f:string)=>({mistake:m,whyItHurts:w,fixFast:f});
export const rescueRules: RescueRuleContent[] = Array.from({length:20}).map((_,i)=>({
  id:`RR${String(i+1).padStart(2,"0")}`,
  conditions:{
    department:["graphic","decor","painting","drawing","sculpture","ceramics","photography","general"][i%8] as any ? [ ["graphic","decor","painting","drawing","sculpture","ceramics","photography","general"][i%8] as any ]:undefined,
    projectFormat:["poster","space","painting","presentation","sculpture","installation","photography","campaign","model"][i%9] as any ? [ ["poster","space","painting","presentation","sculpture","installation","photography","campaign","model"][i%9] as any ]:undefined,
    daysLeftMin:i%3===0?0:2,daysLeftMax:i%3===0?2:7
  },
  quickPlan:["حدّد نسخة إنقاذ واضحة.","اشتغل على مخرج واحد مكتمل.","جهز جملة دفاع قصيرة."],
  dayPlanTemplate:[{day:2,focus:"تثبيت الفكرة",tasks:["جملة فكرة من 10 كلمات","اسكتش سريع"]},{day:1,focus:"تنفيذ",tasks:["إنتاج النسخة الأساسية","تنضيف المخرج"]},{day:0,focus:"عرض",tasks:["مراجعة سريعة","تجهيز عرض مختصر"]}],
  suggestedMaterials:["خامات متاحة في المرسم","ورق/كرتون","موبايل للتوثيق"],
  presentationOrder:["الفكرة","العملية","النتيجة","النقطة القادمة"],
  commonMistakes:[mkRisk("التشتت بين أفكار كتير","يضيع الوقت","اختار فكرة واحدة"),mkRisk("كلام عام","اللجنة مش هتفهم قرارك","اربط كل قرار بهدف")],
  emergencySentenceTemplate:"ركزت على وضوح الفكرة وإنهاء نسخة محترمة تحت ضغط الوقت.",
  beginnerAdjustment:["قلل العناصر للنصف.","اشتغل بأسلوب واحد فقط."],
  advancedAdjustment:["أضف مقارنة بديلين مع سبب الاختيار.","اظهر طبقة نقد ذاتي سريعة."]
}));
