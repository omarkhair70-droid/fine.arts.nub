"use client";

import { useMemo, useState } from "react";

import CopyButton from "@/components/CopyButton";
import NextStepActions from "@/components/NextStepActions";
import ResultCard from "@/components/ResultCard";
import ToolPageShell from "@/components/ToolPageShell";
import ToolSection from "@/components/ToolSection";
import { generateIdeas } from "@/lib/generators/generateIdeas";
import { getSuitabilityLabel } from "@/lib/suitability";
import { budgetLevelLabels, budgetLevels, departmentLabels, departments, experienceLevelLabels, experienceLevels, moodLabels, moods, projectFormatLabels, projectFormats } from "@/lib/ui-labels";
import type { IdeaInput } from "@/types/ideas";
import type { BudgetLevel, Department, ExperienceLevel, Mood, ProjectFormat } from "@/types/taxonomy";

export default function IdeasPage() {
  const [form, setForm] = useState<IdeaInput>({ department: "graphic", projectFormat: "poster", mood: "identity", budgetLevel: "low", experienceLevel: "beginner" });
  const output = useMemo(() => generateIdeas(form), [form]);

  return (
    <ToolPageShell title="عايز فكرة مشروع؟" subtitle="اختار القسم، نوع التسليم، والإحساس اللي عايز توصله — وStudio Rescue يطلعلك 3 أفكار قابلة للتنفيذ والدفاع قدام اللجنة.">
      <p className="rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm leading-7 text-stone-700">مثال: اختار “ديكور + مساحة + عزلة” لو عايز فكرة مشروع عن الفراغ أو الضغط النفسي.</p>
      <ToolSection title="اختياراتك">
        <p className="mb-2 text-xs font-semibold text-stone-600">اكتب ببساطة. مش لازم تكون الجملة مثالية.</p>
        <form className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Field label="القسم"><select value={form.department} onChange={(e) => setForm((p) => ({ ...p, department: e.target.value as Department }))} className="input">{departments.map((o) => <option key={o} value={o}>{departmentLabels[o]}</option>)}</select></Field>
          <Field label="نوع التسليم"><select value={form.projectFormat} onChange={(e) => setForm((p) => ({ ...p, projectFormat: e.target.value as ProjectFormat }))} className="input">{projectFormats.map((o) => <option key={o} value={o}>{projectFormatLabels[o]}</option>)}</select></Field>
          <Field label="الإحساس / المزاج"><select value={form.mood} onChange={(e) => setForm((p) => ({ ...p, mood: e.target.value as Mood }))} className="input">{moods.map((o) => <option key={o} value={o}>{moodLabels[o]}</option>)}</select></Field>
          <Field label="الميزانية"><select value={form.budgetLevel} onChange={(e) => setForm((p) => ({ ...p, budgetLevel: e.target.value as BudgetLevel }))} className="input">{budgetLevels.map((o) => <option key={o} value={o}>{budgetLevelLabels[o]}</option>)}</select></Field>
          <Field label="مستواك"><select value={form.experienceLevel} onChange={(e) => setForm((p) => ({ ...p, experienceLevel: e.target.value as ExperienceLevel }))} className="input">{experienceLevels.map((o) => <option key={o} value={o}>{experienceLevelLabels[o]}</option>)}</select></Field>
        </form>
      </ToolSection>
      <ToolSection title="الملخص"><p className="leading-7">{output.summary}</p></ToolSection>
      <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-7 text-emerald-800">اختار فكرة واحدة بس وطورها. متحاولش تنفذ كل حاجة مرة واحدة.</p>
      <ToolSection title="الأفكار المقترحة">
        <div className="space-y-3">{output.ideas.map((idea) => <ResultCard key={idea.id}><p className="text-lg font-extrabold">{idea.title}</p><p className="mt-2"><span className="font-bold">الكونسبت: </span>{idea.concept}</p><p><span className="font-bold">الخامات: </span>{idea.materials.join("، ")}</p><div><p className="font-bold">طريقة التنفيذ</p><ul className="list-disc ps-5">{idea.executionMethod.map((item) => <li key={item}>{item}</li>)}</ul></div><p><span className="font-bold">ليه الفكرة قوية؟ </span>{idea.whyStrong}</p><p><span className="font-bold">جملة شرح قصيرة: </span>{idea.shortExplanation}</p><CopyButton text={idea.shortExplanation} /><p className="mt-2"><span className="font-bold">جملة دفاع قدام اللجنة: </span>{idea.juryDefenseLine}</p><CopyButton text={idea.juryDefenseLine} /><p className="mt-2 text-sm font-bold text-rose-700">درجة الملاءمة: {getSuitabilityLabel(idea.fitScore)}</p></ResultCard>)}</div>
      </ToolSection>
      <NextStepActions actions={[{ label: "جهزني للجنة", href: "/tools/jury" }, { label: "اكتبلي شرح العمل", href: "/tools/statement" }, { label: "اعمل خطة إنقاذ", href: "/tools/emergency" }]} />
    </ToolPageShell>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="space-y-1"><span className="text-sm font-semibold">{label}</span>{children}</label>;
}
