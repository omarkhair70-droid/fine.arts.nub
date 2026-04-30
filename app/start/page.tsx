"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import ResultCard from "@/components/ResultCard";
import ToolPageShell from "@/components/ToolPageShell";
import ToolSection from "@/components/ToolSection";

type CompassOption = { id: string; label: string; toolHref: string; toolTitle: string; message: string };
const options: CompassOption[] = [
  { id: "no-start", label: "مش عارف أبدأ", toolHref: "/tools/emergency", toolTitle: "خطة الإنقاذ السريعة", message: "ابدأ بخطة إنقاذ. هتطلع بخطوات وخامات وجملة شرح." },
  { id: "no-idea", label: "مش لاقي فكرة", toolHref: "/tools/ideas", toolTitle: "مولد الأفكار", message: "ابدأ بمولد الأفكار. اختار القسم والمزاج وخد 3 أفكار قابلة للتنفيذ." },
  { id: "jury-fear", label: "خايف من اللجنة", toolHref: "/tools/jury", toolTitle: "تحضير اللجنة", message: "ابدأ بتحضير اللجنة. هتاخد أسئلة متوقعة وإجابات محترمة." },
  { id: "cant-write", label: "مش عارف أكتب شرح", toolHref: "/tools/statement", toolTitle: "شرح العمل", message: "ابدأ بشرح العمل. هتاخد نسخة قصيرة ورسمية وبالكلام العادي." },
  { id: "deadline-stress", label: "التسليم بكرة ومتوتر", toolHref: "/tools/emergency", toolTitle: "خطة إنقاذ سريعة", message: "متقلقش. ابدأ بخطة إنقاذ سريعة، وبعدها جهز كلامك للجنة." }
];
export default function StartPage() { const [selectedId, setSelectedId] = useState(options[0].id); const selected = useMemo(() => options.find((o) => o.id === selectedId) ?? options[0], [selectedId]);
  return <ToolPageShell title="اختارلي الطريق" subtitle="مش لازم تعرف تبدأ منين. جاوب على سؤال واحد وStudio Rescue يرشحلك أول خطوة.">
    <ToolSection title="إيه اللي واقف معاك دلوقتي؟"><div className="grid gap-3">{options.map((option) => <button key={option.id} type="button" onClick={() => setSelectedId(option.id)} className={`w-full rounded-2xl border px-4 py-3 text-right text-sm font-bold ${option.id===selected.id?"border-rose-300 bg-rose-50 text-rose-800":"border-stone-200 bg-white text-stone-800"}`}>{option.label}</button>)}</div></ToolSection>
    <ToolSection title="الترشيح"><ResultCard><p className="text-lg font-black">{selected.toolTitle}</p><p className="mt-2 text-sm leading-7">{selected.message}</p><div className="mt-4 flex flex-wrap gap-2"><Link href={selected.toolHref} className="rounded-xl bg-rose-600 px-4 py-2 text-sm font-bold text-white">افتح الأداة</Link><Link href="/tools" className="rounded-xl border border-stone-200 px-4 py-2 text-sm font-bold">كل الأدوات</Link><Link href="/" className="rounded-xl border border-stone-200 px-4 py-2 text-sm font-bold">الرئيسية</Link></div></ResultCard></ToolSection>
  </ToolPageShell>; }
