<script>
  import { onMount } from 'svelte';
  
  const featuredSoundtracks = [
    {
      title: 'Wish',
      artist: 'Julia Michaels & Benjamin Rice',
      year: '2023',
      icon: '⭐',
      description: 'Songs from the newest Disney animated musical',
      topSong: 'This Wish'
    },
    {
      title: 'The Little Mermaid',
      artist: 'Alan Menken & Lin-Manuel Miranda',
      year: '2023',
      icon: '🧜‍♀️',
      description: 'Live-action reimagining with new songs',
      topSong: 'Part of Your World'
    },
    {
      title: 'Encanto',
      artist: 'Lin-Manuel Miranda',
      year: '2021',
      icon: '🦋',
      description: 'Grammy-winning magical soundtrack',
      topSong: 'We Don\'t Talk About Bruno'
    },
    {
      title: 'Guardians of the Galaxy Vol. 3',
      artist: 'Various Artists',
      year: '2023',
      icon: '🚀',
      description: 'Marvel\'s cosmic mixtape',
      topSong: 'Creep (Acoustic)'
    }
  ];
  
  const musicCategories = [
    {
      name: 'Princess Songs',
      icon: '👑',
      color: 'from-pink-500 to-purple-500',
      description: 'Classic and modern princess anthems',
      examples: ['Let It Go', 'How Far I\'ll Go', 'A Whole New World']
    },
    {
      name: 'Pixar Music',
      icon: '🎨',
      color: 'from-blue-500 to-green-500',
      description: 'Emotional scores and memorable songs',
      examples: ['You\'ve Got a Friend in Me', 'Remember Me', 'Try Everything']
    },
    {
      name: 'Marvel Soundtracks',
      icon: '🦸',
      color: 'from-red-500 to-yellow-500',
      description: 'Epic orchestral scores and hero themes',
      examples: ['Avengers Theme', 'Black Panther Score', 'Spider-Man Suite']
    },
    {
      name: 'Star Wars Music',
      icon: '⚔️',
      color: 'from-gray-700 to-blue-700',
      description: 'John Williams\' legendary compositions',
      examples: ['Main Theme', 'Imperial March', 'Duel of the Fates']
    },
    {
      name: 'Park Music',
      icon: '🏰',
      color: 'from-purple-500 to-pink-500',
      description: 'Theme park soundtracks and area music',
      examples: ['Grim Grinning Ghosts', 'Yo Ho', 'Space Mountain']
    },
    {
      name: 'Holiday Music',
      icon: '🎄',
      color: 'from-green-500 to-red-500',
      description: 'Seasonal Disney favorites',
      examples: ['Mickey\'s Christmas Carol', 'Frozen Holiday Wish', 'Jingle Bells']
    }
  ];
  
  const streamingPlatforms = [
    { name: 'Disney+', icon: '📺', color: 'bg-blue-600' },
    { name: 'Spotify', icon: '🎵', color: 'bg-green-500' },
    { name: 'Apple Music', icon: '🍎', color: 'bg-gray-800' },
    { name: 'YouTube Music', icon: '▶️', color: 'bg-red-600' },
    { name: 'Amazon Music', icon: '📦', color: 'bg-orange-500' }
  ];
  
  const liveEvents = [
    {
      title: 'Disney On Ice',
      location: 'Nationwide Tour',
      date: 'Ongoing',
      icon: '⛸️'
    },
    {
      title: 'Disney Concert Hall',
      location: 'Los Angeles, CA',
      date: 'Year-round',
      icon: '🎻'
    },
    {
      title: 'D23 Expo Concerts',
      location: 'Anaheim, CA',
      date: 'September 2025',
      icon: '🎤'
    },
    {
      title: 'Candlelight Processional',
      location: 'EPCOT',
      date: 'Holiday Season',
      icon: '🕯️'
    }
  ];
  
  const awards = [
    { award: 'Academy Awards', count: '14', icon: '🏆' },
    { award: 'Grammy Awards', count: '23', icon: '🎼' },
    { award: 'Golden Globes', count: '18', icon: '🌟' },
    { award: 'Tony Awards', count: '11', icon: '🎭' }
  ];
  
  let aiSearchQuery = '';
  let mouseX = 0;
  let mouseY = 0;
  
  onMount(() => {
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  });
</script>

<svelte:head>
  <title>Disney Music - Soundtracks, Songs & Streaming</title>
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 text-white">
  <div class="absolute inset-0 opacity-20">
    <div class="absolute top-10 left-10 text-9xl animate-pulse">🎵</div>
    <div class="absolute bottom-10 right-10 text-9xl animate-pulse" style="animation-delay: 0.5s">🎶</div>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[200px] opacity-10">🎼</div>
  </div>
  
  <!-- Musical Notes Animation -->
  <div class="absolute inset-0 overflow-hidden">
    {#each Array(5) as _, i}
      <div class="absolute text-4xl opacity-30 animate-float"
           style="left: {20 + i * 15}%; animation-delay: {i * 0.5}s; animation-duration: {8 + i}s">
        ♪
      </div>
    {/each}
  </div>
  
  <div class="relative z-10 container mx-auto px-4 py-20">
    <h1 class="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
      Disney Music
    </h1>
    <p class="text-xl md:text-3xl mb-8 text-purple-100">
      Where Every Note Tells a Story
    </p>
    <p class="text-lg text-blue-100 max-w-2xl">
      From timeless classics to modern masterpieces, experience the magic of Disney music across generations
    </p>
  </div>
</section>

<!-- Featured Soundtracks -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold mb-8 flex items-center text-gray-900">
    <span class="text-yellow-500 mr-3">🌟</span>
    Featured Soundtracks
  </h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {#each featuredSoundtracks as soundtrack}
      <div class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105">
        <div class="aspect-square bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-8xl">
          {soundtrack.icon}
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold mb-1 text-gray-900">{soundtrack.title}</h3>
          <p class="text-sm text-gray-600 mb-2">{soundtrack.artist}</p>
          <p class="text-sm text-gray-700 mb-3">{soundtrack.description}</p>
          <div class="flex items-center justify-between">
            <span class="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
              {soundtrack.year}
            </span>
            <button class="text-purple-600 hover:text-purple-700 font-semibold text-sm group-hover:translate-x-1 transition-transform">
              Listen Now →
            </button>
          </div>
          <p class="text-xs text-gray-500 mt-2">Top: {soundtrack.topSong}</p>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- Music Categories -->
<section class="bg-gradient-to-b from-purple-50 to-pink-50 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8 text-center text-gray-900">Disney Music Categories</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each musicCategories as category}
        <div class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
          <div class="h-32 bg-gradient-to-br {category.color} flex items-center justify-center text-6xl text-white">
            {category.icon}
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2 text-gray-900">{category.name}</h3>
            <p class="text-gray-600 mb-4">{category.description}</p>
            <div class="space-y-1">
              {#each category.examples as example}
                <p class="text-sm text-gray-500">• {example}</p>
              {/each}
            </div>
            <button class="mt-4 text-purple-600 hover:text-purple-700 font-semibold group-hover:translate-x-1 transition-transform">
              Explore Collection →
            </button>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Streaming Platforms -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold mb-8 text-center text-gray-900">Listen on Your Favorite Platform</h2>
  
  <div class="flex flex-wrap justify-center gap-4 mb-12">
    {#each streamingPlatforms as platform}
      <button class="{platform.color} text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center space-x-2 transform hover:scale-105">
        <span class="text-2xl">{platform.icon}</span>
        <span>{platform.name}</span>
      </button>
    {/each}
  </div>
  
  <div class="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8 text-center max-w-2xl mx-auto">
    <p class="text-lg text-gray-700">
      Stream over <span class="font-bold text-2xl text-purple-600">10,000+</span> Disney songs and soundtracks across all major platforms
    </p>
  </div>
</section>

<!-- Live Events -->
<section class="bg-gray-50 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8 text-gray-900">Disney Concerts & Live Events</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each liveEvents as event}
        <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 text-center transform hover:scale-105 transition-transform">
          <div class="text-5xl mb-4">{event.icon}</div>
          <h3 class="font-bold text-lg mb-2 text-gray-900">{event.title}</h3>
          <p class="text-sm text-gray-600 mb-1">{event.location}</p>
          <p class="text-sm text-purple-600 font-semibold">{event.date}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Awards Section -->
<section class="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8 text-center text-white">Music Awards & Achievements</h2>
    
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {#each awards as award}
        <div class="bg-white/90 rounded-xl p-6 shadow-lg">
          <div class="text-5xl mb-2">{award.icon}</div>
          <div class="text-3xl font-bold text-gray-800 mb-1">{award.count}</div>
          <div class="text-sm font-semibold text-gray-600">{award.award}</div>
        </div>
      {/each}
    </div>
    
    <p class="text-center text-white mt-8 text-lg">
      Disney music has touched hearts and won acclaim for over 90 years
    </p>
  </div>
</section>

<!-- AI Music Discovery -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-4 flex items-center justify-center">
        <span class="mr-3">🤖</span>
        AI-Powered Music Discovery
      </h2>
      <p class="text-xl mb-8 text-purple-100">
        Let our AI help you find the perfect Disney song for any moment
      </p>
      
      <div class="bg-white/20 backdrop-blur rounded-2xl p-6 mb-8">
        <input
          type="text"
          bind:value={aiSearchQuery}
          placeholder="Describe your mood, activity, or favorite character..."
          class="w-full px-6 py-4 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-purple-300"
        />
        <button class="mt-4 bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-purple-50 transition-colors">
          Discover Music ✨
        </button>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div class="bg-white/10 rounded-lg p-4">
          <p class="font-semibold mb-1">Mood-Based</p>
          <p class="text-purple-100">Happy, nostalgic, adventurous</p>
        </div>
        <div class="bg-white/10 rounded-lg p-4">
          <p class="font-semibold mb-1">Character Themes</p>
          <p class="text-purple-100">Find songs by favorite characters</p>
        </div>
        <div class="bg-white/10 rounded-lg p-4">
          <p class="font-semibold mb-1">Activity Playlists</p>
          <p class="text-purple-100">Working out, studying, relaxing</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Call to Action -->
<section class="bg-gradient-to-b from-blue-50 to-white py-16">
  <div class="container mx-auto px-4 text-center">
    <h2 class="text-3xl font-bold mb-4 text-gray-900">Start Your Musical Journey</h2>
    <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
      Join millions of fans experiencing the magic of Disney music every day
    </p>
    <div class="flex flex-wrap justify-center gap-4">
      <button class="bg-purple-600 text-white px-8 py-4 rounded-full font-bold hover:bg-purple-700 transition-colors text-lg">
        Browse All Music
      </button>
      <button class="bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-full font-bold hover:bg-purple-50 transition-colors text-lg">
        Create Playlist
      </button>
    </div>
  </div>
</section>

<style>
  @keyframes float {
    0%, 100% { transform: translateY(0px) translateX(0px); }
    25% { transform: translateY(-30px) translateX(10px); }
    50% { transform: translateY(-20px) translateX(-10px); }
    75% { transform: translateY(-40px) translateX(5px); }
  }
  
  .animate-float {
    animation: float 8s ease-in-out infinite;
  }
  
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .animate-fade-in {
    animation: fade-in 1s ease-out;
  }
</style>