"use client";

import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button onClick={onCopy} type="button" className="rounded-lg border border-stone-300 px-3 py-1.5 text-xs font-semibold text-stone-700 transition hover:border-rose-500 hover:text-rose-600">
      {copied ? "اتنسخت ✅" : "انسخ"}
    </button>
  );
}
