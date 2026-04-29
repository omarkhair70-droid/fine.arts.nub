export interface EmergencyPlan {
  priority: "low" | "medium" | "high";
  actions: string[];
}
