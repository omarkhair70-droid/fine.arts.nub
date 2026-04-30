export function getSuitabilityLabel(score: number): string {
  if (score >= 80) return "مناسب جدًا";
  if (score >= 50) return "مناسب";
  return "محتاج تعديل بسيط";
}
