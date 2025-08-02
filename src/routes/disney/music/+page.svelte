<script>
  import { onMount } from 'svelte';
  
  const aiMusicApplications = [
    {
      title: 'AI-Assisted Composition',
      icon: '🎼',
      description: 'Intelligent composition tools that help songwriters and composers create melodies, harmonies, and arrangements',
      benefits: ['Faster composition', 'Creative inspiration', 'Style matching'],
      status: 'production'
    },
    {
      title: 'Automated Mixing & Mastering',
      icon: '🎚️',
      description: 'AI-powered audio processing that automatically balances, equalizes, and masters recordings',
      benefits: ['Consistent quality', 'Time savings', 'Professional sound'],
      status: 'production'
    },
    {
      title: 'Personalized Playlists',
      icon: '🎯',
      description: 'Machine learning algorithms that analyze listening patterns to create custom playlists',
      benefits: ['User engagement', 'Discovery optimization', 'Retention increase'],
      status: 'production'
    },
    {
      title: 'Intelligent Music Recommendations',
      icon: '🤖',
      description: 'Advanced recommendation engines that suggest music based on mood, activity, and preferences',
      benefits: ['Enhanced discovery', 'Engagement boost', 'Revenue growth'],
      status: 'production'
    }
  ];
  
  const aiTechnologies = [
    {
      name: 'Generative Music Models',
      icon: '🧠',
      color: 'from-purple-500 to-pink-500',
      description: 'AI models that create original music compositions',
      examples: ['Melody generation', 'Harmonic progression', 'Style transfer']
    },
    {
      name: 'Audio Analysis & Processing',
      icon: '📊',
      color: 'from-blue-500 to-green-500',
      description: 'Intelligent audio processing and feature extraction',
      examples: ['Tempo detection', 'Key signature analysis', 'Mood classification']
    },
    {
      name: 'Voice Synthesis & Cloning',
      icon: '🎤',
      color: 'from-red-500 to-yellow-500',
      description: 'AI-powered voice generation and character vocals',
      examples: ['Character voice matching', 'Multilingual vocals', 'Voice restoration']
    },
    {
      name: 'Smart Music Production',
      icon: '🎛️',
      color: 'from-gray-700 to-blue-700',
      description: 'Automated production workflows and optimization',
      examples: ['Auto-arrangement', 'Dynamic mixing', 'Master optimization']
    },
    {
      name: 'Audience Analytics',
      icon: '📈',
      color: 'from-green-500 to-teal-500',
      description: 'Data-driven insights into music preferences',
      examples: ['Listening patterns', 'Engagement metrics', 'Preference modeling']
    },
    {
      name: 'Real-time Adaptation',
      icon: '⚡',
      color: 'from-yellow-500 to-orange-500',
      description: 'Dynamic music that adapts to context and mood',
      examples: ['Interactive soundtracks', 'Mood-based adjustments', 'Contextual mixing']
    }
  ];
  
  const aiImplementationSteps = [
    { step: 'Data Collection', icon: '📊', color: 'bg-blue-600', description: 'Gather audio data and user preferences' },
    { step: 'Model Training', icon: '🧠', color: 'bg-purple-600', description: 'Train AI models on music datasets' },
    { step: 'Integration', icon: '🔗', color: 'bg-green-600', description: 'Integrate AI tools into production workflows' },
    { step: 'Testing & Optimization', icon: '🎯', color: 'bg-orange-600', description: 'Test and refine AI music systems' },
    { step: 'Deployment', icon: '🚀', color: 'bg-red-600', description: 'Launch AI-powered music experiences' }
  ];
  
  const businessImpacts = [
    {
      title: 'Production Efficiency',
      metric: '60% faster',
      description: 'AI reduces music production time',
      icon: '⚡'
    },
    {
      title: 'Personalization',
      metric: '40% increase',
      description: 'User engagement with AI recommendations',
      icon: '🎯'
    },
    {
      title: 'Cost Reduction',
      metric: '35% savings',
      description: 'Lower mixing and mastering costs',
      icon: '💰'
    },
    {
      title: 'Creative Output',
      metric: '3x more',
      description: 'Musical variations and arrangements',
      icon: '🎨'
    }
  ];
  
  const useCaseLinks = [
    { name: 'Content Recommendation Engine', url: '/use-cases/tubi-recommendation-engine', icon: '🎯' },
    { name: 'Personalized Content Discovery', url: '/use-cases/fox-nation-personalization', icon: '🔍' },
    { name: 'AI Content Analysis', url: '/use-cases/claude-whisper-metadata', icon: '🤖' },
    { name: 'All AI Use Cases', url: '/use-cases', icon: '📋' }
  ];
  
  let aiSearchQuery = '';
  let selectedCategory = 'all';
  let mouseX = 0;
  let mouseY = 0;
  
  onMount(() => {
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  });
</script>

<svelte:head>
  <title>AI in Music Production - Disney Entertainment</title>
  <meta name="description" content="Explore how AI is transforming music composition, mixing, mastering, and personalization at Disney" />
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
  <div class="absolute inset-0 opacity-20">
    <div class="absolute top-10 left-10 text-9xl animate-pulse">🤖</div>
    <div class="absolute bottom-10 right-10 text-9xl animate-pulse" style="animation-delay: 0.5s">🎵</div>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[200px] opacity-10">🧠</div>
  </div>
  
  <!-- AI Elements Animation -->
  <div class="absolute inset-0 overflow-hidden">
    {#each Array(5) as _, i}
      <div class="absolute text-4xl opacity-30 animate-float"
           style="left: {20 + i * 15}%; animation-delay: {i * 0.5}s; animation-duration: {8 + i}s">
        {['🎼', '🎚️', '🎯', '🤖', '⚡'][i]}
      </div>
    {/each}
  </div>
  
  <div class="relative z-10 container mx-auto px-4 py-20">
    <h1 class="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
      AI in Music Production
    </h1>
    <p class="text-xl md:text-3xl mb-8 text-purple-100">
      Where Artificial Intelligence Meets Musical Magic
    </p>
    <p class="text-lg text-blue-100 max-w-2xl">
      Discover how AI is revolutionizing music composition, production, and personalization at Disney
    </p>
    <div class="mt-8 flex flex-wrap gap-4">
      <a href="/use-cases" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
        Explore AI Use Cases
      </a>
      <button class="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-colors backdrop-blur-sm">
        Learn More
      </button>
    </div>
  </div>
</section>

<!-- AI Music Applications -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold mb-8 flex items-center text-gray-900">
    <span class="text-blue-500 mr-3">🚀</span>
    AI Music Applications
  </h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {#each aiMusicApplications as application}
      <div class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105">
        <div class="aspect-square bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-8xl">
          {application.icon}
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold mb-3 text-gray-900">{application.title}</h3>
          <p class="text-sm text-gray-700 mb-4">{application.description}</p>
          <div class="space-y-2 mb-4">
            {#each application.benefits as benefit}
              <div class="flex items-center text-xs text-gray-600">
                <span class="text-green-500 mr-2">✓</span>
                <span class="text-gray-600">{benefit}</span>
              </div>
            {/each}
          </div>
          <div class="flex items-center justify-between">
            <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded capitalize">
              <span class="text-green-700">{application.status}</span>
            </span>
            <button class="text-blue-600 hover:text-blue-700 font-semibold text-sm group-hover:translate-x-1 transition-transform">
              <span class="text-blue-600 hover:text-blue-700">Learn More →</span>
            </button>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- AI Technologies -->
<section class="bg-gradient-to-b from-blue-50 to-purple-50 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8 text-center text-gray-900">AI Technologies in Music</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each aiTechnologies as technology}
        <div class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
          <div class="h-32 bg-gradient-to-br {technology.color} flex items-center justify-center text-6xl text-white">
            {technology.icon}
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2 text-gray-900">{technology.name}</h3>
            <p class="text-gray-600 mb-4">{technology.description}</p>
            <div class="space-y-1">
              {#each technology.examples as example}
                <p class="text-sm text-gray-500">• {example}</p>
              {/each}
            </div>
            <button class="mt-4 text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-1 transition-transform">
              <span class="text-blue-600 hover:text-blue-700">Explore Technology →</span>
            </button>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- AI Implementation Steps -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold mb-8 text-center text-gray-900">AI Implementation Journey</h2>
  
  <div class="flex flex-wrap justify-center gap-4 mb-12">
    {#each aiImplementationSteps as step, index}
      <div class="{step.color} text-white px-6 py-4 rounded-lg font-semibold flex items-center space-x-3 transform hover:scale-105 transition-transform relative">
        <span class="text-2xl">{step.icon}</span>
        <div>
          <div class="font-bold text-white">{index + 1}. {step.step}</div>
          <div class="text-sm opacity-90 text-white">{step.description}</div>
        </div>
        {#if index < aiImplementationSteps.length - 1}
          <div class="absolute -right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            →
          </div>
        {/if}
      </div>
    {/each}
  </div>
  
  <div class="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8 text-center max-w-2xl mx-auto">
    <p class="text-lg text-gray-700">
      From conception to deployment, AI transforms <span class="font-bold text-2xl text-purple-600">every stage</span> of music production
    </p>
  </div>
</section>

<!-- Business Impact -->
<section class="bg-gray-50 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8 text-gray-900">Business Impact of AI in Music</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each businessImpacts as impact}
        <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 text-center transform hover:scale-105 transition-transform">
          <div class="text-5xl mb-4">{impact.icon}</div>
          <h3 class="font-bold text-lg mb-2 text-gray-900">{impact.title}</h3>
          <p class="text-2xl font-bold text-blue-600 mb-1">{impact.metric}</p>
          <p class="text-sm text-gray-600">{impact.description}</p>
        </div>
      {/each}
    </div>
    
    <div class="mt-12 bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8 text-center">
      <h3 class="text-2xl font-bold text-gray-900 mb-4">ROI of AI Music Technology</h3>
      <p class="text-lg text-gray-700">
        Companies implementing AI in music see an average <span class="font-bold text-2xl text-green-600">250% ROI</span> within the first year
      </p>
    </div>
  </div>
</section>

<!-- Related Use Cases -->
<section class="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8 text-center text-white">Related AI Use Cases</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each useCaseLinks as useCase}
        <a href={useCase.url} class="bg-white/90 hover:bg-white rounded-xl p-6 shadow-lg transition-all duration-300 transform hover:scale-105 block">
          <div class="text-4xl mb-3 text-center">{useCase.icon}</div>
          <div class="text-lg font-semibold text-gray-800 text-center">{useCase.name}</div>
        </a>
      {/each}
    </div>
    
    <p class="text-center text-white mt-8 text-lg">
      <span class="text-white">Discover how AI is transforming content creation, recommendation, and analysis across Disney</span>
    </p>
  </div>
</section>

<!-- AI Music Technology Demo -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-4 flex items-center justify-center">
        <span class="mr-3">🎛️</span>
        AI Music Production Assistant
      </h2>
      <p class="text-xl mb-8 text-indigo-100">
        Experience how AI can assist with music composition and production
      </p>
      
      <div class="bg-white/20 backdrop-blur rounded-2xl p-6 mb-8">
        <div class="mb-4">
          <label class="block text-sm font-medium mb-2 text-white">Select AI Application:</label>
          <select bind:value={selectedCategory} class="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-4 focus:ring-indigo-300">
            <option value="all">All Applications</option>
            <option value="composition">AI Composition</option>
            <option value="mixing">Automated Mixing</option>
            <option value="recommendations">Smart Recommendations</option>
            <option value="analysis">Audio Analysis</option>
          </select>
        </div>
        <input
          type="text"
          bind:value={aiSearchQuery}
          placeholder="Describe your music production needs..."
          class="w-full px-6 py-4 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-indigo-300 mb-4"
        />
        <button class="bg-white text-indigo-600 px-8 py-3 rounded-full font-bold hover:bg-indigo-50 transition-colors">
          <span class="text-indigo-600">Generate AI Solution 🚀</span>
        </button>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div class="bg-white/10 rounded-lg p-4">
          <p class="font-semibold mb-1 text-white">Composition AI</p>
          <p class="text-indigo-100">Generate melodies, harmonies, rhythms</p>
        </div>
        <div class="bg-white/10 rounded-lg p-4">
          <p class="font-semibold mb-1 text-white">Production AI</p>
          <p class="text-indigo-100">Automated mixing, mastering, effects</p>
        </div>
        <div class="bg-white/10 rounded-lg p-4">
          <p class="font-semibold mb-1 text-white">Personalization AI</p>
          <p class="text-indigo-100">Audience analysis, recommendations</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Call to Action -->
<section class="bg-gradient-to-b from-blue-50 to-white py-16">
  <div class="container mx-auto px-4 text-center">
    <h2 class="text-3xl font-bold mb-4 text-gray-900">Transform Your Music Production with AI</h2>
    <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
      Join the revolution in AI-powered music creation and discover new possibilities for your content
    </p>
    <div class="flex flex-wrap justify-center gap-4">
      <a href="/use-cases" class="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-colors text-lg">
        Explore AI Use Cases
      </a>
      <a href="/disney" class="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors text-lg">
        Disney AI Hub
      </a>
    </div>
    
    <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      <div class="bg-white rounded-lg p-6 shadow-md">
        <h3 class="font-bold text-lg mb-2 text-gray-900">Get Started</h3>
        <p class="text-gray-600 text-sm">Learn about AI implementation in music production</p>
      </div>
      <div class="bg-white rounded-lg p-6 shadow-md">
        <h3 class="font-bold text-lg mb-2 text-gray-900">See Examples</h3>
        <p class="text-gray-600 text-sm">Browse real AI use cases in entertainment</p>
      </div>
      <div class="bg-white rounded-lg p-6 shadow-md">
        <h3 class="font-bold text-lg mb-2 text-gray-900">Connect</h3>
        <p class="text-gray-600 text-sm">Join our community of AI music innovators</p>
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes float {
    0%, 100% { transform: translateY(0px) translateX(0px); }
    25% { transform: translateY(-30px) translateX(10px); }
    50% { transform: translateY(-20px) translateX(-10px); }
    75% { transform: translateY(-40px) translateX(5px); }
  }
  
  .animate-float {
    animation: float 8s ease-in-out infinite;
  }
  
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .animate-fade-in {
    animation: fade-in 1s ease-out;
  }
</style>