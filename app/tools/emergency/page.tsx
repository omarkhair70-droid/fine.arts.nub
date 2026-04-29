import { generateEmergencyPlan } from "@/lib/generators/generateEmergencyPlan";

export default function EmergencyPage() {
  const output = generateEmergencyPlan();
  return <pre>{JSON.stringify(output, null, 2)}</pre>;
}
