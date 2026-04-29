import type { TaxonomyNode } from "@/types/taxonomy";

export const taxonomy: TaxonomyNode[] = [
  {
    id: "tx-01",
    labelAr: "هوية الحي في ملصق بصري",
    department: "graphic",
    budgetLevel: "very-low",
    experienceLevel: "beginner",
    mood: "identity",
    projectFormat: "poster",
    keywordsAr: ["هوية", "حي", "حروفية"]
  },
  {
    id: "tx-02",
    labelAr: "ذكريات البيت في لوحة",
    department: "painting",
    budgetLevel: "low",
    experienceLevel: "intermediate",
    mood: "memory",
    projectFormat: "painting",
    keywordsAr: ["بيت", "ذكرى", "لون"]
  },
  {
    id: "tx-03",
    labelAr: "توتر المدينة في تركيب فراغي",
    department: "decor",
    budgetLevel: "medium",
    experienceLevel: "advanced",
    mood: "tension",
    projectFormat: "space",
    keywordsAr: ["مدينة", "فراغ", "توتر"]
  }
];
