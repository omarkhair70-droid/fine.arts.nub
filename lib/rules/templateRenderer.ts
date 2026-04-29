export function templateRenderer(template: string, values: Record<string, string>): string {
  return Object.entries(values).reduce(
    (output, [key, value]) => output.replaceAll(`{{${key}}}`, value),
    template
  );
}
