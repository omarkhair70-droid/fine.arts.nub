import Link from "next/link";

import SiteHeader from "@/components/SiteHeader";

const tools = [
  { title: "أنا مزنوق في التسليم", href: "/tools/emergency", desc: "خطة تنفيذ، خامات، بدائل أوفر، وجملة شرح." },
  { title: "أنا محتاج فكرة", href: "/tools/ideas", desc: "3 أفكار قابلة للتنفيذ والدفاع قدام اللجنة." },
  { title: "أنا هقف قدام لجنة", href: "/tools/jury", desc: "أسئلة متوقعة، إجابات محترمة، ونقاط قوة." },
  { title: "أنا محتاج أشرح العمل", href: "/tools/statement", desc: "شرح قصير، رسمي، وبالكلام العادي." }
];

export default function ToolsPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-stone-50 text-stone-900">
      <SiteHeader />
      <div className="mx-auto max-w-4xl space-y-6 px-4 py-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-black">اختار وضع الإنقاذ</h1>
          <p className="text-sm leading-7 text-stone-700">مش لازم تبدأ من الصفر. اختار المشكلة اللي واقف عندها دلوقتي.</p>
        </header>
        <section className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-7 text-emerald-800">
          <p>مش لازم تستخدم كل الأدوات.</p>
          <p>ابدأ بالأداة اللي بتحل مشكلتك دلوقتي.</p>
          <p>لو عندك تسليم قريب، ابدأ بـ “عندي تسليم بكرة”.</p>
          <p>لو لسه مفيش فكرة، ابدأ بـ “عايز فكرة مشروع”.</p>
        </section>
        <section className="grid gap-3 sm:grid-cols-2">
          {tools.map((tool) => (
            <Link key={tool.title} href={tool.href} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:border-rose-300">
              <h2 className="text-lg font-extrabold leading-7">{tool.title}</h2>
              <p className="mt-2 text-sm leading-7 text-stone-600">{tool.desc}</p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
