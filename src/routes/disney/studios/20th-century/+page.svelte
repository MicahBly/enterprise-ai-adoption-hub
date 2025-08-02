<script>
  import { onMount } from 'svelte';
  
  // Major franchises data
  const majorFranchises = [
    {
      title: 'Avatar',
      films: ['Avatar (2009)', 'Avatar: The Way of Water (2022)', 'Avatar 3 (2025)', 'Avatar 4 (2027)', 'Avatar 5 (2029)'],
      description: 'James Cameron\'s groundbreaking sci-fi epic exploring Pandora',
      icon: '🌍',
      boxOffice: '$5.2B+ combined'
    },
    {
      title: 'Alien',
      films: ['Alien (1979)', 'Aliens (1986)', 'Alien 3 (1992)', 'Alien: Resurrection (1997)', 'Prometheus (2012)', 'Alien: Covenant (2017)', 'Alien: Romulus (2024)'],
      description: 'The iconic sci-fi horror franchise that redefined the genre',
      icon: '👽',
      boxOffice: '$1.6B+ combined'
    },
    {
      title: 'Planet of the Apes',
      films: ['Planet of the Apes (1968)', 'Beneath (1970)', 'Escape (1971)', 'Conquest (1972)', 'Battle (1973)', 'Rise (2011)', 'Dawn (2014)', 'War (2017)', 'Kingdom (2024)'],
      description: 'Revolutionary franchise exploring humanity through the lens of evolution',
      icon: '🦍',
      boxOffice: '$2B+ combined'
    },
    {
      title: 'Die Hard',
      films: ['Die Hard (1988)', 'Die Hard 2 (1990)', 'Die Hard with a Vengeance (1995)', 'Live Free or Die Hard (2007)', 'A Good Day to Die Hard (2013)'],
      description: 'The action franchise that made Bruce Willis a household name',
      icon: '🏢',
      boxOffice: '$1.4B+ combined'
    },
    {
      title: 'Predator',
      films: ['Predator (1987)', 'Predator 2 (1990)', 'Predators (2010)', 'The Predator (2018)', 'Prey (2022)'],
      description: 'Sci-fi action franchise featuring the ultimate alien hunters',
      icon: '🎯',
      boxOffice: '$750M+ combined'
    },
    {
      title: 'Kingsman',
      films: ['Kingsman: The Secret Service (2014)', 'Kingsman: The Golden Circle (2017)', 'The King\'s Man (2021)'],
      description: 'Stylish spy action franchise with a British twist',
      icon: '🕴️',
      boxOffice: '$825M+ combined'
    }
  ];

  // Recent releases
  const recentReleases = [
    {
      title: 'Avatar: The Way of Water',
      year: 2022,
      director: 'James Cameron',
      boxOffice: '$2.3B',
      description: 'Return to Pandora in this visually stunning sequel',
      rating: 'PG-13'
    },
    {
      title: 'The Menu',
      year: 2022,
      director: 'Mark Mylod',
      boxOffice: '$79.6M',
      description: 'A dark comedy thriller set in an exclusive restaurant',
      rating: 'R'
    },
    {
      title: 'Amsterdam',
      year: 2022,
      director: 'David O. Russell',
      boxOffice: '$31.2M',
      description: 'A stylish period mystery with an all-star cast',
      rating: 'R'
    },
    {
      title: 'See How They Run',
      year: 2022,
      director: 'Tom George',
      boxOffice: '$22.6M',
      description: 'A witty murder mystery set in 1950s London',
      rating: 'PG-13'
    },
    {
      title: 'Barbarian',
      year: 2022,
      director: 'Zach Cregger',
      boxOffice: '$45M',
      description: 'A horror thriller with unexpected twists',
      rating: 'R'
    },
    {
      title: 'The Banshees of Inisherin',
      year: 2022,
      director: 'Martin McDonagh',
      boxOffice: '$20.1M',
      description: 'A darkly comic tale of a friendship gone sour',
      rating: 'R'
    }
  ];

  // Classic films library
  const classicFilms = [
    { title: 'The Sound of Music', year: 1965, icon: '🎵' },
    { title: 'Star Wars', year: 1977, icon: '⭐' },
    { title: 'Alien', year: 1979, icon: '👽' },
    { title: 'The Empire Strikes Back', year: 1980, icon: '⚔️' },
    { title: 'E.T. the Extra-Terrestrial', year: 1982, icon: '🚲' },
    { title: 'Return of the Jedi', year: 1983, icon: '🌙' },
    { title: 'Die Hard', year: 1988, icon: '🏢' },
    { title: 'Home Alone', year: 1990, icon: '🏠' },
    { title: 'Edward Scissorhands', year: 1990, icon: '✂️' },
    { title: 'Terminator 2', year: 1991, icon: '🤖' },
    { title: 'Mrs. Doubtfire', year: 1993, icon: '👵' },
    { title: 'Speed', year: 1994, icon: '🚌' },
    { title: 'Independence Day', year: 1996, icon: '🛸' },
    { title: 'Titanic', year: 1997, icon: '🚢' },
    { title: 'The Thin Red Line', year: 1998, icon: '🎖️' },
    { title: 'Fight Club', year: 1999, icon: '🥊' },
    { title: 'Cast Away', year: 2000, icon: '🏝️' },
    { title: 'Moulin Rouge!', year: 2001, icon: '💃' },
    { title: 'Minority Report', year: 2002, icon: '👁️' },
    { title: 'Master and Commander', year: 2003, icon: '⛵' },
    { title: 'I, Robot', year: 2004, icon: '🤖' },
    { title: 'Walk the Line', year: 2005, icon: '🎸' },
    { title: 'The Devil Wears Prada', year: 2006, icon: '👠' },
    { title: 'Juno', year: 2007, icon: '🍔' },
    { title: 'Slumdog Millionaire', year: 2008, icon: '💰' },
    { title: 'Avatar', year: 2009, icon: '🌍' },
    { title: 'Black Swan', year: 2010, icon: '🦢' },
    { title: 'Rise of the Planet of the Apes', year: 2011, icon: '🦍' },
    { title: 'Life of Pi', year: 2012, icon: '🐅' },
    { title: 'The Grand Budapest Hotel', year: 2014, icon: '🏨' },
    { title: 'The Martian', year: 2015, icon: '🚀' },
    { title: 'Deadpool', year: 2016, icon: '💀' },
    { title: 'Logan', year: 2017, icon: '❌' },
    { title: 'The Greatest Showman', year: 2017, icon: '🎪' },
    { title: 'Bohemian Rhapsody', year: 2018, icon: '👑' },
    { title: 'Ford v Ferrari', year: 2019, icon: '🏎️' },
    { title: 'The Call of the Wild', year: 2020, icon: '🐺' },
    { title: 'West Side Story', year: 2021, icon: '💑' }
  ];

  // Awards and achievements
  const awards = {
    academyAwards: {
      bestPicture: 4,
      total: 350
    },
    goldenGlobes: 198,
    baftas: 117,
    decades: 9
  };

  // Upcoming projects
  const upcomingProjects = [
    {
      title: 'Avatar 3',
      year: 2025,
      director: 'James Cameron',
      description: 'The third chapter in the Avatar saga',
      status: 'Post-Production'
    },
    {
      title: 'Kingdom of the Planet of the Apes 2',
      year: 2026,
      director: 'TBA',
      description: 'Continuation of the new Apes saga',
      status: 'In Development'
    },
    {
      title: 'Alien: Earth',
      year: 2025,
      director: 'Noah Hawley',
      description: 'FX series bringing Alien to Earth',
      status: 'Production'
    },
    {
      title: 'The Amateur',
      year: 2025,
      director: 'James Hawes',
      description: 'CIA cryptographer seeks revenge',
      status: 'Post-Production'
    },
    {
      title: 'Predator: Badlands',
      year: 2025,
      director: 'Dan Trachtenberg',
      description: 'New chapter in the Predator franchise',
      status: 'Production'
    }
  ];

  let searchlightAnimation = false;
  
  onMount(() => {
    // Animate searchlights
    const interval = setInterval(() => {
      searchlightAnimation = true;
      setTimeout(() => searchlightAnimation = false, 3000);
    }, 5000);
    
    return () => clearInterval(interval);
  });
</script>

<svelte:head>
  <title>20th Century Studios - A Legacy of Cinematic Excellence</title>
</svelte:head>

<!-- Hero Section with Searchlight Theme -->
<section class="relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-gold-600 text-white">
  <div class="absolute inset-0 opacity-20">
    <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cdefs%3E%3CradialGradient%20id%3D%22searchlight%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23ffffff%22%20stop-opacity%3D%220.3%22/%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23ffffff%22%20stop-opacity%3D%220%22/%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2240%22%20fill%3D%22url%28%23searchlight%29%22/%3E%3C/svg%3E')] bg-no-repeat bg-center"></div>
  </div>
  
  <!-- Animated Searchlights -->
  <div class={`absolute inset-0 ${searchlightAnimation ? 'animate-searchlight' : ''}`}>
    <div class="absolute bottom-0 left-1/4 w-32 h-96 bg-gradient-to-t from-yellow-300/30 to-transparent transform -rotate-12 origin-bottom"></div>
    <div class="absolute bottom-0 right-1/4 w-32 h-96 bg-gradient-to-t from-yellow-300/30 to-transparent transform rotate-12 origin-bottom"></div>
  </div>
  
  <div class="relative z-10 container mx-auto px-4 py-20">
    <div class="text-center">
      <h1 class="text-6xl md:text-8xl font-bold mb-4">
        <span class="text-gold-400">20th</span>
      </h1>
      <h2 class="text-4xl md:text-6xl font-bold mb-6">
        <span class="text-white">CENTURY STUDIOS</span>
      </h2>
      <p class="text-xl md:text-2xl mb-8 text-gold-200 max-w-3xl mx-auto">
        Nearly a century of groundbreaking cinema, from timeless classics to modern blockbusters
      </p>
      <div class="flex flex-wrap gap-4 justify-center">
        <button class="bg-gold-500 text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-gold-400 transition-colors">
          Explore Our Legacy
        </button>
        <button class="border-2 border-gold-400 text-gold-400 px-8 py-3 rounded-full font-bold hover:bg-gold-400 hover:text-blue-900 transition-colors">
          Watch on Disney+
        </button>
      </div>
    </div>
  </div>
</section>

<!-- Major Franchises Section -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-4xl font-bold mb-2">Legendary Franchises</h2>
  <p class="text-gray-600 mb-8">The blockbuster series that define modern cinema</p>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each majorFranchises as franchise}
      <div class="bg-gradient-to-br from-blue-50 to-gold-50 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300">
        <div class="flex items-center mb-4">
          <span class="text-5xl mr-4">{franchise.icon}</span>
          <div>
            <h3 class="text-2xl font-bold text-blue-900">{franchise.title}</h3>
            <p class="text-gold-600 font-semibold">{franchise.boxOffice}</p>
          </div>
        </div>
        <p class="text-gray-700 mb-4">{franchise.description}</p>
        <div class="border-t pt-4">
          <p class="text-sm font-semibold text-blue-800 mb-2">Films in franchise:</p>
          <div class="space-y-1 max-h-32 overflow-y-auto">
            {#each franchise.films as film}
              <p class="text-xs text-gray-600">• {film}</p>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- Recent Releases -->
<section class="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold mb-8">Recent Releases</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each recentReleases as film}
        <div class="bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition-all">
          <div class="flex justify-between items-start mb-3">
            <h3 class="text-xl font-bold">{film.title}</h3>
            <span class="bg-gold-500 text-blue-900 px-2 py-1 rounded text-xs font-bold">{film.rating}</span>
          </div>
          <p class="text-gold-300 text-sm mb-2">{film.year} • {film.director}</p>
          <p class="text-blue-100 text-sm mb-3">{film.description}</p>
          <p class="text-gold-400 font-bold">Box Office: {film.boxOffice}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Classic Films Library -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-4xl font-bold mb-2">Timeless Classics</h2>
  <p class="text-gray-600 mb-8">The films that shaped cinema history</p>
  
  <div class="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-4">
    {#each classicFilms as film}
      <div class="group cursor-pointer">
        <div class="bg-gradient-to-br from-blue-100 to-gold-100 rounded-lg p-3 text-center hover:shadow-lg transition-all transform hover:scale-110">
          <div class="text-3xl mb-1">{film.icon}</div>
          <h4 class="text-xs font-bold text-blue-900">{film.title}</h4>
          <p class="text-xs text-gray-600">{film.year}</p>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- Awards and Achievements -->
<section class="bg-gradient-to-br from-gold-500 to-gold-600 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold mb-8 text-center text-blue-900">Awards & Achievements</h2>
    
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
      <div class="bg-white rounded-2xl p-6 text-center shadow-lg">
        <div class="text-5xl mb-2">🏆</div>
        <div class="text-3xl font-bold text-blue-900">{awards.academyAwards.bestPicture}</div>
        <p class="text-sm font-semibold">Best Picture Oscars</p>
      </div>
      
      <div class="bg-white rounded-2xl p-6 text-center shadow-lg">
        <div class="text-5xl mb-2">🎬</div>
        <div class="text-3xl font-bold text-blue-900">{awards.academyAwards.total}+</div>
        <p class="text-sm font-semibold">Total Academy Awards</p>
      </div>
      
      <div class="bg-white rounded-2xl p-6 text-center shadow-lg">
        <div class="text-5xl mb-2">🌟</div>
        <div class="text-3xl font-bold text-blue-900">{awards.goldenGlobes}</div>
        <p class="text-sm font-semibold">Golden Globe Awards</p>
      </div>
      
      <div class="bg-white rounded-2xl p-6 text-center shadow-lg">
        <div class="text-5xl mb-2">🎭</div>
        <div class="text-3xl font-bold text-blue-900">{awards.decades}</div>
        <p class="text-sm font-semibold">Decades of Excellence</p>
      </div>
    </div>
    
    <div class="mt-12 text-center">
      <p class="text-blue-900 text-xl font-semibold">Home to 4 Best Picture Winners</p>
      <p class="text-blue-800 mt-2">The Sound of Music • Patton • The French Connection • Titanic</p>
    </div>
  </div>
</section>

<!-- Upcoming Projects -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-4xl font-bold mb-8">Coming Soon</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each upcomingProjects as project}
      <div class="bg-gradient-to-br from-blue-800 to-blue-900 text-white rounded-2xl p-6 hover:shadow-2xl transition-all">
        <div class="flex justify-between items-start mb-4">
          <h3 class="text-xl font-bold">{project.title}</h3>
          <span class="bg-gold-500 text-blue-900 px-3 py-1 rounded-full text-xs font-bold">{project.status}</span>
        </div>
        <p class="text-gold-300 mb-2">{project.year} • {project.director}</p>
        <p class="text-blue-100">{project.description}</p>
      </div>
    {/each}
  </div>
</section>

<!-- Studio Legacy -->
<section class="bg-gradient-to-r from-blue-50 to-gold-50 py-16">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-4xl font-bold mb-8 text-center text-blue-900">Our Legacy</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white rounded-2xl p-8 shadow-lg">
          <h3 class="text-2xl font-bold mb-4 text-blue-900">Innovation in Cinema</h3>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <span class="text-gold-500 mr-2">•</span>
              <span>Pioneered CinemaScope widescreen format</span>
            </li>
            <li class="flex items-start">
              <span class="text-gold-500 mr-2">•</span>
              <span>First studio to embrace television production</span>
            </li>
            <li class="flex items-start">
              <span class="text-gold-500 mr-2">•</span>
              <span>Revolutionary visual effects in Avatar franchise</span>
            </li>
            <li class="flex items-start">
              <span class="text-gold-500 mr-2">•</span>
              <span>Leader in 3D and high frame rate technology</span>
            </li>
          </ul>
        </div>
        
        <div class="bg-white rounded-2xl p-8 shadow-lg">
          <h3 class="text-2xl font-bold mb-4 text-blue-900">Iconic Filmmakers</h3>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <span class="text-gold-500 mr-2">•</span>
              <span>James Cameron - Avatar, Titanic, Aliens</span>
            </li>
            <li class="flex items-start">
              <span class="text-gold-500 mr-2">•</span>
              <span>Ridley Scott - Alien, The Martian</span>
            </li>
            <li class="flex items-start">
              <span class="text-gold-500 mr-2">•</span>
              <span>Steven Spielberg - Minority Report, War Horse</span>
            </li>
            <li class="flex items-start">
              <span class="text-gold-500 mr-2">•</span>
              <span>Wes Anderson - Grand Budapest Hotel, French Dispatch</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Call to Action -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-r from-blue-900 to-gold-600 rounded-3xl p-8 md:p-12 text-white text-center">
    <h2 class="text-3xl md:text-4xl font-bold mb-4">Experience 20th Century Studios</h2>
    <p class="text-xl mb-8 text-gold-200 max-w-2xl mx-auto">
      Stream our complete collection of films, from beloved classics to the latest blockbusters
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <button class="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-gold-100 transition-colors">
        Browse on Disney+
      </button>
      <button class="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-900 transition-colors">
        View Theatrical Releases
      </button>
    </div>
  </div>
</section>

<style>
  /* Custom gold color */
  .text-gold-200 { color: #fde68a; }
  .text-gold-300 { color: #fcd34d; }
  .text-gold-400 { color: #fbbf24; }
  .text-gold-500 { color: #f59e0b; }
  .text-gold-600 { color: #d97706; }
  .bg-gold-50 { background-color: #fffbeb; }
  .bg-gold-100 { background-color: #fef3c7; }
  .bg-gold-400 { background-color: #fbbf24; }
  .bg-gold-500 { background-color: #f59e0b; }
  .bg-gold-600 { background-color: #d97706; }
  .from-gold-500 { --tw-gradient-from: #f59e0b; }
  .from-gold-600 { --tw-gradient-from: #d97706; }
  .to-gold-50 { --tw-gradient-to: #fffbeb; }
  .to-gold-100 { --tw-gradient-to: #fef3c7; }
  .to-gold-600 { --tw-gradient-to: #d97706; }
  .border-gold-400 { border-color: #fbbf24; }
  
  /* Searchlight animation */
  @keyframes searchlight {
    0%, 100% { 
      opacity: 0;
    }
    50% { 
      opacity: 1;
    }
  }
  
  .animate-searchlight {
    animation: searchlight 3s ease-in-out;
  }
</style>