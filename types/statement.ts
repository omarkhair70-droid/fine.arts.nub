import type { Department, ExperienceLevel, Mood, ProjectFormat } from "@/types/taxonomy";

export interface StatementInput {
  department: Department;
  projectFormat: ProjectFormat;
  topic: string;
  material: string;
  colors: string;
  mood: Mood;
  message: string;
  experienceLevel: ExperienceLevel;
}

export interface StatementOutput {
  suggestedTitle: string;
  shortVersion: string;
  formalVersion: string;
  simpleSpokenVersion: string;
  presentationLine: string;
  keywords: string[];
}
