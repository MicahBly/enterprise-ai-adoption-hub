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
    
    <!-- Traditional Portfolio Link -->
    <div class="mb-8">
      <a href="https://micahbly.com" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-orange-300 hover:text-orange-400 transition-colors duration-200 group">
        <span class="text-sm font-medium">Looking for traditional portfolio?</span>
        <svg class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </a>
    </div>
    
    <div class="inline-flex items-center px-6 py-3 bg-orange-500/20 backdrop-blur rounded-full border border-orange-500/30 mb-12">
      <span class="text-orange-400 mr-2">⭐</span>
      <span class="text-white font-medium">Enterprise AI Adoption Hub Prototypes</span>
      <span class="text-orange-400 ml-2">⭐</span>
    </div>
    
    <!-- Navigation Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
      <!-- Disney Card -->
      <a href="/disney" class="group block h-full">
        <div class="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-8 rounded-2xl shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 hover:scale-105 hover:rotate-1 h-full flex flex-col">
          <div class="text-6xl mb-4 group-hover:animate-bounce">🏰</div>
          <h3 class="text-2xl font-bold mb-3 text-white">Disney AI Hub</h3>
          <p class="text-blue-100 mb-4 flex-grow">
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
      <a href="/fox" class="group block h-full">
        <div class="bg-gradient-to-br from-blue-800 via-blue-900 to-black p-8 rounded-2xl shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 hover:scale-105 hover:-rotate-1 h-full flex flex-col">
          <div class="text-6xl mb-4 group-hover:animate-bounce">📺</div>
          <h3 class="text-2xl font-bold mb-3 text-white">Fox Corporation</h3>
          <p class="text-blue-100 mb-4 flex-grow">
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
    
    <!-- Open Source Projects Section -->
    <div class="inline-flex items-center px-6 py-3 bg-orange-500/20 backdrop-blur rounded-full border border-orange-500/30 mb-8">
      <span class="text-orange-400 mr-2">⭐</span>
      <span class="text-white font-medium">Open Source Projects</span>
      <span class="text-orange-400 ml-2">⭐</span>
    </div>
    
    <!-- Open Source Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <!-- Morphbox Card -->
      <a href="https://iu.dev/morphbox" target="_blank" rel="noopener noreferrer" class="group block h-full">
        <div class="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 p-8 rounded-2xl shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 hover:scale-105 hover:rotate-1 h-full flex flex-col">
          <div class="text-6xl mb-4 group-hover:animate-bounce">🧊</div>
          <h3 class="text-2xl font-bold mb-3 text-white">Morphbox</h3>
          <p class="text-green-100 mb-4 flex-grow">
            Docker-based AI sandbox with Claude integration for secure development environments and rapid prototyping
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="bg-white/20 px-3 py-1 rounded-full text-sm">Open Source</span>
            <span class="bg-white/20 px-3 py-1 rounded-full text-sm">Docker</span>
            <span class="bg-white/20 px-3 py-1 rounded-full text-sm">AI-Powered</span>
          </div>
          <div class="text-white font-semibold group-hover:text-yellow-300 transition-colors">
            Explore Morphbox →
          </div>
        </div>
      </a>
      
      <!-- SimplyCodes Card -->
      <a href="https://github.com/MicahBly/Simplycodes-Prototype" target="_blank" rel="noopener noreferrer" class="group block h-full">
        <div class="bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-700 p-8 rounded-2xl shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 hover:scale-105 hover:-rotate-1 h-full flex flex-col">
          <div class="text-6xl mb-4 group-hover:animate-bounce">🛍️</div>
          <h3 class="text-2xl font-bold mb-3 text-white">SimplyCodes AI</h3>
          <p class="text-purple-100 mb-4 flex-grow">
            Privacy-first browser extension using local AI to find and apply the best coupon codes while shopping online
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="bg-white/20 px-3 py-1 rounded-full text-sm">Privacy-First</span>
            <span class="bg-white/20 px-3 py-1 rounded-full text-sm">Local AI</span>
            <span class="bg-white/20 px-3 py-1 rounded-full text-sm">React</span>
          </div>
          <div class="text-white font-semibold group-hover:text-yellow-300 transition-colors">
            View on GitHub →
          </div>
        </div>
      </a>
    </div>
    
    <!-- SaaS Projects Section -->
    <div class="inline-flex items-center px-6 py-3 bg-orange-500/20 backdrop-blur rounded-full border border-orange-500/30 mb-8 mt-12">
      <span class="text-orange-400 mr-2">⭐</span>
      <span class="text-white font-medium">SaaS Projects</span>
      <span class="text-orange-400 ml-2">⭐</span>
    </div>
    
    <!-- SaaS Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <!-- IU.dev Card -->
      <a href="https://iu.dev" target="_blank" rel="noopener noreferrer" class="group block h-full">
        <div class="bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 p-8 rounded-2xl shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 hover:scale-105 hover:rotate-1 h-full flex flex-col">
          <div class="text-6xl mb-4 group-hover:animate-bounce">🚀</div>
          <h3 class="text-2xl font-bold mb-3 text-white">IU.dev</h3>
          <p class="text-amber-100 mb-4 flex-grow">
            GPU-powered API infrastructure for AI teams with cost-effective video/image processing and MCP integration
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="bg-white/20 px-3 py-1 rounded-full text-sm">GPU Compute</span>
            <span class="bg-white/20 px-3 py-1 rounded-full text-sm">$0.01 4K Images</span>
            <span class="bg-white/20 px-3 py-1 rounded-full text-sm">MCP Server</span>
          </div>
          <div class="text-white font-semibold group-hover:text-yellow-300 transition-colors">
            Explore IU.dev →
          </div>
        </div>
      </a>
      
      <!-- AutoNewsletter Card -->
      <a href="https://autonewsletter.io" target="_blank" rel="noopener noreferrer" class="group block h-full">
        <div class="bg-gradient-to-br from-sky-600 via-blue-600 to-indigo-600 p-8 rounded-2xl shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 hover:scale-105 hover:-rotate-1 h-full flex flex-col">
          <div class="text-6xl mb-4 group-hover:animate-bounce">📧</div>
          <h3 class="text-2xl font-bold mb-3 text-white">AutoNewsletter</h3>
          <p class="text-sky-100 mb-4 flex-grow">
            AI-powered newsletter automation that connects 30+ sources to create and send professional emails automatically
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="bg-white/20 px-3 py-1 rounded-full text-sm">Free Forever</span>
            <span class="bg-white/20 px-3 py-1 rounded-full text-sm">AI-Powered</span>
            <span class="bg-white/20 px-3 py-1 rounded-full text-sm">30+ Integrations</span>
          </div>
          <div class="text-white font-semibold group-hover:text-yellow-300 transition-colors">
            Start Free →
          </div>
        </div>
      </a>
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