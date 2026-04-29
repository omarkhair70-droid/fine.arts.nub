import type { StatementTemplate } from "@/types/statement";

export const statementTemplates: StatementTemplate[] = [
  {
    id: "statement-process-driven",
    title: "بيان مشروع قائم على العملية",
    body: "ينطلق هذا المشروع من تجارب متتابعة داخل الاستوديو لقياس أثر التغيير في المادة والسياق على معنى العمل.",
    departments: ["painting", "installation"],
    projectFormats: ["thesis", "open-studio"],
    moods: ["uncertain", "curious"]
  },
  {
    id: "statement-site-response",
    title: "بيان مشروع مرتبط بالمكان",
    body: "يتعامل المشروع مع الموقع بوصفه شريكاً في الإنتاج، حيث تتغير القرارات التشكيلية وفق شروط المكان والمرور والزمن.",
    departments: ["performance", "sculpture"],
    projectFormats: ["group-show", "solo-show"],
    moods: ["focused", "urgent"]
  }
];
