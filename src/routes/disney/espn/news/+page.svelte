<script>
  import { onMount } from 'svelte';
  
  let currentTime = new Date();
  
  // Update time every second
  onMount(() => {
    const interval = setInterval(() => {
      currentTime = new Date();
    }, 1000);
    
    return () => clearInterval(interval);
  });
  
  // Breaking news ticker items
  const breakingNews = [
    { id: 1, text: "BREAKING: Lakers acquire All-Star guard in blockbuster trade", urgent: true },
    { id: 2, text: "NFL MVP frontrunner suffers season-ending injury in practice", urgent: true },
    { id: 3, text: "Manchester United sacks manager after Champions League exit", urgent: false },
    { id: 4, text: "NBA suspends star player for 25 games following altercation", urgent: true },
    { id: 5, text: "College Football Playoff rankings shake up top 4 teams", urgent: false },
    { id: 6, text: "Yankees sign Japanese pitcher to record 10-year deal", urgent: false }
  ];
  
  // Top stories
  const topStories = [
    {
      id: 1,
      headline: "Chiefs Clinch Home Field Advantage Throughout Playoffs",
      summary: "Patrick Mahomes throws 4 TDs as Kansas City dominates division rival to secure top seed",
      image: "🏈",
      category: "NFL",
      author: "Adam Schefter",
      time: "2 hours ago",
      featured: true
    },
    {
      id: 2,
      headline: "LeBron James Becomes NBA's All-Time Minutes Leader",
      summary: "Historic milestone achieved in Lakers' overtime victory against the Celtics",
      image: "🏀",
      category: "NBA", 
      author: "Adrian Wojnarowski",
      time: "4 hours ago",
      featured: true
    },
    {
      id: 3,
      headline: "Alabama Stuns Georgia in SEC Championship Thriller",
      summary: "Tide's last-second field goal sends them to College Football Playoff",
      image: "🏈",
      category: "College Football",
      author: "Kirk Herbstreit",
      time: "6 hours ago",
      featured: true
    }
  ];
  
  // News by sport categories
  const sportNews = {
    NFL: [
      { title: "Cowboys fire defensive coordinator after playoff miss", time: "1h ago", hot: true },
      { title: "Bills QB returns to practice ahead of wild card game", time: "3h ago" },
      { title: "Rookie of the Year race heats up in final weeks", time: "5h ago" },
      { title: "Patriots begin head coaching search", time: "7h ago" }
    ],
    NBA: [
      { title: "Warriors' dynasty era officially ends with trade request", time: "2h ago", hot: true },
      { title: "Celtics extend win streak to 15 games", time: "4h ago" },
      { title: "MVP ladder: New leader emerges after strong December", time: "6h ago" },
      { title: "Knicks star to miss 6-8 weeks with knee injury", time: "8h ago" }
    ],
    MLB: [
      { title: "Free agency frenzy: 5 All-Stars sign mega deals", time: "3h ago", hot: true },
      { title: "Dodgers pursue Japanese phenom in bidding war", time: "5h ago" },
      { title: "Hall of Fame ballot released with controversial names", time: "7h ago" },
      { title: "Spring training schedules announced", time: "9h ago" }
    ],
    Soccer: [
      { title: "Real Madrid advances to Champions League semifinals", time: "1h ago", hot: true },
      { title: "Premier League title race goes down to the wire", time: "3h ago" },
      { title: "USMNT announces World Cup qualifying roster", time: "5h ago" },
      { title: "Barcelona wonderkid signs record extension", time: "7h ago" }
    ],
    NHL: [
      { title: "Bruins set franchise record with 20th straight win", time: "2h ago", hot: true },
      { title: "Trade deadline preview: 10 players on the move", time: "4h ago" },
      { title: "Avalanche lose star forward to injury", time: "6h ago" },
      { title: "Rookie goalie posts third straight shutout", time: "8h ago" }
    ],
    College: [
      { title: "March Madness bracket revealed with major surprises", time: "1h ago", hot: true },
      { title: "Top recruit flips commitment on signing day", time: "3h ago" },
      { title: "Coach K's successor leads Duke to ACC title", time: "5h ago" },
      { title: "NIL deals reshape college athletics landscape", time: "7h ago" }
    ]
  };
  
  // Video highlights
  const videoHighlights = [
    {
      id: 1,
      title: "Mahomes' Magical 70-Yard TD Pass",
      duration: "0:45",
      views: "2.3M",
      category: "NFL",
      live: false
    },
    {
      id: 2,
      title: "LIVE: Lakers vs Celtics 4th Quarter",
      duration: "LIVE",
      views: "450K watching",
      category: "NBA",
      live: true
    },
    {
      id: 3,
      title: "Top 10 Plays of the Week",
      duration: "3:22",
      views: "1.1M",
      category: "All Sports",
      live: false
    },
    {
      id: 4,
      title: "SportsCenter with SVP",
      duration: "42:15",
      views: "890K",
      category: "Shows",
      live: false
    }
  ];
  
  // ESPN personalities and shows
  const personalities = [
    { name: "Stephen A. Smith", show: "First Take", image: "👤", status: "LIVE" },
    { name: "Scott Van Pelt", show: "SportsCenter", image: "👤", status: "Tonight 11pm" },
    { name: "Pat McAfee", show: "The Pat McAfee Show", image: "👤", status: "Weekdays 12pm" },
    { name: "Mina Kimes", show: "NFL Live", image: "👤", status: "Weekdays 4pm" },
    { name: "Mike Greenberg", show: "Get Up", image: "👤", status: "Weekdays 8am" },
    { name: "Marcus Spears", show: "First Take", image: "👤", status: "LIVE" }
  ];
  
  // Trending topics
  const trendingTopics = [
    { tag: "#NFLPlayoffs", posts: "125K", trend: "up" },
    { tag: "#LakersNation", posts: "89K", trend: "up" },
    { tag: "#TradeDeadline", posts: "67K", trend: "up" },
    { tag: "#MarchMadness", posts: "45K", trend: "down" },
    { tag: "#ChampionsLeague", posts: "34K", trend: "up" },
    { tag: "#SpringTraining", posts: "28K", trend: "down" }
  ];
  
  let selectedCategory = 'All';
  const categories = ['All', 'NFL', 'NBA', 'MLB', 'Soccer', 'NHL', 'College'];
</script>

<svelte:head>
  <title>ESPN News - Breaking Sports News & Headlines | Disney AI Hub</title>
</svelte:head>

<!-- Breaking News Ticker -->
<section class="bg-red-700 text-white py-2 overflow-hidden sticky top-0 z-50">
  <div class="flex items-center">
    <div class="bg-red-900 px-4 py-2 font-bold flex items-center">
      <span class="w-2 h-2 bg-white rounded-full animate-pulse mr-2"></span>
      BREAKING NEWS
    </div>
    <div class="flex-1 overflow-hidden">
      <div class="flex animate-scroll-left">
        {#each [...breakingNews, ...breakingNews] as news}
          <span class="px-6 whitespace-nowrap flex items-center">
            {#if news.urgent}
              <span class="text-yellow-300 mr-2">⚡</span>
            {/if}
            {news.text}
          </span>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- Header with Time -->
<section class="bg-black text-white py-4">
  <div class="container mx-auto px-4 flex items-center justify-between">
    <div>
      <h1 class="text-3xl font-bold">ESPN NEWS</h1>
      <p class="text-gray-400">Your source for breaking sports news</p>
    </div>
    <div class="text-right">
      <div class="text-2xl font-bold tabular-nums">
        {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
      </div>
      <div class="text-gray-400">
        {currentTime.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
      </div>
    </div>
  </div>
</section>

<!-- Top Stories Section -->
<section class="container mx-auto px-4 py-8">
  <h2 class="text-3xl font-bold mb-6">Top Stories</h2>
  
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
    {#each topStories as story, i}
      <article class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer {i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}">
        <div class="relative {i === 0 ? 'h-96' : 'h-48'} bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center">
          <span class="text-8xl">{story.image}</span>
          {#if story.featured}
            <span class="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
              FEATURED
            </span>
          {/if}
          <span class="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded text-sm font-bold">
            {story.category}
          </span>
        </div>
        <div class="p-6">
          <h3 class="text-xl {i === 0 ? 'lg:text-2xl' : ''} font-bold mb-2 hover:text-red-600 transition-colors">
            {story.headline}
          </h3>
          <p class="text-gray-600 mb-4 {i === 0 ? 'lg:text-lg' : ''}">{story.summary}</p>
          <div class="flex items-center justify-between text-sm text-gray-500">
            <span>By {story.author}</span>
            <span>{story.time}</span>
          </div>
        </div>
      </article>
    {/each}
  </div>
</section>

<!-- News by Sport Categories -->
<section class="bg-gray-100 py-12">
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between mb-8">
      <h2 class="text-3xl font-bold">News by Sport</h2>
      <div class="flex gap-2">
        {#each categories as category}
          <button
            class="px-4 py-2 rounded-full font-semibold transition-colors {selectedCategory === category ? 'bg-red-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}"
            on:click={() => selectedCategory = category}
          >
            {category}
          </button>
        {/each}
      </div>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each Object.entries(sportNews) as [sport, articles]}
        {#if selectedCategory === 'All' || selectedCategory === sport}
          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-xl font-bold mb-4 text-red-600">{sport}</h3>
            <div class="space-y-3">
              {#each articles as article}
                <div class="border-b border-gray-200 pb-3 last:border-0 cursor-pointer hover:bg-gray-50 -mx-2 px-2 rounded transition-colors">
                  <div class="flex items-start justify-between">
                    <h4 class="font-semibold text-gray-800 flex-1 pr-2">
                      {#if article.hot}
                        <span class="text-red-500 mr-1">🔥</span>
                      {/if}
                      {article.title}
                    </h4>
                  </div>
                  <p class="text-sm text-gray-500 mt-1">{article.time}</p>
                </div>
              {/each}
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </div>
</section>

<!-- Video Highlights -->
<section class="container mx-auto px-4 py-12">
  <div class="flex items-center justify-between mb-8">
    <h2 class="text-3xl font-bold">Video Highlights</h2>
    <a href="#" class="text-red-600 hover:text-red-700 font-semibold">View All Videos →</a>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {#each videoHighlights as video}
      <div class="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow">
        <div class="relative h-40 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
          <span class="text-5xl">▶️</span>
          {#if video.live}
            <span class="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold flex items-center">
              <span class="w-2 h-2 bg-white rounded-full animate-pulse mr-1"></span>
              LIVE
            </span>
          {:else}
            <span class="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs">
              {video.duration}
            </span>
          {/if}
        </div>
        <div class="p-4">
          <h4 class="font-bold mb-2">{video.title}</h4>
          <div class="flex items-center justify-between text-sm text-gray-500">
            <span>{video.category}</span>
            <span>{video.views}</span>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- ESPN Personalities & Shows -->
<section class="bg-gradient-to-r from-gray-900 to-black text-white py-12">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8">ESPN Personalities & Shows</h2>
    
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {#each personalities as person}
        <div class="text-center cursor-pointer hover:scale-105 transition-transform">
          <div class="w-24 h-24 mx-auto bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center text-5xl mb-3">
            {person.image}
          </div>
          <h4 class="font-bold">{person.name}</h4>
          <p class="text-sm text-gray-400">{person.show}</p>
          <span class="text-xs {person.status === 'LIVE' ? 'text-red-400 font-bold' : 'text-gray-500'}">
            {person.status}
          </span>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Trending Topics -->
<section class="container mx-auto px-4 py-12">
  <div class="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8">
    <h2 class="text-2xl font-bold mb-6">Trending on ESPN</h2>
    
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {#each trendingTopics as topic}
        <div class="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
          <h4 class="font-bold text-red-600 mb-1">{topic.tag}</h4>
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-600">{topic.posts} posts</span>
            <span class="text-sm {topic.trend === 'up' ? 'text-green-500' : 'text-red-500'}">
              {topic.trend === 'up' ? '↑' : '↓'}
            </span>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Live Scores Bar -->
<section class="bg-black text-white py-4 mt-12">
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between">
      <span class="font-bold">LIVE SCORES</span>
      <div class="flex gap-6 overflow-x-auto">
        <span class="whitespace-nowrap">NBA: LAL 98 - BOS 102 (4th)</span>
        <span class="whitespace-nowrap">NFL: KC 21 - BUF 17 (3rd)</span>
        <span class="whitespace-nowrap">NHL: NYR 3 - TB 2 (2nd)</span>
        <span class="whitespace-nowrap">Soccer: BAR 2 - RMA 1 (78')</span>
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes scroll-left {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  .animate-scroll-left {
    animation: scroll-left 30s linear infinite;
  }
</style>