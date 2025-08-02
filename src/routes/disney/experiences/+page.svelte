<script>
  const parks = [
    {
      name: 'Walt Disney World',
      location: 'Orlando, Florida',
      icon: '🏰',
      parks: 4,
      highlights: ['Magic Kingdom', 'EPCOT', 'Hollywood Studios', 'Animal Kingdom']
    },
    {
      name: 'Disneyland Resort',
      location: 'Anaheim, California',
      icon: '🎢',
      parks: 2,
      highlights: ['Disneyland Park', 'Disney California Adventure']
    },
    {
      name: 'Disneyland Paris',
      location: 'Marne-la-Vallée, France',
      icon: '🗼',
      parks: 2,
      highlights: ['Disneyland Park', 'Walt Disney Studios Park']
    },
    {
      name: 'Tokyo Disney Resort',
      location: 'Urayasu, Japan',
      icon: '🗾',
      parks: 2,
      highlights: ['Tokyo Disneyland', 'Tokyo DisneySea']
    },
    {
      name: 'Hong Kong Disneyland',
      location: 'Lantau Island, Hong Kong',
      icon: '🏮',
      parks: 1,
      highlights: ['Seven themed lands', 'Iron Man Experience']
    },
    {
      name: 'Shanghai Disney Resort',
      location: 'Pudong, Shanghai',
      icon: '🐉',
      parks: 1,
      highlights: ['Largest Disney castle', 'TRON Lightcycle Power Run']
    }
  ];
  
  const experiences = [
    {
      title: 'Disney Cruise Line',
      icon: '🚢',
      description: 'Sail away on magical voyages',
      features: ['5 Ships', '200+ Destinations', 'Castaway Cay']
    },
    {
      title: 'Disney Vacation Club',
      icon: '🏖️',
      description: 'Vacation ownership magic',
      features: ['16 Resorts', 'Worldwide Destinations', 'Member Benefits']
    },
    {
      title: 'Adventures by Disney',
      icon: '🗺️',
      description: 'Guided family adventures',
      features: ['40+ Destinations', 'VIP Access', 'Expert Guides']
    },
    {
      title: 'Aulani Resort',
      icon: '🌺',
      description: 'Hawaiian paradise',
      features: ['Ko Olina, Hawaii', 'Spa & Golf', 'Cultural Activities']
    }
  ];
  
  const products = [
    { category: 'Toys & Games', icon: '🧸', items: '10,000+' },
    { category: 'Apparel', icon: '👕', items: '5,000+' },
    { category: 'Home & Decor', icon: '🏠', items: '3,000+' },
    { category: 'Collectibles', icon: '💎', items: '2,000+' },
    { category: 'Books & Media', icon: '📚', items: '1,500+' },
    { category: 'Parks Merchandise', icon: '🎁', items: '8,000+' }
  ];
  
  const aiExperiences = [
    {
      title: 'Genie+ & Lightning Lane',
      description: 'AI-optimized attraction scheduling',
      icon: '⚡'
    },
    {
      title: 'MagicBand+',
      description: 'Interactive experiences powered by location tech',
      icon: '⌚'
    },
    {
      title: 'PhotoPass AI',
      description: 'Automatic photo capture and enhancement',
      icon: '📸'
    },
    {
      title: 'Virtual Queue',
      description: 'Smart waitlist management for popular attractions',
      icon: '📱'
    }
  ];
</script>

<svelte:head>
  <title>Disney Experiences - Parks, Resorts & More | Disney AI Hub</title>
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
  <div class="absolute inset-0 opacity-20">
    <svg viewBox="0 0 1200 600" class="w-full h-full">
      <!-- Castle silhouette -->
      <path d="M300 600 L300 400 L350 300 L400 400 L400 350 L450 250 L500 350 L500 400 L550 300 L600 400 L600 600 Z" 
            fill="currentColor" class="text-white/30"/>
      <!-- Ferris wheel -->
      <circle cx="900" cy="350" r="150" fill="none" stroke="currentColor" stroke-width="4" class="text-white/20"/>
      <line x1="900" y1="200" x2="900" y2="500" stroke="currentColor" stroke-width="4" class="text-white/20"/>
      <line x1="750" y1="350" x2="1050" y2="350" stroke="currentColor" stroke-width="4" class="text-white/20"/>
    </svg>
  </div>
  
  <div class="relative z-10 container mx-auto px-4 py-20">
    <h1 class="text-5xl md:text-7xl font-bold mb-6">Disney Experiences</h1>
    <p class="text-2xl md:text-3xl mb-8 text-blue-100">
      Where Dreams Come True Around the World
    </p>
    <div class="flex flex-wrap gap-4">
      <button class="bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-purple-100 transition-colors text-lg">
        Plan Your Visit
      </button>
      <button class="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-purple-600 transition-colors text-lg">
        Shop Disney
      </button>
    </div>
  </div>
</section>

<!-- Theme Parks Grid -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold mb-12">Disney Parks Worldwide</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each parks as park}
      <div class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
        <div class="bg-gradient-to-br from-blue-500 to-purple-500 p-6 text-white">
          <div class="flex items-center justify-between mb-4">
            <span class="text-4xl">{park.icon}</span>
            <span class="bg-white/20 px-3 py-1 rounded-full text-sm">
              {park.parks} Park{park.parks > 1 ? 's' : ''}
            </span>
          </div>
          <h3 class="text-xl font-bold mb-1">{park.name}</h3>
          <p class="text-blue-100 text-sm">{park.location}</p>
        </div>
        <div class="p-6">
          <h4 class="font-semibold text-gray-700 mb-3">Highlights:</h4>
          <ul class="space-y-2">
            {#each park.highlights as highlight}
              <li class="text-sm text-gray-600 flex items-center">
                <span class="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                {highlight}
              </li>
            {/each}
          </ul>
          <button class="mt-4 text-purple-600 font-semibold hover:text-purple-700">
            Explore Park →
          </button>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- Other Experiences -->
<section class="bg-gradient-to-b from-blue-50 to-white py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-12">Beyond the Parks</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each experiences as experience}
        <div class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6">
          <div class="text-4xl mb-4">{experience.icon}</div>
          <h3 class="text-xl font-bold mb-2">{experience.title}</h3>
          <p class="text-gray-600 mb-4">{experience.description}</p>
          <ul class="space-y-1">
            {#each experience.features as feature}
              <li class="text-sm text-gray-700">• {feature}</li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Consumer Products -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl p-8 md:p-12">
    <h2 class="text-3xl font-bold mb-8 text-center">Disney Consumer Products</h2>
    
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {#each products as product}
        <div class="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow">
          <div class="text-3xl mb-2">{product.icon}</div>
          <h3 class="font-semibold text-sm mb-1">{product.category}</h3>
          <p class="text-xs text-gray-600">{product.items} Products</p>
        </div>
      {/each}
    </div>
    
    <div class="text-center mt-8">
      <button class="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow">
        Shop Disney Store
      </button>
    </div>
  </div>
</section>

<!-- AI-Enhanced Experiences -->
<section class="bg-gray-50 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-4 text-center">AI-Enhanced Park Experience</h2>
    <p class="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
      Discover how cutting-edge technology creates more magical moments throughout your Disney visit
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each aiExperiences as feature}
        <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
          <div class="text-4xl mb-4 text-center">{feature.icon}</div>
          <h3 class="font-bold text-lg mb-2">{feature.title}</h3>
          <p class="text-gray-600 text-sm">{feature.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Stats Section -->
<section class="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-16">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <div class="text-4xl font-bold mb-2">157M+</div>
        <div class="text-purple-200">Annual Park Visitors</div>
      </div>
      <div>
        <div class="text-4xl font-bold mb-2">12</div>
        <div class="text-purple-200">Theme Parks Worldwide</div>
      </div>
      <div>
        <div class="text-4xl font-bold mb-2">52</div>
        <div class="text-purple-200">Resort Hotels</div>
      </div>
      <div>
        <div class="text-4xl font-bold mb-2">5</div>
        <div class="text-purple-200">Cruise Ships</div>
      </div>
    </div>
  </div>
</section>

<!-- Call to Action -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-16 text-white text-center">
    <h2 class="text-4xl font-bold mb-6">Start Planning Your Magical Experience</h2>
    <p class="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
      From theme parks to cruises, from resorts to adventures, create memories that last a lifetime
    </p>
    <div class="flex flex-wrap gap-4 justify-center">
      <button class="bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-purple-100 transition-colors text-lg">
        Book Your Trip
      </button>
      <button class="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-purple-600 transition-colors text-lg">
        Download My Disney App
      </button>
    </div>
  </div>
</section>