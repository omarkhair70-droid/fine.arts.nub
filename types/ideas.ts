import type { Discipline } from "@/types/taxonomy";
import type { Mood, ProjectFormat } from "@/types/rescue";

export interface IdeaSeed {
  id: string;
  title: string;
  prompt: string;
  departments: Discipline[];
  projectFormats: ProjectFormat[];
  moods: Mood[];
  triggerKeywords: string[];
}

export interface IdeaOutput {
  seed: string;
  variation: string;
}
