import { fallbackOutputs } from "@/lib/data/fallbackOutputs";
import type { IdeaOutput } from "@/types/ideas";

export function generateIdeas(): IdeaOutput[] {
  return fallbackOutputs.ideas as IdeaOutput[];
}
