<script>
  import { onMount } from 'svelte';
  
  // Star Wars saga films
  const starWarsSaga = {
    prequels: [
      {
        title: 'Episode I: The Phantom Menace',
        year: 1999,
        description: 'The discovery of young Anakin Skywalker and the return of the Sith',
        icon: '⚔️'
      },
      {
        title: 'Episode II: Attack of the Clones',
        year: 2002,
        description: 'The Clone Wars begin as Anakin and Padmé fall in love',
        icon: '🌟'
      },
      {
        title: 'Episode III: Revenge of the Sith',
        year: 2005,
        description: 'The fall of Anakin Skywalker and rise of Darth Vader',
        icon: '🔥'
      }
    ],
    originalTrilogy: [
      {
        title: 'Episode IV: A New Hope',
        year: 1977,
        description: 'Luke Skywalker joins the Rebellion against the Empire',
        icon: '🌟'
      },
      {
        title: 'Episode V: The Empire Strikes Back',
        year: 1980,
        description: 'The Empire strikes back as Luke trains with Yoda',
        icon: '❄️'
      },
      {
        title: 'Episode VI: Return of the Jedi',
        year: 1983,
        description: 'The final confrontation between Luke and Vader',
        icon: '⚡'
      }
    ],
    sequels: [
      {
        title: 'Episode VII: The Force Awakens',
        year: 2015,
        description: 'A new generation rises as the First Order threatens the galaxy',
        icon: '✨'
      },
      {
        title: 'Episode VIII: The Last Jedi',
        year: 2017,
        description: 'Rey seeks training from Luke as the Resistance flees',
        icon: '🌊'
      },
      {
        title: 'Episode IX: The Rise of Skywalker',
        year: 2019,
        description: 'The final battle between the light and dark sides',
        icon: '⚡'
      }
    ],
    anthology: [
      {
        title: 'Rogue One: A Star Wars Story',
        year: 2016,
        description: 'The mission to steal the Death Star plans',
        icon: '🎯'
      },
      {
        title: 'Solo: A Star Wars Story',
        year: 2018,
        description: 'The early adventures of Han Solo',
        icon: '🚀'
      }
    ]
  };

  // Star Wars series
  const starWarsSeries = [
    {
      title: 'The Mandalorian',
      years: '2019-present',
      description: 'A lone gunfighter makes his way through the outer reaches of the galaxy',
      platform: 'Disney+',
      icon: '🎭'
    },
    {
      title: 'The Book of Boba Fett',
      years: '2021-2022',
      description: 'Boba Fett navigates the underworld of Tatooine',
      platform: 'Disney+',
      icon: '🏜️'
    },
    {
      title: 'Obi-Wan Kenobi',
      years: '2022',
      description: 'Obi-Wan watches over Luke during the dark times',
      platform: 'Disney+',
      icon: '🌠'
    },
    {
      title: 'Andor',
      years: '2022-present',
      description: 'The story of Cassian Andor and the early Rebellion',
      platform: 'Disney+',
      icon: '🔫'
    },
    {
      title: 'Ahsoka',
      years: '2023',
      description: 'Ahsoka Tano hunts the elusive Grand Admiral Thrawn',
      platform: 'Disney+',
      icon: '⚔️'
    },
    {
      title: 'The Clone Wars',
      years: '2008-2020',
      description: 'Animated series exploring the Clone Wars era',
      platform: 'Disney+',
      icon: '🎨'
    },
    {
      title: 'Rebels',
      years: '2014-2018',
      description: 'A ragtag crew sparks the rebellion against the Empire',
      platform: 'Disney+',
      icon: '🚀'
    },
    {
      title: 'The Bad Batch',
      years: '2021-2024',
      description: 'Elite clone troopers navigate a changing galaxy',
      platform: 'Disney+',
      icon: '💀'
    }
  ];

  // Indiana Jones franchise
  const indianaJones = [
    {
      title: 'Raiders of the Lost Ark',
      year: 1981,
      description: 'Indy races Nazis to find the biblical Ark of the Covenant',
      icon: '🏺'
    },
    {
      title: 'Temple of Doom',
      year: 1984,
      description: 'A dark adventure in India to recover sacred stones',
      icon: '💎'
    },
    {
      title: 'Last Crusade',
      year: 1989,
      description: 'Father and son search for the Holy Grail',
      icon: '🏆'
    },
    {
      title: 'Kingdom of the Crystal Skull',
      year: 2008,
      description: 'Cold War adventure with interdimensional beings',
      icon: '💀'
    },
    {
      title: 'Dial of Destiny',
      year: 2023,
      description: "Indy's final adventure through time",
      icon: '⏰'
    }
  ];

  // Other Lucasfilm properties
  const otherProperties = [
    {
      title: 'Willow',
      year: 1988,
      description: 'Fantasy adventure of an unlikely hero saving a baby princess',
      series: 'Willow (2022, Disney+)',
      icon: '🧙'
    },
    {
      title: 'American Graffiti',
      year: 1973,
      description: "George Lucas's breakthrough film about 1960s youth culture",
      icon: '🚗'
    },
    {
      title: 'THX 1138',
      year: 1971,
      description: "Lucas's dystopian sci-fi debut feature",
      icon: '🤖'
    },
    {
      title: 'Strange Magic',
      year: 2015,
      description: 'Animated musical fairy tale adventure',
      icon: '🧚'
    },
    {
      title: 'Red Tails',
      year: 2012,
      description: 'The story of the Tuskegee Airmen in WWII',
      icon: '✈️'
    }
  ];

  // ILM achievements
  const ilmAchievements = [
    {
      title: 'Motion Control Photography',
      year: 1977,
      description: 'Revolutionary camera system for Star Wars space battles',
      films: 'Star Wars, Close Encounters',
      icon: '📷'
    },
    {
      title: 'Go Motion',
      year: 1981,
      description: 'Enhanced stop-motion technique for realistic movement',
      films: 'Dragonslayer, E.T.',
      icon: '🐉'
    },
    {
      title: 'Digital Compositing',
      year: 1985,
      description: 'First fully digital composite shot in a feature film',
      films: 'Young Sherlock Holmes',
      icon: '💻'
    },
    {
      title: 'Morphing Technology',
      year: 1988,
      description: 'Seamless transformation between images',
      films: 'Willow, Terminator 2',
      icon: '🔄'
    },
    {
      title: 'Digital Characters',
      year: 1993,
      description: 'First photorealistic CG creatures',
      films: 'Jurassic Park',
      icon: '🦕'
    },
    {
      title: 'Motion Capture',
      year: 1999,
      description: 'Performance capture for digital characters',
      films: 'Star Wars Prequels, Pirates',
      icon: '🎭'
    },
    {
      title: 'Virtual Production',
      year: 2019,
      description: 'StageCraft LED volume technology',
      films: 'The Mandalorian',
      icon: '🎬'
    },
    {
      title: 'AI-Enhanced VFX',
      year: 2023,
      description: 'Machine learning for advanced visual effects',
      films: 'Indiana Jones 5, Ahsoka',
      icon: '🤖'
    }
  ];

  // Upcoming projects
  const upcomingProjects = [
    {
      title: 'The Mandalorian & Grogu',
      type: 'Film',
      year: 2026,
      description: 'First Star Wars theatrical release since 2019',
      icon: '🎬'
    },
    {
      title: 'New Jedi Order Film',
      type: 'Film',
      year: 'TBA',
      description: 'Rey rebuilds the Jedi Order 15 years after Episode IX',
      icon: '⚔️'
    },
    {
      title: 'Dawn of the Jedi Film',
      type: 'Film',
      year: 'TBA',
      description: 'The origins of the Force and the first Jedi',
      icon: '🌅'
    },
    {
      title: 'Skeleton Crew',
      type: 'Series',
      year: 2024,
      description: 'Kids lost in the Star Wars galaxy',
      icon: '🏴‍☠️'
    },
    {
      title: 'The Acolyte',
      type: 'Series',
      year: 2024,
      description: 'Mystery thriller set in the High Republic era',
      icon: '🗡️'
    }
  ];

  // Awards and legacy
  const awards = {
    academyAwards: 50,
    technicalAchievements: 15,
    visualEffectsOscars: 16,
    soundOscars: 8,
    specialAchievements: 7
  };

  let crawlAnimation = false;
  let lightsaberActive = false;
  
  onMount(() => {
    // Trigger crawl animation on load
    setTimeout(() => {
      crawlAnimation = true;
    }, 500);
    
    // Lightsaber effect
    const interval = setInterval(() => {
      lightsaberActive = !lightsaberActive;
    }, 3000);
    
    return () => clearInterval(interval);
  });
</script>

<svelte:head>
  <title>Lucasfilm - Home of Star Wars, Indiana Jones & ILM</title>
</svelte:head>

<!-- Hero Section with Star Wars Crawl Effect -->
<section class="relative min-h-screen bg-black overflow-hidden">
  <!-- Star field background -->
  <div class="absolute inset-0">
    <div class="stars"></div>
    <div class="stars2"></div>
    <div class="stars3"></div>
  </div>
  
  <!-- Hero Content -->
  <div class="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen">
    <div class={`text-center transform transition-all duration-1000 ${crawlAnimation ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
      <h1 class="text-6xl md:text-8xl font-bold mb-6 text-yellow-400 tracking-wider">
        LUCASFILM
      </h1>
      <p class="text-2xl md:text-3xl mb-8 text-blue-400 font-light tracking-widest">
        A LONG TIME AGO IN A GALAXY FAR, FAR AWAY....
      </p>
      <div class="max-w-3xl mx-auto text-white text-lg leading-relaxed space-y-4">
        <p>Home to the greatest stories in the galaxy</p>
        <p>Where myth meets technology</p>
      </div>
      
    </div>
    
    <!-- Lightsaber effect -->
    <div class={`absolute bottom-10 transition-all duration-500 ${lightsaberActive ? 'opacity-100' : 'opacity-0'}`}>
      <div class="w-1 h-32 bg-gradient-to-t from-blue-400 via-blue-300 to-white rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)]"></div>
    </div>
  </div>
</section>

<!-- Star Wars Saga Section -->
<section class="bg-gray-900 text-white py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold mb-12 text-center text-yellow-400">THE STAR WARS SAGA</h2>
    
    <!-- Prequel Trilogy -->
    <div class="mb-12">
      <h3 class="text-2xl font-bold mb-6 text-blue-400">PREQUEL TRILOGY</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        {#each starWarsSaga.prequels as film}
          <div class="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-yellow-400 transition-colors group">
            <div class="text-4xl mb-4">{film.icon}</div>
            <h4 class="text-xl font-bold mb-2 text-yellow-300">{film.title}</h4>
            <p class="text-gray-400 mb-2">{film.year}</p>
            <p class="text-gray-300">{film.description}</p>
          </div>
        {/each}
      </div>
    </div>
    
    <!-- Original Trilogy -->
    <div class="mb-12">
      <h3 class="text-2xl font-bold mb-6 text-blue-400">ORIGINAL TRILOGY</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        {#each starWarsSaga.originalTrilogy as film}
          <div class="bg-gray-800 rounded-lg p-6 border-2 border-yellow-400 hover:shadow-[0_0_20px_rgba(250,204,21,0.3)] transition-all">
            <div class="text-4xl mb-4">{film.icon}</div>
            <h4 class="text-xl font-bold mb-2 text-yellow-300">{film.title}</h4>
            <p class="text-gray-400 mb-2">{film.year}</p>
            <p class="text-gray-300">{film.description}</p>
          </div>
        {/each}
      </div>
    </div>
    
    <!-- Sequel Trilogy -->
    <div class="mb-12">
      <h3 class="text-2xl font-bold mb-6 text-blue-400">SEQUEL TRILOGY</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        {#each starWarsSaga.sequels as film}
          <div class="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-400 transition-colors">
            <div class="text-4xl mb-4">{film.icon}</div>
            <h4 class="text-xl font-bold mb-2 text-yellow-300">{film.title}</h4>
            <p class="text-gray-400 mb-2">{film.year}</p>
            <p class="text-gray-300">{film.description}</p>
          </div>
        {/each}
      </div>
    </div>
    
    <!-- Anthology Films -->
    <div>
      <h3 class="text-2xl font-bold mb-6 text-blue-400">A STAR WARS STORY</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {#each starWarsSaga.anthology as film}
          <div class="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-red-400 transition-colors">
            <div class="text-4xl mb-4">{film.icon}</div>
            <h4 class="text-xl font-bold mb-2 text-yellow-300">{film.title}</h4>
            <p class="text-gray-400 mb-2">{film.year}</p>
            <p class="text-gray-300">{film.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- Star Wars Series -->
<section class="bg-gradient-to-b from-gray-900 to-black py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold mb-12 text-center text-yellow-400">STAR WARS ON DISNEY+</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each starWarsSeries as series}
        <div class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 hover:from-gray-700 hover:to-gray-800 transition-all group">
          <div class="text-4xl mb-4 group-hover:animate-pulse">{series.icon}</div>
          <h3 class="text-xl font-bold mb-2 text-yellow-300">{series.title}</h3>
          <p class="text-sm text-blue-400 mb-2">{series.years}</p>
          <p class="text-gray-300 text-sm mb-3">{series.description}</p>
          <p class="text-xs text-gray-500">{series.platform}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Indiana Jones Section -->
<section class="bg-gradient-to-br from-yellow-900 via-yellow-800 to-amber-900 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold mb-2 text-center text-white">INDIANA JONES</h2>
    <p class="text-xl text-center text-yellow-200 mb-12">The Greatest Adventure Hero of All Time</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {#each indianaJones as film}
        <div class="bg-gradient-to-br from-amber-700 to-amber-800 rounded-lg p-6 text-white hover:from-amber-600 hover:to-amber-700 transition-all transform hover:scale-105">
          <div class="text-5xl mb-4 text-center">{film.icon}</div>
          <h3 class="text-lg font-bold mb-2">{film.title}</h3>
          <p class="text-sm text-yellow-200 mb-2">{film.year}</p>
          <p class="text-sm">{film.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Other Properties -->
<section class="bg-gray-100 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold text-gray-900 mb-8">Other Lucasfilm Properties</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each otherProperties as property}
        <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div class="text-4xl mb-4">{property.icon}</div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
          <p class="text-gray-600 mb-2">{property.year}</p>
          <p class="text-gray-700 mb-2">{property.description}</p>
          {#if property.series}
            <p class="text-sm text-blue-600 font-semibold">{property.series}</p>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- ILM Section -->
<section class="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-16">
  <div class="container mx-auto px-4">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold mb-4">INDUSTRIAL LIGHT & MAGIC</h2>
      <p class="text-xl text-blue-200">Pioneering Visual Effects Since 1975</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each ilmAchievements as achievement}
        <div class="bg-white/10 backdrop-blur rounded-lg p-6 hover:bg-white/20 transition-all">
          <div class="text-4xl mb-4">{achievement.icon}</div>
          <h3 class="text-xl font-bold mb-2">{achievement.title}</h3>
          <p class="text-sm text-blue-200 mb-2">{achievement.year}</p>
          <p class="text-sm mb-2">{achievement.description}</p>
          <p class="text-xs text-blue-300 italic">{achievement.films}</p>
        </div>
      {/each}
    </div>
    
    <div class="mt-12 text-center">
      <div class="inline-grid grid-cols-2 md:grid-cols-5 gap-6 bg-white/10 rounded-2xl p-8">
        <div>
          <div class="text-4xl font-bold text-yellow-400">{awards.academyAwards}</div>
          <p class="text-sm">Academy Awards</p>
        </div>
        <div>
          <div class="text-4xl font-bold text-yellow-400">{awards.visualEffectsOscars}</div>
          <p class="text-sm">VFX Oscars</p>
        </div>
        <div>
          <div class="text-4xl font-bold text-yellow-400">{awards.soundOscars}</div>
          <p class="text-sm">Sound Oscars</p>
        </div>
        <div>
          <div class="text-4xl font-bold text-yellow-400">{awards.technicalAchievements}</div>
          <p class="text-sm">Technical Awards</p>
        </div>
        <div>
          <div class="text-4xl font-bold text-yellow-400">{awards.specialAchievements}</div>
          <p class="text-sm">Special Awards</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Upcoming Projects -->
<section class="bg-black text-white py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold mb-12 text-center text-yellow-400">COMING SOON</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {#each upcomingProjects as project}
        <div class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700 hover:border-yellow-400 transition-all">
          <div class="flex items-center justify-between mb-4">
            <span class="text-4xl">{project.icon}</span>
            <span class="text-sm text-blue-400 font-bold">{project.type}</span>
          </div>
          <h3 class="text-xl font-bold mb-2 text-yellow-300">{project.title}</h3>
          <p class="text-gray-400 mb-2">{project.year}</p>
          <p class="text-gray-300 text-sm">{project.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Legacy Section -->
<section class="bg-gradient-to-b from-gray-900 to-black py-16">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto text-center text-white">
      <h2 class="text-4xl font-bold mb-8 text-yellow-400">LEGACY & CULTURAL IMPACT</h2>
      
      <div class="space-y-8">
        <div class="bg-gray-800/50 rounded-2xl p-8 backdrop-blur">
          <h3 class="text-2xl font-bold mb-4 text-blue-400">Transforming Cinema</h3>
          <p class="text-lg leading-relaxed">
            Since 1977, Lucasfilm has revolutionized filmmaking with groundbreaking visual effects, 
            immersive sound design, and storytelling that spans generations. From the creation of 
            blockbuster cinema to pioneering digital filmmaking, Lucasfilm continues to push boundaries.
          </p>
        </div>
        
        <div class="bg-gray-800/50 rounded-2xl p-8 backdrop-blur">
          <h3 class="text-2xl font-bold mb-4 text-blue-400">Cultural Phenomenon</h3>
          <p class="text-lg leading-relaxed">
            Star Wars has become more than entertainment—it's a cultural touchstone that has influenced 
            art, technology, and storytelling worldwide. The Force, Jedi, and iconic characters have 
            entered our collective consciousness and inspired millions.
          </p>
        </div>
        
        <div class="bg-gray-800/50 rounded-2xl p-8 backdrop-blur">
          <h3 class="text-2xl font-bold mb-4 text-blue-400">Innovation Leader</h3>
          <p class="text-lg leading-relaxed">
            Through ILM and Skywalker Sound, Lucasfilm has earned over 50 Academy Awards and created 
            technologies that have become industry standards. From THX to StageCraft, innovation 
            remains at the heart of everything we do.
          </p>
        </div>
      </div>
      
      <div class="mt-12">
        <p class="text-2xl text-yellow-400 font-light italic">
          "The Force will be with you. Always."
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Call to Action -->
<section class="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
  <div class="container mx-auto px-4">
    <div class="max-w-3xl mx-auto text-center text-white">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Experience the Magic on Disney+</h2>
      <p class="text-xl mb-8 text-blue-100">
        Stream the complete Star Wars saga, Indiana Jones adventures, and exclusive series
      </p>
    </div>
  </div>
</section>

<style>
  /* Star field animation */
  .stars {
    position: absolute;
    width: 1px;
    height: 1px;
    background: white;
    box-shadow: 
      100px 100px white, 200px 150px white, 300px 250px white,
      400px 200px white, 500px 300px white, 600px 150px white,
      700px 250px white, 800px 100px white, 900px 350px white,
      150px 400px white, 250px 450px white, 350px 500px white,
      450px 550px white, 550px 600px white, 650px 400px white,
      750px 500px white, 850px 450px white, 950px 550px white;
    animation: animStar 50s linear infinite;
  }
  
  .stars2 {
    position: absolute;
    width: 2px;
    height: 2px;
    background: white;
    box-shadow: 
      150px 200px white, 250px 100px white, 350px 300px white,
      450px 150px white, 550px 250px white, 650px 350px white,
      750px 200px white, 850px 300px white, 950px 150px white,
      100px 450px white, 200px 550px white, 300px 400px white,
      400px 500px white, 500px 600px white, 600px 450px white,
      700px 550px white, 800px 400px white, 900px 500px white;
    animation: animStar 100s linear infinite;
  }
  
  .stars3 {
    position: absolute;
    width: 1px;
    height: 1px;
    background: white;
    box-shadow: 
      50px 150px white, 150px 50px white, 250px 200px white,
      350px 100px white, 450px 250px white, 550px 150px white,
      650px 50px white, 750px 200px white, 850px 100px white,
      200px 350px white, 300px 450px white, 400px 350px white,
      500px 450px white, 600px 550px white, 700px 350px white,
      800px 450px white, 900px 350px white;
    animation: animStar 150s linear infinite;
  }
  
  @keyframes animStar {
    from { transform: translateY(0px); }
    to { transform: translateY(-2000px); }
  }
</style>