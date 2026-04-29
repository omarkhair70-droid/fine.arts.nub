import type {
  BudgetLevel,
  Department,
  ExperienceLevel,
  Mood,
  ProjectFormat
} from "@/types/taxonomy";

export interface IdeaInput {
  department: Department;
  projectFormat: ProjectFormat;
  mood: Mood;
  budgetLevel: BudgetLevel;
  experienceLevel: ExperienceLevel;
}

export interface IdeaItem {
  id: string;
  title: string;
  concept: string;
  materials: string[];
  executionMethod: string[];
  whyStrong: string;
  shortExplanation: string;
  juryDefenseLine: string;
  fitScore: number;
}

export interface IdeaOutput {
  summary: string;
  ideas: IdeaItem[];
}
