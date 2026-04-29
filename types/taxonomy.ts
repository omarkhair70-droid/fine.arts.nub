export type Discipline = "painting" | "sculpture" | "installation" | "performance";

export interface TaxonomyNode {
  id: string;
  label: string;
  discipline: Discipline;
  keywords: string[];
}
