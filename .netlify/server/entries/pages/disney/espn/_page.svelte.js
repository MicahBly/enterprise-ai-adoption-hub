import { c as create_ssr_component, b as each, e as escape, d as add_attribute } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const aiTechnologies = [
    {
      name: "Real-time Analytics",
      icon: "📊",
      color: "from-blue-600 to-blue-800",
      description: "AI-powered predictions with 50ms latency",
      stats: "87% accuracy"
    },
    {
      name: "Computer Vision",
      icon: "👁️",
      color: "from-purple-600 to-purple-800",
      description: "Tracking player movements and ball trajectories",
      stats: "60fps processing"
    },
    {
      name: "Natural Language",
      icon: "💬",
      color: "from-green-600 to-green-800",
      description: "Automated game summaries and commentary",
      stats: "40+ languages"
    },
    {
      name: "Machine Learning",
      icon: "🧠",
      color: "from-orange-500 to-red-600",
      description: "Deep learning models for performance analysis",
      stats: "1B+ data points"
    },
    {
      name: "Edge Computing",
      icon: "⚡",
      color: "from-yellow-500 to-yellow-700",
      description: "Real-time processing at stadium venues",
      stats: "<100ms latency"
    },
    {
      name: "Predictive Models",
      icon: "🔮",
      color: "from-indigo-600 to-indigo-800",
      description: "Game outcome and player performance forecasting",
      stats: "92% confidence"
    }
  ];
  const aiPoweredPlatforms = [
    {
      name: "ESPN Analytics Hub",
      description: "AI-driven sports intelligence platform",
      features: [
        "Real-time game predictions",
        "Player performance tracking",
        "Injury risk assessment",
        "Strategic insights"
      ],
      caseStudyId: "sports-analytics"
    },
    {
      name: "Fantasy AI Assistant",
      description: "Machine learning for fantasy sports",
      features: [
        "Lineup optimization",
        "Trade recommendations",
        "Injury predictions",
        "Performance forecasting"
      ],
      caseStudyId: "fantasy-insights"
    },
    {
      name: "Automated Production",
      description: "AI-powered content creation",
      features: [
        "Instant highlight generation",
        "Multi-angle replays",
        "Automated statistics",
        "Real-time graphics"
      ],
      experimentId: "sports-highlight-ai"
    },
    {
      name: "Predictive Broadcasting",
      description: "Next-gen viewer experience",
      features: [
        "Personalized feeds",
        "Predictive camera angles",
        "AI commentary",
        "Interactive statistics"
      ],
      status: "Coming Soon"
    }
  ];
  const aiUseCases = [
    {
      title: "Real-time Sports Analytics Platform",
      icon: "📊",
      description: "Processing millions of data points per second to provide instant game insights and predictions",
      link: "/disney/use-cases?division=ESPN",
      metrics: {
        "Prediction Accuracy": "87%",
        "Processing Speed": "50ms",
        "Sports Coverage": "All Major Leagues"
      }
    },
    {
      title: "Fantasy Sports AI Assistant",
      icon: "🤖",
      description: "Machine learning algorithms helping 25M+ users optimize their fantasy teams",
      link: "/disney/use-cases?division=ESPN",
      metrics: {
        "User Performance": "+45%",
        "Active Users": "25M+",
        "Recommendations/Day": "100M+"
      }
    },
    {
      title: "Automated Highlight Generation",
      icon: "🎬",
      description: "Computer vision identifies key moments and creates highlight reels in under 30 seconds",
      link: "/disney/experiments",
      metrics: {
        "Processing Time": "28 seconds",
        "Accuracy Rate": "89%",
        "Sports Covered": "5 (expanding)"
      }
    },
    {
      title: "AI-Powered Game Predictions",
      icon: "🔮",
      description: "Deep learning models analyzing historical data, player stats, and real-time conditions",
      link: "/disney/use-cases?division=ESPN",
      metrics: {
        "Prediction Models": "200+",
        "Data Points": "1B+ per game",
        "Confidence Level": "92%"
      }
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-ktqeqd_START -->${$$result.title = `<title>ESPN AI - Transforming Sports Through AI | Disney AI Hub</title>`, ""}<!-- HEAD_svelte-ktqeqd_END -->`, ""}  <section class="relative overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-orange-600 text-white"><div class="absolute inset-0 opacity-10"><div class="grid grid-cols-6 gap-4 p-8">${each(Array(24), (_, i) => {
    return `<div class="text-4xl animate-pulse" style="${"animation-delay: " + escape(i * 0.1, true) + "s"}">${escape(["🏈", "🏀", "⚾", "🏒", "⚽", "🎾"][i % 6])} </div>`;
  })}</div></div> <div class="relative z-10 container mx-auto px-4 py-20" data-svelte-h="svelte-1s465ry"><h1 class="text-5xl md:text-7xl font-bold mb-6">ESPN AI</h1> <p class="text-2xl md:text-3xl mb-8">Transforming Sports Through Artificial Intelligence</p> <div class="flex flex-wrap gap-4"><span class="px-4 py-2 bg-white/20 backdrop-blur rounded-full text-sm font-medium">🧠 87% Prediction Accuracy</span> <span class="px-4 py-2 bg-white/20 backdrop-blur rounded-full text-sm font-medium">⚡ 50ms Real-time Processing</span> <span class="px-4 py-2 bg-white/20 backdrop-blur rounded-full text-sm font-medium">🎬 28-second Highlight Generation</span></div></div></section>  <section class="bg-gray-900 text-white py-8"><div class="container mx-auto px-4"><div class="flex items-center justify-between mb-6" data-svelte-h="svelte-ag46pq"><h2 class="text-2xl font-bold flex items-center"><span class="text-3xl mr-3">🤖</span>
        AI-Powered Sports Technology</h2> <a href="/disney/experiments" class="text-red-400 hover:text-red-300 transition-colors">View All Experiments →</a></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">${each(aiUseCases, (useCase) => {
    return `<a${add_attribute("href", useCase.link, 0)} class="block bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-all hover:scale-105 cursor-pointer"><div class="flex items-center justify-between mb-3"><span class="text-3xl">${escape(useCase.icon)}</span> <span class="text-xs font-bold text-red-400" data-svelte-h="svelte-ag2jxw">View Details</span></div> <h3 class="font-semibold mb-2 text-white">${escape(useCase.title)}</h3> <p class="text-sm text-gray-300 mb-3">${escape(useCase.description)}</p> <div class="space-y-1">${each(Object.entries(useCase.metrics).slice(0, 2), ([key, value]) => {
      return `<div class="flex justify-between text-xs"><span class="text-gray-400">${escape(key)}:</span> <span class="text-red-400 font-medium">${escape(value)}</span> </div>`;
    })}</div> </a>`;
  })}</div></div></section>  <section class="container mx-auto px-4 py-16"><h2 class="text-3xl font-bold text-gray-900 mb-12" data-svelte-h="svelte-1q9talm">Core AI Technologies</h2> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">${each(aiTechnologies, (tech) => {
    return `<div class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"><div class="${"absolute inset-0 bg-gradient-to-br " + escape(tech.color, true)}"></div> <div class="relative z-10 p-6 text-white text-center"><div class="text-5xl mb-2">${escape(tech.icon)}</div> <h3 class="font-bold text-lg mb-2">${escape(tech.name)}</h3> <p class="text-xs opacity-90 mb-2">${escape(tech.description)}</p> <div class="text-sm font-bold bg-white/20 rounded-full px-3 py-1 inline-block">${escape(tech.stats)} </div></div> </div>`;
  })}</div></section>  <section class="bg-gray-50 py-16"><div class="container mx-auto px-4"><h2 class="text-3xl font-bold text-gray-900 mb-12" data-svelte-h="svelte-px3qg0">AI-Powered ESPN Platforms</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">${each(aiPoweredPlatforms, (platform) => {
    return `<div class="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6"><h3 class="text-xl font-bold mb-2 text-red-600">${escape(platform.name)}</h3> <p class="text-gray-900 mb-4">${escape(platform.description)}</p> <ul class="space-y-2 mb-4">${each(platform.features, (feature) => {
      return `<li class="text-sm text-gray-900 flex items-center"><span class="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span> ${escape(feature)} </li>`;
    })}</ul> ${platform.caseStudyId ? `<a href="/disney/use-cases?division=ESPN" class="text-sm text-red-600 hover:text-red-700 font-medium" data-svelte-h="svelte-1wwh7fx">View Case Study →
            </a>` : `${platform.experimentId ? `<a href="/disney/experiments" class="text-sm text-red-600 hover:text-red-700 font-medium" data-svelte-h="svelte-e2iki7">View Experiment →
            </a>` : `${platform.status ? `<span class="text-sm text-gray-500 font-medium">${escape(platform.status)} </span>` : ``}`}`} </div>`;
  })}</div></div></section>  <section class="container mx-auto px-4 py-16" data-svelte-h="svelte-1p17d0r"><div class="bg-gradient-to-r from-red-100 to-orange-100 rounded-3xl p-8 md:p-12"><h2 class="text-3xl font-bold text-gray-900 mb-4 text-center">ESPN AI Innovation Hub</h2> <p class="text-center text-gray-600 mb-12 max-w-3xl mx-auto">Transforming sports broadcasting and analytics through cutting-edge artificial intelligence</p> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8"> <div class="bg-white rounded-xl p-6 shadow-lg"><div class="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-4"><span class="text-3xl">📊</span></div> <h3 class="font-bold text-xl mb-3">Real-time Analytics Engine</h3> <p class="text-gray-600 mb-4">Processing billions of data points per game to deliver instant insights and predictions with 87% accuracy</p> <div class="space-y-2 text-sm"><div class="flex justify-between"><span class="text-gray-500">Latency:</span> <span class="font-medium">50ms</span></div> <div class="flex justify-between"><span class="text-gray-500">Data Points/Game:</span> <span class="font-medium">1B+</span></div> <div class="flex justify-between"><span class="text-gray-500">Sports Covered:</span> <span class="font-medium">All Major</span></div></div></div>  <div class="bg-white rounded-xl p-6 shadow-lg"><div class="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-lg flex items-center justify-center mb-4"><span class="text-3xl">👁️</span></div> <h3 class="font-bold text-xl mb-3">Computer Vision Systems</h3> <p class="text-gray-600 mb-4">Advanced AI tracking player movements, ball trajectories, and automatically generating highlight reels</p> <div class="space-y-2 text-sm"><div class="flex justify-between"><span class="text-gray-500">Processing Speed:</span> <span class="font-medium">60fps</span></div> <div class="flex justify-between"><span class="text-gray-500">Highlight Creation:</span> <span class="font-medium">28 seconds</span></div> <div class="flex justify-between"><span class="text-gray-500">Accuracy:</span> <span class="font-medium">89%</span></div></div></div>  <div class="bg-white rounded-xl p-6 shadow-lg"><div class="bg-gradient-to-br from-orange-500 to-red-600 w-16 h-16 rounded-lg flex items-center justify-center mb-4"><span class="text-3xl">🔮</span></div> <h3 class="font-bold text-xl mb-3">Predictive Intelligence</h3> <p class="text-gray-600 mb-4">Deep learning models forecasting game outcomes, player performance, and injury risks with high confidence</p> <div class="space-y-2 text-sm"><div class="flex justify-between"><span class="text-gray-500">Prediction Models:</span> <span class="font-medium">200+</span></div> <div class="flex justify-between"><span class="text-gray-500">Confidence Level:</span> <span class="font-medium">92%</span></div> <div class="flex justify-between"><span class="text-gray-500">Fantasy Users:</span> <span class="font-medium">25M+</span></div></div></div></div> <div class="mt-12 text-center"><a href="/disney/use-cases?division=ESPN" class="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium">Explore All ESPN AI Use Cases
        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div></div></section>  <section class="bg-gradient-to-r from-gray-900 to-black text-white py-16" data-svelte-h="svelte-1bk4yd4"><div class="container mx-auto px-4"><h2 class="text-3xl font-bold text-center mb-12">AI Technology Impact</h2> <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"><div><div class="text-4xl font-bold mb-2 text-red-400">1B+</div> <div class="text-gray-300">Data Points/Game</div></div> <div><div class="text-4xl font-bold mb-2 text-red-400">87%</div> <div class="text-gray-300">Prediction Accuracy</div></div> <div><div class="text-4xl font-bold mb-2 text-red-400">28 sec</div> <div class="text-gray-300">Highlight Creation</div></div> <div><div class="text-4xl font-bold mb-2 text-red-400">50ms</div> <div class="text-gray-300">Real-time Latency</div></div></div></div></section>  <section class="container mx-auto px-4 py-16" data-svelte-h="svelte-s5mwq3"><div class="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white"><div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"><div><h2 class="text-3xl font-bold mb-4">AI-Powered Fantasy Sports</h2> <p class="text-lg mb-6 text-purple-100">Machine learning algorithms analyze 25+ million users&#39; performance to provide intelligent fantasy recommendations and predictions.</p> <ul class="space-y-3 mb-8"><li class="flex items-center"><span class="text-2xl mr-3">🤖</span> <span>AI-driven lineup optimization with 45% better performance</span></li> <li class="flex items-center"><span class="text-2xl mr-3">📊</span> <span>Predictive injury risk analysis and player forecasting</span></li> <li class="flex items-center"><span class="text-2xl mr-3">⚡</span> <span>Real-time trade analyzer and matchup intelligence</span></li> <li class="flex items-center"><span class="text-2xl mr-3">🎯</span> <span>Personalized recommendations based on your playing style</span></li></ul> <a href="/disney/use-cases?division=ESPN" class="inline-flex items-center px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">View Fantasy AI Case Study
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div> <div class="text-center"><div class="text-9xl mb-4">🤖</div> <div class="bg-white/20 backdrop-blur rounded-lg p-4"><div class="text-2xl font-bold mb-1">25M+</div> <div class="text-sm opacity-90">AI-Assisted Users</div></div></div></div></div></section>`;
});
export {
  Page as default
};
