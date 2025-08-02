import { c as create_ssr_component, b as each, e as escape, d as add_attribute } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const aiAnimationFeatures = [
    {
      title: "AI-Powered Animation In-Betweening",
      studio: "Walt Disney Animation Studios",
      icon: "🎨",
      description: "Revolutionary AI system that automatically generates intermediate frames between key animation poses, reducing manual work by 70%",
      benefits: [
        "70% reduction in animation time",
        "Consistent motion quality",
        "Animator focus on creative work"
      ],
      status: "Production Ready",
      href: "/disney/use-cases"
    },
    {
      title: "AI Visual Effects Enhancement",
      studio: "Industrial Light & Magic (ILM)",
      icon: "✨",
      description: "Advanced AI algorithms enhance visual effects rendering, particle simulations, and environmental details in real-time",
      benefits: [
        "Real-time VFX preview",
        "50% faster render times",
        "Photorealistic enhancements"
      ],
      status: "In Production",
      href: "/disney/use-cases"
    },
    {
      title: "AI Script Analysis & Development",
      studio: "Walt Disney Studios",
      icon: "📝",
      description: "Machine learning models analyze scripts for pacing, character development, and audience engagement predictions",
      benefits: [
        "Data-driven story insights",
        "Character arc optimization",
        "Audience sentiment prediction"
      ],
      status: "Active Experiment",
      href: "/disney/experiments"
    },
    {
      title: "AI-Driven Motion Capture Enhancement",
      studio: "Walt Disney Animation Studios",
      icon: "🏃",
      description: "AI enhances motion capture data, filling gaps and smoothing performances for more natural character movement",
      benefits: [
        "Reduced mocap cleanup time",
        "Natural motion interpolation",
        "Multi-actor scene processing"
      ],
      status: "Production Ready",
      href: "/disney/use-cases"
    }
  ];
  const aiProductionTools = [
    {
      name: "Neural Rendering Engine",
      category: "Visual Effects",
      icon: "🖼️",
      description: "AI-powered rendering that predicts and optimizes light behavior",
      impact: "60% faster renders"
    },
    {
      name: "Character AI Assistant",
      category: "Animation",
      icon: "🤖",
      description: "Helps animators maintain character consistency across scenes",
      impact: "40% fewer revisions"
    },
    {
      name: "Scene Composition AI",
      category: "Cinematography",
      icon: "🎬",
      description: "Suggests optimal camera angles and shot compositions",
      impact: "Enhanced visual storytelling"
    },
    {
      name: "Audio AI Processor",
      category: "Sound Design",
      icon: "🎵",
      description: "Automatically syncs sound effects and enhances dialogue clarity",
      impact: "50% faster audio post"
    }
  ];
  const aiExperiments = [
    {
      title: "Generative Background Art",
      description: "AI creates detailed background environments from concept sketches",
      progress: 75,
      icon: "🏞️"
    },
    {
      title: "Emotion-Driven Animation",
      description: "AI adjusts character animations based on emotional context",
      progress: 60,
      icon: "😊"
    },
    {
      title: "Predictive Audience Analytics",
      description: "Machine learning predicts audience reactions to story elements",
      progress: 85,
      icon: "📊"
    },
    {
      title: "AI Storyboard Generation",
      description: "Converts written scenes into initial storyboard sketches",
      progress: 45,
      icon: "🎨"
    }
  ];
  const successMetrics = [
    {
      metric: "Animation Time Saved",
      value: "70%",
      icon: "⏱️"
    },
    {
      metric: "VFX Render Speed",
      value: "2.5x",
      icon: "🚀"
    },
    {
      metric: "Production Cost Reduction",
      value: "40%",
      icon: "💰"
    },
    {
      metric: "Creative Freedom Increase",
      value: "85%",
      icon: "🎯"
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-kqoe7u_START -->${$$result.title = `<title>AI in Movie Production - Disney Studios Innovation</title>`, ""}<!-- HEAD_svelte-kqoe7u_END -->`, ""}  <section class="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 text-white" data-svelte-h="svelte-1dztpec"><div class="absolute inset-0 opacity-20"><div class="absolute top-10 right-10 text-9xl">🤖</div> <div class="absolute bottom-10 left-10 text-9xl">🎬</div></div> <div class="relative z-10 container mx-auto px-4 py-20"><h1 class="text-5xl md:text-6xl font-bold mb-6">AI in Movie Production</h1> <p class="text-xl md:text-2xl mb-8 text-purple-100">Revolutionizing animation, VFX, and storytelling with artificial intelligence</p> <a href="/disney/use-cases" class="inline-flex items-center bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-purple-100 transition-colors">Explore AI Use Cases
      <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div></section>  <section class="container mx-auto px-4 py-16"><h2 class="text-3xl font-bold mb-12 text-center text-gray-900" data-svelte-h="svelte-p4eca1">AI-Powered Production Features</h2> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">${each(aiAnimationFeatures, (feature) => {
    return `<div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"><div class="bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white"><div class="flex items-center justify-between mb-4"><span class="text-5xl">${escape(feature.icon)}</span> <span class="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">${escape(feature.status)} </span></div> <h3 class="text-2xl font-bold mb-2">${escape(feature.title)}</h3> <p class="text-sm text-purple-100">${escape(feature.studio)}</p></div> <div class="p-6"><p class="text-gray-700 mb-4">${escape(feature.description)}</p> <div class="space-y-2 mb-6">${each(feature.benefits, (benefit) => {
      return `<div class="flex items-center text-sm text-gray-600"><svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> <span class="text-gray-600">${escape(benefit)}</span> </div>`;
    })}</div> <a${add_attribute("href", feature.href, 0)} class="text-purple-600 font-semibold hover:text-purple-800 transition-colors">Learn More →
          </a></div> </div>`;
  })}</div></section>  <section class="bg-gradient-to-r from-purple-100 to-pink-100 py-16"><div class="container mx-auto px-4"><h2 class="text-3xl font-bold mb-12 text-center text-gray-900" data-svelte-h="svelte-lki0f1">Production Impact</h2> <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">${each(successMetrics, (item) => {
    return `<div class="bg-white rounded-xl p-6 text-center shadow-md"><div class="text-4xl mb-3">${escape(item.icon)}</div> <div class="text-3xl font-bold text-purple-600 mb-1">${escape(item.value)}</div> <p class="text-sm text-gray-600">${escape(item.metric)}</p> </div>`;
  })}</div></div></section>  <section class="container mx-auto px-4 py-16"><h2 class="text-3xl font-bold mb-8 text-gray-900" data-svelte-h="svelte-7pinnm">AI Production Tools</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6">${each(aiProductionTools, (tool) => {
    return `<div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"><div class="flex items-start"><span class="text-4xl mr-4">${escape(tool.icon)}</span> <div class="flex-1"><h3 class="text-xl font-bold mb-1 text-gray-900">${escape(tool.name)}</h3> <p class="text-sm text-purple-600 mb-2">${escape(tool.category)}</p> <p class="text-gray-700 mb-3">${escape(tool.description)}</p> <div class="text-sm font-semibold text-green-600"><span class="text-green-600">Impact: ${escape(tool.impact)}</span></div> </div></div> </div>`;
  })}</div></section>  <section class="bg-gray-50 py-16"><div class="container mx-auto px-4"><div class="text-center mb-12" data-svelte-h="svelte-jhkzpn"><h2 class="text-3xl font-bold mb-4 text-gray-900">Active AI Experiments</h2> <p class="text-xl text-gray-700">Exploring the future of filmmaking</p></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">${each(aiExperiments, (experiment) => {
    return `<div class="bg-white rounded-lg shadow-md p-6"><div class="flex items-center mb-4"><span class="text-3xl mr-3">${escape(experiment.icon)}</span> <h3 class="text-lg font-bold flex-1 text-gray-900">${escape(experiment.title)}</h3></div> <p class="text-gray-800 mb-4">${escape(experiment.description)}</p> <div class="relative bg-gray-200 rounded-full h-2"><div class="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style="${"width: " + escape(experiment.progress, true) + "%"}"></div></div> <p class="text-sm text-gray-600 mt-2">Progress: ${escape(experiment.progress)}%</p> </div>`;
  })}</div> <div class="text-center mt-8" data-svelte-h="svelte-4bvj6q"><a href="/disney/experiments" class="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">View All Experiments
        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div></div></section>  <section class="container mx-auto px-4 py-16" data-svelte-h="svelte-1qxn6e9"><div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center"><h2 class="text-3xl font-bold mb-4">The Future of Filmmaking is AI-Powered</h2> <p class="text-xl mb-8 text-blue-100">Discover how Disney Studios is revolutionizing movie production with cutting-edge AI technology</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"><a href="/disney/use-cases" class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Explore Use Cases</a> <a href="/disney/experiments" class="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors">View AI Experiments</a></div></div></section>`;
});
export {
  Page as default
};
