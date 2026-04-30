import type { BudgetLevel, Department, ExperienceLevel, Mood, ProjectFormat } from "@/types/taxonomy";

export type ToolPresetValues = {
  department: Department;
  projectFormat: ProjectFormat;
  mood: Mood;
  budgetLevel: BudgetLevel;
  experienceLevel: ExperienceLevel;
  daysLeft: number;
  topic: string;
  material: string;
  colors: string;
  message: string;
};

export type ToolPreset = {
  id: string;
  label: string;
  values: ToolPresetValues;
};

export const presets: ToolPreset[] = [
  {
    id: "graphic-poster-isolation",
    label: "بوستر عن العزلة وسط الزحمة",
    values: {
      department: "graphic",
      projectFormat: "poster",
      mood: "isolation",
      budgetLevel: "low",
      experienceLevel: "beginner",
      daysLeft: 1,
      topic: "العزلة وسط الزحمة",
      material: "كولاج ورق مطبوع",
      colors: "رمادي مع أحمر هادي",
      message: "الإنسان ممكن يبقى وسط الزحمة ومحدش شايفه"
    }
  },
  {
    id: "decor-space-closed-room",
    label: "مساحة عن أوضة مقفولة",
    values: {
      department: "decor",
      projectFormat: "space",
      mood: "isolation",
      budgetLevel: "very-low",
      experienceLevel: "beginner",
      daysLeft: 3,
      topic: "أوضة مقفولة",
      material: "كرتون وفوم بورد وخيط",
      colors: "أبيض مطفي وظلال رمادي",
      message: "الفراغ ممكن يعبر عن الضغط النفسي"
    }
  },
  {
    id: "painting-memory-old-house",
    label: "لوحة عن البيت القديم",
    values: {
      department: "painting",
      projectFormat: "painting",
      mood: "memory",
      budgetLevel: "medium",
      experienceLevel: "intermediate",
      daysLeft: 2,
      topic: "البيت القديم",
      material: "ألوان مائية وورق شفاف",
      colors: "بني باهت وأصفر دافي",
      message: "الذاكرة بتفضل موجودة في تفاصيل المكان"
    }
  },
  {
    id: "photography-nostalgia-last-light",
    label: "تصوير عن ضوء آخر اليوم",
    values: {
      department: "photography",
      projectFormat: "photography",
      mood: "nostalgia",
      budgetLevel: "low",
      experienceLevel: "beginner",
      daysLeft: 2,
      topic: "ضوء آخر اليوم",
      material: "تصوير بالموبايل",
      colors: "ذهبي هادي وظلال طويلة",
      message: "نهاية اليوم بتشبه لحظة بين الفقد والأمل"
    }
  }
];

export function getPresetById(id: string) {
  return presets.find((preset) => preset.id === id);
}
