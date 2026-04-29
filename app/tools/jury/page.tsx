import { generateJuryPrep } from "@/lib/generators/generateJuryPrep";
export default function JuryPage(){const data=generateJuryPrep({department:"general",projectFormat:"presentation",topic:"الهوية"});return <main><h1>Jury</h1><pre>{JSON.stringify(data,null,2)}</pre></main>;}
