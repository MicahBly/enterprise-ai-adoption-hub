import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../chunks/ssr.js";
import "../../../../chunks/client.js";
import "../../../../chunks/useCases.js";
/* empty css                                                       */
/* empty css                                                           */
import { A as Arrow_left } from "../../../../chunks/arrow-left.js";
import { I as Icon } from "../../../../chunks/Icon.js";
import { T as Trending_up } from "../../../../chunks/trending-up.js";
const Activity = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "activity" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Trending_down = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M16 17h6v-6" }], ["path", { "d": "m22 17-8.5-8.5-5 5L2 7" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "trending-down" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let levelConfig;
  let level = "";
  const adoptionLevels = {
    "high": {
      min: 75,
      max: 100,
      label: "High Adoption",
      color: "green",
      icon: Trending_up
    },
    "medium": {
      min: 50,
      max: 74,
      label: "Medium Adoption",
      color: "yellow",
      icon: Activity
    },
    "low": {
      min: 0,
      max: 49,
      label: "Low Adoption",
      color: "red",
      icon: Trending_down
    }
  };
  levelConfig = adoptionLevels[level] || adoptionLevels.low;
  return `${$$result.head += `<!-- HEAD_svelte-cgdo9r_START -->${$$result.title = `<title>${escape(levelConfig.label)} - Adoption Analysis | FOX AI Hub</title>`, ""}<!-- HEAD_svelte-cgdo9r_END -->`, ""} <div class="min-h-screen bg-gray-50"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> <button class="mb-6 inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">${validate_component(Arrow_left, "ArrowLeft").$$render($$result, { class: "h-4 w-4" }, {}, {})} <span data-svelte-h="svelte-18cp5mx">Back to Adoption Matrix</span></button> ${`<div class="animate-pulse" data-svelte-h="svelte-f0a9ul"><div class="h-8 bg-gray-200 rounded w-1/3 mb-4"></div> <div class="h-4 bg-gray-200 rounded w-1/2 mb-8"></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="h-48 bg-gray-200 rounded"></div> <div class="h-48 bg-gray-200 rounded"></div> <div class="h-48 bg-gray-200 rounded"></div></div></div>`}</div></div>`;
});
export {
  Page as default
};
