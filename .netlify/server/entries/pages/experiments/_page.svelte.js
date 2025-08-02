import { c as create_ssr_component, v as validate_component, b as each, m as missing_component, e as escape } from "../../../chunks/ssr.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "../../../chunks/CardTitle.js";
import { B as Button } from "../../../chunks/Button.js";
import { F as Flask_conical, U as Users, T as Target, R as Rocket, C as Circle_pause, a as Circle_check_big, L as Lightbulb, M as Message_square, b as Cpu, A as Award, B as Book_open, c as Clock } from "../../../chunks/users.js";
import { T as Trending_up } from "../../../chunks/trending-up.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentExperiments = [];
  let suggestedExperiments = [];
  let stats = {
    activeExperiments: 0,
    successRate: 0,
    participatingDivisions: 0,
    projectedImpact: 0
  };
  const statusStyles = {
    active: {
      bg: "bg-green-100",
      text: "text-green-700",
      icon: Circle_check_big
    },
    completed: {
      bg: "bg-blue-100",
      text: "text-blue-700",
      icon: Circle_check_big
    },
    paused: {
      bg: "bg-yellow-100",
      text: "text-yellow-700",
      icon: Circle_pause
    }
  };
  const impactStyles = {
    high: { bg: "bg-red-100", text: "text-red-700" },
    "very high": {
      bg: "bg-purple-100",
      text: "text-purple-700"
    },
    medium: {
      bg: "bg-yellow-100",
      text: "text-yellow-700"
    },
    low: { bg: "bg-gray-100", text: "text-gray-700" }
  };
  const categoryIcons = {
    training: Book_open,
    incentive: Award,
    infrastructure: Cpu,
    community: Message_square,
    low_adoption: Target
  };
  return `${$$result.head += `<!-- HEAD_svelte-1lolswk_START -->${$$result.title = `<title>AI Adoption Experiments | FOX AI Hub</title>`, ""}<!-- HEAD_svelte-1lolswk_END -->`, ""} <div class="min-h-screen bg-gray-50"> <section class="bg-gradient-to-br from-blue-600 to-blue-800 text-white" data-svelte-h="svelte-orwutz"><div class="container mx-auto px-4 py-6 sm:py-9 lg:py-12"><div class="max-w-4xl mx-auto text-center"><h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">AI Adoption Experiments</h1> <p class="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">Active initiatives and experiments to accelerate AI adoption across Fox Corporation</p></div></div>  <div class="relative"><svg class="absolute bottom-0 w-full h-8 sm:h-12 lg:h-16" preserveAspectRatio="none" viewBox="0 0 1440 64"><path fill="#f9fafb" d="M0,32L48,37.3C96,43,192,53,288,53.3C384,53,480,43,576,37.3C672,32,768,32,864,37.3C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,64L1392,64C1344,64,1248,64,1152,64C1056,64,960,64,864,64C768,64,672,64,576,64C480,64,384,64,288,64C192,64,96,64,48,64L0,64Z"></path></svg></div></section>  <main class="container mx-auto px-4 py-8 space-y-6"> <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4"><div>${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(CardHeader, "CardHeader").$$render(
        $$result,
        {
          class: "flex flex-row items-center justify-between space-y-0 pb-2"
        },
        {},
        {
          default: () => {
            return `${validate_component(CardTitle, "CardTitle").$$render($$result, { class: "text-sm font-medium" }, {}, {
              default: () => {
                return `Active Experiments`;
              }
            })} ${validate_component(Flask_conical || missing_component, "svelte:component").$$render($$result, { class: "h-4 w-4 text-black" }, {}, {})}`;
          }
        }
      )} ${validate_component(CardContent, "CardContent").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="text-2xl font-bold">${escape(stats.activeExperiments)}</div> <p class="text-xs text-black" data-svelte-h="svelte-flbb4e">Currently running</p>`;
        }
      })}`;
    }
  })}</div> <div>${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(CardHeader, "CardHeader").$$render(
        $$result,
        {
          class: "flex flex-row items-center justify-between space-y-0 pb-2"
        },
        {},
        {
          default: () => {
            return `${validate_component(CardTitle, "CardTitle").$$render($$result, { class: "text-sm font-medium" }, {}, {
              default: () => {
                return `Success Rate`;
              }
            })} ${validate_component(Trending_up || missing_component, "svelte:component").$$render($$result, { class: "h-4 w-4 text-black" }, {}, {})}`;
          }
        }
      )} ${validate_component(CardContent, "CardContent").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="text-2xl font-bold">${escape(stats.successRate)}%</div> <p class="text-xs text-black" data-svelte-h="svelte-cmue7h">Of completed experiments</p>`;
        }
      })}`;
    }
  })}</div> <div>${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(CardHeader, "CardHeader").$$render(
        $$result,
        {
          class: "flex flex-row items-center justify-between space-y-0 pb-2"
        },
        {},
        {
          default: () => {
            return `${validate_component(CardTitle, "CardTitle").$$render($$result, { class: "text-sm font-medium" }, {}, {
              default: () => {
                return `Participating Divisions`;
              }
            })} ${validate_component(Users || missing_component, "svelte:component").$$render($$result, { class: "h-4 w-4 text-black" }, {}, {})}`;
          }
        }
      )} ${validate_component(CardContent, "CardContent").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="text-2xl font-bold">${escape(stats.participatingDivisions)}</div> <p class="text-xs text-black" data-svelte-h="svelte-19plpz1">Actively engaged</p>`;
        }
      })}`;
    }
  })}</div> <div>${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(CardHeader, "CardHeader").$$render(
        $$result,
        {
          class: "flex flex-row items-center justify-between space-y-0 pb-2"
        },
        {},
        {
          default: () => {
            return `${validate_component(CardTitle, "CardTitle").$$render($$result, { class: "text-sm font-medium" }, {}, {
              default: () => {
                return `Projected Impact`;
              }
            })} ${validate_component(Target || missing_component, "svelte:component").$$render($$result, { class: "h-4 w-4 text-black" }, {}, {})}`;
          }
        }
      )} ${validate_component(CardContent, "CardContent").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="text-2xl font-bold">+${escape(stats.projectedImpact)}%</div> <p class="text-xs text-black" data-svelte-h="svelte-cazkix">Adoption increase</p>`;
        }
      })}`;
    }
  })}</div></div>  <div class="space-y-4"><div class="flex items-center justify-between"><h2 class="text-2xl font-bold text-black" data-svelte-h="svelte-c9rjce">Current Experiments</h2> ${validate_component(Button, "Button").$$render($$result, { variant: "outline", size: "sm" }, {}, {
    default: () => {
      return `${validate_component(Rocket || missing_component, "svelte:component").$$render($$result, { class: "mr-2 h-4 w-4" }, {}, {})}
				Launch New Experiment`;
    }
  })}</div> <div class="grid gap-4 md:grid-cols-2">${each(currentExperiments, (experiment, index) => {
    return `<div>${validate_component(Card, "Card").$$render(
      $$result,
      {
        class: "hover:shadow-lg transition-shadow"
      },
      {},
      {
        default: () => {
          return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="flex items-start justify-between"><div class="space-y-1">${validate_component(CardTitle, "CardTitle").$$render($$result, { class: "text-lg" }, {}, {
                default: () => {
                  return `${escape(experiment.title)}`;
                }
              })} <p class="text-sm text-black">${escape(experiment.division)}</p></div> <div class="flex items-center gap-2">${validate_component(statusStyles[experiment.status].icon || missing_component, "svelte:component").$$render(
                $$result,
                {
                  class: "h-4 w-4 " + statusStyles[experiment.status].text
                },
                {},
                {}
              )} <span class="${"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium " + escape(statusStyles[experiment.status].bg, true) + " " + escape(statusStyles[experiment.status].text, true)}">${escape(experiment.status)}</span> </div></div> `;
            }
          })} ${validate_component(CardContent, "CardContent").$$render($$result, { class: "space-y-4" }, {}, {
            default: () => {
              return `<p class="text-sm text-black">${escape(experiment.description)}</p> <div class="space-y-2"><div class="flex justify-between text-sm"><span class="text-black" data-svelte-h="svelte-113g0qn">Progress</span> <span class="font-medium">${escape(experiment.progress)}%</span></div> <div class="w-full bg-gray-200 rounded-full h-2"><div class="bg-blue-600 h-2 rounded-full" style="${"width: " + escape(experiment.progress, true) + "%"}"></div> </div></div> <div class="grid grid-cols-2 gap-4 text-sm"><div><p class="text-black" data-svelte-h="svelte-ym74jb">Started</p> <p class="font-medium">${escape(experiment.startDate)}</p></div> <div><p class="text-black" data-svelte-h="svelte-wmapx4">Duration</p> <p class="font-medium">${escape(experiment.duration)}</p> </div></div> <div class="pt-2 border-t"><p class="text-sm text-black mb-1" data-svelte-h="svelte-1chhmtf">Success Metrics</p> <ul class="text-sm space-y-1">${each(experiment.metrics, (metric) => {
                return `<li class="flex items-center gap-2">${validate_component(Circle_check_big || missing_component, "svelte:component").$$render($$result, { class: "h-3 w-3 text-green-600" }, {}, {})} ${escape(metric)} </li>`;
              })} </ul></div> `;
            }
          })} `;
        }
      }
    )} </div>`;
  })}</div></div>  <div class="space-y-4"><div class="flex items-center gap-2">${validate_component(Lightbulb || missing_component, "svelte:component").$$render($$result, { class: "h-6 w-6 text-yellow-500" }, {}, {})} <h2 class="text-2xl font-bold text-black" data-svelte-h="svelte-zw7sy4">Suggested Experiments</h2></div> <p class="text-black" data-svelte-h="svelte-1qrgy4l">Based on your adoption matrix data, here are targeted experiments to boost AI adoption</p> <div class="grid gap-6">${each(Object.entries(suggestedExperiments), ([category, experiments], categoryIndex) => {
    return `<div class="space-y-3"><div class="flex items-center gap-2">${validate_component(categoryIcons[category] || missing_component, "svelte:component").$$render($$result, { class: "h-5 w-5 text-black" }, {}, {})} <h3 class="text-lg font-semibold capitalize">${escape(category.replace("_", " "))}</h3></div> <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">${each(experiments, (suggestion, index) => {
      return `<div>${validate_component(Card, "Card").$$render(
        $$result,
        {
          class: "hover:shadow-md transition-shadow"
        },
        {},
        {
          default: () => {
            return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
              default: () => {
                return `<div class="flex items-start justify-between">${validate_component(CardTitle, "CardTitle").$$render($$result, { class: "text-base" }, {}, {
                  default: () => {
                    return `${escape(suggestion.title)}`;
                  }
                })} <span class="${"inline-flex items-center px-2 py-0.5 rounded text-xs font-medium " + escape(impactStyles[suggestion.impact].bg, true) + " " + escape(impactStyles[suggestion.impact].text, true)}">${escape(suggestion.impact)} impact
										</span></div> `;
              }
            })} ${validate_component(CardContent, "CardContent").$$render($$result, { class: "space-y-3" }, {}, {
              default: () => {
                return `<p class="text-sm text-black">${escape(suggestion.description)}</p> <div class="space-y-2"><div class="flex items-center gap-2 text-sm">${validate_component(Users || missing_component, "svelte:component").$$render($$result, { class: "h-4 w-4 text-black" }, {}, {})} <span class="text-black" data-svelte-h="svelte-1a1itgz">Target:</span> <span class="font-medium">${escape(suggestion.targetDivisions.join(", "))}</span></div> <div class="flex items-center gap-2 text-sm">${validate_component(Clock || missing_component, "svelte:component").$$render($$result, { class: "h-4 w-4 text-black" }, {}, {})} <span class="text-black" data-svelte-h="svelte-1ky2res">Duration:</span> <span class="font-medium">${escape(suggestion.estimatedDuration)}</span> </div></div> <div class="pt-3 border-t"><p class="text-xs text-black mb-2" data-svelte-h="svelte-zi1eo1">Success Criteria</p> <ul class="text-xs space-y-1">${each(suggestion.successCriteria, (criteria) => {
                  return `<li>• ${escape(criteria)}</li>`;
                })} </ul></div> ${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    variant: "outline",
                    size: "sm",
                    class: "w-full"
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(Rocket || missing_component, "svelte:component").$$render($$result, { class: "mr-2 h-4 w-4" }, {}, {})}
										Launch Experiment
									`;
                    }
                  }
                )} `;
              }
            })} `;
          }
        }
      )} </div>`;
    })}</div> </div>`;
  })}</div></div></main> </div>`;
});
export {
  Page as default
};
