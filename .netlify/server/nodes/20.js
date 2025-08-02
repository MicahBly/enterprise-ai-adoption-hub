

export const index = 20;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/disney/music/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/20.Czhla5Bv.js","_app/immutable/chunks/BhKWKMy1.js","_app/immutable/chunks/CwgNFFi2.js","_app/immutable/chunks/IHki7fMi.js"];
export const stylesheets = ["_app/immutable/assets/20.5KsZcokn.css"];
export const fonts = [];
