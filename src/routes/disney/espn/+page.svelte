<script>
  const sportsCategories = [
    { name: 'NFL', icon: '🏈', color: 'from-green-600 to-green-800', live: 3 },
    { name: 'NBA', icon: '🏀', color: 'from-orange-500 to-red-600', live: 5 },
    { name: 'MLB', icon: '⚾', color: 'from-blue-600 to-blue-800', live: 2 },
    { name: 'NHL', icon: '🏒', color: 'from-gray-700 to-black', live: 4 },
    { name: 'Soccer', icon: '⚽', color: 'from-green-500 to-green-700', live: 7 },
    { name: 'College', icon: '🎓', color: 'from-purple-600 to-purple-800', live: 12 }
  ];
  
  const espnPlatforms = [
    {
      name: 'ESPN',
      description: 'The flagship network',
      features: ['Live Sports', '24/7 Coverage', 'SportsCenter', 'Original Shows']
    },
    {
      name: 'ESPN+',
      description: 'Premium streaming service',
      features: ['Exclusive Events', 'UFC Fights', 'Original Series', '30 for 30']
    },
    {
      name: 'ESPN.com',
      description: 'Digital sports leader',
      features: ['Breaking News', 'Live Scores', 'Fantasy Sports', 'Analytics']
    },
    {
      name: 'ESPN App',
      description: 'Sports in your pocket',
      features: ['Personalized Feed', 'Push Alerts', 'Watch Live', 'Highlights']
    }
  ];
  
  const liveGames = [
    { sport: 'NBA', teams: 'Lakers vs Celtics', time: 'LIVE - 3rd Quarter', score: '78-82' },
    { sport: 'NFL', teams: 'Chiefs vs Bills', time: 'LIVE - 2nd Quarter', score: '14-10' },
    { sport: 'Soccer', teams: 'Barcelona vs Real Madrid', time: 'LIVE - 65\'', score: '2-1' },
    { sport: 'NHL', teams: 'Rangers vs Lightning', time: 'Starting Soon', score: '-' }
  ];
  
  const aiFeatures = [
    { title: 'Predictive Analytics', icon: '📊', description: 'AI-powered game predictions and player performance forecasts' },
    { title: 'Instant Highlights', icon: '🎬', description: 'Automated highlight generation for every game, every play' },
    { title: 'Fantasy Insights', icon: '💡', description: 'Smart recommendations for your fantasy lineup optimization' },
    { title: 'Personalized Feed', icon: '🎯', description: 'Content tailored to your favorite teams and players' }
  ];
</script>

<svelte:head>
  <title>ESPN - The Worldwide Leader in Sports | Disney AI Hub</title>
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-orange-600 text-white">
  <div class="absolute inset-0 opacity-10">
    <div class="grid grid-cols-6 gap-4 p-8">
      {#each Array(24) as _, i}
        <div class="text-4xl animate-pulse" style="animation-delay: {i * 0.1}s">
          {['🏈', '🏀', '⚾', '🏒', '⚽', '🎾'][i % 6]}
        </div>
      {/each}
    </div>
  </div>
  
  <div class="relative z-10 container mx-auto px-4 py-20">
    <h1 class="text-5xl md:text-7xl font-bold mb-6">ESPN</h1>
    <p class="text-2xl md:text-3xl mb-8">
      The Worldwide Leader in Sports
    </p>
  </div>
</section>

<!-- Live Now Section -->
<section class="bg-gray-900 text-white py-8">
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-2xl font-bold flex items-center">
        <span class="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-2"></span>
        Live Now
      </h2>
      <span class="text-red-400">View All</span>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {#each liveGames as game}
        <div class="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors cursor-pointer">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold text-red-400">{game.sport}</span>
            <span class="text-xs text-gray-400">{game.time}</span>
          </div>
          <div class="font-semibold mb-1">{game.teams}</div>
          {#if game.score !== '-'}
            <div class="text-2xl font-bold text-red-400">{game.score}</div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Sports Categories -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold text-gray-900 mb-12">All Sports</h2>
  
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
    {#each sportsCategories as sport}
      <button class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
        <div class="absolute inset-0 bg-gradient-to-br {sport.color}"></div>
        <div class="relative z-10 p-6 text-white text-center">
          <div class="text-5xl mb-2">{sport.icon}</div>
          <h3 class="font-bold text-lg">{sport.name}</h3>
          {#if sport.live > 0}
            <div class="text-xs mt-2 bg-red-500 rounded-full px-2 py-1 inline-block">
              {sport.live} LIVE
            </div>
          {/if}
        </div>
      </button>
    {/each}
  </div>
</section>

<!-- ESPN Platforms -->
<section class="bg-gray-50 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-gray-900 mb-12">ESPN Everywhere</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each espnPlatforms as platform}
        <div class="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6">
          <h3 class="text-xl font-bold mb-2 text-red-600">{platform.name}</h3>
          <p class="text-gray-900 mb-4">{platform.description}</p>
          <ul class="space-y-2">
            {#each platform.features as feature}
              <li class="text-sm text-gray-900 flex items-center">
                <span class="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                {feature}
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- AI-Powered Features -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-r from-red-100 to-orange-100 rounded-3xl p-8 md:p-12">
    <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">AI-Powered Sports Experience</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each aiFeatures as feature}
        <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
          <div class="flex items-start space-x-4">
            <span class="text-3xl">{feature.icon}</span>
            <div>
              <h3 class="font-bold text-gray-900 text-lg mb-2">{feature.title}</h3>
              <p class="text-gray-900">{feature.description}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Stats Section -->
<section class="bg-gradient-to-r from-gray-900 to-black text-white py-16">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <div class="text-4xl font-bold mb-2 text-red-400">500M+</div>
        <div class="text-gray-300">Monthly Visitors</div>
      </div>
      <div>
        <div class="text-4xl font-bold mb-2 text-red-400">25M+</div>
        <div class="text-gray-300">ESPN+ Subscribers</div>
      </div>
      <div>
        <div class="text-4xl font-bold mb-2 text-red-400">100K+</div>
        <div class="text-gray-300">Live Events/Year</div>
      </div>
      <div>
        <div class="text-4xl font-bold mb-2 text-red-400">24/7</div>
        <div class="text-gray-300">Sports Coverage</div>
      </div>
    </div>
  </div>
</section>

<!-- Fantasy Sports -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 class="text-3xl font-bold mb-4">ESPN Fantasy Sports</h2>
        <p class="text-lg mb-6 text-purple-100">
          Join millions of fans in the ultimate fantasy sports experience. AI-powered insights help you dominate your league.
        </p>
        <ul class="space-y-3 mb-8">
          <li class="flex items-center">
            <span class="text-2xl mr-3">🏆</span>
            <span>Free-to-play leagues for all major sports</span>
          </li>
          <li class="flex items-center">
            <span class="text-2xl mr-3">📱</span>
            <span>Real-time updates and notifications</span>
          </li>
          <li class="flex items-center">
            <span class="text-2xl mr-3">🤖</span>
            <span>AI-powered draft assistance and trade analyzer</span>
          </li>
        </ul>
      </div>
      <div class="text-center">
        <div class="text-9xl">🏆</div>
      </div>
    </div>
  </div>
</section>