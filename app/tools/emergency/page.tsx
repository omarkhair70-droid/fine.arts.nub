import { generateEmergencyPlan } from "@/lib/generators/generateEmergencyPlan";

export default function EmergencyPage() {
  const output = generateEmergencyPlan({
    department: "graphic",
    projectFormat: "poster",
    daysLeft: 1,
    budgetLevel: "low",
    experienceLevel: "beginner",
    mood: "tension"
  });

  return <pre>{JSON.stringify(output, null, 2)}</pre>;
}
