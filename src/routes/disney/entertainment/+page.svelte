<script>
  const studios = [
    {
      name: 'Walt Disney Animation Studios',
      logo: '🏰',
      description: 'Home of timeless animated classics',
      recent: ['Wish', 'Encanto', 'Raya and the Last Dragon'],
      color: 'from-blue-500 to-purple-500'
    },
    {
      name: 'Pixar Animation Studios',
      logo: '🎈',
      description: 'Where imagination comes to life',
      recent: ['Elemental', 'Turning Red', 'Lightyear'],
      color: 'from-yellow-400 to-orange-500'
    },
    {
      name: 'Marvel Studios',
      logo: '🦸',
      description: 'The Marvel Cinematic Universe',
      recent: ['The Marvels', 'Guardians Vol. 3', 'Quantumania'],
      color: 'from-red-500 to-red-700'
    },
    {
      name: 'Lucasfilm',
      logo: '⚔️',
      description: 'A galaxy far, far away',
      recent: ['Ahsoka', 'The Mandalorian', 'Indiana Jones 5'],
      color: 'from-gray-700 to-black'
    },
    {
      name: '20th Century Studios',
      logo: '🎬',
      description: 'Iconic films for generations',
      recent: ['Avatar: The Way of Water', 'The Menu', 'Amsterdam'],
      color: 'from-blue-600 to-blue-800'
    },
    {
      name: 'Searchlight Pictures',
      logo: '🔦',
      description: 'Award-winning independent films',
      recent: ['Poor Things', 'The Banshees of Inisherin', 'Nomadland'],
      color: 'from-gray-600 to-gray-800'
    }
  ];
  
  const tvNetworks = [
    { name: 'ABC', description: 'America\'s Broadcasting Company', shows: 52 },
    { name: 'FX', description: 'Fearless storytelling', shows: 38 },
    { name: 'Freeform', description: 'Young adult programming', shows: 24 },
    { name: 'National Geographic', description: 'Explore your world', shows: 45 },
    { name: 'Disney Channel', description: 'Family entertainment', shows: 31 },
    { name: 'Disney Junior', description: 'Preschool programming', shows: 18 }
  ];
  
  const streamingStats = [
    { platform: 'Disney+', subscribers: '150M+', content: '10,000+ titles' },
    { platform: 'Hulu', subscribers: '48M+', content: '70,000+ titles' },
    { platform: 'Bundle', subscribers: '12M+', content: 'Best of both' }
  ];
</script>

<svelte:head>
  <title>Disney Entertainment - AI Hub</title>
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 text-white">
  <div class="absolute inset-0 opacity-20">
    <div class="absolute top-10 left-10 text-8xl animate-pulse">🎬</div>
    <div class="absolute bottom-10 right-10 text-8xl animate-pulse" style="animation-delay: 0.5s">🎭</div>
    <div class="absolute top-1/2 left-1/3 text-6xl animate-pulse" style="animation-delay: 1s">🎪</div>
  </div>
  
  <div class="relative z-10 container mx-auto px-4 py-20">
    <h1 class="text-5xl md:text-6xl font-bold mb-6">Disney Entertainment</h1>
    <p class="text-xl md:text-2xl mb-8 text-purple-100">
      Where storytelling magic happens across film, television, and streaming
    </p>
    <div class="flex flex-wrap gap-4">
      <button class="bg-white text-purple-900 px-6 py-3 rounded-full font-semibold hover:bg-purple-100 transition-colors">
        Explore Movies
      </button>
      <button class="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-900 transition-colors">
        TV Shows
      </button>
    </div>
  </div>
</section>

<!-- Studios Grid -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold mb-12">Our Legendary Studios</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each studios as studio}
      <div class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
        <div class="absolute inset-0 bg-gradient-to-br {studio.color} opacity-10 group-hover:opacity-20 transition-opacity"></div>
        <div class="relative p-6">
          <div class="flex items-center mb-4">
            <span class="text-4xl mr-3">{studio.logo}</span>
            <div>
              <h3 class="text-xl font-bold">{studio.name}</h3>
              <p class="text-sm text-gray-600">{studio.description}</p>
            </div>
          </div>
          <div class="mt-4">
            <h4 class="text-sm font-semibold text-gray-700 mb-2">Recent Releases:</h4>
            <ul class="space-y-1">
              {#each studio.recent as title}
                <li class="text-sm text-gray-600 flex items-center">
                  <span class="w-1.5 h-1.5 bg-gradient-to-r {studio.color} rounded-full mr-2"></span>
                  {title}
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- TV Networks -->
<section class="bg-gray-50 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-12">Television Networks</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each tvNetworks as network}
        <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
          <h3 class="text-xl font-bold mb-2">{network.name}</h3>
          <p class="text-gray-600 mb-4">{network.description}</p>
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-500">{network.shows} Active Shows</span>
            <button class="text-purple-600 hover:text-purple-700 font-semibold text-sm">
              View Shows →
            </button>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Streaming Platforms -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold mb-12">Streaming Excellence</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    {#each streamingStats as platform}
      <div class="text-center">
        <div class="bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-2xl p-8 mb-4">
          <h3 class="text-2xl font-bold mb-2">{platform.platform}</h3>
          <div class="text-4xl font-bold mb-2">{platform.subscribers}</div>
          <div class="text-sm opacity-90">Subscribers</div>
        </div>
        <p class="text-gray-600">{platform.content}</p>
      </div>
    {/each}
  </div>
</section>

<!-- AI Integration Section -->
<section class="bg-gradient-to-r from-purple-100 to-pink-100 py-16">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-6">AI-Powered Entertainment</h2>
      <p class="text-lg text-gray-700 mb-8">
        Discover how artificial intelligence enhances every aspect of Disney Entertainment
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        <div class="bg-white rounded-xl p-6 shadow-md">
          <h3 class="font-bold text-lg mb-3 flex items-center">
            <span class="text-2xl mr-2">🎨</span>
            Content Creation
          </h3>
          <p class="text-gray-600">AI-assisted animation, visual effects, and storytelling tools that bring imagination to life faster than ever.</p>
        </div>
        <div class="bg-white rounded-xl p-6 shadow-md">
          <h3 class="font-bold text-lg mb-3 flex items-center">
            <span class="text-2xl mr-2">🎯</span>
            Personalization
          </h3>
          <p class="text-gray-600">Smart recommendations that help viewers discover their next favorite movie or show across all platforms.</p>
        </div>
        <div class="bg-white rounded-xl p-6 shadow-md">
          <h3 class="font-bold text-lg mb-3 flex items-center">
            <span class="text-2xl mr-2">📊</span>
            Analytics
          </h3>
          <p class="text-gray-600">Data-driven insights that help create content audiences love while optimizing production workflows.</p>
        </div>
        <div class="bg-white rounded-xl p-6 shadow-md">
          <h3 class="font-bold text-lg mb-3 flex items-center">
            <span class="text-2xl mr-2">🌍</span>
            Localization
          </h3>
          <p class="text-gray-600">AI-powered dubbing and subtitling that brings Disney magic to audiences worldwide in their language.</p>
        </div>
      </div>
    </div>
  </div>
</section>