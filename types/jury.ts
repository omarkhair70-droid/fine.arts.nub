import type { Department, ExperienceLevel, Mood, ProjectFormat } from "@/types/taxonomy";

export interface JuryInput {
  department: Department;
  projectFormat: ProjectFormat;
  topic: string;
  material: string;
  colors: string;
  mood: Mood;
  experienceLevel: ExperienceLevel;
}

export interface JuryQuestion {
  id: string;
  question: string;
  suggestedAnswer: string;
  answerStyleTip: string;
  strengthHints: string[];
  weaknessWarnings: string[];
  avoidSaying: string[];
  fitScore: number;
}

export interface JuryPrepOutput {
  summary: string;
  openingLine: string;
  questions: JuryQuestion[];
  strongestPoints: string[];
  riskyPoints: string[];
  finalDefenseLine: string;
}
