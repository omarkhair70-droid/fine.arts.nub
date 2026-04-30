import Link from "next/link";

const links = [
  { label: "الرئيسية", href: "/" },
  { label: "الأدوات", href: "/tools" },
  { label: "اختارلي الطريق", href: "/start" },
  { label: "تسليم بكرة", href: "/tools/emergency" },
  { label: "فكرة مشروع", href: "/tools/ideas" },
  { label: "اللجنة", href: "/tools/jury" },
  { label: "شرح العمل", href: "/tools/statement" }
];

export default function SiteHeader() {
  return (
    <header dir="rtl" className="border-b border-stone-200 bg-white/95 px-3 py-3 backdrop-blur sm:px-4">
      <div className="mx-auto flex w-full max-w-4xl min-w-0 flex-col gap-3">
        <Link href="/" className="w-fit text-base font-black text-stone-900 sm:text-lg">Studio Rescue</Link>
        <nav className="flex min-w-0 flex-wrap gap-2 text-sm">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-full border border-stone-200 px-3 py-1.5 text-stone-700 transition hover:border-rose-300 hover:text-rose-700">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
