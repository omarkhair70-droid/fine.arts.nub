"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import CopyBlockButton from "@/components/CopyBlockButton";
import CopyButton from "@/components/CopyButton";
import ResultCard from "@/components/ResultCard";
import ToolPageShell from "@/components/ToolPageShell";
import ToolSection from "@/components/ToolSection";
import { generateJuryPrep } from "@/lib/generators/generateJuryPrep";
import { presets } from "@/lib/presets";
import { getSuitabilityLabel } from "@/lib/suitability";
import { buildToolUrl, readToolParams } from "@/lib/urlState";
export const dynamic = 'force-dynamic';

import type { JuryInput } from "@/types/jury";

export default function JuryPage(){const q=readToolParams(useSearchParams());const [form,setForm]=useState<JuryInput>({department:(q.department as any)||'graphic',projectFormat:(q.projectFormat as any)||'poster',topic:q.topic||'العزلة داخل الزحمة',material:q.material||'ورق مطبوع + كولاج',colors:q.colors||'درجات رمادي مع أحمر هادي',mood:(q.mood as any)||'isolation',experienceLevel:(q.experienceLevel as any)||'beginner'});const output=useMemo(()=>generateJuryPrep(form),[form]);
return <ToolPageShell title="هشرح شغلي للجنة" subtitle="حضّر إجاباتك قبل المناقشة."><p className='rounded-xl border bg-white px-4 py-3 text-sm'>استخدمها قبل اللجنة أو المناقشة عشان ترتب إجاباتك.</p><div className='flex flex-wrap gap-2'><span className='text-sm font-bold'>جرّب مثال سريع:</span>{[presets[0],presets[1],presets[2]].map(p=><Link key={p.id} href={buildToolUrl('/tools/jury',p.values)} className='rounded-full border px-3 py-1 text-xs'>{p.values.topic}</Link>)}</div><ToolSection title='افتتاحية'><CopyButton text={output.openingLine}/><p>{output.openingLine}</p></ToolSection><ToolSection title='النتيجة كاملة'><CopyBlockButton text={[output.openingLine,...output.strongestPoints,...output.riskyPoints,output.finalDefenseLine].join('\n')}/></ToolSection><ToolSection title='أسئلة متوقعة'>{output.questions.map((x)=><ResultCard key={x.id}><p className='font-bold'>{x.question}</p><p>{x.suggestedAnswer}</p><p className='text-xs text-rose-700'>مدى مناسبة النتيجة لحالتك: {getSuitabilityLabel(x.fitScore)}</p></ResultCard>)}</ToolSection><div className='flex flex-wrap gap-2'><Link href={buildToolUrl('/tools/statement',form)} className='rounded-lg border px-3 py-1 text-sm'>اكتبلي شرح العمل</Link><Link href={buildToolUrl('/tools/emergency',form)} className='rounded-lg border px-3 py-1 text-sm'>رجعني لخطة التسليم</Link></div></ToolPageShell>}
