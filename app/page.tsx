import Link from "next/link";

const cards = [
  { title: "عندي تسليم بكرة", href: "/tools/emergency", subtitle: "خطة إنقاذ عملية وسريعة تمشيك خطوة بخطوة." },
  { title: "عايز فكرة مشروع", href: "/tools/ideas", subtitle: "٣ أفكار قابلة للتنفيذ والدفاع قدام اللجنة." },
  { title: "هشرح شغلي للجنة", href: "/tools/jury", subtitle: "أسئلة متوقعة وإجابات مقترحة للدفاع بثقة." },
  { title: "اكتبلي شرح العمل", href: "/tools/statement", subtitle: "Artist Statement جاهز بصياغات قصيرة ورسمية." }
];

export default function HomePage() {
  return (
    <main dir="rtl" className="min-h-screen bg-stone-50 px-4 py-10 text-stone-900">
      <div className="mx-auto max-w-4xl space-y-8">
        <header className="space-y-3">
          <p className="inline-block rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-bold text-rose-700">Studio Rescue</p>
          <h1 className="break-words text-3xl font-black leading-tight sm:text-4xl">عندك تسليم؟<br />خد نفس. افتح عدة النجاة.</h1>
          <p className="max-w-2xl break-words text-sm leading-relaxed text-stone-700 sm:leading-7">أدوات سريعة تساعدك تطلع فكرة، ترتب خاماتك، تجهز شرح مشروعك، وتقف قدام اللجنة بثقة.</p>
        </header>

        <section className="grid gap-3 sm:grid-cols-2">
          {cards.map((card) => (
            <Link key={card.title} href={card.href} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:border-rose-400">
              <h2 className="text-lg font-extrabold">{card.title}</h2>
              <p className="mt-2 text-sm text-stone-600">{card.subtitle}</p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
