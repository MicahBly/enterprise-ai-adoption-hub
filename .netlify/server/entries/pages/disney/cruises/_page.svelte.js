import { c as create_ssr_component, b as each, e as escape } from "../../../../chunks/ssr.js";
const css = {
  code: "@keyframes svelte-p3tyzq-pulse{0%,100%{opacity:0.1}50%{opacity:0.3}}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  const aiInnovations = [\\n    {\\n      title: 'AI-Powered Route Optimization',\\n      description: 'Advanced algorithms analyze weather patterns, ocean currents, and fuel efficiency to optimize cruise routes in real-time',\\n      features: [\\n        'Real-time weather prediction and avoidance',\\n        'Fuel consumption optimization',\\n        'Dynamic itinerary adjustments',\\n        'Port congestion prediction'\\n      ],\\n      icon: '🧭',\\n      impact: '15% reduction in fuel consumption'\\n    },\\n    {\\n      title: 'Predictive Maintenance Systems',\\n      description: 'Machine learning models monitor ship systems 24/7 to predict and prevent equipment failures before they occur',\\n      features: [\\n        'Engine performance monitoring',\\n        'Vibration analysis for early detection',\\n        'Automated maintenance scheduling',\\n        'Spare parts inventory optimization'\\n      ],\\n      icon: '🔧',\\n      impact: '40% reduction in unexpected breakdowns'\\n    },\\n    {\\n      title: 'Personalized Guest Experiences',\\n      description: 'AI creates unique, tailored experiences for each guest based on preferences, behavior, and real-time feedback',\\n      features: [\\n        'Customized dining recommendations',\\n        'Activity and entertainment matching',\\n        'Personalized shore excursion suggestions',\\n        'Real-time language translation services'\\n      ],\\n      icon: '✨',\\n      impact: '92% guest satisfaction rating'\\n    },\\n    {\\n      title: 'Smart Cabin Technology',\\n      description: 'IoT sensors and AI create intelligent living spaces that adapt to guest preferences automatically',\\n      features: [\\n        'Voice-controlled room automation',\\n        'Predictive climate control',\\n        'Smart lighting based on circadian rhythms',\\n        'Automated service requests'\\n      ],\\n      icon: '🏠',\\n      impact: '30% energy savings per cabin'\\n    }\\n  ];\\n\\n  const operationalAI = [\\n    {\\n      category: 'Navigation & Safety',\\n      applications: [\\n        'Autonomous collision avoidance systems',\\n        'AI-powered bridge decision support',\\n        'Computer vision for man-overboard detection',\\n        'Predictive stability management'\\n      ],\\n      icon: '⚓'\\n    },\\n    {\\n      category: 'Guest Services',\\n      applications: [\\n        'AI concierge and virtual assistants',\\n        'Facial recognition for seamless boarding',\\n        'Sentiment analysis for service improvement',\\n        'Predictive crowd management'\\n      ],\\n      icon: '🛎️'\\n    },\\n    {\\n      category: 'Environmental Impact',\\n      applications: [\\n        'AI-optimized waste management',\\n        'Smart water consumption monitoring',\\n        'Emission reduction algorithms',\\n        'Marine life detection and avoidance'\\n      ],\\n      icon: '🌊'\\n    },\\n    {\\n      category: 'Crew Operations',\\n      applications: [\\n        'AI-powered crew scheduling',\\n        'Training simulations with VR/AR',\\n        'Performance analytics and coaching',\\n        'Automated compliance monitoring'\\n      ],\\n      icon: '👥'\\n    }\\n  ];\\n\\n  const futureInnovations = [\\n    {\\n      innovation: 'Autonomous Ship Operations',\\n      timeline: '2025-2027',\\n      description: 'Semi-autonomous navigation systems with remote monitoring capabilities'\\n    },\\n    {\\n      innovation: 'Digital Twin Technology',\\n      timeline: '2024-2025',\\n      description: 'Complete virtual replicas of ships for testing and optimization'\\n    },\\n    {\\n      innovation: 'Quantum Computing Integration',\\n      timeline: '2026-2028',\\n      description: 'Ultra-complex route optimization across entire fleets'\\n    }\\n  ];\\n\\n  const metrics = [\\n    { label: 'AI Systems Deployed', value: '200+', icon: '🤖' },\\n    { label: 'Data Points Analyzed/Day', value: '50M+', icon: '📊' },\\n    { label: 'Predictive Accuracy', value: '94%', icon: '🎯' },\\n    { label: 'Operational Efficiency Gain', value: '35%', icon: '📈' }\\n  ];\\n<\/script>\\n\\n<svelte:head>\\n  <title>AI Innovation in Cruise Operations - Disney Cruise Line</title>\\n</svelte:head>\\n\\n<!-- Hero Section -->\\n<section class=\\"relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-600 to-cyan-500 text-white\\">\\n  <div class=\\"absolute inset-0\\">\\n    <!-- Tech grid background -->\\n    <div class=\\"absolute inset-0 opacity-10\\">\\n      <div class=\\"grid grid-cols-12 gap-1 h-full\\">\\n        {#each Array(48) as _, i}\\n          <div class=\\"border border-white/20 rounded animate-pulse\\" style=\\"animation-delay: {i * 0.1}s\\"></div>\\n        {/each}\\n      </div>\\n    </div>\\n  </div>\\n  \\n  <div class=\\"relative z-10 container mx-auto px-4 py-20\\">\\n    <div class=\\"text-center\\">\\n      <h1 class=\\"text-5xl md:text-7xl font-bold mb-6\\">\\n        AI-Powered Cruise Innovation\\n      </h1>\\n      <p class=\\"text-2xl md:text-3xl mb-8 text-blue-100\\">\\n        Transforming Maritime Operations with Artificial Intelligence\\n      </p>\\n      <div class=\\"flex flex-wrap justify-center gap-6 mt-12\\">\\n        {#each metrics as metric}\\n          <div class=\\"bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20\\">\\n            <div class=\\"text-4xl mb-2\\">{metric.icon}</div>\\n            <div class=\\"text-3xl font-bold\\">{metric.value}</div>\\n            <div class=\\"text-sm text-blue-200\\">{metric.label}</div>\\n          </div>\\n        {/each}\\n      </div>\\n    </div>\\n  </div>\\n</section>\\n\\n<!-- AI Innovations -->\\n<section class=\\"container mx-auto px-4 py-16\\">\\n  <h2 class=\\"text-3xl font-bold text-gray-900 mb-12 text-center\\">Core AI Innovations</h2>\\n  \\n  <div class=\\"grid grid-cols-1 lg:grid-cols-2 gap-8\\">\\n    {#each aiInnovations as innovation}\\n      <div class=\\"bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden\\">\\n        <div class=\\"bg-gradient-to-br from-blue-500 to-purple-500 p-6 text-white\\">\\n          <div class=\\"flex items-center justify-between mb-4\\">\\n            <h3 class=\\"text-2xl font-bold\\">{innovation.title}</h3>\\n            <div class=\\"text-5xl\\">{innovation.icon}</div>\\n          </div>\\n          <p class=\\"text-blue-100\\">{innovation.description}</p>\\n        </div>\\n        <div class=\\"p-6\\">\\n          <h4 class=\\"font-semibold text-gray-900 mb-3\\">Key Features:</h4>\\n          <ul class=\\"space-y-2 mb-4\\">\\n            {#each innovation.features as feature}\\n              <li class=\\"flex items-start\\">\\n                <span class=\\"w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-1.5 flex-shrink-0\\"></span>\\n                <span class=\\"text-gray-700\\">{feature}</span>\\n              </li>\\n            {/each}\\n          </ul>\\n          <div class=\\"pt-4 border-t border-gray-100\\">\\n            <span class=\\"text-sm font-semibold text-green-600\\">Impact: {innovation.impact}</span>\\n          </div>\\n        </div>\\n      </div>\\n    {/each}\\n  </div>\\n</section>\\n\\n<!-- Operational AI Applications -->\\n<section class=\\"bg-gradient-to-b from-gray-50 to-white py-16\\">\\n  <div class=\\"container mx-auto px-4\\">\\n    <h2 class=\\"text-3xl font-bold text-gray-900 mb-12 text-center\\">AI Across Operations</h2>\\n    \\n    <div class=\\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6\\">\\n      {#each operationalAI as area}\\n        <div class=\\"bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6\\">\\n          <div class=\\"text-4xl mb-4 text-center\\">{area.icon}</div>\\n          <h3 class=\\"font-bold text-gray-900 text-lg mb-4 text-center\\">{area.category}</h3>\\n          <ul class=\\"space-y-2\\">\\n            {#each area.applications as app}\\n              <li class=\\"text-sm text-gray-700 flex items-start\\">\\n                <span class=\\"text-blue-500 mr-2\\">▸</span>\\n                {app}\\n              </li>\\n            {/each}\\n          </ul>\\n        </div>\\n      {/each}\\n    </div>\\n  </div>\\n</section>\\n\\n<!-- Technology Deep Dive -->\\n<section class=\\"container mx-auto px-4 py-16\\">\\n  <div class=\\"bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white\\">\\n    <h2 class=\\"text-3xl font-bold mb-8 text-center\\">Advanced Technology Stack</h2>\\n    \\n    <div class=\\"grid grid-cols-1 md:grid-cols-3 gap-8\\">\\n      <div class=\\"bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20\\">\\n        <h3 class=\\"text-xl font-bold mb-4\\">Machine Learning</h3>\\n        <ul class=\\"space-y-2 text-purple-100\\">\\n          <li>• TensorFlow & PyTorch models</li>\\n          <li>• Real-time data processing</li>\\n          <li>• Edge computing on ships</li>\\n          <li>• Federated learning systems</li>\\n        </ul>\\n      </div>\\n      \\n      <div class=\\"bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20\\">\\n        <h3 class=\\"text-xl font-bold mb-4\\">IoT & Sensors</h3>\\n        <ul class=\\"space-y-2 text-purple-100\\">\\n          <li>• 10,000+ sensors per ship</li>\\n          <li>• Real-time data streaming</li>\\n          <li>• Predictive analytics</li>\\n          <li>• Digital twin integration</li>\\n        </ul>\\n      </div>\\n      \\n      <div class=\\"bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20\\">\\n        <h3 class=\\"text-xl font-bold mb-4\\">Cloud & Edge</h3>\\n        <ul class=\\"space-y-2 text-purple-100\\">\\n          <li>• Hybrid cloud architecture</li>\\n          <li>• Satellite connectivity</li>\\n          <li>• Low-latency processing</li>\\n          <li>• Automated failover systems</li>\\n        </ul>\\n      </div>\\n    </div>\\n  </div>\\n</section>\\n\\n<!-- Future Innovations -->\\n<section class=\\"bg-gray-50 py-16\\">\\n  <div class=\\"container mx-auto px-4\\">\\n    <h2 class=\\"text-3xl font-bold text-gray-900 mb-12 text-center\\">The Future of AI at Sea</h2>\\n    \\n    <div class=\\"max-w-4xl mx-auto\\">\\n      {#each futureInnovations as innovation}\\n        <div class=\\"bg-white rounded-xl shadow-md p-6 mb-6 hover:shadow-lg transition-shadow\\">\\n          <div class=\\"flex items-center justify-between flex-wrap gap-4\\">\\n            <div class=\\"flex-1\\">\\n              <h3 class=\\"text-xl font-bold text-gray-900 mb-2\\">{innovation.innovation}</h3>\\n              <p class=\\"text-gray-700\\">{innovation.description}</p>\\n            </div>\\n            <div class=\\"bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold\\">\\n              {innovation.timeline}\\n            </div>\\n          </div>\\n        </div>\\n      {/each}\\n    </div>\\n    \\n    <!-- AI Benefits Summary -->\\n    <div class=\\"mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto\\">\\n      <div class=\\"text-center\\">\\n        <div class=\\"text-4xl mb-3\\">🌍</div>\\n        <h4 class=\\"font-bold text-gray-900 mb-2\\">Environmental Impact</h4>\\n        <p class=\\"text-gray-600\\">25% reduction in carbon emissions through AI optimization</p>\\n      </div>\\n      <div class=\\"text-center\\">\\n        <div class=\\"text-4xl mb-3\\">⚡</div>\\n        <h4 class=\\"font-bold text-gray-900 mb-2\\">Operational Excellence</h4>\\n        <p class=\\"text-gray-600\\">99.9% system uptime with predictive maintenance</p>\\n      </div>\\n      <div class=\\"text-center\\">\\n        <div class=\\"text-4xl mb-3\\">🎯</div>\\n        <h4 class=\\"font-bold text-gray-900 mb-2\\">Guest Satisfaction</h4>\\n        <p class=\\"text-gray-600\\">AI-driven personalization increases satisfaction by 40%</p>\\n      </div>\\n    </div>\\n  </div>\\n</section>\\n\\n<!-- Call to Action -->\\n<section class=\\"container mx-auto px-4 py-16\\">\\n  <div class=\\"bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center\\">\\n    <h2 class=\\"text-4xl font-bold mb-6\\">Pioneering the Future of Maritime AI</h2>\\n    <p class=\\"text-xl mb-8 text-blue-100 max-w-3xl mx-auto\\">\\n      Disney Cruise Line is leading the transformation of cruise operations through cutting-edge AI technology, \\n      creating safer, more efficient, and more magical experiences at sea.\\n    </p>\\n    <div class=\\"flex flex-wrap justify-center gap-4\\">\\n      <button class=\\"bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors\\">\\n        Learn More About Our Technology\\n      </button>\\n      <button class=\\"bg-transparent border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors text-white\\">\\n        Partner With Us\\n      </button>\\n    </div>\\n  </div>\\n</section>\\n\\n<style>\\n  @keyframes pulse {\\n    0%, 100% {\\n      opacity: 0.1;\\n    }\\n    50% {\\n      opacity: 0.3;\\n    }\\n  }\\n</style>"],"names":[],"mappings":"AA6TE,WAAW,mBAAM,CACf,EAAE,CAAE,IAAK,CACP,OAAO,CAAE,GACX,CACA,GAAI,CACF,OAAO,CAAE,GACX,CACF"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const aiInnovations = [
    {
      title: "AI-Powered Route Optimization",
      description: "Advanced algorithms analyze weather patterns, ocean currents, and fuel efficiency to optimize cruise routes in real-time",
      features: [
        "Real-time weather prediction and avoidance",
        "Fuel consumption optimization",
        "Dynamic itinerary adjustments",
        "Port congestion prediction"
      ],
      icon: "🧭",
      impact: "15% reduction in fuel consumption"
    },
    {
      title: "Predictive Maintenance Systems",
      description: "Machine learning models monitor ship systems 24/7 to predict and prevent equipment failures before they occur",
      features: [
        "Engine performance monitoring",
        "Vibration analysis for early detection",
        "Automated maintenance scheduling",
        "Spare parts inventory optimization"
      ],
      icon: "🔧",
      impact: "40% reduction in unexpected breakdowns"
    },
    {
      title: "Personalized Guest Experiences",
      description: "AI creates unique, tailored experiences for each guest based on preferences, behavior, and real-time feedback",
      features: [
        "Customized dining recommendations",
        "Activity and entertainment matching",
        "Personalized shore excursion suggestions",
        "Real-time language translation services"
      ],
      icon: "✨",
      impact: "92% guest satisfaction rating"
    },
    {
      title: "Smart Cabin Technology",
      description: "IoT sensors and AI create intelligent living spaces that adapt to guest preferences automatically",
      features: [
        "Voice-controlled room automation",
        "Predictive climate control",
        "Smart lighting based on circadian rhythms",
        "Automated service requests"
      ],
      icon: "🏠",
      impact: "30% energy savings per cabin"
    }
  ];
  const operationalAI = [
    {
      category: "Navigation & Safety",
      applications: [
        "Autonomous collision avoidance systems",
        "AI-powered bridge decision support",
        "Computer vision for man-overboard detection",
        "Predictive stability management"
      ],
      icon: "⚓"
    },
    {
      category: "Guest Services",
      applications: [
        "AI concierge and virtual assistants",
        "Facial recognition for seamless boarding",
        "Sentiment analysis for service improvement",
        "Predictive crowd management"
      ],
      icon: "🛎️"
    },
    {
      category: "Environmental Impact",
      applications: [
        "AI-optimized waste management",
        "Smart water consumption monitoring",
        "Emission reduction algorithms",
        "Marine life detection and avoidance"
      ],
      icon: "🌊"
    },
    {
      category: "Crew Operations",
      applications: [
        "AI-powered crew scheduling",
        "Training simulations with VR/AR",
        "Performance analytics and coaching",
        "Automated compliance monitoring"
      ],
      icon: "👥"
    }
  ];
  const futureInnovations = [
    {
      innovation: "Autonomous Ship Operations",
      timeline: "2025-2027",
      description: "Semi-autonomous navigation systems with remote monitoring capabilities"
    },
    {
      innovation: "Digital Twin Technology",
      timeline: "2024-2025",
      description: "Complete virtual replicas of ships for testing and optimization"
    },
    {
      innovation: "Quantum Computing Integration",
      timeline: "2026-2028",
      description: "Ultra-complex route optimization across entire fleets"
    }
  ];
  const metrics = [
    {
      label: "AI Systems Deployed",
      value: "200+",
      icon: "🤖"
    },
    {
      label: "Data Points Analyzed/Day",
      value: "50M+",
      icon: "📊"
    },
    {
      label: "Predictive Accuracy",
      value: "94%",
      icon: "🎯"
    },
    {
      label: "Operational Efficiency Gain",
      value: "35%",
      icon: "📈"
    }
  ];
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1eeo15e_START -->${$$result.title = `<title>AI Innovation in Cruise Operations - Disney Cruise Line</title>`, ""}<!-- HEAD_svelte-1eeo15e_END -->`, ""}  <section class="relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-600 to-cyan-500 text-white"><div class="absolute inset-0"> <div class="absolute inset-0 opacity-10"><div class="grid grid-cols-12 gap-1 h-full">${each(Array(48), (_, i) => {
    return `<div class="border border-white/20 rounded animate-pulse" style="${"animation-delay: " + escape(i * 0.1, true) + "s"}"></div>`;
  })}</div></div></div> <div class="relative z-10 container mx-auto px-4 py-20"><div class="text-center"><h1 class="text-5xl md:text-7xl font-bold mb-6" data-svelte-h="svelte-12lioxk">AI-Powered Cruise Innovation</h1> <p class="text-2xl md:text-3xl mb-8 text-blue-100" data-svelte-h="svelte-c4rygs">Transforming Maritime Operations with Artificial Intelligence</p> <div class="flex flex-wrap justify-center gap-6 mt-12">${each(metrics, (metric) => {
    return `<div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"><div class="text-4xl mb-2">${escape(metric.icon)}</div> <div class="text-3xl font-bold">${escape(metric.value)}</div> <div class="text-sm text-blue-200">${escape(metric.label)}</div> </div>`;
  })}</div></div></div></section>  <section class="container mx-auto px-4 py-16"><h2 class="text-3xl font-bold text-gray-900 mb-12 text-center" data-svelte-h="svelte-t2a8nd">Core AI Innovations</h2> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">${each(aiInnovations, (innovation) => {
    return `<div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"><div class="bg-gradient-to-br from-blue-500 to-purple-500 p-6 text-white"><div class="flex items-center justify-between mb-4"><h3 class="text-2xl font-bold">${escape(innovation.title)}</h3> <div class="text-5xl">${escape(innovation.icon)}</div></div> <p class="text-blue-100">${escape(innovation.description)}</p></div> <div class="p-6"><h4 class="font-semibold text-gray-900 mb-3" data-svelte-h="svelte-vnha3y">Key Features:</h4> <ul class="space-y-2 mb-4">${each(innovation.features, (feature) => {
      return `<li class="flex items-start"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-1.5 flex-shrink-0"></span> <span class="text-gray-700">${escape(feature)}</span> </li>`;
    })}</ul> <div class="pt-4 border-t border-gray-100"><span class="text-sm font-semibold text-green-600">Impact: ${escape(innovation.impact)}</span> </div></div> </div>`;
  })}</div></section>  <section class="bg-gradient-to-b from-gray-50 to-white py-16"><div class="container mx-auto px-4"><h2 class="text-3xl font-bold text-gray-900 mb-12 text-center" data-svelte-h="svelte-1jfdol3">AI Across Operations</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">${each(operationalAI, (area) => {
    return `<div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6"><div class="text-4xl mb-4 text-center">${escape(area.icon)}</div> <h3 class="font-bold text-gray-900 text-lg mb-4 text-center">${escape(area.category)}</h3> <ul class="space-y-2">${each(area.applications, (app) => {
      return `<li class="text-sm text-gray-700 flex items-start"><span class="text-blue-500 mr-2" data-svelte-h="svelte-1lq7j81">▸</span> ${escape(app)} </li>`;
    })}</ul> </div>`;
  })}</div></div></section>  <section class="container mx-auto px-4 py-16" data-svelte-h="svelte-kijezz"><div class="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white"><h2 class="text-3xl font-bold mb-8 text-center">Advanced Technology Stack</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"><h3 class="text-xl font-bold mb-4">Machine Learning</h3> <ul class="space-y-2 text-purple-100"><li>• TensorFlow &amp; PyTorch models</li> <li>• Real-time data processing</li> <li>• Edge computing on ships</li> <li>• Federated learning systems</li></ul></div> <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"><h3 class="text-xl font-bold mb-4">IoT &amp; Sensors</h3> <ul class="space-y-2 text-purple-100"><li>• 10,000+ sensors per ship</li> <li>• Real-time data streaming</li> <li>• Predictive analytics</li> <li>• Digital twin integration</li></ul></div> <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"><h3 class="text-xl font-bold mb-4">Cloud &amp; Edge</h3> <ul class="space-y-2 text-purple-100"><li>• Hybrid cloud architecture</li> <li>• Satellite connectivity</li> <li>• Low-latency processing</li> <li>• Automated failover systems</li></ul></div></div></div></section>  <section class="bg-gray-50 py-16"><div class="container mx-auto px-4"><h2 class="text-3xl font-bold text-gray-900 mb-12 text-center" data-svelte-h="svelte-1envawl">The Future of AI at Sea</h2> <div class="max-w-4xl mx-auto">${each(futureInnovations, (innovation) => {
    return `<div class="bg-white rounded-xl shadow-md p-6 mb-6 hover:shadow-lg transition-shadow"><div class="flex items-center justify-between flex-wrap gap-4"><div class="flex-1"><h3 class="text-xl font-bold text-gray-900 mb-2">${escape(innovation.innovation)}</h3> <p class="text-gray-700">${escape(innovation.description)}</p></div> <div class="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">${escape(innovation.timeline)} </div></div> </div>`;
  })}</div>  <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto" data-svelte-h="svelte-1m73smp"><div class="text-center"><div class="text-4xl mb-3">🌍</div> <h4 class="font-bold text-gray-900 mb-2">Environmental Impact</h4> <p class="text-gray-600">25% reduction in carbon emissions through AI optimization</p></div> <div class="text-center"><div class="text-4xl mb-3">⚡</div> <h4 class="font-bold text-gray-900 mb-2">Operational Excellence</h4> <p class="text-gray-600">99.9% system uptime with predictive maintenance</p></div> <div class="text-center"><div class="text-4xl mb-3">🎯</div> <h4 class="font-bold text-gray-900 mb-2">Guest Satisfaction</h4> <p class="text-gray-600">AI-driven personalization increases satisfaction by 40%</p></div></div></div></section>  <section class="container mx-auto px-4 py-16" data-svelte-h="svelte-1rp85nv"><div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center"><h2 class="text-4xl font-bold mb-6">Pioneering the Future of Maritime AI</h2> <p class="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">Disney Cruise Line is leading the transformation of cruise operations through cutting-edge AI technology, 
      creating safer, more efficient, and more magical experiences at sea.</p> <div class="flex flex-wrap justify-center gap-4"><button class="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">Learn More About Our Technology</button> <button class="bg-transparent border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors text-white">Partner With Us</button></div></div> </section>`;
});
export {
  Page as default
};
