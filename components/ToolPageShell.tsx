export default function ToolPageShell({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <main dir="rtl" className="min-h-screen bg-stone-50 px-4 py-8 text-stone-900">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-5">
        <header className="space-y-2">
          <h1 className="text-3xl font-black tracking-tight">{title}</h1>
          <p className="text-sm leading-7 text-stone-700">{subtitle}</p>
        </header>
        {children}
      </div>
    </main>
  );
}
