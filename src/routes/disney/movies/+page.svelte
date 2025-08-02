<script>
  const nowShowing = [
    {
      title: 'Moana 2',
      studio: 'Walt Disney Animation',
      rating: 'PG',
      poster: '🌊',
      description: 'Moana journeys to the far seas of Oceania'
    },
    {
      title: 'Mufasa: The Lion King',
      studio: 'Walt Disney Pictures',
      rating: 'PG',
      poster: '🦁',
      description: 'The story of how Mufasa became king'
    },
    {
      title: 'Inside Out 2',
      studio: 'Pixar',
      rating: 'PG',
      poster: '🧠',
      description: 'Riley navigates the complexities of teenage emotions'
    },
    {
      title: 'Deadpool & Wolverine',
      studio: 'Marvel Studios',
      rating: 'R',
      poster: '⚔️',
      description: 'The merc with a mouth meets the X-Man'
    }
  ];
  
  const comingSoon = [
    {
      title: 'Captain America: Brave New World',
      studio: 'Marvel Studios',
      date: 'February 2025',
      poster: '🛡️'
    },
    {
      title: 'Snow White',
      studio: 'Walt Disney Pictures',
      date: 'March 2025',
      poster: '🍎'
    },
    {
      title: 'Thunderbolts*',
      studio: 'Marvel Studios',
      date: 'May 2025',
      poster: '⚡'
    },
    {
      title: 'Elio',
      studio: 'Pixar',
      date: 'June 2025',
      poster: '👽'
    }
  ];
  
  const collections = [
    { name: 'Marvel Cinematic Universe', count: 33, icon: '🦸', href: '/disney/studios/marvel' },
    { name: 'Star Wars Saga', count: 12, icon: '⚔️', href: '/disney/studios/lucasfilm' },
    { name: 'Pixar Films', count: 27, icon: '🎨', href: '/disney/studios/pixar' },
    { name: 'Disney Classics', count: 62, icon: '🏰', href: '/disney/studios/walt-disney-animation' },
    { name: 'Live Action Remakes', count: 18, icon: '🎬', href: '/disney/movies/live-action' },
    { name: '20th Century Catalog', count: 2000, icon: '🦊', href: '/disney/studios/20th-century' }
  ];
  
  const movieCategories = [
    { name: 'Action & Adventure', icon: '💥' },
    { name: 'Animation', icon: '🎨' },
    { name: 'Comedy', icon: '😄' },
    { name: 'Drama', icon: '🎭' },
    { name: 'Family', icon: '👨‍👩‍👧‍👦' },
    { name: 'Fantasy', icon: '🧙' },
    { name: 'Horror', icon: '👻' },
    { name: 'Musical', icon: '🎵' },
    { name: 'Sci-Fi', icon: '🚀' },
    { name: 'Superhero', icon: '🦸' }
  ];
</script>

<svelte:head>
  <title>Disney Movies - All Films & Collections</title>
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 text-white">
  <div class="absolute inset-0 opacity-20">
    <div class="absolute top-10 right-10 text-9xl">🎬</div>
    <div class="absolute bottom-10 left-10 text-9xl">🍿</div>
  </div>
  
  <div class="relative z-10 container mx-auto px-4 py-20">
    <h1 class="text-5xl md:text-6xl font-bold mb-6">Disney Movies</h1>
    <p class="text-xl md:text-2xl mb-8 text-purple-100">
      From timeless classics to blockbuster hits
    </p>
  </div>
</section>

<!-- Now Showing -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold mb-8 flex items-center">
    <span class="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-3"></span>
    Now Showing in Theaters
  </h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {#each nowShowing as movie}
      <div class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
        <div class="aspect-[2/3] bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-8xl">
          {movie.poster}
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold mb-1">{movie.title}</h3>
          <p class="text-sm text-gray-900 mb-2">{movie.studio}</p>
          <p class="text-sm text-gray-900 mb-3">{movie.description}</p>
          <div class="flex items-center justify-between">
            <span class="text-xs bg-gray-100 px-2 py-1 rounded">{movie.rating}</span>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- Coming Soon -->
<section class="bg-gray-50 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8">Coming Soon</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each comingSoon as movie}
        <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 text-center">
          <div class="text-6xl mb-4">{movie.poster}</div>
          <h3 class="font-bold text-lg mb-1">{movie.title}</h3>
          <p class="text-sm text-gray-900 mb-2">{movie.studio}</p>
          <p class="text-purple-600 font-semibold">{movie.date}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Movie Collections -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold mb-8">Explore Collections</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each collections as collection}
      <a href={collection.href} class="group bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl p-6 text-white hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
        <div class="flex items-center justify-between mb-4">
          <span class="text-5xl">{collection.icon}</span>
          <span class="bg-white/20 px-3 py-1 rounded-full text-sm">
            {collection.count} Films
          </span>
        </div>
        <h3 class="text-xl font-bold mb-2">{collection.name}</h3>
        <p class="text-blue-100">Explore the complete collection →</p>
      </a>
    {/each}
  </div>
</section>

<!-- Browse by Genre -->
<section class="bg-gradient-to-r from-purple-100 to-pink-100 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8 text-center">Browse by Genre</h2>
    
    <div class="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
      {#each movieCategories as category}
        <button class="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all hover:scale-105 text-center">
          <div class="text-3xl mb-2">{category.icon}</div>
          <p class="text-sm font-semibold">{category.name}</p>
        </button>
      {/each}
    </div>
  </div>
</section>

<!-- Streaming Info -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center">
    <h2 class="text-3xl font-bold mb-4">Stream Thousands of Movies</h2>
    <p class="text-xl mb-8 text-blue-100">
      Disney, Pixar, Marvel, Star Wars, and more available on Disney+
    </p>
  </div>
</section>