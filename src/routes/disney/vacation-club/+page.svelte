<script>
  const resorts = [
    {
      name: 'Disney\'s Grand Floridian Resort & Spa',
      location: 'Walt Disney World',
      icon: '🏰',
      features: ['Monorail Access', 'Victorian Elegance', 'Magic Kingdom Views']
    },
    {
      name: 'Disney\'s Polynesian Villas & Bungalows',
      location: 'Walt Disney World',
      icon: '🌺',
      features: ['Over-Water Bungalows', 'South Pacific Theme', 'Seven Seas Lagoon']
    },
    {
      name: 'Aulani, A Disney Resort & Spa',
      location: 'Ko Olina, Hawaii',
      icon: '🏝️',
      features: ['Hawaiian Paradise', 'Beachfront', 'Cultural Activities']
    },
    {
      name: 'Disney\'s Riviera Resort',
      location: 'Walt Disney World',
      icon: '🎨',
      features: ['European Elegance', 'Skyliner Access', 'Rooftop Restaurant']
    },
    {
      name: 'The Villas at Disneyland Hotel',
      location: 'Disneyland Resort',
      icon: '🎢',
      features: ['Grand Villas', 'Downtown Disney', 'Park Views']
    },
    {
      name: 'Disney\'s Beach Club Villas',
      location: 'Walt Disney World',
      icon: '🏖️',
      features: ['Stormalong Bay Pool', 'Boardwalk Access', 'Beach Theme']
    }
  ];
  
  const memberBenefits = [
    {
      title: 'Flexible Vacations',
      description: 'Stay at any DVC resort worldwide',
      icon: '🌍'
    },
    {
      title: 'Member Extras',
      description: 'Exclusive events and discounts',
      icon: '⭐'
    },
    {
      title: 'Home Resort Booking',
      description: '11-month advance reservations',
      icon: '📅'
    },
    {
      title: 'Banking & Borrowing',
      description: 'Flexible point management',
      icon: '💰'
    }
  ];
  
  const exchangeOptions = [
    { name: 'Disney Collection', destinations: '14 Resorts', icon: '🏰' },
    { name: 'RCI Exchange', destinations: '4,000+ Resorts', icon: '🗺️' },
    { name: 'Concierge Collection', destinations: '1,000+ Hotels', icon: '🏨' },
    { name: 'Adventures by Disney', destinations: '40+ Destinations', icon: '🎒' },
    { name: 'Disney Cruise Line', destinations: 'All Ships', icon: '🚢' }
  ];
  
  const roomTypes = [
    { type: 'Deluxe Studio', sleeps: 'Up to 5', features: 'Kitchenette, 1 Bath' },
    { type: 'One-Bedroom Villa', sleeps: 'Up to 5', features: 'Full Kitchen, Washer/Dryer' },
    { type: 'Two-Bedroom Villa', sleeps: 'Up to 9', features: 'Full Kitchen, 2 Baths' },
    { type: 'Three-Bedroom Grand Villa', sleeps: 'Up to 12', features: 'Luxury Amenities' }
  ];
</script>

<svelte:head>
  <title>Disney Vacation Club - Vacation Ownership Magic</title>
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-purple-800 via-purple-600 to-pink-600 text-white">
  <div class="absolute inset-0 opacity-20">
    <!-- Castle and stars pattern -->
    <div class="absolute inset-0">
      {#each Array(30) as _, i}
        <div 
          class="absolute text-2xl"
          style="
            top: {Math.random() * 100}%;
            left: {Math.random() * 100}%;
            animation: twinkle {3 + Math.random() * 2}s ease-in-out infinite;
            animation-delay: {Math.random() * 3}s;
          "
        >
          ⭐
        </div>
      {/each}
    </div>
  </div>
  
  <div class="relative z-10 container mx-auto px-4 py-20">
    <div class="text-center">
      <h1 class="text-5xl md:text-7xl font-bold mb-6">
        Disney Vacation Club
      </h1>
      <p class="text-2xl md:text-3xl mb-8 text-purple-100">
        Welcome Home to Magic
      </p>
      <p class="text-lg max-w-3xl mx-auto mb-8 text-purple-200">
        Own a piece of the magic with Disney Vacation Club membership. 
        Enjoy magical vacations year after year at Disney destinations around the world.
      </p>
    </div>
  </div>
</section>

<!-- Member Benefits -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Membership Magic</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {#each memberBenefits as benefit}
      <div class="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
        <div class="text-5xl mb-4">{benefit.icon}</div>
        <h3 class="font-bold text-gray-900 text-lg mb-2">{benefit.title}</h3>
        <p class="text-gray-700">{benefit.description}</p>
      </div>
    {/each}
  </div>
</section>

<!-- Featured Resorts -->
<section class="bg-gray-50 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Our Home Resorts</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each resorts as resort}
        <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
          <div class="bg-gradient-to-br from-purple-500 to-pink-500 p-6 text-white">
            <div class="text-5xl mb-3">{resort.icon}</div>
            <h3 class="text-xl font-bold mb-1">{resort.name}</h3>
            <p class="text-purple-100">{resort.location}</p>
          </div>
          <div class="p-6">
            <h4 class="font-semibold text-gray-900 mb-3">Resort Features:</h4>
            <ul class="space-y-2">
              {#each resort.features as feature}
                <li class="text-sm text-gray-700 flex items-center">
                  <span class="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                  {feature}
                </li>
              {/each}
            </ul>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Room Types -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 md:p-12">
    <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Villa Accommodations</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each roomTypes as room}
        <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
          <h3 class="font-bold text-gray-900 text-lg mb-2">{room.type}</h3>
          <p class="text-purple-600 font-semibold mb-2">{room.sleeps}</p>
          <p class="text-sm text-gray-600">{room.features}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Exchange Options -->
<section class="bg-gradient-to-b from-blue-50 to-white py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Beyond Disney Resorts</h2>
    <p class="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
      Your membership opens doors to thousands of vacation options worldwide through our exchange programs
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {#each exchangeOptions as option}
        <div class="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow hover:scale-105 transform duration-300">
          <div class="text-4xl mb-3">{option.icon}</div>
          <h3 class="font-bold text-gray-900">{option.name}</h3>
          <p class="text-sm text-gray-600">{option.destinations}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- How It Works -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white">
    <h2 class="text-3xl font-bold mb-8 text-center">How DVC Works</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="text-center">
        <div class="w-16 h-16 bg-white text-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
          1
        </div>
        <h3 class="font-bold text-lg mb-2">Purchase Points</h3>
        <p class="text-purple-100">Buy a real estate interest in a DVC Resort</p>
      </div>
      <div class="text-center">
        <div class="w-16 h-16 bg-white text-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
          2
        </div>
        <h3 class="font-bold text-lg mb-2">Book Vacations</h3>
        <p class="text-purple-100">Use points to reserve accommodations</p>
      </div>
      <div class="text-center">
        <div class="w-16 h-16 bg-white text-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
          3
        </div>
        <h3 class="font-bold text-lg mb-2">Create Memories</h3>
        <p class="text-purple-100">Enjoy magical vacations year after year</p>
      </div>
    </div>
  </div>
</section>

<!-- Member Testimonial -->
<section class="bg-gray-50 py-16">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto text-center">
      <div class="text-6xl mb-6">💜</div>
      <blockquote class="text-2xl text-gray-700 italic mb-6">
        "Being DVC members has given our family the gift of guaranteed magical memories. 
        Every year, we know we'll have incredible vacations waiting for us."
      </blockquote>
      <p class="text-gray-600">- The Johnson Family, Members Since 2015</p>
    </div>
  </div>
</section>

<!-- Call to Action -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-r from-purple-700 to-pink-700 rounded-3xl p-8 md:p-12 text-white text-center">
    <h2 class="text-4xl font-bold mb-6">Start Your Membership Journey</h2>
    <p class="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
      Learn how Disney Vacation Club can make every vacation as magical as the first
    </p>
  </div>
</section>

<style>
  @keyframes twinkle {
    0%, 100% { 
      opacity: 0.3;
      transform: scale(0.8);
    }
    50% { 
      opacity: 1;
      transform: scale(1.2);
    }
  }
</style>