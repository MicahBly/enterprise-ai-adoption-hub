<script>
  let selectedSport = 'football';
  let showLeagueModal = false;
  let leagueName = '';
  let leagueType = 'public';
  
  const fantasySports = [
    {
      id: 'football',
      name: 'Fantasy Football',
      icon: '🏈',
      color: 'from-green-600 to-green-800',
      season: '2024 Season',
      players: '32M+',
      features: ['Snake Draft', 'Auction Draft', 'Dynasty Leagues', 'Best Ball'],
      prizes: ['$1M Grand Prize', 'Weekly Prizes', 'Playoff Payouts']
    },
    {
      id: 'basketball',
      name: 'Fantasy Basketball',
      icon: '🏀',
      color: 'from-orange-500 to-red-600',
      season: '2024-25 Season',
      players: '12M+',
      features: ['Points Leagues', 'Category Leagues', 'Daily Fantasy', 'Keeper Leagues'],
      prizes: ['$500K Grand Prize', 'Monthly Prizes', 'All-Star Bonuses']
    },
    {
      id: 'baseball',
      name: 'Fantasy Baseball',
      icon: '⚾',
      color: 'from-blue-600 to-blue-800',
      season: '2024 Season',
      players: '8M+',
      features: ['Rotisserie', 'Head-to-Head', 'Points Based', 'Dynasty'],
      prizes: ['$250K Grand Prize', 'Weekly Winners', 'HR Derby Contest']
    },
    {
      id: 'hockey',
      name: 'Fantasy Hockey',
      icon: '🏒',
      color: 'from-gray-700 to-black',
      season: '2024-25 Season',
      players: '3M+',
      features: ['Standard Leagues', 'Points Only', 'Playoff Leagues', 'Keeper'],
      prizes: ['$100K Grand Prize', 'Monthly Champions', 'Stanley Cup Bonus']
    }
  ];

  const fantasyTools = [
    {
      title: 'Draft Wizard',
      icon: '🧙‍♂️',
      description: 'AI-powered draft assistant with real-time rankings and projections',
      features: ['Mock Drafts', 'ADP Analysis', 'Tier Rankings', 'Sleeper Picks']
    },
    {
      title: 'Trade Analyzer',
      icon: '💱',
      description: 'Evaluate trades instantly with our advanced algorithm',
      features: ['Fair Value Calculator', 'Rest of Season Projections', 'Trade Suggestions', 'Trade History']
    },
    {
      title: 'Lineup Optimizer',
      icon: '📊',
      description: 'Set your optimal lineup based on matchups and projections',
      features: ['Weekly Projections', 'Start/Sit Advice', 'Weather Impact', 'Injury Updates']
    },
    {
      title: 'Waiver Wire Assistant',
      icon: '🎯',
      description: 'Never miss a breakout player with our waiver wire alerts',
      features: ['Player Trends', 'Add/Drop Suggestions', 'FAAB Calculator', 'Priority Rankings']
    }
  ];

  const prizeLeagues = [
    {
      name: 'Million Dollar Challenge',
      prize: '$1,000,000',
      entry: 'Free',
      participants: '500K+',
      type: 'Season-long'
    },
    {
      name: 'Weekly Winners',
      prize: '$10,000',
      entry: '$5',
      participants: '50K+',
      type: 'Weekly'
    },
    {
      name: 'Champions League',
      prize: '$100,000',
      entry: '$50',
      participants: '10K+',
      type: 'Season-long'
    },
    {
      name: 'Daily Fantasy',
      prize: '$25,000',
      entry: '$3',
      participants: '100K+',
      type: 'Daily'
    }
  ];

  const leagueFormats = [
    { id: 'public', name: 'Public League', description: 'Join with other fans' },
    { id: 'private', name: 'Private League', description: 'Invite friends only' },
    { id: 'prize', name: 'Prize League', description: 'Compete for prizes' }
  ];

  function createLeague() {
    if (leagueName.trim()) {
      // Handle league creation
      showLeagueModal = false;
      leagueName = '';
    }
  }

  $: currentSport = fantasySports.find(s => s.id === selectedSport) || fantasySports[0];
</script>

<svelte:head>
  <title>ESPN Fantasy Sports - Win Your League | Disney AI Hub</title>
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-purple-700 via-blue-700 to-purple-800 text-white">
  <div class="absolute inset-0 opacity-10">
    <div class="grid grid-cols-8 gap-2 p-4">
      {#each Array(64) as _, i}
        <div class="text-2xl animate-pulse" style="animation-delay: {i * 0.05}s">
          {['🏈', '🏀', '⚾', '🏒', '⚽', '🏆', '📊', '💰'][i % 8]}
        </div>
      {/each}
    </div>
  </div>
  
  <div class="relative z-10 container mx-auto px-4 py-20">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
        ESPN Fantasy Sports
      </h1>
      <p class="text-2xl md:text-3xl mb-8 text-purple-100">
        Where Champions Are Made
      </p>
      <div class="flex flex-wrap gap-4 justify-center mb-8">
        <button 
          class="bg-white text-purple-700 px-8 py-4 rounded-full font-bold hover:bg-purple-100 transition-all transform hover:scale-105 text-lg shadow-xl"
          on:click={() => showLeagueModal = true}
        >
          Create League
        </button>
        <button class="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-purple-700 transition-all text-lg">
          Join Public League
        </button>
      </div>
      <div class="flex items-center justify-center gap-8 text-lg">
        <span class="flex items-center">
          <span class="text-3xl mr-2">👥</span>
          <span>50M+ Players</span>
        </span>
        <span class="flex items-center">
          <span class="text-3xl mr-2">🏆</span>
          <span>$10M+ in Prizes</span>
        </span>
        <span class="flex items-center">
          <span class="text-3xl mr-2">📱</span>
          <span>#1 Rated App</span>
        </span>
      </div>
    </div>
  </div>
</section>

<!-- Fantasy Sports Selection -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold mb-12 text-center">Choose Your Game</h2>
  
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
    {#each fantasySports as sport}
      <button 
        class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 {selectedSport === sport.id ? 'ring-4 ring-purple-500' : ''}"
        on:click={() => selectedSport = sport.id}
      >
        <div class="absolute inset-0 bg-gradient-to-br {sport.color}"></div>
        <div class="relative z-10 p-6 text-white">
          <div class="text-5xl mb-2">{sport.icon}</div>
          <h3 class="font-bold text-lg mb-1">{sport.name}</h3>
          <p class="text-sm opacity-90">{sport.season}</p>
          <p class="text-xs mt-2 bg-white/20 rounded-full px-3 py-1 inline-block">
            {sport.players} Players
          </p>
        </div>
      </button>
    {/each}
  </div>

  <!-- Selected Sport Details -->
  <div class="bg-gradient-to-r {currentSport.color} rounded-3xl p-8 text-white">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 class="text-2xl font-bold mb-4 flex items-center">
          <span class="text-4xl mr-3">{currentSport.icon}</span>
          {currentSport.name} Features
        </h3>
        <ul class="space-y-3">
          {#each currentSport.features as feature}
            <li class="flex items-center">
              <span class="w-2 h-2 bg-white rounded-full mr-3"></span>
              <span class="text-lg">{feature}</span>
            </li>
          {/each}
        </ul>
      </div>
      <div>
        <h3 class="text-2xl font-bold mb-4">Prize Opportunities</h3>
        <ul class="space-y-3">
          {#each currentSport.prizes as prize}
            <li class="flex items-center">
              <span class="text-2xl mr-3">💰</span>
              <span class="text-lg">{prize}</span>
            </li>
          {/each}
        </ul>
        <button class="mt-6 bg-white text-purple-700 px-6 py-3 rounded-full font-bold hover:bg-purple-100 transition-colors">
          Play {currentSport.name} →
        </button>
      </div>
    </div>
  </div>
</section>

<!-- Fantasy Tools -->
<section class="bg-gray-50 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-4 text-center">Dominate with Our Tools</h2>
    <p class="text-xl text-gray-600 text-center mb-12">AI-powered insights to help you win your league</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each fantasyTools as tool}
        <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6 border-2 border-transparent hover:border-purple-500">
          <div class="flex items-start space-x-4">
            <span class="text-4xl">{tool.icon}</span>
            <div class="flex-1">
              <h3 class="font-bold text-xl mb-2">{tool.title}</h3>
              <p class="text-gray-600 mb-4">{tool.description}</p>
              <div class="flex flex-wrap gap-2">
                {#each tool.features as feature}
                  <span class="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                    {feature}
                  </span>
                {/each}
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Prize Leagues -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-8 md:p-12">
    <h2 class="text-3xl font-bold mb-8 text-center text-gray-900">Play for Prizes</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each prizeLeagues as league}
        <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105">
          <div class="text-center">
            <h3 class="font-bold text-lg mb-2">{league.name}</h3>
            <div class="text-3xl font-bold text-orange-600 mb-2">{league.prize}</div>
            <div class="text-sm text-gray-600 mb-4">
              <p>Entry: {league.entry}</p>
              <p>{league.participants} Players</p>
              <p>{league.type}</p>
            </div>
            <button class="w-full bg-orange-500 text-white py-2 rounded-full font-bold hover:bg-orange-600 transition-colors">
              Enter Now
            </button>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Mobile App Section -->
<section class="bg-gradient-to-br from-gray-900 to-black text-white py-16">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="text-3xl font-bold mb-6">Fantasy Sports On The Go</h2>
        <p class="text-xl mb-8 text-gray-300">
          Manage your team anywhere with the #1 rated fantasy sports app
        </p>
        <ul class="space-y-4 mb-8">
          <li class="flex items-center">
            <span class="text-2xl mr-4">📱</span>
            <span class="text-lg">Live scoring and real-time updates</span>
          </li>
          <li class="flex items-center">
            <span class="text-2xl mr-4">🔔</span>
            <span class="text-lg">Push notifications for your players</span>
          </li>
          <li class="flex items-center">
            <span class="text-2xl mr-4">💬</span>
            <span class="text-lg">League chat and trash talk</span>
          </li>
          <li class="flex items-center">
            <span class="text-2xl mr-4">⚡</span>
            <span class="text-lg">Quick lineup changes on game day</span>
          </li>
        </ul>
        <div class="flex gap-4">
          <button class="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors flex items-center">
            <span class="mr-2">🍎</span>
            Download for iOS
          </button>
          <button class="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors flex items-center">
            <span class="mr-2">🤖</span>
            Download for Android
          </button>
        </div>
      </div>
      <div class="text-center">
        <div class="relative inline-block">
          <div class="absolute inset-0 bg-purple-600 rounded-3xl blur-3xl opacity-50"></div>
          <div class="relative bg-gradient-to-br from-purple-500 to-blue-600 rounded-3xl p-8">
            <span class="text-9xl">📱</span>
            <div class="mt-4 flex justify-center gap-2">
              {#each Array(5) as _}
                <span class="text-yellow-400 text-2xl">⭐</span>
              {/each}
            </div>
            <p class="mt-2 text-lg">4.8/5 Rating</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Stats and Achievements -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold mb-12 text-center">By The Numbers</h2>
  
  <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
    <div class="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-6">
      <div class="text-4xl font-bold mb-2 text-purple-600">50M+</div>
      <div class="text-gray-700">Active Players</div>
    </div>
    <div class="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-6">
      <div class="text-4xl font-bold mb-2 text-green-600">2M+</div>
      <div class="text-gray-700">Active Leagues</div>
    </div>
    <div class="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-6">
      <div class="text-4xl font-bold mb-2 text-orange-600">$10M+</div>
      <div class="text-gray-700">Prizes Awarded</div>
    </div>
    <div class="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-6">
      <div class="text-4xl font-bold mb-2 text-blue-600">24/7</div>
      <div class="text-gray-700">Live Support</div>
    </div>
  </div>
</section>

<!-- Create League Modal -->
{#if showLeagueModal}
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
    <div class="bg-white rounded-2xl max-w-md w-full p-6 animate-fade-in">
      <h3 class="text-2xl font-bold mb-4">Create Your League</h3>
      
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-semibold mb-2">League Name</label>
          <input 
            type="text" 
            bind:value={leagueName}
            placeholder="Enter league name"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        
        <div>
          <label class="block text-sm font-semibold mb-2">League Type</label>
          <div class="space-y-2">
            {#each leagueFormats as format}
              <label class="flex items-start space-x-3 cursor-pointer">
                <input 
                  type="radio" 
                  bind:group={leagueType} 
                  value={format.id}
                  class="mt-1"
                />
                <div>
                  <div class="font-semibold">{format.name}</div>
                  <div class="text-sm text-gray-600">{format.description}</div>
                </div>
              </label>
            {/each}
          </div>
        </div>
        
        <div>
          <label class="block text-sm font-semibold mb-2">Sport</label>
          <select class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
            {#each fantasySports as sport}
              <option value={sport.id}>{sport.name}</option>
            {/each}
          </select>
        </div>
      </div>
      
      <div class="flex gap-4 mt-6">
        <button 
          on:click={createLeague}
          class="flex-1 bg-purple-600 text-white py-2 rounded-lg font-bold hover:bg-purple-700 transition-colors"
        >
          Create League
        </button>
        <button 
          on:click={() => showLeagueModal = false}
          class="flex-1 border border-gray-300 py-2 rounded-lg font-bold hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    animation: fade-in 0.5s ease-out;
  }
</style>