<script>
  import { onMount } from 'svelte';
  
  const featuredGames = [
    {
      name: 'Disney Dreamlight Valley',
      platform: 'Multi-platform',
      genre: 'Life Simulation',
      description: 'A magical life-sim adventure featuring Disney and Pixar friends',
      rating: '4.8',
      players: '5M+',
      image: '🏡',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Disney Speedstorm',
      platform: 'Multi-platform',
      genre: 'Racing',
      description: 'High-speed racing action with your favorite Disney characters',
      rating: '4.6',
      players: '3M+',
      image: '🏎️',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Kingdom Hearts Series',
      platform: 'Console/PC',
      genre: 'Action RPG',
      description: 'Epic adventures combining Disney worlds with Final Fantasy',
      rating: '4.9',
      players: '30M+',
      image: '🗝️',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Marvel\'s Spider-Man 2',
      platform: 'PlayStation',
      genre: 'Action Adventure',
      description: 'Web-slinging action in an open-world New York City',
      rating: '4.9',
      players: '10M+',
      image: '🕷️',
      color: 'from-red-500 to-red-700'
    },
    {
      name: 'Star Wars Jedi: Survivor',
      platform: 'Multi-platform',
      genre: 'Action Adventure',
      description: 'Continue Cal Kestis\' journey as a Jedi Knight',
      rating: '4.7',
      players: '8M+',
      image: '⚔️',
      color: 'from-gray-700 to-black'
    },
    {
      name: 'Disney Illusion Island',
      platform: 'Nintendo Switch',
      genre: 'Platformer',
      description: 'Mickey and friends in a hand-animated Metroidvania adventure',
      rating: '4.5',
      players: '2M+',
      image: '🏝️',
      color: 'from-yellow-500 to-orange-500'
    }
  ];
  
  const mobileGames = [
    {
      name: 'Disney Magic Kingdoms',
      downloads: '90M+',
      genre: 'Park Builder',
      icon: '🏰',
      description: 'Build your own magical Disney theme park'
    },
    {
      name: 'Disney Heroes: Battle Mode',
      downloads: '50M+',
      genre: 'RPG',
      icon: '🦸',
      description: 'Team up Disney and Pixar heroes in epic battles'
    },
    {
      name: 'Disney Sorcerer\'s Arena',
      downloads: '30M+',
      genre: 'Strategy',
      icon: '🧙',
      description: 'Strategic battles with Disney characters'
    },
    {
      name: 'Disney Emoji Blitz',
      downloads: '70M+',
      genre: 'Puzzle',
      icon: '😊',
      description: 'Match and collect Disney emojis'
    },
    {
      name: 'Disney Mirrorverse',
      downloads: '20M+',
      genre: 'Action RPG',
      icon: '🪞',
      description: 'Disney guardians in a divergent universe'
    },
    {
      name: 'Disney Getaway Blast',
      downloads: '40M+',
      genre: 'Puzzle',
      icon: '🎯',
      description: 'Pop puzzles on a Disney vacation'
    }
  ];
  
  const classicGames = [
    { name: 'Castle of Illusion', year: '1990/2013', platform: 'Multi-platform', icon: '🏰' },
    { name: 'DuckTales', year: '1989/2013', platform: 'Multi-platform', icon: '🦆' },
    { name: 'Aladdin', year: '1993', platform: 'SNES/Genesis', icon: '🧞' },
    { name: 'The Lion King', year: '1994', platform: 'Multi-platform', icon: '🦁' },
    { name: 'Epic Mickey', year: '2010', platform: 'Wii/Multi', icon: '🖌️' },
    { name: 'Toy Story', year: '1995', platform: 'Multi-platform', icon: '🤠' }
  ];
  
  const gamingPlatforms = [
    {
      name: 'Console Gaming',
      icon: '🎮',
      platforms: ['PlayStation', 'Xbox', 'Nintendo Switch'],
      games: '50+',
      color: 'from-purple-600 to-blue-600'
    },
    {
      name: 'Mobile Gaming',
      icon: '📱',
      platforms: ['iOS', 'Android', 'Tablets'],
      games: '100+',
      color: 'from-green-500 to-teal-500'
    },
    {
      name: 'PC Gaming',
      icon: '💻',
      platforms: ['Steam', 'Epic Games', 'Disney+'],
      games: '40+',
      color: 'from-orange-500 to-red-500'
    }
  ];
  
  const aiFeatures = [
    {
      title: 'Smart Matchmaking',
      description: 'AI-powered player matching for balanced multiplayer experiences',
      icon: '🤝'
    },
    {
      title: 'Adaptive Difficulty',
      description: 'Games that adjust to your skill level in real-time',
      icon: '📈'
    },
    {
      title: 'Personalized Content',
      description: 'AI curates in-game events and rewards based on play style',
      icon: '🎁'
    },
    {
      title: 'Voice Interaction',
      description: 'Talk to your favorite Disney characters with natural AI dialogue',
      icon: '🎤'
    }
  ];
  
  let activeCategory = 'all';
</script>

<svelte:head>
  <title>Disney Games - Play the Magic | AI Hub</title>
</svelte:head>

<!-- Hero Section with Gaming Theme -->
<section class="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
  <div class="absolute inset-0 opacity-20">
    <div class="absolute top-20 left-20 text-8xl animate-pulse">🎮</div>
    <div class="absolute bottom-20 right-20 text-8xl animate-pulse" style="animation-delay: 0.7s">🕹️</div>
    <div class="absolute top-1/3 right-1/3 text-6xl animate-pulse" style="animation-delay: 0.3s">🎯</div>
    <div class="absolute bottom-1/3 left-1/4 text-7xl animate-pulse" style="animation-delay: 1s">🏆</div>
  </div>
  
  <div class="relative z-10 container mx-auto px-4 py-20">
    <h1 class="text-5xl md:text-7xl font-bold mb-6">
      <span class="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        Disney Games
      </span>
    </h1>
    <p class="text-xl md:text-2xl mb-8 text-purple-100">
      Experience the magic through interactive adventures across all platforms
    </p>
    <div class="flex flex-wrap gap-4">
      <button class="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
        Browse All Games
      </button>
      <button class="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300">
        Download Mobile Apps
      </button>
    </div>
  </div>
</section>

<!-- Featured Games Section -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold mb-12 text-gray-900">Featured Games</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each featuredGames as game}
      <div class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
        <div class="absolute inset-0 bg-gradient-to-br {game.color} opacity-90"></div>
        <div class="relative z-10 p-6 text-white">
          <div class="flex justify-between items-start mb-4">
            <span class="text-5xl">{game.image}</span>
            <div class="text-right">
              <div class="flex items-center text-yellow-300">
                <span class="text-sm mr-1">⭐</span>
                <span class="font-bold">{game.rating}</span>
              </div>
              <div class="text-xs opacity-90">{game.players} players</div>
            </div>
          </div>
          <h3 class="text-xl font-bold mb-2">{game.name}</h3>
          <p class="text-sm opacity-90 mb-3">{game.description}</p>
          <div class="flex justify-between items-center text-xs">
            <span class="bg-white/20 px-3 py-1 rounded-full">{game.genre}</span>
            <span>{game.platform}</span>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- Mobile Games Section -->
<section class="bg-gradient-to-b from-blue-50 to-white py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-12 text-gray-900">Mobile Magic</h2>
    <p class="text-gray-600 mb-8 max-w-2xl">Play Disney games anywhere, anytime. Our mobile collection brings the magic to your fingertips with free-to-play adventures.</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each mobileGames as game}
        <div class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 group">
          <div class="flex items-start justify-between mb-4">
            <div class="flex items-center">
              <span class="text-4xl mr-3">{game.icon}</span>
              <div>
                <h3 class="font-bold text-lg text-gray-900">{game.name}</h3>
                <p class="text-sm text-gray-500">{game.genre}</p>
              </div>
            </div>
          </div>
          <p class="text-gray-600 text-sm mb-4">{game.description}</p>
          <div class="flex items-center justify-between">
            <span class="text-xs text-gray-500">📱 {game.downloads} downloads</span>
            <button class="text-blue-600 hover:text-blue-700 font-semibold text-sm group-hover:translate-x-1 transition-transform">
              Play Now →
            </button>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Classic Games Section -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold mb-12 text-gray-900">Classic Disney Games</h2>
  <p class="text-gray-600 mb-8 max-w-2xl">Relive the nostalgia with timeless Disney gaming experiences that defined generations.</p>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each classicGames as game}
      <div class="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-4 hover:shadow-lg transition-shadow">
        <div class="flex items-center">
          <span class="text-3xl mr-3">{game.icon}</span>
          <div>
            <h3 class="font-bold text-gray-900">{game.name}</h3>
            <p class="text-sm text-gray-600">{game.year} • {game.platform}</p>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- Gaming Platforms -->
<section class="bg-gray-50 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-12 text-gray-900">Play Anywhere</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each gamingPlatforms as platform}
        <div class="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
          <div class="absolute inset-0 bg-gradient-to-br {platform.color}"></div>
          <div class="relative z-10 p-8 text-white text-center">
            <div class="text-6xl mb-4">{platform.icon}</div>
            <h3 class="text-2xl font-bold mb-2">{platform.name}</h3>
            <div class="space-y-1 mb-4">
              {#each platform.platforms as p}
                <div class="text-sm opacity-90">• {p}</div>
              {/each}
            </div>
            <div class="text-3xl font-bold">{platform.games}</div>
            <div class="text-sm opacity-90">Available Games</div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Disney+ Gaming Content -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 class="text-3xl font-bold mb-4">Disney+ Gaming Hub</h2>
        <p class="text-blue-100 mb-6">
          Stream exclusive gaming content, behind-the-scenes documentaries, and esports tournaments featuring your favorite Disney games.
        </p>
        <ul class="space-y-3 mb-8">
          <li class="flex items-center space-x-2">
            <span class="text-2xl">📺</span>
            <span>Game development documentaries</span>
          </li>
          <li class="flex items-center space-x-2">
            <span class="text-2xl">🏆</span>
            <span>Esports tournaments and championships</span>
          </li>
          <li class="flex items-center space-x-2">
            <span class="text-2xl">🎬</span>
            <span>Gaming-inspired original series</span>
          </li>
          <li class="flex items-center space-x-2">
            <span class="text-2xl">🎮</span>
            <span>Exclusive gameplay previews</span>
          </li>
        </ul>
        <button class="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
          Watch on Disney+
        </button>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
          <div class="text-4xl font-bold mb-2">100+</div>
          <div class="text-sm">Gaming Shows</div>
        </div>
        <div class="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
          <div class="text-4xl font-bold mb-2">50+</div>
          <div class="text-sm">Tournaments</div>
        </div>
        <div class="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
          <div class="text-4xl font-bold mb-2">24/7</div>
          <div class="text-sm">Live Streams</div>
        </div>
        <div class="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
          <div class="text-4xl font-bold mb-2">4K</div>
          <div class="text-sm">Ultra HD</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- AI-Powered Gaming Features -->
<section class="bg-gradient-to-b from-purple-50 to-pink-50 py-16">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-6 text-gray-900">AI-Enhanced Gaming Magic</h2>
      <p class="text-lg text-gray-700 mb-12">
        Experience next-generation Disney gaming powered by cutting-edge artificial intelligence
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {#each aiFeatures as feature}
          <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div class="text-4xl mb-4">{feature.icon}</div>
            <h3 class="font-bold text-lg mb-2 text-gray-900">{feature.title}</h3>
            <p class="text-gray-600">{feature.description}</p>
          </div>
        {/each}
      </div>
      
      <div class="mt-12 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-8">
        <h3 class="text-xl font-bold mb-4 text-gray-900">Coming Soon: Disney AI Game Assistant</h3>
        <p class="text-gray-700 mb-6">
          Get personalized gaming tips, walkthroughs, and strategies from an AI companion that knows every Disney game inside and out.
        </p>
        <button class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow">
          Join the Waitlist
        </button>
      </div>
    </div>
  </div>
</section>

<!-- Stats Section -->
<section class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <div class="text-4xl font-bold mb-2">500M+</div>
        <div class="text-purple-100">Global Players</div>
      </div>
      <div>
        <div class="text-4xl font-bold mb-2">200+</div>
        <div class="text-purple-100">Active Games</div>
      </div>
      <div>
        <div class="text-4xl font-bold mb-2">50+</div>
        <div class="text-purple-100">Game Studios</div>
      </div>
      <div>
        <div class="text-4xl font-bold mb-2">15</div>
        <div class="text-purple-100">Platforms</div>
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