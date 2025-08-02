<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  
  let isMobileMenuOpen = false;
  
  const divisions = [
    { name: 'Disney Entertainment', href: '/disney/entertainment', icon: '🎬' },
    { name: 'ESPN', href: '/disney/espn', icon: '⚽' },
    { name: 'Disney Experiences', href: '/disney/experiences', icon: '🏰' }
  ];
  
  const quickLinks = [
    { name: 'Movies', href: '/disney/movies' },
    { name: 'TV Shows', href: '/disney/tv' },
    { name: 'Parks', href: '/disney/parks' },
    { name: 'Games', href: '/disney/games' },
    { name: 'Music', href: '/disney/music' },
    { name: 'Store', href: '/disney/store' }
  ];
</script>

<div class="min-h-screen bg-gradient-to-b from-blue-50 to-white">
  <!-- Disney Header -->
  <header class="bg-white shadow-sm border-b border-blue-100">
    <nav class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Disney Logo/Brand -->
        <div class="flex items-center space-x-8">
          <a href="/disney" class="flex items-center space-x-2">
            <span class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Disney</span>
            <span class="text-sm text-gray-600">AI Hub</span>
          </a>
          
          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-6">
            {#each divisions as division}
              <a href={division.href} 
                 class="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                <span>{division.icon}</span>
                <span class="font-medium">{division.name}</span>
              </a>
            {/each}
          </div>
        </div>
        
        <!-- Quick Links -->
        <div class="hidden md:flex items-center space-x-4">
          {#each quickLinks as link}
            <a href={link.href} 
               class="text-sm text-gray-600 hover:text-blue-600 transition-colors">
              {link.name}
            </a>
          {/each}
        </div>
        
        <!-- Mobile Menu Button -->
        <button
          on:click={() => isMobileMenuOpen = !isMobileMenuOpen}
          class="md:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {#if isMobileMenuOpen}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            {:else}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            {/if}
          </svg>
        </button>
      </div>
      
      <!-- Mobile Menu -->
      {#if isMobileMenuOpen}
        <div class="md:hidden py-4 border-t border-gray-100">
          <div class="space-y-2">
            {#each divisions as division}
              <a href={division.href} 
                 class="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg">
                <span>{division.icon}</span>
                <span class="font-medium">{division.name}</span>
              </a>
            {/each}
            <div class="border-t border-gray-100 pt-2 mt-2">
              {#each quickLinks as link}
                <a href={link.href} 
                   class="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 rounded-lg">
                  {link.name}
                </a>
              {/each}
            </div>
          </div>
        </div>
      {/if}
    </nav>
  </header>
  
  <!-- Disney Magic Sparkles Animation -->
  <div class="fixed inset-0 pointer-events-none overflow-hidden">
    <div class="disney-sparkles"></div>
  </div>
  
  <!-- Main Content -->
  <main class="relative z-10">
    <slot />
  </main>
  
  <!-- Disney Footer -->
  <footer class="bg-gradient-to-r from-blue-900 to-purple-900 text-white mt-20">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Disney Entertainment</h3>
          <ul class="space-y-2 text-sm text-blue-100">
            <li><a href="/disney/movies" class="hover:text-white">Movies</a></li>
            <li><a href="/disney/tv" class="hover:text-white">TV Shows</a></li>
            <li><a href="/disney/studios" class="hover:text-white">Studios</a></li>
            <li><a href="/disney/streaming" class="hover:text-white">Disney+</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-4">ESPN</h3>
          <ul class="space-y-2 text-sm text-blue-100">
            <li><a href="/disney/espn/live" class="hover:text-white">Live Sports</a></li>
            <li><a href="/disney/espn/news" class="hover:text-white">Sports News</a></li>
            <li><a href="/disney/espn/plus" class="hover:text-white">ESPN+</a></li>
            <li><a href="/disney/espn/fantasy" class="hover:text-white">Fantasy</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-4">Disney Experiences</h3>
          <ul class="space-y-2 text-sm text-blue-100">
            <li><a href="/disney/parks" class="hover:text-white">Theme Parks</a></li>
            <li><a href="/disney/cruises" class="hover:text-white">Cruise Line</a></li>
            <li><a href="/disney/vacation-club" class="hover:text-white">Vacation Club</a></li>
            <li><a href="/disney/store" class="hover:text-white">Shop Disney</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-4">More Magic</h3>
          <ul class="space-y-2 text-sm text-blue-100">
            <li><a href="/disney/princess" class="hover:text-white">Disney Princess</a></li>
            <li><a href="/disney/pixar" class="hover:text-white">Pixar</a></li>
            <li><a href="/disney/marvel" class="hover:text-white">Marvel</a></li>
            <li><a href="/disney/starwars" class="hover:text-white">Star Wars</a></li>
          </ul>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-blue-800 text-center text-sm text-blue-200">
        <p>© 2024 Disney AI Hub. All Rights Reserved.</p>
        <p class="mt-2">
          <a href="/disney/legal" class="hover:text-white">Legal</a> | 
          <a href="/disney/privacy" class="hover:text-white mx-2">Privacy</a> | 
          <a href="/disney/terms" class="hover:text-white">Terms</a>
        </p>
      </div>
    </div>
  </footer>
</div>

<style>
  @keyframes sparkle {
    0% {
      opacity: 0;
      transform: translateY(0) scale(0);
    }
    50% {
      opacity: 1;
      transform: translateY(-20px) scale(1);
    }
    100% {
      opacity: 0;
      transform: translateY(-40px) scale(0);
    }
  }
  
  .disney-sparkles::before,
  .disney-sparkles::after {
    content: '✨';
    position: absolute;
    animation: sparkle 3s ease-in-out infinite;
    font-size: 20px;
  }
  
  .disney-sparkles::before {
    top: 20%;
    left: 10%;
    animation-delay: 0s;
  }
  
  .disney-sparkles::after {
    top: 60%;
    right: 10%;
    animation-delay: 1.5s;
  }
</style>