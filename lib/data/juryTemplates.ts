import type { JuryTemplate } from "@/types/jury";

export const juryTemplates: JuryTemplate[] = [
  {
    id: "jury-core-inquiry",
    question: "ما هو السؤال المركزي في المشروع؟",
    answer: "المشروع يفحص كيف يغيّر السياق قراءة المتلقي للأثر البصري.",
    departments: ["painting", "installation"],
    projectFormats: ["thesis", "solo-show"],
    moods: ["uncertain", "focused"],
    triggerKeywords: ["سؤال بحثي", "سياق", "تلقي"]
  },
  {
    id: "jury-method-defense",
    question: "لماذا اخترت هذه المنهجية التنفيذية؟",
    answer: "لأنها تربط بين التجربة الميدانية والنتيجة المادية بشكل يمكن تتبعه وتقييمه.",
    departments: ["performance", "sculpture"],
    projectFormats: ["group-show", "portfolio-review"],
    moods: ["urgent", "overwhelmed"],
    triggerKeywords: ["منهجية", "اختبار", "تقييم"]
  }
];
