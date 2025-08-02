import { c as create_ssr_component, b as each, e as escape } from "../../../../chunks/ssr.js";
const css = {
  code: "@keyframes svelte-1avhfe1-float{0%,100%{transform:translateY(0px)}50%{transform:translateY(-10px)}}.animate-float.svelte-1avhfe1{animation:svelte-1avhfe1-float 3s ease-in-out infinite}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  const aiRetailSolutions = [\\n    {\\n      name: 'AI Product Recommendations',\\n      icon: '🤖',\\n      description: 'Personalized shopping experiences powered by machine learning',\\n      color: 'from-blue-500 to-purple-500',\\n      features: ['Behavioral Analytics', 'Purchase History AI', 'Cross-Sell Optimization']\\n    },\\n    {\\n      name: 'Predictive Inventory',\\n      icon: '📊',\\n      description: 'Smart stock management with demand forecasting',\\n      color: 'from-green-500 to-teal-500',\\n      features: ['Demand Forecasting', 'Supply Chain AI', 'Automated Reordering']\\n    },\\n    {\\n      name: 'Virtual Try-On',\\n      icon: '👗',\\n      description: 'AR-powered fitting experiences',\\n      color: 'from-pink-500 to-rose-500',\\n      features: ['AR Technology', 'Size Prediction', '3D Modeling']\\n    },\\n    {\\n      name: 'Smart Customer Service',\\n      icon: '💬',\\n      description: 'AI chatbots and voice assistants',\\n      color: 'from-orange-500 to-red-500',\\n      features: ['24/7 AI Support', 'Natural Language Processing', 'Sentiment Analysis']\\n    },\\n    {\\n      name: 'Dynamic Pricing AI',\\n      icon: '💰',\\n      description: 'Real-time price optimization algorithms',\\n      color: 'from-yellow-500 to-amber-500',\\n      features: ['Market Analysis', 'Competitor Tracking', 'Demand-Based Pricing']\\n    },\\n    {\\n      name: 'Visual Search',\\n      icon: '📸',\\n      description: 'Find products using image recognition',\\n      color: 'from-indigo-500 to-purple-500',\\n      features: ['Image Recognition', 'Similar Product AI', 'Visual Discovery']\\n    }\\n  ];\\n\\n  const aiMetrics = [\\n    { metric: '45%', label: 'Increase in Conversion Rate', description: 'Through AI recommendations' },\\n    { metric: '68%', label: 'Inventory Accuracy', description: 'With predictive analytics' },\\n    { metric: '3.2x', label: 'Customer Engagement', description: 'Via personalized experiences' },\\n    { metric: '82%', label: 'Query Resolution', description: 'Through AI assistants' }\\n  ];\\n\\n  const technologyStack = [\\n    {\\n      category: 'Machine Learning',\\n      icon: '🧠',\\n      tools: ['TensorFlow', 'PyTorch', 'Scikit-learn'],\\n      applications: ['Product recommendations', 'Customer segmentation', 'Churn prediction']\\n    },\\n    {\\n      category: 'Computer Vision',\\n      icon: '👁️',\\n      tools: ['OpenCV', 'YOLO', 'MediaPipe'],\\n      applications: ['Visual search', 'AR try-on', 'Quality control']\\n    },\\n    {\\n      category: 'Natural Language Processing',\\n      icon: '💭',\\n      tools: ['GPT-4', 'BERT', 'spaCy'],\\n      applications: ['Chatbots', 'Review analysis', 'Voice shopping']\\n    },\\n    {\\n      category: 'Data Analytics',\\n      icon: '📈',\\n      tools: ['Apache Spark', 'Databricks', 'Snowflake'],\\n      applications: ['Sales forecasting', 'Customer insights', 'Real-time analytics']\\n    }\\n  ];\\n\\n  const implementationPhases = [\\n    {\\n      phase: 'Phase 1: Foundation',\\n      timeline: 'Q1 2024',\\n      initiatives: [\\n        'AI recommendation engine deployment',\\n        'Customer data platform integration',\\n        'Basic chatbot implementation'\\n      ]\\n    },\\n    {\\n      phase: 'Phase 2: Enhancement',\\n      timeline: 'Q2-Q3 2024',\\n      initiatives: [\\n        'AR/VR shopping experiences',\\n        'Advanced inventory AI',\\n        'Personalization algorithms'\\n      ]\\n    },\\n    {\\n      phase: 'Phase 3: Innovation',\\n      timeline: 'Q4 2024+',\\n      initiatives: [\\n        'Predictive customer service',\\n        'Autonomous fulfillment',\\n        'AI-driven store layouts'\\n      ]\\n    }\\n  ];\\n\\n  const caseStudies = [\\n    {\\n      title: 'Holiday Season Optimization',\\n      icon: '🎄',\\n      challenge: 'Managing inventory for peak shopping periods',\\n      solution: 'AI-powered demand forecasting reduced stockouts by 62%',\\n      results: ['$12M additional revenue', '35% faster fulfillment', '89% customer satisfaction']\\n    },\\n    {\\n      title: 'Personalized Shopping Journey',\\n      icon: '🛍️',\\n      challenge: 'Creating unique experiences for millions of customers',\\n      solution: 'ML algorithms analyze behavior patterns for custom recommendations',\\n      results: ['3x higher conversion', '45% increase in basket size', '78% return customer rate']\\n    },\\n    {\\n      title: 'Virtual Store Assistant',\\n      icon: '🤖',\\n      challenge: '24/7 customer support across global markets',\\n      solution: 'Multilingual AI chatbot handling 80% of queries',\\n      results: ['$4M annual savings', '90% first-contact resolution', '4.8/5 satisfaction score']\\n    }\\n  ];\\n<\/script>\\n\\n<svelte:head>\\n  <title>AI in Retail - Disney Store Innovation | AI Hub</title>\\n</svelte:head>\\n\\n<!-- Hero Section -->\\n<section class=\\"relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 text-white\\">\\n  <div class=\\"absolute inset-0 opacity-20\\">\\n    <div class=\\"absolute top-10 left-10 text-8xl animate-pulse\\">🤖</div>\\n    <div class=\\"absolute bottom-10 right-10 text-8xl animate-pulse\\" style=\\"animation-delay: 0.5s\\">🛍️</div>\\n    <div class=\\"absolute top-1/2 left-1/3 text-6xl animate-pulse\\" style=\\"animation-delay: 1s\\">✨</div>\\n  </div>\\n  \\n  <div class=\\"relative z-10 container mx-auto px-4 py-20\\">\\n    <h1 class=\\"text-5xl md:text-6xl font-bold mb-6\\">AI-Powered Retail Innovation</h1>\\n    <p class=\\"text-xl md:text-2xl mb-8 text-purple-100\\">\\n      Transforming the Disney Store experience with cutting-edge artificial intelligence\\n    </p>\\n    \\n    <!-- AI Impact Stats -->\\n    <div class=\\"grid grid-cols-2 md:grid-cols-4 gap-4 mt-12\\">\\n      {#each aiMetrics as stat}\\n        <div class=\\"text-center\\">\\n          <div class=\\"text-3xl font-bold\\">{stat.metric}</div>\\n          <div class=\\"text-purple-100 text-sm\\">{stat.label}</div>\\n        </div>\\n      {/each}\\n    </div>\\n  </div>\\n</section>\\n\\n<!-- AI Innovation Banner -->\\n<section class=\\"bg-gradient-to-r from-blue-500 to-purple-600 py-4\\">\\n  <div class=\\"container mx-auto px-4 text-center\\">\\n    <p class=\\"text-lg font-semibold text-white\\">\\n      🚀 Leading retail transformation through artificial intelligence and machine learning\\n    </p>\\n  </div>\\n</section>\\n\\n<!-- AI Retail Solutions -->\\n<section class=\\"container mx-auto px-4 py-16\\">\\n  <h2 class=\\"text-3xl font-bold mb-12 text-gray-900\\">AI-Powered Retail Solutions</h2>\\n  \\n  <div class=\\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6\\">\\n    {#each aiRetailSolutions as solution}\\n      <div class=\\"group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300\\">\\n        <div class=\\"absolute inset-0 bg-gradient-to-br {solution.color} opacity-90\\"></div>\\n        <div class=\\"relative z-10 p-6 text-white\\">\\n          <div class=\\"flex items-center mb-4\\">\\n            <span class=\\"text-5xl mr-4\\">{solution.icon}</span>\\n            <h3 class=\\"text-2xl font-bold\\">{solution.name}</h3>\\n          </div>\\n          <p class=\\"text-white/90 mb-4\\">{solution.description}</p>\\n          <div class=\\"mt-4\\">\\n            <p class=\\"text-sm text-white/80 mb-2\\">Key Features:</p>\\n            <div class=\\"flex flex-wrap gap-2\\">\\n              {#each solution.features as feature}\\n                <span class=\\"bg-white/20 px-3 py-1 rounded-full text-sm\\">\\n                  {feature}\\n                </span>\\n              {/each}\\n            </div>\\n          </div>\\n        </div>\\n      </div>\\n    {/each}\\n  </div>\\n</section>\\n\\n<!-- Technology Stack -->\\n<section class=\\"bg-gray-50 py-16\\">\\n  <div class=\\"container mx-auto px-4\\">\\n    <h2 class=\\"text-3xl font-bold mb-12 text-gray-900\\">AI Technology Stack</h2>\\n    \\n    <div class=\\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6\\">\\n      {#each technologyStack as tech}\\n        <div class=\\"bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6\\">\\n          <div class=\\"text-4xl mb-4\\">{tech.icon}</div>\\n          <h3 class=\\"text-xl font-bold mb-3 text-gray-900\\">{tech.category}</h3>\\n          <div class=\\"mb-4\\">\\n            <p class=\\"text-sm font-semibold text-gray-700 mb-2\\">Technologies:</p>\\n            <div class=\\"flex flex-wrap gap-1\\">\\n              {#each tech.tools as tool}\\n                <span class=\\"bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded\\">\\n                  {tool}\\n                </span>\\n              {/each}\\n            </div>\\n          </div>\\n          <div>\\n            <p class=\\"text-sm font-semibold text-gray-700 mb-2\\">Applications:</p>\\n            <ul class=\\"text-sm text-gray-600 space-y-1\\">\\n              {#each tech.applications as app}\\n                <li class=\\"flex items-start\\">\\n                  <span class=\\"text-purple-500 mr-1\\">•</span>\\n                  {app}\\n                </li>\\n              {/each}\\n            </ul>\\n          </div>\\n        </div>\\n      {/each}\\n    </div>\\n  </div>\\n</section>\\n\\n<!-- Implementation Roadmap -->\\n<section class=\\"container mx-auto px-4 py-16\\">\\n  <div class=\\"bg-gradient-to-r from-indigo-100 to-purple-100 rounded-3xl p-8 md:p-12\\">\\n    <h2 class=\\"text-3xl font-bold mb-8 text-gray-900\\">AI Implementation Roadmap</h2>\\n    <p class=\\"text-lg text-gray-700 mb-8\\">\\n      Strategic phased approach to retail AI transformation\\n    </p>\\n    \\n    <div class=\\"space-y-6\\">\\n      {#each implementationPhases as phase}\\n        <div class=\\"bg-white rounded-xl shadow-md p-6\\">\\n          <div class=\\"flex items-start justify-between mb-4\\">\\n            <h3 class=\\"text-xl font-bold text-gray-900\\">{phase.phase}</h3>\\n            <span class=\\"bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm px-3 py-1 rounded-full\\">\\n              {phase.timeline}\\n            </span>\\n          </div>\\n          <ul class=\\"space-y-2\\">\\n            {#each phase.initiatives as initiative}\\n              <li class=\\"flex items-start text-gray-700\\">\\n                <svg class=\\"w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0\\" fill=\\"currentColor\\" viewBox=\\"0 0 20 20\\">\\n                  <path fill-rule=\\"evenodd\\" d=\\"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z\\" clip-rule=\\"evenodd\\"/>\\n                </svg>\\n                {initiative}\\n              </li>\\n            {/each}\\n          </ul>\\n        </div>\\n      {/each}\\n    </div>\\n  </div>\\n</section>\\n\\n<!-- Case Studies -->\\n<section class=\\"bg-gradient-to-br from-purple-600 to-pink-600 text-white py-16\\">\\n  <div class=\\"container mx-auto px-4\\">\\n    <h2 class=\\"text-3xl font-bold mb-12 text-center\\">AI Success Stories</h2>\\n    \\n    <div class=\\"grid grid-cols-1 md:grid-cols-3 gap-8\\">\\n      {#each caseStudies as study}\\n        <div class=\\"bg-white/10 backdrop-blur-sm rounded-xl p-6\\">\\n          <div class=\\"text-4xl mb-4\\">{study.icon}</div>\\n          <h3 class=\\"text-xl font-bold mb-3\\">{study.title}</h3>\\n          <div class=\\"space-y-3 text-purple-100\\">\\n            <p class=\\"text-sm\\">\\n              <span class=\\"font-semibold text-white\\">Challenge:</span> {study.challenge}\\n            </p>\\n            <p class=\\"text-sm\\">\\n              <span class=\\"font-semibold text-white\\">Solution:</span> {study.solution}\\n            </p>\\n            <div>\\n              <p class=\\"font-semibold text-white text-sm mb-2\\">Results:</p>\\n              <ul class=\\"space-y-1\\">\\n                {#each study.results as result}\\n                  <li class=\\"text-sm flex items-start\\">\\n                    <span class=\\"text-yellow-300 mr-1\\">★</span>\\n                    {result}\\n                  </li>\\n                {/each}\\n              </ul>\\n            </div>\\n          </div>\\n        </div>\\n      {/each}\\n    </div>\\n  </div>\\n</section>\\n\\n<!-- AI Benefits -->\\n<section class=\\"container mx-auto px-4 py-16\\">\\n  <h2 class=\\"text-3xl font-bold mb-12 text-center text-gray-900\\">The AI Advantage</h2>\\n  \\n  <div class=\\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6\\">\\n    <div class=\\"text-center\\">\\n      <div class=\\"inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full text-white text-3xl mb-4\\">\\n        🎯\\n      </div>\\n      <h3 class=\\"text-xl font-bold mb-2 text-gray-900\\">Precision Targeting</h3>\\n      <p class=\\"text-gray-600\\">AI-driven customer segmentation for personalized experiences</p>\\n    </div>\\n    <div class=\\"text-center\\">\\n      <div class=\\"inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-full text-white text-3xl mb-4\\">\\n        ⚡\\n      </div>\\n      <h3 class=\\"text-xl font-bold mb-2 text-gray-900\\">Real-Time Insights</h3>\\n      <p class=\\"text-gray-600\\">Instant analytics and decision-making capabilities</p>\\n    </div>\\n    <div class=\\"text-center\\">\\n      <div class=\\"inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full text-white text-3xl mb-4\\">\\n        🔮\\n      </div>\\n      <h3 class=\\"text-xl font-bold mb-2 text-gray-900\\">Predictive Power</h3>\\n      <p class=\\"text-gray-600\\">Forecast trends and customer behavior with accuracy</p>\\n    </div>\\n    <div class=\\"text-center\\">\\n      <div class=\\"inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full text-white text-3xl mb-4\\">\\n        🚀\\n      </div>\\n      <h3 class=\\"text-xl font-bold mb-2 text-gray-900\\">Scalable Solutions</h3>\\n      <p class=\\"text-gray-600\\">AI that grows with your business needs</p>\\n    </div>\\n  </div>\\n</section>\\n\\n<!-- Future Vision -->\\n<section class=\\"bg-gray-50 py-16\\">\\n  <div class=\\"container mx-auto px-4\\">\\n    <div class=\\"max-w-4xl mx-auto text-center\\">\\n      <h2 class=\\"text-3xl font-bold mb-6 text-gray-900\\">The Future of AI in Retail</h2>\\n      <p class=\\"text-lg text-gray-700 mb-8\\">\\n        As we continue to innovate, our AI-powered retail solutions are setting new standards \\n        for customer experience, operational efficiency, and business intelligence. From autonomous \\n        stores to hyper-personalized shopping journeys, we're building the retail experience of tomorrow.\\n      </p>\\n      <div class=\\"flex flex-col sm:flex-row gap-4 justify-center\\">\\n        <button class=\\"bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300\\">\\n          Explore AI Solutions\\n        </button>\\n        <button class=\\"bg-white text-purple-600 border-2 border-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300\\">\\n          Contact Our AI Team\\n        </button>\\n      </div>\\n    </div>\\n  </div>\\n</section>\\n\\n<style>\\n  @keyframes float {\\n    0%, 100% { transform: translateY(0px); }\\n    50% { transform: translateY(-10px); }\\n  }\\n  \\n  .animate-float {\\n    animation: float 3s ease-in-out infinite;\\n  }\\n</style>"],"names":[],"mappings":"AAgXE,WAAW,oBAAM,CACf,EAAE,CAAE,IAAK,CAAE,SAAS,CAAE,WAAW,GAAG,CAAG,CACvC,GAAI,CAAE,SAAS,CAAE,WAAW,KAAK,CAAG,CACtC,CAEA,6BAAe,CACb,SAAS,CAAE,oBAAK,CAAC,EAAE,CAAC,WAAW,CAAC,QAClC"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const aiRetailSolutions = [
    {
      name: "AI Product Recommendations",
      icon: "🤖",
      description: "Personalized shopping experiences powered by machine learning",
      color: "from-blue-500 to-purple-500",
      features: ["Behavioral Analytics", "Purchase History AI", "Cross-Sell Optimization"]
    },
    {
      name: "Predictive Inventory",
      icon: "📊",
      description: "Smart stock management with demand forecasting",
      color: "from-green-500 to-teal-500",
      features: ["Demand Forecasting", "Supply Chain AI", "Automated Reordering"]
    },
    {
      name: "Virtual Try-On",
      icon: "👗",
      description: "AR-powered fitting experiences",
      color: "from-pink-500 to-rose-500",
      features: ["AR Technology", "Size Prediction", "3D Modeling"]
    },
    {
      name: "Smart Customer Service",
      icon: "💬",
      description: "AI chatbots and voice assistants",
      color: "from-orange-500 to-red-500",
      features: ["24/7 AI Support", "Natural Language Processing", "Sentiment Analysis"]
    },
    {
      name: "Dynamic Pricing AI",
      icon: "💰",
      description: "Real-time price optimization algorithms",
      color: "from-yellow-500 to-amber-500",
      features: ["Market Analysis", "Competitor Tracking", "Demand-Based Pricing"]
    },
    {
      name: "Visual Search",
      icon: "📸",
      description: "Find products using image recognition",
      color: "from-indigo-500 to-purple-500",
      features: ["Image Recognition", "Similar Product AI", "Visual Discovery"]
    }
  ];
  const aiMetrics = [
    {
      metric: "45%",
      label: "Increase in Conversion Rate",
      description: "Through AI recommendations"
    },
    {
      metric: "68%",
      label: "Inventory Accuracy",
      description: "With predictive analytics"
    },
    {
      metric: "3.2x",
      label: "Customer Engagement",
      description: "Via personalized experiences"
    },
    {
      metric: "82%",
      label: "Query Resolution",
      description: "Through AI assistants"
    }
  ];
  const technologyStack = [
    {
      category: "Machine Learning",
      icon: "🧠",
      tools: ["TensorFlow", "PyTorch", "Scikit-learn"],
      applications: ["Product recommendations", "Customer segmentation", "Churn prediction"]
    },
    {
      category: "Computer Vision",
      icon: "👁️",
      tools: ["OpenCV", "YOLO", "MediaPipe"],
      applications: ["Visual search", "AR try-on", "Quality control"]
    },
    {
      category: "Natural Language Processing",
      icon: "💭",
      tools: ["GPT-4", "BERT", "spaCy"],
      applications: ["Chatbots", "Review analysis", "Voice shopping"]
    },
    {
      category: "Data Analytics",
      icon: "📈",
      tools: ["Apache Spark", "Databricks", "Snowflake"],
      applications: ["Sales forecasting", "Customer insights", "Real-time analytics"]
    }
  ];
  const implementationPhases = [
    {
      phase: "Phase 1: Foundation",
      timeline: "Q1 2024",
      initiatives: [
        "AI recommendation engine deployment",
        "Customer data platform integration",
        "Basic chatbot implementation"
      ]
    },
    {
      phase: "Phase 2: Enhancement",
      timeline: "Q2-Q3 2024",
      initiatives: [
        "AR/VR shopping experiences",
        "Advanced inventory AI",
        "Personalization algorithms"
      ]
    },
    {
      phase: "Phase 3: Innovation",
      timeline: "Q4 2024+",
      initiatives: [
        "Predictive customer service",
        "Autonomous fulfillment",
        "AI-driven store layouts"
      ]
    }
  ];
  const caseStudies = [
    {
      title: "Holiday Season Optimization",
      icon: "🎄",
      challenge: "Managing inventory for peak shopping periods",
      solution: "AI-powered demand forecasting reduced stockouts by 62%",
      results: [
        "$12M additional revenue",
        "35% faster fulfillment",
        "89% customer satisfaction"
      ]
    },
    {
      title: "Personalized Shopping Journey",
      icon: "🛍️",
      challenge: "Creating unique experiences for millions of customers",
      solution: "ML algorithms analyze behavior patterns for custom recommendations",
      results: [
        "3x higher conversion",
        "45% increase in basket size",
        "78% return customer rate"
      ]
    },
    {
      title: "Virtual Store Assistant",
      icon: "🤖",
      challenge: "24/7 customer support across global markets",
      solution: "Multilingual AI chatbot handling 80% of queries",
      results: [
        "$4M annual savings",
        "90% first-contact resolution",
        "4.8/5 satisfaction score"
      ]
    }
  ];
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-xkubsh_START -->${$$result.title = `<title>AI in Retail - Disney Store Innovation | AI Hub</title>`, ""}<!-- HEAD_svelte-xkubsh_END -->`, ""}  <section class="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 text-white"><div class="absolute inset-0 opacity-20" data-svelte-h="svelte-199npj9"><div class="absolute top-10 left-10 text-8xl animate-pulse">🤖</div> <div class="absolute bottom-10 right-10 text-8xl animate-pulse" style="animation-delay: 0.5s">🛍️</div> <div class="absolute top-1/2 left-1/3 text-6xl animate-pulse" style="animation-delay: 1s">✨</div></div> <div class="relative z-10 container mx-auto px-4 py-20"><h1 class="text-5xl md:text-6xl font-bold mb-6" data-svelte-h="svelte-1w4h89v">AI-Powered Retail Innovation</h1> <p class="text-xl md:text-2xl mb-8 text-purple-100" data-svelte-h="svelte-ynzhpz">Transforming the Disney Store experience with cutting-edge artificial intelligence</p>  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">${each(aiMetrics, (stat) => {
    return `<div class="text-center"><div class="text-3xl font-bold">${escape(stat.metric)}</div> <div class="text-purple-100 text-sm">${escape(stat.label)}</div> </div>`;
  })}</div></div></section>  <section class="bg-gradient-to-r from-blue-500 to-purple-600 py-4" data-svelte-h="svelte-12wq9g0"><div class="container mx-auto px-4 text-center"><p class="text-lg font-semibold text-white">🚀 Leading retail transformation through artificial intelligence and machine learning</p></div></section>  <section class="container mx-auto px-4 py-16"><h2 class="text-3xl font-bold mb-12 text-gray-900" data-svelte-h="svelte-1wz5mex">AI-Powered Retail Solutions</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">${each(aiRetailSolutions, (solution) => {
    return `<div class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"><div class="${"absolute inset-0 bg-gradient-to-br " + escape(solution.color, true) + " opacity-90 svelte-1avhfe1"}"></div> <div class="relative z-10 p-6 text-white"><div class="flex items-center mb-4"><span class="text-5xl mr-4">${escape(solution.icon)}</span> <h3 class="text-2xl font-bold">${escape(solution.name)}</h3></div> <p class="text-white/90 mb-4">${escape(solution.description)}</p> <div class="mt-4"><p class="text-sm text-white/80 mb-2" data-svelte-h="svelte-1gq1c6f">Key Features:</p> <div class="flex flex-wrap gap-2">${each(solution.features, (feature) => {
      return `<span class="bg-white/20 px-3 py-1 rounded-full text-sm">${escape(feature)} </span>`;
    })}</div> </div></div> </div>`;
  })}</div></section>  <section class="bg-gray-50 py-16"><div class="container mx-auto px-4"><h2 class="text-3xl font-bold mb-12 text-gray-900" data-svelte-h="svelte-fnt05f">AI Technology Stack</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">${each(technologyStack, (tech) => {
    return `<div class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6"><div class="text-4xl mb-4">${escape(tech.icon)}</div> <h3 class="text-xl font-bold mb-3 text-gray-900">${escape(tech.category)}</h3> <div class="mb-4"><p class="text-sm font-semibold text-gray-700 mb-2" data-svelte-h="svelte-31c7cb">Technologies:</p> <div class="flex flex-wrap gap-1">${each(tech.tools, (tool) => {
      return `<span class="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded">${escape(tool)} </span>`;
    })} </div></div> <div><p class="text-sm font-semibold text-gray-700 mb-2" data-svelte-h="svelte-1tvkmre">Applications:</p> <ul class="text-sm text-gray-600 space-y-1">${each(tech.applications, (app) => {
      return `<li class="flex items-start"><span class="text-purple-500 mr-1" data-svelte-h="svelte-mb4kx2">•</span> ${escape(app)} </li>`;
    })} </ul></div> </div>`;
  })}</div></div></section>  <section class="container mx-auto px-4 py-16"><div class="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-3xl p-8 md:p-12"><h2 class="text-3xl font-bold mb-8 text-gray-900" data-svelte-h="svelte-1cgq450">AI Implementation Roadmap</h2> <p class="text-lg text-gray-700 mb-8" data-svelte-h="svelte-120ufrv">Strategic phased approach to retail AI transformation</p> <div class="space-y-6">${each(implementationPhases, (phase) => {
    return `<div class="bg-white rounded-xl shadow-md p-6"><div class="flex items-start justify-between mb-4"><h3 class="text-xl font-bold text-gray-900">${escape(phase.phase)}</h3> <span class="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm px-3 py-1 rounded-full">${escape(phase.timeline)} </span></div> <ul class="space-y-2">${each(phase.initiatives, (initiative) => {
      return `<li class="flex items-start text-gray-700"><svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> ${escape(initiative)} </li>`;
    })}</ul> </div>`;
  })}</div></div></section>  <section class="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-16"><div class="container mx-auto px-4"><h2 class="text-3xl font-bold mb-12 text-center" data-svelte-h="svelte-3031dr">AI Success Stories</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-8">${each(caseStudies, (study) => {
    return `<div class="bg-white/10 backdrop-blur-sm rounded-xl p-6"><div class="text-4xl mb-4">${escape(study.icon)}</div> <h3 class="text-xl font-bold mb-3">${escape(study.title)}</h3> <div class="space-y-3 text-purple-100"><p class="text-sm"><span class="font-semibold text-white" data-svelte-h="svelte-1u56nxu">Challenge:</span> ${escape(study.challenge)}</p> <p class="text-sm"><span class="font-semibold text-white" data-svelte-h="svelte-1mttrfi">Solution:</span> ${escape(study.solution)}</p> <div><p class="font-semibold text-white text-sm mb-2" data-svelte-h="svelte-8bjr9n">Results:</p> <ul class="space-y-1">${each(study.results, (result) => {
      return `<li class="text-sm flex items-start"><span class="text-yellow-300 mr-1" data-svelte-h="svelte-j960yz">★</span> ${escape(result)} </li>`;
    })}</ul> </div></div> </div>`;
  })}</div></div></section>  <section class="container mx-auto px-4 py-16" data-svelte-h="svelte-1irkl27"><h2 class="text-3xl font-bold mb-12 text-center text-gray-900">The AI Advantage</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"><div class="text-center"><div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full text-white text-3xl mb-4">🎯</div> <h3 class="text-xl font-bold mb-2 text-gray-900">Precision Targeting</h3> <p class="text-gray-600">AI-driven customer segmentation for personalized experiences</p></div> <div class="text-center"><div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-full text-white text-3xl mb-4">⚡</div> <h3 class="text-xl font-bold mb-2 text-gray-900">Real-Time Insights</h3> <p class="text-gray-600">Instant analytics and decision-making capabilities</p></div> <div class="text-center"><div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full text-white text-3xl mb-4">🔮</div> <h3 class="text-xl font-bold mb-2 text-gray-900">Predictive Power</h3> <p class="text-gray-600">Forecast trends and customer behavior with accuracy</p></div> <div class="text-center"><div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full text-white text-3xl mb-4">🚀</div> <h3 class="text-xl font-bold mb-2 text-gray-900">Scalable Solutions</h3> <p class="text-gray-600">AI that grows with your business needs</p></div></div></section>  <section class="bg-gray-50 py-16" data-svelte-h="svelte-1fzj6z8"><div class="container mx-auto px-4"><div class="max-w-4xl mx-auto text-center"><h2 class="text-3xl font-bold mb-6 text-gray-900">The Future of AI in Retail</h2> <p class="text-lg text-gray-700 mb-8">As we continue to innovate, our AI-powered retail solutions are setting new standards 
        for customer experience, operational efficiency, and business intelligence. From autonomous 
        stores to hyper-personalized shopping journeys, we&#39;re building the retail experience of tomorrow.</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"><button class="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">Explore AI Solutions</button> <button class="bg-white text-purple-600 border-2 border-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300">Contact Our AI Team</button></div></div></div> </section>`;
});
export {
  Page as default
};
