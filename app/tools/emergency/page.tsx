import { Suspense } from "react";

import EmergencyClient from "./EmergencyClient";

export default function Page() {
  return (
    <Suspense fallback={<p dir="rtl" className="px-4 py-6 text-sm text-stone-600">بنجهز الأداة...</p>}>
      <EmergencyClient />
    </Suspense>
  );
}
