import type { Discipline } from "@/types/taxonomy";
import type { Mood, ProjectFormat } from "@/types/rescue";

export interface JuryTemplate {
  id: string;
  question: string;
  answer: string;
  departments: Discipline[];
  projectFormats: ProjectFormat[];
  moods: Mood[];
  triggerKeywords: string[];
}

export interface JuryPrepOutput {
  question: string;
  answer: string;
}
