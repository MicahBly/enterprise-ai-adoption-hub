<script>
  const streamingServices = [
    {
      name: 'Disney+',
      icon: '➕',
      color: 'from-blue-600 to-blue-800',
      price: '$7.99/mo',
      content: ['Disney', 'Pixar', 'Marvel', 'Star Wars', 'National Geographic'],
      features: ['4K HDR', 'Downloads', '4 Screens', 'Original Series']
    },
    {
      name: 'Hulu',
      icon: '📺',
      color: 'from-green-500 to-green-700',
      price: '$7.99/mo',
      content: ['Current TV', 'FX', 'ABC', 'Original Series', 'Movies'],
      features: ['Live TV Option', 'Next Day TV', 'Original Content', 'Add-ons']
    },
    {
      name: 'ESPN+',
      icon: '⚡',
      color: 'from-red-600 to-red-800',
      price: '$10.99/mo',
      content: ['Live Sports', 'UFC', '30 for 30', 'Original Shows'],
      features: ['Exclusive Events', 'Replays', 'Articles', 'Fantasy Tools']
    }
  ];
  
  const bundles = [
    {
      name: 'Disney Bundle Duo',
      services: ['Disney+', 'Hulu'],
      price: '$9.99/mo',
      savings: 'Save $6/mo',
      icon: '🎬'
    },
    {
      name: 'Disney Bundle Trio Basic',
      services: ['Disney+', 'Hulu', 'ESPN+'],
      price: '$14.99/mo',
      savings: 'Save $12/mo',
      icon: '🎯',
      popular: true
    },
    {
      name: 'Disney Bundle Trio Premium',
      services: ['Disney+', 'Hulu (No Ads)', 'ESPN+'],
      price: '$24.99/mo',
      savings: 'Save $16/mo',
      icon: '👑'
    }
  ];
  
  const features = [
    { title: 'Multiple Profiles', description: 'Create up to 7 profiles per account', icon: '👥' },
    { title: 'Parental Controls', description: 'Kid-safe profiles and content ratings', icon: '🔒' },
    { title: 'Download & Go', description: 'Watch offline on mobile devices', icon: '📱' },
    { title: 'Stream Anywhere', description: 'Watch on all your favorite devices', icon: '🌍' }
  ];
  
  const originals = [
    { title: 'The Mandalorian', service: 'Disney+', genre: 'Star Wars' },
    { title: 'Only Murders in the Building', service: 'Hulu', genre: 'Mystery' },
    { title: 'The Bear', service: 'Hulu', genre: 'Drama' },
    { title: 'Loki', service: 'Disney+', genre: 'Marvel' },
    { title: 'The Last Dance', service: 'ESPN+', genre: 'Documentary' },
    { title: 'Ahsoka', service: 'Disney+', genre: 'Star Wars' }
  ];
</script>

<svelte:head>
  <title>Disney Streaming Services - Disney+, Hulu & ESPN+</title>
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-green-900 text-white">
  <div class="absolute inset-0 opacity-20">
    <div class="grid grid-cols-8 gap-4 p-8">
      {#each Array(32) as _, i}
        <div class="text-4xl animate-pulse" style="animation-delay: {i * 0.1}s">
          {['🎬', '📺', '⚡', '🍿'][i % 4]}
        </div>
      {/each}
    </div>
  </div>
  
  <div class="relative z-10 container mx-auto px-4 py-20">
    <div class="text-center">
      <h1 class="text-5xl md:text-7xl font-bold mb-6">
        Stream It All
      </h1>
      <p class="text-2xl md:text-3xl mb-8 text-blue-100">
        Disney+, Hulu & ESPN+ • Better Together
      </p>
      <p class="text-lg max-w-3xl mx-auto mb-8 text-gray-300">
        Get the entertainment you love with Disney's streaming services. 
        Stream thousands of shows and movies, live sports, and exclusive originals.
      </p>
    </div>
  </div>
</section>

<!-- Individual Services -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold mb-12 text-center">Choose Your Streaming Services</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    {#each streamingServices as service}
      <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
        <div class="bg-gradient-to-br {service.color} p-8 text-white text-center">
          <div class="text-6xl mb-4">{service.icon}</div>
          <h3 class="text-2xl font-bold mb-2">{service.name}</h3>
          <p class="text-3xl font-bold">{service.price}</p>
        </div>
        <div class="p-6">
          <h4 class="font-semibold mb-3">Includes:</h4>
          <ul class="space-y-2 mb-4">
            {#each service.content as content}
              <li class="text-sm text-gray-900 flex items-center">
                <span class="w-1.5 h-1.5 bg-{service.color.split(' ')[1].split('-')[1]}-500 rounded-full mr-2"></span>
                {content}
              </li>
            {/each}
          </ul>
          <h4 class="font-semibold mb-3">Features:</h4>
          <div class="flex flex-wrap gap-2">
            {#each service.features as feature}
              <span class="text-xs bg-gray-100 px-2 py-1 rounded">
                {feature}
              </span>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- Bundle Options -->
<section class="bg-gradient-to-b from-purple-50 to-white py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-4 text-center">Save with Bundles</h2>
    <p class="text-center text-gray-900 mb-12 max-w-2xl mx-auto">
      Get more of what you love for less when you bundle Disney's streaming services
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {#each bundles as bundle}
        <div class="relative bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow {bundle.popular ? 'ring-4 ring-purple-500' : ''}">
          {#if bundle.popular}
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold">
              MOST POPULAR
            </div>
          {/if}
          <div class="text-center">
            <div class="text-5xl mb-4">{bundle.icon}</div>
            <h3 class="text-xl font-bold mb-2">{bundle.name}</h3>
            <p class="text-3xl font-bold text-purple-600 mb-2">{bundle.price}</p>
            <p class="text-green-600 font-semibold mb-4">{bundle.savings}</p>
            <div class="space-y-1 mb-6">
              {#each bundle.services as service}
                <p class="text-gray-900">✓ {service}</p>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Features -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl p-8 md:p-12">
    <h2 class="text-3xl font-bold mb-8 text-center">Streaming Features</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each features as feature}
        <div class="text-center">
          <div class="text-5xl mb-4">{feature.icon}</div>
          <h3 class="font-bold mb-2">{feature.title}</h3>
          <p class="text-sm text-gray-900">{feature.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Original Content -->
<section class="bg-gray-50 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-12 text-center">Exclusive Originals</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each originals as show}
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h3 class="font-bold text-lg mb-2">{show.title}</h3>
          <div class="flex justify-between text-sm text-gray-900">
            <span>{show.service}</span>
            <span>{show.genre}</span>
          </div>
        </div>
      {/each}
    </div>
    
    <div class="text-center mt-8">
    </div>
  </div>
</section>

<!-- Device Compatibility -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold mb-8 text-center">Watch Anywhere</h2>
  
  <div class="flex flex-wrap justify-center gap-8 text-6xl">
    <div class="text-center">
      <div>📺</div>
      <p class="text-sm mt-2">Smart TVs</p>
    </div>
    <div class="text-center">
      <div>💻</div>
      <p class="text-sm mt-2">Web</p>
    </div>
    <div class="text-center">
      <div>📱</div>
      <p class="text-sm mt-2">Mobile</p>
    </div>
    <div class="text-center">
      <div>🎮</div>
      <p class="text-sm mt-2">Game Consoles</p>
    </div>
    <div class="text-center">
      <div>📡</div>
      <p class="text-sm mt-2">Streaming Devices</p>
    </div>
  </div>
</section>

<!-- Call to Action -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-r from-blue-700 via-purple-700 to-green-700 rounded-3xl p-8 md:p-12 text-white text-center">
    <h2 class="text-4xl font-bold mb-6">Start Streaming Today</h2>
    <p class="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
      Join millions of subscribers enjoying the best in entertainment, sports, and more
    </p>
  </div>
</section>