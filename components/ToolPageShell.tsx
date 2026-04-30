import SiteHeader from "@/components/SiteHeader";

export default function ToolPageShell({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900" dir="rtl">
      <SiteHeader />
      <div className="px-3 py-6 sm:px-4 sm:py-8">
        <div className="mx-auto flex w-full max-w-3xl min-w-0 flex-col gap-5 sm:gap-6">
          <header className="space-y-2">
            <h1 className="break-words text-2xl font-black leading-tight tracking-tight sm:text-3xl">{title}</h1>
            <p className="break-words text-sm leading-7 text-stone-700">{subtitle}</p>
          </header>
          {children}
        </div>
      </div>
    </main>
  );
}
