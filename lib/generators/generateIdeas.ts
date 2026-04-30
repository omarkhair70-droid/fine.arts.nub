import { ideaSeeds } from "@/lib/data/ideaSeeds";
import type { IdeaInput, IdeaItem, IdeaOutput } from "@/types/ideas";

const MAX_IDEAS = 3;

const departmentLabel: Record<string, string> = {
  graphic: "الجرافيك",
  decor: "الديكور",
  painting: "التصوير الزيتي/التلوين",
  drawing: "الرسم",
  sculpture: "النحت",
  ceramics: "الخزف",
  photography: "التصوير",
  general: "عام"
};

const formatLabel: Record<string, string> = {
  poster: "بوستر",
  campaign: "حملة",
  painting: "لوحة",
  sculpture: "مجسم",
  model: "ماكيت",
  space: "مساحة",
  installation: "تركيب",
  photography: "تصوير",
  presentation: "عرض"
};

function getFitScore(input: IdeaInput, seed: (typeof ideaSeeds)[number]): number {
  let score = 0;
  if (seed.departments?.includes(input.department)) score += 40;
  if (seed.projectFormats?.includes(input.projectFormat)) score += 30;
  if (seed.moods?.includes(input.mood)) score += 15;
  if (seed.budgetLevels?.includes(input.budgetLevel)) score += 8;
  if (seed.experienceLevels?.includes(input.experienceLevel)) score += 7;
  return Math.min(score, 100);
}

function toIdeaItem(seed: (typeof ideaSeeds)[number], fitScore: number): IdeaItem {
  return {
    id: seed.id,
    title: seed.title,
    concept: seed.concept,
    materials: seed.materials,
    executionMethod: seed.executionMethod,
    whyStrong: seed.whyStrong,
    shortExplanation: seed.shortExplanation,
    juryDefenseLine: seed.juryDefenseLine,
    fitScore: Math.min(fitScore, 100)
  };
}

export function generateIdeas(input?: IdeaInput): IdeaOutput {
  if (!input) {
    return {
      summary: "٣ أفكار بداية متنوعة: واحدة سهلة، واحدة مفاهيمية، وواحدة بصرية تجريبية.",
      ideas: ideaSeeds.slice(0, MAX_IDEAS).map((seed) => toIdeaItem(seed, 0))
    };
  }

  const ranked = ideaSeeds
    .map((seed) => ({ seed, fitScore: getFitScore(input, seed) }))
    .sort((a, b) => b.fitScore - a.fitScore);

  const usedTitles = new Set<string>();
  const selected: Array<{ seed: (typeof ideaSeeds)[number]; fitScore: number }> = [];

  const pickByApproach = (approach: "safe" | "conceptual" | "experimental") => {
    const candidate = ranked.find(
      (item) => item.seed.metadata.approach === approach && !usedTitles.has(item.seed.title)
    );
    if (candidate) {
      selected.push(candidate);
      usedTitles.add(candidate.seed.title);
    }
  };

  pickByApproach("safe");
  pickByApproach("conceptual");
  pickByApproach("experimental");

  for (const item of ranked) {
    if (selected.length >= MAX_IDEAS) break;
    if (usedTitles.has(item.seed.title)) continue;
    const tooSimilar = selected.some(
      (chosen) => chosen.seed.metadata.localSignal === item.seed.metadata.localSignal
    );
    if (tooSimilar) continue;
    selected.push(item);
    usedTitles.add(item.seed.title);
  }

  const fallbackPool = ranked.length ? ranked : ideaSeeds.map((seed) => ({ seed, fitScore: 0 }));
  while (selected.length < MAX_IDEAS) {
    const next = fallbackPool.find((item) => !usedTitles.has(item.seed.title));
    if (!next) break;
    selected.push(next);
    usedTitles.add(next.seed.title);
  }

  return {
    summary: `اختيارات مخصصة لقسم ${departmentLabel[input.department] ?? input.department}، بصيغة ${formatLabel[input.projectFormat] ?? input.projectFormat}، وبمزاج ${input.mood}.`,
    ideas: selected.slice(0, MAX_IDEAS).map(({ seed, fitScore }) => toIdeaItem(seed, fitScore))
  };
}
