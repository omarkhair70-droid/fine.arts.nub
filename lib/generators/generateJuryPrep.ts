import { juryTemplates } from "@/lib/data/juryTemplates";
import { departmentLabels, experienceLevelLabels, moodLabels, projectFormatLabels } from "@/lib/ui-labels";
import type { JuryInput, JuryPrepOutput, JuryQuestion } from "@/types/jury";

const fallbackInput: JuryInput = {
  department: "general",
  projectFormat: "presentation",
  topic: "مشروع فني عن العزلة داخل الزحمة",
  material: "ورق + أحبار + معالجة رقمية بسيطة",
  colors: "درجات رمادي مع لمسة لون دافئ",
  mood: "isolation",
  experienceLevel: "beginner"
};

function fillTemplate(template: string, input: JuryInput): string {
  return template
    .replaceAll("{topic}", input.topic)
    .replaceAll("{material}", input.material)
    .replaceAll("{colors}", input.colors)
    .replaceAll("{departmentLabel}", departmentLabels[input.department])
    .replaceAll("{projectFormatLabel}", projectFormatLabels[input.projectFormat])
    .replaceAll("{moodLabel}", moodLabels[input.mood]);
}

function getKeywordHits(text: string, keywords?: string[]): number {
  if (!keywords?.length) return 0;
  return keywords.reduce((acc, keyword) => (text.includes(keyword) ? acc + 1 : acc), 0);
}

export function generateJuryPrep(input?: JuryInput): JuryPrepOutput {
  const data = input ?? fallbackInput;
  const searchText = `${data.topic} ${data.material} ${data.colors}`.toLowerCase();

  const scored = juryTemplates.map((template) => {
    let score = 45;
    if (template.departments?.includes(data.department)) score += 20;
    if (template.projectFormats?.includes(data.projectFormat)) score += 15;
    if (template.moods?.includes(data.mood)) score += 10;
    score += Math.min(10, getKeywordHits(searchText, template.triggerKeywords?.map((k) => k.toLowerCase())) * 5);

    return { template, score: Math.min(score, 100) };
  });

  const topQuestions: JuryQuestion[] = scored
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map(({ template, score }) => ({
      id: template.id,
      question: template.question,
      suggestedAnswer: fillTemplate(template.suggestedAnswerTemplate, data),
      answerStyleTip: template.answerStyleTip,
      strengthHints: template.strengthHints,
      weaknessWarnings: template.weaknessWarnings,
      avoidSaying: template.avoidSaying,
      fitScore: score
    }));

  const strongestPoints = [
    `اختياراتك مترابطة: فكرة ${data.topic} متوصلة مع ${data.projectFormat === "presentation" ? "طريقة العرض" : projectFormatLabels[data.projectFormat]}.`,
    `اختيار الخامة (${data.material}) قابل للدفاع لأنه عملي ومناسب لمستوى ${experienceLevelLabels[data.experienceLevel]}.`,
    `الهوية اللونية (${data.colors}) خادمة لمزاج ${moodLabels[data.mood]} بدون مبالغة.`
  ];

  const riskyPoints = [
    "لو الشرح طال، الفكرة هتضيع؛ خلّي إجاباتك قصيرة ومباشرة.",
    "أي سؤال تقني عن التنفيذ لازم يجاوبه مثال محدد من شغلك، مش كلام عام.",
    "ما تبالغش في الدفاع؛ الاتفاق الجزئي مع ملاحظة اللجنة بيدي انطباع ناضج."
  ];

  return {
    summary: `مشروعك في ${departmentLabels[data.department]} بصيغة ${projectFormatLabels[data.projectFormat]} عنده قاعدة دفاع جيدة: الفكرة واضحة، والخامات مناسبة، والمزاج (${moodLabels[data.mood]}) ظاهر بصريًا. ركّز على إجابات قصيرة فيها سبب ونتيجة.`,
    openingLine: `مساء الخير يا دكاترة، مشروعي بعنوان "${data.topic}". حاولت أقدمه من خلال ${projectFormatLabels[data.projectFormat]} باستخدام ${data.material} وألوان ${data.colors} علشان أوصل إحساس ${moodLabels[data.mood]} بشكل واضح ومحترم.`,
    questions: topQuestions,
    strongestPoints,
    riskyPoints,
    finalDefenseLine: "أنا مقدّر ملاحظات اللجنة جدًا، ومتمسك بجوهر الفكرة مع استعداد كامل لتحسين أي نقطة تنفيذية تقوّي الشغل بدون ما تغيّر رسالته."
  };
}
