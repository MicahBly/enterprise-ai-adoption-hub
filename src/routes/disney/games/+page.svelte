<script>
  import { onMount } from 'svelte';
  
  const aiGameDevelopment = [
    {
      name: 'Procedural World Generation',
      technology: 'Neural Networks',
      implementation: 'Infinite Environments',
      description: 'AI creates endless, unique worlds and landscapes dynamically',
      impact: 'High',
      adoption: '75%',
      icon: '🌍',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Intelligent NPC Behavior',
      technology: 'Large Language Models',
      implementation: 'Character AI',
      description: 'Characters with natural dialogue and adaptive personality systems',
      impact: 'Very High',
      adoption: '60%',
      icon: '🤖',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Dynamic Difficulty Adjustment',
      technology: 'Machine Learning',
      implementation: 'Real-time Balancing',
      description: 'Games that adapt challenge levels based on player skill and engagement',
      impact: 'High',
      adoption: '85%',
      icon: '📊',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'Automated Asset Creation',
      technology: 'Generative AI',
      implementation: 'Content Pipeline',
      description: 'AI generates textures, models, and animations reducing development time',
      impact: 'Very High',
      adoption: '45%',
      icon: '🎨',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Personalized Content',
      technology: 'Recommendation AI',
      implementation: 'Player Analytics',
      description: 'Tailored quests, rewards, and experiences based on player preferences',
      impact: 'High',
      adoption: '70%',
      icon: '🎯',
      color: 'from-pink-500 to-rose-500'
    },
    {
      name: 'Intelligent Game Testing',
      technology: 'Reinforcement Learning',
      implementation: 'Automated QA',
      description: 'AI agents that find bugs and balance issues automatically',
      impact: 'High',
      adoption: '40%',
      icon: '🔍',
      color: 'from-teal-500 to-cyan-500'
    }
  ];
  
  const mobileAITechnologies = [
    {
      name: 'Adaptive Touch Controls',
      maturity: 'Production',
      category: 'User Interface',
      icon: '📱',
      description: 'AI optimizes control schemes based on hand size and play patterns'
    },
    {
      name: 'Battery-Aware Rendering',
      maturity: 'Advanced',
      category: 'Performance',
      icon: '🔋',
      description: 'AI adjusts graphics quality to preserve battery life without compromising experience'
    },
    {
      name: 'Context-Aware Notifications',
      maturity: 'Production',
      category: 'Engagement',
      icon: '🔔',
      description: 'Smart push notifications based on player behavior and optimal timing'
    },
    {
      name: 'Network-Adaptive Streaming',
      maturity: 'Advanced',
      category: 'Performance',
      icon: '📡',
      description: 'AI predicts and adjusts content delivery based on connection quality'
    },
    {
      name: 'Voice Command Recognition',
      maturity: 'Beta',
      category: 'Accessibility',
      icon: '🎤',
      description: 'Natural language commands for hands-free gaming experiences'
    },
    {
      name: 'Gesture-Based Controls',
      maturity: 'Experimental',
      category: 'Innovation',
      icon: '👋',
      description: 'Camera-based gesture recognition for immersive touch-free interaction'
    }
  ];
  
  const proceduralGeneration = [
    { name: 'Level Architecture', algorithm: 'Wave Function Collapse', complexity: 'High', icon: '🏗️' },
    { name: 'Character Animations', algorithm: 'Motion Synthesis', complexity: 'Very High', icon: '🎭' },
    { name: 'Musical Composition', algorithm: 'Transformer Networks', complexity: 'High', icon: '🎵' },
    { name: 'Narrative Branching', algorithm: 'Story Grammar', complexity: 'Medium', icon: '📖' },
    { name: 'Texture Generation', algorithm: 'GANs', complexity: 'High', icon: '🎨' },
    { name: 'Voice Synthesis', algorithm: 'Neural Vocoders', complexity: 'Very High', icon: '🗣️' }
  ];
  
  const aiPlatformCapabilities = [
    {
      name: 'High-Performance Computing',
      icon: '🖥️',
      capabilities: ['Real-time Ray Tracing AI', 'Neural Rendering', 'Physics Simulation'],
      aiModels: '50+',
      color: 'from-purple-600 to-blue-600'
    },
    {
      name: 'Edge AI Processing',
      icon: '📱',
      capabilities: ['On-device ML', 'Federated Learning', 'Offline AI'],
      aiModels: '30+',
      color: 'from-green-500 to-teal-500'
    },
    {
      name: 'Cloud-Native AI',
      icon: '☁️',
      capabilities: ['Distributed Training', 'Model Serving', 'Auto-scaling'],
      aiModels: '100+',
      color: 'from-orange-500 to-red-500'
    }
  ];
  
  const advancedAIFeatures = [
    {
      title: 'Neural Behavior Trees',
      description: 'AI characters with complex decision-making and emotional responses',
      icon: '🧠'
    },
    {
      title: 'Real-time Animation Synthesis',
      description: 'AI generates natural movements and expressions dynamically',
      icon: '🎭'
    },
    {
      title: 'Predictive Asset Loading',
      description: 'AI predicts and preloads content to eliminate loading screens',
      icon: '⚡'
    },
    {
      title: 'Intelligent Compression',
      description: 'AI optimizes game assets for minimal storage and bandwidth',
      icon: '🗜️'
    },
    {
      title: 'Automated Localization',
      description: 'AI translates and adapts content for global audiences in real-time',
      icon: '🌐'
    },
    {
      title: 'Emotion Recognition',
      description: 'AI reads player emotions through gameplay patterns and adapts accordingly',
      icon: '😊'
    }
  ];
  
  // Experiments data
  let experimentsData = null;
  
  onMount(async () => {
    try {
      const response = await fetch('/api/experiments');
      if (response.ok) {
        experimentsData = await response.json();
      }
    } catch (error) {
      console.error('Failed to load experiments data:', error);
    }
  });
  
  let activeCategory = 'all';
</script>

<svelte:head>
  <title>AI in Gaming - Disney's Technology Innovation | AI Hub</title>
</svelte:head>

<!-- Hero Section with AI Gaming Theme -->
<section class="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
  <div class="absolute inset-0 opacity-20">
    <div class="absolute top-20 left-20 text-8xl animate-pulse">🤖</div>
    <div class="absolute bottom-20 right-20 text-8xl animate-pulse" style="animation-delay: 0.7s">🧠</div>
    <div class="absolute top-1/3 right-1/3 text-6xl animate-pulse" style="animation-delay: 0.3s">⚡</div>
    <div class="absolute bottom-1/3 left-1/4 text-7xl animate-pulse" style="animation-delay: 1s">🎯</div>
  </div>
  
  <div class="relative z-10 container mx-auto px-4 py-20">
    <h1 class="text-5xl md:text-7xl font-bold mb-6">
      <span class="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        AI in Gaming
      </span>
    </h1>
    <p class="text-xl md:text-2xl mb-8 text-purple-100">
      Revolutionizing game development with artificial intelligence and machine learning
    </p>
    <div class="flex flex-wrap gap-4">
      <button class="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
        Explore AI Technologies
      </button>
      <button class="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300">
        View Experiments
      </button>
    </div>
  </div>
</section>

<!-- AI Game Development Technologies -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold mb-12 text-gray-900">AI-Powered Game Development</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each aiGameDevelopment as tech}
      <div class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
        <div class="absolute inset-0 bg-gradient-to-br {tech.color} opacity-90"></div>
        <div class="relative z-10 p-6 text-white">
          <div class="flex justify-between items-start mb-4">
            <span class="text-5xl">{tech.icon}</span>
            <div class="text-right">
              <div class="flex items-center text-yellow-300">
                <span class="text-sm mr-1">📊</span>
                <span class="font-bold">{tech.adoption}</span>
              </div>
              <div class="text-xs opacity-90">{tech.impact} Impact</div>
            </div>
          </div>
          <h3 class="text-xl font-bold mb-2">{tech.name}</h3>
          <p class="text-sm opacity-90 mb-3">{tech.description}</p>
          <div class="flex justify-between items-center text-xs">
            <span class="bg-white/20 px-3 py-1 rounded-full">{tech.technology}</span>
            <span>{tech.implementation}</span>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- Mobile AI Technologies Section -->
<section class="bg-gradient-to-b from-blue-50 to-white py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-12 text-gray-900">Mobile AI Technologies</h2>
    <p class="text-gray-700 mb-8 max-w-2xl">Advanced AI capabilities optimized for mobile gaming experiences, from performance optimization to accessibility features.</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each mobileAITechnologies as tech}
        <div class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 group">
          <div class="flex items-start justify-between mb-4">
            <div class="flex items-center">
              <span class="text-4xl mr-3">{tech.icon}</span>
              <div>
                <h3 class="font-bold text-lg text-gray-900">{tech.name}</h3>
                <p class="text-sm text-gray-600">{tech.category}</p>
              </div>
            </div>
          </div>
          <p class="text-gray-700 text-sm mb-4">{tech.description}</p>
          <div class="flex items-center justify-between">
            <span class="text-xs text-gray-600 px-3 py-1 bg-gray-100 rounded-full">{tech.maturity}</span>
            <button class="text-blue-600 hover:text-blue-700 font-semibold text-sm group-hover:translate-x-1 transition-transform">
              Learn More →
            </button>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Procedural Content Generation Section -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold mb-12 text-gray-900">Procedural Content Generation</h2>
  <p class="text-gray-700 mb-8 max-w-2xl">AI algorithms that create infinite content variations, from game levels to character animations and musical scores.</p>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each proceduralGeneration as content}
      <div class="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-4 hover:shadow-lg transition-shadow">
        <div class="flex items-center">
          <span class="text-3xl mr-3">{content.icon}</span>
          <div>
            <h3 class="font-bold text-gray-900">{content.name}</h3>
            <p class="text-sm text-gray-700">{content.algorithm} • {content.complexity} Complexity</p>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- AI Platform Capabilities -->
<section class="bg-gray-50 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-12 text-gray-900">AI Computing Platforms</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each aiPlatformCapabilities as platform}
        <div class="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
          <div class="absolute inset-0 bg-gradient-to-br {platform.color}"></div>
          <div class="relative z-10 p-8 text-white text-center">
            <div class="text-6xl mb-4">{platform.icon}</div>
            <h3 class="text-2xl font-bold mb-2">{platform.name}</h3>
            <div class="space-y-1 mb-4">
              {#each platform.capabilities as capability}
                <div class="text-sm opacity-90">• {capability}</div>
              {/each}
            </div>
            <div class="text-3xl font-bold">{platform.aiModels}</div>
            <div class="text-sm opacity-90">AI Models</div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- AI Research & Development Hub -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 class="text-3xl font-bold mb-4">AI Research & Development</h2>
        <p class="text-blue-100 mb-6">
          Cutting-edge research initiatives in artificial intelligence for gaming, from neural networks to quantum computing applications.
        </p>
        <ul class="space-y-3 mb-8">
          <li class="flex items-center space-x-2">
            <span class="text-2xl">🧬</span>
            <span>Neural architecture optimization</span>
          </li>
          <li class="flex items-center space-x-2">
            <span class="text-2xl">⚡</span>
            <span>Real-time AI inference engines</span>
          </li>
          <li class="flex items-center space-x-2">
            <span class="text-2xl">🔬</span>
            <span>Experimental AI algorithms</span>
          </li>
          <li class="flex items-center space-x-2">
            <span class="text-2xl">🌐</span>
            <span>Distributed AI gaming systems</span>
          </li>
        </ul>
        <button class="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
          View Research Papers
        </button>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
          <div class="text-4xl font-bold mb-2">15+</div>
          <div class="text-sm">Research Projects</div>
        </div>
        <div class="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
          <div class="text-4xl font-bold mb-2">200+</div>
          <div class="text-sm">AI Models</div>
        </div>
        <div class="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
          <div class="text-4xl font-bold mb-2">50+</div>
          <div class="text-sm">Publications</div>
        </div>
        <div class="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
          <div class="text-4xl font-bold mb-2">99.9%</div>
          <div class="text-sm">Model Accuracy</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Advanced AI Gaming Features -->
<section class="bg-gradient-to-b from-purple-50 to-pink-50 py-16">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-6 text-gray-900">Advanced AI Gaming Technologies</h2>
        <p class="text-lg text-gray-700 mb-8">
          Next-generation AI capabilities transforming how games are developed, optimized, and experienced
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {#each advancedAIFeatures as feature}
          <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div class="text-4xl mb-4">{feature.icon}</div>
            <h3 class="font-bold text-lg mb-2 text-gray-900">{feature.title}</h3>
            <p class="text-gray-700">{feature.description}</p>
          </div>
        {/each}
      </div>
      
      <!-- Experiments Integration -->
      {#if experimentsData}
        <div class="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-8">
          <h3 class="text-xl font-bold mb-4 text-gray-900">Active AI Gaming Experiments</h3>
          <p class="text-gray-700 mb-6">
            Current research initiatives exploring the boundaries of AI in game development and player experience.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {#each experimentsData.recommendations.slice(0, 4) as experiment}
              <div class="bg-white/70 rounded-lg p-4">
                <h4 class="font-semibold text-gray-900 mb-2">{experiment.title}</h4>
                <p class="text-sm text-gray-700 mb-2">{experiment.description}</p>
                <div class="flex justify-between items-center text-xs">
                  <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded-full">{experiment.division}</span>
                  <span class="font-medium">{experiment.estimatedImpact} Impact</span>
                </div>
              </div>
            {/each}
          </div>
          <div class="text-center">
            <button class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow">
              View All Experiments
            </button>
          </div>
        </div>
      {:else}
        <div class="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-8 text-center">
          <h3 class="text-xl font-bold mb-4 text-gray-900">AI Gaming Research Initiative</h3>
          <p class="text-gray-700 mb-6">
            Exploring cutting-edge AI applications in game development, from neural rendering to intelligent content generation.
          </p>
          <button class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow">
            Learn More
          </button>
        </div>
      {/if}
    </div>
  </div>
</section>

<!-- AI Gaming Stats Section -->
<section class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
  <div class="container mx-auto px-4">
    <div class="text-center mb-8">
      <h2 class="text-2xl font-bold mb-2">AI Gaming Innovation Metrics</h2>
      <p class="text-purple-100">Leading the industry in artificial intelligence implementation</p>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <div class="text-4xl font-bold mb-2">150+</div>
        <div class="text-purple-100">AI Models Deployed</div>
      </div>
      <div>
        <div class="text-4xl font-bold mb-2">95%</div>
        <div class="text-purple-100">Performance Improvement</div>
      </div>
      <div>
        <div class="text-4xl font-bold mb-2">12</div>
        <div class="text-purple-100">Active Experiments</div>
      </div>
      <div>
        <div class="text-4xl font-bold mb-2">24/7</div>
        <div class="text-purple-100">AI Operations</div>
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
</style>