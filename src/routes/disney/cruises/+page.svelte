<script>
  const ships = [
    {
      name: 'Disney Wish',
      year: 2022,
      capacity: '4,000 guests',
      highlights: ['AquaMouse', 'Star Wars Hyperspace Lounge', 'Worlds of Marvel Restaurant'],
      icon: '🚢'
    },
    {
      name: 'Disney Dream',
      year: 2011,
      capacity: '4,000 guests',
      highlights: ['AquaDuck', 'Remy Restaurant', 'Vanellope\'s Sweets & Treats'],
      icon: '⚓'
    },
    {
      name: 'Disney Fantasy',
      year: 2012,
      capacity: '4,000 guests',
      highlights: ['AquaLab', 'Europa District', 'Bibbidi Bobbidi Boutique'],
      icon: '🛳️'
    },
    {
      name: 'Disney Magic',
      year: 1998,
      capacity: '2,700 guests',
      highlights: ['AquaDunk', 'Rapunzel\'s Royal Table', 'Marvel Day at Sea'],
      icon: '🌊'
    },
    {
      name: 'Disney Wonder',
      year: 1999,
      capacity: '2,700 guests',
      highlights: ['Twist \'n\' Spout', 'Tiana\'s Place', 'Frozen Adventures'],
      icon: '🏝️'
    }
  ];
  
  const destinations = [
    { region: 'Caribbean', icon: '🏖️', sailings: '200+/year', highlights: 'Castaway Cay Private Island' },
    { region: 'Bahamas', icon: '🦩', sailings: '150+/year', highlights: 'Nassau & Castaway Cay' },
    { region: 'Europe', icon: '🏰', sailings: 'Summer Season', highlights: 'Mediterranean & Northern Europe' },
    { region: 'Alaska', icon: '🏔️', sailings: 'May-September', highlights: 'Glaciers & Wildlife' },
    { region: 'Mexico', icon: '🌮', sailings: 'Year-round', highlights: 'Cabo, Mazatlán, Puerto Vallarta' },
    { region: 'Hawaii', icon: '🌺', sailings: 'Select Dates', highlights: '10+ Night Voyages' }
  ];
  
  const onboardActivities = [
    { category: 'Entertainment', items: ['Broadway Shows', 'Character Meet & Greets', 'Deck Parties', 'Movies'], icon: '🎭' },
    { category: 'Dining', items: ['Rotational Dining', 'Adult-Exclusive', 'Quick Service', '24-Hour Room Service'], icon: '🍽️' },
    { category: 'Kids Clubs', items: ['Oceaneer Club', 'Oceaneer Lab', 'Edge (Tweens)', 'Vibe (Teens)'], icon: '🎈' },
    { category: 'Relaxation', items: ['Senses Spa', 'Adult-Only Pool', 'Rainforest Room', 'Quiet Cove'], icon: '🧘' }
  ];
  
  const upcomingShips = [
    { name: 'Disney Treasure', launch: '2024', feature: 'Adventure-themed with Moana' },
    { name: 'Disney Destiny', launch: '2025', feature: 'Heroes and Villains theme' },
    { name: 'Disney Adventure', launch: '2025', feature: 'Asia-Pacific exclusive' }
  ];
</script>

<svelte:head>
  <title>Disney Cruise Line - Magic at Sea</title>
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-600 to-cyan-500 text-white">
  <div class="absolute inset-0">
    <!-- Ocean waves animation -->
    <div class="absolute bottom-0 left-0 right-0 h-32 bg-blue-900/20">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="w-full h-full">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
              fill="currentColor" class="text-blue-700/30 animate-wave"/>
      </svg>
    </div>
  </div>
  
  <div class="relative z-10 container mx-auto px-4 py-20">
    <div class="text-center">
      <h1 class="text-5xl md:text-7xl font-bold mb-6">
        Disney Cruise Line
      </h1>
      <p class="text-2xl md:text-3xl mb-8 text-blue-100">
        Where Magic Meets the Sea
      </p>
    </div>
  </div>
</section>

<!-- Fleet Overview -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Our Magical Fleet</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each ships as ship}
      <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
        <div class="bg-gradient-to-br from-blue-500 to-cyan-500 p-8 text-white text-center">
          <div class="text-6xl mb-4">{ship.icon}</div>
          <h3 class="text-2xl font-bold">{ship.name}</h3>
          <p class="text-blue-100">Launched {ship.year}</p>
        </div>
        <div class="p-6">
          <p class="text-gray-600 mb-4">{ship.capacity}</p>
          <h4 class="font-semibold text-gray-900 mb-2">Ship Highlights:</h4>
          <ul class="space-y-1">
            {#each ship.highlights as highlight}
              <li class="text-sm text-gray-700 flex items-center">
                <span class="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                {highlight}
              </li>
            {/each}
          </ul>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- Destinations -->
<section class="bg-gradient-to-b from-blue-50 to-white py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Sail to Amazing Destinations</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each destinations as destination}
        <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
          <div class="flex items-start space-x-4">
            <div class="text-5xl">{destination.icon}</div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 mb-1">{destination.region}</h3>
              <p class="text-sm text-gray-600 mb-2">{destination.sailings}</p>
              <p class="text-purple-600 font-semibold">{destination.highlights}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
    
    <!-- Castaway Cay Feature -->
    <div class="mt-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl p-8 text-white">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 class="text-2xl font-bold mb-4">Castaway Cay</h3>
          <p class="text-lg mb-4 text-cyan-100">
            Disney's Private Island Paradise in the Bahamas
          </p>
          <ul class="space-y-2">
            <li class="flex items-center">
              <span class="text-2xl mr-3">🏖️</span>
              <span>Pristine beaches and crystal-clear waters</span>
            </li>
            <li class="flex items-center">
              <span class="text-2xl mr-3">🏃</span>
              <span>Castaway Cay 5K running trail</span>
            </li>
            <li class="flex items-center">
              <span class="text-2xl mr-3">🤿</span>
              <span>Snorkeling, parasailing, and water sports</span>
            </li>
          </ul>
        </div>
        <div class="text-center">
          <div class="text-9xl">🏝️</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Onboard Activities -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Onboard Magic</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {#each onboardActivities as activity}
      <div class="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-6">
        <div class="text-4xl mb-4 text-center">{activity.icon}</div>
        <h3 class="font-bold text-gray-900 text-lg mb-3">{activity.category}</h3>
        <ul class="space-y-1">
          {#each activity.items as item}
            <li class="text-sm text-gray-700">• {item}</li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</section>

<!-- Upcoming Ships -->
<section class="bg-gray-50 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">New Ships on the Horizon</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {#each upcomingShips as ship}
        <div class="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
          <div class="text-5xl mb-4">🚢</div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">{ship.name}</h3>
          <p class="text-gray-600 mb-2">Launching {ship.launch}</p>
          <p class="text-purple-600 font-semibold">{ship.feature}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Booking CTA -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center">
    <h2 class="text-4xl font-bold mb-6">Set Sail on Your Dream Vacation</h2>
    <p class="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
      Experience world-class entertainment, exceptional dining, and magical moments at sea with Disney Cruise Line
    </p>
  </div>
</section>

<style>
  @keyframes wave {
    0%, 100% {
      transform: translateX(0) translateY(0);
    }
    50% {
      transform: translateX(-25%) translateY(-10px);
    }
  }
  
  .animate-wave {
    animation: wave 6s ease-in-out infinite;
  }
</style>