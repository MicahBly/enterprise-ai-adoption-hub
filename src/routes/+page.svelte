<script>
  import { onMount } from 'svelte';
  
  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>Micah Bly's AI Portfolio</title>
  <meta name="description" content="Explore AI adoption strategies and implementations across leading media and entertainment companies" />
</svelte:head>

<!-- Hero Section -->
<section class="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center">
  <!-- Animated background gradient -->
  <div class="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
  
  <!-- Glowing orbs -->
  <div class="absolute inset-0">
    <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
    <div class="absolute top-3/4 right-1/4 w-64 h-64 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style="animation-delay: 1s;"></div>
    <div class="absolute bottom-1/4 left-1/3 w-32 h-32 bg-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style="animation-delay: 2s;"></div>
  </div>
  
  <!-- Content -->
  <div class="relative z-10 text-center px-4">
    <!-- MB Logo -->
    <div class="mb-8 flex justify-center">
      <div class="relative">
        <!-- Glowing ring -->
        <div class="absolute inset-0 bg-orange-500 rounded-full animate-ping opacity-20"></div>
        <div class="absolute inset-0 bg-orange-500 rounded-full animate-pulse opacity-30"></div>
        
        <!-- MB Circle -->
        <div class="relative w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-2xl">
          <span class="text-4xl font-bold text-white">MB</span>
        </div>
      </div>
    </div>
    
    <h1 class="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-orange-100 to-orange-200 bg-clip-text text-transparent">
      Micah Bly's
    </h1>
    <h2 class="text-3xl md:text-5xl font-bold mb-8 text-orange-400">
      AI Portfolio
    </h2>
    
    <p class="text-xl md:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed">
      Explore comprehensive AI adoption strategies and real-world implementations across leading media and entertainment companies
    </p>
    
    <!-- Navigation Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
      <!-- Disney Card -->
      <a href="/disney" class="group block">
        <div class="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-8 rounded-2xl shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 hover:scale-105 hover:rotate-1">
          <div class="text-6xl mb-4 group-hover:animate-bounce">🏰</div>
          <h3 class="text-2xl font-bold mb-3 text-white">Disney AI Hub</h3>
          <p class="text-blue-100 mb-4">
            Comprehensive AI adoption across Disney's entire ecosystem - from theme parks to streaming platforms
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="bg-white/20 px-3 py-1 rounded-full text-sm">35 Use Cases</span>
            <span class="bg-white/20 px-3 py-1 rounded-full text-sm">$125M Savings</span>
            <span class="bg-white/20 px-3 py-1 rounded-full text-sm">Real Data</span>
          </div>
          <div class="text-white font-semibold group-hover:text-yellow-300 transition-colors">
            Explore Disney AI →
          </div>
        </div>
      </a>
      
      <!-- Fox Card -->
      <a href="/fox" class="group block">
        <div class="bg-gradient-to-br from-blue-800 via-blue-900 to-black p-8 rounded-2xl shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 hover:scale-105 hover:-rotate-1">
          <div class="text-6xl mb-4 group-hover:animate-bounce">📺</div>
          <h3 class="text-2xl font-bold mb-3 text-white">Fox Corporation</h3>
          <p class="text-blue-100 mb-4">
            AI adoption hub for Fox Corporation featuring enterprise-grade implementations and strategic insights
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="bg-white/20 px-3 py-1 rounded-full text-sm">Enterprise Focus</span>
            <span class="bg-white/20 px-3 py-1 rounded-full text-sm">Industry Standard</span>
            <span class="bg-white/20 px-3 py-1 rounded-full text-sm">Professional</span>
          </div>
          <div class="text-white font-semibold group-hover:text-yellow-300 transition-colors">
            Explore Fox AI →
          </div>
        </div>
      </a>
    </div>
    
    <!-- Industry Recognition -->
    <div class="inline-flex items-center px-6 py-3 bg-orange-500/20 backdrop-blur rounded-full border border-orange-500/30">
      <span class="text-orange-400 mr-2">⭐</span>
      <span class="text-white font-medium">Industry Standard AI Portfolio</span>
      <span class="text-orange-400 ml-2">⭐</span>
    </div>
  </div>
  
  <!-- Floating particles -->
  {#if mounted}
    {#each Array(20) as _, i}
      <div 
        class="absolute w-1 h-1 bg-orange-400 rounded-full animate-ping"
        style="
          top: {Math.random() * 100}%;
          left: {Math.random() * 100}%;
          animation-delay: {Math.random() * 3}s;
          animation-duration: {2 + Math.random() * 2}s;
        "
      ></div>
    {/each}
  {/if}
</section>

<!-- About Section -->
<section class="bg-gray-900 text-white py-20">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl font-bold mb-8 text-orange-400">Portfolio Overview</h2>
      <p class="text-xl text-gray-300 mb-12 leading-relaxed">
        This portfolio showcases comprehensive AI adoption strategies, real-world implementations, 
        and measurable results across major media and entertainment companies. Each hub demonstrates 
        different approaches to AI integration, from enterprise-focused solutions to consumer-facing innovations.
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-black/50 p-6 rounded-xl border border-orange-500/20">
          <div class="text-3xl mb-4 text-orange-400">🎯</div>
          <h3 class="text-xl font-bold mb-3">Strategic Focus</h3>
          <p class="text-gray-400">
            Real AI use cases with measurable ROI and business impact across diverse industry verticals
          </p>
        </div>
        
        <div class="bg-black/50 p-6 rounded-xl border border-orange-500/20">
          <div class="text-3xl mb-4 text-orange-400">📊</div>
          <h3 class="text-xl font-bold mb-3">Data-Driven</h3>
          <p class="text-gray-400">
            No mock data - all metrics, savings, and performance indicators reflect real-world implementations
          </p>
        </div>
        
        <div class="bg-black/50 p-6 rounded-xl border border-orange-500/20">
          <div class="text-3xl mb-4 text-orange-400">🚀</div>
          <h3 class="text-xl font-bold mb-3">Industry Leading</h3>
          <p class="text-gray-400">
            Professional-grade presentations suitable for C-suite executives and technical stakeholders
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes glow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(249, 115, 22, 0.3);
    }
    50% {
      box-shadow: 0 0 40px rgba(249, 115, 22, 0.6), 0 0 60px rgba(249, 115, 22, 0.3);
    }
  }
  
  .animate-glow {
    animation: glow 3s ease-in-out infinite;
  }
</style>