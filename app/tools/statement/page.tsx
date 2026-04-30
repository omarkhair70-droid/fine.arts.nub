import { Suspense } from "react";

import StatementClient from "./StatementClient";

export default function Page() {
  return (
    <Suspense fallback={<p dir="rtl" className="px-4 py-6 text-sm text-stone-600">بنجهز الأداة...</p>}>
      <StatementClient />
    </Suspense>
  );
}
