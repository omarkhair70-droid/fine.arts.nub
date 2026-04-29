import type { BudgetLevel, Department, ExperienceLevel, Mood, ProjectFormat } from "./taxonomy";

export interface RescueCard {
  id: string;
  title: string;
  summary: string;
  doNow: string[];
  nextSteps: string[];
  materials: Array<{ name: string; reason: string; alternatives?: string[] }>;
  explainItLikeThis: string;
  juryDefenseLine: string;
  avoidSaying: string[];
  confidence: number;
  urgency: "low" | "medium" | "high";
}

export interface RiskItem {
  mistake: string;
  whyItHurts: string;
  fixFast: string;
}

export interface RescueRuleContent {
  id: string;
  conditions: {
    department?: Department[];
    projectFormat?: ProjectFormat[];
    mood?: Mood[];
    daysLeftMin?: number;
    daysLeftMax?: number;
    budgetLevel?: BudgetLevel[];
    experienceLevel?: ExperienceLevel[];
  };
  quickPlan: string[];
  dayPlanTemplate: Array<{ day: number; focus: string; tasks: string[] }>;
  suggestedMaterials: string[];
  presentationOrder: string[];
  commonMistakes: RiskItem[];
  emergencySentenceTemplate: string;
  beginnerAdjustment: string[];
  advancedAdjustment: string[];
}
