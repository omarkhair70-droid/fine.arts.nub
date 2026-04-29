import type {
  BudgetLevel,
  Department,
  ExperienceLevel,
  Mood,
  ProjectFormat
} from "@/types/taxonomy";

export interface RescueRule {
  id: string;
  text: string;
  department: Department;
  budgetLevel: BudgetLevel;
  experienceLevel: ExperienceLevel;
  mood: Mood;
  projectFormat: ProjectFormat;
  intent: "scope" | "execution" | "materials" | "presentation" | "feedback";
}

export const rescueRules: RescueRule[] = [
  {
    id: "scope-problem-line",
    text: "اكتب مشكلة المشروع في سطر واحد واضح.",
    department: "general",
    budgetLevel: "very-low",
    experienceLevel: "beginner",
    mood: "chaos",
    projectFormat: "presentation",
    intent: "scope"
  },
  {
    id: "execute-fast-sketch",
    text: "ابدأ بسكتش سريع خلال 15 دقيقة قبل أي بحث إضافي.",
    department: "drawing",
    budgetLevel: "very-low",
    experienceLevel: "beginner",
    mood: "tension",
    projectFormat: "poster",
    intent: "execution"
  },
  {
    id: "material-home-first",
    text: "استخدم خامات متاحة في البيت قبل شراء أي خامة جديدة.",
    department: "general",
    budgetLevel: "very-low",
    experienceLevel: "intermediate",
    mood: "hope",
    projectFormat: "model",
    intent: "materials"
  },
  {
    id: "document-progress",
    text: "التقط صورًا لكل مرحلة لتوثيق التطور أمام لجنة التحكيم.",
    department: "photography",
    budgetLevel: "low",
    experienceLevel: "beginner",
    mood: "identity",
    projectFormat: "presentation",
    intent: "presentation"
  },
  {
    id: "single-peer-feedback",
    text: "اطلب رأيًا سريعًا من زميل واحد بسؤال محدد جدًا.",
    department: "general",
    budgetLevel: "very-low",
    experienceLevel: "intermediate",
    mood: "isolation",
    projectFormat: "presentation",
    intent: "feedback"
  },
  {
    id: "backup-version",
    text: "جهّز نسخة احتياطية قابلة للطباعة أو العرض فورًا.",
    department: "graphic",
    budgetLevel: "low",
    experienceLevel: "advanced",
    mood: "tension",
    projectFormat: "presentation",
    intent: "presentation"
  }
];
