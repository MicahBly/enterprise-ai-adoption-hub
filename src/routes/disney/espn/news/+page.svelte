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
  
  // AI sports journalism breaking news
  const breakingNews = [
    { id: 1, text: "BREAKTHROUGH: AI generates real-time game summaries with 95% accuracy", urgent: true },
    { id: 2, text: "ESPN deploys automated highlight detection across all live sports", urgent: true },
    { id: 3, text: "Machine learning models predict player performance with unprecedented precision", urgent: false },
    { id: 4, text: "Natural language processing revolutionizes sports commentary automation", urgent: true },
    { id: 5, text: "AI-powered player tracking delivers new advanced analytics insights", urgent: false },
    { id: 6, text: "Automated journalism produces 10,000+ game recaps in minutes", urgent: false }
  ];
  
  // AI in Sports Media Top Stories
  const topStories = [
    {
      id: 1,
      headline: "AI-Generated Game Summaries Transform Sports Journalism",
      summary: "Advanced natural language processing creates comprehensive game recaps in seconds, maintaining ESPN's editorial quality while scaling content production",
      image: "🤖",
      category: "AI Journalism",
      author: "ESPN AI Lab",
      time: "2 hours ago",
      featured: true
    },
    {
      id: 2,
      headline: "Real-Time Stats Integration Powered by Machine Learning",
      summary: "Automated data collection and analysis delivers instant advanced statistics during live broadcasts, enhancing viewer experience",
      image: "📊",
      category: "AI Analytics", 
      author: "ESPN Data Science Team",
      time: "4 hours ago",
      featured: true
    },
    {
      id: 3,
      headline: "Automated Sports Commentary Reaches Human-Level Quality",
      summary: "Neural networks trained on decades of ESPN commentary now generate play-by-play analysis indistinguishable from human broadcasters",
      image: "🎙️",
      category: "AI Commentary",
      author: "ESPN Innovation Lab",
      time: "6 hours ago",
      featured: true
    }
  ];
  
  // AI Technologies in Sports Media
  const aiTechnologies = {
    "Automated Journalism": [
      { title: "GPT-4 models generate 500+ game recaps daily with 99% accuracy", time: "1h ago", hot: true },
      { title: "Real-time article creation from live data feeds deployed", time: "3h ago" },
      { title: "AI fact-checking system prevents sports misinformation", time: "5h ago" },
      { title: "Multilingual content generation expands global reach", time: "7h ago" }
    ],
    "Computer Vision": [
      { title: "Advanced player tracking analyzes every movement on field", time: "2h ago", hot: true },
      { title: "Automated highlight detection identifies key moments instantly", time: "4h ago" },
      { title: "Injury prediction models achieve 85% accuracy rate", time: "6h ago" },
      { title: "Ball tracking technology enhances officiating precision", time: "8h ago" }
    ],
    "Predictive Analytics": [
      { title: "Machine learning models forecast game outcomes with 78% accuracy", time: "3h ago", hot: true },
      { title: "Player performance metrics predict future All-Stars", time: "5h ago" },
      { title: "Draft analysis AI identifies hidden talent prospects", time: "7h ago" },
      { title: "Weather impact algorithms improve betting predictions", time: "9h ago" }
    ],
    "Natural Language": [
      { title: "Voice synthesis creates personalized sports updates", time: "1h ago", hot: true },
      { title: "Sentiment analysis tracks fan reactions in real-time", time: "3h ago" },
      { title: "Automated interview transcription speeds content creation", time: "5h ago" },
      { title: "Translation AI breaks down language barriers in sports", time: "7h ago" }
    ],
    "Data Integration": [
      { title: "Real-time stats API processes 1M+ data points per game", time: "2h ago", hot: true },
      { title: "Cross-platform analytics unify viewer engagement metrics", time: "4h ago" },
      { title: "Historical data mining reveals century-old sports trends", time: "6h ago" },
      { title: "Biometric integration provides unprecedented player insights", time: "8h ago" }
    ],
    "Personalization": [
      { title: "AI curators deliver custom sports content to 50M+ users", time: "1h ago", hot: true },
      { title: "Recommendation engines increase fan engagement by 40%", time: "3h ago" },
      { title: "Dynamic content adaptation matches viewer preferences", time: "5h ago" },
      { title: "Behavioral analysis optimizes content delivery timing", time: "7h ago" }
    ]
  };
  
  // AI-Powered Content Demonstrations
  const aiDemonstrations = [
    {
      id: 1,
      title: "AI Game Summary Generation Demo",
      duration: "2:45",
      views: "2.3M",
      category: "AI Journalism",
      live: false,
      description: "Watch AI create comprehensive game recaps in real-time"
    },
    {
      id: 2,
      title: "LIVE: AI Commentary Training Session",
      duration: "LIVE",
      views: "450K watching",
      category: "AI Commentary",
      live: true,
      description: "Neural networks learning play-by-play analysis"
    },
    {
      id: 3,
      title: "Computer Vision Player Tracking",
      duration: "3:22",
      views: "1.1M",
      category: "AI Analytics",
      live: false,
      description: "Advanced motion analysis and performance metrics"
    },
    {
      id: 4,
      title: "Automated Highlight Detection System",
      duration: "5:15",
      views: "890K",
      category: "AI Technology",
      live: false,
      description: "Machine learning identifies key moments instantly"
    }
  ];
  
  // AI Research Teams and Technologies
  const aiTeams = [
    { name: "Dr. Sarah Chen", role: "Head of AI Journalism", image: "🧠", status: "Research Active", team: "ESPN AI Lab" },
    { name: "Marcus Rodriguez", role: "Computer Vision Lead", image: "👁️", status: "Model Training", team: "Analytics Division" },
    { name: "AI Commentary Bot v3.0", role: "Automated Commentary", image: "🤖", status: "LIVE Testing", team: "Innovation Lab" },
    { name: "DataMind Analytics", role: "Predictive Modeling", image: "📊", status: "Processing", team: "Data Science" },
    { name: "SportGPT System", role: "Content Generation", image: "✍️", status: "Active Generation", team: "Content AI" },
    { name: "VisionTrack Pro", role: "Player Analytics", image: "🎯", status: "Live Tracking", team: "Computer Vision" }
  ];
  
  // Trending topics
  const aiTrendingTopics = [
    { tag: "#AIJournalism", posts: "325K", trend: "up", description: "Automated sports content generation" },
    { tag: "#SportsTech", posts: "289K", trend: "up", description: "AI-powered analytics and insights" },
    { tag: "#ComputerVision", posts: "167K", trend: "up", description: "Player tracking and analysis" },
    { tag: "#PredictiveAnalytics", posts: "145K", trend: "up", description: "Game outcome forecasting" },
    { tag: "#AutomatedCommentary", posts: "134K", trend: "up", description: "AI-generated play-by-play" },
    { tag: "#RealTimeStats", posts: "128K", trend: "up", description: "Live data integration systems" }
  ];
  
  let selectedCategory = 'All';
  const categories = ['All', 'Automated Journalism', 'Computer Vision', 'Predictive Analytics', 'Natural Language', 'Data Integration', 'Personalization'];
</script>

<svelte:head>
  <title>ESPN AI - Sports Journalism Innovation | Disney AI Hub</title>
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
      <h1 class="text-3xl font-bold text-white">ESPN AI INNOVATION</h1>
      <p class="text-gray-400">Transforming sports journalism with artificial intelligence</p>
    </div>
    <div class="text-right">
      <div class="text-2xl font-bold tabular-nums text-white">
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
  <h2 class="text-3xl font-bold mb-6 text-gray-900">AI Innovation Highlights</h2>
  
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
          <h3 class="text-xl {i === 0 ? 'lg:text-2xl' : ''} font-bold mb-2 hover:text-red-600 transition-colors text-gray-900">
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
      <h2 class="text-3xl font-bold text-gray-900">AI Technologies in Sports Media</h2>
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
      {#each Object.entries(aiTechnologies) as [sport, articles]}
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
    <h2 class="text-3xl font-bold text-gray-900">AI Technology Demonstrations</h2>
    <a href="/experiments" class="text-red-600 hover:text-red-700 font-semibold">View All Experiments →</a>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {#each aiDemonstrations as video}
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
          <h4 class="font-bold mb-2 text-gray-900">{video.title}</h4>
          <p class="text-sm text-gray-600 mb-2">{video.description}</p>
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
    <h2 class="text-3xl font-bold mb-8 text-white">AI Research Teams & Technologies</h2>
    
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {#each aiTeams as person}
        <div class="text-center cursor-pointer hover:scale-105 transition-transform">
          <div class="w-24 h-24 mx-auto bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center text-5xl mb-3">
            {person.image}
          </div>
          <h4 class="font-bold text-white">{person.name}</h4>
          <p class="text-sm text-gray-400">{person.role}</p>
          <p class="text-xs text-blue-400">{person.team}</p>
          <span class="text-xs {person.status.includes('LIVE') || person.status.includes('Active') ? 'text-red-400 font-bold' : 'text-gray-500'}">
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
    <h2 class="text-2xl font-bold mb-6 text-gray-900">Trending AI Technologies</h2>
    
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {#each aiTrendingTopics as topic}
        <div class="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
          <h4 class="font-bold text-red-600 mb-1">{topic.tag}</h4>
          <p class="text-xs text-gray-500 mb-2">{topic.description}</p>
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

<!-- AI Experiments & Related Links -->
<section class="bg-black text-white py-6 mt-12">
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between flex-wrap gap-4">
      <span class="font-bold text-lg text-white">EXPLORE AI SPORTS INNOVATION</span>
      <div class="flex gap-6 overflow-x-auto">
        <a href="/experiments" class="whitespace-nowrap text-blue-300 hover:text-blue-100 transition-colors">
          🔬 View All Experiments
        </a>
        <a href="/disney/experiments" class="whitespace-nowrap text-blue-300 hover:text-blue-100 transition-colors">
          🏰 Disney AI Labs
        </a>
        <a href="/disney/espn" class="whitespace-nowrap text-blue-300 hover:text-blue-100 transition-colors">
          📺 ESPN AI Hub
        </a>
        <a href="#" class="whitespace-nowrap text-blue-300 hover:text-blue-100 transition-colors">
          📊 Real-Time Analytics
        </a>
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