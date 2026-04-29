import type { Discipline } from "@/types/taxonomy";

export type ProjectFormat =
  | "solo-show"
  | "group-show"
  | "thesis"
  | "open-studio"
  | "portfolio-review";

export type Mood =
  | "blocked"
  | "overwhelmed"
  | "uncertain"
  | "curious"
  | "urgent"
  | "focused";

export interface RescueInput {
  prompt: string;
  discipline?: Discipline;
  projectFormat?: ProjectFormat;
  mood?: Mood;
}

export interface RuleCondition {
  field: "prompt" | "discipline" | "projectFormat" | "mood";
  operator: "includes" | "equals";
  value: string;
}

export interface RiskItem {
  id: string;
  label: string;
  severity: "low" | "medium" | "high";
  signal: string;
  correctiveAction: string;
}

export interface RescueRule {
  id: string;
  title: string;
  conditions: RuleCondition[];
  actions: string[];
  commonMistakes: RiskItem[];
}

export interface RescueMatch {
  id: string;
  score: number;
}
