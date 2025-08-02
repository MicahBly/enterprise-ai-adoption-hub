<script>
  import { onMount } from 'svelte';
  
  const divisions = [
    {
      id: 'entertainment',
      name: 'Disney Entertainment',
      icon: '🎬',
      color: 'from-purple-500 to-pink-500',
      description: 'Film, television, and streaming magic',
      subsidiaries: ['Walt Disney Studios', 'Pixar', 'Marvel', 'Lucasfilm', 'Disney+', 'ABC', 'FX'],
      href: '/disney/entertainment'
    },
    {
      id: 'espn',
      name: 'ESPN',
      icon: '⚽',
      color: 'from-red-500 to-orange-500',
      description: 'The worldwide leader in sports',
      subsidiaries: ['ESPN Networks', 'ESPN+', 'Sports Production', 'Fantasy Sports'],
      href: '/disney/espn'
    },
    {
      id: 'experiences',
      name: 'Disney Experiences',
      icon: '🏰',
      color: 'from-blue-500 to-purple-500',
      description: 'Parks, resorts, cruises, and products',
      subsidiaries: ['Theme Parks', 'Disney Cruise Line', 'Vacation Club', 'Consumer Products'],
      href: '/disney/experiences'
    }
  ];
  
  const featuredContent = [
    { title: 'Latest Movies', icon: '🎥', count: '24', href: '/disney/movies' },
    { title: 'TV Shows', icon: '📺', count: '156', href: '/disney/tv' },
    { title: 'Theme Parks', icon: '🎢', count: '12', href: '/disney/parks' },
    { title: 'Games', icon: '🎮', count: '48', href: '/disney/games' },
    { title: 'Music', icon: '🎵', count: '1000+', href: '/disney/music' },
    { title: 'Shop', icon: '🛍️', count: 'New', href: '/disney/store' }
  ];
  
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
  <title>Disney AI Hub - Where Magic Meets Innovation</title>
</svelte:head>

<!-- Hero Section with Castle Background -->
<section class="relative overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-20"></div>
  
  <!-- Animated Castle Silhouette -->
  <div class="absolute bottom-0 left-0 right-0 h-64 opacity-10">
    <svg viewBox="0 0 1200 300" class="w-full h-full">
      <path d="M0 300 L0 200 Q100 150 200 200 L200 150 L250 100 L300 150 L300 200 Q400 150 500 200 L500 120 L600 50 L700 120 L700 200 Q800 150 900 200 L900 150 L950 100 L1000 150 L1000 200 Q1100 150 1200 200 L1200 300 Z" 
            fill="currentColor" class="text-blue-900"/>
    </svg>
  </div>
  
  <div class="relative z-10 container mx-auto px-4 py-20">
    <div class="text-center max-w-4xl mx-auto">
      <h1 class="text-5xl md:text-7xl font-bold mb-6">
        <span class="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Disney AI Hub
        </span>
      </h1>
      <p class="text-2xl text-gray-700 mb-8">Where Magic Meets Innovation</p>
      <p class="text-lg text-gray-600 mb-12">
        Explore how artificial intelligence is transforming the Disney experience across entertainment, sports, and magical experiences worldwide.
      </p>
      
      <!-- Magic Wand Animation -->
      <div class="inline-block relative">
        <button class="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
          Discover the Magic ✨
        </button>
      </div>
    </div>
  </div>
</section>

<!-- Divisions Grid -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold text-center mb-12">Our Three Magical Divisions</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    {#each divisions as division}
      <a href={division.href} 
         class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
        <div class="absolute inset-0 bg-gradient-to-br {division.color} opacity-90"></div>
        <div class="relative z-10 p-8 text-white">
          <div class="text-5xl mb-4">{division.icon}</div>
          <h3 class="text-2xl font-bold mb-2">{division.name}</h3>
          <p class="text-white/90 mb-4">{division.description}</p>
          <div class="space-y-1">
            {#each division.subsidiaries.slice(0, 4) as subsidiary}
              <div class="text-sm text-white/80">• {subsidiary}</div>
            {/each}
            {#if division.subsidiaries.length > 4}
              <div class="text-sm text-white/80 italic">...and more</div>
            {/if}
          </div>
          <div class="mt-6 flex items-center text-white font-semibold">
            Explore Division
            <svg class="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
      </a>
    {/each}
  </div>
</section>

<!-- Featured Content -->
<section class="bg-gradient-to-b from-blue-50 to-white py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-12">Explore Disney Magic</h2>
    
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {#each featuredContent as feature}
        <a href={feature.href}
           class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center group hover:scale-105">
          <div class="text-4xl mb-2 group-hover:animate-bounce">{feature.icon}</div>
          <h3 class="font-semibold text-gray-800">{feature.title}</h3>
          <p class="text-sm text-gray-600">{feature.count}</p>
        </a>
      {/each}
    </div>
  </div>
</section>

<!-- Interactive Magic Section -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 md:p-12">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 class="text-3xl font-bold mb-4">AI-Powered Magic</h2>
        <p class="text-gray-700 mb-6">
          Discover how artificial intelligence enhances every Disney experience, from personalized movie recommendations to optimized park experiences and real-time sports analytics.
        </p>
        <ul class="space-y-3">
          <li class="flex items-center space-x-2">
            <span class="text-2xl">🎭</span>
            <span>Personalized content recommendations</span>
          </li>
          <li class="flex items-center space-x-2">
            <span class="text-2xl">🎪</span>
            <span>Smart park navigation and wait times</span>
          </li>
          <li class="flex items-center space-x-2">
            <span class="text-2xl">📊</span>
            <span>Advanced sports analytics and predictions</span>
          </li>
          <li class="flex items-center space-x-2">
            <span class="text-2xl">🎨</span>
            <span>AI-assisted animation and storytelling</span>
          </li>
        </ul>
      </div>
      <div class="relative h-64 md:h-96">
        <!-- Mickey Mouse Ears Animation -->
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="relative w-48 h-48">
            <div class="absolute top-0 left-0 w-20 h-20 bg-black rounded-full animate-pulse"></div>
            <div class="absolute top-0 right-0 w-20 h-20 bg-black rounded-full animate-pulse" style="animation-delay: 0.5s"></div>
            <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-black rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Quick Stats -->
<section class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <div class="text-4xl font-bold mb-2">100M+</div>
        <div class="text-blue-100">Disney+ Subscribers</div>
      </div>
      <div>
        <div class="text-4xl font-bold mb-2">12</div>
        <div class="text-blue-100">Theme Parks Worldwide</div>
      </div>
      <div>
        <div class="text-4xl font-bold mb-2">500+</div>
        <div class="text-blue-100">Films Produced</div>
      </div>
      <div>
        <div class="text-4xl font-bold mb-2">24/7</div>
        <div class="text-blue-100">Sports Coverage</div>
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