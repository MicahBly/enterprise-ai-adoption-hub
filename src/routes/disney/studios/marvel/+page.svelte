<script>
  import { onMount } from 'svelte';
  import { fade, fly, scale } from 'svelte/transition';
  
  let activePhase = 1;
  let selectedCharacter = null;
  
  const mcuPhases = [
    {
      phase: 1,
      title: "Phase One: Avengers Assembled",
      years: "2008-2012",
      films: [
        { title: "Iron Man", year: 2008, boxOffice: "$585.2M" },
        { title: "The Incredible Hulk", year: 2008, boxOffice: "$264.8M" },
        { title: "Iron Man 2", year: 2010, boxOffice: "$623.9M" },
        { title: "Thor", year: 2011, boxOffice: "$449.3M" },
        { title: "Captain America: The First Avenger", year: 2011, boxOffice: "$370.6M" },
        { title: "The Avengers", year: 2012, boxOffice: "$1.519B" }
      ]
    },
    {
      phase: 2,
      title: "Phase Two: Evolution",
      years: "2013-2015",
      films: [
        { title: "Iron Man 3", year: 2013, boxOffice: "$1.215B" },
        { title: "Thor: The Dark World", year: 2013, boxOffice: "$644.8M" },
        { title: "Captain America: The Winter Soldier", year: 2014, boxOffice: "$714.4M" },
        { title: "Guardians of the Galaxy", year: 2014, boxOffice: "$773.3M" },
        { title: "Avengers: Age of Ultron", year: 2015, boxOffice: "$1.403B" },
        { title: "Ant-Man", year: 2015, boxOffice: "$519.3M" }
      ]
    },
    {
      phase: 3,
      title: "Phase Three: Infinity Saga",
      years: "2016-2019",
      films: [
        { title: "Captain America: Civil War", year: 2016, boxOffice: "$1.153B" },
        { title: "Doctor Strange", year: 2016, boxOffice: "$677.8M" },
        { title: "Guardians of the Galaxy Vol. 2", year: 2017, boxOffice: "$863.8M" },
        { title: "Spider-Man: Homecoming", year: 2017, boxOffice: "$880.2M" },
        { title: "Thor: Ragnarok", year: 2017, boxOffice: "$854M" },
        { title: "Black Panther", year: 2018, boxOffice: "$1.349B" },
        { title: "Avengers: Infinity War", year: 2018, boxOffice: "$2.048B" },
        { title: "Ant-Man and the Wasp", year: 2018, boxOffice: "$622.7M" },
        { title: "Captain Marvel", year: 2019, boxOffice: "$1.128B" },
        { title: "Avengers: Endgame", year: 2019, boxOffice: "$2.798B" },
        { title: "Spider-Man: Far From Home", year: 2019, boxOffice: "$1.132B" }
      ]
    },
    {
      phase: 4,
      title: "Phase Four: New Beginnings",
      years: "2021-2022",
      films: [
        { title: "Black Widow", year: 2021, boxOffice: "$379.8M" },
        { title: "Shang-Chi", year: 2021, boxOffice: "$432.2M" },
        { title: "Eternals", year: 2021, boxOffice: "$402.1M" },
        { title: "Spider-Man: No Way Home", year: 2021, boxOffice: "$1.922B" },
        { title: "Doctor Strange in the Multiverse of Madness", year: 2022, boxOffice: "$956.0M" },
        { title: "Thor: Love and Thunder", year: 2022, boxOffice: "$760.9M" },
        { title: "Black Panther: Wakanda Forever", year: 2022, boxOffice: "$859.2M" }
      ],
      series: ["WandaVision", "The Falcon and the Winter Soldier", "Loki", "What If...?", "Hawkeye", "Moon Knight", "Ms. Marvel", "She-Hulk"]
    },
    {
      phase: 5,
      title: "Phase Five: The Multiverse Saga",
      years: "2023-2024",
      films: [
        { title: "Ant-Man and the Wasp: Quantumania", year: 2023, boxOffice: "$476.1M" },
        { title: "Guardians of the Galaxy Vol. 3", year: 2023, boxOffice: "$845.6M" },
        { title: "The Marvels", year: 2023, boxOffice: "$206.1M" },
        { title: "Deadpool & Wolverine", year: 2024, boxOffice: "$1.338B" }
      ],
      series: ["Secret Invasion", "Loki Season 2", "Echo", "Agatha All Along"]
    },
    {
      phase: 6,
      title: "Phase Six: The Saga Continues",
      years: "2025-2027",
      films: [
        { title: "Captain America: Brave New World", year: 2025, status: "upcoming" },
        { title: "Thunderbolts*", year: 2025, status: "upcoming" },
        { title: "The Fantastic Four: First Steps", year: 2025, status: "upcoming" },
        { title: "Blade", year: 2025, status: "upcoming" },
        { title: "Avengers: Doomsday", year: 2026, status: "upcoming" },
        { title: "Avengers: Secret Wars", year: 2027, status: "upcoming" }
      ],
      series: ["Daredevil: Born Again", "Ironheart", "Wonder Man"]
    }
  ];
  
  const featuredContent = [
    {
      title: "Deadpool & Wolverine",
      type: "Film",
      releaseDate: "July 26, 2024",
      description: "The Merc with a Mouth meets the X-Men's fiercest warrior",
      image: "🎬",
      boxOffice: "$1.338B"
    },
    {
      title: "Loki Season 2",
      type: "Series",
      releaseDate: "October 2023",
      description: "The God of Mischief's timeline-hopping adventures continue",
      image: "📺",
      rating: "87%"
    },
    {
      title: "Captain America: Brave New World",
      type: "Film",
      releaseDate: "February 14, 2025",
      description: "Sam Wilson takes up the shield as the new Captain America",
      image: "🛡️",
      status: "Coming Soon"
    }
  ];
  
  const marvelCharacters = [
    {
      name: "Iron Man",
      realName: "Tony Stark",
      powers: "Genius intellect, powered armor suit",
      firstAppearance: "Iron Man (2008)",
      icon: "🤖"
    },
    {
      name: "Captain America",
      realName: "Steve Rogers / Sam Wilson",
      powers: "Super soldier serum, vibranium shield",
      firstAppearance: "Captain America: The First Avenger (2011)",
      icon: "🛡️"
    },
    {
      name: "Thor",
      realName: "Thor Odinson",
      powers: "Asgardian strength, Mjolnir/Stormbreaker",
      firstAppearance: "Thor (2011)",
      icon: "⚡"
    },
    {
      name: "Black Widow",
      realName: "Natasha Romanoff",
      powers: "Master spy, expert combatant",
      firstAppearance: "Iron Man 2 (2010)",
      icon: "🕷️"
    },
    {
      name: "Spider-Man",
      realName: "Peter Parker",
      powers: "Spider powers, web-slinging",
      firstAppearance: "Captain America: Civil War (2016)",
      icon: "🕸️"
    },
    {
      name: "Black Panther",
      realName: "T'Challa / Shuri",
      powers: "Vibranium suit, enhanced abilities",
      firstAppearance: "Captain America: Civil War (2016)",
      icon: "🐾"
    }
  ];
  
  const boxOfficeAchievements = [
    { title: "Avengers: Endgame", amount: "$2.798B", rank: "#2 All-Time" },
    { title: "Avengers: Infinity War", amount: "$2.048B", rank: "#5 All-Time" },
    { title: "Spider-Man: No Way Home", amount: "$1.922B", rank: "#7 All-Time" },
    { title: "The Avengers", amount: "$1.519B", rank: "#10 All-Time" },
    { title: "Total MCU Box Office", amount: "$30+ Billion", rank: "Highest-Grossing Film Franchise" }
  ];
  
  const upcomingReleases = [
    { date: "Feb 14, 2025", title: "Captain America: Brave New World", type: "Film" },
    { date: "May 2, 2025", title: "Thunderbolts*", type: "Film" },
    { date: "July 25, 2025", title: "The Fantastic Four: First Steps", type: "Film" },
    { date: "Nov 7, 2025", title: "Blade", type: "Film" },
    { date: "March 2025", title: "Daredevil: Born Again", type: "Disney+ Series" },
    { date: "May 1, 2026", title: "Avengers: Doomsday", type: "Film" },
    { date: "May 7, 2027", title: "Avengers: Secret Wars", type: "Film" }
  ];
  
  let scrollY = 0;
  
  onMount(() => {
    const handleScroll = () => scrollY = window.scrollY;
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<svelte:window bind:scrollY />

<!-- Hero Section with Marvel Branding -->
<section class="relative min-h-screen bg-black overflow-hidden">
  <!-- Animated Comic Book Background -->
  <div class="absolute inset-0">
    <div class="comic-dots"></div>
    <div class="absolute inset-0 bg-gradient-to-b from-red-900/50 via-black/80 to-black"></div>
  </div>
  
  <!-- Marvel Logo Animation -->
  <div class="relative z-10 flex flex-col items-center justify-center min-h-screen px-4"
       style="transform: translateY({scrollY * 0.5}px)">
    <div class="text-center" in:scale={{ duration: 1000, delay: 300 }}>
      <h1 class="marvel-logo text-8xl md:text-9xl font-black text-white mb-4">
        MARVEL
      </h1>
      <div class="text-red-600 text-2xl md:text-3xl font-bold tracking-wider mb-8"
           in:fade={{ duration: 1000, delay: 600 }}>
        STUDIOS
      </div>
      <p class="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto"
         in:fade={{ duration: 1000, delay: 900 }}>
        Home to Earth's Mightiest Heroes and the Marvel Cinematic Universe
      </p>
    </div>
    
    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </div>
</section>

<!-- MCU Phases Overview -->
<section class="py-20 bg-gradient-to-b from-black to-gray-900">
  <div class="container mx-auto px-4">
    <h2 class="text-5xl font-black text-center text-white mb-16">THE MCU PHASES</h2>
    
    <!-- Phase Selector -->
    <div class="flex flex-wrap justify-center gap-4 mb-12">
      {#each mcuPhases as phase}
        <button
          on:click={() => activePhase = phase.phase}
          class="px-6 py-3 rounded-lg font-bold transition-all duration-300 {
            activePhase === phase.phase 
              ? 'bg-red-600 text-white scale-110 shadow-lg shadow-red-600/50' 
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }"
        >
          Phase {phase.phase}
        </button>
      {/each}
    </div>
    
    <!-- Phase Details -->
    {#each mcuPhases as phase}
      {#if activePhase === phase.phase}
        <div class="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-red-600/30"
             in:fade={{ duration: 300 }}>
          <h3 class="text-3xl font-bold text-red-500 mb-2">{phase.title}</h3>
          <p class="text-gray-400 mb-6">{phase.years}</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {#each phase.films as film}
              <div class="bg-black/50 rounded-lg p-4 border border-gray-700 hover:border-red-600 transition-colors">
                <h4 class="font-bold text-white">{film.title}</h4>
                <div class="flex justify-between items-center mt-2">
                  <span class="text-gray-400">{film.year}</span>
                  <span class="text-green-400 font-semibold">{film.boxOffice || film.status || 'TBA'}</span>
                </div>
              </div>
            {/each}
          </div>
          
          {#if phase.series}
            <div class="mt-8">
              <h4 class="text-xl font-bold text-red-500 mb-4">Disney+ Series</h4>
              <div class="flex flex-wrap gap-3">
                {#each phase.series as series}
                  <span class="px-4 py-2 bg-red-900/30 text-red-300 rounded-full text-sm">
                    {series}
                  </span>
                {/each}
              </div>
            </div>
          {/if}
        </div>
      {/if}
    {/each}
  </div>
</section>

<!-- Featured Films and Series -->
<section class="py-20 bg-gray-900">
  <div class="container mx-auto px-4">
    <h2 class="text-5xl font-black text-center text-white mb-16">FEATURED CONTENT</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each featuredContent as content, i}
        <div class="group relative overflow-hidden rounded-xl bg-black border-2 border-red-600/30 hover:border-red-600 transition-all duration-300 transform hover:scale-105"
             in:fly={{ y: 50, delay: i * 100, duration: 500 }}>
          <div class="p-8">
            <div class="text-6xl mb-4">{content.image}</div>
            <span class="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full mb-3">
              {content.type}
            </span>
            <h3 class="text-2xl font-bold text-white mb-2">{content.title}</h3>
            <p class="text-gray-400 mb-4">{content.description}</p>
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-500">{content.releaseDate}</span>
              <span class="text-green-400 font-bold">
                {content.boxOffice || content.rating || content.status}
              </span>
            </div>
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Upcoming Releases Timeline -->
<section class="py-20 bg-black relative overflow-hidden">
  <div class="absolute inset-0 comic-speed-lines opacity-10"></div>
  <div class="container mx-auto px-4 relative z-10">
    <h2 class="text-5xl font-black text-center text-white mb-16">UPCOMING RELEASES</h2>
    
    <div class="max-w-4xl mx-auto">
      {#each upcomingReleases as release, i}
        <div class="flex items-center mb-8 group"
             in:fly={{ x: i % 2 === 0 ? -50 : 50, delay: i * 100, duration: 500 }}>
          <div class="flex-1 {i % 2 === 0 ? 'text-right pr-8' : 'order-3 pl-8'}">
            <h3 class="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
              {release.title}
            </h3>
            <p class="text-gray-400">{release.type}</p>
          </div>
          <div class="relative">
            <div class="w-4 h-4 bg-red-600 rounded-full border-4 border-gray-900 relative z-10"></div>
            {#if i < upcomingReleases.length - 1}
              <div class="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-red-600/30"></div>
            {/if}
          </div>
          <div class="flex-1 {i % 2 === 0 ? 'order-3 pl-8' : 'pr-8'}">
            <span class="text-red-500 font-bold">{release.date}</span>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Marvel Characters Showcase -->
<section class="py-20 bg-gradient-to-b from-gray-900 to-black">
  <div class="container mx-auto px-4">
    <h2 class="text-5xl font-black text-center text-white mb-16">MARVEL HEROES</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each marvelCharacters as character, i}
        <button
          on:click={() => selectedCharacter = selectedCharacter === character ? null : character}
          class="relative bg-gradient-to-br from-red-900/20 to-black p-6 rounded-xl border-2 border-red-600/30 hover:border-red-600 transition-all duration-300 transform hover:scale-105 text-left"
          in:scale={{ delay: i * 100, duration: 500 }}>
          <div class="text-5xl mb-4">{character.icon}</div>
          <h3 class="text-2xl font-bold text-white mb-1">{character.name}</h3>
          <p class="text-gray-400 text-sm mb-2">{character.realName}</p>
          
          {#if selectedCharacter === character}
            <div class="mt-4 pt-4 border-t border-red-600/30" in:fade={{ duration: 200 }}>
              <p class="text-gray-300 mb-2"><span class="text-red-500 font-bold">Powers:</span> {character.powers}</p>
              <p class="text-gray-300"><span class="text-red-500 font-bold">MCU Debut:</span> {character.firstAppearance}</p>
            </div>
          {/if}
        </button>
      {/each}
    </div>
  </div>
</section>

<!-- Box Office Achievements -->
<section class="py-20 bg-red-950/20">
  <div class="container mx-auto px-4">
    <h2 class="text-5xl font-black text-center text-white mb-16">BOX OFFICE DOMINANCE</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each boxOfficeAchievements as achievement, i}
        <div class="bg-black/60 backdrop-blur-sm rounded-xl p-8 border-2 border-red-600/30 text-center transform hover:scale-105 transition-all duration-300"
             in:fly={{ y: 50, delay: i * 100, duration: 500 }}>
          <h3 class="text-xl font-bold text-white mb-2">{achievement.title}</h3>
          <p class="text-4xl font-black text-red-500 mb-2">{achievement.amount}</p>
          <p class="text-gray-400">{achievement.rank}</p>
        </div>
      {/each}
    </div>
    
    <div class="mt-12 text-center">
      <div class="inline-block bg-gradient-to-r from-red-600 to-red-800 rounded-xl p-8">
        <p class="text-white text-xl mb-2">The Marvel Cinematic Universe</p>
        <p class="text-4xl font-black text-white">30+ Films | 10+ Series | 15+ Years</p>
      </div>
    </div>
  </div>
</section>

<!-- Disney+ Marvel Content -->
<section class="py-20 bg-gradient-to-b from-black to-gray-900">
  <div class="container mx-auto px-4">
    <h2 class="text-5xl font-black text-center text-white mb-4">MARVEL ON</h2>
    <div class="text-center mb-12">
      <span class="text-6xl font-black bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
        Disney+
      </span>
    </div>
    
    <div class="max-w-4xl mx-auto bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-blue-600/30">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 class="text-2xl font-bold text-blue-400 mb-4">Exclusive Series</h3>
          <ul class="space-y-2 text-gray-300">
            <li class="flex items-center"><span class="text-blue-500 mr-2">▸</span> WandaVision</li>
            <li class="flex items-center"><span class="text-blue-500 mr-2">▸</span> The Falcon and the Winter Soldier</li>
            <li class="flex items-center"><span class="text-blue-500 mr-2">▸</span> Loki</li>
            <li class="flex items-center"><span class="text-blue-500 mr-2">▸</span> What If...?</li>
            <li class="flex items-center"><span class="text-blue-500 mr-2">▸</span> Hawkeye</li>
            <li class="flex items-center"><span class="text-blue-500 mr-2">▸</span> Moon Knight</li>
            <li class="flex items-center"><span class="text-blue-500 mr-2">▸</span> Ms. Marvel</li>
            <li class="flex items-center"><span class="text-blue-500 mr-2">▸</span> She-Hulk: Attorney at Law</li>
          </ul>
        </div>
        <div>
          <h3 class="text-2xl font-bold text-blue-400 mb-4">Coming Soon</h3>
          <ul class="space-y-2 text-gray-300">
            <li class="flex items-center"><span class="text-blue-500 mr-2">▸</span> Daredevil: Born Again</li>
            <li class="flex items-center"><span class="text-blue-500 mr-2">▸</span> Ironheart</li>
            <li class="flex items-center"><span class="text-blue-500 mr-2">▸</span> Wonder Man</li>
            <li class="flex items-center"><span class="text-blue-500 mr-2">▸</span> Armor Wars</li>
          </ul>
          <div class="mt-6">
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .marvel-logo {
    background: linear-gradient(180deg, #fff 0%, #ff0000 50%, #8B0000 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 0 30px rgba(255, 0, 0, 0.5);
    letter-spacing: -0.05em;
  }
  
  .comic-dots {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, #ff0000 1px, transparent 1px);
    background-size: 20px 20px;
    opacity: 0.1;
    animation: slide 10s linear infinite;
  }
  
  .comic-speed-lines {
    background: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 10px,
      rgba(255, 0, 0, 0.1) 10px,
      rgba(255, 0, 0, 0.1) 20px
    );
    animation: speed-lines 2s linear infinite;
  }
  
  @keyframes slide {
    0% { transform: translate(0, 0); }
    100% { transform: translate(20px, 20px); }
  }
  
  @keyframes speed-lines {
    0% { transform: translateX(0); }
    100% { transform: translateX(20px); }
  }
  
  :global(body) {
    font-family: 'Arial', sans-serif;
  }
</style>