import { c as create_ssr_component, b as each, e as escape } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const aiFeatures = [
    {
      title: "Personalized Recommendations",
      description: "AI analyzes viewing patterns to suggest content tailored to individual preferences",
      icon: "🎯",
      benefits: ["Increased engagement", "Higher watch time", "Better content discovery"],
      stat: "75% of viewer sessions start with AI recommendations"
    },
    {
      title: "Smart Thumbnail Generation",
      description: "AI automatically selects and generates compelling thumbnails for maximum appeal",
      icon: "🖼️",
      benefits: [
        "Higher click-through rates",
        "A/B testing optimization",
        "Dynamic personalization"
      ],
      stat: "30% improvement in content click-through rates"
    },
    {
      title: "Bandwidth Optimization",
      description: "AI predicts network conditions and optimizes streaming quality in real-time",
      icon: "📡",
      benefits: ["Reduced buffering", "Adaptive quality", "Lower data usage"],
      stat: "40% reduction in buffering incidents"
    },
    {
      title: "Content Discovery Engine",
      description: "Advanced AI helps viewers find exactly what they want to watch",
      icon: "🔍",
      benefits: ["Voice search", "Mood-based suggestions", "Cross-platform learning"],
      stat: "2x faster content discovery"
    }
  ];
  const aiCapabilities = [
    {
      category: "Content Understanding",
      icon: "🧠",
      features: [
        "Scene analysis and tagging",
        "Character recognition",
        "Mood and genre classification",
        "Audio sentiment analysis"
      ]
    },
    {
      category: "User Experience",
      icon: "👤",
      features: [
        "Predictive caching",
        "Skip intro/outro detection",
        "Personalized UI layouts",
        "Smart continue watching"
      ]
    },
    {
      category: "Technical Optimization",
      icon: "⚙️",
      features: [
        "CDN routing optimization",
        "Device-specific encoding",
        "Peak load prediction",
        "Quality adaptation"
      ]
    }
  ];
  const streamingPlatforms = [
    {
      name: "Disney+",
      users: "164.2M",
      aiFeature: "Character-based recommendations"
    },
    {
      name: "Hulu",
      users: "48.5M",
      aiFeature: "Live TV predictions"
    },
    {
      name: "ESPN+",
      users: "25.3M",
      aiFeature: "Sports highlights AI"
    }
  ];
  const useCases = [
    {
      title: "Kids Content Safety",
      description: "AI monitors and filters content for age-appropriate viewing",
      impact: "99.9% accuracy in content classification"
    },
    {
      title: "Multilingual Support",
      description: "AI-powered dubbing and subtitle generation in 30+ languages",
      impact: "65% increase in international viewership"
    },
    {
      title: "Predictive Maintenance",
      description: "AI predicts and prevents streaming infrastructure issues",
      impact: "99.99% platform uptime"
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-15b02ac_START -->${$$result.title = `<title>AI in Streaming - Disney&#39;s AI-Powered Entertainment Experience</title>`, ""}<!-- HEAD_svelte-15b02ac_END -->`, ""}  <section class="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white"><div class="absolute inset-0 opacity-20"><div class="grid grid-cols-8 gap-4 p-8">${each(Array(32), (_, i) => {
    return `<div class="text-4xl animate-pulse" style="${"animation-delay: " + escape(i * 0.1, true) + "s"}">${escape(["🤖", "🎬", "🧠", "📡"][i % 4])} </div>`;
  })}</div></div> <div class="relative z-10 container mx-auto px-4 py-20" data-svelte-h="svelte-jprhrh"><div class="text-center"><h1 class="text-5xl md:text-7xl font-bold mb-6">AI-Powered Streaming</h1> <p class="text-2xl md:text-3xl mb-8 text-blue-100">How Disney Uses AI to Transform Entertainment</p> <p class="text-lg max-w-3xl mx-auto mb-8 text-gray-300">Discover how artificial intelligence enhances every aspect of Disney&#39;s streaming platforms, 
        from personalized recommendations to bandwidth optimization.</p> <a href="/disney/use-cases#content-recommendation" class="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors">View Disney+ Personalized Recommendations Case Study →</a></div></div></section>  <section class="container mx-auto px-4 py-16"><h2 class="text-3xl font-bold mb-12 text-center text-gray-900" data-svelte-h="svelte-169n11z">AI Features Transforming Streaming</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-8">${each(aiFeatures, (feature) => {
    return `<div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8"><div class="flex items-start gap-4"><div class="text-5xl">${escape(feature.icon)}</div> <div class="flex-1"><h3 class="text-2xl font-bold mb-3 text-gray-900">${escape(feature.title)}</h3> <p class="text-gray-600 mb-4">${escape(feature.description)}</p> <div class="bg-blue-50 p-4 rounded-lg mb-4"><p class="text-blue-900 font-semibold">${escape(feature.stat)}</p></div> <div class="space-y-2">${each(feature.benefits, (benefit) => {
      return `<div class="flex items-center gap-2"><span class="text-green-500" data-svelte-h="svelte-rc1rqh">✓</span> <span class="text-sm text-gray-700">${escape(benefit)}</span> </div>`;
    })}</div> </div></div> </div>`;
  })}</div></section>  <section class="bg-gradient-to-b from-gray-50 to-white py-16"><div class="container mx-auto px-4"><h2 class="text-3xl font-bold mb-4 text-center text-gray-900" data-svelte-h="svelte-1hlwfmm">AI Capabilities Across Platforms</h2> <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto" data-svelte-h="svelte-1vhezf1">Advanced AI technologies power every aspect of the streaming experience</p> <div class="grid grid-cols-1 md:grid-cols-3 gap-6">${each(aiCapabilities, (capability) => {
    return `<div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow"><div class="text-center mb-4"><div class="text-5xl mb-2">${escape(capability.icon)}</div> <h3 class="text-xl font-bold text-gray-900">${escape(capability.category)}</h3></div> <ul class="space-y-2">${each(capability.features, (feature) => {
      return `<li class="flex items-start gap-2"><span class="text-blue-500 mt-1" data-svelte-h="svelte-b4ef1y">•</span> <span class="text-sm text-gray-700">${escape(feature)}</span> </li>`;
    })}</ul> </div>`;
  })}</div></div></section>  <section class="container mx-auto px-4 py-16"><div class="bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl p-8 md:p-12"><h2 class="text-3xl font-bold mb-8 text-center text-gray-900" data-svelte-h="svelte-1vbgttm">AI Impact Across Streaming Platforms</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-8">${each(streamingPlatforms, (platform) => {
    return `<div class="text-center bg-white rounded-xl p-6"><h3 class="text-2xl font-bold mb-2 text-gray-900">${escape(platform.name)}</h3> <p class="text-4xl font-bold text-blue-600 mb-2">${escape(platform.users)}</p> <p class="text-sm text-gray-600" data-svelte-h="svelte-rrlmvm">Active Subscribers</p> <div class="mt-4 pt-4 border-t"><p class="text-sm font-semibold text-purple-700">${escape(platform.aiFeature)}</p></div> </div>`;
  })}</div></div></section>  <section class="bg-gray-50 py-16"><div class="container mx-auto px-4"><h2 class="text-3xl font-bold mb-12 text-center text-gray-900" data-svelte-h="svelte-1cn7vdi">Real-World AI Applications</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-6">${each(useCases, (useCase) => {
    return `<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"><h3 class="font-bold text-lg mb-3 text-gray-900">${escape(useCase.title)}</h3> <p class="text-gray-600 mb-4">${escape(useCase.description)}</p> <div class="bg-green-50 p-3 rounded"><p class="text-green-800 font-semibold text-sm">${escape(useCase.impact)}</p></div> </div>`;
  })}</div> <div class="text-center mt-12" data-svelte-h="svelte-1tkwxvq"><a href="/disney/use-cases#content-recommendation" class="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">Explore Disney+ Recommendation Engine →</a></div></div></section>  <section class="container mx-auto px-4 py-16" data-svelte-h="svelte-4y3j32"><h2 class="text-3xl font-bold mb-8 text-center text-gray-900">AI-Driven Technical Excellence</h2> <div class="bg-white rounded-2xl shadow-xl p-8"><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div class="text-center"><div class="text-5xl mb-4">🚀</div> <h3 class="font-bold mb-2 text-gray-900">50ms</h3> <p class="text-sm text-gray-600">Average recommendation response time</p></div> <div class="text-center"><div class="text-5xl mb-4">🌐</div> <h3 class="font-bold mb-2 text-gray-900">190+ Countries</h3> <p class="text-sm text-gray-600">AI-optimized content delivery</p></div> <div class="text-center"><div class="text-5xl mb-4">📊</div> <h3 class="font-bold mb-2 text-gray-900">10B+ Events/Day</h3> <p class="text-sm text-gray-600">Processed by AI systems</p></div></div></div></section>  <section class="container mx-auto px-4 py-16" data-svelte-h="svelte-a4absn"><div class="bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 rounded-3xl p-8 md:p-12 text-white text-center"><h2 class="text-4xl font-bold mb-6">Learn More About AI in Entertainment</h2> <p class="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">Discover how Disney is using artificial intelligence to create magical experiences across all streaming platforms</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"><a href="/disney/use-cases#content-recommendation" class="inline-flex items-center bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors">View Recommendation Case Study</a> <a href="/disney/technology" class="inline-flex items-center bg-blue-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-900 transition-colors border-2 border-blue-600">Explore AI Technology</a></div></div></section>`;
});
export {
  Page as default
};
