import { c as create_ssr_component, e as escape, v as validate_component, b as each } from "../../../../chunks/ssr.js";
import { F as File_spreadsheet, A as AdoptionMatrix } from "../../../../chunks/AdoptionMatrix.js";
import { B as Button } from "../../../../chunks/Button.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "../../../../chunks/CardTitle.js";
import "../../../../chunks/useCases.js";
import { b as base } from "../../../../chunks/paths.js";
import { D as Download } from "../../../../chunks/download.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let matrixData = {
    categories: [],
    departments: [],
    data: []
  };
  let insights = {
    topTechnologies: [],
    topDivisions: [],
    lowAdoptionAreas: [],
    averageTechPerDivision: 0,
    mostVersatileTech: "",
    mostSpecializedDivision: ""
  };
  let highAdoption = 0;
  let mediumAdoption = 0;
  let lowAdoption = 0;
  let totalTools = 0;
  let averageAdoption = 0;
  return `<div class="min-h-screen bg-gray-50"> <section class="bg-gradient-to-br from-blue-600 to-blue-800 text-white" data-svelte-h="svelte-8b80ul"><div class="container mx-auto px-4 py-6 sm:py-9 lg:py-12"><div class="max-w-4xl mx-auto text-center"><h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">AI Adoption Matrix</h1> <p class="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">Visualize AI tool adoption across different departments and use cases in your organization</p></div></div>  <div class="relative"><svg class="absolute bottom-0 w-full h-8 sm:h-12 lg:h-16" preserveAspectRatio="none" viewBox="0 0 1440 64"><path fill="#f9fafb" d="M0,32L48,37.3C96,43,192,53,288,53.3C384,53,480,43,576,37.3C672,32,768,32,864,37.3C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,64L1392,64C1344,64,1248,64,1152,64C1056,64,960,64,864,64C768,64,672,64,576,64C480,64,384,64,288,64C192,64,96,64,48,64L0,64Z"></path></svg></div></section>  <main class="container mx-auto px-4 py-8 space-y-6"> <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-5 mb-8"> <div class="rounded-lg border bg-white text-gray-900 shadow-sm p-4 flex flex-col justify-between h-[100px]"><div class="text-sm font-medium text-gray-600 mb-2" data-svelte-h="svelte-hrx080">Total Combinations</div> <div class="text-2xl font-bold">${escape(totalTools)}</div> <div class="text-xs text-gray-400" data-svelte-h="svelte-1ozooum"> </div></div>  <div class="rounded-lg border bg-white text-gray-900 shadow-sm p-4 flex flex-col justify-between h-[100px]"><div class="text-sm font-medium text-gray-600 mb-2" data-svelte-h="svelte-1434ulr">Average Adoption</div> <div class="text-2xl font-bold">${escape(averageAdoption)}%</div> <div class="text-xs text-gray-400" data-svelte-h="svelte-1ozooum"> </div></div>  <a href="${escape(base, true) + "/adoption-level/high"}" class="block hover:shadow-lg transition-shadow"><div class="rounded-lg border bg-white text-gray-900 shadow-sm p-4 flex flex-col justify-between h-[100px] cursor-pointer hover:border-green-300 hover:bg-green-50 transition-colors"><div class="text-sm font-medium text-gray-600 mb-2" data-svelte-h="svelte-6reb4g">High Adoption</div> <div class="text-2xl font-bold text-green-600">${escape(highAdoption)}</div> <div class="text-xs text-gray-500" data-svelte-h="svelte-1g81a4y">75-100%</div></div></a>  <a href="${escape(base, true) + "/adoption-level/medium"}" class="block hover:shadow-lg transition-shadow"><div class="rounded-lg border bg-white text-gray-900 shadow-sm p-4 flex flex-col justify-between h-[100px] cursor-pointer hover:border-yellow-300 hover:bg-yellow-50 transition-colors"><div class="text-sm font-medium text-gray-600 mb-2" data-svelte-h="svelte-4xtmsz">Medium Adoption</div> <div class="text-2xl font-bold text-yellow-600">${escape(mediumAdoption)}</div> <div class="text-xs text-gray-500" data-svelte-h="svelte-u087ac">35-74%</div></div></a>  <a href="${escape(base, true) + "/adoption-level/low"}" class="block hover:shadow-lg transition-shadow"><div class="rounded-lg border bg-white text-gray-900 shadow-sm p-4 flex flex-col justify-between h-[100px] cursor-pointer hover:border-red-300 hover:bg-red-50 transition-colors"><div class="text-sm font-medium text-gray-600 mb-2" data-svelte-h="svelte-fgfi2w">Low Adoption</div> <div class="text-2xl font-bold text-red-600">${escape(lowAdoption)}</div> <div class="text-xs text-gray-500" data-svelte-h="svelte-1fodeeg">0-34%</div></div></a></div>  <div>${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="flex items-center justify-between">${validate_component(CardTitle, "CardTitle").$$render($$result, {}, {}, {
            default: () => {
              return `Adoption Heatmap`;
            }
          })} <div class="flex gap-2">${validate_component(Button, "Button").$$render($$result, { variant: "outline", size: "sm" }, {}, {
            default: () => {
              return `${validate_component(File_spreadsheet, "FileSpreadsheet").$$render($$result, { class: "mr-2 h-4 w-4" }, {}, {})}
						Export CSV`;
            }
          })} ${validate_component(Button, "Button").$$render($$result, { variant: "outline", size: "sm" }, {}, {
            default: () => {
              return `${validate_component(Download, "Download").$$render($$result, { class: "mr-2 h-4 w-4" }, {}, {})}
						Export JSON`;
            }
          })}</div></div>`;
        }
      })} ${validate_component(CardContent, "CardContent").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(AdoptionMatrix, "AdoptionMatrix").$$render($$result, { matrixData }, {}, {})}`;
        }
      })}`;
    }
  })}</div>  <div>${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(CardTitle, "CardTitle").$$render($$result, { class: "text-lg" }, {}, {
            default: () => {
              return `Key Insights`;
            }
          })}`;
        }
      })} ${validate_component(CardContent, "CardContent").$$render($$result, { class: "space-y-4" }, {}, {
        default: () => {
          return `<div class="space-y-2"><h3 class="font-semibold" data-svelte-h="svelte-1gogvog">Top Performing Technologies</h3> <ul class="list-disc list-inside space-y-1 text-sm text-muted-foreground">${each(insights.topTechnologies, (tech) => {
            return `<li>${escape(tech)}</li>`;
          })}</ul></div> <div class="space-y-2"><h3 class="font-semibold" data-svelte-h="svelte-18nk9ki">Leading Divisions</h3> <ul class="list-disc list-inside space-y-1 text-sm text-muted-foreground">${each(insights.topDivisions, (division) => {
            return `<li>${escape(division)}</li>`;
          })}</ul></div> <div class="space-y-2"><h3 class="font-semibold" data-svelte-h="svelte-mtijx0">Key Statistics</h3> <ul class="list-disc list-inside space-y-1 text-sm text-muted-foreground"><li>Average technologies per division: ${escape(insights.averageTechPerDivision)}</li> <li>Most versatile technology: ${escape(insights.mostVersatileTech)}</li> <li>AI leader: ${escape(insights.mostSpecializedDivision)}</li></ul></div> ${insights.lowAdoptionAreas.length > 0 ? `<div class="space-y-2"><h3 class="font-semibold" data-svelte-h="svelte-1fg3njz">Areas for Improvement</h3> <ul class="list-disc list-inside space-y-1 text-sm text-muted-foreground">${each(insights.lowAdoptionAreas, (area) => {
            return `<li>${escape(area)}</li>`;
          })}</ul></div>` : ``} <div class="space-y-2"><h3 class="font-semibold" data-svelte-h="svelte-1oml3qo">Recommendations</h3> <ul class="list-disc list-inside space-y-1 text-sm text-muted-foreground"><li>Cross-pollinate successful AI implementations from ${escape(insights.topDivisions[0]?.split(" ")[0] || "leading divisions")} to other divisions</li> <li>Create centers of excellence around ${escape(insights.topTechnologies[0]?.split(" ")[0] || "top technologies")} for knowledge sharing</li> <li data-svelte-h="svelte-1l07snf">Develop targeted training programs for divisions with lower adoption rates</li> <li data-svelte-h="svelte-1ql9kl8">Establish AI champions in each division to drive adoption and best practices</li></ul></div>`;
        }
      })}`;
    }
  })}</div></main> </div>`;
});
export {
  Page as default
};
