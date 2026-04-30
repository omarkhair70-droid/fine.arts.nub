"use client";

import { useMemo, useState } from "react";

import CopyButton from "@/components/CopyButton";
import NextStepActions from "@/components/NextStepActions";
import ResultCard from "@/components/ResultCard";
import ToolPageShell from "@/components/ToolPageShell";
import ToolSection from "@/components/ToolSection";
import { budgetLevelLabels, budgetLevels, departmentLabels, departments, experienceLevelLabels, experienceLevels, moodLabels, moods, projectFormatLabels, projectFormats } from "@/lib/ui-labels";
import { generateEmergencyPlan } from "@/lib/generators/generateEmergencyPlan";
import type { EmergencyInput } from "@/types/emergency";
import type { BudgetLevel, Department, ExperienceLevel, Mood, ProjectFormat } from "@/types/taxonomy";

export default function EmergencyPage() {
  const [form, setForm] = useState<EmergencyInput>({ department: "graphic", projectFormat: "poster", daysLeft: 1, budgetLevel: "low", experienceLevel: "beginner", mood: "tension" });
  const plan = useMemo(() => generateEmergencyPlan(form), [form]);

  return (
    <ToolPageShell title="عندي تسليم بكرة" subtitle="جاوب على كام سؤال، وهنطلعلك خطة إنقاذ واضحة: تبدأ بإيه، تستخدم خامات إيه، وتشرح شغلك إزاي قدام اللجنة.">
      <p className="rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm leading-7 text-stone-700">مثال: جرافيك + بوستر + فاضل يوم + ميزانية قليلة = خطة سريعة تبدأ بيها فورًا.</p>
      <ToolSection title="البيانات الأساسية">
        <p className="mb-2 text-xs font-semibold text-stone-600">اكتب ببساطة. مش لازم تكون الجملة مثالية.</p>
        <form className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Field label="القسم"><select value={form.department} onChange={(e) => setForm((prev) => ({ ...prev, department: e.target.value as Department }))} className="input">{departments.map((o) => <option key={o} value={o}>{departmentLabels[o]}</option>)}</select></Field>
          <Field label="نوع التسليم"><select value={form.projectFormat} onChange={(e) => setForm((prev) => ({ ...prev, projectFormat: e.target.value as ProjectFormat }))} className="input">{projectFormats.map((o) => <option key={o} value={o}>{projectFormatLabels[o]}</option>)}</select></Field>
          <Field label="فاضل كام يوم؟"><input type="number" min={1} max={30} value={form.daysLeft} onChange={(e) => setForm((prev) => ({ ...prev, daysLeft: Math.max(1, Number(e.target.value) || 1) }))} className="input" /></Field>
          <Field label="الميزانية"><select value={form.budgetLevel} onChange={(e) => setForm((prev) => ({ ...prev, budgetLevel: e.target.value as BudgetLevel }))} className="input">{budgetLevels.map((o) => <option key={o} value={o}>{budgetLevelLabels[o]}</option>)}</select></Field>
          <Field label="مستواك"><select value={form.experienceLevel} onChange={(e) => setForm((prev) => ({ ...prev, experienceLevel: e.target.value as ExperienceLevel }))} className="input">{experienceLevels.map((o) => <option key={o} value={o}>{experienceLevelLabels[o]}</option>)}</select></Field>
          <Field label="الإحساس / المزاج"><select value={form.mood ?? ""} onChange={(e) => setForm((prev) => ({ ...prev, mood: (e.target.value || undefined) as Mood | undefined }))} className="input"><option value="">بدون</option>{moods.map((o) => <option key={o} value={o}>{moodLabels[o]}</option>)}</select></Field>
        </form>
      </ToolSection>

      <ToolSection title="الخلاصة"><p className="leading-7">{plan.summary}</p></ToolSection>
      <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-7 text-emerald-800">متقلقش. الهدف هنا مش الكمال — الهدف إنك تطلع نسخة واضحة تتسلم.</p>
      <ToolSection title="ابدأ دلوقتي"><ul className="list-disc space-y-1 ps-5">{plan.doNow.map((item) => <li key={item}>{item}</li>)}</ul></ToolSection>
      <ToolSection title="خطة اليوم">{plan.dayPlan.map((b) => <ResultCard key={b.title}><h3 className="font-bold">{b.title}</h3><ul className="mt-2 list-disc space-y-1 ps-5">{b.tasks.map((t) => <li key={t}>{t}</li>)}</ul></ResultCard>)}</ToolSection>
      <ToolSection title="الخامات"><ul className="space-y-2">{plan.materials.map((m) => <li key={m.name}><p className="font-bold">{m.name}</p><p className="text-sm">{m.reason}</p>{m.alternatives?.length ? <p className="text-sm text-stone-700">بدائل: {m.alternatives.join("، ")}</p> : null}</li>)}</ul></ToolSection>
      <ToolSection title="بدائل أوفر"><ul className="list-disc space-y-1 ps-5">{plan.cheapAlternatives.map((item) => <li key={item}>{item}</li>)}</ul></ToolSection>
      <ToolSection title="ترتيب العرض"><ol className="list-decimal space-y-1 ps-5">{plan.presentationOrder.map((item) => <li key={item}>{item}</li>)}</ol></ToolSection>
      <ToolSection title="قولها كده"><div className="mb-2"><CopyButton text={plan.explainItLikeThis} /></div><p>{plan.explainItLikeThis}</p></ToolSection>
      <ToolSection title="جملة دفاع قدام اللجنة"><div className="mb-2"><CopyButton text={plan.juryDefenseLine} /></div><p>{plan.juryDefenseLine}</p></ToolSection>
      <ToolSection title="أخطاء بلاش تقع فيها">{plan.commonMistakes.map((m) => <ResultCard key={m.mistake}><p className="font-bold">{m.mistake}</p><p className="text-sm">ليه بتضر: {m.whyItHurts}</p><p className="text-sm">الحل السريع: {m.fixFast}</p></ResultCard>)}</ToolSection>
      <NextStepActions actions={[{ label: "عايز فكرة مشروع؟", href: "/tools/ideas" }, { label: "جهزني للجنة", href: "/tools/jury" }, { label: "اكتبلي شرح العمل", href: "/tools/statement" }]} />
    </ToolPageShell>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="space-y-1"><span className="text-sm font-semibold">{label}</span>{children}</label>;
}
