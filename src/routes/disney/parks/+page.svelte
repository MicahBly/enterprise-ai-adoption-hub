<script>
  const parks = [
    {
      resort: 'Walt Disney World Resort',
      location: 'Orlando, Florida',
      parks: [
        {
          name: 'Magic Kingdom',
          icon: '🏰',
          highlights: ['Cinderella Castle', 'Space Mountain', 'Seven Dwarfs Mine Train'],
          attendance: '17.1M/year'
        },
        {
          name: 'EPCOT',
          icon: '🌐',
          highlights: ['Spaceship Earth', 'Test Track', 'World Showcase'],
          attendance: '11.9M/year'
        },
        {
          name: 'Hollywood Studios',
          icon: '🎬',
          highlights: ['Star Wars: Galaxy\'s Edge', 'Tower of Terror', 'Toy Story Land'],
          attendance: '10.9M/year'
        },
        {
          name: 'Animal Kingdom',
          icon: '🦁',
          highlights: ['Pandora', 'Expedition Everest', 'Kilimanjaro Safaris'],
          attendance: '10.9M/year'
        }
      ]
    },
    {
      resort: 'Disneyland Resort',
      location: 'Anaheim, California',
      parks: [
        {
          name: 'Disneyland Park',
          icon: '🎠',
          highlights: ['Matterhorn', 'Pirates of the Caribbean', 'Star Wars: Galaxy\'s Edge'],
          attendance: '16.9M/year'
        },
        {
          name: 'Disney California Adventure',
          icon: '🎡',
          highlights: ['Avengers Campus', 'Cars Land', 'Pixar Pier'],
          attendance: '9.9M/year'
        }
      ]
    }
  ];
  
  const internationalParks = [
    {
      name: 'Tokyo Disney Resort',
      location: 'Japan',
      icon: '🗾',
      parks: ['Tokyo Disneyland', 'Tokyo DisneySea'],
      special: 'Home to the unique DisneySea park'
    },
    {
      name: 'Disneyland Paris',
      location: 'France',
      icon: '🗼',
      parks: ['Disneyland Park', 'Walt Disney Studios Park'],
      special: 'Europe\'s most visited theme park'
    },
    {
      name: 'Hong Kong Disneyland',
      location: 'China',
      icon: '🏮',
      parks: ['Hong Kong Disneyland'],
      special: 'Features unique Marvel attractions'
    },
    {
      name: 'Shanghai Disney Resort',
      location: 'China',
      icon: '🐉',
      parks: ['Shanghai Disneyland'],
      special: 'Largest Disney castle in the world'
    }
  ];
  
  const ticketTypes = [
    { name: 'Single Day', icon: '🎟️', price: 'From $109', best: 'Quick visits' },
    { name: 'Multi-Day', icon: '🎫', price: 'From $88/day', best: 'Extended stays' },
    { name: 'Park Hopper', icon: '🎪', price: 'From $65 extra', best: 'Multiple parks' },
    { name: 'Annual Pass', icon: '🎭', price: 'From $399', best: 'Frequent visitors' }
  ];
  
  const resortHotels = [
    { name: 'Deluxe Resorts', count: 9, icon: '👑', example: 'Grand Floridian' },
    { name: 'Moderate Resorts', count: 5, icon: '🏨', example: 'Port Orleans' },
    { name: 'Value Resorts', count: 5, icon: '🏩', example: 'Pop Century' },
    { name: 'DVC Villas', count: 9, icon: '🏖️', example: 'Bay Lake Tower' }
  ];
</script>

<svelte:head>
  <title>Disney Parks - Theme Parks Worldwide</title>
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-blue-700 via-purple-700 to-pink-700 text-white">
  <div class="absolute inset-0">
    <svg viewBox="0 0 1200 600" class="w-full h-full opacity-20">
      <!-- Castle -->
      <path d="M500 600 L500 300 L550 200 L600 300 L600 250 L650 150 L700 250 L700 300 L750 200 L800 300 L800 600 Z" 
            fill="currentColor"/>
      <!-- Ferris Wheel -->
      <circle cx="200" cy="400" r="120" fill="none" stroke="currentColor" stroke-width="8"/>
      <line x1="200" y1="280" x2="200" y2="520" stroke="currentColor" stroke-width="8"/>
      <line x1="80" y1="400" x2="320" y2="400" stroke="currentColor" stroke-width="8"/>
      <!-- Roller Coaster -->
      <path d="M900 500 Q950 400 1000 500 T1100 500" fill="none" stroke="currentColor" stroke-width="8"/>
    </svg>
  </div>
  
  <div class="relative z-10 container mx-auto px-4 py-20">
    <h1 class="text-5xl md:text-7xl font-bold mb-6">Disney Parks</h1>
    <p class="text-2xl md:text-3xl mb-8 text-blue-100">
      The Most Magical Places on Earth
    </p>
  </div>
</section>

<!-- US Parks -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold text-gray-900 mb-12">United States Parks</h2>
  
  {#each parks as resort}
    <div class="mb-16">
      <h3 class="text-2xl font-bold text-gray-900 mb-2">{resort.resort}</h3>
      <p class="text-gray-600 mb-6">{resort.location}</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-{resort.parks.length} gap-6">
        {#each resort.parks as park}
          <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
            <div class="bg-gradient-to-br from-blue-500 to-purple-500 p-8 text-white text-center">
              <div class="text-6xl mb-4">{park.icon}</div>
              <h4 class="text-xl font-bold">{park.name}</h4>
              <p class="text-sm text-blue-100 mt-2">{park.attendance} visitors</p>
            </div>
            <div class="p-6">
              <h5 class="font-semibold text-gray-900 mb-3">Must-See Attractions:</h5>
              <ul class="space-y-2">
                {#each park.highlights as highlight}
                  <li class="text-sm text-gray-900 flex items-center">
                    <span class="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                    {highlight}
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/each}
</section>

<!-- International Parks -->
<section class="bg-gray-50 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-gray-900 mb-12">International Disney Parks</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each internationalParks as park}
        <div class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6">
          <div class="flex items-start space-x-4">
            <div class="text-5xl">{park.icon}</div>
            <div class="flex-1">
              <h3 class="text-xl font-bold text-gray-900 mb-1">{park.name}</h3>
              <p class="text-gray-900 mb-2">{park.location}</p>
              <p class="text-sm text-purple-600 font-semibold mb-3">{park.special}</p>
              <div class="space-y-1">
                {#each park.parks as parkName}
                  <p class="text-sm text-gray-900">• {parkName}</p>
                {/each}
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Tickets & Pricing -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 md:p-12">
    <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Tickets & Passes</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each ticketTypes as ticket}
        <div class="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
          <div class="text-4xl mb-3">{ticket.icon}</div>
          <h3 class="font-bold text-gray-900 text-lg mb-2">{ticket.name}</h3>
          <p class="text-2xl font-bold text-purple-600 mb-2">{ticket.price}</p>
          <p class="text-sm text-gray-900">Best for: {ticket.best}</p>
        </div>
      {/each}
    </div>
    
    <div class="text-center mt-8">
    </div>
  </div>
</section>

<!-- Resort Hotels -->
<section class="bg-gradient-to-b from-blue-50 to-white py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-gray-900 mb-8">Stay at a Disney Resort</h2>
    <p class="text-lg text-gray-900 mb-12 max-w-3xl">
      Extend the magic with a stay at one of our themed resort hotels. Enjoy Extra Magic Hours, 
      complimentary transportation, and immersive Disney theming.
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each resortHotels as category}
        <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <div class="text-4xl mb-3">{category.icon}</div>
          <h3 class="font-bold text-gray-900 text-lg mb-1">{category.name}</h3>
          <p class="text-sm text-gray-900 mb-2">{category.count} Properties</p>
          <p class="text-sm text-purple-600">Example: {category.example}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Planning Tools -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 class="text-3xl font-bold mb-4">Plan Like a Pro</h2>
        <p class="text-lg mb-6 text-blue-100">
          Use our AI-powered tools to make the most of your Disney Parks visit
        </p>
        <ul class="space-y-3 mb-8">
          <li class="flex items-center">
            <span class="text-2xl mr-3">📱</span>
            <span>My Disney Experience app for real-time wait times</span>
          </li>
          <li class="flex items-center">
            <span class="text-2xl mr-3">⚡</span>
            <span>Genie+ service for Lightning Lane access</span>
          </li>
          <li class="flex items-center">
            <span class="text-2xl mr-3">🎭</span>
            <span>Advance dining and experience reservations</span>
          </li>
          <li class="flex items-center">
            <span class="text-2xl mr-3">📸</span>
            <span>PhotoPass for automatic ride photos</span>
          </li>
        </ul>
      </div>
      <div class="text-center">
        <div class="text-9xl animate-bounce">🎢</div>
      </div>
    </div>
  </div>
</section>