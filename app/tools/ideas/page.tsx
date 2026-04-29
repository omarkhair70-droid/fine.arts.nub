"use client";

import { useMemo, useState } from "react";
import { generateIdeas } from "@/lib/generators/generateIdeas";
import type { IdeaInput } from "@/types/ideas";
import type {
  BudgetLevel,
  Department,
  ExperienceLevel,
  Mood,
  ProjectFormat
} from "@/types/taxonomy";

const departmentOptions: { value: Department; label: string }[] = [
  { value: "graphic", label: "جرافيك" },
  { value: "decor", label: "ديكور" },
  { value: "painting", label: "تصوير زيتي" },
  { value: "drawing", label: "رسم" },
  { value: "sculpture", label: "نحت" },
  { value: "ceramics", label: "خزف" },
  { value: "photography", label: "تصوير فوتوغرافي" },
  { value: "general", label: "عام" }
];

const projectFormatOptions: { value: ProjectFormat; label: string }[] = [
  { value: "painting", label: "لوحة" },
  { value: "poster", label: "بوستر" },
  { value: "campaign", label: "حملة" },
  { value: "space", label: "فراغ / مساحة" },
  { value: "model", label: "ماكيت" },
  { value: "sculpture", label: "مجسّم" },
  { value: "installation", label: "تركيب" },
  { value: "photography", label: "تصوير" },
  { value: "presentation", label: "عرض تقديمي" }
];

const moodOptions: { value: Mood; label: string }[] = [
  { value: "sadness", label: "حزن" },
  { value: "nostalgia", label: "نوستالجيا" },
  { value: "tension", label: "توتر" },
  { value: "chaos", label: "فوضى" },
  { value: "hope", label: "أمل" },
  { value: "identity", label: "هوية" },
  { value: "city", label: "المدينة" },
  { value: "childhood", label: "الطفولة" },
  { value: "isolation", label: "عزلة" },
  { value: "memory", label: "ذاكرة" }
];

const budgetOptions: { value: BudgetLevel; label: string }[] = [
  { value: "very-low", label: "منخفض جدًا" },
  { value: "low", label: "منخفض" },
  { value: "medium", label: "متوسط" },
  { value: "open", label: "مفتوح" }
];

const experienceOptions: { value: ExperienceLevel; label: string }[] = [
  { value: "beginner", label: "مبتدئ" },
  { value: "intermediate", label: "متوسط" },
  { value: "advanced", label: "متقدم" }
];

export default function IdeasPage() {
  const [input, setInput] = useState<IdeaInput>({
    department: "graphic",
    projectFormat: "poster",
    mood: "identity",
    budgetLevel: "low",
    experienceLevel: "beginner"
  });

  const output = useMemo(() => generateIdeas(input), [input]);

  return (
    <main className="min-h-screen bg-stone-50 px-4 py-8 text-stone-900" dir="rtl">
      <div className="mx-auto max-w-3xl space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold">عايز فكرة مشروع؟</h1>
          <p className="text-sm leading-6 text-stone-700">
            اختار القسم، نوع التسليم، والإحساس اللي عايز توصله — وStudio Rescue يطلعلك 3
            أفكار قابلة للتنفيذ والدفاع قدام اللجنة.
          </p>
        </header>

        <section className="rounded-xl border border-stone-200 bg-white p-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="space-y-1 text-sm">
              <span className="font-medium">القسم</span>
              <select
                className="w-full rounded-md border border-stone-300 bg-white px-3 py-2"
                value={input.department}
                onChange={(event) =>
                  setInput((prev) => ({ ...prev, department: event.target.value as Department }))
                }
              >
                {departmentOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="space-y-1 text-sm">
              <span className="font-medium">نوع التسليم</span>
              <select
                className="w-full rounded-md border border-stone-300 bg-white px-3 py-2"
                value={input.projectFormat}
                onChange={(event) =>
                  setInput((prev) => ({
                    ...prev,
                    projectFormat: event.target.value as ProjectFormat
                  }))
                }
              >
                {projectFormatOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="space-y-1 text-sm">
              <span className="font-medium">الإحساس / المزاج</span>
              <select
                className="w-full rounded-md border border-stone-300 bg-white px-3 py-2"
                value={input.mood}
                onChange={(event) =>
                  setInput((prev) => ({ ...prev, mood: event.target.value as Mood }))
                }
              >
                {moodOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="space-y-1 text-sm">
              <span className="font-medium">الميزانية</span>
              <select
                className="w-full rounded-md border border-stone-300 bg-white px-3 py-2"
                value={input.budgetLevel}
                onChange={(event) =>
                  setInput((prev) => ({ ...prev, budgetLevel: event.target.value as BudgetLevel }))
                }
              >
                {budgetOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="space-y-1 text-sm sm:col-span-2">
              <span className="font-medium">مستوى الخبرة</span>
              <select
                className="w-full rounded-md border border-stone-300 bg-white px-3 py-2"
                value={input.experienceLevel}
                onChange={(event) =>
                  setInput((prev) => ({
                    ...prev,
                    experienceLevel: event.target.value as ExperienceLevel
                  }))
                }
              >
                {experienceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">الملخص</h2>
          <div className="rounded-xl border border-stone-200 bg-white p-4 text-sm leading-6">
            {output.summary}
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">الأفكار المقترحة</h2>
          <div className="space-y-3">
            {output.ideas.map((idea) => (
              <article key={idea.id} className="rounded-xl border border-stone-200 bg-white p-4">
                <h3 className="text-lg font-bold">{idea.title}</h3>
                <dl className="mt-3 space-y-2 text-sm leading-6">
                  <div>
                    <dt className="font-semibold">العنوان</dt>
                    <dd>{idea.title}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">الكونسبت</dt>
                    <dd>{idea.concept}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">الخامات</dt>
                    <dd>{idea.materials.join("، ")}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">طريقة التنفيذ</dt>
                    <dd>{idea.executionMethod.join("، ")}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">ليه الفكرة قوية؟</dt>
                    <dd>{idea.whyStrong}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">جملة شرح قصيرة</dt>
                    <dd>{idea.shortExplanation}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">جملة دفاع قدام اللجنة</dt>
                    <dd>{idea.juryDefenseLine}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">نسبة الملاءمة</dt>
                    <dd>{idea.fitScore}%</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
