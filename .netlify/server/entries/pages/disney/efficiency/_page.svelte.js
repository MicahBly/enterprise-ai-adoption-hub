import { c as create_ssr_component, e as escape, b as each } from "../../../../chunks/ssr.js";
function formatCurrency(value) {
  return new Intl.NumberFormat(
    "en-US",
    {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }
  ).format(value);
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const efficiencyData = {
    overall: {
      costSavings: 125e6
    },
    byDivision: [
      {
        name: "Disney Entertainment",
        metrics: {
          costSavings: 65e6,
          timeReduction: 45,
          qualityScore: 92,
          projectsCompleted: 18
        },
        topImpacts: [
          {
            name: "Animation Production",
            savings: 28e6,
            efficiency: "+40%"
          },
          {
            name: "VFX Rendering",
            savings: 22e6,
            efficiency: "+60%"
          },
          {
            name: "Content Personalization",
            savings: 15e6,
            efficiency: "+35%"
          }
        ]
      },
      {
        name: "ESPN",
        metrics: {
          costSavings: 25e6,
          timeReduction: 35,
          qualityScore: 88,
          projectsCompleted: 8
        },
        topImpacts: [
          {
            name: "Automated Highlights",
            savings: 12e6,
            efficiency: "+80%"
          },
          {
            name: "Fantasy Analytics",
            savings: 8e6,
            efficiency: "+45%"
          },
          {
            name: "Real-time Stats",
            savings: 5e6,
            efficiency: "+50%"
          }
        ]
      },
      {
        name: "Disney Experiences",
        metrics: {
          costSavings: 35e6,
          timeReduction: 32,
          qualityScore: 95,
          projectsCompleted: 12
        },
        topImpacts: [
          {
            name: "Crowd Management",
            savings: 15e6,
            efficiency: "+25%"
          },
          {
            name: "Predictive Maintenance",
            savings: 12e6,
            efficiency: "+73%"
          },
          {
            name: "Guest Services AI",
            savings: 8e6,
            efficiency: "+70%"
          }
        ]
      }
    ],
    monthlyTrend: [
      {
        month: "Jan",
        savings: 85e5,
        projects: 28
      },
      {
        month: "Feb",
        savings: 92e5,
        projects: 30
      },
      {
        month: "Mar",
        savings: 101e5,
        projects: 32
      },
      {
        month: "Apr",
        savings: 113e5,
        projects: 35
      },
      {
        month: "May",
        savings: 108e5,
        projects: 33
      },
      {
        month: "Jun",
        savings: 124e5,
        projects: 38
      }
    ],
    keyMetrics: [
      {
        title: "Animation Time Saved",
        value: "40%",
        change: "+8%",
        trend: "up",
        description: "Reduction in animation production time"
      },
      {
        title: "Guest Wait Times",
        value: "-25%",
        change: "-5%",
        trend: "up",
        description: "Average wait time reduction in parks"
      },
      {
        title: "Content Engagement",
        value: "+35%",
        change: "+7%",
        trend: "up",
        description: "Increase in Disney+ engagement"
      },
      {
        title: "Operational Costs",
        value: "-18%",
        change: "-3%",
        trend: "up",
        description: "Reduction in overall operational costs"
      }
    ],
    roiByCategory: [
      {
        category: "Content Creation",
        roi: 312,
        investment: 45e6
      },
      {
        category: "Guest Experience",
        roi: 285,
        investment: 38e6
      },
      {
        category: "Operations",
        roi: 428,
        investment: 22e6
      },
      {
        category: "Analytics",
        roi: 256,
        investment: 18e6
      },
      {
        category: "Security",
        roi: 198,
        investment: 12e6
      }
    ]
  };
  function calculateTotalROI() {
    const totalInvestment = efficiencyData.roiByCategory.reduce((sum, cat) => sum + cat.investment, 0);
    const totalReturn = efficiencyData.overall.costSavings;
    return Math.round(totalReturn / totalInvestment * 100);
  }
  return `${$$result.head += `<!-- HEAD_svelte-1uefqwm_START -->${$$result.title = `<title>Efficiency Dashboard - Disney AI Adoption Hub</title>`, ""}<!-- HEAD_svelte-1uefqwm_END -->`, ""}  <section class="bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 text-white py-16"><div class="container mx-auto px-4"><h1 class="text-4xl md:text-5xl font-bold mb-4" data-svelte-h="svelte-bsqh7l">AI Efficiency Dashboard</h1> <p class="text-xl text-purple-100 mb-8" data-svelte-h="svelte-qomn1f">Real-time metrics showcasing the impact of AI across Disney</p>  <div class="grid grid-cols-2 md:grid-cols-4 gap-4"><div class="bg-white/10 backdrop-blur rounded-lg p-4"><div class="text-3xl font-bold text-green-300">${escape("$0")}</div> <div class="text-sm text-gray-200" data-svelte-h="svelte-vln7x4">Annual Cost Savings</div></div> <div class="bg-white/10 backdrop-blur rounded-lg p-4"><div class="text-3xl font-bold text-yellow-300">${escape(0)}%</div> <div class="text-sm text-gray-200" data-svelte-h="svelte-28yh85">Time Reduction</div></div> <div class="bg-white/10 backdrop-blur rounded-lg p-4"><div class="text-3xl font-bold text-blue-300">${escape(0)}%</div> <div class="text-sm text-gray-200" data-svelte-h="svelte-vkwyn2">Quality Improvement</div></div> <div class="bg-white/10 backdrop-blur rounded-lg p-4"><div class="text-3xl font-bold text-purple-300">${escape(0)}%</div> <div class="text-sm text-gray-200" data-svelte-h="svelte-im3ilg">Productivity Gain</div></div></div></div></section>  <section class="container mx-auto px-4 py-8"><h2 class="text-2xl font-bold mb-6 text-gray-900" data-svelte-h="svelte-uul1fd">Performance by Division</h2> <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">${each(efficiencyData.byDivision, (division) => {
    return `<div class="bg-white rounded-xl shadow-lg p-6"><h3 class="text-xl font-bold mb-4 text-purple-700">${escape(division.name)}</h3>  <div class="grid grid-cols-2 gap-4 mb-6"><div class="bg-gray-50 rounded-lg p-3"><div class="text-sm text-gray-700" data-svelte-h="svelte-vqpk1a">Cost Savings</div> <div class="text-lg font-bold text-green-600">${escape(formatCurrency(division.metrics.costSavings))} </div></div> <div class="bg-gray-50 rounded-lg p-3"><div class="text-sm text-gray-700" data-svelte-h="svelte-1wf27a6">Time Saved</div> <div class="text-lg font-bold text-blue-600">${escape(division.metrics.timeReduction)}%
            </div></div> <div class="bg-gray-50 rounded-lg p-3"><div class="text-sm text-gray-700" data-svelte-h="svelte-wxmaox">Quality Score</div> <div class="text-lg font-bold text-purple-600">${escape(division.metrics.qualityScore)}/100
            </div></div> <div class="bg-gray-50 rounded-lg p-3"><div class="text-sm text-gray-700" data-svelte-h="svelte-1k2b9gi">AI Projects</div> <div class="text-lg font-bold text-orange-600">${escape(division.metrics.projectsCompleted)}</div> </div></div>  <div><h4 class="font-semibold text-sm mb-3 text-gray-900" data-svelte-h="svelte-go6m0m">Top AI Impacts</h4> <div class="space-y-2">${each(division.topImpacts, (impact) => {
      return `<div class="flex justify-between items-center text-sm"><span class="text-gray-700">${escape(impact.name)}</span> <div class="text-right"><span class="font-medium text-green-600">${escape(formatCurrency(impact.savings))}</span> <span class="text-gray-700 ml-2">${escape(impact.efficiency)}</span></div> </div>`;
    })} </div></div> </div>`;
  })}</div></section>  <section class="bg-gray-50 py-8"><div class="container mx-auto px-4"><h2 class="text-2xl font-bold mb-6 text-gray-900" data-svelte-h="svelte-mwiz77">Key Performance Metrics</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">${each(efficiencyData.keyMetrics, (metric) => {
    return `<div class="bg-white rounded-xl shadow-md p-6"><h3 class="font-semibold text-gray-900 mb-2">${escape(metric.title)}</h3> <div class="flex items-end justify-between mb-2"><span class="${"text-3xl font-bold " + escape(
      metric.trend === "up" ? "text-green-600" : "text-red-600",
      true
    )}">${escape(metric.value)}</span> <span class="${"text-sm " + escape(
      metric.trend === "up" ? "text-green-600" : "text-red-600",
      true
    )}">${escape(metric.change)} vs last month
            </span></div> <p class="text-sm text-gray-700">${escape(metric.description)}</p> </div>`;
  })}</div></div></section>  <section class="container mx-auto px-4 py-8"><div class="bg-white rounded-xl shadow-lg p-6"><h2 class="text-2xl font-bold mb-6 text-gray-900" data-svelte-h="svelte-1gbes7q">ROI by AI Category</h2> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8"> <div><div class="space-y-4">${each(efficiencyData.roiByCategory, (category) => {
    return `<div><div class="flex justify-between mb-1"><span class="font-medium text-gray-900">${escape(category.category)}</span> <span class="text-sm text-gray-700">${escape(category.roi)}% ROI</span></div> <div class="w-full bg-gray-200 rounded-full h-8 relative"><div class="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full flex items-center justify-end pr-3" style="${"width: " + escape(Math.min(category.roi / 5, 100), true) + "%"}"><span class="text-white text-sm font-medium">${escape(formatCurrency(category.investment))}</span> </div></div> </div>`;
  })}</div></div>  <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6"><h3 class="text-xl font-bold mb-4 text-gray-900" data-svelte-h="svelte-w45q0c">Investment Summary</h3> <div class="space-y-4"><div class="flex justify-between"><span class="text-gray-900" data-svelte-h="svelte-6pb079">Total AI Investment</span> <span class="font-bold text-xl text-gray-900">${escape(formatCurrency(efficiencyData.roiByCategory.reduce((sum, cat) => sum + cat.investment, 0)))}</span></div> <div class="flex justify-between"><span class="text-gray-900" data-svelte-h="svelte-ykda1x">Total Returns</span> <span class="font-bold text-xl text-green-600">${escape(formatCurrency(efficiencyData.overall.costSavings))}</span></div> <div class="border-t pt-4"><div class="flex justify-between"><span class="text-gray-900" data-svelte-h="svelte-1otc0xn">Overall ROI</span> <span class="font-bold text-2xl text-purple-600">${escape(calculateTotalROI())}%</span></div></div></div></div></div></div></section>  <section class="bg-gray-50 py-8"><div class="container mx-auto px-4"><div class="bg-white rounded-xl shadow-lg p-6"><div class="flex justify-between items-center mb-3"><h2 class="text-2xl font-bold text-gray-900" data-svelte-h="svelte-zrw1g0">Monthly Savings Trend</h2> <select class="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"><option value="6months" data-svelte-h="svelte-1kckvw4">Last 6 Months</option><option value="12months" data-svelte-h="svelte-178bqlg">Last 12 Months</option><option value="all" data-svelte-h="svelte-a5vk5j">All Time</option></select></div>  <div class="relative h-64 bg-gray-50 rounded-lg p-4"> <div class="absolute inset-4 flex flex-col justify-between pointer-events-none" data-svelte-h="svelte-1gkkg60"><div class="border-b border-gray-200"></div> <div class="border-b border-gray-200"></div> <div class="border-b border-gray-200"></div> <div class="border-b border-gray-200"></div></div> <div class="absolute inset-4 flex items-end justify-between gap-2">${each(efficiencyData.monthlyTrend, (month, i) => {
    return `<div class="flex-1 flex flex-col items-center justify-end h-full"><div class="w-full bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-lg transition-all duration-500 hover:opacity-80 relative" style="${"height: " + escape(month.savings / 15e6 * 100, true) + "%"}"><div class="absolute -top-6 left-0 right-0 text-center"><span class="text-xs font-semibold text-gray-900">${escape(formatCurrency(month.savings).replace("$", ""))}</span> </div></div> <span class="text-xs mt-2 text-gray-900 font-medium">${escape(month.month)}</span> </div>`;
  })}</div></div>  <div class="mt-6 grid grid-cols-2 md:grid-cols-6 gap-4 text-center">${each(efficiencyData.monthlyTrend, (month) => {
    return `<div><div class="text-sm font-bold text-gray-900">${escape(formatCurrency(month.savings))}</div> <div class="text-xs text-gray-900">${escape(month.projects)} projects</div> </div>`;
  })}</div></div></div></section>  <section class="container mx-auto px-4 py-8"><div class="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white text-center"><h3 class="text-xl font-bold mb-4" data-svelte-h="svelte-hcxehq">Share These Results</h3> <p class="mb-6" data-svelte-h="svelte-1gtudcn">Export efficiency metrics for presentations and reports</p> <div class="flex flex-wrap gap-4 justify-center"><button class="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors" data-svelte-h="svelte-y2jzp5">Export PDF Report</button> <button class="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors" data-svelte-h="svelte-uradw1">Download Raw Data</button></div></div></section>`;
});
export {
  Page as default
};
