<script>
  const recentFilms = [
    {
      title: 'Poor Things',
      year: 2023,
      director: 'Yorgos Lanthimos',
      awards: '4 Academy Awards',
      icon: '🧪'
    },
    {
      title: 'The Banshees of Inisherin',
      year: 2022,
      director: 'Martin McDonagh',
      awards: '9 Oscar Nominations',
      icon: '🍺'
    },
    {
      title: 'Nomadland',
      year: 2020,
      director: 'Chloé Zhao',
      awards: '3 Academy Awards',
      icon: '🚐'
    },
    {
      title: 'The Menu',
      year: 2022,
      director: 'Mark Mylod',
      awards: 'Critical Acclaim',
      icon: '🍽️'
    }
  ];
  
  const bestPictureWinners = [
    { title: 'Nomadland', year: 2020, icon: '🏆' },
    { title: 'The Shape of Water', year: 2017, icon: '💧' },
    { title: 'Birdman', year: 2014, icon: '🦅' },
    { title: '12 Years a Slave', year: 2013, icon: '⛓️' },
    { title: 'Slumdog Millionaire', year: 2008, icon: '💰' }
  ];
  
  const notableFilms = [
    'Little Miss Sunshine', 'Juno', 'Black Swan', 'The Grand Budapest Hotel',
    'Three Billboards Outside Ebbing, Missouri', 'The Favourite', 'JoJo Rabbit',
    'The French Dispatch', 'Nightmare Alley', 'See How They Run'
  ];
  
  const upcomingProjects = [
    { title: 'Kinds of Kindness', director: 'Yorgos Lanthimos', status: '2024' },
    { title: 'A Real Pain', director: 'Jesse Eisenberg', status: 'Post-Production' },
    { title: 'Nightbitch', director: 'Marielle Heller', status: 'Post-Production' }
  ];
  
  const awards = [
    { type: 'Academy Awards', count: '48', icon: '🏆' },
    { type: 'BAFTA Awards', count: '72', icon: '🎭' },
    { type: 'Golden Globes', count: '61', icon: '🌟' },
    { type: 'Cannes Awards', count: '23', icon: '🌴' }
  ];
</script>

<svelte:head>
  <title>Searchlight Pictures - Illuminating Extraordinary Stories</title>
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
  <div class="absolute inset-0 opacity-30">
    <!-- Searchlight beam effect -->
    <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2">
      <div class="w-96 h-96 bg-gradient-to-t from-yellow-400/30 to-transparent animate-searchlight"></div>
    </div>
  </div>
  
  <div class="relative z-10 container mx-auto px-4 py-20">
    <div class="text-center">
      <div class="text-6xl mb-6">🔦</div>
      <h1 class="text-5xl md:text-6xl font-bold mb-4">
        Searchlight Pictures
      </h1>
      <p class="text-xl md:text-2xl mb-8 text-gray-300">
        Illuminating Extraordinary Stories Since 1994
      </p>
      <p class="text-lg max-w-3xl mx-auto text-gray-400 mb-8">
        Home to bold, distinctive filmmaking that pushes boundaries and celebrates unique voices in cinema
      </p>
    </div>
  </div>
</section>

<!-- Recent Films -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold mb-8">Recent Acclaimed Films</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {#each recentFilms as film}
      <div class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
        <div class="bg-gradient-to-br from-gray-700 to-black p-8 text-white text-center">
          <div class="text-5xl mb-4">{film.icon}</div>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold mb-1">{film.title}</h3>
          <p class="text-sm text-gray-600 mb-1">{film.director} • {film.year}</p>
          <p class="text-sm text-yellow-600 font-semibold">{film.awards}</p>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- Best Picture Winners -->
<section class="bg-gradient-to-r from-yellow-50 to-amber-50 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8 text-center">Academy Award Best Picture Winners</h2>
    
    <div class="flex flex-wrap justify-center gap-4">
      {#each bestPictureWinners as winner}
        <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
          <div class="text-center">
            <div class="text-4xl mb-2">{winner.icon}</div>
            <h3 class="font-bold">{winner.title}</h3>
            <p class="text-sm text-gray-600">{winner.year}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Notable Films -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 text-white">
    <h2 class="text-3xl font-bold mb-8">Notable Films</h2>
    
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {#each notableFilms as film}
        <div class="bg-white/10 backdrop-blur rounded-lg p-4 text-center hover:bg-white/20 transition-colors">
          <p class="font-medium">{film}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Awards & Recognition -->
<section class="bg-gray-50 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-12 text-center">Awards & Recognition</h2>
    
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      {#each awards as award}
        <div class="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
          <div class="text-4xl mb-3">{award.icon}</div>
          <div class="text-3xl font-bold text-gray-800 mb-1">{award.count}</div>
          <p class="text-gray-600">{award.type}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- The Searchlight Difference -->
<section class="container mx-auto px-4 py-16">
  <div class="max-w-4xl mx-auto">
    <h2 class="text-3xl font-bold mb-8 text-center">The Searchlight Difference</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="text-center">
        <div class="text-5xl mb-4">🎨</div>
        <h3 class="font-bold text-lg mb-2">Artistic Vision</h3>
        <p class="text-gray-600">Supporting filmmakers with unique perspectives and bold storytelling</p>
      </div>
      <div class="text-center">
        <div class="text-5xl mb-4">🌍</div>
        <h3 class="font-bold text-lg mb-2">Diverse Voices</h3>
        <p class="text-gray-600">Championing stories from around the world and underrepresented communities</p>
      </div>
      <div class="text-center">
        <div class="text-5xl mb-4">🏅</div>
        <h3 class="font-bold text-lg mb-2">Award Excellence</h3>
        <p class="text-gray-600">Consistently recognized at the world's most prestigious film festivals</p>
      </div>
    </div>
  </div>
</section>

<!-- Upcoming Projects -->
<section class="bg-gradient-to-b from-gray-100 to-white py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8">Coming Soon</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {#each upcomingProjects as project}
        <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <h3 class="font-bold text-lg mb-2">{project.title}</h3>
          <p class="text-gray-600 mb-2">Director: {project.director}</p>
          <span class="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
            {project.status}
          </span>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Call to Action -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 md:p-12 text-white text-center">
    <h2 class="text-3xl font-bold mb-6">Experience Searchlight Films</h2>
    <p class="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
      Stream award-winning Searchlight Pictures films on Disney+ and Hulu, 
      or catch our latest releases in theaters worldwide.
    </p>
    <div class="flex flex-wrap gap-4 justify-center">
      <button class="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition-colors text-lg">
        Browse Films
      </button>
      <button class="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-colors text-lg">
        In Theaters Now
      </button>
    </div>
  </div>
</section>

<style>
  @keyframes searchlight {
    0%, 100% {
      opacity: 0.3;
      transform: rotate(-15deg) scaleY(2);
    }
    50% {
      opacity: 0.5;
      transform: rotate(15deg) scaleY(2);
    }
  }
  
  .animate-searchlight {
    animation: searchlight 8s ease-in-out infinite;
    transform-origin: bottom center;
  }
</style>