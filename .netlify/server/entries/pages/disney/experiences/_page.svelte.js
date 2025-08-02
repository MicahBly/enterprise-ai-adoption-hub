import { c as create_ssr_component, b as each, e as escape, d as add_attribute } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const aiInitiatives = [
    {
      category: "Crowd Management",
      icon: "👥",
      title: "AI Crowd Flow Optimization",
      description: "Real-time crowd management using AI to predict and optimize guest flow throughout parks",
      metrics: [
        "25% reduction in wait times",
        "92% guest satisfaction",
        "All US parks deployed"
      ],
      status: "Deployed",
      link: "/disney/use-cases?division=Disney%20Experiences#crowd-management"
    },
    {
      category: "Guest Services",
      icon: "🤖",
      title: "AI Guest Support Assistant",
      description: "AI chatbots handle guest inquiries about park hours, attractions, and dining 24/7",
      metrics: ["70% query resolution rate", "24/7 availability", "Web and mobile apps"],
      status: "Deployed",
      link: "/disney/use-cases?division=Disney%20Experiences#chatbot-support"
    },
    {
      category: "Predictive Maintenance",
      icon: "🔧",
      title: "AI Predictive Maintenance System",
      description: "IoT and AI system predicting ride maintenance needs before failures occur",
      metrics: ["73% downtime reduction", "$2.3M/year savings", "94% prediction accuracy"],
      status: "Deployed",
      link: "/disney/experiments#predictive-maintenance"
    },
    {
      category: "Virtual Queue",
      icon: "⚡",
      title: "Lightning Lane AI Optimization",
      description: "AI optimizes virtual queue and Lightning Lane availability based on real-time data",
      metrics: ["35% better capacity utilization", "4.5/5 guest rating", "50+ attractions"],
      status: "Deployed",
      link: "/disney/use-cases?division=Disney%20Experiences#virtual-queue"
    },
    {
      category: "Enhanced Security",
      icon: "🛡️",
      title: "AI Security Systems",
      description: "AI-based facial recognition and surveillance for enhanced park security",
      metrics: ["60% faster threat detection", "99.9% uptime", "All park entrances"],
      status: "Deployed",
      link: "/disney/use-cases?division=Disney%20Experiences#facial-recognition-security"
    },
    {
      category: "Photo Enhancement",
      icon: "📸",
      title: "PhotoPass AI Enhancement",
      description: "AI automatically captures and enhances guest photos at attractions",
      metrics: [
        "3x more photos captured",
        "Professional quality",
        "10 attractions piloting"
      ],
      status: "Testing",
      link: "/disney/use-cases?division=Disney%20Experiences#photopass-ai"
    }
  ];
  const experimentHighlights = [
    {
      title: "Mixed Reality (XR) Park Experiences",
      description: "Exploring AR/VR integration for enhanced park attractions and guest experiences",
      status: "Pilot",
      participants: 50,
      link: "/disney/experiments#mixed-reality-parks"
    },
    {
      title: "Autonomous Vehicle Integration",
      description: "Partnership with Nuro for autonomous delivery and transportation within Disney properties",
      status: "Planning",
      participants: 20,
      link: "/disney/experiments#autonomous-park-vehicles"
    },
    {
      title: "Real-time Guest Sentiment Analysis",
      description: "AI system analyzing guest feedback and social media for real-time sentiment tracking",
      status: "Planning",
      participants: 10,
      link: "/disney/experiments#guest-sentiment-analysis"
    }
  ];
  const parkAIStats = [
    {
      label: "AI Systems Deployed",
      value: "12+",
      description: "Across all parks worldwide"
    },
    {
      label: "Guest Interactions Daily",
      value: "2M+",
      description: "AI-powered touchpoints"
    },
    {
      label: "Wait Time Reduction",
      value: "25%",
      description: "Through crowd management AI"
    },
    {
      label: "Operational Efficiency",
      value: "40%",
      description: "Improvement across systems"
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-1leu1cl_START -->${$$result.title = `<title>AI in Disney Experiences - Parks &amp; Guest Innovation | Disney AI Hub</title>`, ""}<!-- HEAD_svelte-1leu1cl_END -->`, ""}  <section class="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white" data-svelte-h="svelte-1ny8tf2"><div class="absolute inset-0 opacity-20"><svg viewBox="0 0 1200 600" class="w-full h-full"><g class="text-white/20"><circle cx="200" cy="150" r="40" fill="none" stroke="currentColor" stroke-width="2"></circle><circle cx="500" cy="100" r="30" fill="none" stroke="currentColor" stroke-width="2"></circle><circle cx="800" cy="200" r="35" fill="none" stroke="currentColor" stroke-width="2"></circle><circle cx="300" cy="350" r="25" fill="none" stroke="currentColor" stroke-width="2"></circle><circle cx="700" cy="400" r="40" fill="none" stroke="currentColor" stroke-width="2"></circle><circle cx="1000" cy="300" r="30" fill="none" stroke="currentColor" stroke-width="2"></circle><line x1="200" y1="150" x2="500" y2="100" stroke="currentColor" stroke-width="1"></line><line x1="500" y1="100" x2="800" y2="200" stroke="currentColor" stroke-width="1"></line><line x1="200" y1="150" x2="300" y2="350" stroke="currentColor" stroke-width="1"></line><line x1="800" y1="200" x2="700" y2="400" stroke="currentColor" stroke-width="1"></line><line x1="700" y1="400" x2="1000" y2="300" stroke="currentColor" stroke-width="1"></line><line x1="800" y1="200" x2="1000" y2="300" stroke="currentColor" stroke-width="1"></line></g></svg></div> <div class="relative z-10 container mx-auto px-4 py-20"><h1 class="text-5xl md:text-7xl font-bold mb-6">AI in Disney Experiences</h1> <p class="text-2xl md:text-3xl mb-8 text-blue-100">Transforming Guest Experiences Through Artificial Intelligence</p> <p class="text-lg text-blue-200 mb-8 max-w-3xl">Discover how Disney Parks &amp; Experiences leverages cutting-edge AI to enhance guest services, 
      optimize operations, and create magical moments for millions of visitors worldwide.</p> <div class="flex flex-wrap gap-4"><a href="/disney/use-cases?division=Disney%20Experiences" class="bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-purple-100 transition-colors text-lg">Explore Use Cases</a> <a href="/disney/experiments" class="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-purple-600 transition-colors text-lg">View Experiments</a></div></div></section>  <section class="container mx-auto px-4 py-16"><div class="text-center mb-12" data-svelte-h="svelte-1dkuady"><h2 class="text-3xl font-bold mb-4 text-gray-900">AI Innovation in Parks &amp; Experiences</h2> <p class="text-lg text-gray-700 max-w-3xl mx-auto">Disney Experiences is at the forefront of AI adoption, implementing intelligent systems across 
      crowd management, guest services, predictive maintenance, and enhanced security.</p></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">${each(aiInitiatives, (initiative) => {
    return `<div class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"><div class="bg-gradient-to-br from-blue-500 to-purple-500 p-6 text-white"><div class="flex items-center justify-between mb-4"><span class="text-4xl">${escape(initiative.icon)}</span> <span class="bg-white/20 px-3 py-1 rounded-full text-sm">${escape(initiative.status)} </span></div> <h3 class="text-xl font-bold mb-1">${escape(initiative.title)}</h3> <p class="text-blue-100 text-sm">${escape(initiative.category)}</p></div> <div class="p-6"><p class="text-gray-700 mb-4">${escape(initiative.description)}</p> <h4 class="font-semibold text-gray-900 mb-3" data-svelte-h="svelte-swpykq">Key Metrics:</h4> <ul class="space-y-2 mb-4">${each(initiative.metrics, (metric) => {
      return `<li class="text-sm text-gray-700 flex items-center"><span class="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span> ${escape(metric)} </li>`;
    })}</ul> <a${add_attribute("href", initiative.link, 0)} class="text-purple-600 font-semibold hover:text-purple-700 transition-colors">Learn More →
          </a></div> </div>`;
  })}</div></section>  <section class="bg-gradient-to-b from-blue-50 to-white py-16"><div class="container mx-auto px-4"><div class="text-center mb-12" data-svelte-h="svelte-p2jd7y"><h2 class="text-3xl font-bold mb-4 text-gray-900">Cutting-Edge AI Experiments</h2> <p class="text-lg text-gray-700 max-w-3xl mx-auto">Explore Disney&#39;s innovation labs where tomorrow&#39;s guest experiences are being developed today</p></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6">${each(experimentHighlights, (experiment) => {
    return `<div class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6"><div class="flex items-center justify-between mb-4"><span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">${escape(experiment.status)}</span> <span class="text-sm text-gray-600">${escape(experiment.participants)} participants
            </span></div> <h3 class="text-xl font-bold mb-2 text-gray-900">${escape(experiment.title)}</h3> <p class="text-gray-700 mb-4">${escape(experiment.description)}</p> <a${add_attribute("href", experiment.link, 0)} class="text-purple-600 font-semibold hover:text-purple-700 transition-colors">View Experiment →</a> </div>`;
  })}</div> <div class="text-center mt-8" data-svelte-h="svelte-1alya48"><a href="/disney/experiments" class="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors">View All AI Experiments</a></div></div></section>  <section class="container mx-auto px-4 py-16" data-svelte-h="svelte-1jk7zu2"><div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12"><h2 class="text-3xl font-bold mb-4 text-center text-gray-900">AI-Powered Guest Experience Innovation</h2> <p class="text-lg text-gray-700 text-center mb-8 max-w-3xl mx-auto">From predictive maintenance that prevents ride downtime to AI chatbots that provide instant guest support, 
      Disney&#39;s AI initiatives are revolutionizing how millions experience the magic.</p> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"><div class="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"><div class="text-4xl mb-4">🤖</div> <h3 class="font-bold text-lg mb-2 text-gray-900">Guest Support AI</h3> <p class="text-sm text-gray-700 mb-3">24/7 AI assistance for park inquiries</p> <span class="text-purple-600 font-semibold">70% resolution rate</span></div> <div class="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"><div class="text-4xl mb-4">👥</div> <h3 class="font-bold text-lg mb-2 text-gray-900">Crowd Management</h3> <p class="text-sm text-gray-700 mb-3">Real-time guest flow optimization</p> <span class="text-purple-600 font-semibold">25% wait reduction</span></div> <div class="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"><div class="text-4xl mb-4">🔧</div> <h3 class="font-bold text-lg mb-2 text-gray-900">Predictive Maintenance</h3> <p class="text-sm text-gray-700 mb-3">AI prevents ride downtime</p> <span class="text-purple-600 font-semibold">73% downtime reduction</span></div> <div class="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"><div class="text-4xl mb-4">⚡</div> <h3 class="font-bold text-lg mb-2 text-gray-900">Virtual Queue AI</h3> <p class="text-sm text-gray-700 mb-3">Smart Lightning Lane optimization</p> <span class="text-purple-600 font-semibold">35% efficiency gain</span></div></div> <div class="text-center mt-8"><a href="/disney/use-cases?division=Disney%20Experiences" class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow">Explore All Use Cases</a></div></div></section>  <section class="bg-gray-50 py-16" data-svelte-h="svelte-fqy3ej"><div class="container mx-auto px-4"><h2 class="text-3xl font-bold mb-4 text-center text-gray-900">Explore Disney&#39;s AI Innovation Hub</h2> <p class="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">Dive deeper into specific AI applications, ongoing experiments, and the teams driving innovation 
      across Disney&#39;s parks and experiences worldwide.</p> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"><a href="/disney/use-cases?division=Disney%20Experiences" class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group"><div class="text-4xl mb-4 text-center group-hover:scale-110 transition-transform">🎯</div> <h3 class="font-bold text-lg mb-2 text-center text-gray-900">Use Cases</h3> <p class="text-gray-700 text-sm text-center">Deployed AI solutions enhancing guest experiences</p></a> <a href="/disney/experiments" class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group"><div class="text-4xl mb-4 text-center group-hover:scale-110 transition-transform">🧪</div> <h3 class="font-bold text-lg mb-2 text-center text-gray-900">Experiments</h3> <p class="text-gray-700 text-sm text-center">Innovation labs testing future AI capabilities</p></a> <a href="/disney/parks" class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group"><div class="text-4xl mb-4 text-center group-hover:scale-110 transition-transform">🏰</div> <h3 class="font-bold text-lg mb-2 text-center text-gray-900">Parks AI</h3> <p class="text-gray-700 text-sm text-center">AI innovations specific to Disney theme parks</p></a> <a href="/disney/efficiency" class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group"><div class="text-4xl mb-4 text-center group-hover:scale-110 transition-transform">📊</div> <h3 class="font-bold text-lg mb-2 text-center text-gray-900">Efficiency Dashboard</h3> <p class="text-gray-700 text-sm text-center">Real-time AI performance metrics and insights</p></a></div></div></section>  <section class="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-16"><div class="container mx-auto px-4"><h2 class="text-3xl font-bold text-center mb-8" data-svelte-h="svelte-1xk2xyk">AI Impact Across Disney Experiences</h2> <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">${each(parkAIStats, (stat) => {
    return `<div class="bg-white/10 backdrop-blur rounded-lg p-6"><div class="text-4xl font-bold mb-2">${escape(stat.value)}</div> <div class="text-purple-200 mb-1">${escape(stat.label)}</div> <div class="text-sm text-purple-300">${escape(stat.description)}</div> </div>`;
  })}</div></div></section>  <section class="container mx-auto px-4 py-16" data-svelte-h="svelte-vpvvn6"><div class="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-16 text-white text-center"><h2 class="text-4xl font-bold mb-6">Discover the Future of Guest Experiences</h2> <p class="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">Explore how Disney&#39;s AI innovations are transforming theme park operations, enhancing guest services, 
      and creating the magical experiences of tomorrow.</p> <div class="flex flex-wrap gap-4 justify-center"><a href="/disney/use-cases?division=Disney%20Experiences" class="bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-purple-100 transition-colors text-lg">View AI Use Cases</a> <a href="/disney/experiments" class="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-purple-600 transition-colors text-lg">Explore Experiments</a></div></div></section>`;
});
export {
  Page as default
};
