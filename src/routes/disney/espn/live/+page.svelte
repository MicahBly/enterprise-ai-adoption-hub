<script>
  import { onMount, onDestroy } from 'svelte';
  
  // Live scores data (would be fetched from API in production)
  let liveScores = [
    { 
      id: 1,
      sport: 'NFL', 
      league: 'NFL',
      teams: { home: 'Kansas City Chiefs', away: 'Buffalo Bills' },
      score: { home: 24, away: 21 },
      time: '3rd Quarter - 8:23',
      possession: 'home',
      lastPlay: 'Mahomes completes 15-yard pass to Kelce',
      channel: 'ESPN',
      viewers: '2.3M'
    },
    { 
      id: 2,
      sport: 'NBA', 
      league: 'NBA',
      teams: { home: 'Los Angeles Lakers', away: 'Boston Celtics' },
      score: { home: 89, away: 92 },
      time: '4th Quarter - 3:45',
      possession: 'away',
      lastPlay: 'Tatum scores on driving layup',
      channel: 'ESPN2',
      viewers: '1.8M'
    },
    { 
      id: 3,
      sport: 'Soccer', 
      league: 'Premier League',
      teams: { home: 'Manchester United', away: 'Liverpool' },
      score: { home: 1, away: 2 },
      time: "78'",
      possession: null,
      lastPlay: 'Salah scores from penalty spot',
      channel: 'ESPN+',
      viewers: '956K'
    },
    { 
      id: 4,
      sport: 'NHL', 
      league: 'NHL',
      teams: { home: 'NY Rangers', away: 'Tampa Bay Lightning' },
      score: { home: 3, away: 3 },
      time: '3rd Period - 12:10',
      possession: null,
      lastPlay: 'Kucherov ties it with power play goal',
      channel: 'ESPN+',
      viewers: '432K'
    },
    { 
      id: 5,
      sport: 'MLB', 
      league: 'MLB',
      teams: { home: 'NY Yankees', away: 'Houston Astros' },
      score: { home: 5, away: 4 },
      time: 'Bottom 8th',
      possession: 'home',
      lastPlay: 'Judge singles to right field',
      channel: 'ESPN',
      viewers: '1.1M'
    }
  ];

  // Upcoming events
  let upcomingEvents = [
    { time: '7:00 PM ET', sport: 'NBA', matchup: 'Warriors @ Suns', channel: 'ESPN' },
    { time: '7:30 PM ET', sport: 'NHL', matchup: 'Bruins @ Maple Leafs', channel: 'ESPN+' },
    { time: '8:15 PM ET', sport: 'NFL', matchup: 'Cowboys @ Eagles', channel: 'ESPN' },
    { time: '9:00 PM ET', sport: 'NBA', matchup: 'Nuggets @ Clippers', channel: 'ESPN2' },
    { time: '10:00 PM ET', sport: 'UFC', matchup: 'UFC 298 Prelims', channel: 'ESPN+' }
  ];

  // Featured broadcasts
  const featuredBroadcasts = [
    {
      title: 'Monday Night Football',
      description: 'Cowboys vs Eagles - NFC East Showdown',
      time: '8:15 PM ET',
      icon: '🏈',
      viewers: 'Expected 15M+ viewers',
      channel: 'ESPN'
    },
    {
      title: 'NBA on ESPN',
      description: 'Lakers vs Celtics - Classic Rivalry',
      time: 'LIVE NOW',
      icon: '🏀',
      viewers: '1.8M watching',
      channel: 'ESPN2'
    },
    {
      title: 'UFC Fight Night',
      description: 'Main Card Begins at 10 PM',
      time: '10:00 PM ET',
      icon: '🥊',
      viewers: 'PPV Event',
      channel: 'ESPN+'
    }
  ];

  // Live chat messages
  let chatMessages = [
    { id: 1, user: 'SportsFan23', message: 'What a game! Chiefs looking strong!', timestamp: '2 min ago' },
    { id: 2, user: 'LakersNation', message: 'LeBron needs to take over in the 4th', timestamp: '3 min ago' },
    { id: 3, user: 'RedDevils4Life', message: 'Liverpool dominating this match', timestamp: '5 min ago' },
    { id: 4, user: 'HockeyGuy99', message: 'This Rangers-Lightning game is insane!', timestamp: '7 min ago' }
  ];

  let newMessage = '';
  let selectedPoll = null;

  // Live polls
  let polls = [
    {
      id: 1,
      question: "Who wins Monday Night Football?",
      options: [
        { text: 'Cowboys', votes: 453, percentage: 62 },
        { text: 'Eagles', votes: 277, percentage: 38 }
      ],
      totalVotes: 730
    },
    {
      id: 2,
      question: "NBA Finals prediction?",
      options: [
        { text: 'Celtics', votes: 892, percentage: 35 },
        { text: 'Nuggets', votes: 765, percentage: 30 },
        { text: 'Bucks', votes: 510, percentage: 20 },
        { text: 'Warriors', votes: 383, percentage: 15 }
      ],
      totalVotes: 2550
    }
  ];

  // Auto-update scores
  let updateInterval;
  
  onMount(() => {
    // Simulate live score updates
    updateInterval = setInterval(() => {
      // Random score update
      const randomIndex = Math.floor(Math.random() * liveScores.length);
      const game = liveScores[randomIndex];
      
      if (Math.random() > 0.7) {
        if (Math.random() > 0.5) {
          liveScores[randomIndex].score.home += 1;
        } else {
          liveScores[randomIndex].score.away += 1;
        }
      }
      
      // Update viewer counts
      liveScores = liveScores.map(score => ({
        ...score,
        viewers: updateViewerCount(score.viewers)
      }));
    }, 5000);
  });

  onDestroy(() => {
    if (updateInterval) clearInterval(updateInterval);
  });

  function updateViewerCount(current) {
    const num = parseFloat(current);
    const variation = (Math.random() - 0.5) * 0.1;
    const newNum = num + variation;
    return newNum < 1 ? `${(newNum * 1000).toFixed(0)}K` : `${newNum.toFixed(1)}M`;
  }

  function sendMessage() {
    if (newMessage.trim()) {
      chatMessages = [
        { 
          id: Date.now(), 
          user: 'You', 
          message: newMessage, 
          timestamp: 'Just now' 
        },
        ...chatMessages
      ];
      newMessage = '';
    }
  }

  function votePoll(pollId, optionIndex) {
    polls = polls.map(poll => {
      if (poll.id === pollId && selectedPoll !== pollId) {
        const updatedOptions = poll.options.map((option, index) => {
          if (index === optionIndex) {
            return { ...option, votes: option.votes + 1 };
          }
          return option;
        });
        
        const totalVotes = updatedOptions.reduce((sum, opt) => sum + opt.votes, 0);
        
        updatedOptions.forEach(option => {
          option.percentage = Math.round((option.votes / totalVotes) * 100);
        });
        
        selectedPoll = pollId;
        
        return { ...poll, options: updatedOptions, totalVotes };
      }
      return poll;
    });
  }

  function getSportIcon(sport) {
    const icons = {
      'NFL': '🏈',
      'NBA': '🏀',
      'MLB': '⚾',
      'NHL': '🏒',
      'Soccer': '⚽',
      'UFC': '🥊'
    };
    return icons[sport] || '🏆';
  }
</script>

<svelte:head>
  <title>ESPN Live - Live Sports Scores, Streaming & Updates</title>
</svelte:head>

<!-- Live Ticker -->
<section class="bg-black text-white py-2 sticky top-0 z-50">
  <div class="container mx-auto px-4">
    <div class="flex items-center space-x-4 overflow-x-auto scrollbar-hide">
      <span class="flex items-center space-x-2 flex-shrink-0">
        <span class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
        <span class="text-xs font-bold text-red-500">LIVE</span>
      </span>
      {#each liveScores as score}
        <div class="flex items-center space-x-2 text-xs flex-shrink-0 border-l border-gray-700 pl-4">
          <span>{getSportIcon(score.sport)}</span>
          <span class="font-semibold">{score.teams.away} {score.score.away} - {score.score.home} {score.teams.home}</span>
          <span class="text-gray-400">({score.time})</span>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-red-600 to-black text-white py-12">
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="text-4xl md:text-6xl font-bold mb-4">ESPN Live</h1>
        <p class="text-xl text-gray-200">Watch Every Game, Every Play, Every Moment</p>
      </div>
      <div class="text-right">
        <div class="text-3xl font-bold text-red-400">{liveScores.length}</div>
        <div class="text-sm">Games Live Now</div>
      </div>
    </div>
  </div>
</section>

<!-- Main Content Grid -->
<div class="container mx-auto px-4 py-8">
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
    
    <!-- Left Column - Live Scores -->
    <div class="lg:col-span-2 space-y-6">
      
      <!-- Currently Broadcasting -->
      <div class="bg-white rounded-xl shadow-lg p-6">
        <h2 class="text-2xl font-bold mb-6 flex items-center">
          <span class="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-2"></span>
          Live Now
        </h2>
        
        <div class="space-y-4">
          {#each liveScores as game}
            <div class="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center space-x-3">
                  <span class="text-2xl">{getSportIcon(game.sport)}</span>
                  <div>
                    <span class="text-xs font-bold text-gray-500">{game.league}</span>
                    <div class="flex items-center space-x-2 text-xs text-gray-600">
                      <span>{game.channel}</span>
                      <span>•</span>
                      <span>{game.viewers} watching</span>
                    </div>
                  </div>
                </div>
                <span class="text-sm font-semibold text-red-600">{game.time}</span>
              </div>
              
              <div class="grid grid-cols-3 gap-4 items-center">
                <div class="text-right">
                  <div class="font-semibold">{game.teams.away}</div>
                  {#if game.possession === 'away'}
                    <span class="text-xs text-green-600">● Possession</span>
                  {/if}
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold">
                    <span class={game.score.away > game.score.home ? 'text-green-600' : ''}>{game.score.away}</span>
                    <span class="text-gray-400 mx-2">-</span>
                    <span class={game.score.home > game.score.away ? 'text-green-600' : ''}>{game.score.home}</span>
                  </div>
                </div>
                <div>
                  <div class="font-semibold">{game.teams.home}</div>
                  {#if game.possession === 'home'}
                    <span class="text-xs text-green-600">● Possession</span>
                  {/if}
                </div>
              </div>
              
              {#if game.lastPlay}
                <div class="mt-3 pt-3 border-t border-gray-200">
                  <p class="text-sm text-gray-600">
                    <span class="font-semibold">Last Play:</span> {game.lastPlay}
                  </p>
                </div>
              {/if}
              
              <div class="mt-3 flex space-x-2">
                <button class="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors">
                  Watch Live
                </button>
                <button class="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-300 transition-colors">
                  Game Stats
                </button>
              </div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Featured Broadcasts -->
      <div class="bg-white rounded-xl shadow-lg p-6">
        <h2 class="text-2xl font-bold mb-6">Featured Broadcasts</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          {#each featuredBroadcasts as broadcast}
            <div class="bg-gradient-to-br from-gray-900 to-black text-white rounded-lg p-4 hover:shadow-xl transition-all">
              <div class="text-3xl mb-3">{broadcast.icon}</div>
              <h3 class="font-bold mb-1">{broadcast.title}</h3>
              <p class="text-sm text-gray-300 mb-2">{broadcast.description}</p>
              <div class="flex items-center justify-between text-xs">
                <span class="text-red-400 font-semibold">{broadcast.time}</span>
                <span class="text-gray-400">{broadcast.channel}</span>
              </div>
              <div class="text-xs text-gray-400 mt-2">{broadcast.viewers}</div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Upcoming Schedule -->
      <div class="bg-white rounded-xl shadow-lg p-6">
        <h2 class="text-2xl font-bold mb-6">Upcoming Live Events</h2>
        
        <div class="space-y-3">
          {#each upcomingEvents as event}
            <div class="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div class="flex items-center space-x-3">
                <span class="text-2xl">{getSportIcon(event.sport)}</span>
                <div>
                  <div class="font-semibold">{event.matchup}</div>
                  <div class="text-sm text-gray-600">{event.channel}</div>
                </div>
              </div>
              <div class="text-right">
                <div class="font-semibold text-sm">{event.time}</div>
                <button class="text-xs text-red-600 hover:text-red-700 font-semibold">Set Reminder</button>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>

    <!-- Right Column - Interactive Features -->
    <div class="space-y-6">
      
      <!-- Live Polls -->
      <div class="bg-white rounded-xl shadow-lg p-6">
        <h3 class="text-xl font-bold mb-4">Live Polls</h3>
        
        <div class="space-y-6">
          {#each polls as poll}
            <div class="space-y-3">
              <h4 class="font-semibold">{poll.question}</h4>
              <div class="space-y-2">
                {#each poll.options as option, index}
                  <button 
                    class="w-full text-left p-3 rounded-lg border transition-all hover:border-red-400"
                    class:bg-red-50={selectedPoll === poll.id}
                    class:border-gray-200={selectedPoll !== poll.id}
                    class:cursor-not-allowed={selectedPoll === poll.id}
                    disabled={selectedPoll === poll.id}
                    on:click={() => votePoll(poll.id, index)}
                  >
                    <div class="flex items-center justify-between">
                      <span class="font-medium">{option.text}</span>
                      <span class="text-sm text-gray-600">{option.percentage}%</span>
                    </div>
                    {#if selectedPoll === poll.id}
                      <div class="mt-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          class="bg-red-600 h-2 transition-all duration-500"
                          style="width: {option.percentage}%"
                        ></div>
                      </div>
                    {/if}
                  </button>
                {/each}
              </div>
              <p class="text-xs text-gray-500">{poll.totalVotes.toLocaleString()} votes</p>
            </div>
          {/each}
        </div>
      </div>

      <!-- Live Chat -->
      <div class="bg-white rounded-xl shadow-lg p-6">
        <h3 class="text-xl font-bold mb-4">Fan Chat</h3>
        
        <div class="space-y-3 max-h-96 overflow-y-auto mb-4">
          {#each chatMessages as message}
            <div class="bg-gray-50 rounded-lg p-3">
              <div class="flex items-center justify-between mb-1">
                <span class="font-semibold text-sm">{message.user}</span>
                <span class="text-xs text-gray-500">{message.timestamp}</span>
              </div>
              <p class="text-sm text-gray-700">{message.message}</p>
            </div>
          {/each}
        </div>
        
        <form on:submit|preventDefault={sendMessage} class="flex space-x-2">
          <input 
            type="text" 
            bind:value={newMessage}
            placeholder="Join the conversation..."
            class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
          />
          <button 
            type="submit"
            class="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Send
          </button>
        </form>
      </div>

      <!-- Live Streaming Options -->
      <div class="bg-gradient-to-br from-red-600 to-red-800 text-white rounded-xl shadow-lg p-6">
        <h3 class="text-xl font-bold mb-4">Watch Live</h3>
        
        <div class="space-y-3">
          <a href="#" class="block bg-white/20 backdrop-blur rounded-lg p-4 hover:bg-white/30 transition-colors">
            <div class="flex items-center justify-between">
              <div>
                <h4 class="font-bold">ESPN+</h4>
                <p class="text-sm text-gray-200">Exclusive games & UFC</p>
              </div>
              <span class="text-2xl">▶️</span>
            </div>
          </a>
          
          <a href="#" class="block bg-white/20 backdrop-blur rounded-lg p-4 hover:bg-white/30 transition-colors">
            <div class="flex items-center justify-between">
              <div>
                <h4 class="font-bold">ESPN App</h4>
                <p class="text-sm text-gray-200">Watch on any device</p>
              </div>
              <span class="text-2xl">📱</span>
            </div>
          </a>
          
          <a href="#" class="block bg-white/20 backdrop-blur rounded-lg p-4 hover:bg-white/30 transition-colors">
            <div class="flex items-center justify-between">
              <div>
                <h4 class="font-bold">TV Provider</h4>
                <p class="text-sm text-gray-200">Sign in to watch</p>
              </div>
              <span class="text-2xl">📺</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
</style>