import type { StatementTemplate } from "@/types/statement";
export const statementTemplates: StatementTemplate[] = Array.from({length:10}).map((_,i)=>({
  id:`ST${String(i+1).padStart(2,"0")}`,
  shortVersion:"العمل يستكشف موضوعًا قريبًا من الواقع اليومي بلغة بصرية واضحة.",
  formalVersion:"يناقش المشروع موضوعًا إنسانيًا/اجتماعيًا عبر معالجة بصرية مدروسة تربط بين الفكرة والخامة والتكوين.",
  simpleSpokenVersion:"أنا بحاول أوصل فكرة واضحة بطريقة بسيطة وصادقة.",
  suggestedTitlePattern:["ذاكرة المكان","وسط الزحمة","شكل الغياب","أثر أول","كسر النظام","بعد الكسر","هوية يومية","أرشيف يومي","مسار الضوء","دراسة بصرية"][i],
  departments:["general"],projectFormats:["presentation"],moods:["memory"]
}));
