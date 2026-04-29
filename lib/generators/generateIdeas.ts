import { ideaSeeds } from "@/lib/data/ideaSeeds";
import type { IdeaInput, IdeaItem, IdeaOutput } from "@/types/ideas";

const MAX_IDEAS = 3;

function getFitScore(input: IdeaInput, seed: (typeof ideaSeeds)[number]): number {
  let score = 0;

  if (seed.departments?.includes(input.department)) {
    score += 35;
  }

  if (seed.projectFormats?.includes(input.projectFormat)) {
    score += 25;
  }

  if (seed.moods?.includes(input.mood)) {
    score += 20;
  }

  if (seed.budgetLevels?.includes(input.budgetLevel)) {
    score += 10;
  }

  if (seed.experienceLevels?.includes(input.experienceLevel)) {
    score += 10;
  }

  return score;
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
    fitScore
  };
}

export function generateIdeas(input?: IdeaInput): IdeaOutput {
  if (!input) {
    return {
      summary: "هذه أفكار بداية سريعة يمكنك تطويرها حسب القسم والمزاج المطلوب.",
      ideas: ideaSeeds.slice(0, MAX_IDEAS).map((seed) => toIdeaItem(seed, 0))
    };
  }

  const rankedIdeas = ideaSeeds
    .map((seed) => ({
      seed,
      fitScore: getFitScore(input, seed)
    }))
    .sort((a, b) => b.fitScore - a.fitScore)
    .slice(0, MAX_IDEAS)
    .map(({ seed, fitScore }) => toIdeaItem(seed, fitScore));

  return {
    summary: `تم اختيار الأفكار الأقرب لقسم ${input.department} وبمزاج ${input.mood} وبصيغة مشروع ${input.projectFormat}.`,
    ideas: rankedIdeas
  };
}
