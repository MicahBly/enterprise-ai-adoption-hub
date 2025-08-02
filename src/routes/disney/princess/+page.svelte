<script>
  const aiApplications = [
    {
      title: 'AI-Powered Character Interactions',
      description: 'Meet & greets enhanced with real-time language translation and personalized conversations',
      icon: '🤖',
      features: [
        'Real-time voice translation in 30+ languages',
        'Personalized greetings using guest data',
        'Emotion recognition for tailored interactions',
        'Voice synthesis maintaining character authenticity'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Personalized Storytelling Experiences',
      description: 'AI creates unique princess adventures based on guest preferences and participation',
      icon: '📚',
      features: [
        'Dynamic story generation with guest as co-star',
        'Adaptive narratives based on age and interests',
        'Multi-sensory experiences with AR integration',
        'Personalized keepsake storybooks'
      ],
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Voice Synthesis & Localization',
      description: 'Princess voices authentically recreated in multiple languages using advanced AI',
      icon: '🎙️',
      features: [
        'Character voice preservation across languages',
        'Culturally adapted dialogue and expressions',
        'Real-time dubbing for attractions',
        'Accessibility features for hearing impaired'
      ],
      gradient: 'from-pink-500 to-orange-500'
    },
    {
      title: 'Interactive Magic Mirror Experiences',
      description: 'AI-powered mirrors provide personalized princess transformations and guidance',
      icon: '🪞',
      features: [
        'Virtual makeover with real-time AR',
        'Princess coaching and confidence building',
        'Photo opportunities with AI scene generation',
        'Personalized princess journey tracking'
      ],
      gradient: 'from-purple-500 to-blue-500'
    }
  ];

  const parkIntegrations = [
    {
      name: 'Bibbidi Bobbidi Boutique 2.0',
      description: 'AI-enhanced makeovers with virtual try-ons and personalized styling recommendations',
      tech: ['Computer Vision', 'AR', 'Recommendation Engine'],
      link: '/disney/parks'
    },
    {
      name: 'Enchanted Tales with Belle',
      description: 'Interactive storytelling where AI adapts the narrative to guest participation',
      tech: ['NLP', 'Real-time Animation', 'Voice Recognition'],
      link: '/disney/parks'
    },
    {
      name: 'Princess Fairytale Hall',
      description: 'Smart queuing and personalized meet & greet experiences',
      tech: ['Guest Recognition', 'Predictive Analytics', 'Translation AI'],
      link: '/disney/parks'
    },
    {
      name: 'Royal Digital Portraits',
      description: 'AI-generated artwork placing guests in classic princess scenes',
      tech: ['Generative AI', 'Style Transfer', 'Scene Composition'],
      link: '/disney/parks'
    }
  ];

  const metrics = [
    { label: 'Languages Supported', value: '45+', icon: '🌍' },
    { label: 'Personalized Stories/Day', value: '10K+', icon: '📖' },
    { label: 'Guest Satisfaction', value: '98%', icon: '⭐' },
    { label: 'Accessibility Features', value: '15+', icon: '♿' }
  ];

  const futureInnovations = [
    {
      title: 'Holographic Princess Interactions',
      description: 'Life-sized holographic princesses for immersive storytelling',
      status: 'In Development'
    },
    {
      title: 'AI Dream Journal',
      description: 'Track and visualize personal growth through princess values',
      status: 'Beta Testing'
    },
    {
      title: 'Voice-Activated Castle Tours',
      description: 'Personalized audio tours narrated by favorite princesses',
      status: 'Launching 2025'
    }
  ];
</script>

<svelte:head>
  <title>AI in Disney Princess - Enhancing Magical Experiences</title>
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 text-white">
  <div class="absolute inset-0">
    <!-- Animated sparkles -->
    <div class="absolute inset-0">
      {#each Array(30) as _, i}
        <div 
          class="absolute text-2xl animate-sparkle"
          style="
            top: {Math.random() * 100}%;
            left: {Math.random() * 100}%;
            animation-delay: {Math.random() * 4}s;
            animation-duration: {3 + Math.random() * 2}s;
          "
        >
          ✨
        </div>
      {/each}
    </div>
  </div>
  
  <div class="relative z-10 container mx-auto px-4 py-20">
    <div class="text-center">
      <h1 class="text-5xl md:text-7xl font-bold mb-6">
        AI-Powered Princess Magic
      </h1>
      <p class="text-2xl md:text-3xl mb-8 text-pink-100">
        Where Technology Meets Fairy Tales
      </p>
      <p class="text-lg max-w-3xl mx-auto mb-8 text-purple-100">
        Discover how artificial intelligence is transforming Disney Princess experiences, 
        creating personalized magical moments that speak to every guest's heart in their own language.
      </p>
      <div class="flex justify-center items-center gap-4 text-6xl">
        <span>👑</span>
        <span>🤖</span>
        <span>✨</span>
      </div>
    </div>
  </div>
</section>

<!-- AI Applications -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">
    AI Enhancing Princess Experiences
  </h2>
  
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
    {#each aiApplications as app}
      <div class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
        <div class="bg-gradient-to-r {app.gradient} p-6 text-white">
          <div class="flex items-center gap-4">
            <span class="text-5xl">{app.icon}</span>
            <h3 class="text-2xl font-bold">{app.title}</h3>
          </div>
        </div>
        <div class="p-6">
          <p class="text-gray-700 mb-4">{app.description}</p>
          <ul class="space-y-2">
            {#each app.features as feature}
              <li class="flex items-start gap-2">
                <span class="text-purple-500 mt-1">•</span>
                <span class="text-gray-700">{feature}</span>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- Metrics Dashboard -->
<section class="bg-gradient-to-b from-purple-50 to-pink-50 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">
      Impact of AI on Princess Experiences
    </h2>
    
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
      {#each metrics as metric}
        <div class="bg-white rounded-xl p-6 text-center shadow-lg">
          <div class="text-4xl mb-2">{metric.icon}</div>
          <div class="text-3xl font-bold text-purple-600 mb-1">{metric.value}</div>
          <div class="text-sm text-gray-700">{metric.label}</div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Park Integrations -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">
    Princess AI in Disney Parks
  </h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    {#each parkIntegrations as integration}
      <a href={integration.link} class="group block bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
        <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
          {integration.name}
        </h3>
        <p class="text-gray-700 mb-4">{integration.description}</p>
        <div class="flex flex-wrap gap-2">
          {#each integration.tech as tech}
            <span class="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
              {tech}
            </span>
          {/each}
        </div>
        <div class="mt-4 text-purple-600 font-semibold group-hover:text-purple-700">
          Learn more about Park AI →
        </div>
      </a>
    {/each}
  </div>
</section>

<!-- Future Innovations -->
<section class="bg-gradient-to-r from-purple-100 to-pink-100 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">
      The Future of Princess Magic
    </h2>
    
    <div class="max-w-4xl mx-auto">
      <div class="bg-white rounded-2xl shadow-xl p-8">
        <h3 class="text-2xl font-bold text-gray-900 mb-6">Coming Soon</h3>
        <div class="space-y-6">
          {#each futureInnovations as innovation}
            <div class="border-l-4 border-purple-500 pl-6">
              <div class="flex justify-between items-start mb-2">
                <h4 class="text-lg font-bold text-gray-900">{innovation.title}</h4>
                <span class="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                  {innovation.status}
                </span>
              </div>
              <p class="text-gray-700">{innovation.description}</p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Call to Action -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white text-center">
    <h2 class="text-3xl font-bold mb-6">Experience AI-Enhanced Princess Magic</h2>
    <p class="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
      From personalized storytelling to multilingual character interactions, 
      AI is making princess dreams more accessible and magical than ever before.
    </p>
    <div class="flex flex-wrap justify-center gap-4">
      <a href="/disney/parks" class="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-purple-50 transition-colors">
        Explore Park Experiences
      </a>
      <a href="/disney" class="bg-purple-500 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-400 transition-colors">
        View All Disney AI
      </a>
    </div>
  </div>
</section>

<style>
  @keyframes sparkle {
    0%, 100% { 
      opacity: 0;
      transform: scale(0) rotate(0deg);
    }
    50% { 
      opacity: 1;
      transform: scale(1) rotate(180deg);
    }
  }
  
  .animate-sparkle {
    animation: sparkle infinite ease-in-out;
  }
</style>