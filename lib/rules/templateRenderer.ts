export function renderTemplate(template:string, vars:Record<string,string>) {
  return Object.entries(vars).reduce((acc,[k,v])=>acc.replaceAll(`{${k}}`,v),template);
}
