export type ToolParams = Record<string, string | number | undefined | null> | object;

export function buildToolUrl(route: string, params: ToolParams = {}) {
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(params as Record<string, unknown>)) {
    if (value === undefined || value === null || value === "") continue;
    query.set(key, String(value));
  }
  const queryString = query.toString();
  return queryString ? `${route}?${queryString}` : route;
}

export function readToolParams(searchParams: URLSearchParams | ReadonlyURLSearchParams | null) {
  if (!searchParams) return {} as Record<string, string>;
  const rawEntries = Array.from(searchParams.entries());
  return rawEntries.reduce<Record<string, string>>((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});
}

type ReadonlyURLSearchParams = {
  entries: () => IterableIterator<[string, string]>;
};
