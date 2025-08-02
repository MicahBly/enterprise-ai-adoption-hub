<script>
  const featuredShows = [
    {
      title: 'Ahsoka',
      network: 'Disney+',
      genre: 'Sci-Fi',
      icon: '⚔️',
      description: 'Former Jedi Knight investigates an emerging threat',
      new: true
    },
    {
      title: 'Percy Jackson and the Olympians',
      network: 'Disney+',
      genre: 'Fantasy',
      icon: '⚡',
      description: 'A boy discovers he\'s the son of Poseidon',
      new: true
    },
    {
      title: 'The Bear',
      network: 'FX/Hulu',
      genre: 'Drama',
      icon: '👨‍🍳',
      description: 'A chef returns to run his family sandwich shop',
      award: 'Emmy Winner'
    },
    {
      title: 'Bluey',
      network: 'Disney Junior',
      genre: 'Family',
      icon: '🐕',
      description: 'Adventures of a Blue Heeler puppy',
      popular: true
    }
  ];
  
  const networks = [
    {
      name: 'ABC',
      shows: [
        { title: 'Abbott Elementary', status: 'New Season' },
        { title: 'The Good Doctor', status: 'Final Season' },
        { title: 'Grey\'s Anatomy', status: 'Season 20' },
        { title: 'The Bachelor', status: 'New Episodes' }
      ],
      color: 'from-blue-500 to-blue-700'
    },
    {
      name: 'FX',
      shows: [
        { title: 'The Bear', status: 'Season 3' },
        { title: 'Shogun', status: 'New Series' },
        { title: 'American Horror Story', status: 'Season 12' },
        { title: 'What We Do in the Shadows', status: 'Final Season' }
      ],
      color: 'from-gray-700 to-black'
    },
    {
      name: 'Disney Channel',
      shows: [
        { title: 'Miraculous', status: 'New Episodes' },
        { title: 'Big City Greens', status: 'Season 4' },
        { title: 'The Ghost and Molly McGee', status: 'Season 2' },
        { title: 'Hamster & Gretel', status: 'New Series' }
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'National Geographic',
      shows: [
        { title: 'Life Below Zero', status: 'Season 21' },
        { title: 'Genius', status: 'MLK/X' },
        { title: 'Gordon Ramsay: Uncharted', status: 'Season 4' },
        { title: 'Secrets of the Elephants', status: 'New' }
      ],
      color: 'from-yellow-600 to-yellow-800'
    }
  ];
  
  const disneyPlusOriginals = [
    { title: 'Loki', genre: 'Marvel', seasons: 2, icon: '🎭' },
    { title: 'The Mandalorian', genre: 'Star Wars', seasons: 3, icon: '🪐' },
    { title: 'WandaVision', genre: 'Marvel', seasons: 1, icon: '🔮' },
    { title: 'Obi-Wan Kenobi', genre: 'Star Wars', seasons: 1, icon: '⚔️' },
    { title: 'Ms. Marvel', genre: 'Marvel', seasons: 1, icon: '✨' },
    { title: 'Andor', genre: 'Star Wars', seasons: 1, icon: '🌟' }
  ];
  
  const genres = [
    { name: 'Comedy', icon: '😄', count: 45 },
    { name: 'Drama', icon: '🎭', count: 38 },
    { name: 'Reality', icon: '📺', count: 52 },
    { name: 'Kids', icon: '🧸', count: 89 },
    { name: 'Documentary', icon: '🎥', count: 67 },
    { name: 'Animation', icon: '🎨', count: 73 }
  ];
</script>

<svelte:head>
  <title>Disney TV Shows - Series & Originals</title>
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900 text-white">
  <div class="absolute inset-0 opacity-20">
    <div class="grid grid-cols-8 gap-4 p-8">
      {#each Array(16) as _, i}
        <div class="text-5xl animate-pulse" style="animation-delay: {i * 0.2}s">📺</div>
      {/each}
    </div>
  </div>
  
  <div class="relative z-10 container mx-auto px-4 py-20">
    <h1 class="text-5xl md:text-6xl font-bold mb-6">Disney TV Shows</h1>
    <p class="text-xl md:text-2xl mb-8 text-purple-100">
      Award-winning series across every network and platform
    </p>
  </div>
</section>

<!-- Featured Shows -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold mb-8 text-gray-900">Featured Shows</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {#each featuredShows as show}
      <div class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
        <div class="relative">
          <div class="aspect-video bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-6xl">
            {show.icon}
          </div>
          {#if show.new}
            <span class="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">NEW</span>
          {/if}
          {#if show.award}
            <span class="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">{show.award}</span>
          {/if}
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold mb-1 text-gray-900">{show.title}</h3>
          <p class="text-sm text-gray-600 mb-2">{show.network} • {show.genre}</p>
          <p class="text-sm text-gray-700">{show.description}</p>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- Network Shows -->
<section class="bg-gray-50 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8 text-gray-900">Shows by Network</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each networks as network}
        <div class="bg-white rounded-xl shadow-md overflow-hidden">
          <div class="bg-gradient-to-r {network.color} text-white p-4">
            <h3 class="text-xl font-bold">{network.name}</h3>
          </div>
          <div class="p-4">
            <ul class="space-y-3">
              {#each network.shows as show}
                <li class="flex items-center justify-between">
                  <span class="font-medium text-gray-900">{show.title}</span>
                  <span class="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">{show.status}</span>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Disney+ Originals -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
    <h2 class="text-3xl font-bold mb-8">Disney+ Originals</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each disneyPlusOriginals as show}
        <div class="bg-white/10 backdrop-blur rounded-lg p-6 hover:bg-white/20 transition-colors">
          <div class="flex items-start justify-between mb-3">
            <span class="text-4xl">{show.icon}</span>
            <span class="bg-white/20 px-2 py-1 rounded text-xs">
              {show.seasons} Season{show.seasons > 1 ? 's' : ''}
            </span>
          </div>
          <h3 class="text-xl font-bold mb-1 text-gray-900">{show.title}</h3>
          <p class="text-blue-100">{show.genre} Series</p>
        </div>
      {/each}
    </div>
    
  </div>
</section>

<!-- Browse by Genre -->
<section class="bg-gradient-to-b from-purple-100 to-pink-100 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8 text-center text-gray-900">Browse by Genre</h2>
    
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {#each genres as genre}
        <button class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all hover:scale-105 text-center">
          <div class="text-4xl mb-2">{genre.icon}</div>
          <p class="font-semibold text-gray-900">{genre.name}</p>
          <p class="text-sm text-gray-600">{genre.count} Shows</p>
        </button>
      {/each}
    </div>
  </div>
</section>

<!-- Live TV CTA -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 md:p-12 text-white">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 class="text-3xl font-bold mb-4">Watch Live TV</h2>
        <p class="text-lg mb-6 text-orange-100">
          Stream your favorite shows live on ABC, ESPN, FX and more with Hulu + Live TV
        </p>
        <ul class="space-y-2 mb-8">
          <li class="flex items-center">
            <span class="text-2xl mr-3">📡</span>
            <span>90+ live channels</span>
          </li>
          <li class="flex items-center">
            <span class="text-2xl mr-3">💾</span>
            <span>Unlimited DVR</span>
          </li>
          <li class="flex items-center">
            <span class="text-2xl mr-3">📱</span>
            <span>Watch on any device</span>
          </li>
        </ul>
      </div>
      <div class="text-center">
        <div class="text-9xl">📺</div>
      </div>
    </div>
  </div>
</section>