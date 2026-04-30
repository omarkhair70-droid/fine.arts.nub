"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import SiteHeader from "@/components/SiteHeader";

type CompassOption = {
  id: string;
  label: string;
  toolHref: string;
  toolTitle: string;
  message: string;
};

const options: CompassOption[] = [
  {
    id: "no-start",
    label: "مش عارف أبدأ",
    toolHref: "/tools/emergency",
    toolTitle: "خطة الإنقاذ السريعة",
    message: "ابدأ بخطة إنقاذ. هتطلع بخطوات وخامات وجملة شرح."
  },
  {
    id: "no-idea",
    label: "مش لاقي فكرة",
    toolHref: "/tools/ideas",
    toolTitle: "مولد الأفكار",
    message: "ابدأ بمولد الأفكار. اختار القسم والمزاج وخد 3 أفكار قابلة للتنفيذ."
  },
  {
    id: "jury-fear",
    label: "خايف من اللجنة",
    toolHref: "/tools/jury",
    toolTitle: "تحضير اللجنة",
    message: "ابدأ بتحضير اللجنة. هتاخد أسئلة متوقعة وإجابات محترمة."
  },
  {
    id: "cant-write",
    label: "مش عارف أكتب شرح",
    toolHref: "/tools/statement",
    toolTitle: "شرح العمل",
    message: "ابدأ بشرح العمل. هتاخد نسخة قصيرة ورسمية وبالكلام العادي."
  },
  {
    id: "deadline-stress",
    label: "التسليم بكرة ومتوتر",
    toolHref: "/tools/emergency",
    toolTitle: "خطة الإنقاذ السريعة",
    message: "متقلقش. ابدأ بخطة إنقاذ سريعة، وبعدها جهز كلامك للجنة."
  }
];

export default function StartPage() {
  const [selectedId, setSelectedId] = useState(options[0].id);
  const selected = useMemo(() => options.find((option) => option.id === selectedId) ?? options[0], [selectedId]);

  return (
    <main dir="rtl" className="min-h-screen bg-stone-50 text-stone-900">
      <SiteHeader />
      <div className="mx-auto w-full max-w-4xl space-y-6 px-4 py-8 sm:py-10">
        <section className="space-y-3 rounded-2xl border border-rose-200 bg-white p-5 shadow-sm sm:p-6">
          <p className="inline-block rounded-full bg-rose-50 px-3 py-1 text-xs font-bold text-rose-700">اختارلي الطريق</p>
          <h1 className="text-2xl font-black leading-tight sm:text-3xl">إيه اللي واقف معاك دلوقتي؟</h1>
          <p className="text-sm leading-7 text-stone-600">اختار أقرب وصف لحالتك، وإحنا هنوصلك لأول خطوة واضحة تبدأ منها.</p>
        </section>

        <section className="grid gap-3">
          {options.map((option) => {
            const isActive = option.id === selected.id;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setSelectedId(option.id)}
                className={`w-full rounded-2xl border px-4 py-3 text-right text-sm font-bold transition sm:text-base ${
                  isActive ? "border-rose-300 bg-rose-50 text-rose-800" : "border-stone-200 bg-white text-stone-800 hover:border-rose-200"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </section>

        <section className="space-y-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-black">ابدأ من هنا</h2>
          <div className="space-y-2">
            <p className="text-base font-bold text-stone-900">{selected.toolTitle}</p>
            <p className="text-sm leading-7 text-stone-700">{selected.message}</p>
          </div>
          <Link
            href={selected.toolHref}
            className="inline-flex w-full items-center justify-center rounded-xl bg-rose-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-rose-700 sm:w-auto"
          >
            افتح الأداة
          </Link>
          <div className="flex flex-wrap gap-2 pt-1 text-sm">
            <Link href="/tools" className="rounded-full border border-stone-200 px-3 py-1.5 text-stone-700 transition hover:border-rose-300 hover:text-rose-700">
              كل الأدوات
            </Link>
            <Link href="/" className="rounded-full border border-stone-200 px-3 py-1.5 text-stone-700 transition hover:border-rose-300 hover:text-rose-700">
              الصفحة الرئيسية
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
