"use client";

import { useMemo, useState } from "react";

import CopyButton from "@/components/CopyButton";
import NextStepActions from "@/components/NextStepActions";
import ResultCard from "@/components/ResultCard";
import ToolPageShell from "@/components/ToolPageShell";
import ToolSection from "@/components/ToolSection";
import { generateJuryPrep } from "@/lib/generators/generateJuryPrep";
import { getSuitabilityLabel } from "@/lib/suitability";
import { departmentLabels, departments, experienceLevelLabels, experienceLevels, moodLabels, moods, projectFormatLabels, projectFormats } from "@/lib/ui-labels";
import type { JuryInput } from "@/types/jury";
import type { Department, ExperienceLevel, Mood, ProjectFormat } from "@/types/taxonomy";

export default function JuryPage() {
  const [form, setForm] = useState<JuryInput>({
    department: "graphic",
    projectFormat: "poster",
    topic: "العزلة داخل الزحمة",
    material: "ورق مطبوع + كولاج",
    colors: "درجات رمادي مع أحمر هادي",
    mood: "isolation",
    experienceLevel: "beginner"
  });

  const output = useMemo(() => generateJuryPrep(form), [form]);

  return (
    <ToolPageShell
      title="هشرح شغلي للجنة"
      subtitle="حضّر إجاباتك قبل ما تقف قدام الدكتور. اكتب فكرة مشروعك، وStudio Rescue يطلعلك أسئلة متوقعة، إجابات محترمة، ونقاط قوة تدافع بيها عن شغلك."
    >
      <p className="rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm leading-7 text-stone-700">مثال: اكتب فكرتك ببساطة زي “العزلة وسط الزحمة”. مش لازم صياغة أكاديمية.</p>
      <ToolSection title="بيانات مشروعك">
        <p className="mb-2 text-xs font-semibold text-stone-600">اكتب ببساطة. مش لازم تكون الجملة مثالية.</p>
        <form className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Field label="القسم"><select value={form.department} onChange={(e) => setForm((p) => ({ ...p, department: e.target.value as Department }))} className="input">{departments.map((o) => <option key={o} value={o}>{departmentLabels[o]}</option>)}</select></Field>
          <Field label="نوع التسليم"><select value={form.projectFormat} onChange={(e) => setForm((p) => ({ ...p, projectFormat: e.target.value as ProjectFormat }))} className="input">{projectFormats.map((o) => <option key={o} value={o}>{projectFormatLabels[o]}</option>)}</select></Field>
          <Field label="فكرة المشروع"><input value={form.topic} onChange={(e) => setForm((p) => ({ ...p, topic: e.target.value }))} className="input" /></Field>
          <Field label="الخامة"><input value={form.material} onChange={(e) => setForm((p) => ({ ...p, material: e.target.value }))} className="input" /></Field>
          <Field label="الألوان"><input value={form.colors} onChange={(e) => setForm((p) => ({ ...p, colors: e.target.value }))} className="input" /></Field>
          <Field label="الإحساس / المزاج"><select value={form.mood} onChange={(e) => setForm((p) => ({ ...p, mood: e.target.value as Mood }))} className="input">{moods.map((o) => <option key={o} value={o}>{moodLabels[o]}</option>)}</select></Field>
          <Field label="مستواك"><select value={form.experienceLevel} onChange={(e) => setForm((p) => ({ ...p, experienceLevel: e.target.value as ExperienceLevel }))} className="input">{experienceLevels.map((o) => <option key={o} value={o}>{experienceLevelLabels[o]}</option>)}</select></Field>
        </form>
      </ToolSection>

      <ToolSection title="الملخص"><p className="leading-7">{output.summary}</p></ToolSection>
      <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-7 text-emerald-800">الإجابات دي تساعدك ترتب كلامك، مش تحفظه حرفيًا.</p>

      <ToolSection title="افتتاحية تقولها في أول الشرح">
        <div className="mb-2"><CopyButton text={output.openingLine} /></div>
        <p>{output.openingLine}</p>
      </ToolSection>

      <ToolSection title="أسئلة اللجنة المتوقعة">
        <div className="space-y-3">
          {output.questions.map((q) => (
            <ResultCard key={q.id}>
              <p className="font-extrabold">{q.question}</p>
              <div className="mt-2 mb-1 flex items-center justify-between gap-2"><p className="font-bold">إجابة مقترحة</p><CopyButton text={q.suggestedAnswer} /></div>
              <p>{q.suggestedAnswer}</p>
              <p className="mt-2 text-sm"><span className="font-bold">طريقة الرد: </span>{q.answerStyleTip}</p>
              <p className="mt-2 text-sm font-bold text-emerald-700">نقاط قوة</p>
              <ul className="list-disc ps-5 text-sm">{q.strengthHints.map((item) => <li key={item}>{item}</li>)}</ul>
              <p className="mt-2 text-sm font-bold text-amber-700">تحذيرات</p>
              <ul className="list-disc ps-5 text-sm">{q.weaknessWarnings.map((item) => <li key={item}>{item}</li>)}</ul>
              <p className="mt-2 text-sm font-bold text-rose-700">بلاش تقول</p>
              <ul className="list-disc ps-5 text-sm">{q.avoidSaying.map((item) => <li key={item}>{item}</li>)}</ul>
              <p className="mt-2 text-xs font-bold text-stone-600">درجة الملاءمة: {getSuitabilityLabel(q.fitScore)}</p>
            </ResultCard>
          ))}
        </div>
      </ToolSection>

      <ToolSection title="نقاط قوة ركز عليها"><ul className="list-disc space-y-1 ps-5">{output.strongestPoints.map((item) => <li key={item}>{item}</li>)}</ul></ToolSection>
      <ToolSection title="نقاط خطر خليك جاهز لها"><ul className="list-disc space-y-1 ps-5">{output.riskyPoints.map((item) => <li key={item}>{item}</li>)}</ul></ToolSection>
      <ToolSection title="جملة دفاع نهائية"><div className="mb-2"><CopyButton text={output.finalDefenseLine} /></div><p>{output.finalDefenseLine}</p></ToolSection>
      <NextStepActions actions={[{ label: "اكتبلي شرح العمل", href: "/tools/statement" }, { label: "رجعني لخطة التسليم", href: "/tools/emergency" }, { label: "طلعلي فكرة تانية", href: "/tools/ideas" }]} />
    </ToolPageShell>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="space-y-1"><span className="text-sm font-semibold">{label}</span>{children}</label>;
}
