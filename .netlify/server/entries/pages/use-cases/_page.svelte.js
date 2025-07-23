import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { F as FilterBar, U as UseCaseGrid } from "../../../chunks/UseCaseGrid.js";
import { f as filteredUseCases } from "../../../chunks/useCases.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let totalUseCases;
  let productionCount;
  let developmentCount;
  let pilotCount;
  let $filteredUseCases, $$unsubscribe_filteredUseCases;
  $$unsubscribe_filteredUseCases = subscribe(filteredUseCases, (value) => $filteredUseCases = value);
  let viewMode = "list";
  let divisions = [];
  let tags = [];
  let statuses = [];
  let selectedDivision = "";
  let selectedTags = [];
  let selectedStatus = "";
  let searchQuery = "";
  let loading = true;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    totalUseCases = $filteredUseCases.length;
    productionCount = $filteredUseCases.filter((uc) => uc.status === "production").length;
    developmentCount = $filteredUseCases.filter((uc) => uc.status === "development").length;
    pilotCount = $filteredUseCases.filter((uc) => uc.status === "pilot").length;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-8l3fd1_START -->${$$result.title = `<title>Use Cases - FOX AI Hub</title>`, ""}<meta name="description" content="Browse all AI use cases across FOX Corporation divisions"><!-- HEAD_svelte-8l3fd1_END -->`, ""} <div class="min-h-screen bg-gray-50"> <section class="bg-gradient-to-br from-blue-600 to-blue-800 text-white"><div class="container mx-auto px-4 py-6 sm:py-9 lg:py-12"><div class="max-w-4xl mx-auto text-center"><h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" data-svelte-h="svelte-v0j0vs">AI Use Cases</h1> <p class="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed" data-svelte-h="svelte-rl6yx6">Explore real AI implementations across FOX Corporation. From the OneFOX advertising platform to MediaCloud infrastructure, 
					discover how we&#39;re leveraging artificial intelligence to transform media and entertainment.</p>  <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"><div class="bg-white/10 backdrop-blur-sm rounded-lg p-4"><div class="text-2xl font-bold">${escape(totalUseCases)}</div> <div class="text-sm text-blue-100" data-svelte-h="svelte-1660m5l">Total Use Cases</div></div> <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4"><div class="text-2xl font-bold">${escape(productionCount)}</div> <div class="text-sm text-blue-100" data-svelte-h="svelte-ivr1zf">In Production</div></div> <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4"><div class="text-2xl font-bold">${escape(developmentCount)}</div> <div class="text-sm text-blue-100" data-svelte-h="svelte-1volh9l">In Development</div></div> <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4"><div class="text-2xl font-bold">${escape(pilotCount)}</div> <div class="text-sm text-blue-100" data-svelte-h="svelte-1uwxbic">In Pilot</div></div></div></div></div>  <div class="relative" data-svelte-h="svelte-1e5xrvv"><svg class="absolute bottom-0 w-full h-8 sm:h-12 lg:h-16" preserveAspectRatio="none" viewBox="0 0 1440 64"><path fill="#f9fafb" d="M0,32L48,37.3C96,43,192,53,288,53.3C384,53,480,43,576,37.3C672,32,768,32,864,37.3C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,64L1392,64C1344,64,1248,64,1152,64C1056,64,960,64,864,64C768,64,672,64,576,64C480,64,384,64,288,64C192,64,96,64,48,64L0,64Z"></path></svg></div></section>  <main class="container mx-auto px-4 py-8"> <div class="mb-6"><div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4"><h2 class="text-xl font-semibold text-gray-900" data-svelte-h="svelte-2k80ml">Filter &amp; Search</h2>  <div class="flex items-center gap-2 bg-white rounded-lg border border-gray-200 p-1"><button class="${[
      "px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
      "  text-gray-600 hover:text-gray-900"
    ].join(" ").trim()}" aria-label="Grid view" data-svelte-h="svelte-1td29cs"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg></button> <button class="${[
      "px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
      "bg-blue-600 text-white  "
    ].join(" ").trim()}" aria-label="List view" data-svelte-h="svelte-f70api"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button></div></div>  ${validate_component(FilterBar, "FilterBar").$$render(
      $$result,
      {
        divisions,
        statuses,
        availableTags: tags,
        selectedDivision,
        selectedTags,
        selectedStatus,
        searchQuery
      },
      {
        selectedDivision: ($$value) => {
          selectedDivision = $$value;
          $$settled = false;
        },
        selectedTags: ($$value) => {
          selectedTags = $$value;
          $$settled = false;
        },
        selectedStatus: ($$value) => {
          selectedStatus = $$value;
          $$settled = false;
        },
        searchQuery: ($$value) => {
          searchQuery = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>  ${``}  ${validate_component(UseCaseGrid, "UseCaseGrid").$$render(
      $$result,
      {
        useCases: $filteredUseCases,
        viewMode,
        loading
      },
      {},
      {}
    )}  ${``}  <div class="mt-12 pt-8 border-t" data-svelte-h="svelte-1i382k5"><div class="flex justify-center"><a href="/" class="group p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"><div class="flex items-center gap-4"><div class="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors"><svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg></div> <div><h3 class="font-semibold text-gray-900">Back to Dashboard</h3> <p class="text-sm text-gray-600 mt-1">Return to the main AI Hub dashboard</p></div></div></a></div></div></main></div>`;
  } while (!$$settled);
  $$unsubscribe_filteredUseCases();
  return $$rendered;
});
export {
  Page as default
};
