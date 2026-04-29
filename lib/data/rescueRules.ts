import type { RescueRule } from "@/types/rescue";

export const rescueRules: RescueRule[] = [
  {
    id: "arabic-overload-scope",
    title: "Reduce scope when the brief feels too broad",
    conditions: [
      { field: "prompt", operator: "includes", value: "واسع" },
      { field: "mood", operator: "equals", value: "overwhelmed" }
    ],
    actions: [
      "اختر سؤالاً مركزياً واحداً فقط للمراجعة القادمة.",
      "حوّل السؤال إلى تجربة مدتها 45 دقيقة داخل الاستوديو.",
      "وثّق النتيجة بصورة واحدة وجملة واحدة."
    ],
    commonMistakes: [
      {
        id: "mistake-overplanning",
        label: "التخطيط المفرط",
        severity: "high",
        signal: "قائمة مهام طويلة بدون تنفيذ فعلي.",
        correctiveAction: "احذف كل المهام ما عدا أول تجربة قابلة للتنفيذ اليوم."
      }
    ]
  },
  {
    id: "arabic-weak-concept-link",
    title: "Reconnect material choice to concept",
    conditions: [
      { field: "prompt", operator: "includes", value: "الخامة" },
      { field: "discipline", operator: "equals", value: "installation" }
    ],
    actions: [
      "اكتب ثلاث جمل: لماذا هذه الخامة تحديداً؟",
      "اختبر بديلين للخامة مع نفس الفكرة خلال جلسة واحدة.",
      "احتفظ بالبديل الذي يوضح الفكرة بأقل شرح نصي."
    ],
    commonMistakes: [
      {
        id: "mistake-style-first",
        label: "الشكل قبل الفكرة",
        severity: "medium",
        signal: "اختيار الخامة لأن شكلها جميل فقط.",
        correctiveAction: "اربط كل خامة بجملة مفاهيمية قابلة للدفاع أمام لجنة التحكيم."
      }
    ]
  }
];
