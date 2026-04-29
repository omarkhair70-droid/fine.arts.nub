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
    <main className="min-h-screen bg-stone-50 px-4 py-6 text-stone-900">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
        <h1 className="text-2xl font-semibold">Emergency Mode</h1>

        <section className="rounded-lg border border-stone-200 bg-white p-4">
          <form className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Field label="Department">
              <select value={form.department} onChange={(e) => setForm((prev) => ({ ...prev, department: e.target.value as Department }))} className="w-full rounded-md border border-stone-300 bg-white px-3 py-2">
                {departments.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </Field>

            <Field label="Project Format">
              <select value={form.projectFormat} onChange={(e) => setForm((prev) => ({ ...prev, projectFormat: e.target.value as ProjectFormat }))} className="w-full rounded-md border border-stone-300 bg-white px-3 py-2">
                {projectFormats.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </Field>

            <Field label="Days Left">
              <input type="number" min={1} max={30} value={form.daysLeft} onChange={(e) => setForm((prev) => ({ ...prev, daysLeft: Math.max(1, Number(e.target.value) || 1) }))} className="w-full rounded-md border border-stone-300 bg-white px-3 py-2" />
            </Field>

            <Field label="Budget Level">
              <select value={form.budgetLevel} onChange={(e) => setForm((prev) => ({ ...prev, budgetLevel: e.target.value as BudgetLevel }))} className="w-full rounded-md border border-stone-300 bg-white px-3 py-2">
                {budgetLevels.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </Field>

            <Field label="Experience Level">
              <select value={form.experienceLevel} onChange={(e) => setForm((prev) => ({ ...prev, experienceLevel: e.target.value as ExperienceLevel }))} className="w-full rounded-md border border-stone-300 bg-white px-3 py-2">
                {experienceLevels.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </Field>

            <Field label="Mood (optional)">
              <select value={form.mood ?? ""} onChange={(e) => setForm((prev) => ({ ...prev, mood: (e.target.value || undefined) as Mood | undefined }))} className="w-full rounded-md border border-stone-300 bg-white px-3 py-2">
                <option value="">none</option>
                {moods.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </Field>
          </form>
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
