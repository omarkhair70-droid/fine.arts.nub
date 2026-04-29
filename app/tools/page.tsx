import Link from "next/link";

const tools = [
  { title: "Emergency Mode", href: "/tools/emergency", desc: "يطلعلك خطة إنقاذ واضحة: تبدأ بإيه، خاماتك إيه، وتقدم إزاي بثقة." },
  { title: "Idea Generator", href: "/tools/ideas", desc: "يرشحلك 3 أفكار مناسبة لقسمك ومزاجك ومستواك وتنفع تتنفذ بسرعة." },
  { title: "Jury Mode", href: "/tools/jury", desc: "تدريب سريع على شرح الفكرة والرد على أسئلة اللجنة. قريبًا." },
  { title: "Artist Statement", href: "/tools/statement", desc: "يساعدك تطلع نص شرح واضح ومقنع للعمل. قريبًا." }
];

export default function ToolsPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-stone-50 px-4 py-8 text-stone-900">
      <div className="mx-auto max-w-4xl space-y-6">
        <h1 className="text-3xl font-black">الأدوات</h1>
        <div className="grid gap-3 sm:grid-cols-2">
          {tools.map((tool) => (
            <Link key={tool.title} href={tool.href} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-bold">{tool.title}</h2>
              <p className="mt-2 text-sm leading-6 text-stone-600">{tool.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
