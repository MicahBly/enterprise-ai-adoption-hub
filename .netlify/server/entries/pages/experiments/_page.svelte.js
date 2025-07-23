import { c as create_ssr_component, v as validate_component, d as each, m as missing_component, e as escape } from "../../../chunks/ssr.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "../../../chunks/CardTitle.js";
import { B as Button } from "../../../chunks/Button.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { T as Trending_up } from "../../../chunks/trending-up.js";
const Award = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
      }
    ],
    ["circle", { "cx": "12", "cy": "8", "r": "6" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "award" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Book_open = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M12 7v14" }],
    [
      "path",
      {
        "d": "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "book-open" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Circle_check_big = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M21.801 10A10 10 0 1 1 17 3.335" }],
    ["path", { "d": "m9 11 3 3L22 4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "circle-check-big" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Circle_pause = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    [
      "line",
      {
        "x1": "10",
        "x2": "10",
        "y1": "15",
        "y2": "9"
      }
    ],
    [
      "line",
      {
        "x1": "14",
        "x2": "14",
        "y1": "15",
        "y2": "9"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "circle-pause" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Clock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M12 6v6l4 2" }],
    ["circle", { "cx": "12", "cy": "12", "r": "10" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "clock" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Cpu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M12 20v2" }],
    ["path", { "d": "M12 2v2" }],
    ["path", { "d": "M17 20v2" }],
    ["path", { "d": "M17 2v2" }],
    ["path", { "d": "M2 12h2" }],
    ["path", { "d": "M2 17h2" }],
    ["path", { "d": "M2 7h2" }],
    ["path", { "d": "M20 12h2" }],
    ["path", { "d": "M20 17h2" }],
    ["path", { "d": "M20 7h2" }],
    ["path", { "d": "M7 20v2" }],
    ["path", { "d": "M7 2v2" }],
    [
      "rect",
      {
        "x": "4",
        "y": "4",
        "width": "16",
        "height": "16",
        "rx": "2"
      }
    ],
    [
      "rect",
      {
        "x": "8",
        "y": "8",
        "width": "8",
        "height": "8",
        "rx": "1"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "cpu" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Flask_conical = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"
      }
    ],
    ["path", { "d": "M6.453 15h11.094" }],
    ["path", { "d": "M8.5 2h7" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "flask-conical" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Lightbulb = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
      }
    ],
    ["path", { "d": "M9 18h6" }],
    ["path", { "d": "M10 22h4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "lightbulb" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Message_square = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "message-square" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Rocket = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
      }
    ],
    [
      "path",
      {
        "d": "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
      }
    ],
    [
      "path",
      {
        "d": "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"
      }
    ],
    [
      "path",
      {
        "d": "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "rocket" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Target = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["circle", { "cx": "12", "cy": "12", "r": "6" }],
    ["circle", { "cx": "12", "cy": "12", "r": "2" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "target" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Users = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
      }
    ],
    ["path", { "d": "M16 3.128a4 4 0 0 1 0 7.744" }],
    ["path", { "d": "M22 21v-2a4 4 0 0 0-3-3.87" }],
    ["circle", { "cx": "9", "cy": "7", "r": "4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "users" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
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
    community: Message_square
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
            })} ${validate_component(Flask_conical || missing_component, "svelte:component").$$render($$result, { class: "h-4 w-4 text-muted-foreground" }, {}, {})}`;
          }
        }
      )} ${validate_component(CardContent, "CardContent").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="text-2xl font-bold">${escape(stats.activeExperiments)}</div> <p class="text-xs text-muted-foreground" data-svelte-h="svelte-re80uq">Currently running</p>`;
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
            })} ${validate_component(Trending_up || missing_component, "svelte:component").$$render($$result, { class: "h-4 w-4 text-muted-foreground" }, {}, {})}`;
          }
        }
      )} ${validate_component(CardContent, "CardContent").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="text-2xl font-bold">${escape(stats.successRate)}%</div> <p class="text-xs text-muted-foreground" data-svelte-h="svelte-esnakv">Of completed experiments</p>`;
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
            })} ${validate_component(Users || missing_component, "svelte:component").$$render($$result, { class: "h-4 w-4 text-muted-foreground" }, {}, {})}`;
          }
        }
      )} ${validate_component(CardContent, "CardContent").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="text-2xl font-bold">${escape(stats.participatingDivisions)}</div> <p class="text-xs text-muted-foreground" data-svelte-h="svelte-jogf3">Actively engaged</p>`;
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
            })} ${validate_component(Target || missing_component, "svelte:component").$$render($$result, { class: "h-4 w-4 text-muted-foreground" }, {}, {})}`;
          }
        }
      )} ${validate_component(CardContent, "CardContent").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="text-2xl font-bold">+${escape(stats.projectedImpact)}%</div> <p class="text-xs text-muted-foreground" data-svelte-h="svelte-rxo53f">Adoption increase</p>`;
        }
      })}`;
    }
  })}</div></div>  <div class="space-y-4"><div class="flex items-center justify-between"><h2 class="text-2xl font-bold" data-svelte-h="svelte-7yvknt">Current Experiments</h2> ${validate_component(Button, "Button").$$render($$result, { variant: "outline", size: "sm" }, {}, {
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
              })} <p class="text-sm text-muted-foreground">${escape(experiment.division)}</p></div> <div class="flex items-center gap-2">${validate_component(statusStyles[experiment.status].icon || missing_component, "svelte:component").$$render(
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
              return `<p class="text-sm text-gray-600">${escape(experiment.description)}</p> <div class="space-y-2"><div class="flex justify-between text-sm"><span class="text-muted-foreground" data-svelte-h="svelte-8mb5q7">Progress</span> <span class="font-medium">${escape(experiment.progress)}%</span></div> <div class="w-full bg-gray-200 rounded-full h-2"><div class="bg-blue-600 h-2 rounded-full" style="${"width: " + escape(experiment.progress, true) + "%"}"></div> </div></div> <div class="grid grid-cols-2 gap-4 text-sm"><div><p class="text-muted-foreground" data-svelte-h="svelte-1jhj0mz">Started</p> <p class="font-medium">${escape(experiment.startDate)}</p></div> <div><p class="text-muted-foreground" data-svelte-h="svelte-lhbmgu">Duration</p> <p class="font-medium">${escape(experiment.duration)}</p> </div></div> <div class="pt-2 border-t"><p class="text-sm text-muted-foreground mb-1" data-svelte-h="svelte-1icxfb7">Success Metrics</p> <ul class="text-sm space-y-1">${each(experiment.metrics, (metric) => {
                return `<li class="flex items-center gap-2">${validate_component(Circle_check_big || missing_component, "svelte:component").$$render($$result, { class: "h-3 w-3 text-green-600" }, {}, {})} ${escape(metric)} </li>`;
              })} </ul></div> `;
            }
          })} `;
        }
      }
    )} </div>`;
  })}</div></div>  <div class="space-y-4"><div class="flex items-center gap-2">${validate_component(Lightbulb || missing_component, "svelte:component").$$render($$result, { class: "h-6 w-6 text-yellow-500" }, {}, {})} <h2 class="text-2xl font-bold" data-svelte-h="svelte-1n3rg13">Suggested Experiments</h2></div> <p class="text-muted-foreground" data-svelte-h="svelte-m8aith">Based on your adoption matrix data, here are targeted experiments to boost AI adoption</p> <div class="grid gap-6">${each(Object.entries(suggestedExperiments), ([category, experiments], categoryIndex) => {
    return `<div class="space-y-3"><div class="flex items-center gap-2">${validate_component(categoryIcons[category] || missing_component, "svelte:component").$$render($$result, { class: "h-5 w-5 text-gray-600" }, {}, {})} <h3 class="text-lg font-semibold capitalize">${escape(category.replace("_", " "))}</h3></div> <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">${each(experiments, (suggestion, index) => {
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
                return `<p class="text-sm text-gray-600">${escape(suggestion.description)}</p> <div class="space-y-2"><div class="flex items-center gap-2 text-sm">${validate_component(Users || missing_component, "svelte:component").$$render($$result, { class: "h-4 w-4 text-gray-400" }, {}, {})} <span class="text-muted-foreground" data-svelte-h="svelte-1bp99gj">Target:</span> <span class="font-medium">${escape(suggestion.targetDivisions.join(", "))}</span></div> <div class="flex items-center gap-2 text-sm">${validate_component(Clock || missing_component, "svelte:component").$$render($$result, { class: "h-4 w-4 text-gray-400" }, {}, {})} <span class="text-muted-foreground" data-svelte-h="svelte-paqqjy">Duration:</span> <span class="font-medium">${escape(suggestion.estimatedDuration)}</span> </div></div> <div class="pt-3 border-t"><p class="text-xs text-muted-foreground mb-2" data-svelte-h="svelte-2hi7fn">Success Criteria</p> <ul class="text-xs space-y-1">${each(suggestion.successCriteria, (criteria) => {
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
