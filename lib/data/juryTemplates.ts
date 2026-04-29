export type Department = 'fine-arts' | 'applied-arts' | 'architecture' | 'art-education';
export type ProjectFormat = 'painting' | 'installation' | 'mixed-media' | 'graphic' | 'photo';
export type Mood = 'calm' | 'urgent' | 'reflective' | 'critical';

export type JuryTemplate = {
  id: string;
  metadata: { departments?: Department[]; projectFormats?: ProjectFormat[]; moods?: Mood[]; triggerKeywords?: string[] };
  question: string;
  suggestedAnswerTemplate: string;
  answerStyleTip: string;
  strengthHints: string[];
  weaknessWarnings: string[];
  avoidSaying: string[];
};

const base = (id:number,question:string):JuryTemplate=>({id:`jury-${id}`,metadata:{departments:['fine-arts'],projectFormats:['mixed-media'],moods:['calm'],triggerKeywords:['فكرة','تنفيذ']},question,suggestedAnswerTemplate:'أنا بدأت من ملاحظة {الموقف_اليومي}، وبعدها حددت {العنصر_الرئيسي} عشان يوصل المعنى بسرعة. استخدمت {الخامة} لأنها بتخدم الإحساس بـ {الحالة}.',answerStyleTip:'اتكلم بهدوء، جملة قصيرة، وبص للدكتور مباشرة.',strengthHints:['اربط القرار التقني بالمعنى فورًا.','اذكر تعديل عملته بعد النقد.'],weaknessWarnings:['الإطالة في الحكي الشخصي بدون ربط بصري.','الدفاع العدائي عن كل تفصيلة.'],avoidSaying:['أنا عملت كده وخلاص.','معرفش ليه اخترت ده.']});

export const juryTemplates:JuryTemplate[]=[
base(1,'ليه اخترت الفكرة دي تحديدًا؟'),base(2,'إيه اللي يخلي مشروعك مختلف؟'),base(3,'فين البؤرة البصرية عندك؟'),base(4,'إزاي الخامة خدمت المعنى؟'),base(5,'إيه نقطة القوة الأساسية؟'),base(6,'لو عندك يوم زيادة هتعدل إيه؟'),base(7,'فين الضعف الحالي في المشروع؟'),base(8,'إيه علاقة المشروع بالسياق المحلي؟'),base(9,'ليه اخترت التكوين ده؟'),base(10,'إزاي رتبت رحلة عين المشاهد؟'),base(11,'إيه سبب استخدام اللون المحدود؟'),base(12,'المشروع شخصي ولا عام؟'),base(13,'إزاي تعاملت مع النقد السابق؟'),base(14,'فين التوتر المقصود في العمل؟'),base(15,'إيه الرسالة في جملة واحدة؟'),base(16,'إزاي تثبت إن الحل مش عشوائي؟'),base(17,'ما علاقتك بالموضوع إنسانيًا؟'),base(18,'إيه بديلك لو الخامة فشلت؟'),base(19,'هل المشروع مكتمل ولا مفتوح؟'),base(20,'ليه اللجنة توافق على المسار ده؟')
];
