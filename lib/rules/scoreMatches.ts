export function scoreMatches(input: string, keywords: string[]): number {
  const normalized = input.toLowerCase();
  return keywords.reduce((score, keyword) => (normalized.includes(keyword.toLowerCase()) ? score + 1 : score), 0);
}
