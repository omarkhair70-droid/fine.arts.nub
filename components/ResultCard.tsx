export default function ResultCard({ children }: { children: React.ReactNode }) {
  return <div className="w-full min-w-0 break-words rounded-xl border border-stone-200 bg-stone-50 p-3 leading-relaxed">{children}</div>;
}
