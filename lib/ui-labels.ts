import type { BudgetLevel, Department, ExperienceLevel, Mood, ProjectFormat } from "@/types/taxonomy";

export const departments: Department[] = ["graphic", "decor", "painting", "drawing", "sculpture", "ceramics", "photography", "general"];
export const projectFormats: ProjectFormat[] = ["painting", "poster", "campaign", "space", "model", "sculpture", "installation", "photography", "presentation"];
export const budgetLevels: BudgetLevel[] = ["very-low", "low", "medium", "open"];
export const experienceLevels: ExperienceLevel[] = ["beginner", "intermediate", "advanced"];
export const moods: Mood[] = ["sadness", "nostalgia", "tension", "chaos", "hope", "identity", "city", "childhood", "isolation", "memory"];

export const departmentLabels: Record<Department, string> = {
  graphic: "جرافيك",
  decor: "ديكور",
  painting: "تصوير",
  drawing: "رسم",
  sculpture: "نحت",
  ceramics: "خزف",
  photography: "تصوير فوتوغرافي",
  general: "عام"
};

export const projectFormatLabels: Record<ProjectFormat, string> = {
  painting: "لوحة",
  poster: "بوستر",
  campaign: "حملة",
  space: "مساحة",
  model: "مجسم / ماكيت",
  sculpture: "نحت",
  installation: "تركيب فني",
  photography: "تصوير",
  presentation: "بريزنتيشن"
};

export const budgetLevelLabels: Record<BudgetLevel, string> = {
  "very-low": "أقل حاجة",
  low: "قليلة",
  medium: "متوسطة",
  open: "مفتوحة"
};

export const experienceLevelLabels: Record<ExperienceLevel, string> = {
  beginner: "مبتدئ",
  intermediate: "متوسط",
  advanced: "قوي"
};

export const moodLabels: Record<Mood, string> = {
  sadness: "حزن",
  nostalgia: "نوستالجيا",
  tension: "توتر",
  chaos: "فوضى",
  hope: "أمل",
  identity: "هوية",
  city: "مدينة",
  childhood: "طفولة",
  isolation: "عزلة",
  memory: "ذاكرة"
};
