import type { Discipline } from "@/types/taxonomy";
import type { Mood, ProjectFormat } from "@/types/rescue";

export interface StatementTemplate {
  id: string;
  title: string;
  body: string;
  departments: Discipline[];
  projectFormats: ProjectFormat[];
  moods: Mood[];
}

export interface StatementOutput {
  title: string;
  body: string;
}
