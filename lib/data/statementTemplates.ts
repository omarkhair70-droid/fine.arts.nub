import type { Department, Mood, ProjectFormat } from './juryTemplates';

export type StatementTemplate = {
  id: string;
  metadata: { departments?: Department[]; projectFormats?: ProjectFormat[]; moods?: Mood[] };
  shortVersion: string;
  formalVersion: string;
  simpleSpokenVersion: string;
  suggestedTitlePattern: string;
};

export const statementTemplates: StatementTemplate[] = Array.from({ length: 10 }).map((_, i) => ({
  id: `statement-${i + 1}`,
  metadata: { departments: ['fine-arts'], projectFormats: ['mixed-media'], moods: ['reflective'] },
  shortVersion: 'المشروع يرصد {حالة_يومية} من خلال {عنصر_بصري} لتقديم قراءة واضحة وقريبة من الناس.',
  formalVersion:
    'ينطلق هذا المشروع من ملاحظة {حالة_يومية} داخل السياق المحلي، ويطوّرها عبر تنظيم بصري يعتمد على {عنصر_بصري} بهدف إنتاج معنى مباشر ومتدرج القراءة دون تعقيد لغوي.',
  simpleSpokenVersion: 'أنا بحاول أوري {الحالة} بشكل بسيط، فركزت على {العنصر} وخليت باقي العناصر تخدمه.',
  suggestedTitlePattern: 'بين {عنصر1} و{عنصر2}: قراءة في {الحالة}'
}));
