import { c as create_ssr_component, o as onDestroy, b as each, e as escape, d as add_attribute } from "../../../../../chunks/ssr.js";
const css = {
  code: ".scrollbar-hide.svelte-casind{-ms-overflow-style:none;scrollbar-width:none}.scrollbar-hide.svelte-casind::-webkit-scrollbar{display:none}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import { onMount, onDestroy } from 'svelte';\\n  \\n  // Live scores data (would be fetched from API in production)\\n  let liveScores = [\\n    { \\n      id: 1,\\n      sport: 'NFL', \\n      league: 'NFL',\\n      teams: { home: 'Kansas City Chiefs', away: 'Buffalo Bills' },\\n      score: { home: 24, away: 21 },\\n      time: '3rd Quarter - 8:23',\\n      possession: 'home',\\n      lastPlay: 'Mahomes completes 15-yard pass to Kelce',\\n      channel: 'ESPN',\\n      viewers: '2.3M'\\n    },\\n    { \\n      id: 2,\\n      sport: 'NBA', \\n      league: 'NBA',\\n      teams: { home: 'Los Angeles Lakers', away: 'Boston Celtics' },\\n      score: { home: 89, away: 92 },\\n      time: '4th Quarter - 3:45',\\n      possession: 'away',\\n      lastPlay: 'Tatum scores on driving layup',\\n      channel: 'ESPN2',\\n      viewers: '1.8M'\\n    },\\n    { \\n      id: 3,\\n      sport: 'Soccer', \\n      league: 'Premier League',\\n      teams: { home: 'Manchester United', away: 'Liverpool' },\\n      score: { home: 1, away: 2 },\\n      time: \\"78'\\",\\n      possession: null,\\n      lastPlay: 'Salah scores from penalty spot',\\n      channel: 'ESPN+',\\n      viewers: '956K'\\n    },\\n    { \\n      id: 4,\\n      sport: 'NHL', \\n      league: 'NHL',\\n      teams: { home: 'NY Rangers', away: 'Tampa Bay Lightning' },\\n      score: { home: 3, away: 3 },\\n      time: '3rd Period - 12:10',\\n      possession: null,\\n      lastPlay: 'Kucherov ties it with power play goal',\\n      channel: 'ESPN+',\\n      viewers: '432K'\\n    },\\n    { \\n      id: 5,\\n      sport: 'MLB', \\n      league: 'MLB',\\n      teams: { home: 'NY Yankees', away: 'Houston Astros' },\\n      score: { home: 5, away: 4 },\\n      time: 'Bottom 8th',\\n      possession: 'home',\\n      lastPlay: 'Judge singles to right field',\\n      channel: 'ESPN',\\n      viewers: '1.1M'\\n    }\\n  ];\\n\\n  // Upcoming events\\n  let upcomingEvents = [\\n    { time: '7:00 PM ET', sport: 'NBA', matchup: 'Warriors @ Suns', channel: 'ESPN' },\\n    { time: '7:30 PM ET', sport: 'NHL', matchup: 'Bruins @ Maple Leafs', channel: 'ESPN+' },\\n    { time: '8:15 PM ET', sport: 'NFL', matchup: 'Cowboys @ Eagles', channel: 'ESPN' },\\n    { time: '9:00 PM ET', sport: 'NBA', matchup: 'Nuggets @ Clippers', channel: 'ESPN2' },\\n    { time: '10:00 PM ET', sport: 'UFC', matchup: 'UFC 298 Prelims', channel: 'ESPN+' }\\n  ];\\n\\n  // Featured broadcasts\\n  const featuredBroadcasts = [\\n    {\\n      title: 'Monday Night Football',\\n      description: 'Cowboys vs Eagles - NFC East Showdown',\\n      time: '8:15 PM ET',\\n      icon: '🏈',\\n      viewers: 'Expected 15M+ viewers',\\n      channel: 'ESPN'\\n    },\\n    {\\n      title: 'NBA on ESPN',\\n      description: 'Lakers vs Celtics - Classic Rivalry',\\n      time: 'LIVE NOW',\\n      icon: '🏀',\\n      viewers: '1.8M watching',\\n      channel: 'ESPN2'\\n    },\\n    {\\n      title: 'UFC Fight Night',\\n      description: 'Main Card Begins at 10 PM',\\n      time: '10:00 PM ET',\\n      icon: '🥊',\\n      viewers: 'PPV Event',\\n      channel: 'ESPN+'\\n    }\\n  ];\\n\\n  // Live chat messages\\n  let chatMessages = [\\n    { id: 1, user: 'SportsFan23', message: 'What a game! Chiefs looking strong!', timestamp: '2 min ago' },\\n    { id: 2, user: 'LakersNation', message: 'LeBron needs to take over in the 4th', timestamp: '3 min ago' },\\n    { id: 3, user: 'RedDevils4Life', message: 'Liverpool dominating this match', timestamp: '5 min ago' },\\n    { id: 4, user: 'HockeyGuy99', message: 'This Rangers-Lightning game is insane!', timestamp: '7 min ago' }\\n  ];\\n\\n  let newMessage = '';\\n  let selectedPoll = null;\\n\\n  // Live polls\\n  let polls = [\\n    {\\n      id: 1,\\n      question: \\"Who wins Monday Night Football?\\",\\n      options: [\\n        { text: 'Cowboys', votes: 453, percentage: 62 },\\n        { text: 'Eagles', votes: 277, percentage: 38 }\\n      ],\\n      totalVotes: 730\\n    },\\n    {\\n      id: 2,\\n      question: \\"NBA Finals prediction?\\",\\n      options: [\\n        { text: 'Celtics', votes: 892, percentage: 35 },\\n        { text: 'Nuggets', votes: 765, percentage: 30 },\\n        { text: 'Bucks', votes: 510, percentage: 20 },\\n        { text: 'Warriors', votes: 383, percentage: 15 }\\n      ],\\n      totalVotes: 2550\\n    }\\n  ];\\n\\n  // Auto-update scores\\n  let updateInterval;\\n  \\n  onMount(() => {\\n    // Simulate live score updates\\n    updateInterval = setInterval(() => {\\n      // Random score update\\n      const randomIndex = Math.floor(Math.random() * liveScores.length);\\n      const game = liveScores[randomIndex];\\n      \\n      if (Math.random() > 0.7) {\\n        if (Math.random() > 0.5) {\\n          liveScores[randomIndex].score.home += 1;\\n        } else {\\n          liveScores[randomIndex].score.away += 1;\\n        }\\n      }\\n      \\n      // Update viewer counts\\n      liveScores = liveScores.map(score => ({\\n        ...score,\\n        viewers: updateViewerCount(score.viewers)\\n      }));\\n    }, 5000);\\n  });\\n\\n  onDestroy(() => {\\n    if (updateInterval) clearInterval(updateInterval);\\n  });\\n\\n  function updateViewerCount(current) {\\n    const num = parseFloat(current);\\n    const variation = (Math.random() - 0.5) * 0.1;\\n    const newNum = num + variation;\\n    return newNum < 1 ? \`\${(newNum * 1000).toFixed(0)}K\` : \`\${newNum.toFixed(1)}M\`;\\n  }\\n\\n  function sendMessage() {\\n    if (newMessage.trim()) {\\n      chatMessages = [\\n        { \\n          id: Date.now(), \\n          user: 'You', \\n          message: newMessage, \\n          timestamp: 'Just now' \\n        },\\n        ...chatMessages\\n      ];\\n      newMessage = '';\\n    }\\n  }\\n\\n  function votePoll(pollId, optionIndex) {\\n    polls = polls.map(poll => {\\n      if (poll.id === pollId && selectedPoll !== pollId) {\\n        const updatedOptions = poll.options.map((option, index) => {\\n          if (index === optionIndex) {\\n            return { ...option, votes: option.votes + 1 };\\n          }\\n          return option;\\n        });\\n        \\n        const totalVotes = updatedOptions.reduce((sum, opt) => sum + opt.votes, 0);\\n        \\n        updatedOptions.forEach(option => {\\n          option.percentage = Math.round((option.votes / totalVotes) * 100);\\n        });\\n        \\n        selectedPoll = pollId;\\n        \\n        return { ...poll, options: updatedOptions, totalVotes };\\n      }\\n      return poll;\\n    });\\n  }\\n\\n  function getSportIcon(sport) {\\n    const icons = {\\n      'NFL': '🏈',\\n      'NBA': '🏀',\\n      'MLB': '⚾',\\n      'NHL': '🏒',\\n      'Soccer': '⚽',\\n      'UFC': '🥊'\\n    };\\n    return icons[sport] || '🏆';\\n  }\\n<\/script>\\n\\n<svelte:head>\\n  <title>ESPN Live - Live Sports Scores, Streaming & Updates</title>\\n</svelte:head>\\n\\n<!-- Live Ticker -->\\n<section class=\\"bg-black text-white py-2 sticky top-0 z-50\\">\\n  <div class=\\"container mx-auto px-4\\">\\n    <div class=\\"flex items-center space-x-4 overflow-x-auto scrollbar-hide\\">\\n      <span class=\\"flex items-center space-x-2 flex-shrink-0\\">\\n        <span class=\\"w-2 h-2 bg-red-500 rounded-full animate-pulse\\"></span>\\n        <span class=\\"text-xs font-bold text-red-500\\">LIVE</span>\\n      </span>\\n      {#each liveScores as score}\\n        <div class=\\"flex items-center space-x-2 text-xs flex-shrink-0 border-l border-gray-700 pl-4\\">\\n          <span>{getSportIcon(score.sport)}</span>\\n          <span class=\\"font-semibold\\">{score.teams.away} {score.score.away} - {score.score.home} {score.teams.home}</span>\\n          <span class=\\"text-gray-400\\">({score.time})</span>\\n        </div>\\n      {/each}\\n    </div>\\n  </div>\\n</section>\\n\\n<!-- Hero Section -->\\n<section class=\\"bg-gradient-to-br from-red-600 to-black text-white py-12\\">\\n  <div class=\\"container mx-auto px-4\\">\\n    <div class=\\"flex items-center justify-between mb-8\\">\\n      <div>\\n        <h1 class=\\"text-4xl md:text-6xl font-bold mb-4\\">ESPN Live</h1>\\n        <p class=\\"text-xl text-gray-200\\">Watch Every Game, Every Play, Every Moment</p>\\n      </div>\\n      <div class=\\"text-right\\">\\n        <div class=\\"text-3xl font-bold text-red-400\\">{liveScores.length}</div>\\n        <div class=\\"text-sm\\">Games Live Now</div>\\n      </div>\\n    </div>\\n  </div>\\n</section>\\n\\n<!-- Main Content Grid -->\\n<div class=\\"container mx-auto px-4 py-8\\">\\n  <div class=\\"grid grid-cols-1 lg:grid-cols-3 gap-8\\">\\n    \\n    <!-- Left Column - Live Scores -->\\n    <div class=\\"lg:col-span-2 space-y-6\\">\\n      \\n      <!-- Currently Broadcasting -->\\n      <div class=\\"bg-white rounded-xl shadow-lg p-6\\">\\n        <h2 class=\\"text-2xl font-bold mb-6 flex items-center\\">\\n          <span class=\\"w-3 h-3 bg-red-500 rounded-full animate-pulse mr-2\\"></span>\\n          Live Now\\n        </h2>\\n        \\n        <div class=\\"space-y-4\\">\\n          {#each liveScores as game}\\n            <div class=\\"bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors\\">\\n              <div class=\\"flex items-center justify-between mb-3\\">\\n                <div class=\\"flex items-center space-x-3\\">\\n                  <span class=\\"text-2xl\\">{getSportIcon(game.sport)}</span>\\n                  <div>\\n                    <span class=\\"text-xs font-bold text-gray-500\\">{game.league}</span>\\n                    <div class=\\"flex items-center space-x-2 text-xs text-gray-600\\">\\n                      <span>{game.channel}</span>\\n                      <span>•</span>\\n                      <span>{game.viewers} watching</span>\\n                    </div>\\n                  </div>\\n                </div>\\n                <span class=\\"text-sm font-semibold text-red-600\\">{game.time}</span>\\n              </div>\\n              \\n              <div class=\\"grid grid-cols-3 gap-4 items-center\\">\\n                <div class=\\"text-right\\">\\n                  <div class=\\"font-semibold\\">{game.teams.away}</div>\\n                  {#if game.possession === 'away'}\\n                    <span class=\\"text-xs text-green-600\\">● Possession</span>\\n                  {/if}\\n                </div>\\n                <div class=\\"text-center\\">\\n                  <div class=\\"text-3xl font-bold\\">\\n                    <span class={game.score.away > game.score.home ? 'text-green-600' : ''}>{game.score.away}</span>\\n                    <span class=\\"text-gray-400 mx-2\\">-</span>\\n                    <span class={game.score.home > game.score.away ? 'text-green-600' : ''}>{game.score.home}</span>\\n                  </div>\\n                </div>\\n                <div>\\n                  <div class=\\"font-semibold\\">{game.teams.home}</div>\\n                  {#if game.possession === 'home'}\\n                    <span class=\\"text-xs text-green-600\\">● Possession</span>\\n                  {/if}\\n                </div>\\n              </div>\\n              \\n              {#if game.lastPlay}\\n                <div class=\\"mt-3 pt-3 border-t border-gray-200\\">\\n                  <p class=\\"text-sm text-gray-600\\">\\n                    <span class=\\"font-semibold\\">Last Play:</span> {game.lastPlay}\\n                  </p>\\n                </div>\\n              {/if}\\n              \\n              <div class=\\"mt-3 flex space-x-2\\">\\n                <button class=\\"bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors\\">\\n                  Watch Live\\n                </button>\\n                <button class=\\"bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-300 transition-colors\\">\\n                  Game Stats\\n                </button>\\n              </div>\\n            </div>\\n          {/each}\\n        </div>\\n      </div>\\n\\n      <!-- Featured Broadcasts -->\\n      <div class=\\"bg-white rounded-xl shadow-lg p-6\\">\\n        <h2 class=\\"text-2xl font-bold mb-6\\">Featured Broadcasts</h2>\\n        \\n        <div class=\\"grid grid-cols-1 md:grid-cols-3 gap-4\\">\\n          {#each featuredBroadcasts as broadcast}\\n            <div class=\\"bg-gradient-to-br from-gray-900 to-black text-white rounded-lg p-4 hover:shadow-xl transition-all\\">\\n              <div class=\\"text-3xl mb-3\\">{broadcast.icon}</div>\\n              <h3 class=\\"font-bold mb-1\\">{broadcast.title}</h3>\\n              <p class=\\"text-sm text-gray-300 mb-2\\">{broadcast.description}</p>\\n              <div class=\\"flex items-center justify-between text-xs\\">\\n                <span class=\\"text-red-400 font-semibold\\">{broadcast.time}</span>\\n                <span class=\\"text-gray-400\\">{broadcast.channel}</span>\\n              </div>\\n              <div class=\\"text-xs text-gray-400 mt-2\\">{broadcast.viewers}</div>\\n            </div>\\n          {/each}\\n        </div>\\n      </div>\\n\\n      <!-- Upcoming Schedule -->\\n      <div class=\\"bg-white rounded-xl shadow-lg p-6\\">\\n        <h2 class=\\"text-2xl font-bold mb-6\\">Upcoming Live Events</h2>\\n        \\n        <div class=\\"space-y-3\\">\\n          {#each upcomingEvents as event}\\n            <div class=\\"flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors\\">\\n              <div class=\\"flex items-center space-x-3\\">\\n                <span class=\\"text-2xl\\">{getSportIcon(event.sport)}</span>\\n                <div>\\n                  <div class=\\"font-semibold\\">{event.matchup}</div>\\n                  <div class=\\"text-sm text-gray-600\\">{event.channel}</div>\\n                </div>\\n              </div>\\n              <div class=\\"text-right\\">\\n                <div class=\\"font-semibold text-sm\\">{event.time}</div>\\n                <button class=\\"text-xs text-red-600 hover:text-red-700 font-semibold\\">Set Reminder</button>\\n              </div>\\n            </div>\\n          {/each}\\n        </div>\\n      </div>\\n    </div>\\n\\n    <!-- Right Column - Interactive Features -->\\n    <div class=\\"space-y-6\\">\\n      \\n      <!-- Live Polls -->\\n      <div class=\\"bg-white rounded-xl shadow-lg p-6\\">\\n        <h3 class=\\"text-xl font-bold mb-4\\">Live Polls</h3>\\n        \\n        <div class=\\"space-y-6\\">\\n          {#each polls as poll}\\n            <div class=\\"space-y-3\\">\\n              <h4 class=\\"font-semibold\\">{poll.question}</h4>\\n              <div class=\\"space-y-2\\">\\n                {#each poll.options as option, index}\\n                  <button \\n                    class=\\"w-full text-left p-3 rounded-lg border transition-all hover:border-red-400\\"\\n                    class:bg-red-50={selectedPoll === poll.id}\\n                    class:border-gray-200={selectedPoll !== poll.id}\\n                    class:cursor-not-allowed={selectedPoll === poll.id}\\n                    disabled={selectedPoll === poll.id}\\n                    on:click={() => votePoll(poll.id, index)}\\n                  >\\n                    <div class=\\"flex items-center justify-between\\">\\n                      <span class=\\"font-medium\\">{option.text}</span>\\n                      <span class=\\"text-sm text-gray-600\\">{option.percentage}%</span>\\n                    </div>\\n                    {#if selectedPoll === poll.id}\\n                      <div class=\\"mt-2 bg-gray-200 rounded-full overflow-hidden\\">\\n                        <div \\n                          class=\\"bg-red-600 h-2 transition-all duration-500\\"\\n                          style=\\"width: {option.percentage}%\\"\\n                        ></div>\\n                      </div>\\n                    {/if}\\n                  </button>\\n                {/each}\\n              </div>\\n              <p class=\\"text-xs text-gray-500\\">{poll.totalVotes.toLocaleString()} votes</p>\\n            </div>\\n          {/each}\\n        </div>\\n      </div>\\n\\n      <!-- Live Chat -->\\n      <div class=\\"bg-white rounded-xl shadow-lg p-6\\">\\n        <h3 class=\\"text-xl font-bold mb-4\\">Fan Chat</h3>\\n        \\n        <div class=\\"space-y-3 max-h-96 overflow-y-auto mb-4\\">\\n          {#each chatMessages as message}\\n            <div class=\\"bg-gray-50 rounded-lg p-3\\">\\n              <div class=\\"flex items-center justify-between mb-1\\">\\n                <span class=\\"font-semibold text-sm\\">{message.user}</span>\\n                <span class=\\"text-xs text-gray-500\\">{message.timestamp}</span>\\n              </div>\\n              <p class=\\"text-sm text-gray-700\\">{message.message}</p>\\n            </div>\\n          {/each}\\n        </div>\\n        \\n        <form on:submit|preventDefault={sendMessage} class=\\"flex space-x-2\\">\\n          <input \\n            type=\\"text\\" \\n            bind:value={newMessage}\\n            placeholder=\\"Join the conversation...\\"\\n            class=\\"flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500\\"\\n          />\\n          <button \\n            type=\\"submit\\"\\n            class=\\"bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors\\"\\n          >\\n            Send\\n          </button>\\n        </form>\\n      </div>\\n\\n      <!-- Live Streaming Options -->\\n      <div class=\\"bg-gradient-to-br from-red-600 to-red-800 text-white rounded-xl shadow-lg p-6\\">\\n        <h3 class=\\"text-xl font-bold mb-4\\">Watch Live</h3>\\n        \\n        <div class=\\"space-y-3\\">\\n          <a href=\\"#\\" class=\\"block bg-white/20 backdrop-blur rounded-lg p-4 hover:bg-white/30 transition-colors\\">\\n            <div class=\\"flex items-center justify-between\\">\\n              <div>\\n                <h4 class=\\"font-bold\\">ESPN+</h4>\\n                <p class=\\"text-sm text-gray-200\\">Exclusive games & UFC</p>\\n              </div>\\n              <span class=\\"text-2xl\\">▶️</span>\\n            </div>\\n          </a>\\n          \\n          <a href=\\"#\\" class=\\"block bg-white/20 backdrop-blur rounded-lg p-4 hover:bg-white/30 transition-colors\\">\\n            <div class=\\"flex items-center justify-between\\">\\n              <div>\\n                <h4 class=\\"font-bold\\">ESPN App</h4>\\n                <p class=\\"text-sm text-gray-200\\">Watch on any device</p>\\n              </div>\\n              <span class=\\"text-2xl\\">📱</span>\\n            </div>\\n          </a>\\n          \\n          <a href=\\"#\\" class=\\"block bg-white/20 backdrop-blur rounded-lg p-4 hover:bg-white/30 transition-colors\\">\\n            <div class=\\"flex items-center justify-between\\">\\n              <div>\\n                <h4 class=\\"font-bold\\">TV Provider</h4>\\n                <p class=\\"text-sm text-gray-200\\">Sign in to watch</p>\\n              </div>\\n              <span class=\\"text-2xl\\">📺</span>\\n            </div>\\n          </a>\\n        </div>\\n      </div>\\n    </div>\\n  </div>\\n</div>\\n\\n<style>\\n  .scrollbar-hide {\\n    -ms-overflow-style: none;\\n    scrollbar-width: none;\\n  }\\n  .scrollbar-hide::-webkit-scrollbar {\\n    display: none;\\n  }\\n</style>"],"names":[],"mappings":"AAqfE,6BAAgB,CACd,kBAAkB,CAAE,IAAI,CACxB,eAAe,CAAE,IACnB,CACA,6BAAe,mBAAoB,CACjC,OAAO,CAAE,IACX"}`
};
function getSportIcon(sport) {
  const icons = {
    "NFL": "🏈",
    "NBA": "🏀",
    "MLB": "⚾",
    "NHL": "🏒",
    "Soccer": "⚽",
    "UFC": "🥊"
  };
  return icons[sport] || "🏆";
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let liveScores = [
    {
      id: 1,
      sport: "NFL",
      league: "NFL",
      teams: {
        home: "Kansas City Chiefs",
        away: "Buffalo Bills"
      },
      score: { home: 24, away: 21 },
      time: "3rd Quarter - 8:23",
      possession: "home",
      lastPlay: "Mahomes completes 15-yard pass to Kelce",
      channel: "ESPN",
      viewers: "2.3M"
    },
    {
      id: 2,
      sport: "NBA",
      league: "NBA",
      teams: {
        home: "Los Angeles Lakers",
        away: "Boston Celtics"
      },
      score: { home: 89, away: 92 },
      time: "4th Quarter - 3:45",
      possession: "away",
      lastPlay: "Tatum scores on driving layup",
      channel: "ESPN2",
      viewers: "1.8M"
    },
    {
      id: 3,
      sport: "Soccer",
      league: "Premier League",
      teams: {
        home: "Manchester United",
        away: "Liverpool"
      },
      score: { home: 1, away: 2 },
      time: "78'",
      possession: null,
      lastPlay: "Salah scores from penalty spot",
      channel: "ESPN+",
      viewers: "956K"
    },
    {
      id: 4,
      sport: "NHL",
      league: "NHL",
      teams: {
        home: "NY Rangers",
        away: "Tampa Bay Lightning"
      },
      score: { home: 3, away: 3 },
      time: "3rd Period - 12:10",
      possession: null,
      lastPlay: "Kucherov ties it with power play goal",
      channel: "ESPN+",
      viewers: "432K"
    },
    {
      id: 5,
      sport: "MLB",
      league: "MLB",
      teams: {
        home: "NY Yankees",
        away: "Houston Astros"
      },
      score: { home: 5, away: 4 },
      time: "Bottom 8th",
      possession: "home",
      lastPlay: "Judge singles to right field",
      channel: "ESPN",
      viewers: "1.1M"
    }
  ];
  let upcomingEvents = [
    {
      time: "7:00 PM ET",
      sport: "NBA",
      matchup: "Warriors @ Suns",
      channel: "ESPN"
    },
    {
      time: "7:30 PM ET",
      sport: "NHL",
      matchup: "Bruins @ Maple Leafs",
      channel: "ESPN+"
    },
    {
      time: "8:15 PM ET",
      sport: "NFL",
      matchup: "Cowboys @ Eagles",
      channel: "ESPN"
    },
    {
      time: "9:00 PM ET",
      sport: "NBA",
      matchup: "Nuggets @ Clippers",
      channel: "ESPN2"
    },
    {
      time: "10:00 PM ET",
      sport: "UFC",
      matchup: "UFC 298 Prelims",
      channel: "ESPN+"
    }
  ];
  const featuredBroadcasts = [
    {
      title: "Monday Night Football",
      description: "Cowboys vs Eagles - NFC East Showdown",
      time: "8:15 PM ET",
      icon: "🏈",
      viewers: "Expected 15M+ viewers",
      channel: "ESPN"
    },
    {
      title: "NBA on ESPN",
      description: "Lakers vs Celtics - Classic Rivalry",
      time: "LIVE NOW",
      icon: "🏀",
      viewers: "1.8M watching",
      channel: "ESPN2"
    },
    {
      title: "UFC Fight Night",
      description: "Main Card Begins at 10 PM",
      time: "10:00 PM ET",
      icon: "🥊",
      viewers: "PPV Event",
      channel: "ESPN+"
    }
  ];
  let chatMessages = [
    {
      id: 1,
      user: "SportsFan23",
      message: "What a game! Chiefs looking strong!",
      timestamp: "2 min ago"
    },
    {
      id: 2,
      user: "LakersNation",
      message: "LeBron needs to take over in the 4th",
      timestamp: "3 min ago"
    },
    {
      id: 3,
      user: "RedDevils4Life",
      message: "Liverpool dominating this match",
      timestamp: "5 min ago"
    },
    {
      id: 4,
      user: "HockeyGuy99",
      message: "This Rangers-Lightning game is insane!",
      timestamp: "7 min ago"
    }
  ];
  let newMessage = "";
  let selectedPoll = null;
  let polls = [
    {
      id: 1,
      question: "Who wins Monday Night Football?",
      options: [
        {
          text: "Cowboys",
          votes: 453,
          percentage: 62
        },
        {
          text: "Eagles",
          votes: 277,
          percentage: 38
        }
      ],
      totalVotes: 730
    },
    {
      id: 2,
      question: "NBA Finals prediction?",
      options: [
        {
          text: "Celtics",
          votes: 892,
          percentage: 35
        },
        {
          text: "Nuggets",
          votes: 765,
          percentage: 30
        },
        {
          text: "Bucks",
          votes: 510,
          percentage: 20
        },
        {
          text: "Warriors",
          votes: 383,
          percentage: 15
        }
      ],
      totalVotes: 2550
    }
  ];
  onDestroy(() => {
  });
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1tdx4ru_START -->${$$result.title = `<title>ESPN Live - Live Sports Scores, Streaming &amp; Updates</title>`, ""}<!-- HEAD_svelte-1tdx4ru_END -->`, ""}  <section class="bg-black text-white py-2 sticky top-0 z-50"><div class="container mx-auto px-4"><div class="flex items-center space-x-4 overflow-x-auto scrollbar-hide svelte-casind"><span class="flex items-center space-x-2 flex-shrink-0" data-svelte-h="svelte-1qwujlv"><span class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span> <span class="text-xs font-bold text-red-500">LIVE</span></span> ${each(liveScores, (score) => {
    return `<div class="flex items-center space-x-2 text-xs flex-shrink-0 border-l border-gray-700 pl-4"><span>${escape(getSportIcon(score.sport))}</span> <span class="font-semibold">${escape(score.teams.away)} ${escape(score.score.away)} - ${escape(score.score.home)} ${escape(score.teams.home)}</span> <span class="text-gray-400">(${escape(score.time)})</span> </div>`;
  })}</div></div></section>  <section class="bg-gradient-to-br from-red-600 to-black text-white py-12"><div class="container mx-auto px-4"><div class="flex items-center justify-between mb-8"><div data-svelte-h="svelte-2oehe"><h1 class="text-4xl md:text-6xl font-bold mb-4">ESPN Live</h1> <p class="text-xl text-gray-200">Watch Every Game, Every Play, Every Moment</p></div> <div class="text-right"><div class="text-3xl font-bold text-red-400">${escape(liveScores.length)}</div> <div class="text-sm" data-svelte-h="svelte-m1yu7e">Games Live Now</div></div></div></div></section>  <div class="container mx-auto px-4 py-8"><div class="grid grid-cols-1 lg:grid-cols-3 gap-8"> <div class="lg:col-span-2 space-y-6"> <div class="bg-white rounded-xl shadow-lg p-6"><h2 class="text-2xl font-bold mb-6 flex items-center" data-svelte-h="svelte-1mnbfo9"><span class="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-2"></span>
          Live Now</h2> <div class="space-y-4">${each(liveScores, (game) => {
    return `<div class="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"><div class="flex items-center justify-between mb-3"><div class="flex items-center space-x-3"><span class="text-2xl">${escape(getSportIcon(game.sport))}</span> <div><span class="text-xs font-bold text-gray-500">${escape(game.league)}</span> <div class="flex items-center space-x-2 text-xs text-gray-600"><span>${escape(game.channel)}</span> <span data-svelte-h="svelte-7hh8jk">•</span> <span>${escape(game.viewers)} watching</span></div> </div></div> <span class="text-sm font-semibold text-red-600">${escape(game.time)}</span></div> <div class="grid grid-cols-3 gap-4 items-center"><div class="text-right"><div class="font-semibold">${escape(game.teams.away)}</div> ${game.possession === "away" ? `<span class="text-xs text-green-600" data-svelte-h="svelte-3j4fnf">● Possession</span>` : ``}</div> <div class="text-center"><div class="text-3xl font-bold"><span${add_attribute(
      "class",
      game.score.away > game.score.home ? "text-green-600" : "",
      0
    )}>${escape(game.score.away)}</span> <span class="text-gray-400 mx-2" data-svelte-h="svelte-fqtwyo">-</span> <span${add_attribute(
      "class",
      game.score.home > game.score.away ? "text-green-600" : "",
      0
    )}>${escape(game.score.home)}</span> </div></div> <div><div class="font-semibold">${escape(game.teams.home)}</div> ${game.possession === "home" ? `<span class="text-xs text-green-600" data-svelte-h="svelte-3j4fnf">● Possession</span>` : ``} </div></div> ${game.lastPlay ? `<div class="mt-3 pt-3 border-t border-gray-200"><p class="text-sm text-gray-600"><span class="font-semibold" data-svelte-h="svelte-1v8veo">Last Play:</span> ${escape(game.lastPlay)}</p> </div>` : ``} <div class="mt-3 flex space-x-2" data-svelte-h="svelte-fin7rt"><button class="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors">Watch Live</button> <button class="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-300 transition-colors">Game Stats
                </button></div> </div>`;
  })}</div></div>  <div class="bg-white rounded-xl shadow-lg p-6"><h2 class="text-2xl font-bold mb-6" data-svelte-h="svelte-19rgswa">Featured Broadcasts</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-4">${each(featuredBroadcasts, (broadcast) => {
    return `<div class="bg-gradient-to-br from-gray-900 to-black text-white rounded-lg p-4 hover:shadow-xl transition-all"><div class="text-3xl mb-3">${escape(broadcast.icon)}</div> <h3 class="font-bold mb-1">${escape(broadcast.title)}</h3> <p class="text-sm text-gray-300 mb-2">${escape(broadcast.description)}</p> <div class="flex items-center justify-between text-xs"><span class="text-red-400 font-semibold">${escape(broadcast.time)}</span> <span class="text-gray-400">${escape(broadcast.channel)}</span></div> <div class="text-xs text-gray-400 mt-2">${escape(broadcast.viewers)}</div> </div>`;
  })}</div></div>  <div class="bg-white rounded-xl shadow-lg p-6"><h2 class="text-2xl font-bold mb-6" data-svelte-h="svelte-1lkaxlt">Upcoming Live Events</h2> <div class="space-y-3">${each(upcomingEvents, (event) => {
    return `<div class="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"><div class="flex items-center space-x-3"><span class="text-2xl">${escape(getSportIcon(event.sport))}</span> <div><div class="font-semibold">${escape(event.matchup)}</div> <div class="text-sm text-gray-600">${escape(event.channel)}</div> </div></div> <div class="text-right"><div class="font-semibold text-sm">${escape(event.time)}</div> <button class="text-xs text-red-600 hover:text-red-700 font-semibold" data-svelte-h="svelte-1gn1rpi">Set Reminder</button></div> </div>`;
  })}</div></div></div>  <div class="space-y-6"> <div class="bg-white rounded-xl shadow-lg p-6"><h3 class="text-xl font-bold mb-4" data-svelte-h="svelte-ycoxcu">Live Polls</h3> <div class="space-y-6">${each(polls, (poll) => {
    return `<div class="space-y-3"><h4 class="font-semibold">${escape(poll.question)}</h4> <div class="space-y-2">${each(poll.options, (option, index) => {
      return `<button class="${[
        "w-full text-left p-3 rounded-lg border transition-all hover:border-red-400",
        (selectedPoll === poll.id ? "bg-red-50" : "") + " " + (selectedPoll !== poll.id ? "border-gray-200" : "") + " " + (selectedPoll === poll.id ? "cursor-not-allowed" : "")
      ].join(" ").trim()}" ${selectedPoll === poll.id ? "disabled" : ""}><div class="flex items-center justify-between"><span class="font-medium">${escape(option.text)}</span> <span class="text-sm text-gray-600">${escape(option.percentage)}%</span></div> ${selectedPoll === poll.id ? `<div class="mt-2 bg-gray-200 rounded-full overflow-hidden"><div class="bg-red-600 h-2 transition-all duration-500" style="${"width: " + escape(option.percentage, true) + "%"}"></div> </div>` : ``} </button>`;
    })}</div> <p class="text-xs text-gray-500">${escape(poll.totalVotes.toLocaleString())} votes</p> </div>`;
  })}</div></div>  <div class="bg-white rounded-xl shadow-lg p-6"><h3 class="text-xl font-bold mb-4" data-svelte-h="svelte-2aoxdl">Fan Chat</h3> <div class="space-y-3 max-h-96 overflow-y-auto mb-4">${each(chatMessages, (message) => {
    return `<div class="bg-gray-50 rounded-lg p-3"><div class="flex items-center justify-between mb-1"><span class="font-semibold text-sm">${escape(message.user)}</span> <span class="text-xs text-gray-500">${escape(message.timestamp)}</span></div> <p class="text-sm text-gray-700">${escape(message.message)}</p> </div>`;
  })}</div> <form class="flex space-x-2"><input type="text" placeholder="Join the conversation..." class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"${add_attribute("value", newMessage, 0)}> <button type="submit" class="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors" data-svelte-h="svelte-kbb1fd">Send</button></form></div>  <div class="bg-gradient-to-br from-red-600 to-red-800 text-white rounded-xl shadow-lg p-6" data-svelte-h="svelte-warwcg"><h3 class="text-xl font-bold mb-4">Watch Live</h3> <div class="space-y-3"><a href="#" class="block bg-white/20 backdrop-blur rounded-lg p-4 hover:bg-white/30 transition-colors"><div class="flex items-center justify-between"><div><h4 class="font-bold">ESPN+</h4> <p class="text-sm text-gray-200">Exclusive games &amp; UFC</p></div> <span class="text-2xl">▶️</span></div></a> <a href="#" class="block bg-white/20 backdrop-blur rounded-lg p-4 hover:bg-white/30 transition-colors"><div class="flex items-center justify-between"><div><h4 class="font-bold">ESPN App</h4> <p class="text-sm text-gray-200">Watch on any device</p></div> <span class="text-2xl">📱</span></div></a> <a href="#" class="block bg-white/20 backdrop-blur rounded-lg p-4 hover:bg-white/30 transition-colors"><div class="flex items-center justify-between"><div><h4 class="font-bold">TV Provider</h4> <p class="text-sm text-gray-200">Sign in to watch</p></div> <span class="text-2xl">📺</span></div></a></div></div></div></div> </div>`;
});
export {
  Page as default
};
