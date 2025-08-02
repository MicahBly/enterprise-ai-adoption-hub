<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  
  const divisions = [
    {
      id: 'entertainment',
      name: 'Disney Entertainment',
      icon: '🎬',
      color: 'from-purple-500 to-pink-500',
      description: 'AI-powered content creation and streaming',
      aiUseCount: 15,
      efficiency: '+32%'
    },
    {
      id: 'espn',
      name: 'ESPN',
      icon: '⚽',
      color: 'from-red-500 to-orange-500',
      description: 'Data-driven sports analytics and personalization',
      aiUseCount: 8,
      efficiency: '+28%'
    },
    {
      id: 'experiences',
      name: 'Disney Experiences',
      icon: '🏰',
      color: 'from-blue-500 to-purple-500',
      description: 'Smart parks and guest experience optimization',
      aiUseCount: 12,
      efficiency: '+45%'
    }
  ];
  
  const featuredUseCases = [
    {
      title: 'AI Animation Assistant',
      division: 'Entertainment',
      status: 'Deployed',
      impact: 'Reduced animation time by 40%',
      icon: '🎨'
    },
    {
      title: 'Guest Flow Optimization',
      division: 'Experiences',
      status: 'Testing',
      impact: '25% reduction in wait times',
      icon: '🚶'
    },
    {
      title: 'Personalized Content Recommendations',
      division: 'Entertainment',
      status: 'Deployed',
      impact: '35% increase in engagement',
      icon: '🎯'
    },
    {
      title: 'Real-time Sports Analytics',
      division: 'ESPN',
      status: 'Deployed',
      impact: '50ms prediction latency',
      icon: '📊'
    }
  ];
  
  const stats = {
    totalUseCases: 35,
    inProduction: 18,
    averageROI: 312,
    employeesImpacted: 4500
  };
  
  let animateStats = false;
  
  onMount(() => {
    animateStats = true;
  });
</script>

<svelte:head>
  <title>Disney AI Adoption Hub - Transforming Magic with Intelligence</title>
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white">
  <div class="absolute inset-0 opacity-10">
    <div class="absolute bottom-0 left-0 right-0 h-64">
      <svg viewBox="0 0 1200 300" class="w-full h-full">
        <path d="M0 300 L0 200 Q100 150 200 200 L200 150 L250 100 L300 150 L300 200 Q400 150 500 200 L500 120 L600 50 L700 120 L700 200 Q800 150 900 200 L900 150 L950 100 L1000 150 L1000 200 Q1100 150 1200 200 L1200 300 Z" 
              fill="currentColor" class="text-white/20"/>
      </svg>
    </div>
  </div>
  
  <div class="relative z-10 container mx-auto px-4 py-20">
    <div class="text-center max-w-4xl mx-auto">
      <h1 class="text-5xl md:text-7xl font-bold mb-6" in:fade={{ duration: 600 }}>
        Disney AI Adoption Hub
      </h1>
      <p class="text-2xl text-blue-100 mb-8" in:fly={{ y: 20, delay: 200, duration: 600 }}>
        Transforming Magic with Intelligence
      </p>
      <p class="text-lg text-gray-200 mb-12" in:fly={{ y: 20, delay: 400, duration: 600 }}>
        Empowering Disney's global workforce with AI-driven innovation across entertainment, 
        sports, and guest experiences. Track our journey to become the most technologically 
        advanced entertainment company in the world.
      </p>
      
      <!-- Key Stats -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8" in:fly={{ y: 20, delay: 600, duration: 600 }}>
        <div class="bg-white/10 backdrop-blur rounded-lg p-4">
          <div class="text-3xl font-bold text-yellow-300">{animateStats ? stats.totalUseCases : 0}</div>
          <div class="text-sm text-gray-200">AI Use Cases</div>
        </div>
        <div class="bg-white/10 backdrop-blur rounded-lg p-4">
          <div class="text-3xl font-bold text-green-300">{animateStats ? stats.inProduction : 0}</div>
          <div class="text-sm text-gray-200">In Production</div>
        </div>
        <div class="bg-white/10 backdrop-blur rounded-lg p-4">
          <div class="text-3xl font-bold text-blue-300">{animateStats ? stats.averageROI : 0}%</div>
          <div class="text-sm text-gray-200">Average ROI</div>
        </div>
        <div class="bg-white/10 backdrop-blur rounded-lg p-4">
          <div class="text-3xl font-bold text-purple-300">{animateStats ? stats.employeesImpacted.toLocaleString() : 0}</div>
          <div class="text-sm text-gray-200">Employees Impacted</div>
        </div>
      </div>
      
      <div class="flex flex-wrap gap-4 justify-center" in:fly={{ y: 20, delay: 800, duration: 600 }}>
        <a href="/disney/use-cases" class="bg-white text-purple-900 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
          Explore Use Cases
        </a>
        <a href="/disney/experiments" class="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300">
          View Experiments
        </a>
      </div>
    </div>
  </div>
</section>

<!-- AI Adoption by Division -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold text-center mb-12 text-gray-900">AI Adoption Across Disney</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    {#each divisions as division}
      <div class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
        <div class="bg-gradient-to-br {division.color} p-6 text-white">
          <div class="flex items-center justify-between mb-4">
            <span class="text-5xl">{division.icon}</span>
            <span class="text-2xl font-bold">{division.efficiency}</span>
          </div>
          <h3 class="text-2xl font-bold mb-2">{division.name}</h3>
        </div>
        <div class="p-6">
          <p class="text-gray-800 mb-4">{division.description}</p>
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="bg-gray-50 rounded-lg p-3">
              <div class="text-2xl font-bold text-purple-600">{division.aiUseCount}</div>
              <div class="text-sm text-gray-600">AI Use Cases</div>
            </div>
            <div class="bg-gray-50 rounded-lg p-3">
              <div class="text-2xl font-bold text-green-600">{division.efficiency}</div>
              <div class="text-sm text-gray-600">Efficiency Gain</div>
            </div>
          </div>
          <a href="/disney/use-cases?division={division.id}" class="text-purple-600 hover:text-purple-700 font-semibold flex items-center">
            View AI Initiatives
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- Featured Use Cases -->
<section class="bg-gradient-to-b from-blue-50 to-white py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-12 text-gray-900">Featured AI Use Cases</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each featuredUseCases as useCase}
        <div class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6">
          <div class="flex items-center justify-between mb-4">
            <span class="text-4xl">{useCase.icon}</span>
            <span class="px-3 py-1 rounded-full text-xs font-semibold
                         {useCase.status === 'Deployed' ? 'bg-green-100 text-green-800' : 
                          useCase.status === 'Testing' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-blue-100 text-blue-800'}">
              {useCase.status}
            </span>
          </div>
          <h3 class="font-bold text-lg mb-2 text-gray-900">{useCase.title}</h3>
          <p class="text-sm text-gray-600 mb-3">{useCase.division}</p>
          <p class="text-sm text-purple-600 font-semibold">{useCase.impact}</p>
        </div>
      {/each}
    </div>
    
    <div class="text-center mt-8">
      <a href="/disney/use-cases" class="text-purple-600 hover:text-purple-700 font-semibold inline-flex items-center">
        View All Use Cases
        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  </div>
</section>

<!-- AI Strategy Overview -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 md:p-12">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 class="text-3xl font-bold mb-4 text-gray-900">Disney's AI Strategy</h2>
        <p class="text-gray-900 mb-6">
          Our comprehensive AI initiative is transforming how we create content, 
          engage guests, and deliver sports experiences. With the Office of Technology 
          Enablement leading the charge, we're building a responsible AI future.
        </p>
        <ul class="space-y-3">
          <li class="flex items-start space-x-3">
            <span class="text-2xl">🎬</span>
            <div>
              <strong class="text-gray-900">Content Creation</strong>
              <p class="text-sm text-gray-600">AI-powered animation and visual effects</p>
            </div>
          </li>
          <li class="flex items-start space-x-3">
            <span class="text-2xl">🎢</span>
            <div>
              <strong class="text-gray-900">Guest Experience</strong>
              <p class="text-sm text-gray-600">Smart crowd management and personalization</p>
            </div>
          </li>
          <li class="flex items-start space-x-3">
            <span class="text-2xl">📊</span>
            <div>
              <strong class="text-gray-900">Data Analytics</strong>
              <p class="text-sm text-gray-600">Real-time insights across all divisions</p>
            </div>
          </li>
          <li class="flex items-start space-x-3">
            <span class="text-2xl">🔒</span>
            <div>
              <strong class="text-gray-900">Responsible AI</strong>
              <p class="text-sm text-gray-600">Ethical implementation and governance</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="relative h-64 md:h-96">
        <!-- AI Network Visualization -->
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="relative w-64 h-64">
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
              AI
            </div>
            <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-400 rounded-full animate-pulse"></div>
            <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-pink-400 rounded-full animate-pulse" style="animation-delay: 0.5s"></div>
            <div class="absolute left-0 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-green-400 rounded-full animate-pulse" style="animation-delay: 1s"></div>
            <div class="absolute right-0 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-yellow-400 rounded-full animate-pulse" style="animation-delay: 1.5s"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Quick Links -->
<section class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-8">Explore Our AI Journey</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      <a href="/disney/use-cases" class="bg-white/10 backdrop-blur rounded-lg p-6 hover:bg-white/20 transition-colors text-center">
        <div class="text-4xl mb-2">📋</div>
        <h3 class="font-bold text-white">Use Cases</h3>
        <p class="text-sm text-white">35 Active Projects</p>
      </a>
      <a href="/disney/adoption-matrix" class="bg-white/10 backdrop-blur rounded-lg p-6 hover:bg-white/20 transition-colors text-center">
        <div class="text-4xl mb-2">📊</div>
        <h3 class="font-bold text-white">Adoption Matrix</h3>
        <p class="text-sm text-white">Track Progress</p>
      </a>
      <a href="/disney/experiments" class="bg-white/10 backdrop-blur rounded-lg p-6 hover:bg-white/20 transition-colors text-center">
        <div class="text-4xl mb-2">🧪</div>
        <h3 class="font-bold text-white">Experiments</h3>
        <p class="text-sm text-white">Innovation Labs</p>
      </a>
      <a href="/disney/efficiency" class="bg-white/10 backdrop-blur rounded-lg p-6 hover:bg-white/20 transition-colors text-center">
        <div class="text-4xl mb-2">📈</div>
        <h3 class="font-bold text-white">Efficiency</h3>
        <p class="text-sm text-white">ROI Dashboard</p>
      </a>
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