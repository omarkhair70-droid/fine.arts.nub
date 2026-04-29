import type { BudgetLevel, Department, ExperienceLevel, Mood, ProjectFormat } from "./taxonomy";
import type { RescueCard, RiskItem } from "./rescue";

export interface EmergencyInput {
  department: Department;
  projectFormat: ProjectFormat;
  daysLeft: number;
  budgetLevel: BudgetLevel;
  experienceLevel: ExperienceLevel;
  mood?: Mood;
}

export interface EmergencyOutput {
  card: RescueCard;
  dayPlan: Array<{ day: number; focus: string; tasks: string[] }>;
  presentationOrder: string[];
  commonMistakes: RiskItem[];
}
