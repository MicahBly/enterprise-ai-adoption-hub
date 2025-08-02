<script>
  const aiRetailSolutions = [
    {
      name: 'AI Product Recommendations',
      icon: '🤖',
      description: 'Personalized shopping experiences powered by machine learning',
      color: 'from-blue-500 to-purple-500',
      features: ['Behavioral Analytics', 'Purchase History AI', 'Cross-Sell Optimization']
    },
    {
      name: 'Predictive Inventory',
      icon: '📊',
      description: 'Smart stock management with demand forecasting',
      color: 'from-green-500 to-teal-500',
      features: ['Demand Forecasting', 'Supply Chain AI', 'Automated Reordering']
    },
    {
      name: 'Virtual Try-On',
      icon: '👗',
      description: 'AR-powered fitting experiences',
      color: 'from-pink-500 to-rose-500',
      features: ['AR Technology', 'Size Prediction', '3D Modeling']
    },
    {
      name: 'Smart Customer Service',
      icon: '💬',
      description: 'AI chatbots and voice assistants',
      color: 'from-orange-500 to-red-500',
      features: ['24/7 AI Support', 'Natural Language Processing', 'Sentiment Analysis']
    },
    {
      name: 'Dynamic Pricing AI',
      icon: '💰',
      description: 'Real-time price optimization algorithms',
      color: 'from-yellow-500 to-amber-500',
      features: ['Market Analysis', 'Competitor Tracking', 'Demand-Based Pricing']
    },
    {
      name: 'Visual Search',
      icon: '📸',
      description: 'Find products using image recognition',
      color: 'from-indigo-500 to-purple-500',
      features: ['Image Recognition', 'Similar Product AI', 'Visual Discovery']
    }
  ];

  const aiMetrics = [
    { metric: '45%', label: 'Increase in Conversion Rate', description: 'Through AI recommendations' },
    { metric: '68%', label: 'Inventory Accuracy', description: 'With predictive analytics' },
    { metric: '3.2x', label: 'Customer Engagement', description: 'Via personalized experiences' },
    { metric: '82%', label: 'Query Resolution', description: 'Through AI assistants' }
  ];

  const technologyStack = [
    {
      category: 'Machine Learning',
      icon: '🧠',
      tools: ['TensorFlow', 'PyTorch', 'Scikit-learn'],
      applications: ['Product recommendations', 'Customer segmentation', 'Churn prediction']
    },
    {
      category: 'Computer Vision',
      icon: '👁️',
      tools: ['OpenCV', 'YOLO', 'MediaPipe'],
      applications: ['Visual search', 'AR try-on', 'Quality control']
    },
    {
      category: 'Natural Language Processing',
      icon: '💭',
      tools: ['GPT-4', 'BERT', 'spaCy'],
      applications: ['Chatbots', 'Review analysis', 'Voice shopping']
    },
    {
      category: 'Data Analytics',
      icon: '📈',
      tools: ['Apache Spark', 'Databricks', 'Snowflake'],
      applications: ['Sales forecasting', 'Customer insights', 'Real-time analytics']
    }
  ];

  const implementationPhases = [
    {
      phase: 'Phase 1: Foundation',
      timeline: 'Q1 2024',
      initiatives: [
        'AI recommendation engine deployment',
        'Customer data platform integration',
        'Basic chatbot implementation'
      ]
    },
    {
      phase: 'Phase 2: Enhancement',
      timeline: 'Q2-Q3 2024',
      initiatives: [
        'AR/VR shopping experiences',
        'Advanced inventory AI',
        'Personalization algorithms'
      ]
    },
    {
      phase: 'Phase 3: Innovation',
      timeline: 'Q4 2024+',
      initiatives: [
        'Predictive customer service',
        'Autonomous fulfillment',
        'AI-driven store layouts'
      ]
    }
  ];

  const caseStudies = [
    {
      title: 'Holiday Season Optimization',
      icon: '🎄',
      challenge: 'Managing inventory for peak shopping periods',
      solution: 'AI-powered demand forecasting reduced stockouts by 62%',
      results: ['$12M additional revenue', '35% faster fulfillment', '89% customer satisfaction']
    },
    {
      title: 'Personalized Shopping Journey',
      icon: '🛍️',
      challenge: 'Creating unique experiences for millions of customers',
      solution: 'ML algorithms analyze behavior patterns for custom recommendations',
      results: ['3x higher conversion', '45% increase in basket size', '78% return customer rate']
    },
    {
      title: 'Virtual Store Assistant',
      icon: '🤖',
      challenge: '24/7 customer support across global markets',
      solution: 'Multilingual AI chatbot handling 80% of queries',
      results: ['$4M annual savings', '90% first-contact resolution', '4.8/5 satisfaction score']
    }
  ];
</script>

<svelte:head>
  <title>AI in Retail - Disney Store Innovation | AI Hub</title>
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 text-white">
  <div class="absolute inset-0 opacity-20">
    <div class="absolute top-10 left-10 text-8xl animate-pulse">🤖</div>
    <div class="absolute bottom-10 right-10 text-8xl animate-pulse" style="animation-delay: 0.5s">🛍️</div>
    <div class="absolute top-1/2 left-1/3 text-6xl animate-pulse" style="animation-delay: 1s">✨</div>
  </div>
  
  <div class="relative z-10 container mx-auto px-4 py-20">
    <h1 class="text-5xl md:text-6xl font-bold mb-6">AI-Powered Retail Innovation</h1>
    <p class="text-xl md:text-2xl mb-8 text-purple-100">
      Transforming the Disney Store experience with cutting-edge artificial intelligence
    </p>
    
    <!-- AI Impact Stats -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
      {#each aiMetrics as stat}
        <div class="text-center">
          <div class="text-3xl font-bold">{stat.metric}</div>
          <div class="text-purple-100 text-sm">{stat.label}</div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- AI Innovation Banner -->
<section class="bg-gradient-to-r from-blue-500 to-purple-600 py-4">
  <div class="container mx-auto px-4 text-center">
    <p class="text-lg font-semibold text-white">
      🚀 Leading retail transformation through artificial intelligence and machine learning
    </p>
  </div>
</section>

<!-- AI Retail Solutions -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold mb-12 text-gray-900">AI-Powered Retail Solutions</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each aiRetailSolutions as solution}
      <div class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
        <div class="absolute inset-0 bg-gradient-to-br {solution.color} opacity-90"></div>
        <div class="relative z-10 p-6 text-white">
          <div class="flex items-center mb-4">
            <span class="text-5xl mr-4">{solution.icon}</span>
            <h3 class="text-2xl font-bold">{solution.name}</h3>
          </div>
          <p class="text-white/90 mb-4">{solution.description}</p>
          <div class="mt-4">
            <p class="text-sm text-white/80 mb-2">Key Features:</p>
            <div class="flex flex-wrap gap-2">
              {#each solution.features as feature}
                <span class="bg-white/20 px-3 py-1 rounded-full text-sm">
                  {feature}
                </span>
              {/each}
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- Technology Stack -->
<section class="bg-gray-50 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-12 text-gray-900">AI Technology Stack</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each technologyStack as tech}
        <div class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6">
          <div class="text-4xl mb-4">{tech.icon}</div>
          <h3 class="text-xl font-bold mb-3 text-gray-900">{tech.category}</h3>
          <div class="mb-4">
            <p class="text-sm font-semibold text-gray-700 mb-2">Technologies:</p>
            <div class="flex flex-wrap gap-1">
              {#each tech.tools as tool}
                <span class="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded">
                  {tool}
                </span>
              {/each}
            </div>
          </div>
          <div>
            <p class="text-sm font-semibold text-gray-700 mb-2">Applications:</p>
            <ul class="text-sm text-gray-600 space-y-1">
              {#each tech.applications as app}
                <li class="flex items-start">
                  <span class="text-purple-500 mr-1">•</span>
                  {app}
                </li>
              {/each}
            </ul>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Implementation Roadmap -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-3xl p-8 md:p-12">
    <h2 class="text-3xl font-bold mb-8 text-gray-900">AI Implementation Roadmap</h2>
    <p class="text-lg text-gray-700 mb-8">
      Strategic phased approach to retail AI transformation
    </p>
    
    <div class="space-y-6">
      {#each implementationPhases as phase}
        <div class="bg-white rounded-xl shadow-md p-6">
          <div class="flex items-start justify-between mb-4">
            <h3 class="text-xl font-bold text-gray-900">{phase.phase}</h3>
            <span class="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm px-3 py-1 rounded-full">
              {phase.timeline}
            </span>
          </div>
          <ul class="space-y-2">
            {#each phase.initiatives as initiative}
              <li class="flex items-start text-gray-700">
                <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                {initiative}
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Case Studies -->
<section class="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-12 text-center">AI Success Stories</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each caseStudies as study}
        <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <div class="text-4xl mb-4">{study.icon}</div>
          <h3 class="text-xl font-bold mb-3">{study.title}</h3>
          <div class="space-y-3 text-purple-100">
            <p class="text-sm">
              <span class="font-semibold text-white">Challenge:</span> {study.challenge}
            </p>
            <p class="text-sm">
              <span class="font-semibold text-white">Solution:</span> {study.solution}
            </p>
            <div>
              <p class="font-semibold text-white text-sm mb-2">Results:</p>
              <ul class="space-y-1">
                {#each study.results as result}
                  <li class="text-sm flex items-start">
                    <span class="text-yellow-300 mr-1">★</span>
                    {result}
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- AI Benefits -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold mb-12 text-center text-gray-900">The AI Advantage</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div class="text-center">
      <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full text-white text-3xl mb-4">
        🎯
      </div>
      <h3 class="text-xl font-bold mb-2 text-gray-900">Precision Targeting</h3>
      <p class="text-gray-600">AI-driven customer segmentation for personalized experiences</p>
    </div>
    <div class="text-center">
      <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-full text-white text-3xl mb-4">
        ⚡
      </div>
      <h3 class="text-xl font-bold mb-2 text-gray-900">Real-Time Insights</h3>
      <p class="text-gray-600">Instant analytics and decision-making capabilities</p>
    </div>
    <div class="text-center">
      <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full text-white text-3xl mb-4">
        🔮
      </div>
      <h3 class="text-xl font-bold mb-2 text-gray-900">Predictive Power</h3>
      <p class="text-gray-600">Forecast trends and customer behavior with accuracy</p>
    </div>
    <div class="text-center">
      <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full text-white text-3xl mb-4">
        🚀
      </div>
      <h3 class="text-xl font-bold mb-2 text-gray-900">Scalable Solutions</h3>
      <p class="text-gray-600">AI that grows with your business needs</p>
    </div>
  </div>
</section>

<!-- Future Vision -->
<section class="bg-gray-50 py-16">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-6 text-gray-900">The Future of AI in Retail</h2>
      <p class="text-lg text-gray-700 mb-8">
        As we continue to innovate, our AI-powered retail solutions are setting new standards 
        for customer experience, operational efficiency, and business intelligence. From autonomous 
        stores to hyper-personalized shopping journeys, we're building the retail experience of tomorrow.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button class="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
          Explore AI Solutions
        </button>
        <button class="bg-white text-purple-600 border-2 border-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300">
          Contact Our AI Team
        </button>
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
</style>