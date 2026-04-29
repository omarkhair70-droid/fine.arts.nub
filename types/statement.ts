import type { Department, Mood, ProjectFormat } from "./taxonomy";
import type { RescueCard } from "./rescue";

export interface StatementInput {
  department: Department;
  projectFormat: ProjectFormat;
  mood?: Mood;
  topic: string;
}

export interface StatementTemplate {
  id: string;
  shortVersion: string;
  formalVersion: string;
  simpleSpokenVersion: string;
  suggestedTitlePattern: string;
  departments?: Department[];
  projectFormats?: ProjectFormat[];
  moods?: Mood[];
}

export interface StatementOutput { card: RescueCard; statement: StatementTemplate }
