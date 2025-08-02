import { c as create_ssr_component, b as each, e as escape, d as add_attribute } from "../../../../chunks/ssr.js";
import { b as base } from "../../../../chunks/paths.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const aiTechnologies = [
    {
      title: "Content Personalization Engine",
      category: "Streaming",
      icon: "🎯",
      description: "Advanced ML algorithms analyze viewing patterns to deliver personalized content recommendations across Disney+ and Hulu",
      impact: "35% increase in viewer engagement",
      features: [
        "Real-time preference learning",
        "Multi-profile household optimization",
        "Cross-platform sync"
      ]
    },
    {
      title: "AI Production Scheduler",
      category: "Production",
      icon: "📅",
      description: "Intelligent scheduling system optimizes crew, location, and resource allocation for TV productions",
      impact: "25% reduction in production delays",
      features: [
        "Resource conflict resolution",
        "Weather-aware scheduling",
        "Budget optimization"
      ]
    },
    {
      title: "Automated Captioning & Translation",
      category: "Accessibility",
      icon: "💬",
      description: "Neural networks generate accurate closed captions and translations in 30+ languages",
      impact: "80% faster localization",
      features: ["Context-aware translation", "Dialect recognition", "Real-time processing"]
    },
    {
      title: "Recommendation Algorithm",
      category: "Discovery",
      icon: "🔍",
      description: "Disney+ recommendation engine uses collaborative filtering and deep learning for content discovery",
      impact: "40% improved content discovery",
      features: [
        "Mood-based recommendations",
        "Viewing time optimization",
        "Family-friendly filtering"
      ]
    }
  ];
  const productionAI = [
    {
      name: "Pre-Production",
      tools: [
        {
          title: "Script Analysis AI",
          status: "Deployed",
          description: "Analyzes scripts for production requirements"
        },
        {
          title: "Location Scouting ML",
          status: "Testing",
          description: "Matches script needs with location databases"
        },
        {
          title: "Budget Predictor",
          status: "Deployed",
          description: "AI-driven budget estimation based on script"
        },
        {
          title: "Casting Assistant",
          status: "Planning",
          description: "AI-powered talent matching system"
        }
      ],
      color: "from-blue-500 to-blue-700"
    },
    {
      name: "Production",
      tools: [
        {
          title: "Smart Scheduling",
          status: "Deployed",
          description: "Optimizes daily shooting schedules"
        },
        {
          title: "Equipment Tracker",
          status: "Deployed",
          description: "AI inventory management system"
        },
        {
          title: "Scene Continuity AI",
          status: "Testing",
          description: "Ensures visual continuity between takes"
        },
        {
          title: "Performance Capture",
          status: "Testing",
          description: "Enhanced motion capture processing"
        }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Post-Production",
      tools: [
        {
          title: "Auto Color Grading",
          status: "Deployed",
          description: "AI-assisted color correction"
        },
        {
          title: "Sound Design AI",
          status: "Testing",
          description: "Automated foley and sound effects"
        },
        {
          title: "Edit Assistant",
          status: "Deployed",
          description: "Suggests optimal cut points"
        },
        {
          title: "VFX Enhancement",
          status: "Deployed",
          description: "AI-powered visual effects tools"
        }
      ],
      color: "from-green-500 to-teal-600"
    },
    {
      name: "Distribution",
      tools: [
        {
          title: "Format Optimizer",
          status: "Deployed",
          description: "Optimizes video for different devices"
        },
        {
          title: "Thumbnail Generator",
          status: "Deployed",
          description: "AI creates engaging thumbnails"
        },
        {
          title: "Release Timing AI",
          status: "Testing",
          description: "Predicts optimal release windows"
        },
        {
          title: "Market Analysis",
          status: "Deployed",
          description: "AI-driven audience insights"
        }
      ],
      color: "from-orange-500 to-red-500"
    }
  ];
  const streamingMetrics = [
    {
      title: "Personalization Accuracy",
      value: "87%",
      icon: "🎯"
    },
    {
      title: "Content Discovery Rate",
      value: "64%",
      icon: "🔍"
    },
    {
      title: "Translation Languages",
      value: "30+",
      icon: "🌍"
    },
    {
      title: "Caption Accuracy",
      value: "98.5%",
      icon: "📝"
    },
    {
      title: "Production Efficiency",
      value: "+40%",
      icon: "⚡"
    },
    {
      title: "Cost Reduction",
      value: "25%",
      icon: "💰"
    }
  ];
  const caseStudies = [
    {
      title: "The Mandalorian Production",
      description: "How AI-driven virtual production revolutionized TV filmmaking",
      link: `${base}/disney/use-cases#visual-effects-enhancement`,
      icon: "🎬"
    },
    {
      title: "Disney+ Launch Success",
      description: "AI personalization engine drives 150M+ subscriber growth",
      link: `${base}/disney/use-cases#content-recommendation`,
      icon: "🚀"
    },
    {
      title: "Global Content Localization",
      description: "Neural translation enables same-day global releases",
      link: `${base}/experiments`,
      icon: "🌐"
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-1b9sovo_START -->${$$result.title = `<title>AI in Disney TV Shows - Disney AI Adoption Hub</title>`, ""}<!-- HEAD_svelte-1b9sovo_END -->`, ""}  <section class="relative overflow-hidden bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900 text-white"><div class="absolute inset-0 opacity-20"><div class="grid grid-cols-8 gap-4 p-8">${each(Array(16), (_, i) => {
    return `<div class="text-5xl animate-pulse" style="${"animation-delay: " + escape(i * 0.2, true) + "s"}" data-svelte-h="svelte-1n92vy9">🤖</div>`;
  })}</div></div> <div class="relative z-10 container mx-auto px-4 py-20" data-svelte-h="svelte-za91x9"><h1 class="text-5xl md:text-6xl font-bold mb-6">AI in Disney TV Shows</h1> <p class="text-xl md:text-2xl mb-8 text-purple-100">Transforming television content creation and viewer experiences with artificial intelligence</p> <div class="flex flex-wrap gap-4"><a href="${escape(base, true) + "/disney/use-cases#content-recommendation"}" class="bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-purple-100 transition-colors">View AI Use Cases</a> <a href="${escape(base, true) + "/experiments"}" class="bg-purple-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">Explore Experiments</a></div></div></section>  <section class="container mx-auto px-4 py-16"><h2 class="text-3xl font-bold mb-8 text-gray-900" data-svelte-h="svelte-1nni3ci">AI Technologies in TV Production</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">${each(aiTechnologies, (tech) => {
    return `<div class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"><div class="relative"><div class="aspect-video bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-6xl">${escape(tech.icon)}</div> <span class="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">${escape(tech.category)} </span></div> <div class="p-6"><h3 class="text-xl font-bold mb-2 text-gray-900">${escape(tech.title)}</h3> <p class="text-sm text-gray-700 mb-3">${escape(tech.description)}</p> <div class="bg-green-50 text-green-800 px-3 py-2 rounded-lg text-sm font-medium mb-3">Impact: ${escape(tech.impact)}</div> <ul class="space-y-1">${each(tech.features, (feature) => {
      return `<li class="text-xs text-gray-600 flex items-center"><span class="text-purple-500 mr-2" data-svelte-h="svelte-121hz8d">•</span> <span class="text-gray-600">${escape(feature)}</span> </li>`;
    })} </ul></div> </div>`;
  })}</div></section>  <section class="bg-gray-50 py-16"><div class="container mx-auto px-4"><h2 class="text-3xl font-bold mb-8 text-gray-900" data-svelte-h="svelte-sulnqd">AI Across the Production Pipeline</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">${each(productionAI, (stage) => {
    return `<div class="bg-white rounded-xl shadow-md overflow-hidden"><div class="${"bg-gradient-to-r " + escape(stage.color, true) + " text-white p-4"}"><h3 class="text-xl font-bold">${escape(stage.name)}</h3></div> <div class="p-4"><ul class="space-y-3">${each(stage.tools, (tool) => {
      return `<li><div class="flex items-center justify-between mb-1"><span class="font-medium text-gray-900 text-sm">${escape(tool.title)}</span> <span class="${"text-xs px-2 py-1 rounded " + escape(
        tool.status === "Deployed" ? "bg-green-100 text-green-800" : tool.status === "Testing" ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-600",
        true
      )}"><span class="text-gray-800">${escape(tool.status)}</span> </span></div> <p class="text-xs text-gray-600">${escape(tool.description)}</p> </li>`;
    })} </ul></div> </div>`;
  })}</div></div></section>  <section class="container mx-auto px-4 py-16"><div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white"><h2 class="text-3xl font-bold mb-8" data-svelte-h="svelte-15u7exl">Disney+ AI Recommendation Engine</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"><div data-svelte-h="svelte-du4t3q"><p class="text-lg mb-6 text-blue-100">Our advanced recommendation algorithm powers content discovery for 150+ million subscribers worldwide</p> <div class="space-y-4"><div class="bg-white/10 backdrop-blur rounded-lg p-4"><h3 class="font-semibold mb-2 text-white">Collaborative Filtering</h3> <p class="text-sm text-blue-100">Analyzes viewing patterns across similar user profiles</p></div> <div class="bg-white/10 backdrop-blur rounded-lg p-4"><h3 class="font-semibold mb-2 text-white">Content-Based Analysis</h3> <p class="text-sm text-blue-100">Deep learning models understand content themes and attributes</p></div> <div class="bg-white/10 backdrop-blur rounded-lg p-4"><h3 class="font-semibold mb-2 text-white">Contextual Awareness</h3> <p class="text-sm text-blue-100">Considers time of day, device, and viewing history</p></div></div> <a href="${escape(base, true) + "/disney/use-cases#content-recommendation"}" class="inline-block mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Learn More About Our Recommendation System</a></div> <div class="grid grid-cols-2 gap-4">${each(streamingMetrics.slice(0, 4), (metric) => {
    return `<div class="bg-white/10 backdrop-blur rounded-lg p-6 text-center"><div class="text-4xl mb-2">${escape(metric.icon)}</div> <div class="text-2xl font-bold mb-1">${escape(metric.value)}</div> <div class="text-sm text-blue-100">${escape(metric.title)}</div> </div>`;
  })}</div></div></div></section>  <section class="bg-gradient-to-b from-purple-100 to-pink-100 py-16"><div class="container mx-auto px-4"><h2 class="text-3xl font-bold mb-8 text-center text-gray-900" data-svelte-h="svelte-tq4guo">AI Impact Metrics</h2> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">${each(streamingMetrics, (metric) => {
    return `<div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all hover:scale-105 text-center"><div class="text-4xl mb-2">${escape(metric.icon)}</div> <p class="text-2xl font-bold text-gray-900">${escape(metric.value)}</p> <p class="text-sm text-gray-600">${escape(metric.title)}</p> </div>`;
  })}</div></div></section>  <section class="container mx-auto px-4 py-16"><div class="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 md:p-12 text-white"><h2 class="text-3xl font-bold mb-8" data-svelte-h="svelte-1x550wh">Success Stories</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-6">${each(caseStudies, (study) => {
    return `<a${add_attribute("href", study.link, 0)} class="bg-white/10 backdrop-blur rounded-lg p-6 hover:bg-white/20 transition-all transform hover:scale-105"><div class="text-4xl mb-4">${escape(study.icon)}</div> <h3 class="text-xl font-bold mb-2 text-white">${escape(study.title)}</h3> <p class="text-orange-100">${escape(study.description)}</p> <div class="mt-4 text-sm font-semibold flex items-center text-white" data-svelte-h="svelte-1eus8gf"><span class="text-white">Read Case Study</span> <span class="ml-2 text-white">→</span></div> </a>`;
  })}</div></div></section>  <section class="bg-gray-50 py-16" data-svelte-h="svelte-1quwtud"><div class="container mx-auto px-4"><div class="max-w-4xl mx-auto text-center"><h2 class="text-3xl font-bold mb-4 text-gray-900">Explore AI Experiments</h2> <p class="text-lg text-gray-600 mb-8">Discover how Disney is pushing the boundaries of AI in television production and streaming</p> <div class="flex flex-wrap justify-center gap-4"><a href="${escape(base, true) + "/experiments"}" class="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">View All Experiments</a> <a href="${escape(base, true) + "/disney/use-cases"}" class="bg-white text-purple-600 border-2 border-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">Browse Use Cases</a></div></div></div></section>`;
});
export {
  Page as default
};
