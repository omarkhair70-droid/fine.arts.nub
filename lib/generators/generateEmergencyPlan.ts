import { fallbackOutputs } from "@/lib/data/fallbackOutputs";
import type { EmergencyPlan } from "@/types/emergency";

export function generateEmergencyPlan(): EmergencyPlan {
  return fallbackOutputs.emergency as EmergencyPlan;
}
