import { fallbackOutputs } from "@/lib/data/fallbackOutputs";
import { rescueRules, type RescueRule } from "@/lib/data/rescueRules";
import type { EmergencyInput, EmergencyPlan } from "@/types/emergency";
import type { BudgetLevel } from "@/types/taxonomy";

const departmentLabel: Record<string, string> = {
  graphic: "الجرافيك",
  decor: "الديكور",
  painting: "التصوير الزيتي/التلوين",
  drawing: "الرسم",
  sculpture: "النحت",
  ceramics: "الخزف",
  photography: "التصوير",
  general: "عام"
};

const formatLabel: Record<string, string> = {
  poster: "بوستر",
  campaign: "حملة",
  painting: "لوحة",
  sculpture: "مجسم",
  model: "ماكيت",
  space: "فراغ/مساحة",
  installation: "تركيب",
  photography: "سلسلة تصوير",
  presentation: "عرض تقديمي"
};

function scoreRule(rule: RescueRule, input: EmergencyInput): number {
  let score = 0;
  if (rule.departments?.includes(input.department)) score += 4;
  if (rule.projectFormats?.includes(input.projectFormat)) score += 4;
  if (rule.budgetLevels?.includes(input.budgetLevel)) score += 3;
  if (rule.experienceLevels?.includes(input.experienceLevel)) score += 3;
  if (input.mood && rule.moods?.includes(input.mood)) score += 2;
  if (rule.daysLeftMin !== undefined && input.daysLeft >= rule.daysLeftMin) score += 2;
  if (rule.daysLeftMax !== undefined && input.daysLeft <= rule.daysLeftMax) score += 3;
  return score;
}

function priorityFromDays(daysLeft: number): EmergencyPlan["priority"] {
  if (daysLeft <= 1) return "high";
  if (daysLeft <= 3) return "medium";
  return "low";
}

function pickByIntent(ranked: Array<{ rule: RescueRule; score: number }>, intent: RescueRule["intent"]) {
  return ranked.find((item) => item.rule.intent === intent)?.rule.text;
}

export function generateEmergencyPlan(input?: EmergencyInput): EmergencyPlan {
  const basePlan = fallbackOutputs.emergency as EmergencyPlan;

  if (!input) {
    return {
      ...basePlan,
      doNow: [
        "ثبّت الفكرة في جملة واحدة، ثم اختصر التسليم لمخرج رئيسي واضح.",
        "اشتغل 60 دقيقة تنفيذ + 15 مراجعة + 15 تعديل نهائي.",
        "جهّز ترتيب العرض قبل التجميل الأخير حتى لا تضيع وقتك في تفاصيل ثانوية."
      ],
      cheapAlternatives: [
        ...basePlan.cheapAlternatives,
        "لو الميزانية ضيقة جدًا: اختبر كل شيء أولًا على ورق عادي قبل أي طباعة نهائية.",
        "استخدم خامات البيت (كرتون/فويل/قماش قديم) لإخراج نموذج واضح بدل خامات باهظة."
      ]
    };
  }

  const rankedRules = rescueRules
    .map((rule) => ({ rule, score: scoreRule(rule, input) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  const scopeRule = pickByIntent(rankedRules, "scope");
  const executionRule = pickByIntent(rankedRules, "execution");
  const presentationRule = pickByIntent(rankedRules, "presentation");

  const doNow = [scopeRule, executionRule, presentationRule]
    .filter((item): item is string => Boolean(item))
    .concat(
      rankedRules
        .filter((item) => ["scope", "execution", "presentation"].includes(item.rule.intent))
        .map((item) => item.rule.text)
        .filter((text) => text !== scopeRule && text !== executionRule && text !== presentationRule)
    )
    .slice(0, 4);

  const budgetAlternatives: Record<BudgetLevel, string[]> = {
    "very-low": [
      "نفّذ نسخة عرض يدوية نظيفة بدل طباعة كبيرة مكلفة.",
      "اقترض خامات متاحة من زميل/مرسم وركّز على الفكرة لا فخامة الخامة."
    ],
    low: ["استخدم خامة رئيسية واحدة جيدة + خامات مساعدة بسيطة لتقليل التكلفة بدون إضعاف الشكل."],
    medium: ["خصص جزءًا صغيرًا لتحسين الإخراج النهائي (طباعة/قاعدة) لأنه يرفع الانطباع مباشرة."],
    open: ["استثمر في نموذج أولي سريع ثم نسخة نهائية متقنة؛ لا تصرف الميزانية كلها على المحاولة الأولى."]
  };

  const experienceExtra =
    input.experienceLevel === "beginner"
      ? ["نصيحة للمبتدئ: لا تطارد الكمال، سلّم فكرة واضحة وتكوين نظيف ومقروء."]
      : input.experienceLevel === "advanced"
        ? ["نصيحة للمتقدم: ركّز على قرار بصري جريء واحد يترك أثرًا واضحًا في التحكيم."]
        : [];

  const cheapAlternatives = [
    ...basePlan.cheapAlternatives,
    ...budgetAlternatives[input.budgetLevel],
    ...rankedRules
      .filter((item) => item.rule.intent === "materials")
      .slice(0, 2)
      .map((item) => item.rule.text)
  ];

  const pressureLabel = input.daysLeft <= 1 ? "الوقت ضاغط جدًا" : input.daysLeft <= 3 ? "الوقت ضاغط" : "عندك مساحة حركة";

  return {
    ...basePlan,
    summary: `خطة إنقاذ لقسم ${departmentLabel[input.department] ?? input.department} في ${formatLabel[input.projectFormat] ?? input.projectFormat}. ${pressureLabel} (المتبقي ${input.daysLeft} يوم).`,
    priority: priorityFromDays(input.daysLeft),
    doNow: doNow.length ? [...doNow, ...experienceExtra].slice(0, 4) : [...basePlan.doNow, ...experienceExtra].slice(0, 4),
    cheapAlternatives: Array.from(new Set(cheapAlternatives)).filter(
      (item): item is string => Boolean(item)
    )
  };
}
