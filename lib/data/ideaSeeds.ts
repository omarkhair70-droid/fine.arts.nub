import type { IdeaSeed } from "@/types/ideas";

export const ideaSeeds: IdeaSeed[] = [
  {
    id: "seed-memory-trace",
    title: "أثر الذاكرة",
    prompt: "حوّل ذكرى شخصية إلى نظام بصري يتغير مع الزمن.",
    departments: ["painting", "installation"],
    projectFormats: ["thesis", "open-studio"],
    moods: ["uncertain", "curious"],
    triggerKeywords: ["ذاكرة", "أرشيف", "تحول"]
  },
  {
    id: "seed-urban-rhythm",
    title: "إيقاع المدينة",
    prompt: "استخرج نمطاً سمعياً من الشارع وحوّله إلى سلسلة قرارات تشكيلية.",
    departments: ["performance", "sculpture"],
    projectFormats: ["group-show", "portfolio-review"],
    moods: ["blocked", "focused"],
    triggerKeywords: ["شارع", "ضوضاء", "إيقاع"]
  }
];
