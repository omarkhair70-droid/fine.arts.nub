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

const isWeak = (value: string) => !value || value.trim().length < 2;
const isTopicTooShort = (value: string) => value.trim().length > 0 && value.trim().length < 8;

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

  const scored = juryTemplates
    .map((template) => {
      let score = 35;
      if (template.departments?.includes(data.department)) score += 18;
      if (template.projectFormats?.includes(data.projectFormat)) score += 14;
      if (template.moods?.includes(data.mood)) score += 12;
      score += Math.min(24, getKeywordHits(searchText, template.triggerKeywords?.map((k) => k.toLowerCase())) * 6);
      return { template, score: Math.min(score, 100) };
    })
    .sort((a, b) => b.score - a.score);

  const used = new Set<string>();
  const picked: { template: (typeof juryTemplates)[number]; score: number }[] = [];
  const pickFrom = (predicate: (item: (typeof scored)[number]) => boolean, min: number) => {
    for (const item of scored) {
      if (picked.length >= 8) return;
      if (!predicate(item) || used.has(item.template.id)) continue;
      picked.push(item);
      used.add(item.template.id);
      if (picked.filter((p) => predicate(p as typeof item)).length >= min) break;
    }
  };

  pickFrom((i) => i.template.category === "concept", 2);
  pickFrom((i) => i.template.category === "materialColor", 1);
  pickFrom((i) => i.template.category === "compositionExecution", 1);
  pickFrom((i) => i.template.category === "processDevelopment", 1);
  pickFrom((i) => i.template.category === "criticismWeakness", 1);

  for (const item of scored) {
    if (picked.length >= 8) break;
    if (used.has(item.template.id)) continue;
    picked.push(item);
    used.add(item.template.id);
  }

  const topQuestions: JuryQuestion[] = picked.map(({ template, score }) => ({
    id: template.id,
    question: fillTemplate(template.question, data),
    suggestedAnswer: fillTemplate(template.suggestedAnswerTemplate, data),
    answerStyleTip: template.answerStyleTip,
    strengthHints: template.strengthHints,
    weaknessWarnings: template.weaknessWarnings,
    avoidSaying: template.avoidSaying,
    fitScore: Math.min(score, 100)
  }));

  const strongestPoints = [
    `الفكرة "${data.topic}" مرتبطة بوسيط ${projectFormatLabels[data.projectFormat]} بشكل قابل للدفاع قدام اللجنة.`
  ];
  if (!isWeak(data.material)) strongestPoints.push(`عندك مبرر خامة واضح: اختيار ${data.material} يخدم الفكرة والتنفيذ.`);
  if (!isWeak(data.colors)) strongestPoints.push(`القرار اللوني (${data.colors}) يدي قراءة أدق لإحساس ${moodLabels[data.mood]}.`);
  if (["tension", "isolation", "nostalgia", "sadness", "hope", "memory"].includes(data.mood)) strongestPoints.push(`في اتساق شعوري واضح؛ المزاج ${moodLabels[data.mood]} ظاهر بدون مبالغة.`);

  const riskyPoints = ["خلّي الإجابات قصيرة: سبب واضح ثم مثال واحد من شغلك."];
  if (isWeak(data.topic) || data.topic.trim() === "مشروع") riskyPoints.push("موضوع المشروع لسه عام؛ حدده في جملة أكثر دقة قبل العرض.");
  if (isTopicTooShort(data.topic)) riskyPoints.push("عنوان الفكرة قصير جدًا وقد يبان مبهم؛ زوده بسياق بسيط.");
  if (isWeak(data.material)) riskyPoints.push("غياب مبرر الخامة هيضعف الدفاع؛ جهّز سبب عملي ومفاهيمي لاختيار المادة.");
  if (isWeak(data.colors)) riskyPoints.push("عدم تحديد الألوان يخلّي حديثك البصري عام؛ حدّد عائلة لونية ووظيفتها.");

  return {
    summary: `ملخص الدفاع: مشروع ${departmentLabels[data.department]} بصيغة ${projectFormatLabels[data.projectFormat]} عنده أساس جيد. نقطة القوة الرئيسية هي اتساق الفكرة مع التنفيذ، ومع شوية اختصار في العرض هتكون إجاباتك أكثر إقناعًا.`,
    openingLine: `السلام عليكم، مشروعي بعنوان "${data.topic}". قدمته بصيغة ${projectFormatLabels[data.projectFormat]} باستخدام ${data.material} ولوحة ${data.colors} لأوصل إحساس ${moodLabels[data.mood]} بشكل واضح ومحترم.`,
    questions: topQuestions,
    strongestPoints: strongestPoints.slice(0, 4),
    riskyPoints: riskyPoints.slice(0, 4),
    finalDefenseLine: `أقدّر ملاحظات اللجنة جدًا، ومتمسك بجوهر ${data.topic}، ومعنديش مانع أطور التنفيذ في أي نقطة تقوي القراءة بدون ما تغيّر الرسالة الأساسية.`
  };
}
