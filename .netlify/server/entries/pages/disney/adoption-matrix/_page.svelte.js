import { c as create_ssr_component, b as each, e as escape } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const divisions = [
    {
      name: "Disney Entertainment",
      departments: [
        {
          name: "Walt Disney Animation Studios",
          aiAdoption: {
            awareness: 95,
            experimentation: 85,
            deployment: 75,
            optimization: 60
          },
          useCases: 4,
          keyInitiatives: ["Animation In-Betweening", "Storyboard AI"]
        },
        {
          name: "Pixar Animation Studios",
          aiAdoption: {
            awareness: 90,
            experimentation: 80,
            deployment: 65,
            optimization: 50
          },
          useCases: 3,
          keyInitiatives: ["Render Optimization", "Character Animation"]
        },
        {
          name: "Marvel Studios",
          aiAdoption: {
            awareness: 85,
            experimentation: 70,
            deployment: 55,
            optimization: 40
          },
          useCases: 2,
          keyInitiatives: ["VFX Enhancement", "Pre-visualization"]
        },
        {
          name: "Lucasfilm",
          aiAdoption: {
            awareness: 85,
            experimentation: 75,
            deployment: 60,
            optimization: 45
          },
          useCases: 2,
          keyInitiatives: ["ILM Visual Effects", "Virtual Production"]
        },
        {
          name: "Disney Streaming",
          aiAdoption: {
            awareness: 100,
            experimentation: 90,
            deployment: 85,
            optimization: 70
          },
          useCases: 5,
          keyInitiatives: ["Content Recommendations", "User Analytics"]
        },
        {
          name: "ABC/FX Networks",
          aiAdoption: {
            awareness: 70,
            experimentation: 50,
            deployment: 30,
            optimization: 15
          },
          useCases: 1,
          keyInitiatives: ["Content Planning", "Audience Analytics"]
        }
      ]
    },
    {
      name: "ESPN",
      departments: [
        {
          name: "ESPN Technology",
          aiAdoption: {
            awareness: 95,
            experimentation: 85,
            deployment: 75,
            optimization: 65
          },
          useCases: 4,
          keyInitiatives: ["Sports Analytics", "Real-time Predictions"]
        },
        {
          name: "Fantasy Sports",
          aiAdoption: {
            awareness: 90,
            experimentation: 80,
            deployment: 70,
            optimization: 55
          },
          useCases: 3,
          keyInitiatives: ["Player Recommendations", "Game Insights"]
        },
        {
          name: "Content Production",
          aiAdoption: {
            awareness: 80,
            experimentation: 65,
            deployment: 45,
            optimization: 25
          },
          useCases: 2,
          keyInitiatives: ["Automated Highlights", "Caption Generation"]
        },
        {
          name: "ESPN+",
          aiAdoption: {
            awareness: 85,
            experimentation: 70,
            deployment: 60,
            optimization: 45
          },
          useCases: 2,
          keyInitiatives: ["Content Discovery", "Viewer Analytics"]
        }
      ]
    },
    {
      name: "Disney Experiences",
      departments: [
        {
          name: "Parks Operations",
          aiAdoption: {
            awareness: 90,
            experimentation: 80,
            deployment: 70,
            optimization: 60
          },
          useCases: 5,
          keyInitiatives: ["Crowd Management", "Wait Time Prediction"]
        },
        {
          name: "Guest Experience",
          aiAdoption: {
            awareness: 85,
            experimentation: 75,
            deployment: 65,
            optimization: 50
          },
          useCases: 4,
          keyInitiatives: ["Lightning Lane AI", "Virtual Assistant"]
        },
        {
          name: "Security Operations",
          aiAdoption: {
            awareness: 95,
            experimentation: 85,
            deployment: 80,
            optimization: 70
          },
          useCases: 3,
          keyInitiatives: ["Facial Recognition", "Threat Detection"]
        },
        {
          name: "Disney Cruise Line",
          aiAdoption: {
            awareness: 70,
            experimentation: 55,
            deployment: 35,
            optimization: 20
          },
          useCases: 1,
          keyInitiatives: ["Guest Personalization", "Route Optimization"]
        },
        {
          name: "Consumer Products",
          aiAdoption: {
            awareness: 75,
            experimentation: 60,
            deployment: 40,
            optimization: 25
          },
          useCases: 2,
          keyInitiatives: ["Inventory Management", "Product Recommendations"]
        }
      ]
    }
  ];
  const maturityLevels = [
    {
      name: "Awareness",
      color: "bg-blue-500",
      description: "Understanding AI potential"
    },
    {
      name: "Experimentation",
      color: "bg-yellow-500",
      description: "Piloting AI solutions"
    },
    {
      name: "Deployment",
      color: "bg-green-500",
      description: "AI in production"
    },
    {
      name: "Optimization",
      color: "bg-purple-500",
      description: "Continuous improvement"
    }
  ];
  let selectedDivision = null;
  let hoveredDepartment = null;
  function calculateOverallAdoption() {
    let totalAwareness = 0;
    let totalExperimentation = 0;
    let totalDeployment = 0;
    let totalOptimization = 0;
    let departmentCount = 0;
    divisions.forEach((division) => {
      division.departments.forEach((dept) => {
        totalAwareness += dept.aiAdoption.awareness;
        totalExperimentation += dept.aiAdoption.experimentation;
        totalDeployment += dept.aiAdoption.deployment;
        totalOptimization += dept.aiAdoption.optimization;
        departmentCount++;
      });
    });
    return {
      awareness: Math.round(totalAwareness / departmentCount),
      experimentation: Math.round(totalExperimentation / departmentCount),
      deployment: Math.round(totalDeployment / departmentCount),
      optimization: Math.round(totalOptimization / departmentCount)
    };
  }
  const overallAdoption = calculateOverallAdoption();
  return `${$$result.head += `<!-- HEAD_svelte-94gxm8_START -->${$$result.title = `<title>AI Adoption Matrix - Disney AI Adoption Hub</title>`, ""}<!-- HEAD_svelte-94gxm8_END -->`, ""}  <section class="bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 text-white py-16"><div class="container mx-auto px-4"><h1 class="text-4xl md:text-5xl font-bold mb-4" data-svelte-h="svelte-1fmaszp">AI Adoption Matrix</h1> <p class="text-xl text-purple-100 mb-8" data-svelte-h="svelte-g2idv6">Track AI maturity across Disney&#39;s divisions and departments</p>  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">${each(maturityLevels, (level, i) => {
    return `<div class="bg-white/10 backdrop-blur rounded-lg p-4"><div class="flex items-center justify-between mb-2"><span class="font-semibold">${escape(level.name)}</span> <span class="text-2xl font-bold">${escape(overallAdoption[level.name.toLowerCase()])}%
            </span></div> <div class="w-full bg-white/20 rounded-full h-2"><div class="${escape(level.color, true) + " h-full rounded-full transition-all duration-500"}" style="${"width: " + escape(overallAdoption[level.name.toLowerCase()], true) + "%"}"></div></div> <p class="text-xs text-gray-300 mt-1">${escape(level.description)}</p> </div>`;
  })}</div></div></section>  <section class="container mx-auto px-4 py-8"><div class="bg-white rounded-xl shadow-lg p-6"> <div class="mb-6 flex flex-wrap items-center gap-4"><span class="font-semibold text-gray-900" data-svelte-h="svelte-12eglsz">Maturity Levels:</span> ${each(maturityLevels, (level) => {
    return `<div class="flex items-center gap-2"><div class="${"w-4 h-4 " + escape(level.color, true) + " rounded"}"></div> <span class="text-sm text-gray-900">${escape(level.name)}</span> </div>`;
  })}</div>  <div class="flex flex-wrap gap-2 mb-6"><button class="${"px-4 py-2 rounded-lg font-medium transition-colors " + escape(
    "bg-purple-600 text-white",
    true
  )}">All Divisions</button> ${each(divisions, (division) => {
    return `<button class="${"px-4 py-2 rounded-lg font-medium transition-colors " + escape(
      selectedDivision === division ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-900 hover:bg-gray-200",
      true
    )}">${escape(division.name)} </button>`;
  })}</div>  <div class="overflow-x-auto"><table class="w-full"><thead><tr class="border-b-2 border-gray-200"><th class="text-left p-4 text-gray-900 font-semibold" data-svelte-h="svelte-1qca22z">Department</th> <th class="text-center p-4 text-gray-900 font-semibold" data-svelte-h="svelte-shbj2r">Use Cases</th> ${each(maturityLevels, (level) => {
    return `<th class="text-center p-4 text-gray-900 font-semibold">${escape(level.name)}</th>`;
  })} <th class="text-center p-4 text-gray-900 font-semibold" data-svelte-h="svelte-v6r08m">Overall</th></tr></thead> <tbody>${each(divisions, (division) => {
    return `${`<tr class="bg-gray-50"><td colspan="7" class="p-3 font-bold text-purple-700">${escape(division.name)} </td></tr> ${each(division.departments, (dept) => {
      return `<tr class="border-b hover:bg-gray-50 transition-colors"><td class="p-4"><div><div class="font-medium text-gray-900">${escape(dept.name)}</div> ${hoveredDepartment === dept && dept.keyInitiatives.length > 0 ? `<div class="text-xs text-gray-900 mt-1">Key: ${escape(dept.keyInitiatives.join(", "))} </div>` : ``} </div></td> <td class="text-center p-4"><span class="inline-block bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-sm font-semibold">${escape(dept.useCases)} </span></td> ${each(maturityLevels, (level) => {
        return `<td class="p-4"><div class="flex items-center justify-center"><div class="w-full max-w-[100px]"><div class="text-center text-sm font-medium mb-1">${escape(dept.aiAdoption[level.name.toLowerCase()])}%</div> <div class="w-full bg-gray-200 rounded-full h-2"><div class="${escape(level.color, true) + " h-full rounded-full transition-all duration-500"}" style="${"width: " + escape(dept.aiAdoption[level.name.toLowerCase()], true) + "%"}"></div></div> </div></div> </td>`;
      })} <td class="text-center p-4"><div class="text-lg font-bold text-purple-600">${escape(Math.round((dept.aiAdoption.awareness + dept.aiAdoption.experimentation + dept.aiAdoption.deployment + dept.aiAdoption.optimization) / 4))}%
                    </div></td> </tr>`;
    })}`}`;
  })}</tbody></table></div></div></section>  <section class="container mx-auto px-4 py-8" data-svelte-h="svelte-xzgu75"><div class="grid grid-cols-1 md:grid-cols-3 gap-6"> <div class="bg-white rounded-xl shadow-lg p-6"><h3 class="text-xl font-bold mb-4 text-green-700">Leading Departments</h3> <ul class="space-y-3"><li class="flex items-center justify-between"><span class="text-gray-900">Disney Streaming</span> <span class="font-bold text-green-600">86%</span></li> <li class="flex items-center justify-between"><span class="text-gray-900">ESPN Technology</span> <span class="font-bold text-green-600">80%</span></li> <li class="flex items-center justify-between"><span class="text-gray-900">Security Operations</span> <span class="font-bold text-green-600">82%</span></li></ul></div>  <div class="bg-white rounded-xl shadow-lg p-6"><h3 class="text-xl font-bold mb-4 text-yellow-700">Areas for Growth</h3> <ul class="space-y-3"><li class="flex items-center justify-between"><span class="text-gray-900">Disney Cruise Line</span> <span class="font-bold text-yellow-600">45%</span></li> <li class="flex items-center justify-between"><span class="text-gray-900">ABC/FX Networks</span> <span class="font-bold text-yellow-600">41%</span></li> <li class="flex items-center justify-between"><span class="text-gray-900">Consumer Products</span> <span class="font-bold text-yellow-600">50%</span></li></ul></div>  <div class="bg-white rounded-xl shadow-lg p-6"><h3 class="text-xl font-bold mb-4 text-purple-700">Quick Stats</h3> <div class="space-y-3"><div><span class="text-gray-700">Total Departments:</span> <span class="font-bold float-right">15</span></div> <div><span class="text-gray-700">Active Use Cases:</span> <span class="font-bold float-right">42</span></div> <div><span class="text-gray-700">Avg. Maturity:</span> <span class="font-bold float-right text-purple-600">65%</span></div></div></div></div></section>`;
});
export {
  Page as default
};
