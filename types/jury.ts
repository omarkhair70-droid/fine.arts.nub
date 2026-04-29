import type { Department, Mood, ProjectFormat } from "./taxonomy";
import type { RescueCard } from "./rescue";

export interface JuryInput {
  department: Department;
  projectFormat: ProjectFormat;
  mood?: Mood;
  topic: string;
}

export interface JuryTemplate {
  id: string;
  question: string;
  suggestedAnswerTemplate: string;
  answerStyleTip: string;
  strengthHints: string[];
  weaknessWarnings: string[];
  avoidSaying: string[];
  departments?: Department[];
  projectFormats?: ProjectFormat[];
  moods?: Mood[];
  triggerKeywords?: string[];
}

export interface JuryOutput { card: RescueCard; items: JuryTemplate[] }
