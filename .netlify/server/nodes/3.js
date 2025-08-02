

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.ChdHShKx.js","_app/immutable/chunks/BhKWKMy1.js","_app/immutable/chunks/CwgNFFi2.js","_app/immutable/chunks/IHki7fMi.js"];
export const stylesheets = ["_app/immutable/assets/3.w_psJ5I7.css"];
export const fonts = [];
