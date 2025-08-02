<script>
  import { base } from '$app/paths';
  
  const aiTechnologies = [
    {
      title: 'Content Personalization Engine',
      category: 'Streaming',
      icon: '🎯',
      description: 'Advanced ML algorithms analyze viewing patterns to deliver personalized content recommendations across Disney+ and Hulu',
      impact: '35% increase in viewer engagement',
      features: [
        'Real-time preference learning',
        'Multi-profile household optimization',
        'Cross-platform sync'
      ]
    },
    {
      title: 'AI Production Scheduler',
      category: 'Production',
      icon: '📅',
      description: 'Intelligent scheduling system optimizes crew, location, and resource allocation for TV productions',
      impact: '25% reduction in production delays',
      features: [
        'Resource conflict resolution',
        'Weather-aware scheduling',
        'Budget optimization'
      ]
    },
    {
      title: 'Automated Captioning & Translation',
      category: 'Accessibility',
      icon: '💬',
      description: 'Neural networks generate accurate closed captions and translations in 30+ languages',
      impact: '80% faster localization',
      features: [
        'Context-aware translation',
        'Dialect recognition',
        'Real-time processing'
      ]
    },
    {
      title: 'Recommendation Algorithm',
      category: 'Discovery',
      icon: '🔍',
      description: 'Disney+ recommendation engine uses collaborative filtering and deep learning for content discovery',
      impact: '40% improved content discovery',
      features: [
        'Mood-based recommendations',
        'Viewing time optimization',
        'Family-friendly filtering'
      ]
    }
  ];
  
  const productionAI = [
    {
      name: 'Pre-Production',
      tools: [
        { title: 'Script Analysis AI', status: 'Deployed', description: 'Analyzes scripts for production requirements' },
        { title: 'Location Scouting ML', status: 'Testing', description: 'Matches script needs with location databases' },
        { title: 'Budget Predictor', status: 'Deployed', description: 'AI-driven budget estimation based on script' },
        { title: 'Casting Assistant', status: 'Planning', description: 'AI-powered talent matching system' }
      ],
      color: 'from-blue-500 to-blue-700'
    },
    {
      name: 'Production',
      tools: [
        { title: 'Smart Scheduling', status: 'Deployed', description: 'Optimizes daily shooting schedules' },
        { title: 'Equipment Tracker', status: 'Deployed', description: 'AI inventory management system' },
        { title: 'Scene Continuity AI', status: 'Testing', description: 'Ensures visual continuity between takes' },
        { title: 'Performance Capture', status: 'Testing', description: 'Enhanced motion capture processing' }
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Post-Production',
      tools: [
        { title: 'Auto Color Grading', status: 'Deployed', description: 'AI-assisted color correction' },
        { title: 'Sound Design AI', status: 'Testing', description: 'Automated foley and sound effects' },
        { title: 'Edit Assistant', status: 'Deployed', description: 'Suggests optimal cut points' },
        { title: 'VFX Enhancement', status: 'Deployed', description: 'AI-powered visual effects tools' }
      ],
      color: 'from-green-500 to-teal-600'
    },
    {
      name: 'Distribution',
      tools: [
        { title: 'Format Optimizer', status: 'Deployed', description: 'Optimizes video for different devices' },
        { title: 'Thumbnail Generator', status: 'Deployed', description: 'AI creates engaging thumbnails' },
        { title: 'Release Timing AI', status: 'Testing', description: 'Predicts optimal release windows' },
        { title: 'Market Analysis', status: 'Deployed', description: 'AI-driven audience insights' }
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];
  
  const streamingMetrics = [
    { title: 'Personalization Accuracy', value: '87%', icon: '🎯' },
    { title: 'Content Discovery Rate', value: '64%', icon: '🔍' },
    { title: 'Translation Languages', value: '30+', icon: '🌍' },
    { title: 'Caption Accuracy', value: '98.5%', icon: '📝' },
    { title: 'Production Efficiency', value: '+40%', icon: '⚡' },
    { title: 'Cost Reduction', value: '25%', icon: '💰' }
  ];
  
  const caseStudies = [
    { 
      title: 'The Mandalorian Production', 
      description: 'How AI-driven virtual production revolutionized TV filmmaking',
      link: `${base}/disney/use-cases#visual-effects-enhancement`,
      icon: '🎬'
    },
    { 
      title: 'Disney+ Launch Success', 
      description: 'AI personalization engine drives 150M+ subscriber growth',
      link: `${base}/disney/use-cases#content-recommendation`,
      icon: '🚀'
    },
    { 
      title: 'Global Content Localization', 
      description: 'Neural translation enables same-day global releases',
      link: `${base}/experiments`,
      icon: '🌐'
    }
  ];
</script>

<svelte:head>
  <title>AI in TV Production - Disney AI Adoption Hub</title>
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900 text-white">
  <div class="absolute inset-0 opacity-20">
    <div class="grid grid-cols-8 gap-4 p-8">
      {#each Array(16) as _, i}
        <div class="text-5xl animate-pulse" style="animation-delay: {i * 0.2}s">🤖</div>
      {/each}
    </div>
  </div>
  
  <div class="relative z-10 container mx-auto px-4 py-20">
    <h1 class="text-5xl md:text-6xl font-bold mb-6">AI in TV Production</h1>
    <p class="text-xl md:text-2xl mb-8 text-purple-100">
      Transforming television production and streaming with artificial intelligence
    </p>
    <div class="flex flex-wrap gap-4">
      <a 
        href="{base}/disney/use-cases#content-recommendation" 
        class="bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-purple-100 transition-colors"
      >
        View AI Use Cases
      </a>
      <a 
        href="{base}/experiments" 
        class="bg-purple-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
      >
        Explore Experiments
      </a>
    </div>
  </div>
</section>

<!-- AI Technologies -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold mb-8 text-gray-900">AI Technologies in TV Production</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {#each aiTechnologies as tech}
      <div class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
        <div class="relative">
          <div class="aspect-video bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-6xl">
            {tech.icon}
          </div>
          <span class="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
            {tech.category}
          </span>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold mb-2 text-gray-900">{tech.title}</h3>
          <p class="text-sm text-gray-700 mb-3">{tech.description}</p>
          <div class="bg-green-50 text-green-800 px-3 py-2 rounded-lg text-sm font-medium mb-3">
            Impact: {tech.impact}
          </div>
          <ul class="space-y-1">
            {#each tech.features as feature}
              <li class="text-xs text-gray-600 flex items-center">
                <span class="text-purple-500 mr-2">•</span>
                <span class="text-gray-600">{feature}</span>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- Production Pipeline AI -->
<section class="bg-gray-50 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8 text-gray-900">AI Across the Production Pipeline</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each productionAI as stage}
        <div class="bg-white rounded-xl shadow-md overflow-hidden">
          <div class="bg-gradient-to-r {stage.color} text-white p-4">
            <h3 class="text-xl font-bold">{stage.name}</h3>
          </div>
          <div class="p-4">
            <ul class="space-y-3">
              {#each stage.tools as tool}
                <li>
                  <div class="flex items-center justify-between mb-1">
                    <span class="font-medium text-gray-900 text-sm">{tool.title}</span>
                    <span class="text-xs px-2 py-1 rounded
                      {tool.status === 'Deployed' ? 'bg-green-100 text-green-800' : 
                       tool.status === 'Testing' ? 'bg-yellow-100 text-yellow-800' : 
                       'bg-gray-100 text-gray-600'}">
                      <span class="text-gray-800">{tool.status}</span>
                    </span>
                  </div>
                  <p class="text-xs text-gray-600">{tool.description}</p>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Disney+ Recommendation Engine -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
    <h2 class="text-3xl font-bold mb-8">Disney+ AI Recommendation Engine</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <p class="text-lg mb-6 text-blue-100">
          Our advanced recommendation algorithm powers content discovery for 150+ million subscribers worldwide
        </p>
        <div class="space-y-4">
          <div class="bg-white/10 backdrop-blur rounded-lg p-4">
            <h3 class="font-semibold mb-2 text-white">Collaborative Filtering</h3>
            <p class="text-sm text-blue-100">Analyzes viewing patterns across similar user profiles</p>
          </div>
          <div class="bg-white/10 backdrop-blur rounded-lg p-4">
            <h3 class="font-semibold mb-2 text-white">Content-Based Analysis</h3>
            <p class="text-sm text-blue-100">Deep learning models understand content themes and attributes</p>
          </div>
          <div class="bg-white/10 backdrop-blur rounded-lg p-4">
            <h3 class="font-semibold mb-2 text-white">Contextual Awareness</h3>
            <p class="text-sm text-blue-100">Considers time of day, device, and viewing history</p>
          </div>
        </div>
        <a 
          href="{base}/disney/use-cases#content-recommendation" 
          class="inline-block mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Learn More About Our Recommendation System
        </a>
      </div>
      <div class="grid grid-cols-2 gap-4">
        {#each streamingMetrics.slice(0, 4) as metric}
          <div class="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
            <div class="text-4xl mb-2">{metric.icon}</div>
            <div class="text-2xl font-bold mb-1">{metric.value}</div>
            <div class="text-sm text-blue-100">{metric.title}</div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- Key Metrics -->
<section class="bg-gradient-to-b from-purple-100 to-pink-100 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8 text-center text-gray-900">AI Impact Metrics</h2>
    
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {#each streamingMetrics as metric}
        <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all hover:scale-105 text-center">
          <div class="text-4xl mb-2">{metric.icon}</div>
          <p class="text-2xl font-bold text-gray-900">{metric.value}</p>
          <p class="text-sm text-gray-600">{metric.title}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Case Studies -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 md:p-12 text-white">
    <h2 class="text-3xl font-bold mb-8">Success Stories</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {#each caseStudies as study}
        <a 
          href="{study.link}"
          class="bg-white/10 backdrop-blur rounded-lg p-6 hover:bg-white/20 transition-all transform hover:scale-105"
        >
          <div class="text-4xl mb-4">{study.icon}</div>
          <h3 class="text-xl font-bold mb-2 text-white">{study.title}</h3>
          <p class="text-orange-100">{study.description}</p>
          <div class="mt-4 text-sm font-semibold flex items-center text-white">
            <span class="text-white">Read Case Study</span>
            <span class="ml-2 text-white">→</span>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<!-- Integration with Experiments -->
<section class="bg-gray-50 py-16">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-4 text-gray-900">Explore AI Experiments</h2>
      <p class="text-lg text-gray-600 mb-8">
        Discover how Disney is pushing the boundaries of AI in television production and streaming
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <a 
          href="{base}/experiments" 
          class="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
        >
          View All Experiments
        </a>
        <a 
          href="{base}/disney/use-cases" 
          class="bg-white text-purple-600 border-2 border-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
        >
          Browse Use Cases
        </a>
      </div>
    </div>
  </div>
</section>