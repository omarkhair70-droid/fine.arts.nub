import { generateStatement } from "@/lib/generators/generateStatement";
export default function StatementPage(){const data=generateStatement({department:"general",projectFormat:"presentation",topic:"الذاكرة"});return <main><h1>Statement</h1><pre>{JSON.stringify(data,null,2)}</pre></main>;}
