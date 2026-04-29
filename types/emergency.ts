export interface EmergencyPlan {
  summary: string;
  priority: "low" | "medium" | "high";
  doNow: string[];
  dayPlan: Array<{ title: string; tasks: string[] }>;
  materials: Array<{ name: string; reason: string; alternatives?: string[] }>;
  cheapAlternatives: string[];
  presentationOrder: string[];
  explainItLikeThis: string;
  juryDefenseLine: string;
  commonMistakes: Array<{
    mistake: string;
    whyItHurts: string;
    fixFast: string;
  }>;
}
