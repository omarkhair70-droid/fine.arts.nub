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
  { id: "scope-graphic-poster-core", text: "ثبّت رسالة البوستر في جملة 8 كلمات، ثم احذف أي عنصر لا يخدمها مباشرة.", departments: ["graphic"], projectFormats: ["poster", "campaign"], intent: "scope" },
  { id: "scope-graphic-focus", text: "كبّر العنصر الرئيسي 20%، قلل العناصر الثانوية لثلاثة فقط، وخلي العين تبدأ من أعلى يمين وتنتهي عند البؤرة.", departments: ["graphic"], projectFormats: ["poster", "campaign"], moods: ["tension", "chaos"], intent: "scope" },
  { id: "scope-campaign-one-claim", text: "في الحملة السريعة: ادعاء واحد + سطر داعم واحد + دعوة فعل واحدة، بدون رسائل إضافية.", departments: ["graphic"], projectFormats: ["campaign"], daysLeftMax: 2, intent: "scope" },
  { id: "scope-decor-path", text: "في مشروع الديكور حدّد مسار حركة واحد واضح (دخول-توقف-خروج) بدل تعدد مسارات مشتتة.", departments: ["decor"], projectFormats: ["space", "model"], intent: "scope" },
  { id: "scope-model-cut", text: "اختصر الماكيت إلى كتلتين رئيسيتين وعلاقة فراغ بينهما؛ أي تفصيلة لا تغيّر القراءة تُزال.", departments: ["decor", "sculpture", "ceramics"], projectFormats: ["model"], daysLeftMax: 2, intent: "scope" },
  { id: "scope-painting-palette", text: "في الرسم السريع: 3 ألوان أساسية + لون تأكيد، وامنع نفسك من إضافة لون خامس.", departments: ["painting", "drawing"], projectFormats: ["painting"], intent: "scope" },
  { id: "scope-photography-series", text: "ابنِ سلسلة تصوير من 5 لقطات: افتتاحية، قريبة، تفصيلة، لحظة توتر، لقطة ختامية.", departments: ["photography"], projectFormats: ["photography", "presentation"], intent: "scope" },
  { id: "scope-mood-memory", text: "لو المزاج ذاكرة/هوية: اختر رمزًا يوميًا واحدًا (مفتاح/باب/كرسي) وكرره بصريًا كخيط المشروع.", moods: ["memory", "identity"], intent: "scope" },

  { id: "exec-90-sprint", text: "اشتغل بنظام 90 دقيقة: 60 تنفيذ مركز + 15 مراجعة + 15 تعديل نهائي ثم توقف.", moods: ["chaos", "tension"], daysLeftMax: 3, intent: "execution" },
  { id: "exec-beginner-grid", text: "للمبتدئ: ابدأ بشبكة 3 أعمدة/3 محاور قبل أي زخرفة؛ الجودة هنا في الوضوح لا التعقيد.", experienceLevels: ["beginner"], departments: ["graphic", "drawing"], intent: "execution" },
  { id: "exec-beginner-checklist", text: "للمبتدئ: قبل التسليم راجع 4 نقاط فقط: وضوح الفكرة، بؤرة، تباين، ونظافة التنفيذ.", experienceLevels: ["beginner"], daysLeftMax: 2, intent: "execution" },
  { id: "exec-advanced-two-pass", text: "للمتقدم: مرّتان فقط—تمريرة بنية عامة ثم تمريرة قوة تعبيرية؛ لا تدخل في صقل كل الأجزاء.", experienceLevels: ["advanced"], intent: "execution" },
  { id: "exec-advanced-contrast", text: "للمتقدم: ارفع التناقض المقصود (هادئ/حاد، خام/مصقول) في نقطة واحدة لزيادة أثر الفكرة.", experienceLevels: ["advanced"], moods: ["identity", "city", "tension"], intent: "execution" },
  { id: "exec-painting-value", text: "في اللوحة: اقفل القيم أولًا (فاتح/متوسط/غامق) بالأبيض والأسود ثم أضف اللون.", departments: ["painting", "drawing"], projectFormats: ["painting"], intent: "execution" },
  { id: "exec-sculpture-balance", text: "في النحت/الخزف: اختبر الاتزان كل 20 دقيقة بتحريك القطعة 360° وتثبيت القاعدة قبل التفاصيل.", departments: ["sculpture", "ceramics"], projectFormats: ["sculpture", "model"], intent: "execution" },
  { id: "exec-photo-light", text: "في التصوير: استخدم ضوء جانبي واحد، وعدّل المسافة لا الإعدادات أولًا لتحسين الملمس والدراما.", departments: ["photography"], projectFormats: ["photography"], intent: "execution" },
  { id: "exec-chaos-sequence", text: "لثيمة الفوضى: رتّب العناصر من الأكثر ازدحامًا إلى الأكثر هدوءًا لإنتاج مسار قراءة إنساني.", moods: ["chaos", "city"], intent: "execution" },

  { id: "mat-verylow-print", text: "ميزانية شديدة الانخفاض: اختبار التكوين على A4 أبيض/أسود ثم نسخة نهائية واحدة فقط.", budgetLevels: ["very-low"], projectFormats: ["poster", "presentation"], intent: "materials" },
  { id: "mat-low-model", text: "ميزانية منخفضة: ماكيت بكرتون تغليف + غراء أبيض + شريط ورقي بدل الفوم بورد المكلف.", budgetLevels: ["very-low", "low"], projectFormats: ["model", "space"], intent: "materials" },
  { id: "mat-open-upgrade", text: "ميزانية مفتوحة/متوسطة: خصص جزءًا للخامة الرئيسية (ورق فاخر/طباعة جيدة/قاعدة نظيفة) لأن الانطباع الأول يغيّر التقييم.", budgetLevels: ["medium", "open"], intent: "materials" },
  { id: "mat-photo-diy", text: "بدل معدات التصوير: شباك + عاكس فويل + ورق أسود لامتصاص الضوء لصناعة تباين احترافي بتكلفة صفر تقريبًا.", departments: ["photography"], budgetLevels: ["very-low", "low"], intent: "materials" },
  { id: "mat-sculpture-salvage", text: "في النحت السريع استخدم خامات معاد تدويرها (خشب/سلك/جبس) مع نقطة تثبيت معدنية واحدة للأمان.", departments: ["sculpture", "ceramics"], projectFormats: ["sculpture", "model"], intent: "materials" },

  { id: "pres-3line-story", text: "اعرض المشروع بثلاث جمل: المشكلة، القرار البصري، ولماذا هذا القرار يخدم المستخدم/المتلقي.", projectFormats: ["presentation", "poster", "campaign"], intent: "presentation" },
  { id: "pres-board-order", text: "رتّب لوحات العرض: (بحث بصري) ثم (تجارب) ثم (النسخة النهائية) حتى يبان التطور لا النتيجة فقط.", projectFormats: ["presentation", "model", "space"], intent: "presentation" },
  { id: "pres-photo-seq", text: "في عرض التصوير: ابدأ بلقطة تأسيسية، اختم بلقطة أقوى عاطفيًا، واجعل المنتصف لخدمة القصة.", departments: ["photography"], projectFormats: ["presentation", "photography"], intent: "presentation" },
  { id: "pres-backup", text: "جهّز ملف PDF خفيف + صور JPG + نسخة على الموبايل لتفادي أي عطل عرض في آخر لحظة.", projectFormats: ["presentation", "poster", "campaign"], intent: "presentation" },

  { id: "fb-5sec-test", text: "اسأل شخصًا: 'فهمت الفكرة في 5 ثواني؟' إذا لا، غيّر العنوان أو البؤرة فقط قبل أي تعديلات كبيرة.", daysLeftMax: 2, intent: "feedback" },
  { id: "fb-identity-line", text: "في ثيمات الهوية/العزلة: اختبر هل يمكن تلخيص مشروعك بجملة شخصية صادقة؛ إن لم يمكن فالفكرة ما زالت عامة.", moods: ["identity", "isolation", "memory"], intent: "feedback" },
  { id: "scope-one-day", text: "إذا باقي يوم واحد: مخرج واحد متقن + توثيق عمليتين تحضير بدل محاولة إنهاء كل شيء.", daysLeftMax: 1, intent: "scope" }
];
