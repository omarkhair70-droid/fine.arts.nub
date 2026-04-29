import type { BudgetLevel, Department, ExperienceLevel, Mood, ProjectFormat } from "./taxonomy";
import type { RescueCard } from "./rescue";

export interface IdeaInput {
  department: Department;
  mood: Mood;
  projectFormat: ProjectFormat;
  budgetLevel: BudgetLevel;
  experienceLevel: ExperienceLevel;
}

export interface IdeaSeed {
  id: string;
  department: Department[];
  mood: Mood[];
  projectFormat: ProjectFormat[];
  titleAr: string;
  conceptAr: string;
  materials: string[];
  executionMethod: string[];
  whyStrongAr: string;
  shortExplanationAr: string;
  juryDefenseLineAr: string;
}

export interface IdeaOutput { card: RescueCard; ideas: IdeaSeed[] }
