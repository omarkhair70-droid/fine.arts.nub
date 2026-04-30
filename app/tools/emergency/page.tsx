"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import CopyBlockButton from "@/components/CopyBlockButton";
import ToolPageShell from "@/components/ToolPageShell";
import ToolSection from "@/components/ToolSection";
import { generateEmergencyPlan } from "@/lib/generators/generateEmergencyPlan";
import { presets } from "@/lib/presets";
import { budgetLevelLabels, budgetLevels, departmentLabels, departments, experienceLevelLabels, experienceLevels, moodLabels, moods, projectFormatLabels, projectFormats } from "@/lib/ui-labels";
import { buildToolUrl, readToolParams } from "@/lib/urlState";
export const dynamic = 'force-dynamic';

import type { EmergencyInput } from "@/types/emergency";
import type { BudgetLevel, Department, ExperienceLevel, Mood, ProjectFormat } from "@/types/taxonomy";

export default function EmergencyPage(){const q=readToolParams(useSearchParams());const [form,setForm]=useState<EmergencyInput>({department:(q.department as Department)||'graphic',projectFormat:(q.projectFormat as ProjectFormat)||'poster',daysLeft:Math.max(1,Number(q.daysLeft)||1),budgetLevel:(q.budgetLevel as BudgetLevel)||'low',experienceLevel:(q.experienceLevel as ExperienceLevel)||'beginner',mood:(q.mood as Mood)||'tension'});const plan=useMemo(()=>generateEmergencyPlan(form),[form]);
return <ToolPageShell title='عندي تسليم بكرة' subtitle='خطة إنقاذ واضحة قبل التسليم.'><p className='rounded-xl border bg-white px-4 py-3 text-sm'>استخدمها لو التسليم قريب ومحتاج خطة تمشي عليها بدل التوتر.</p><div className='flex flex-wrap gap-2'><span className='text-sm font-bold'>جرّب مثال سريع:</span>{presets.slice(0,3).map((x,i)=><Link key={x.id} href={buildToolUrl('/tools/emergency',x.values)} className='rounded-full border px-3 py-1 text-xs'>{['بوستر بكرة','أوضة مقفولة','البيت القديم'][i]}</Link>)}</div>
<ToolSection title='البيانات الأساسية'><form className='grid grid-cols-1 gap-3 sm:grid-cols-2'><select value={form.department} onChange={(e)=>setForm((p)=>({...p,department:e.target.value as Department}))} className='input'>{departments.map((o)=><option key={o} value={o}>{departmentLabels[o]}</option>)}</select><select value={form.projectFormat} onChange={(e)=>setForm((p)=>({...p,projectFormat:e.target.value as ProjectFormat}))} className='input'>{projectFormats.map((o)=><option key={o} value={o}>{projectFormatLabels[o]}</option>)}</select><input type='number' min={1} value={form.daysLeft} onChange={(e)=>setForm((p)=>({...p,daysLeft:Math.max(1,Number(e.target.value)||1)}))} className='input'/><select value={form.budgetLevel} onChange={(e)=>setForm((p)=>({...p,budgetLevel:e.target.value as BudgetLevel}))} className='input'>{budgetLevels.map((o)=><option key={o} value={o}>{budgetLevelLabels[o]}</option>)}</select><select value={form.experienceLevel} onChange={(e)=>setForm((p)=>({...p,experienceLevel:e.target.value as ExperienceLevel}))} className='input'>{experienceLevels.map((o)=><option key={o} value={o}>{experienceLevelLabels[o]}</option>)}</select><select value={form.mood||''} onChange={(e)=>setForm((p)=>({...p,mood:(e.target.value as Mood)||undefined}))} className='input'><option value=''>بدون</option>{moods.map((o)=><option key={o} value={o}>{moodLabels[o]}</option>)}</select></form></ToolSection>
<ToolSection title='الخلاصة'><CopyBlockButton text={[plan.summary,...plan.doNow,plan.juryDefenseLine].join('\n')} /><p className='mt-2'>{plan.summary}</p></ToolSection><div className='flex flex-wrap gap-2'><Link href={buildToolUrl('/tools/ideas',form)} className='rounded-lg border px-3 py-1 text-sm'>عايز فكرة مشروع؟</Link><Link href={buildToolUrl('/tools/jury',form)} className='rounded-lg border px-3 py-1 text-sm'>جهزني للجنة</Link><Link href={buildToolUrl('/tools/statement',form)} className='rounded-lg border px-3 py-1 text-sm'>اكتبلي شرح العمل</Link></div></ToolPageShell>}
