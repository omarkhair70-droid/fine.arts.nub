import { fallbackOutputs } from "@/lib/data/fallbackOutputs";
import type { StatementOutput } from "@/types/statement";

export function generateStatement(): StatementOutput {
  return fallbackOutputs.statement as StatementOutput;
}
