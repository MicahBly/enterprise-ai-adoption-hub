

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/disney/entertainment/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.Dybcaqn4.js","_app/immutable/chunks/BhKWKMy1.js","_app/immutable/chunks/CwgNFFi2.js","_app/immutable/chunks/IHki7fMi.js"];
export const stylesheets = [];
export const fonts = [];
