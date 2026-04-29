import { generateEmergencyPlan } from "@/lib/generators/generateEmergencyPlan";
export default function EmergencyPage(){const data=generateEmergencyPlan({department:"graphic",projectFormat:"poster",daysLeft:2,budgetLevel:"low",experienceLevel:"beginner",mood:"tension"});return <main><h1>Emergency</h1><pre>{JSON.stringify(data,null,2)}</pre></main>;}
