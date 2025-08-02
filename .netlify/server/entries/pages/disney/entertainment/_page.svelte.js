import { c as create_ssr_component, b as each, d as add_attribute, e as escape } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const aiInitiatives = [
    {
      name: "Animation AI Studio",
      icon: "🎨",
      description: "Revolutionary AI tools transforming animation production",
      highlights: [
        "AI-assisted character animation",
        "Automated in-betweening",
        "Style transfer technology"
      ],
      link: "/use-cases/animation-ai",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "VFX AI Pipeline",
      icon: "🎬",
      description: "Next-generation visual effects powered by machine learning",
      highlights: ["Real-time compositing", "AI rotoscoping", "Deep learning for CGI"],
      link: "/use-cases/vfx-enhancement",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Content Intelligence",
      icon: "🧠",
      description: "Data-driven insights for content creation and distribution",
      highlights: ["Predictive analytics", "Audience segmentation", "Performance forecasting"],
      link: "/use-cases/content-analytics",
      color: "from-green-500 to-teal-500"
    },
    {
      name: "Streaming Personalization",
      icon: "📺",
      description: "AI-powered recommendations across Disney+ and Hulu",
      highlights: [
        "Neural collaborative filtering",
        "Context-aware suggestions",
        "Multi-platform optimization"
      ],
      link: "/use-cases/streaming-personalization",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Production Optimization",
      icon: "⚡",
      description: "AI tools streamlining film and TV production workflows",
      highlights: ["Automated scheduling", "Resource optimization", "Cost prediction models"],
      link: "/use-cases/production-efficiency",
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "AI Localization",
      icon: "🌍",
      description: "Breaking language barriers with advanced AI dubbing",
      highlights: ["Voice synthesis", "Lip-sync automation", "Cultural adaptation"],
      link: "/use-cases/ai-dubbing",
      color: "from-indigo-500 to-purple-500"
    }
  ];
  const studioAIProjects = [
    {
      studio: "Walt Disney Animation Studios",
      projects: [
        {
          name: "Neural Animation System",
          status: "Production",
          impact: "High"
        },
        {
          name: "AI Storyboarding Assistant",
          status: "Pilot",
          impact: "Medium"
        },
        {
          name: "Character Rigging ML",
          status: "Research",
          impact: "High"
        }
      ]
    },
    {
      studio: "Pixar Animation Studios",
      projects: [
        {
          name: "RenderMan AI Acceleration",
          status: "Production",
          impact: "High"
        },
        {
          name: "Crowd Simulation AI",
          status: "Production",
          impact: "Medium"
        },
        {
          name: "Texture Generation Network",
          status: "Pilot",
          impact: "Medium"
        }
      ]
    },
    {
      studio: "Marvel Studios",
      projects: [
        {
          name: "Digital Human AI",
          status: "Production",
          impact: "High"
        },
        {
          name: "Action Sequence Previz",
          status: "Pilot",
          impact: "Medium"
        },
        {
          name: "VFX Shot Optimization",
          status: "Production",
          impact: "High"
        }
      ]
    },
    {
      studio: "Lucasfilm/ILM",
      projects: [
        {
          name: "StageCraft AI Enhancement",
          status: "Production",
          impact: "High"
        },
        {
          name: "DeepFake Detection",
          status: "Production",
          impact: "High"
        },
        {
          name: "Virtual Production AI",
          status: "Research",
          impact: "High"
        }
      ]
    }
  ];
  const experiments = [
    {
      title: "Generative Storytelling",
      description: "AI-assisted narrative development",
      status: "Active",
      link: "/experiments/generative-storytelling"
    },
    {
      title: "Virtual Actor Creation",
      description: "Digital human performance capture",
      status: "Beta",
      link: "/experiments/virtual-actors"
    },
    {
      title: "Real-time Translation",
      description: "Live dubbing for streaming content",
      status: "Testing",
      link: "/experiments/real-time-translation"
    },
    {
      title: "AI Music Composition",
      description: "Automated scoring for productions",
      status: "Research",
      link: "/experiments/ai-music"
    }
  ];
  const metrics = [
    {
      label: "AI Projects Active",
      value: "127",
      trend: "+23%"
    },
    {
      label: "Production Time Saved",
      value: "40%",
      trend: "+15%"
    },
    {
      label: "Cost Reduction",
      value: "$45M",
      trend: "+28%"
    },
    {
      label: "Content Processed",
      value: "10K hrs",
      trend: "+67%"
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-1vt0l6n_START -->${$$result.title = `<title>Disney Entertainment - AI Hub</title>`, ""}<!-- HEAD_svelte-1vt0l6n_END -->`, ""}  <section class="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 text-white" data-svelte-h="svelte-2ntm1m"><div class="absolute inset-0 opacity-20"><div class="absolute top-10 left-10 text-8xl animate-pulse">🤖</div> <div class="absolute bottom-10 right-10 text-8xl animate-pulse" style="animation-delay: 0.5s">🎬</div> <div class="absolute top-1/2 left-1/3 text-6xl animate-pulse" style="animation-delay: 1s">🎨</div></div> <div class="relative z-10 container mx-auto px-4 py-20"><h1 class="text-5xl md:text-6xl font-bold mb-6">Entertainment AI Hub</h1> <p class="text-xl md:text-2xl mb-8 text-purple-100">Revolutionizing storytelling through artificial intelligence across animation, VFX, and streaming</p> <div class="flex flex-wrap gap-4"><a href="/use-cases" class="bg-white text-purple-900 px-6 py-3 rounded-full font-semibold hover:bg-purple-100 transition-colors">Explore Use Cases</a> <a href="/experiments" class="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-900 transition-colors">View Experiments</a></div></div></section>  <section class="container mx-auto px-4 py-16"><h2 class="text-3xl font-bold text-gray-900 mb-12" data-svelte-h="svelte-1nuu74f">Key AI Initiatives</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">${each(aiInitiatives, (initiative) => {
    return `<a${add_attribute("href", initiative.link, 0)} class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 block"><div class="${"absolute inset-0 bg-gradient-to-br " + escape(initiative.color, true) + " opacity-10 group-hover:opacity-20 transition-opacity"}"></div> <div class="relative p-6"><div class="flex items-center mb-4"><span class="text-4xl mr-3">${escape(initiative.icon)}</span> <div><h3 class="text-xl font-bold text-gray-900">${escape(initiative.name)}</h3> <p class="text-sm text-gray-900">${escape(initiative.description)}</p> </div></div> <div class="mt-4"><h4 class="text-sm font-semibold text-gray-900 mb-2" data-svelte-h="svelte-mmvys1">Key Features:</h4> <ul class="space-y-1">${each(initiative.highlights, (highlight) => {
      return `<li class="text-sm text-gray-900 flex items-center"><span class="${"w-1.5 h-1.5 bg-gradient-to-r " + escape(initiative.color, true) + " rounded-full mr-2"}"></span> <span class="text-gray-900">${escape(highlight)}</span> </li>`;
    })} </ul></div> <div class="mt-4 flex items-center text-sm font-semibold text-gray-900 group-hover:text-purple-600 transition-colors" data-svelte-h="svelte-17gotu1"><span class="text-gray-900 group-hover:text-purple-600">Learn More</span> <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg> </div></div> </a>`;
  })}</div></section>  <section class="bg-gray-50 py-16"><div class="container mx-auto px-4"><h2 class="text-3xl font-bold text-gray-900 mb-12" data-svelte-h="svelte-6292wu">AI Projects by Studio</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-8">${each(studioAIProjects, (studioData) => {
    return `<div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6"><h3 class="text-xl font-bold text-gray-900 mb-4">${escape(studioData.studio)}</h3> <div class="space-y-3">${each(studioData.projects, (project) => {
      return `<div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg"><div><div class="font-semibold text-gray-900">${escape(project.name)}</div> <div class="text-sm text-gray-600">Impact: ${escape(project.impact)}</div></div> <div class="flex items-center space-x-2"><span class="${"px-2 py-1 text-xs rounded-full " + escape(
        project.status === "Production" ? "bg-green-100 text-green-800" : project.status === "Pilot" ? "bg-yellow-100 text-yellow-800" : "bg-blue-100 text-blue-800",
        true
      )}"><span class="text-gray-800">${escape(project.status)}</span> </span></div> </div>`;
    })}</div> </div>`;
  })}</div></div></section>  <section class="container mx-auto px-4 py-16"><h2 class="text-3xl font-bold text-gray-900 mb-12" data-svelte-h="svelte-17hybya">AI Impact Metrics</h2> <div class="grid grid-cols-1 md:grid-cols-4 gap-6">${each(metrics, (metric) => {
    return `<div class="text-center"><div class="bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-2xl p-6 mb-4"><div class="text-3xl font-bold mb-2">${escape(metric.value)}</div> <div class="text-sm opacity-90">${escape(metric.label)}</div> <div class="text-xs mt-2 bg-white bg-opacity-20 rounded-full px-2 py-1">${escape(metric.trend)} </div></div> </div>`;
  })}</div></section>  <section class="bg-gradient-to-r from-purple-100 to-pink-100 py-16"><div class="container mx-auto px-4"><div class="max-w-6xl mx-auto"><h2 class="text-3xl font-bold text-gray-900 mb-6 text-center" data-svelte-h="svelte-1amm6kj">Active AI Experiments</h2> <p class="text-lg text-gray-900 mb-12 text-center" data-svelte-h="svelte-7abnws">Cutting-edge research and development projects pushing the boundaries of entertainment AI</p> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">${each(experiments, (experiment) => {
    return `<a${add_attribute("href", experiment.link, 0)} class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group"><div class="flex items-center justify-between mb-3"><h3 class="font-bold text-gray-900 text-lg group-hover:text-purple-600 transition-colors">${escape(experiment.title)}</h3> <span class="${"px-2 py-1 text-xs rounded-full " + escape(
      experiment.status === "Active" ? "bg-green-100 text-green-800" : experiment.status === "Beta" ? "bg-blue-100 text-blue-800" : experiment.status === "Testing" ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-800",
      true
    )}"><span class="text-gray-800">${escape(experiment.status)}</span> </span></div> <p class="text-gray-900 text-sm mb-4">${escape(experiment.description)}</p> <div class="flex items-center text-sm font-semibold text-gray-900 group-hover:text-purple-600 transition-colors" data-svelte-h="svelte-13jlxf"><span class="text-gray-900 group-hover:text-purple-600">View Details</span> <svg class="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></div> </a>`;
  })}</div> <div class="text-center mt-12" data-svelte-h="svelte-17t8v06"><a href="/experiments" class="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors">View All Experiments</a></div></div></div></section>`;
});
export {
  Page as default
};
