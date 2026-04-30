import { statementTemplates } from "@/lib/data/statementTemplates";
import { moodLabels } from "@/lib/ui-labels";
import type { StatementInput, StatementOutput } from "@/types/statement";

function render(template: string, vars: Record<string, string>) {
  return template.replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? "");
}

function tokenize(value: string): string[] {
  return value
    .toLowerCase()
    .split(/[\s،,.!؟;:\-_/()]+/)
    .map((t) => t.trim())
    .filter((t) => t.length > 1);
}

function cleanSentence(value: string): string {
  return value.replace(/\s+/g, " ").replace(/\s([،.])/g, "$1").trim();
}

export function generateStatement(input?: StatementInput): StatementOutput {
  if (!input) {
    return {
      suggestedTitle: "ملامح فكرة قيد التشكّل",
      shortVersion: "بيان فني أولي يوضح فكرة المشروع بصياغة بسيطة تساعدك في التحكيم.",
      formalVersion: "هذا نص تمهيدي يساعد على تحويل الفكرة الأولية إلى بيان فني واضح يجمع بين المعنى والتنفيذ دون تعقيد لغوي.",
      simpleSpokenVersion: "لسه بصيغ الفكرة، لكن هدفي أقدمها بشكل واضح وسهل يتقال قدام اللجنة.",
      presentationLine: "الفكرة واضحة، والتنفيذ في اتجاه متماسك.",
      keywords: ["فكرة", "وضوح", "صياغة", "تحكيم"]
    };
  }

  const safeTopic = input.topic?.trim() || "تجربة شخصية";
  const safeMaterial = input.material?.trim() || "خامة مناسبة";
  const safeColors = input.colors?.trim() || "درجات لونية متوازنة";
  const safeMessage = input.message?.trim() || "رسالة بصرية واضحة";

  const textPool = tokenize(`${safeTopic} ${safeMessage} ${safeMaterial} ${safeColors}`);

  let best = statementTemplates[0];
  let bestScore = -1;

  for (const template of statementTemplates) {
    let score = 0;
    if (template.moods?.includes(input.mood)) score += 7;
    if (template.projectFormats?.includes(input.projectFormat)) score += 5;
    if (template.departments?.includes(input.department)) score += 5;

    for (const keyword of template.keywords) {
      const key = keyword.toLowerCase();
      if (textPool.some((token) => key.includes(token) || token.includes(key))) score += 2;
    }
    for (const trigger of template.triggerKeywords ?? []) {
      const t = trigger.toLowerCase();
      if (textPool.some((token) => t.includes(token) || token.includes(t))) score += 3;
    }

    if (score > bestScore) {
      bestScore = score;
      best = template;
    }
  }

  const vars = {
    topic: safeTopic,
    material: safeMaterial,
    colors: safeColors,
    message: safeMessage,
    mood: moodLabels[input.mood]
  };

  const suggestedTitle = cleanSentence(render(best.titlePattern, vars)).slice(0, 44);
  const shortVersion = cleanSentence(render(best.shortTemplate, vars));
  let formalVersion = cleanSentence(render(best.formalTemplate, vars));
  let simpleSpokenVersion = cleanSentence(render(best.spokenTemplate, vars));

  if (formalVersion === shortVersion) {
    formalVersion = `${formalVersion} كما يوضح العمل العلاقة بين الشكل والمضمون بصورة مباشرة.`;
  }
  if (simpleSpokenVersion === shortVersion || simpleSpokenVersion === formalVersion) {
    simpleSpokenVersion = `ببساطة، أنا بقدم ${safeTopic} بطريقة قريبة للمتلقي باستخدام ${safeMaterial} و${safeColors}.`;
  }

  const extractedArabic = textPool.filter((w) => /[\u0600-\u06FF]/.test(w) && w.length >= 3).slice(0, 5);
  const keywords = Array.from(new Set([...best.keywords, ...extractedArabic, moodLabels[input.mood]])).slice(0, 10);

  return {
    suggestedTitle: suggestedTitle || "بيان فني",
    shortVersion,
    formalVersion,
    simpleSpokenVersion,
    presentationLine: cleanSentence(render(best.presentationLineTemplate, vars)),
    keywords
  };
}
