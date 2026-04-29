import { generateIdeas } from "@/lib/generators/generateIdeas";

export default function IdeasPage() {
  const output = generateIdeas();
  return <pre>{JSON.stringify(output, null, 2)}</pre>;
}
