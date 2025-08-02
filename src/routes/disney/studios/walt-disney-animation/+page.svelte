<script>
  const recentFilms = [
    {
      title: 'Wish',
      year: 2023,
      icon: '⭐',
      description: 'A young girl wishes upon a star in the kingdom of Rosas'
    },
    {
      title: 'Encanto',
      year: 2021,
      icon: '🦋',
      description: 'A magical family in Colombia faces extraordinary challenges'
    },
    {
      title: 'Raya and the Last Dragon',
      year: 2021,
      icon: '🐉',
      description: 'A warrior seeks the last dragon to save Kumandra'
    },
    {
      title: 'Frozen II',
      year: 2019,
      icon: '❄️',
      description: 'Elsa journeys to discover the origin of her powers'
    }
  ];
  
  const eras = [
    {
      name: 'Golden Age',
      years: '1937-1942',
      films: ['Snow White', 'Pinocchio', 'Fantasia', 'Dumbo', 'Bambi'],
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      name: 'Silver Age',
      years: '1950-1967',
      films: ['Cinderella', 'Alice in Wonderland', 'Peter Pan', 'Lady and the Tramp', 'Sleeping Beauty', '101 Dalmatians'],
      color: 'from-gray-400 to-gray-600'
    },
    {
      name: 'Bronze Age',
      years: '1970-1988',
      films: ['The Aristocats', 'Robin Hood', 'The Rescuers', 'The Fox and the Hound', 'Oliver & Company'],
      color: 'from-orange-600 to-orange-800'
    },
    {
      name: 'Renaissance',
      years: '1989-1999',
      films: ['The Little Mermaid', 'Beauty and the Beast', 'Aladdin', 'The Lion King', 'Pocahontas', 'Mulan', 'Tarzan'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Post-Renaissance',
      years: '2000-2009',
      films: ['The Emperor\'s New Groove', 'Atlantis', 'Lilo & Stitch', 'Treasure Planet', 'Meet the Robinsons', 'Bolt'],
      color: 'from-blue-500 to-teal-500'
    },
    {
      name: 'Revival Era',
      years: '2010-Present',
      films: ['Tangled', 'Wreck-It Ralph', 'Frozen', 'Big Hero 6', 'Moana', 'Zootopia', 'Encanto', 'Wish'],
      color: 'from-blue-600 to-purple-600'
    }
  ];
  
  const shorts = [
    { title: 'Steamboat Willie', year: 1928, icon: '🚢' },
    { title: 'The Skeleton Dance', year: 1929, icon: '💀' },
    { title: 'Flowers and Trees', year: 1932, icon: '🌳' },
    { title: 'The Three Little Pigs', year: 1933, icon: '🐷' },
    { title: 'The Old Mill', year: 1937, icon: '🏚️' },
    { title: 'Paperman', year: 2012, icon: '✈️' },
    { title: 'Feast', year: 2014, icon: '🍔' },
    { title: 'Inner Workings', year: 2016, icon: '🧠' }
  ];
  
  const innovations = [
    { title: 'First Full-Length Animated Film', year: 1937, achievement: 'Snow White and the Seven Dwarfs' },
    { title: 'Multiplane Camera', year: 1937, achievement: 'Revolutionary depth in animation' },
    { title: 'Xerography Process', year: 1961, achievement: '101 Dalmatians - cost-effective animation' },
    { title: 'CAPS System', year: 1989, achievement: 'Computer Animation Production System' },
    { title: 'Deep Canvas', year: 1999, achievement: '3D backgrounds in Tarzan' },
    { title: 'Hyperion Renderer', year: 2014, achievement: 'Advanced lighting in Big Hero 6' }
  ];
</script>

<svelte:head>
  <title>Walt Disney Animation Studios - Where Magic Begins</title>
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white">
  <div class="absolute inset-0">
    <!-- Magical sparkles animation -->
    <div class="absolute inset-0">
      {#each Array(20) as _, i}
        <div 
          class="absolute text-2xl animate-twinkle"
          style="
            top: {Math.random() * 100}%;
            left: {Math.random() * 100}%;
            animation-delay: {Math.random() * 5}s;
            animation-duration: {3 + Math.random() * 2}s;
          "
        >
          ✨
        </div>
      {/each}
    </div>
    
    <!-- Castle silhouette -->
    <div class="absolute bottom-0 left-0 right-0 h-64 opacity-20">
      <svg viewBox="0 0 1200 300" class="w-full h-full">
        <path d="M300 300 L300 150 L350 50 L400 150 L400 100 L450 30 L500 100 L500 150 L550 50 L600 150 L600 300 L700 300 L700 180 L750 100 L800 180 L800 300 Z" 
              fill="currentColor" class="text-blue-800"/>
      </svg>
    </div>
  </div>
  
  <div class="relative z-10 container mx-auto px-4 py-20">
    <div class="text-center">
      <h1 class="text-5xl md:text-7xl font-bold mb-4">
        Walt Disney Animation Studios
      </h1>
      <p class="text-2xl md:text-3xl mb-8 text-blue-100">
        Where Dreams Come to Life Since 1923
      </p>
      <div class="text-6xl mb-8">🏰</div>
    </div>
  </div>
</section>

<!-- Recent Films -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold mb-8">Recent Masterpieces</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {#each recentFilms as film}
      <div class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
        <div class="aspect-[3/4] bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform">
          {film.icon}
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold mb-1">{film.title}</h3>
          <p class="text-sm text-gray-600 mb-2">{film.year}</p>
          <p class="text-gray-700">{film.description}</p>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- Animation Eras -->
<section class="bg-gray-50 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-12 text-center">A Legacy of Animation Eras</h2>
    
    <div class="space-y-6">
      {#each eras as era}
        <div class="bg-white rounded-xl shadow-md p-6">
          <div class="flex items-center mb-4">
            <div class="w-4 h-4 rounded-full bg-gradient-to-r {era.color} mr-3"></div>
            <h3 class="text-xl font-bold">{era.name}</h3>
            <span class="ml-auto text-gray-600">{era.years}</span>
          </div>
          <div class="flex flex-wrap gap-2">
            {#each era.films as film}
              <span class="bg-gradient-to-r {era.color} text-white px-3 py-1 rounded-full text-sm">
                {film}
              </span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Shorts Collection -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-3xl p-8 md:p-12">
    <h2 class="text-3xl font-bold mb-8">Animated Shorts Legacy</h2>
    
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      {#each shorts as short}
        <div class="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
          <div class="text-3xl mb-2">{short.icon}</div>
          <p class="font-semibold text-sm">{short.title}</p>
          <p class="text-xs text-gray-600">{short.year}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Innovation Timeline -->
<section class="bg-gradient-to-b from-blue-50 to-white py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-12 text-center">Pioneering Animation Innovation</h2>
    
    <div class="max-w-4xl mx-auto">
      {#each innovations as innovation, i}
        <div class="flex items-center mb-8">
          <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
            {innovation.year}
          </div>
          <div class="ml-6 flex-1">
            <h3 class="font-bold text-lg">{innovation.title}</h3>
            <p class="text-gray-600">{innovation.achievement}</p>
          </div>
        </div>
        {#if i < innovations.length - 1}
          <div class="w-0.5 h-8 bg-gray-300 ml-8"></div>
        {/if}
      {/each}
    </div>
  </div>
</section>

<!-- Awards & Achievements -->
<section class="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-12 text-center">Awards & Recognition</h2>
    
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <div class="text-5xl font-bold mb-2">14</div>
        <div>Academy Awards</div>
        <div class="text-sm opacity-80">Best Animated Feature</div>
      </div>
      <div>
        <div class="text-5xl font-bold mb-2">62</div>
        <div>Feature Films</div>
        <div class="text-sm opacity-80">Since 1937</div>
      </div>
      <div>
        <div class="text-5xl font-bold mb-2">100+</div>
        <div>Years of Magic</div>
        <div class="text-sm opacity-80">Since 1923</div>
      </div>
      <div>
        <div class="text-5xl font-bold mb-2">∞</div>
        <div>Dreams Inspired</div>
        <div class="text-sm opacity-80">Worldwide</div>
      </div>
    </div>
  </div>
</section>

<!-- Future Projects -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center">
    <h2 class="text-3xl font-bold mb-6">The Magic Continues</h2>
    <p class="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
      Walt Disney Animation Studios continues to push the boundaries of storytelling and animation technology, 
      creating new worlds and characters that will inspire generations to come.
    </p>
    <button class="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors text-lg">
      Explore Upcoming Films
    </button>
  </div>
</section>

<style>
  @keyframes twinkle {
    0%, 100% { 
      opacity: 0;
      transform: scale(0.5);
    }
    50% { 
      opacity: 1;
      transform: scale(1);
    }
  }
  
  .animate-twinkle {
    animation: twinkle infinite ease-in-out;
  }
</style>