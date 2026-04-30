"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import CopyBlockButton from "@/components/CopyBlockButton";
import CopyButton from "@/components/CopyButton";
import ResultCard from "@/components/ResultCard";
import ToolPageShell from "@/components/ToolPageShell";
import ToolSection from "@/components/ToolSection";
import { generateStatement } from "@/lib/generators/generateStatement";
import { presets } from "@/lib/presets";
import { buildToolUrl, readToolParams } from "@/lib/urlState";
export const dynamic = 'force-dynamic';

import type { StatementInput } from "@/types/statement";

export default function StatementClient(){const q=readToolParams(useSearchParams());const [form]=useState<StatementInput>({department:(q.department as any)||'graphic',projectFormat:(q.projectFormat as any)||'poster',topic:q.topic||'الهوية في الزحمة',material:q.material||'كولاج ورق مطبوع',colors:q.colors||'درجات رمادي مع أحمر',mood:(q.mood as any)||'identity',message:q.message||'إن الهوية بتتكوّن من تفاصيل يومية صغيرة',experienceLevel:(q.experienceLevel as any)||'beginner'});const output=useMemo(()=>generateStatement(form),[form]);
return <ToolPageShell title='شرح العمل / Artist Statement' subtitle='حوّل فكرتك لكلام واضح.'><p className='rounded-xl border bg-white px-4 py-3 text-sm'>استخدمها لما تكون عارف فكرتك بس مش عارف تشرحها كتابة.</p><div className='flex flex-wrap gap-2'><span className='text-sm font-bold'>جرّب مثال سريع:</span><Link href={buildToolUrl('/tools/statement',{...presets[0].values,topic:'هوية في الزحمة'})} className='rounded-full border px-3 py-1 text-xs'>هوية في الزحمة</Link><Link href={buildToolUrl('/tools/statement',presets[2].values)} className='rounded-full border px-3 py-1 text-xs'>البيت القديم</Link><Link href={buildToolUrl('/tools/statement',presets[3].values)} className='rounded-full border px-3 py-1 text-xs'>ضوء آخر اليوم</Link></div><ToolSection title='نسخة قصيرة'><CopyButton text={output.shortVersion}/><ResultCard>{output.shortVersion}</ResultCard></ToolSection><ToolSection title='النتيجة كاملة'><CopyBlockButton text={[output.suggestedTitle,output.shortVersion,output.formalVersion,output.simpleSpokenVersion,output.presentationLine].join('\n\n')}/></ToolSection><div className='flex flex-wrap gap-2'><Link href={buildToolUrl('/tools/jury',form)} className='rounded-lg border px-3 py-1 text-sm'>جهزني للجنة</Link><Link href={buildToolUrl('/tools/emergency',form)} className='rounded-lg border px-3 py-1 text-sm'>اعمل خطة إنقاذ</Link></div></ToolPageShell>}
