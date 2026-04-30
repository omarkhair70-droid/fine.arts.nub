import Link from "next/link";

type Action = { label: string; href: string };

export default function NextStepActions({ title = "الخطوة اللي بعد كده", actions }: { title?: string; actions: Action[] }) {
  return (
    <section className="w-full min-w-0 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-lg font-bold">{title}</h2>
      <div className="grid gap-2 sm:grid-cols-2">
        {actions.map((action) => (
          <Link key={action.href} href={action.href} className="rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 text-sm font-semibold leading-relaxed text-stone-800 transition hover:border-rose-300 hover:text-rose-700">
            {action.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
