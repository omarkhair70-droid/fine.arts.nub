"use client";

import { useMemo, useState } from "react";

import CopyButton from "@/components/CopyButton";
import ResultCard from "@/components/ResultCard";
import ToolPageShell from "@/components/ToolPageShell";
import ToolSection from "@/components/ToolSection";
import { generateStatement } from "@/lib/generators/generateStatement";
import { departmentLabels, departments, experienceLevelLabels, experienceLevels, moodLabels, moods, projectFormatLabels, projectFormats } from "@/lib/ui-labels";
import type { StatementInput } from "@/types/statement";
import type { Department, ExperienceLevel, Mood, ProjectFormat } from "@/types/taxonomy";

export default function StatementPage() {
  const [form, setForm] = useState<StatementInput>({
    department: "graphic",
    projectFormat: "poster",
    topic: "الهوية في الزحمة",
    material: "كولاج ورق مطبوع",
    colors: "درجات رمادي مع أحمر",
    mood: "identity",
    message: "إن الهوية بتتكوّن من تفاصيل يومية صغيرة",
    experienceLevel: "beginner"
  });

  const output = useMemo(() => generateStatement(form), [form]);

  return (
    <ToolPageShell title="اكتبلي شرح العمل" subtitle="حوّل فكرتك لكلام واضح ينفع يتقال في البريزنتيشن أو يتكتب كـ Artist Statement من غير ما يبان مصطنع.">
      <ToolSection title="بيانات مشروعك">
        <form className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Field label="القسم"><select value={form.department} onChange={(e) => setForm((p) => ({ ...p, department: e.target.value as Department }))} className="input">{departments.map((o) => <option key={o} value={o}>{departmentLabels[o]}</option>)}</select></Field>
          <Field label="نوع التسليم"><select value={form.projectFormat} onChange={(e) => setForm((p) => ({ ...p, projectFormat: e.target.value as ProjectFormat }))} className="input">{projectFormats.map((o) => <option key={o} value={o}>{projectFormatLabels[o]}</option>)}</select></Field>
          <Field label="موضوع العمل"><input value={form.topic} onChange={(e) => setForm((p) => ({ ...p, topic: e.target.value }))} className="input" /></Field>
          <Field label="الخامة"><input value={form.material} onChange={(e) => setForm((p) => ({ ...p, material: e.target.value }))} className="input" /></Field>
          <Field label="الألوان"><input value={form.colors} onChange={(e) => setForm((p) => ({ ...p, colors: e.target.value }))} className="input" /></Field>
          <Field label="الإحساس / المزاج"><select value={form.mood} onChange={(e) => setForm((p) => ({ ...p, mood: e.target.value as Mood }))} className="input">{moods.map((o) => <option key={o} value={o}>{moodLabels[o]}</option>)}</select></Field>
          <Field label="الرسالة"><input value={form.message} onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))} className="input" /></Field>
          <Field label="مستواك"><select value={form.experienceLevel} onChange={(e) => setForm((p) => ({ ...p, experienceLevel: e.target.value as ExperienceLevel }))} className="input">{experienceLevels.map((o) => <option key={o} value={o}>{experienceLevelLabels[o]}</option>)}</select></Field>
        </form>
      </ToolSection>

      <ToolSection title="عنوان مقترح"><div className="mb-2"><CopyButton text={output.suggestedTitle} /></div><ResultCard>{output.suggestedTitle}</ResultCard></ToolSection>
      <ToolSection title="نسخة قصيرة"><div className="mb-2"><CopyButton text={output.shortVersion} /></div><ResultCard>{output.shortVersion}</ResultCard></ToolSection>
      <ToolSection title="نسخة رسمية"><div className="mb-2"><CopyButton text={output.formalVersion} /></div><ResultCard>{output.formalVersion}</ResultCard></ToolSection>
      <ToolSection title="نسخة بالكلام العادي"><div className="mb-2"><CopyButton text={output.simpleSpokenVersion} /></div><ResultCard>{output.simpleSpokenVersion}</ResultCard></ToolSection>
      <ToolSection title="جملة للبريزنتيشن"><div className="mb-2"><CopyButton text={output.presentationLine} /></div><ResultCard>{output.presentationLine}</ResultCard></ToolSection>
      <ToolSection title="كلمات مفتاحية"><div className="flex flex-wrap gap-2">{output.keywords.map((k) => <span key={k} className="rounded-full border border-stone-300 bg-stone-50 px-3 py-1 text-sm">{k}</span>)}</div></ToolSection>
    </ToolPageShell>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="space-y-1"><span className="text-sm font-semibold">{label}</span>{children}</label>;
}
