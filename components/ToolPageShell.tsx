export default function ToolPageShell({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-stone-50 px-3 py-6 text-stone-900 sm:px-4 sm:py-8">
      <div className="mx-auto flex w-full max-w-3xl min-w-0 flex-col gap-4 sm:gap-5">
        <header className="space-y-2">
          <h1 className="break-words text-2xl font-black leading-tight tracking-tight sm:text-3xl">{title}</h1>
          <p className="break-words text-sm leading-relaxed text-stone-700 sm:leading-7">{subtitle}</p>
        </header>
        {children}
      </div>
    </main>
  );
}
