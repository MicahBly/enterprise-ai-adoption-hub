import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../chunks/ssr.js";
import "../../../../chunks/client.js";
import "../../../../chunks/useCases.js";
/* empty css                                                       */
/* empty css                                                           */
/* empty css                                                         */
import { A as Arrow_left } from "../../../../chunks/arrow-left.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let divisions;
  let tag = "";
  let useCases = [];
  let sortBy = "title";
  let filterDivision = "all";
  let filterStatus = "all";
  useCases.filter((uc) => filterDivision === "all").filter((uc) => filterStatus === "all").sort((a, b) => {
    switch (sortBy) {
      case "division":
        return a.division.localeCompare(b.division);
      case "status":
        return a.status.localeCompare(b.status);
      default:
        return a.title.localeCompare(b.title);
    }
  });
  divisions = [...new Set(useCases.map((uc) => uc.division))].sort();
  [...new Set(useCases.map((uc) => uc.status))].sort();
  useCases.filter((uc) => uc.status === "production").length;
  divisions.length;
  useCases.length > 0 ? Math.round(useCases.reduce((sum, uc) => sum + (uc.techStackAi?.length || 0), 0) / useCases.length) : 0;
  return `${$$result.head += `<!-- HEAD_svelte-120xfci_START -->${$$result.title = `<title>${escape(tag)} - AI Taxonomy | FOX AI Hub</title>`, ""}<!-- HEAD_svelte-120xfci_END -->`, ""} <div class="min-h-screen bg-gray-50"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> <button class="mb-6 inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">${validate_component(Arrow_left, "ArrowLeft").$$render($$result, { class: "h-4 w-4" }, {}, {})} <span data-svelte-h="svelte-15rpz44">Back to Use Cases</span></button> ${`<div class="animate-pulse" data-svelte-h="svelte-f0a9ul"><div class="h-8 bg-gray-200 rounded w-1/3 mb-4"></div> <div class="h-4 bg-gray-200 rounded w-1/2 mb-8"></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="h-48 bg-gray-200 rounded"></div> <div class="h-48 bg-gray-200 rounded"></div> <div class="h-48 bg-gray-200 rounded"></div></div></div>`}</div></div>`;
});
export {
  Page as default
};
