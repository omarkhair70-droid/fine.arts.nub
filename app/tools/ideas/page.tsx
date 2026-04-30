"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import CopyBlockButton from "@/components/CopyBlockButton";
import CopyButton from "@/components/CopyButton";
import ResultCard from "@/components/ResultCard";
import ToolPageShell from "@/components/ToolPageShell";
import ToolSection from "@/components/ToolSection";
import { generateIdeas } from "@/lib/generators/generateIdeas";
import { presets } from "@/lib/presets";
import { getSuitabilityLabel } from "@/lib/suitability";
import { budgetLevelLabels, budgetLevels, departmentLabels, departments, experienceLevelLabels, experienceLevels, moodLabels, moods, projectFormatLabels, projectFormats } from "@/lib/ui-labels";
import { buildToolUrl, readToolParams } from "@/lib/urlState";
export const dynamic = 'force-dynamic';

import type { IdeaInput } from "@/types/ideas";
import type { BudgetLevel, Department, ExperienceLevel, Mood, ProjectFormat } from "@/types/taxonomy";

export default function IdeasPage() {
  const initial = readToolParams(useSearchParams());
  const [form, setForm] = useState<IdeaInput>({ department: (initial.department as Department) || "graphic", projectFormat: (initial.projectFormat as ProjectFormat) || "poster", mood: (initial.mood as Mood) || "identity", budgetLevel: (initial.budgetLevel as BudgetLevel) || "low", experienceLevel: (initial.experienceLevel as ExperienceLevel) || "beginner" });
  const output = useMemo(() => generateIdeas(form), [form]);
  return <ToolPageShell title="عايز فكرة مشروع؟" subtitle="اختار القسم والمزاج وخد أفكار تبدأ منها فورًا.">
    <p className="rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm">استخدمها لو دماغك واقفة ومحتاج فكرة تبدأ منها.</p>
    <div className="flex flex-wrap gap-2"><span className="text-sm font-bold">جرّب مثال سريع:</span><Link href={buildToolUrl('/tools/ideas',presets[1].values)} className='rounded-full border px-3 py-1 text-xs'>ديكور + عزلة</Link><Link href={buildToolUrl('/tools/ideas',{...presets[0].values,mood:'identity'})} className='rounded-full border px-3 py-1 text-xs'>جرافيك + هوية</Link><Link href={buildToolUrl('/tools/ideas',presets[3].values)} className='rounded-full border px-3 py-1 text-xs'>تصوير + نوستالجيا</Link></div>
    <ToolSection title="اختياراتك"><form className="grid grid-cols-1 gap-3 sm:grid-cols-2"><label className="space-y-1"><span className="text-sm font-semibold">القسم</span><select value={form.department} onChange={(e)=>setForm((p)=>({...p,department:e.target.value as Department}))} className="input">{departments.map((o)=><option key={o} value={o}>{departmentLabels[o]}</option>)}</select></label><label className="space-y-1"><span className="text-sm font-semibold">نوع التسليم</span><select value={form.projectFormat} onChange={(e)=>setForm((p)=>({...p,projectFormat:e.target.value as ProjectFormat}))} className="input">{projectFormats.map((o)=><option key={o} value={o}>{projectFormatLabels[o]}</option>)}</select></label><label className="space-y-1"><span className="text-sm font-semibold">المزاج</span><select value={form.mood} onChange={(e)=>setForm((p)=>({...p,mood:e.target.value as Mood}))} className="input">{moods.map((o)=><option key={o} value={o}>{moodLabels[o]}</option>)}</select></label><label className="space-y-1"><span className="text-sm font-semibold">الميزانية</span><select value={form.budgetLevel} onChange={(e)=>setForm((p)=>({...p,budgetLevel:e.target.value as BudgetLevel}))} className="input">{budgetLevels.map((o)=><option key={o} value={o}>{budgetLevelLabels[o]}</option>)}</select></label><label className="space-y-1"><span className="text-sm font-semibold">مستواك</span><select value={form.experienceLevel} onChange={(e)=>setForm((p)=>({...p,experienceLevel:e.target.value as ExperienceLevel}))} className="input">{experienceLevels.map((o)=><option key={o} value={o}>{experienceLevelLabels[o]}</option>)}</select></label></form></ToolSection>
    <ToolSection title="الأفكار المقترحة"><div className='space-y-3'>{output.ideas.map((idea)=><ResultCard key={idea.id}><p className='text-lg font-extrabold'>{idea.title}</p><p>{idea.concept}</p><p>{idea.materials.join('، ')}</p><CopyButton text={idea.shortExplanation}/><CopyBlockButton label='انسخ الفكرة' text={[idea.title,idea.concept,idea.materials.join('، '),idea.shortExplanation,idea.juryDefenseLine].join('\n')}/><p className='text-sm text-rose-700 font-bold'>مدى مناسبة النتيجة لحالتك: {getSuitabilityLabel(idea.fitScore)}</p><div className='mt-3 flex flex-wrap gap-2'><Link href={buildToolUrl('/tools/jury',{topic:idea.title||idea.concept,material:idea.materials.join('، '),mood:form.mood,department:form.department,projectFormat:form.projectFormat})} className='rounded-lg border px-3 py-1 text-xs'>جهزني للجنة</Link><Link href={buildToolUrl('/tools/statement',{topic:idea.title||idea.concept,material:idea.materials.join('، '),mood:form.mood,department:form.department,projectFormat:form.projectFormat,message:idea.shortExplanation})} className='rounded-lg border px-3 py-1 text-xs'>اكتبلي شرح العمل</Link><Link href={buildToolUrl('/tools/emergency',{department:form.department,projectFormat:form.projectFormat,mood:form.mood,budgetLevel:form.budgetLevel,experienceLevel:form.experienceLevel})} className='rounded-lg border px-3 py-1 text-xs'>اعمل خطة إنقاذ</Link></div></ResultCard>)}</div></ToolSection>
  </ToolPageShell>;
}
