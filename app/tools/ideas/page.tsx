import { generateIdeas } from "@/lib/generators/generateIdeas";

export default function IdeasPage() {
  const output = generateIdeas({
    department: "graphic",
    projectFormat: "poster",
    mood: "identity",
    budgetLevel: "low",
    experienceLevel: "beginner"
  });

  return <pre>{JSON.stringify(output, null, 2)}</pre>;
}
