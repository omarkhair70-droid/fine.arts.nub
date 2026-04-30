import Link from "next/link";

import SiteHeader from "@/components/SiteHeader";

const cards = [
  { problem: "مش عارف أبدأ؟", title: "عندي تسليم بكرة", href: "/tools/emergency", subtitle: "هتاخد خطة تنفيذ وخامات وبدائل وجملة شرح." },
  { problem: "مش لاقي فكرة؟", title: "عايز فكرة مشروع", href: "/tools/ideas", subtitle: "هتاخد 3 أفكار قابلة للتنفيذ والدفاع." },
  { problem: "خايف من اللجنة؟", title: "هشرح شغلي للجنة", href: "/tools/jury", subtitle: "هتاخد أسئلة متوقعة وإجابات محترمة." },
  { problem: "مش عارف تكتب شرح؟", title: "اكتبلي شرح العمل", href: "/tools/statement", subtitle: "هتاخد نسخة قصيرة ورسمية وبالكلام العادي." }
];

export default function HomePage() {
  return (
    <main dir="rtl" className="min-h-screen bg-stone-50 text-stone-900">
      <SiteHeader />
      <div className="mx-auto max-w-4xl space-y-8 px-4 py-10">
        <header className="space-y-3">
          <p className="inline-block rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-bold text-rose-700">Studio Rescue</p>
          <h1 className="break-words text-3xl font-black leading-tight sm:text-4xl">عندك تسليم؟<br />خد نفس. افتح عدة النجاة.</h1>
          <p className="max-w-2xl break-words text-sm leading-relaxed text-stone-700 sm:leading-7">Studio Rescue مش بيعمل المشروع بدالك.<br />هو بيساعدك ترتب فكرتك، خاماتك، شرحك، وأسئلة اللجنة بسرعة قبل التسليم.</p>
          <p className="text-sm font-bold text-stone-800">اختار حسب مشكلتك دلوقتي:</p>
        </header>



        <section className="rounded-2xl border border-rose-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-bold text-rose-700">تايه ومش عارف تبدأ؟</p>
          <h2 className="mt-1 text-xl font-black">اختارلي الطريق</h2>
          <p className="mt-2 text-sm leading-7 text-stone-700">جاوب على سؤال واحد وخد ترشيح مباشر لأول أداة تناسب حالتك.</p>
          <Link
            href="/start"
            className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-rose-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-rose-700 sm:w-auto"
          >
            أنا تايه… اختارلي أبدأ منين
          </Link>
        </section>

        <section className="grid gap-3 sm:grid-cols-2">
          {cards.map((card) => (
            <Link key={card.title} href={card.href} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:border-rose-400">
              <p className="text-sm font-bold text-rose-700">{card.problem}</p>
              <h2 className="text-lg font-extrabold">{card.title}</h2>
              <p className="mt-2 text-sm text-stone-600">{card.subtitle}</p>
            </Link>
          ))}
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-black">بيشتغل إزاي؟</h2>
          <ol className="mt-3 list-decimal space-y-2 ps-5 text-sm leading-7 text-stone-700">
            <li>اختار المشكلة اللي واقف عندها</li>
            <li>جاوب على كام سؤال بسيط</li>
            <li>خد نتيجة تقدر تبدأ منها فورًا</li>
            <li>عدّل الكلام بصوتك وقدّم شغلك بثقة</li>
          </ol>
        </section>
      </div>
    </main>
  );
}
