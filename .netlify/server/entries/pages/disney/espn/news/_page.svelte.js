import { c as create_ssr_component, b as each, e as escape } from "../../../../../chunks/ssr.js";
const css = {
  code: "@keyframes svelte-18bpiq7-scroll-left{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}.animate-scroll-left.svelte-18bpiq7{animation:svelte-18bpiq7-scroll-left 30s linear infinite}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import { onMount } from 'svelte';\\n  \\n  let currentTime = new Date();\\n  \\n  // Update time every second\\n  onMount(() => {\\n    const interval = setInterval(() => {\\n      currentTime = new Date();\\n    }, 1000);\\n    \\n    return () => clearInterval(interval);\\n  });\\n  \\n  // AI sports journalism breaking news\\n  const breakingNews = [\\n    { id: 1, text: \\"BREAKTHROUGH: AI generates real-time game summaries with 95% accuracy\\", urgent: true },\\n    { id: 2, text: \\"ESPN deploys automated highlight detection across all live sports\\", urgent: true },\\n    { id: 3, text: \\"Machine learning models predict player performance with unprecedented precision\\", urgent: false },\\n    { id: 4, text: \\"Natural language processing revolutionizes sports commentary automation\\", urgent: true },\\n    { id: 5, text: \\"AI-powered player tracking delivers new advanced analytics insights\\", urgent: false },\\n    { id: 6, text: \\"Automated journalism produces 10,000+ game recaps in minutes\\", urgent: false }\\n  ];\\n  \\n  // AI in Sports Media Top Stories\\n  const topStories = [\\n    {\\n      id: 1,\\n      headline: \\"AI-Generated Game Summaries Transform Sports Journalism\\",\\n      summary: \\"Advanced natural language processing creates comprehensive game recaps in seconds, maintaining ESPN's editorial quality while scaling content production\\",\\n      image: \\"🤖\\",\\n      category: \\"AI Journalism\\",\\n      author: \\"ESPN AI Lab\\",\\n      time: \\"2 hours ago\\",\\n      featured: true\\n    },\\n    {\\n      id: 2,\\n      headline: \\"Real-Time Stats Integration Powered by Machine Learning\\",\\n      summary: \\"Automated data collection and analysis delivers instant advanced statistics during live broadcasts, enhancing viewer experience\\",\\n      image: \\"📊\\",\\n      category: \\"AI Analytics\\", \\n      author: \\"ESPN Data Science Team\\",\\n      time: \\"4 hours ago\\",\\n      featured: true\\n    },\\n    {\\n      id: 3,\\n      headline: \\"Automated Sports Commentary Reaches Human-Level Quality\\",\\n      summary: \\"Neural networks trained on decades of ESPN commentary now generate play-by-play analysis indistinguishable from human broadcasters\\",\\n      image: \\"🎙️\\",\\n      category: \\"AI Commentary\\",\\n      author: \\"ESPN Innovation Lab\\",\\n      time: \\"6 hours ago\\",\\n      featured: true\\n    }\\n  ];\\n  \\n  // AI Technologies in Sports Media\\n  const aiTechnologies = {\\n    \\"Automated Journalism\\": [\\n      { title: \\"GPT-4 models generate 500+ game recaps daily with 99% accuracy\\", time: \\"1h ago\\", hot: true },\\n      { title: \\"Real-time article creation from live data feeds deployed\\", time: \\"3h ago\\" },\\n      { title: \\"AI fact-checking system prevents sports misinformation\\", time: \\"5h ago\\" },\\n      { title: \\"Multilingual content generation expands global reach\\", time: \\"7h ago\\" }\\n    ],\\n    \\"Computer Vision\\": [\\n      { title: \\"Advanced player tracking analyzes every movement on field\\", time: \\"2h ago\\", hot: true },\\n      { title: \\"Automated highlight detection identifies key moments instantly\\", time: \\"4h ago\\" },\\n      { title: \\"Injury prediction models achieve 85% accuracy rate\\", time: \\"6h ago\\" },\\n      { title: \\"Ball tracking technology enhances officiating precision\\", time: \\"8h ago\\" }\\n    ],\\n    \\"Predictive Analytics\\": [\\n      { title: \\"Machine learning models forecast game outcomes with 78% accuracy\\", time: \\"3h ago\\", hot: true },\\n      { title: \\"Player performance metrics predict future All-Stars\\", time: \\"5h ago\\" },\\n      { title: \\"Draft analysis AI identifies hidden talent prospects\\", time: \\"7h ago\\" },\\n      { title: \\"Weather impact algorithms improve betting predictions\\", time: \\"9h ago\\" }\\n    ],\\n    \\"Natural Language\\": [\\n      { title: \\"Voice synthesis creates personalized sports updates\\", time: \\"1h ago\\", hot: true },\\n      { title: \\"Sentiment analysis tracks fan reactions in real-time\\", time: \\"3h ago\\" },\\n      { title: \\"Automated interview transcription speeds content creation\\", time: \\"5h ago\\" },\\n      { title: \\"Translation AI breaks down language barriers in sports\\", time: \\"7h ago\\" }\\n    ],\\n    \\"Data Integration\\": [\\n      { title: \\"Real-time stats API processes 1M+ data points per game\\", time: \\"2h ago\\", hot: true },\\n      { title: \\"Cross-platform analytics unify viewer engagement metrics\\", time: \\"4h ago\\" },\\n      { title: \\"Historical data mining reveals century-old sports trends\\", time: \\"6h ago\\" },\\n      { title: \\"Biometric integration provides unprecedented player insights\\", time: \\"8h ago\\" }\\n    ],\\n    \\"Personalization\\": [\\n      { title: \\"AI curators deliver custom sports content to 50M+ users\\", time: \\"1h ago\\", hot: true },\\n      { title: \\"Recommendation engines increase fan engagement by 40%\\", time: \\"3h ago\\" },\\n      { title: \\"Dynamic content adaptation matches viewer preferences\\", time: \\"5h ago\\" },\\n      { title: \\"Behavioral analysis optimizes content delivery timing\\", time: \\"7h ago\\" }\\n    ]\\n  };\\n  \\n  // AI-Powered Content Demonstrations\\n  const aiDemonstrations = [\\n    {\\n      id: 1,\\n      title: \\"AI Game Summary Generation Demo\\",\\n      duration: \\"2:45\\",\\n      views: \\"2.3M\\",\\n      category: \\"AI Journalism\\",\\n      live: false,\\n      description: \\"Watch AI create comprehensive game recaps in real-time\\"\\n    },\\n    {\\n      id: 2,\\n      title: \\"LIVE: AI Commentary Training Session\\",\\n      duration: \\"LIVE\\",\\n      views: \\"450K watching\\",\\n      category: \\"AI Commentary\\",\\n      live: true,\\n      description: \\"Neural networks learning play-by-play analysis\\"\\n    },\\n    {\\n      id: 3,\\n      title: \\"Computer Vision Player Tracking\\",\\n      duration: \\"3:22\\",\\n      views: \\"1.1M\\",\\n      category: \\"AI Analytics\\",\\n      live: false,\\n      description: \\"Advanced motion analysis and performance metrics\\"\\n    },\\n    {\\n      id: 4,\\n      title: \\"Automated Highlight Detection System\\",\\n      duration: \\"5:15\\",\\n      views: \\"890K\\",\\n      category: \\"AI Technology\\",\\n      live: false,\\n      description: \\"Machine learning identifies key moments instantly\\"\\n    }\\n  ];\\n  \\n  // AI Research Teams and Technologies\\n  const aiTeams = [\\n    { name: \\"Dr. Sarah Chen\\", role: \\"Head of AI Journalism\\", image: \\"🧠\\", status: \\"Research Active\\", team: \\"ESPN AI Lab\\" },\\n    { name: \\"Marcus Rodriguez\\", role: \\"Computer Vision Lead\\", image: \\"👁️\\", status: \\"Model Training\\", team: \\"Analytics Division\\" },\\n    { name: \\"AI Commentary Bot v3.0\\", role: \\"Automated Commentary\\", image: \\"🤖\\", status: \\"LIVE Testing\\", team: \\"Innovation Lab\\" },\\n    { name: \\"DataMind Analytics\\", role: \\"Predictive Modeling\\", image: \\"📊\\", status: \\"Processing\\", team: \\"Data Science\\" },\\n    { name: \\"SportGPT System\\", role: \\"Content Generation\\", image: \\"✍️\\", status: \\"Active Generation\\", team: \\"Content AI\\" },\\n    { name: \\"VisionTrack Pro\\", role: \\"Player Analytics\\", image: \\"🎯\\", status: \\"Live Tracking\\", team: \\"Computer Vision\\" }\\n  ];\\n  \\n  // Trending topics\\n  const aiTrendingTopics = [\\n    { tag: \\"#AIJournalism\\", posts: \\"325K\\", trend: \\"up\\", description: \\"Automated sports content generation\\" },\\n    { tag: \\"#SportsTech\\", posts: \\"289K\\", trend: \\"up\\", description: \\"AI-powered analytics and insights\\" },\\n    { tag: \\"#ComputerVision\\", posts: \\"167K\\", trend: \\"up\\", description: \\"Player tracking and analysis\\" },\\n    { tag: \\"#PredictiveAnalytics\\", posts: \\"145K\\", trend: \\"up\\", description: \\"Game outcome forecasting\\" },\\n    { tag: \\"#AutomatedCommentary\\", posts: \\"134K\\", trend: \\"up\\", description: \\"AI-generated play-by-play\\" },\\n    { tag: \\"#RealTimeStats\\", posts: \\"128K\\", trend: \\"up\\", description: \\"Live data integration systems\\" }\\n  ];\\n  \\n  let selectedCategory = 'All';\\n  const categories = ['All', 'Automated Journalism', 'Computer Vision', 'Predictive Analytics', 'Natural Language', 'Data Integration', 'Personalization'];\\n<\/script>\\n\\n<svelte:head>\\n  <title>ESPN AI - Sports Journalism Innovation | Disney AI Hub</title>\\n</svelte:head>\\n\\n<!-- Breaking News Ticker -->\\n<section class=\\"bg-red-700 text-white py-2 overflow-hidden sticky top-0 z-50\\">\\n  <div class=\\"flex items-center\\">\\n    <div class=\\"bg-red-900 px-4 py-2 font-bold flex items-center\\">\\n      <span class=\\"w-2 h-2 bg-white rounded-full animate-pulse mr-2\\"></span>\\n      BREAKING NEWS\\n    </div>\\n    <div class=\\"flex-1 overflow-hidden\\">\\n      <div class=\\"flex animate-scroll-left\\">\\n        {#each [...breakingNews, ...breakingNews] as news}\\n          <span class=\\"px-6 whitespace-nowrap flex items-center\\">\\n            {#if news.urgent}\\n              <span class=\\"text-yellow-300 mr-2\\">⚡</span>\\n            {/if}\\n            {news.text}\\n          </span>\\n        {/each}\\n      </div>\\n    </div>\\n  </div>\\n</section>\\n\\n<!-- Header with Time -->\\n<section class=\\"bg-black text-white py-4\\">\\n  <div class=\\"container mx-auto px-4 flex items-center justify-between\\">\\n    <div>\\n      <h1 class=\\"text-3xl font-bold text-white\\">ESPN AI INNOVATION</h1>\\n      <p class=\\"text-gray-400\\">Transforming sports journalism with artificial intelligence</p>\\n    </div>\\n    <div class=\\"text-right\\">\\n      <div class=\\"text-2xl font-bold tabular-nums text-white\\">\\n        {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}\\n      </div>\\n      <div class=\\"text-gray-400\\">\\n        {currentTime.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}\\n      </div>\\n    </div>\\n  </div>\\n</section>\\n\\n<!-- Top Stories Section -->\\n<section class=\\"container mx-auto px-4 py-8\\">\\n  <h2 class=\\"text-3xl font-bold mb-6 text-gray-900\\">AI Innovation Highlights</h2>\\n  \\n  <div class=\\"grid grid-cols-1 lg:grid-cols-3 gap-6\\">\\n    {#each topStories as story, i}\\n      <article class=\\"bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer {i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}\\">\\n        <div class=\\"relative {i === 0 ? 'h-96' : 'h-48'} bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center\\">\\n          <span class=\\"text-8xl\\">{story.image}</span>\\n          {#if story.featured}\\n            <span class=\\"absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold\\">\\n              FEATURED\\n            </span>\\n          {/if}\\n          <span class=\\"absolute top-4 right-4 bg-black text-white px-3 py-1 rounded text-sm font-bold\\">\\n            {story.category}\\n          </span>\\n        </div>\\n        <div class=\\"p-6\\">\\n          <h3 class=\\"text-xl {i === 0 ? 'lg:text-2xl' : ''} font-bold mb-2 hover:text-red-600 transition-colors text-gray-900\\">\\n            {story.headline}\\n          </h3>\\n          <p class=\\"text-gray-600 mb-4 {i === 0 ? 'lg:text-lg' : ''}\\">{story.summary}</p>\\n          <div class=\\"flex items-center justify-between text-sm text-gray-500\\">\\n            <span>By {story.author}</span>\\n            <span>{story.time}</span>\\n          </div>\\n        </div>\\n      </article>\\n    {/each}\\n  </div>\\n</section>\\n\\n<!-- News by Sport Categories -->\\n<section class=\\"bg-gray-100 py-12\\">\\n  <div class=\\"container mx-auto px-4\\">\\n    <div class=\\"flex items-center justify-between mb-8\\">\\n      <h2 class=\\"text-3xl font-bold text-gray-900\\">AI Technologies in Sports Media</h2>\\n      <div class=\\"flex gap-2\\">\\n        {#each categories as category}\\n          <button\\n            class=\\"px-4 py-2 rounded-full font-semibold transition-colors {selectedCategory === category ? 'bg-red-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}\\"\\n            on:click={() => selectedCategory = category}\\n          >\\n            {category}\\n          </button>\\n        {/each}\\n      </div>\\n    </div>\\n    \\n    <div class=\\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6\\">\\n      {#each Object.entries(aiTechnologies) as [sport, articles]}\\n        {#if selectedCategory === 'All' || selectedCategory === sport}\\n          <div class=\\"bg-white rounded-lg shadow-md p-6\\">\\n            <h3 class=\\"text-xl font-bold mb-4 text-red-600\\">{sport}</h3>\\n            <div class=\\"space-y-3\\">\\n              {#each articles as article}\\n                <div class=\\"border-b border-gray-200 pb-3 last:border-0 cursor-pointer hover:bg-gray-50 -mx-2 px-2 rounded transition-colors\\">\\n                  <div class=\\"flex items-start justify-between\\">\\n                    <h4 class=\\"font-semibold text-gray-800 flex-1 pr-2\\">\\n                      {#if article.hot}\\n                        <span class=\\"text-red-500 mr-1\\">🔥</span>\\n                      {/if}\\n                      {article.title}\\n                    </h4>\\n                  </div>\\n                  <p class=\\"text-sm text-gray-500 mt-1\\">{article.time}</p>\\n                </div>\\n              {/each}\\n            </div>\\n          </div>\\n        {/if}\\n      {/each}\\n    </div>\\n  </div>\\n</section>\\n\\n<!-- Video Highlights -->\\n<section class=\\"container mx-auto px-4 py-12\\">\\n  <div class=\\"flex items-center justify-between mb-8\\">\\n    <h2 class=\\"text-3xl font-bold text-gray-900\\">AI Technology Demonstrations</h2>\\n    <a href=\\"/experiments\\" class=\\"text-red-600 hover:text-red-700 font-semibold\\">View All Experiments →</a>\\n  </div>\\n  \\n  <div class=\\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6\\">\\n    {#each aiDemonstrations as video}\\n      <div class=\\"bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow\\">\\n        <div class=\\"relative h-40 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center\\">\\n          <span class=\\"text-5xl\\">▶️</span>\\n          {#if video.live}\\n            <span class=\\"absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold flex items-center\\">\\n              <span class=\\"w-2 h-2 bg-white rounded-full animate-pulse mr-1\\"></span>\\n              LIVE\\n            </span>\\n          {:else}\\n            <span class=\\"absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs\\">\\n              {video.duration}\\n            </span>\\n          {/if}\\n        </div>\\n        <div class=\\"p-4\\">\\n          <h4 class=\\"font-bold mb-2 text-gray-900\\">{video.title}</h4>\\n          <p class=\\"text-sm text-gray-600 mb-2\\">{video.description}</p>\\n          <div class=\\"flex items-center justify-between text-sm text-gray-500\\">\\n            <span>{video.category}</span>\\n            <span>{video.views}</span>\\n          </div>\\n        </div>\\n      </div>\\n    {/each}\\n  </div>\\n</section>\\n\\n<!-- ESPN Personalities & Shows -->\\n<section class=\\"bg-gradient-to-r from-gray-900 to-black text-white py-12\\">\\n  <div class=\\"container mx-auto px-4\\">\\n    <h2 class=\\"text-3xl font-bold mb-8 text-white\\">AI Research Teams & Technologies</h2>\\n    \\n    <div class=\\"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6\\">\\n      {#each aiTeams as person}\\n        <div class=\\"text-center cursor-pointer hover:scale-105 transition-transform\\">\\n          <div class=\\"w-24 h-24 mx-auto bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center text-5xl mb-3\\">\\n            {person.image}\\n          </div>\\n          <h4 class=\\"font-bold text-white\\">{person.name}</h4>\\n          <p class=\\"text-sm text-gray-400\\">{person.role}</p>\\n          <p class=\\"text-xs text-blue-400\\">{person.team}</p>\\n          <span class=\\"text-xs {person.status.includes('LIVE') || person.status.includes('Active') ? 'text-red-400 font-bold' : 'text-gray-500'}\\">\\n            {person.status}\\n          </span>\\n        </div>\\n      {/each}\\n    </div>\\n  </div>\\n</section>\\n\\n<!-- Trending Topics -->\\n<section class=\\"container mx-auto px-4 py-12\\">\\n  <div class=\\"bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8\\">\\n    <h2 class=\\"text-2xl font-bold mb-6 text-gray-900\\">Trending AI Technologies</h2>\\n    \\n    <div class=\\"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4\\">\\n      {#each aiTrendingTopics as topic}\\n        <div class=\\"bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer\\">\\n          <h4 class=\\"font-bold text-red-600 mb-1\\">{topic.tag}</h4>\\n          <p class=\\"text-xs text-gray-500 mb-2\\">{topic.description}</p>\\n          <div class=\\"flex items-center justify-between\\">\\n            <span class=\\"text-sm text-gray-600\\">{topic.posts} posts</span>\\n            <span class=\\"text-sm {topic.trend === 'up' ? 'text-green-500' : 'text-red-500'}\\">\\n              {topic.trend === 'up' ? '↑' : '↓'}\\n            </span>\\n          </div>\\n        </div>\\n      {/each}\\n    </div>\\n  </div>\\n</section>\\n\\n<!-- AI Experiments & Related Links -->\\n<section class=\\"bg-black text-white py-6 mt-12\\">\\n  <div class=\\"container mx-auto px-4\\">\\n    <div class=\\"flex items-center justify-between flex-wrap gap-4\\">\\n      <span class=\\"font-bold text-lg text-white\\">EXPLORE AI SPORTS INNOVATION</span>\\n      <div class=\\"flex gap-6 overflow-x-auto\\">\\n        <a href=\\"/experiments\\" class=\\"whitespace-nowrap text-blue-300 hover:text-blue-100 transition-colors\\">\\n          🔬 View All Experiments\\n        </a>\\n        <a href=\\"/disney/experiments\\" class=\\"whitespace-nowrap text-blue-300 hover:text-blue-100 transition-colors\\">\\n          🏰 Disney AI Labs\\n        </a>\\n        <a href=\\"/disney/espn\\" class=\\"whitespace-nowrap text-blue-300 hover:text-blue-100 transition-colors\\">\\n          📺 ESPN AI Hub\\n        </a>\\n        <a href=\\"#\\" class=\\"whitespace-nowrap text-blue-300 hover:text-blue-100 transition-colors\\">\\n          📊 Real-Time Analytics\\n        </a>\\n      </div>\\n    </div>\\n  </div>\\n</section>\\n\\n<style>\\n  @keyframes scroll-left {\\n    0% {\\n      transform: translateX(0);\\n    }\\n    100% {\\n      transform: translateX(-50%);\\n    }\\n  }\\n  \\n  .animate-scroll-left {\\n    animation: scroll-left 30s linear infinite;\\n  }\\n</style>"],"names":[],"mappings":"AAoYE,WAAW,0BAAY,CACrB,EAAG,CACD,SAAS,CAAE,WAAW,CAAC,CACzB,CACA,IAAK,CACH,SAAS,CAAE,WAAW,IAAI,CAC5B,CACF,CAEA,mCAAqB,CACnB,SAAS,CAAE,0BAAW,CAAC,GAAG,CAAC,MAAM,CAAC,QACpC"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentTime = /* @__PURE__ */ new Date();
  const breakingNews = [
    {
      id: 1,
      text: "BREAKTHROUGH: AI generates real-time game summaries with 95% accuracy",
      urgent: true
    },
    {
      id: 2,
      text: "ESPN deploys automated highlight detection across all live sports",
      urgent: true
    },
    {
      id: 3,
      text: "Machine learning models predict player performance with unprecedented precision",
      urgent: false
    },
    {
      id: 4,
      text: "Natural language processing revolutionizes sports commentary automation",
      urgent: true
    },
    {
      id: 5,
      text: "AI-powered player tracking delivers new advanced analytics insights",
      urgent: false
    },
    {
      id: 6,
      text: "Automated journalism produces 10,000+ game recaps in minutes",
      urgent: false
    }
  ];
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
  const aiTechnologies = {
    "Automated Journalism": [
      {
        title: "GPT-4 models generate 500+ game recaps daily with 99% accuracy",
        time: "1h ago",
        hot: true
      },
      {
        title: "Real-time article creation from live data feeds deployed",
        time: "3h ago"
      },
      {
        title: "AI fact-checking system prevents sports misinformation",
        time: "5h ago"
      },
      {
        title: "Multilingual content generation expands global reach",
        time: "7h ago"
      }
    ],
    "Computer Vision": [
      {
        title: "Advanced player tracking analyzes every movement on field",
        time: "2h ago",
        hot: true
      },
      {
        title: "Automated highlight detection identifies key moments instantly",
        time: "4h ago"
      },
      {
        title: "Injury prediction models achieve 85% accuracy rate",
        time: "6h ago"
      },
      {
        title: "Ball tracking technology enhances officiating precision",
        time: "8h ago"
      }
    ],
    "Predictive Analytics": [
      {
        title: "Machine learning models forecast game outcomes with 78% accuracy",
        time: "3h ago",
        hot: true
      },
      {
        title: "Player performance metrics predict future All-Stars",
        time: "5h ago"
      },
      {
        title: "Draft analysis AI identifies hidden talent prospects",
        time: "7h ago"
      },
      {
        title: "Weather impact algorithms improve betting predictions",
        time: "9h ago"
      }
    ],
    "Natural Language": [
      {
        title: "Voice synthesis creates personalized sports updates",
        time: "1h ago",
        hot: true
      },
      {
        title: "Sentiment analysis tracks fan reactions in real-time",
        time: "3h ago"
      },
      {
        title: "Automated interview transcription speeds content creation",
        time: "5h ago"
      },
      {
        title: "Translation AI breaks down language barriers in sports",
        time: "7h ago"
      }
    ],
    "Data Integration": [
      {
        title: "Real-time stats API processes 1M+ data points per game",
        time: "2h ago",
        hot: true
      },
      {
        title: "Cross-platform analytics unify viewer engagement metrics",
        time: "4h ago"
      },
      {
        title: "Historical data mining reveals century-old sports trends",
        time: "6h ago"
      },
      {
        title: "Biometric integration provides unprecedented player insights",
        time: "8h ago"
      }
    ],
    "Personalization": [
      {
        title: "AI curators deliver custom sports content to 50M+ users",
        time: "1h ago",
        hot: true
      },
      {
        title: "Recommendation engines increase fan engagement by 40%",
        time: "3h ago"
      },
      {
        title: "Dynamic content adaptation matches viewer preferences",
        time: "5h ago"
      },
      {
        title: "Behavioral analysis optimizes content delivery timing",
        time: "7h ago"
      }
    ]
  };
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
  const aiTeams = [
    {
      name: "Dr. Sarah Chen",
      role: "Head of AI Journalism",
      image: "🧠",
      status: "Research Active",
      team: "ESPN AI Lab"
    },
    {
      name: "Marcus Rodriguez",
      role: "Computer Vision Lead",
      image: "👁️",
      status: "Model Training",
      team: "Analytics Division"
    },
    {
      name: "AI Commentary Bot v3.0",
      role: "Automated Commentary",
      image: "🤖",
      status: "LIVE Testing",
      team: "Innovation Lab"
    },
    {
      name: "DataMind Analytics",
      role: "Predictive Modeling",
      image: "📊",
      status: "Processing",
      team: "Data Science"
    },
    {
      name: "SportGPT System",
      role: "Content Generation",
      image: "✍️",
      status: "Active Generation",
      team: "Content AI"
    },
    {
      name: "VisionTrack Pro",
      role: "Player Analytics",
      image: "🎯",
      status: "Live Tracking",
      team: "Computer Vision"
    }
  ];
  const aiTrendingTopics = [
    {
      tag: "#AIJournalism",
      posts: "325K",
      trend: "up",
      description: "Automated sports content generation"
    },
    {
      tag: "#SportsTech",
      posts: "289K",
      trend: "up",
      description: "AI-powered analytics and insights"
    },
    {
      tag: "#ComputerVision",
      posts: "167K",
      trend: "up",
      description: "Player tracking and analysis"
    },
    {
      tag: "#PredictiveAnalytics",
      posts: "145K",
      trend: "up",
      description: "Game outcome forecasting"
    },
    {
      tag: "#AutomatedCommentary",
      posts: "134K",
      trend: "up",
      description: "AI-generated play-by-play"
    },
    {
      tag: "#RealTimeStats",
      posts: "128K",
      trend: "up",
      description: "Live data integration systems"
    }
  ];
  let selectedCategory = "All";
  const categories = [
    "All",
    "Automated Journalism",
    "Computer Vision",
    "Predictive Analytics",
    "Natural Language",
    "Data Integration",
    "Personalization"
  ];
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1slckpr_START -->${$$result.title = `<title>ESPN AI - Sports Journalism Innovation | Disney AI Hub</title>`, ""}<!-- HEAD_svelte-1slckpr_END -->`, ""}  <section class="bg-red-700 text-white py-2 overflow-hidden sticky top-0 z-50"><div class="flex items-center"><div class="bg-red-900 px-4 py-2 font-bold flex items-center" data-svelte-h="svelte-1tg2g4r"><span class="w-2 h-2 bg-white rounded-full animate-pulse mr-2"></span>
      BREAKING NEWS</div> <div class="flex-1 overflow-hidden"><div class="flex animate-scroll-left svelte-18bpiq7">${each([...breakingNews, ...breakingNews], (news) => {
    return `<span class="px-6 whitespace-nowrap flex items-center">${news.urgent ? `<span class="text-yellow-300 mr-2" data-svelte-h="svelte-1ttvpxo">⚡</span>` : ``} ${escape(news.text)} </span>`;
  })}</div></div></div></section>  <section class="bg-black text-white py-4"><div class="container mx-auto px-4 flex items-center justify-between"><div data-svelte-h="svelte-1ojvnpg"><h1 class="text-3xl font-bold text-white">ESPN AI INNOVATION</h1> <p class="text-gray-400">Transforming sports journalism with artificial intelligence</p></div> <div class="text-right"><div class="text-2xl font-bold tabular-nums text-white">${escape(currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }))}</div> <div class="text-gray-400">${escape(currentTime.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric"
  }))}</div></div></div></section>  <section class="container mx-auto px-4 py-8"><h2 class="text-3xl font-bold mb-6 text-gray-900" data-svelte-h="svelte-1x70wzo">AI Innovation Highlights</h2> <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">${each(topStories, (story, i) => {
    return `<article class="${"bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer " + escape(i === 0 ? "lg:col-span-2 lg:row-span-2" : "", true)}"><div class="${"relative " + escape(i === 0 ? "h-96" : "h-48", true) + " bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center"}"><span class="text-8xl">${escape(story.image)}</span> ${story.featured ? `<span class="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold" data-svelte-h="svelte-1qbrpix">FEATURED
            </span>` : ``} <span class="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded text-sm font-bold">${escape(story.category)} </span></div> <div class="p-6"><h3 class="${"text-xl " + escape(i === 0 ? "lg:text-2xl" : "", true) + " font-bold mb-2 hover:text-red-600 transition-colors text-gray-900"}">${escape(story.headline)}</h3> <p class="${"text-gray-600 mb-4 " + escape(i === 0 ? "lg:text-lg" : "", true)}">${escape(story.summary)}</p> <div class="flex items-center justify-between text-sm text-gray-500"><span>By ${escape(story.author)}</span> <span>${escape(story.time)}</span> </div></div> </article>`;
  })}</div></section>  <section class="bg-gray-100 py-12"><div class="container mx-auto px-4"><div class="flex items-center justify-between mb-8"><h2 class="text-3xl font-bold text-gray-900" data-svelte-h="svelte-cxda7y">AI Technologies in Sports Media</h2> <div class="flex gap-2">${each(categories, (category) => {
    return `<button class="${"px-4 py-2 rounded-full font-semibold transition-colors " + escape(
      selectedCategory === category ? "bg-red-600 text-white" : "bg-white text-gray-700 hover:bg-gray-200",
      true
    )}">${escape(category)} </button>`;
  })}</div></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">${each(Object.entries(aiTechnologies), ([sport, articles]) => {
    return `${`<div class="bg-white rounded-lg shadow-md p-6"><h3 class="text-xl font-bold mb-4 text-red-600">${escape(sport)}</h3> <div class="space-y-3">${each(articles, (article) => {
      return `<div class="border-b border-gray-200 pb-3 last:border-0 cursor-pointer hover:bg-gray-50 -mx-2 px-2 rounded transition-colors"><div class="flex items-start justify-between"><h4 class="font-semibold text-gray-800 flex-1 pr-2">${article.hot ? `<span class="text-red-500 mr-1" data-svelte-h="svelte-rccv4b">🔥</span>` : ``} ${escape(article.title)} </h4></div> <p class="text-sm text-gray-500 mt-1">${escape(article.time)}</p> </div>`;
    })}</div> </div>`}`;
  })}</div></div></section>  <section class="container mx-auto px-4 py-12"><div class="flex items-center justify-between mb-8" data-svelte-h="svelte-15bp0in"><h2 class="text-3xl font-bold text-gray-900">AI Technology Demonstrations</h2> <a href="/experiments" class="text-red-600 hover:text-red-700 font-semibold">View All Experiments →</a></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">${each(aiDemonstrations, (video) => {
    return `<div class="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"><div class="relative h-40 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center"><span class="text-5xl" data-svelte-h="svelte-vq0hsv">▶️</span> ${video.live ? `<span class="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold flex items-center" data-svelte-h="svelte-14m1ew0"><span class="w-2 h-2 bg-white rounded-full animate-pulse mr-1"></span>
              LIVE
            </span>` : `<span class="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs">${escape(video.duration)} </span>`}</div> <div class="p-4"><h4 class="font-bold mb-2 text-gray-900">${escape(video.title)}</h4> <p class="text-sm text-gray-600 mb-2">${escape(video.description)}</p> <div class="flex items-center justify-between text-sm text-gray-500"><span>${escape(video.category)}</span> <span>${escape(video.views)}</span> </div></div> </div>`;
  })}</div></section>  <section class="bg-gradient-to-r from-gray-900 to-black text-white py-12"><div class="container mx-auto px-4"><h2 class="text-3xl font-bold mb-8 text-white" data-svelte-h="svelte-4ujogv">AI Research Teams &amp; Technologies</h2> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">${each(aiTeams, (person) => {
    return `<div class="text-center cursor-pointer hover:scale-105 transition-transform"><div class="w-24 h-24 mx-auto bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center text-5xl mb-3">${escape(person.image)}</div> <h4 class="font-bold text-white">${escape(person.name)}</h4> <p class="text-sm text-gray-400">${escape(person.role)}</p> <p class="text-xs text-blue-400">${escape(person.team)}</p> <span class="${"text-xs " + escape(
      person.status.includes("LIVE") || person.status.includes("Active") ? "text-red-400 font-bold" : "text-gray-500",
      true
    )}">${escape(person.status)}</span> </div>`;
  })}</div></div></section>  <section class="container mx-auto px-4 py-12"><div class="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8"><h2 class="text-2xl font-bold mb-6 text-gray-900" data-svelte-h="svelte-18y1j5y">Trending AI Technologies</h2> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">${each(aiTrendingTopics, (topic) => {
    return `<div class="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer"><h4 class="font-bold text-red-600 mb-1">${escape(topic.tag)}</h4> <p class="text-xs text-gray-500 mb-2">${escape(topic.description)}</p> <div class="flex items-center justify-between"><span class="text-sm text-gray-600">${escape(topic.posts)} posts</span> <span class="${"text-sm " + escape(topic.trend === "up" ? "text-green-500" : "text-red-500", true)}">${escape(topic.trend === "up" ? "↑" : "↓")} </span></div> </div>`;
  })}</div></div></section>  <section class="bg-black text-white py-6 mt-12" data-svelte-h="svelte-rvhvof"><div class="container mx-auto px-4"><div class="flex items-center justify-between flex-wrap gap-4"><span class="font-bold text-lg text-white">EXPLORE AI SPORTS INNOVATION</span> <div class="flex gap-6 overflow-x-auto"><a href="/experiments" class="whitespace-nowrap text-blue-300 hover:text-blue-100 transition-colors">🔬 View All Experiments</a> <a href="/disney/experiments" class="whitespace-nowrap text-blue-300 hover:text-blue-100 transition-colors">🏰 Disney AI Labs</a> <a href="/disney/espn" class="whitespace-nowrap text-blue-300 hover:text-blue-100 transition-colors">📺 ESPN AI Hub</a> <a href="#" class="whitespace-nowrap text-blue-300 hover:text-blue-100 transition-colors">📊 Real-Time Analytics</a></div></div></div> </section>`;
});
export {
  Page as default
};
