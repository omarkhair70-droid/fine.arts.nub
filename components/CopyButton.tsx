"use client";

import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "manual">("idle");

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
    } catch {
      setStatus("manual");
    }

    setTimeout(() => setStatus("idle"), 1800);
  };

  const label = status === "copied" ? "اتنسخ ✅" : status === "manual" ? "انسخه يدويًا" : "انسخ النص";

  return (
    <button onClick={onCopy} type="button" className="rounded-lg border border-stone-300 px-3 py-1.5 text-xs font-semibold text-stone-700 transition hover:border-rose-500 hover:text-rose-600">
      {label}
    </button>
  );
}
