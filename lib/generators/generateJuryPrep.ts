import { fallbackOutputs } from "@/lib/data/fallbackOutputs";
import type { JuryPrepOutput } from "@/types/jury";

export function generateJuryPrep(): JuryPrepOutput[] {
  return fallbackOutputs.jury as JuryPrepOutput[];
}
