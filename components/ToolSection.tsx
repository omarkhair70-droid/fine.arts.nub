export default function ToolSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="w-full min-w-0 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 className="mb-3 break-words text-lg font-bold leading-relaxed">{title}</h2>
      <div className="min-w-0 break-words leading-relaxed">{children}</div>
    </section>
  );
}
