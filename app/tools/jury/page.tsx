import { generateJuryPrep } from "@/lib/generators/generateJuryPrep";

export default function JuryPage() {
  const output = generateJuryPrep();
  return <pre>{JSON.stringify(output, null, 2)}</pre>;
}
