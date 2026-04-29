"use client";

import { useMemo, useState } from "react";

import { generateEmergencyPlan } from "@/lib/generators/generateEmergencyPlan";
import type { EmergencyInput } from "@/types/emergency";
import type { BudgetLevel, Department, ExperienceLevel, Mood, ProjectFormat } from "@/types/taxonomy";

const departments: Department[] = ["graphic", "decor", "painting", "drawing", "sculpture", "ceramics", "photography", "general"];
const projectFormats: ProjectFormat[] = ["painting", "poster", "campaign", "space", "model", "sculpture", "installation", "photography", "presentation"];
const budgetLevels: BudgetLevel[] = ["very-low", "low", "medium", "open"];
const experienceLevels: ExperienceLevel[] = ["beginner", "intermediate", "advanced"];
const moods: Mood[] = ["sadness", "nostalgia", "tension", "chaos", "hope", "identity", "city", "childhood", "isolation", "memory"];

const departmentLabels: Record<Department, string> = {
  graphic: "جرافيك",
  decor: "ديكور",
  painting: "تصوير",
  drawing: "رسم",
  sculpture: "نحت",
  ceramics: "خزف",
  photography: "تصوير فوتوغرافي",
  general: "عام"
};

const formatLabels: Record<ProjectFormat, string> = {
  painting: "لوحة",
  poster: "بوستر",
  campaign: "حملة",
  space: "فراغ",
  model: "ماكيت",
  sculpture: "مجسم",
  installation: "تركيب",
  photography: "تصوير",
  presentation: "عرض"
};

const budgetLabels: Record<BudgetLevel, string> = {
  "very-low": "قليلة جدًا",
  low: "قليلة",
  medium: "متوسطة",
  open: "مفتوحة"
};

const experienceLabels: Record<ExperienceLevel, string> = {
  beginner: "مبتدئ",
  intermediate: "متوسط",
  advanced: "متقدم"
};

const moodLabels: Record<Mood, string> = {
  sadness: "حزن",
  nostalgia: "نوستالجيا",
  tension: "توتر",
  chaos: "فوضى",
  hope: "أمل",
  identity: "هوية",
  city: "مدينة",
  childhood: "طفولة",
  isolation: "عزلة",
  memory: "ذاكرة"
};

export default function EmergencyPage() {
  const [form, setForm] = useState<EmergencyInput>({
    department: "graphic",
    projectFormat: "poster",
    daysLeft: 1,
    budgetLevel: "low",
    experienceLevel: "beginner",
    mood: "tension"
  });

  const plan = useMemo(() => generateEmergencyPlan(form), [form]);

  return (
    <main dir="rtl" className="min-h-screen bg-stone-50 px-4 py-6 text-stone-900">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
        <header className="space-y-2">
          <h1 className="text-2xl font-semibold">عندي تسليم بكرة</h1>
          <p className="text-sm text-stone-700">جاوب على كام سؤال سريع، وStudio Rescue يطلعلك خطة إنقاذ عملية: تبدأ بإيه، تستخدم خامات إيه، وتشرح شغلك إزاي قدام اللجنة.</p>
        </header>

        <section className="rounded-lg border border-stone-200 bg-white p-4">
          <form className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Field label="القسم">
              <select value={form.department} onChange={(e) => setForm((prev) => ({ ...prev, department: e.target.value as Department }))} className="w-full rounded-md border border-stone-300 bg-white px-3 py-2">
                {departments.map((option) => (
                  <option key={option} value={option}>{departmentLabels[option]}</option>
                ))}
              </select>
            </Field>

            <Field label="نوع التسليم">
              <select value={form.projectFormat} onChange={(e) => setForm((prev) => ({ ...prev, projectFormat: e.target.value as ProjectFormat }))} className="w-full rounded-md border border-stone-300 bg-white px-3 py-2">
                {projectFormats.map((option) => (
                  <option key={option} value={option}>{formatLabels[option]}</option>
                ))}
              </select>
            </Field>

            <Field label="فاضل كام يوم؟">
              <input type="number" min={1} max={30} value={form.daysLeft} onChange={(e) => setForm((prev) => ({ ...prev, daysLeft: Math.max(1, Number(e.target.value) || 1) }))} className="w-full rounded-md border border-stone-300 bg-white px-3 py-2" />
            </Field>

            <Field label="الميزانية">
              <select value={form.budgetLevel} onChange={(e) => setForm((prev) => ({ ...prev, budgetLevel: e.target.value as BudgetLevel }))} className="w-full rounded-md border border-stone-300 bg-white px-3 py-2">
                {budgetLevels.map((option) => (
                  <option key={option} value={option}>{budgetLabels[option]}</option>
                ))}
              </select>
            </Field>

            <Field label="مستواك">
              <select value={form.experienceLevel} onChange={(e) => setForm((prev) => ({ ...prev, experienceLevel: e.target.value as ExperienceLevel }))} className="w-full rounded-md border border-stone-300 bg-white px-3 py-2">
                {experienceLevels.map((option) => (
                  <option key={option} value={option}>{experienceLabels[option]}</option>
                ))}
              </select>
            </Field>

            <Field label="الإحساس / المزاج">
              <select value={form.mood ?? ""} onChange={(e) => setForm((prev) => ({ ...prev, mood: (e.target.value || undefined) as Mood | undefined }))} className="w-full rounded-md border border-stone-300 bg-white px-3 py-2">
                <option value="">بدون</option>
                {moods.map((option) => (
                  <option key={option} value={option}>{moodLabels[option]}</option>
                ))}
              </select>
            </Field>
          </form>
          <p className="mt-3 text-xs text-stone-600">النتيجة بتتحدث تلقائيًا حسب اختياراتك.</p>
        </section>

        <Section title="Summary"><p>{plan.summary}</p></Section>
        <Section title="Do Now"><ul className="list-disc space-y-1 ps-5">{plan.doNow.map((item) => <li key={item}>{item}</li>)}</ul></Section>
        <Section title="Day Plan">
          <div className="space-y-3">{plan.dayPlan.map((block) => (
            <div key={block.title} className="rounded-md border border-stone-200 p-3">
              <h3 className="mb-2 font-medium">{block.title}</h3>
              <ul className="list-disc space-y-1 ps-5">{block.tasks.map((task) => <li key={task}>{task}</li>)}</ul>
            </div>
          ))}</div>
        </Section>
        <Section title="Materials"><ul className="space-y-2">{plan.materials.map((m) => <li key={m.name}><p className="font-medium">{m.name}</p><p className="text-sm">{m.reason}</p>{m.alternatives?.length ? <p className="text-sm text-stone-700">Alternatives: {m.alternatives.join("، ")}</p> : null}</li>)}</ul></Section>
        <Section title="Cheap Alternatives"><ul className="list-disc space-y-1 ps-5">{plan.cheapAlternatives.map((item) => <li key={item}>{item}</li>)}</ul></Section>
        <Section title="Presentation Order"><ol className="list-decimal space-y-1 ps-5">{plan.presentationOrder.map((item) => <li key={item}>{item}</li>)}</ol></Section>
        <Section title="Explain It Like This"><p>{plan.explainItLikeThis}</p></Section>
        <Section title="Jury Defense Line"><p>{plan.juryDefenseLine}</p></Section>
        <Section title="Common Mistakes"><ul className="space-y-3">{plan.commonMistakes.map((m) => <li key={m.mistake} className="rounded-md border border-stone-200 p-3"><p className="font-medium">{m.mistake}</p><p className="text-sm">Why it hurts: {m.whyItHurts}</p><p className="text-sm">Fix fast: {m.fixFast}</p></li>)}</ul></Section>
      </div>
    </main>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="space-y-1">
      <span className="text-sm font-medium">{label}</span>
      {children}
    </label>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-lg border border-stone-200 bg-white p-4">
      <h2 className="mb-3 text-lg font-semibold">{title}</h2>
      {children}
    </section>
  );
}
