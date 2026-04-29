import { generateStatement } from "@/lib/generators/generateStatement";

export default function StatementPage() {
  const output = generateStatement();
  return <pre>{JSON.stringify(output, null, 2)}</pre>;
}
