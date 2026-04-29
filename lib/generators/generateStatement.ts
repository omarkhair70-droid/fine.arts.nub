import { fallbackOutputs } from "@/lib/data/fallbackOutputs";
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

export function generateStatement(input?: StatementInput): StatementOutput {
  if (!input) {
    return {
      suggestedTitle: "ملامح فكرة قيد التشكّل",
      shortVersion: "مشروعي بيحاول يترجم فكرة شخصية لصياغة بصرية واضحة، مع تركيز على وضوح الرسالة وسهولة عرضها.",
      formalVersion: "يقدم هذا العمل محاولة لصياغة فكرة بصرية قابلة للقراءة، من خلال معالجة متوازنة بين المحتوى والشكل بهدف تقديم رسالة واضحة قبل التحكيم.",
      simpleSpokenVersion: "الفكرة ببساطة إني أحول إحساس أو موقف لصورة مفهومة وسهلة الشرح قدام اللجنة.",
      presentationLine: "أنا مركز على الوضوح: فكرة محددة، تنفيذ متماسك، ورسالة مباشرة.",
      keywords: ["وضوح", "فكرة", "تنفيذ", "رسالة"]
    };
  }

  const textPool = tokenize(`${input.topic} ${input.message} ${input.material} ${input.colors}`);

  let best = statementTemplates[0];
  let bestScore = -1;

  for (const template of statementTemplates) {
    let score = 0;
    if (template.departments?.includes(input.department)) score += 4;
    if (template.projectFormats?.includes(input.projectFormat)) score += 4;
    if (template.moods?.includes(input.mood)) score += 5;

    for (const keyword of template.keywords) {
      const key = keyword.toLowerCase();
      if (textPool.some((token) => key.includes(token) || token.includes(key))) score += 2;
    }

    if (score > bestScore) {
      bestScore = score;
      best = template;
    }
  }

  const vars = {
    topic: input.topic || "موضوع شخصي",
    material: input.material || "خامة مناسبة",
    colors: input.colors || "درجات لونية هادئة",
    message: input.message || "طرح بصري واضح",
    mood: moodLabels[input.mood]
  };

  return {
    suggestedTitle: render(best.titlePattern, vars),
    shortVersion: render(best.shortTemplate, vars),
    formalVersion: render(best.formalTemplate, vars),
    simpleSpokenVersion: render(best.spokenTemplate, vars),
    presentationLine: render(best.presentationLineTemplate, vars),
    keywords: Array.from(new Set([...best.keywords, vars.mood, input.projectFormat, input.department])).slice(0, 8)
  };
}
