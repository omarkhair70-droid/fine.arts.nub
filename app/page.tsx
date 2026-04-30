import Link from "next/link";

import SiteHeader from "@/components/SiteHeader";

const cards = [
  { problem: "مستعجل والتسليم قرب", title: "خطة إنقاذ سريعة", href: "/tools/emergency", subtitle: "خطوات تنفيذ وخامات بديلة وجملة دفاع جاهزة." },
  { problem: "دماغك واقفة", title: "مولّد أفكار", href: "/tools/ideas", subtitle: "3 أفكار قابلة للتنفيذ والدفاع حسب قسمك." },
  { problem: "قلقان من المناقشة", title: "تحضير اللجنة", href: "/tools/jury", subtitle: "أسئلة متوقعة وإجابات مرتبة بثقة." },
  { problem: "مش عارف تصيغ كلامك", title: "شرح العمل / Artist Statement", href: "/tools/statement", subtitle: "نسخة قصيرة ورسمية وكلام عادي قابل للتعديل." }
];

export default function HomePage() {
  return (
    <main dir="rtl" className="min-h-screen bg-stone-50 text-stone-900">
      <SiteHeader />
      <div className="mx-auto max-w-4xl space-y-8 px-4 py-10">
        <header className="space-y-3">
          <p className="inline-block rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-bold text-rose-700">Studio Rescue</p>
          <h1 className="text-3xl font-black leading-tight sm:text-4xl">عندك تسليم؟<br />خد نفس. افتح عدة النجاة.</h1>
        </header>

        <section className="rounded-2xl border border-rose-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-black">مش عارف تبدأ منين؟</h2>
          <p className="mt-2 text-sm leading-7 text-stone-700">اضغط “اختارلي الطريق” وهنرشحلك أول أداة حسب مشكلتك.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link href="/start" className="rounded-xl bg-rose-600 px-4 py-2.5 text-sm font-bold text-white">أنا تايه… اختارلي أبدأ منين</Link>
            <Link href="/tools" className="rounded-xl border border-stone-300 px-4 py-2.5 text-sm font-bold">افتح كل الأدوات</Link>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-black">ابدأ في 30 ثانية</h2>
          <ol className="mt-3 list-decimal space-y-2 ps-5 text-sm leading-7 text-stone-700"><li>اختار مشكلتك</li><li>جاوب على كام سؤال بسيط</li><li>انسخ الخطة أو الشرح</li><li>عدّل بصوتك وقدّم بثقة</li></ol>
        </section>

        <section className="grid gap-3 sm:grid-cols-2">{cards.map((card) => <Link key={card.title} href={card.href} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:border-rose-400"><p className="text-sm font-bold text-rose-700">{card.problem}</p><h2 className="text-lg font-extrabold">{card.title}</h2><p className="mt-2 text-sm text-stone-600">{card.subtitle}</p></Link>)}</section>

        <footer className="rounded-2xl border border-stone-200 bg-white p-4 text-sm leading-7 text-stone-700">نسخة تجريبية لطلاب الفنون. استخدم النتائج كبداية، وعدّلها بصوتك وبحسب متطلبات دكتورك.</footer>
      </div>
    </main>
  );
}
