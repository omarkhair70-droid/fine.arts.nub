export type Department =
  | "graphic"
  | "decor"
  | "painting"
  | "drawing"
  | "sculpture"
  | "ceramics"
  | "photography"
  | "general";

export type BudgetLevel = "very-low" | "low" | "medium" | "open";

export type ExperienceLevel = "beginner" | "intermediate" | "advanced";

export type Mood =
  | "sadness"
  | "nostalgia"
  | "tension"
  | "chaos"
  | "hope"
  | "identity"
  | "city"
  | "childhood"
  | "isolation"
  | "memory";

export type ProjectFormat =
  | "painting"
  | "poster"
  | "campaign"
  | "space"
  | "model"
  | "sculpture"
  | "installation"
  | "photography"
  | "presentation";

export interface TaxonomyNode {
  id: string;
  labelAr: string;
  department: Department;
  budgetLevel: BudgetLevel;
  experienceLevel: ExperienceLevel;
  mood: Mood;
  projectFormat: ProjectFormat;
  keywordsAr: string[];
}
