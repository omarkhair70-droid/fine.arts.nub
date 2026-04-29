import type {
  BudgetLevel,
  Department,
  ExperienceLevel,
  Mood,
  ProjectFormat
} from "@/types/taxonomy";

export interface IdeaSeed {
  id: string;
  title: string;
  departments?: Department[];
  projectFormats?: ProjectFormat[];
  moods?: Mood[];
  budgetLevels?: BudgetLevel[];
  experienceLevels?: ExperienceLevel[];
  concept: string;
  materials: string[];
  executionMethod: string[];
  whyStrong: string;
  shortExplanation: string;
  juryDefenseLine: string;
}

export const ideaSeeds: IdeaSeed[] = [
  {
    id: "idea-01",
    title: "العزلة وسط الزحمة",
    departments: ["graphic", "painting", "photography"],
    projectFormats: ["poster", "painting", "photography"],
    moods: ["isolation", "city", "tension"],
    budgetLevels: ["very-low", "low"],
    experienceLevels: ["beginner", "intermediate"],
    concept: "مشهد بصري يبرز فردًا وحيدًا داخل إيقاع مدينة مزدحم ومتشابه.",
    materials: ["صور شارع", "ورق مطبوع", "قلم ماركر أسود"],
    executionMethod: ["التقاط/جمع خامات شارع", "قص ولصق تكوينات", "تأكيد نقطة العزلة بلون واحد"],
    whyStrong: "الفكرة مفهومة بسرعة وتخاطب إحساسًا يوميًا مشتركًا.",
    shortExplanation: "تحويل الزحام إلى خلفية متكررة لإبراز الوحدة النفسية.",
    juryDefenseLine: "اعتمدت التكرار كاختيار بصري ليظهر أثر العزلة لا شكل الزحام فقط."
  },
  {
    id: "idea-02",
    title: "الذاكرة في البيت القديم",
    departments: ["painting", "drawing", "photography"],
    projectFormats: ["painting", "installation", "photography"],
    moods: ["memory", "nostalgia"],
    budgetLevels: ["low", "medium"],
    experienceLevels: ["beginner", "intermediate"],
    concept: "استحضار أثر السكن القديم عبر تفاصيل الجدران والأثاث والضوء الباهت.",
    materials: ["صور عائلية قديمة", "ورق شفاف", "ألوان مائية"],
    executionMethod: ["بناء طبقات من الصور", "إضافة لمسات لونية خفيفة", "ترك أجزاء ممسوحة عمدًا"],
    whyStrong: "يوازن بين الحس الشخصي واللغة البصرية القابلة للفهم العام.",
    shortExplanation: "قراءة البيت القديم كأرشيف عاطفي حي.",
    juryDefenseLine: "استخدمت التلاشي البصري للتعبير عن ذاكرة تتذكر وتنسى في الوقت نفسه."
  },
  {
    id: "idea-03",
    title: "المدينة واللافتات والأسلاك",
    departments: ["graphic", "decor", "drawing"],
    projectFormats: ["poster", "campaign", "space"],
    moods: ["city", "chaos", "tension"],
    budgetLevels: ["very-low", "low", "medium"],
    experienceLevels: ["beginner", "intermediate", "advanced"],
    concept: "تحويل فوضى اللافتات والأسلاك إلى نظام بصري يحكي هوية المدينة.",
    materials: ["صور لافتات", "خيوط سوداء", "خلفية كرتون"],
    executionMethod: ["تحليل أشكال الحروف", "رسم شبكة خطوط", "صياغة تكوين بصري متدرج"],
    whyStrong: "يرتبط بالواقع المحلي ويمنح مساحة ابتكار عالية في التكوين.",
    shortExplanation: "قراءة المشهد الحضري كطبقات اتصال وتشويش.",
    juryDefenseLine: "العمل لا يدين الفوضى بل يحولها إلى لغة بصرية قابلة للقراءة."
  },
  {
    id: "idea-04",
    title: "أثر الطفولة",
    departments: ["drawing", "painting", "sculpture"],
    projectFormats: ["painting", "sculpture", "installation"],
    moods: ["childhood", "memory", "hope"],
    budgetLevels: ["low", "medium"],
    experienceLevels: ["beginner", "intermediate"],
    concept: "استعادة أثر الطفولة عبر ألعاب ومسارات حركة وألوان أولية.",
    materials: ["لعبة قديمة", "ألوان أكريليك", "أسلاك خفيفة"],
    executionMethod: ["اختيار رمز طفولي", "تكرار الأثر الحركي", "دمج خامات بسيطة"],
    whyStrong: "الفكرة إنسانية وتدعم سردًا بصريًا مؤثرًا بدون تعقيد.",
    shortExplanation: "الطفولة كبصمة تستمر في تشكيل الحاضر.",
    juryDefenseLine: "ركزت على الأثر لا الحنين فقط، لذلك ظهرت الحركة كعنصر أساسي."
  },
  {
    id: "idea-05",
    title: "الفقد والفراغ",
    departments: ["decor", "sculpture", "photography"],
    projectFormats: ["installation", "space", "photography"],
    moods: ["sadness", "isolation", "memory"],
    budgetLevels: ["low", "medium"],
    experienceLevels: ["intermediate", "advanced"],
    concept: "تمثيل الفقد عبر مساحات ناقصة وعناصر مقطوعة عن سياقها.",
    materials: ["إطارات فارغة", "قماش أبيض", "إضاءة جانبية"],
    executionMethod: ["تحديد مناطق فراغ", "بناء إيقاع غياب", "اختبار مسار المتلقي داخل العمل"],
    whyStrong: "يعطي تجربة حسية مباشرة ويؤسس حوارًا نقديًا مع اللجنة.",
    shortExplanation: "الفراغ ليس نقصًا بل حضورًا من نوع آخر.",
    juryDefenseLine: "اعتمدت الفراغ كعنصر بنائي لأن الفقد يُرى غالبًا بما لم يعد موجودًا."
  },
  {
    id: "idea-06",
    title: "الهوية الشعبية",
    departments: ["graphic", "ceramics", "decor"],
    projectFormats: ["poster", "campaign", "presentation"],
    moods: ["identity", "city", "hope"],
    budgetLevels: ["very-low", "low"],
    experienceLevels: ["beginner", "intermediate"],
    concept: "توليف عناصر شعبية يومية في نظام بصري حديث يحافظ على الأصل.",
    materials: ["صور نقوش شعبية", "خط عربي يدوي", "ورق ملون"],
    executionMethod: ["جمع مفردات محلية", "إعادة ترتيبها في شبكة حديثة", "تجربة نسخ لونية مختصرة"],
    whyStrong: "واضحة للمشاهد وتخدم ملف الطالب في مشاريع الهوية.",
    shortExplanation: "هوية بصرية تحترم الشعبي وتقدمه بمعالجة معاصرة.",
    juryDefenseLine: "اختياري للمفردات الشعبية كان بحثيًا لا زخرفيًا، بهدف بناء هوية قابلة للتطبيق."
  },
  {
    id: "idea-07",
    title: "التوتر بين النظام والفوضى",
    departments: ["graphic", "decor", "drawing"],
    projectFormats: ["poster", "space", "installation"],
    moods: ["tension", "chaos"],
    budgetLevels: ["very-low", "low", "medium"],
    experienceLevels: ["intermediate", "advanced"],
    concept: "مقارنة بصرية بين شبكة منتظمة وتدخلات حرة تكسر القواعد.",
    materials: ["ورق جريد", "حبر أسود", "شرائط لاصقة"],
    executionMethod: ["بناء شبكة أساسية", "إدخال عناصر عشوائية", "إظهار نقاط الصدام"],
    whyStrong: "تصلح كمشروع نقدي وتحليلي وتبرز وعيًا بنيويًا.",
    shortExplanation: "كيف يتعايش الانضباط مع الانفلات داخل عمل واحد.",
    juryDefenseLine: "التناقض كان مقصودًا لإظهار ديناميكية الواقع لا للوصول إلى شكل متوازن فقط."
  },
  {
    id: "idea-08",
    title: "مساحة للتنفس",
    departments: ["decor", "painting", "general"],
    projectFormats: ["space", "installation", "painting"],
    moods: ["hope", "isolation"],
    budgetLevels: ["low", "medium", "open"],
    experienceLevels: ["beginner", "intermediate", "advanced"],
    concept: "تصميم مساحة/لوحة تمنح المتلقي توقفًا بصريًا داخل ضغط المشهد.",
    materials: ["قماش فاتح", "إضاءة دافئة", "خامات ناعمة"],
    executionMethod: ["تقليل العناصر", "تركيز على الإيقاع الهادئ", "تجربة مسافات بيضاء واسعة"],
    whyStrong: "يعكس نضجًا في التحكم بالإيقاع والفراغ.",
    shortExplanation: "التنفس كاحتياج نفسي يُترجم بصريًا.",
    juryDefenseLine: "الاختزال هنا قرار تعبيري يضع الراحة كرسالة أساسية للعمل."
  },
  {
    id: "idea-09",
    title: "غرف مغلقة",
    departments: ["photography", "decor", "drawing"],
    projectFormats: ["photography", "installation", "presentation"],
    moods: ["isolation", "sadness", "tension"],
    budgetLevels: ["low", "medium"],
    experienceLevels: ["intermediate", "advanced"],
    concept: "توثيق/إعادة بناء غرف مغلقة كاستعارة للحواجز النفسية والاجتماعية.",
    materials: ["كاميرا أو هاتف", "مصدر ضوء واحد", "قطع أثاث بسيطة"],
    executionMethod: ["اختيار زوايا ضيقة", "التحكم الحاد في الظلال", "تقديم تسلسل بصري تدريجي"],
    whyStrong: "يعطي عمقًا مفاهيميًا مع لغة بصرية مباشرة وقابلة للشرح.",
    shortExplanation: "المكان المغلق كصورة للحالة الداخلية.",
    juryDefenseLine: "ركزت على علاقة الجسد بالمكان لتجسيد الإغلاق كإحساس لا كديكور."
  },
  {
    id: "idea-10",
    title: "أثر اليد",
    departments: ["drawing", "ceramics", "sculpture"],
    projectFormats: ["sculpture", "installation", "presentation"],
    moods: ["identity", "memory", "hope"],
    budgetLevels: ["very-low", "low", "medium"],
    experienceLevels: ["beginner", "intermediate"],
    concept: "التركيز على البصمة اليدوية كدليل حضور شخصي ومهاري.",
    materials: ["طين أو جبس", "ورق خشن", "حبر"],
    executionMethod: ["جمع طبعات يد", "بناء تسلسل زمني للأثر", "إبراز اختلاف الضغط والملمس"],
    whyStrong: "يجمع بين الفكرة والمهارة التنفيذية في شكل مقنع تحكيميًا.",
    shortExplanation: "اليد كهوية تتكرر وتتحول عبر الزمن.",
    juryDefenseLine: "أظهرت أثر اليد مباشرة لتأكيد حضور الصانع داخل العمل لا خارجه."
  },
  {
    id: "idea-11",
    title: "أسماء الحارة",
    departments: ["graphic", "photography", "general"],
    projectFormats: ["poster", "campaign", "presentation"],
    moods: ["identity", "city", "memory"],
    budgetLevels: ["very-low", "low"],
    experienceLevels: ["beginner", "intermediate", "advanced"],
    concept: "تحويل أسماء الشوارع/الحارات إلى نظام حروفي يحكي تاريخ المكان.",
    materials: ["صور لافتات", "خط يدوي", "ورق A3"],
    executionMethod: ["توثيق الأسماء", "اختيار عائلات حروف", "بناء ملصقات متسلسلة"],
    whyStrong: "مناسب جدًا لمشاريع الجرافيك ويملك بعدًا بحثيًا محليًا.",
    shortExplanation: "الاسم كبوابة للذاكرة والانتماء.",
    juryDefenseLine: "اعتمدت الأسماء كمادة أرشيفية حية تمنح المشروع خصوصيته المحلية."
  },
  {
    id: "idea-12",
    title: "ضوء آخر اليوم",
    departments: ["painting", "photography", "drawing"],
    projectFormats: ["painting", "photography", "presentation"],
    moods: ["nostalgia", "hope", "memory"],
    budgetLevels: ["very-low", "low", "medium"],
    experienceLevels: ["beginner", "intermediate"],
    concept: "تسجيل التحول اللوني والظلي في لحظة الغروب كمجاز للنهايات المفتوحة.",
    materials: ["كاميرا هاتف", "ألوان دافئة", "ورق/كانفاس"],
    executionMethod: ["توثيق زمن قصير يوميًا", "تحليل درجات الضوء", "بناء سلسلة لقطات أو لوحات"],
    whyStrong: "مؤثر بصريًا ويُظهر حس ملاحظة وانضباطًا في المتابعة.",
    shortExplanation: "ضوء نهاية اليوم كمساحة بين الفقد والأمل.",
    juryDefenseLine: "اختيار توقيت الغروب سمح لي ببناء سرد لوني متدرج يعكس تحول الشعور."
  }
];
