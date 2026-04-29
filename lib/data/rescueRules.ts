import type {
  BudgetLevel,
  Department,
  ExperienceLevel,
  Mood,
  ProjectFormat
} from "@/types/taxonomy";

export interface RescueRule {
  id: string;
  text: string;
  departments?: Department[];
  projectFormats?: ProjectFormat[];
  budgetLevels?: BudgetLevel[];
  experienceLevels?: ExperienceLevel[];
  moods?: Mood[];
  daysLeftMin?: number;
  daysLeftMax?: number;
  intent: "scope" | "execution" | "materials" | "presentation" | "feedback";
}

export const rescueRules: RescueRule[] = [
  {
    id: "scope-graphic-poster-core-message",
    text: "ثبّت رسالة البوستر في جملة من 7 إلى 10 كلمات، ثم احذف أي عنصر لا يخدمها مباشرة.",
    departments: ["graphic"],
    projectFormats: ["poster", "campaign"],
    experienceLevels: ["beginner", "intermediate"],
    daysLeftMax: 2,
    intent: "scope"
  },
  {
    id: "scope-one-deliverable-deadline",
    text: "عند ضيق الوقت، اعتمد مخرجًا رئيسيًا واحدًا مكتملًا بدل عدة مخرجات ناقصة.",
    departments: ["general"],
    daysLeftMax: 1,
    moods: ["chaos", "tension"],
    intent: "scope"
  },
  {
    id: "execution-90-min-sprint",
    text: "نفّذ سباق عمل 90 دقيقة: 60 دقيقة تنفيذ + 15 مراجعة + 15 تعديل نهائي.",
    daysLeftMax: 3,
    moods: ["tension", "chaos"],
    intent: "execution"
  },
  {
    id: "execution-beginner-grid",
    text: "للمبتدئ: استخدم شبكة بسيطة 3 أعمدة لضبط المحاذاة قبل إضافة التفاصيل الجمالية.",
    departments: ["graphic"],
    projectFormats: ["poster", "presentation"],
    experienceLevels: ["beginner"],
    intent: "execution"
  },
  {
    id: "materials-low-budget-print",
    text: "بدل طباعة نهائية مكلفة: اطبع نسخة A4 تجريبية بالأبيض والأسود لاختبار التباين ثم عدّل.",
    departments: ["graphic"],
    projectFormats: ["poster"],
    budgetLevels: ["very-low", "low"],
    intent: "materials"
  },
  {
    id: "materials-model-household",
    text: "في الماكيت السريع استخدم كرتون علب التغليف + غراء أبيض + شريط ورقي بدل خامات متخصصة.",
    projectFormats: ["model", "installation"],
    budgetLevels: ["very-low", "low"],
    intent: "materials"
  },
  {
    id: "materials-photography-window-light",
    text: "في التصوير الطارئ استخدم ضوء الشباك مع عاكس من ورق فويل بدل معدات إضاءة إضافية.",
    departments: ["photography"],
    projectFormats: ["photography", "presentation"],
    budgetLevels: ["very-low", "low"],
    intent: "materials"
  },
  {
    id: "presentation-3-part-story",
    text: "قدّم المشروع بثلاث جمل فقط: المشكلة، قرارك البصري، ولماذا هذا القرار مناسب للجمهور.",
    projectFormats: ["presentation", "poster", "campaign"],
    daysLeftMax: 2,
    intent: "presentation"
  },
  {
    id: "presentation-print-backup",
    text: "جهّز نسخة PDF خفيفة ونسخة صور JPG في مجلد واحد تحسبًا لتعطل جهاز العرض.",
    projectFormats: ["presentation", "poster"],
    departments: ["graphic", "general"],
    intent: "presentation"
  },
  {
    id: "feedback-one-question",
    text: "خذ تغذية راجعة بسؤال واحد محدد: هل الفكرة تُفهم خلال 5 ثوانٍ؟ ثم عدّل بناءً على الإجابة فقط.",
    daysLeftMax: 2,
    experienceLevels: ["beginner", "intermediate"],
    intent: "feedback"
  },
  {
    id: "scope-painting-color-limit",
    text: "في اللوحة المستعجلة، قلّص لوحة الألوان إلى 3 ألوان أساسية + لون تأكيد واحد.",
    departments: ["painting", "drawing"],
    projectFormats: ["painting"],
    daysLeftMax: 3,
    intent: "scope"
  },
  {
    id: "execution-advanced-priority-pass",
    text: "للمتقدم: نفّذ تمريرتين فقط—الأولى للبنية العامة والثانية لإنقاذ نقطة القوة بدل صقل كل الأجزاء.",
    experienceLevels: ["advanced"],
    daysLeftMax: 2,
    intent: "execution"
  }
];
