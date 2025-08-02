<script>
  const aiInnovations = [
    {
      title: 'AI-Powered Route Optimization',
      description: 'Advanced algorithms analyze weather patterns, ocean currents, and fuel efficiency to optimize cruise routes in real-time',
      features: [
        'Real-time weather prediction and avoidance',
        'Fuel consumption optimization',
        'Dynamic itinerary adjustments',
        'Port congestion prediction'
      ],
      icon: '🧭',
      impact: '15% reduction in fuel consumption'
    },
    {
      title: 'Predictive Maintenance Systems',
      description: 'Machine learning models monitor ship systems 24/7 to predict and prevent equipment failures before they occur',
      features: [
        'Engine performance monitoring',
        'Vibration analysis for early detection',
        'Automated maintenance scheduling',
        'Spare parts inventory optimization'
      ],
      icon: '🔧',
      impact: '40% reduction in unexpected breakdowns'
    },
    {
      title: 'Personalized Guest Experiences',
      description: 'AI creates unique, tailored experiences for each guest based on preferences, behavior, and real-time feedback',
      features: [
        'Customized dining recommendations',
        'Activity and entertainment matching',
        'Personalized shore excursion suggestions',
        'Real-time language translation services'
      ],
      icon: '✨',
      impact: '92% guest satisfaction rating'
    },
    {
      title: 'Smart Cabin Technology',
      description: 'IoT sensors and AI create intelligent living spaces that adapt to guest preferences automatically',
      features: [
        'Voice-controlled room automation',
        'Predictive climate control',
        'Smart lighting based on circadian rhythms',
        'Automated service requests'
      ],
      icon: '🏠',
      impact: '30% energy savings per cabin'
    }
  ];

  const operationalAI = [
    {
      category: 'Navigation & Safety',
      applications: [
        'Autonomous collision avoidance systems',
        'AI-powered bridge decision support',
        'Computer vision for man-overboard detection',
        'Predictive stability management'
      ],
      icon: '⚓'
    },
    {
      category: 'Guest Services',
      applications: [
        'AI concierge and virtual assistants',
        'Facial recognition for seamless boarding',
        'Sentiment analysis for service improvement',
        'Predictive crowd management'
      ],
      icon: '🛎️'
    },
    {
      category: 'Environmental Impact',
      applications: [
        'AI-optimized waste management',
        'Smart water consumption monitoring',
        'Emission reduction algorithms',
        'Marine life detection and avoidance'
      ],
      icon: '🌊'
    },
    {
      category: 'Crew Operations',
      applications: [
        'AI-powered crew scheduling',
        'Training simulations with VR/AR',
        'Performance analytics and coaching',
        'Automated compliance monitoring'
      ],
      icon: '👥'
    }
  ];

  const futureInnovations = [
    {
      innovation: 'Autonomous Ship Operations',
      timeline: '2025-2027',
      description: 'Semi-autonomous navigation systems with remote monitoring capabilities'
    },
    {
      innovation: 'Digital Twin Technology',
      timeline: '2024-2025',
      description: 'Complete virtual replicas of ships for testing and optimization'
    },
    {
      innovation: 'Quantum Computing Integration',
      timeline: '2026-2028',
      description: 'Ultra-complex route optimization across entire fleets'
    }
  ];

  const metrics = [
    { label: 'AI Systems Deployed', value: '200+', icon: '🤖' },
    { label: 'Data Points Analyzed/Day', value: '50M+', icon: '📊' },
    { label: 'Predictive Accuracy', value: '94%', icon: '🎯' },
    { label: 'Operational Efficiency Gain', value: '35%', icon: '📈' }
  ];
</script>

<svelte:head>
  <title>AI Innovation in Cruise Operations - Disney Cruise Line</title>
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-600 to-cyan-500 text-white">
  <div class="absolute inset-0">
    <!-- Tech grid background -->
    <div class="absolute inset-0 opacity-10">
      <div class="grid grid-cols-12 gap-1 h-full">
        {#each Array(48) as _, i}
          <div class="border border-white/20 rounded animate-pulse" style="animation-delay: {i * 0.1}s"></div>
        {/each}
      </div>
    </div>
  </div>
  
  <div class="relative z-10 container mx-auto px-4 py-20">
    <div class="text-center">
      <h1 class="text-5xl md:text-7xl font-bold mb-6">
        AI-Powered Cruise Innovation
      </h1>
      <p class="text-2xl md:text-3xl mb-8 text-blue-100">
        Transforming Maritime Operations with Artificial Intelligence
      </p>
      <div class="flex flex-wrap justify-center gap-6 mt-12">
        {#each metrics as metric}
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div class="text-4xl mb-2">{metric.icon}</div>
            <div class="text-3xl font-bold">{metric.value}</div>
            <div class="text-sm text-blue-200">{metric.label}</div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- AI Innovations -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Core AI Innovations</h2>
  
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
    {#each aiInnovations as innovation}
      <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
        <div class="bg-gradient-to-br from-blue-500 to-purple-500 p-6 text-white">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-2xl font-bold">{innovation.title}</h3>
            <div class="text-5xl">{innovation.icon}</div>
          </div>
          <p class="text-blue-100">{innovation.description}</p>
        </div>
        <div class="p-6">
          <h4 class="font-semibold text-gray-900 mb-3">Key Features:</h4>
          <ul class="space-y-2 mb-4">
            {#each innovation.features as feature}
              <li class="flex items-start">
                <span class="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                <span class="text-gray-700">{feature}</span>
              </li>
            {/each}
          </ul>
          <div class="pt-4 border-t border-gray-100">
            <span class="text-sm font-semibold text-green-600">Impact: {innovation.impact}</span>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- Operational AI Applications -->
<section class="bg-gradient-to-b from-gray-50 to-white py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">AI Across Operations</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each operationalAI as area}
        <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
          <div class="text-4xl mb-4 text-center">{area.icon}</div>
          <h3 class="font-bold text-gray-900 text-lg mb-4 text-center">{area.category}</h3>
          <ul class="space-y-2">
            {#each area.applications as app}
              <li class="text-sm text-gray-700 flex items-start">
                <span class="text-blue-500 mr-2">▸</span>
                {app}
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Technology Deep Dive -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white">
    <h2 class="text-3xl font-bold mb-8 text-center">Advanced Technology Stack</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h3 class="text-xl font-bold mb-4">Machine Learning</h3>
        <ul class="space-y-2 text-purple-100">
          <li>• TensorFlow & PyTorch models</li>
          <li>• Real-time data processing</li>
          <li>• Edge computing on ships</li>
          <li>• Federated learning systems</li>
        </ul>
      </div>
      
      <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h3 class="text-xl font-bold mb-4">IoT & Sensors</h3>
        <ul class="space-y-2 text-purple-100">
          <li>• 10,000+ sensors per ship</li>
          <li>• Real-time data streaming</li>
          <li>• Predictive analytics</li>
          <li>• Digital twin integration</li>
        </ul>
      </div>
      
      <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h3 class="text-xl font-bold mb-4">Cloud & Edge</h3>
        <ul class="space-y-2 text-purple-100">
          <li>• Hybrid cloud architecture</li>
          <li>• Satellite connectivity</li>
          <li>• Low-latency processing</li>
          <li>• Automated failover systems</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Future Innovations -->
<section class="bg-gray-50 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">The Future of AI at Sea</h2>
    
    <div class="max-w-4xl mx-auto">
      {#each futureInnovations as innovation}
        <div class="bg-white rounded-xl shadow-md p-6 mb-6 hover:shadow-lg transition-shadow">
          <div class="flex items-center justify-between flex-wrap gap-4">
            <div class="flex-1">
              <h3 class="text-xl font-bold text-gray-900 mb-2">{innovation.innovation}</h3>
              <p class="text-gray-700">{innovation.description}</p>
            </div>
            <div class="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
              {innovation.timeline}
            </div>
          </div>
        </div>
      {/each}
    </div>
    
    <!-- AI Benefits Summary -->
    <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      <div class="text-center">
        <div class="text-4xl mb-3">🌍</div>
        <h4 class="font-bold text-gray-900 mb-2">Environmental Impact</h4>
        <p class="text-gray-600">25% reduction in carbon emissions through AI optimization</p>
      </div>
      <div class="text-center">
        <div class="text-4xl mb-3">⚡</div>
        <h4 class="font-bold text-gray-900 mb-2">Operational Excellence</h4>
        <p class="text-gray-600">99.9% system uptime with predictive maintenance</p>
      </div>
      <div class="text-center">
        <div class="text-4xl mb-3">🎯</div>
        <h4 class="font-bold text-gray-900 mb-2">Guest Satisfaction</h4>
        <p class="text-gray-600">AI-driven personalization increases satisfaction by 40%</p>
      </div>
    </div>
  </div>
</section>

<!-- Call to Action -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center">
    <h2 class="text-4xl font-bold mb-6">Pioneering the Future of Maritime AI</h2>
    <p class="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
      Disney Cruise Line is leading the transformation of cruise operations through cutting-edge AI technology, 
      creating safer, more efficient, and more magical experiences at sea.
    </p>
    <div class="flex flex-wrap justify-center gap-4">
      <button class="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
        Learn More About Our Technology
      </button>
      <button class="bg-transparent border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors text-white">
        Partner With Us
      </button>
    </div>
  </div>
</section>

<style>
  @keyframes pulse {
    0%, 100% {
      opacity: 0.1;
    }
    50% {
      opacity: 0.3;
    }
  }
</style>