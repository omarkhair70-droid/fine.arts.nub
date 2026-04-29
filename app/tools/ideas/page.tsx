import { generateIdeas } from "@/lib/generators/generateIdeas";
export default function IdeasPage(){const data=generateIdeas({department:"graphic",mood:"memory",projectFormat:"poster",budgetLevel:"low",experienceLevel:"beginner"});return <main><h1>Ideas</h1><pre>{JSON.stringify(data,null,2)}</pre></main>;}
