<script>
  import { onMount } from 'svelte';
  
  // Featured films data
  const featuredFilms = [
    {
      title: 'Elemental',
      year: 2023,
      description: 'A city where fire-, water-, earth- and air-residents live together',
      poster: '🔥',
      director: 'Peter Sohn'
    },
    {
      title: 'Turning Red',
      year: 2022,
      description: 'A girl who transforms into a giant red panda when stressed',
      poster: '🐼',
      director: 'Domee Shi'
    },
    {
      title: 'Luca',
      year: 2021,
      description: 'A young boy experiences an unforgettable summer on the Italian Riviera',
      poster: '🌊',
      director: 'Enrico Casarosa'
    },
    {
      title: 'Soul',
      year: 2020,
      description: 'A musician who has lost his passion for music is transported to another realm',
      poster: '🎷',
      director: 'Pete Docter'
    }
  ];

  // Upcoming films
  const upcomingFilms = [
    {
      title: 'Elio',
      year: 2025,
      description: 'An 11-year-old dreamer who finds himself beamed up to space',
      poster: '👽'
    },
    {
      title: 'Inside Out 3',
      year: 2026,
      description: 'Riley continues to navigate life with her emotions',
      poster: '🧠'
    }
  ];

  // All Pixar films chronologically
  const allFilms = [
    { title: 'Toy Story', year: 1995, icon: '🤠' },
    { title: "A Bug's Life", year: 1998, icon: '🐛' },
    { title: 'Toy Story 2', year: 1999, icon: '🤠' },
    { title: 'Monsters, Inc.', year: 2001, icon: '👹' },
    { title: 'Finding Nemo', year: 2003, icon: '🐠' },
    { title: 'The Incredibles', year: 2004, icon: '🦸' },
    { title: 'Cars', year: 2006, icon: '🏎️' },
    { title: 'Ratatouille', year: 2007, icon: '🐀' },
    { title: 'WALL-E', year: 2008, icon: '🤖' },
    { title: 'Up', year: 2009, icon: '🎈' },
    { title: 'Toy Story 3', year: 2010, icon: '🤠' },
    { title: 'Cars 2', year: 2011, icon: '🏎️' },
    { title: 'Brave', year: 2012, icon: '🏹' },
    { title: 'Monsters University', year: 2013, icon: '👹' },
    { title: 'Inside Out', year: 2015, icon: '🧠' },
    { title: 'The Good Dinosaur', year: 2015, icon: '🦕' },
    { title: 'Finding Dory', year: 2016, icon: '🐠' },
    { title: 'Cars 3', year: 2017, icon: '🏎️' },
    { title: 'Coco', year: 2017, icon: '🎸' },
    { title: 'Incredibles 2', year: 2018, icon: '🦸' },
    { title: 'Toy Story 4', year: 2019, icon: '🤠' },
    { title: 'Onward', year: 2020, icon: '🧙' },
    { title: 'Soul', year: 2020, icon: '🎷' },
    { title: 'Luca', year: 2021, icon: '🌊' },
    { title: 'Turning Red', year: 2022, icon: '🐼' },
    { title: 'Lightyear', year: 2022, icon: '🚀' },
    { title: 'Elemental', year: 2023, icon: '🔥' },
    { title: 'Inside Out 2', year: 2024, icon: '🧠' }
  ];

  // Shorts and SparkShorts
  const shorts = {
    theatrical: [
      { title: 'The Adventures of André & Wally B.', year: 1984 },
      { title: 'Luxo Jr.', year: 1986 },
      { title: "Red's Dream", year: 1987 },
      { title: 'Tin Toy', year: 1988 },
      { title: 'Knick Knack', year: 1989 },
      { title: "Geri's Game", year: 1997 },
      { title: 'For the Birds', year: 2000 },
      { title: "Mike's New Car", year: 2002 },
      { title: 'Boundin\'', year: 2003 },
      { title: 'Jack-Jack Attack', year: 2005 },
      { title: 'One Man Band', year: 2005 },
      { title: 'Mater and the Ghostlight', year: 2006 },
      { title: 'Lifted', year: 2006 },
      { title: 'Your Friend the Rat', year: 2007 },
      { title: 'BURN-E', year: 2008 },
      { title: 'Presto', year: 2008 },
      { title: 'Partly Cloudy', year: 2009 },
      { title: 'Day & Night', year: 2010 },
      { title: 'La Luna', year: 2011 },
      { title: 'The Blue Umbrella', year: 2013 },
      { title: 'Lava', year: 2014 },
      { title: 'Sanjay\'s Super Team', year: 2015 },
      { title: 'Piper', year: 2016 },
      { title: 'LOU', year: 2017 },
      { title: 'Bao', year: 2018 },
      { title: 'Kitbull', year: 2019 },
      { title: 'Float', year: 2019 },
      { title: 'Wind', year: 2019 },
      { title: 'Loop', year: 2020 },
      { title: 'Out', year: 2020 },
      { title: 'Burrow', year: 2020 },
      { title: '22 vs. Earth', year: 2021 },
      { title: 'Alberto\'s Lullaby', year: 2021 },
      { title: 'Ciao Alberto', year: 2021 },
      { title: 'Cars on the Road', year: 2022 },
      { title: 'Carl\'s Date', year: 2023 },
      { title: 'Dug Days', year: 2021 }
    ],
    sparkShorts: [
      { title: 'Purl', year: 2019, director: 'Kristen Lester' },
      { title: 'Smash and Grab', year: 2019, director: 'Brian Larsen' },
      { title: 'Kitbull', year: 2019, director: 'Rosana Sullivan' },
      { title: 'Float', year: 2019, director: 'Bobby Rubio' },
      { title: 'Wind', year: 2019, director: 'Edwin Chang' },
      { title: 'Loop', year: 2020, director: 'Erica Milsom' },
      { title: 'Out', year: 2020, director: 'Steven Clay Hunter' },
      { title: 'Burrow', year: 2020, director: 'Madeline Sharafian' },
      { title: 'Twenty Something', year: 2021, director: 'Aphton Corbin' },
      { title: 'Nona', year: 2021, director: 'Louis Gonzales' }
    ]
  };

  // Technology innovations
  const innovations = [
    {
      title: 'RenderMan',
      year: 1989,
      description: 'Revolutionary rendering software that set the standard for CGI',
      icon: '🎨'
    },
    {
      title: 'Subdivision Surfaces',
      year: 1997,
      description: "Smooth character modeling pioneered in Geri's Game",
      icon: '🔧'
    },
    {
      title: 'Fur & Hair Simulation',
      year: 2001,
      description: 'Realistic fur rendering developed for Monsters, Inc.',
      icon: '🦁'
    },
    {
      title: 'Ocean & Water Effects',
      year: 2003,
      description: 'Advanced water simulation for Finding Nemo',
      icon: '🌊'
    },
    {
      title: 'Subsurface Scattering',
      year: 2004,
      description: 'Realistic skin rendering in The Incredibles',
      icon: '💡'
    },
    {
      title: 'Global Illumination',
      year: 2008,
      description: 'Photorealistic lighting system developed for WALL-E',
      icon: '☀️'
    },
    {
      title: 'Universal Scene Description',
      year: 2016,
      description: 'Open-source framework for 3D content exchange',
      icon: '🌐'
    },
    {
      title: 'Machine Learning Tools',
      year: 2020,
      description: 'AI-assisted animation and rendering techniques',
      icon: '🤖'
    }
  ];

  // Awards and achievements
  const awards = {
    academyAwards: {
      bestAnimatedFeature: 11,
      technicalAchievement: 20,
      scientificEngineering: 5
    },
    goldenGlobes: 10,
    grammys: 3,
    emmys: 8,
    annies: 200
  };

  let lampBounceAnimation = false;
  
  onMount(() => {
    // Trigger lamp bounce animation periodically
    const interval = setInterval(() => {
      lampBounceAnimation = true;
      setTimeout(() => lampBounceAnimation = false, 600);
    }, 5000);
    
    return () => clearInterval(interval);
  });
</script>

<svelte:head>
  <title>Pixar Animation Studios - Where Dreams Come to Life</title>
</svelte:head>

<!-- Hero Section with Luxo Jr. -->
<section class="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-yellow-400 text-white">
  <div class="absolute inset-0 opacity-10">
    <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
  </div>
  
  <div class="relative z-10 container mx-auto px-4 py-20">
    <div class="flex flex-col md:flex-row items-center justify-between">
      <div class="md:w-1/2 mb-8 md:mb-0">
        <h1 class="text-6xl md:text-7xl font-bold mb-6">
          <span class="text-yellow-300">PIXAR</span>
        </h1>
        <p class="text-2xl md:text-3xl mb-8 text-blue-100">
          Animation Studios
        </p>
        <p class="text-xl mb-8 max-w-xl">
          Where technology meets artistry to create unforgettable stories that touch hearts across generations.
        </p>
      </div>
      
      <!-- Luxo Jr. Lamp -->
      <div class="md:w-1/2 flex justify-center">
        <div class={`text-[200px] transition-transform duration-500 ${lampBounceAnimation ? 'animate-bounce' : ''}`}>
          💡
        </div>
      </div>
    </div>
  </div>
  
  <!-- Animated Ball -->
  <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2">
    <div class="w-12 h-12 bg-red-500 rounded-full animate-bounce"></div>
  </div>
</section>

<!-- Featured Films Section -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-4xl font-bold text-gray-900 mb-2">Now Streaming</h2>
  <p class="text-gray-900 mb-8">Our latest masterpieces available on Disney+</p>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {#each featuredFilms as film}
      <div class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105">
        <div class="aspect-[2/3] bg-gradient-to-br from-blue-400 to-yellow-400 flex items-center justify-center text-8xl">
          {film.poster}
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold text-gray-900 mb-1">{film.title}</h3>
          <p class="text-sm text-gray-900 mb-2">{film.year} • {film.director}</p>
          <p class="text-sm text-gray-900">{film.description}</p>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- Upcoming Films -->
<section class="bg-gradient-to-r from-yellow-50 to-blue-50 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold text-gray-900 mb-8">Coming Soon</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each upcomingFilms as film}
        <div class="bg-white rounded-2xl shadow-md p-8 flex items-center space-x-6">
          <div class="text-7xl">{film.poster}</div>
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">{film.title}</h3>
            <p class="text-gray-900 mb-2">{film.year}</p>
            <p class="text-gray-900">{film.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- All Films Chronologically -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-4xl font-bold text-gray-900 mb-8">Complete Film Library</h2>
  
  <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
    {#each allFilms as film}
      <div class="group cursor-pointer">
        <div class="bg-gradient-to-br from-blue-100 to-yellow-100 rounded-xl p-4 text-center hover:shadow-lg transition-all transform hover:scale-110">
          <div class="text-4xl mb-2">{film.icon}</div>
          <h4 class="text-xs font-bold text-gray-900">{film.title}</h4>
          <p class="text-xs text-gray-600">{film.year}</p>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- Shorts and SparkShorts -->
<section class="bg-gray-50 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold text-gray-900 mb-8">Shorts & SparkShorts</h2>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Theatrical Shorts -->
      <div class="bg-white rounded-2xl shadow-lg p-8">
        <h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span class="text-3xl mr-3">🎬</span>
          Theatrical Shorts
        </h3>
        <div class="space-y-2 max-h-96 overflow-y-auto">
          {#each shorts.theatrical as short}
            <div class="flex justify-between py-2 border-b border-gray-100 hover:bg-blue-50 px-2 rounded">
              <span class="font-medium text-gray-900">{short.title}</span>
              <span class="text-gray-600">{short.year}</span>
            </div>
          {/each}
        </div>
      </div>
      
      <!-- SparkShorts -->
      <div class="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl shadow-lg p-8">
        <h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span class="text-3xl mr-3">✨</span>
          SparkShorts Program
        </h3>
        <p class="text-gray-700 mb-4">Independent films by diverse storytellers</p>
        <div class="space-y-3">
          {#each shorts.sparkShorts as short}
            <div class="bg-white rounded-lg p-3 shadow-sm">
              <div class="flex justify-between items-center">
                <div>
                  <h4 class="font-bold text-gray-900">{short.title}</h4>
                  <p class="text-sm text-gray-600">by {short.director}</p>
                </div>
                <span class="text-sm text-gray-500">{short.year}</span>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Technology & Innovation -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-4xl font-bold text-gray-900 mb-2">Technology & Innovation</h2>
  <p class="text-gray-600 mb-8">Pioneering the future of animation</p>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {#each innovations as tech}
      <div class="bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl p-6 text-white hover:shadow-2xl transition-all transform hover:scale-105">
        <div class="text-4xl mb-4">{tech.icon}</div>
        <h3 class="text-xl font-bold mb-2">{tech.title}</h3>
        <p class="text-sm text-blue-100 mb-2">{tech.year}</p>
        <p class="text-sm">{tech.description}</p>
      </div>
    {/each}
  </div>
</section>

<!-- Awards & Achievements -->
<section class="bg-gradient-to-r from-yellow-400 to-yellow-500 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold mb-8 text-center text-blue-900">Awards & Recognition</h2>
    
    <div class="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
      <div class="bg-white rounded-2xl p-6 text-center shadow-lg">
        <div class="text-5xl mb-2">🏆</div>
        <div class="text-3xl font-bold text-blue-600">{awards.academyAwards.bestAnimatedFeature}</div>
        <p class="text-sm font-semibold">Best Animated Feature</p>
        <p class="text-xs text-gray-600">Academy Awards</p>
      </div>
      
      <div class="bg-white rounded-2xl p-6 text-center shadow-lg">
        <div class="text-5xl mb-2">🎬</div>
        <div class="text-3xl font-bold text-blue-600">{awards.academyAwards.technicalAchievement}</div>
        <p class="text-sm font-semibold">Technical Awards</p>
        <p class="text-xs text-gray-600">Academy Awards</p>
      </div>
      
      <div class="bg-white rounded-2xl p-6 text-center shadow-lg">
        <div class="text-5xl mb-2">🌟</div>
        <div class="text-3xl font-bold text-blue-600">{awards.goldenGlobes}</div>
        <p class="text-sm font-semibold">Golden Globes</p>
      </div>
      
      <div class="bg-white rounded-2xl p-6 text-center shadow-lg">
        <div class="text-5xl mb-2">🎵</div>
        <div class="text-3xl font-bold text-blue-600">{awards.grammys}</div>
        <p class="text-sm font-semibold">Grammy Awards</p>
      </div>
      
      <div class="bg-white rounded-2xl p-6 text-center shadow-lg">
        <div class="text-5xl mb-2">🎨</div>
        <div class="text-3xl font-bold text-blue-600">{awards.annies}+</div>
        <p class="text-sm font-semibold">Annie Awards</p>
      </div>
    </div>
  </div>
</section>

<!-- Behind the Scenes -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-4xl font-bold text-gray-900 mb-8">Behind the Magic</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 hover:shadow-xl transition-shadow">
      <div class="text-5xl mb-4">🎨</div>
      <h3 class="text-2xl font-bold text-gray-900 mb-4">The Art of Storytelling</h3>
      <p class="text-gray-700 mb-4">From initial sketches to final frames, discover how our artists bring characters and worlds to life.</p>
    </div>
    
    <div class="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-8 hover:shadow-xl transition-shadow">
      <div class="text-5xl mb-4">🎬</div>
      <h3 class="text-2xl font-bold text-gray-900 mb-4">Making of Documentaries</h3>
      <p class="text-gray-700 mb-4">Go behind the scenes with exclusive documentaries showing the creative process of our films.</p>
    </div>
    
    <div class="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 hover:shadow-xl transition-shadow">
      <div class="text-5xl mb-4">👥</div>
      <h3 class="text-2xl font-bold text-gray-900 mb-4">Meet the Artists</h3>
      <p class="text-gray-700 mb-4">Learn about the talented individuals who make Pixar the creative powerhouse it is today.</p>
    </div>
  </div>
</section>

<!-- Pixar Campus -->
<section class="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-16">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl font-bold mb-6">Visit Pixar Campus</h2>
      <p class="text-xl mb-8 text-blue-100">
        Located in Emeryville, California, our campus is where creativity and technology converge to create magic.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white/10 rounded-xl p-6 backdrop-blur">
          <div class="text-4xl mb-3">🏢</div>
          <h3 class="text-lg font-bold mb-2">Steve Jobs Building</h3>
          <p class="text-sm text-blue-100">Our central hub designed to foster collaboration</p>
        </div>
        <div class="bg-white/10 rounded-xl p-6 backdrop-blur">
          <div class="text-4xl mb-3">🎭</div>
          <h3 class="text-lg font-bold mb-2">Animation Theater</h3>
          <p class="text-sm text-blue-100">Where we premiere our films internally</p>
        </div>
        <div class="bg-white/10 rounded-xl p-6 backdrop-blur">
          <div class="text-4xl mb-3">🎨</div>
          <h3 class="text-lg font-bold mb-2">Artist Studios</h3>
          <p class="text-sm text-blue-100">Creative spaces where magic happens</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Call to Action -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center">
    <h2 class="text-3xl md:text-4xl font-bold mb-4">Experience Pixar on Disney+</h2>
    <p class="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
      Stream all your favorite Pixar films, shorts, and exclusive behind-the-scenes content
    </p>
  </div>
</section>

<style>
  /* Custom animation for Luxo Jr. lamp bounce */
  @keyframes lampBounce {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    25% { transform: translateY(-20px) rotate(-5deg); }
    75% { transform: translateY(-20px) rotate(5deg); }
  }
</style>