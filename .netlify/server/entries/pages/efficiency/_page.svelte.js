import { c as create_ssr_component, v as validate_component, e as escape } from "../../../chunks/ssr.js";
import { D as Download } from "../../../chunks/download.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1n0hq3b_START -->${$$result.title = `<title>Efficiency Dashboard | FOX AI Hub</title>`, ""}<!-- HEAD_svelte-1n0hq3b_END -->`, ""} <div class="min-h-screen bg-gray-50"> <section class="bg-gradient-to-br from-blue-600 to-blue-800 text-white" data-svelte-h="svelte-56zgnr"><div class="container mx-auto px-4 py-6 sm:py-9 lg:py-12"><div class="max-w-4xl mx-auto text-center"><h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Efficiency Dashboard</h1> <p class="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">Key performance indicators demonstrating AI&#39;s impact on operational efficiency and cost savings</p></div></div>  <div class="relative"><svg class="absolute bottom-0 w-full h-8 sm:h-12 lg:h-16" preserveAspectRatio="none" viewBox="0 0 1440 64"><path fill="#f9fafb" d="M0,32L48,37.3C96,43,192,53,288,53.3C384,53,480,43,576,37.3C672,32,768,32,864,37.3C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,64L1392,64C1344,64,1248,64,1152,64C1056,64,960,64,864,64C768,64,672,64,576,64C480,64,384,64,288,64C192,64,96,64,48,64L0,64Z"></path></svg></div></section>  <main class="container mx-auto px-4 py-8"> <div class="flex justify-between items-start mb-6"><div class="flex gap-2"><button class="flex items-center px-3 py-1 text-sm font-medium rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">${validate_component(Download, "Download").$$render($$result, { class: "mr-2 h-4 w-4" }, {}, {})}
				Export PDF</button> <button class="flex items-center px-3 py-1 text-sm font-medium rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">${validate_component(Download, "Download").$$render($$result, { class: "mr-2 h-4 w-4" }, {}, {})}
				Export Excel</button></div></div>  <div class="flex gap-2"><button class="${"px-3 py-1 text-sm font-medium rounded-md transition-colors " + escape(
    "bg-blue-600 text-white",
    true
  )}">All Time</button> <button class="${"px-3 py-1 text-sm font-medium rounded-md transition-colors " + escape(
    "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50",
    true
  )}">Quarterly</button> <button class="${"px-3 py-1 text-sm font-medium rounded-md transition-colors " + escape(
    "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50",
    true
  )}">Monthly</button></div> ${`<div class="flex items-center justify-center h-64" data-svelte-h="svelte-1u4ktef"><div class="text-muted-foreground">Loading efficiency metrics...</div></div>`}</main> </div>`;
});
export {
  Page as default
};
