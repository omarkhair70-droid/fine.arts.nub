export function scoreByIncludes<T extends string>(value:T|undefined,list?:T[]){if(!value||!list) return 0; return list.includes(value)?1:0;}
