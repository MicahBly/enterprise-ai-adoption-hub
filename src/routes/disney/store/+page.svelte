<script>
  const characterShops = [
    {
      name: 'Mickey & Friends',
      icon: '🐭',
      description: 'Classic Disney magic',
      color: 'from-red-500 to-yellow-500',
      featured: ['Plush Toys', 'Apparel', 'Home Decor']
    },
    {
      name: 'Disney Princess',
      icon: '👸',
      description: 'Dreams come true',
      color: 'from-pink-400 to-purple-500',
      featured: ['Costumes', 'Dolls', 'Accessories']
    },
    {
      name: 'Marvel',
      icon: '🦸',
      description: 'Superhero essentials',
      color: 'from-red-600 to-blue-600',
      featured: ['Action Figures', 'Collectibles', 'Apparel']
    },
    {
      name: 'Star Wars',
      icon: '⚔️',
      description: 'Galaxy far, far away',
      color: 'from-gray-700 to-black',
      featured: ['Lightsabers', 'LEGO', 'Collectibles']
    },
    {
      name: 'Pixar',
      icon: '🎈',
      description: 'Adventure awaits',
      color: 'from-blue-400 to-green-500',
      featured: ['Toys', 'Books', 'Games']
    },
    {
      name: 'Frozen',
      icon: '❄️',
      description: 'Let it go collection',
      color: 'from-blue-300 to-purple-400',
      featured: ['Dolls', 'Costumes', 'Music']
    }
  ];

  const productCategories = [
    { name: 'Toys & Plush', icon: '🧸', count: '5,000+', href: '/disney/store/toys' },
    { name: 'Apparel', icon: '👕', count: '3,000+', href: '/disney/store/apparel' },
    { name: 'Home & Decor', icon: '🏠', count: '2,000+', href: '/disney/store/home' },
    { name: 'Collectibles', icon: '🏆', count: '1,500+', href: '/disney/store/collectibles' },
    { name: 'Accessories', icon: '👜', count: '2,500+', href: '/disney/store/accessories' },
    { name: 'Books & Media', icon: '📚', count: '1,000+', href: '/disney/store/books' }
  ];

  const parksExclusive = [
    {
      name: 'Magic Kingdom Collection',
      description: 'Exclusive merchandise from the most magical place on Earth',
      price: 'From $24.99',
      badge: 'Park Exclusive'
    },
    {
      name: 'EPCOT World Showcase',
      description: 'Unique items from around the world',
      price: 'From $19.99',
      badge: 'Limited Edition'
    },
    {
      name: 'Galaxy\'s Edge',
      description: 'Build your own lightsaber or droid',
      price: 'From $99.99',
      badge: 'Interactive'
    },
    {
      name: 'Anniversary Collection',
      description: 'Celebrate Disney\'s magical milestones',
      price: 'From $34.99',
      badge: 'Commemorative'
    }
  ];

  const shoppingBenefits = [
    { icon: '🚚', title: 'Free Shipping', description: 'On orders over $75' },
    { icon: '🎁', title: 'Gift Wrapping', description: 'Make it magical' },
    { icon: '💳', title: 'Disney Rewards', description: 'Earn points on every purchase' },
    { icon: '🔄', title: 'Easy Returns', description: '30-day return policy' }
  ];
</script>

<svelte:head>
  <title>Disney Store - Shop the Magic | AI Hub</title>
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
  <div class="absolute inset-0 opacity-20">
    <div class="absolute top-10 left-10 text-8xl animate-pulse">🛍️</div>
    <div class="absolute bottom-10 right-10 text-8xl animate-pulse" style="animation-delay: 0.5s">✨</div>
    <div class="absolute top-1/2 left-1/3 text-6xl animate-pulse" style="animation-delay: 1s">🎁</div>
  </div>
  
  <div class="relative z-10 container mx-auto px-4 py-20">
    <h1 class="text-5xl md:text-6xl font-bold mb-6">Disney Store</h1>
    <p class="text-xl md:text-2xl mb-8 text-blue-100">
      Bring the magic home with authentic Disney merchandise
    </p>
    
    <!-- Quick Stats -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
      <div class="text-center">
        <div class="text-3xl font-bold">20,000+</div>
        <div class="text-blue-100">Products</div>
      </div>
      <div class="text-center">
        <div class="text-3xl font-bold">100+</div>
        <div class="text-blue-100">Characters</div>
      </div>
      <div class="text-center">
        <div class="text-3xl font-bold">Free</div>
        <div class="text-blue-100">Personalization</div>
      </div>
      <div class="text-center">
        <div class="text-3xl font-bold">5%</div>
        <div class="text-blue-100">Rewards Back</div>
      </div>
    </div>
  </div>
</section>

<!-- Featured Products Banner -->
<section class="bg-gradient-to-r from-yellow-400 to-orange-500 py-4">
  <div class="container mx-auto px-4 text-center">
    <p class="text-lg font-semibold text-white">
      🎉 Limited Time: Buy 2 Get 1 FREE on Select Plush Toys! Code: MAGIC3
    </p>
  </div>
</section>

<!-- Shop by Character -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold mb-12 text-gray-900">Shop by Character</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each characterShops as character}
      <div class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
        <div class="absolute inset-0 bg-gradient-to-br {character.color} opacity-90"></div>
        <div class="relative z-10 p-6 text-white">
          <div class="flex items-center mb-4">
            <span class="text-5xl mr-4">{character.icon}</span>
            <div>
              <h3 class="text-2xl font-bold text-white">{character.name}</h3>
              <p class="text-white/90">{character.description}</p>
            </div>
          </div>
          <div class="mt-4">
            <p class="text-sm text-white/80 mb-2">Popular Categories:</p>
            <div class="flex flex-wrap gap-2">
              {#each character.featured as item}
                <span class="bg-white/20 px-3 py-1 rounded-full text-sm">
                  {item}
                </span>
              {/each}
            </div>
          </div>
          <div class="mt-6 flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform">
            Shop Collection
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- Shop by Category -->
<section class="bg-gray-50 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-12 text-gray-900">Shop by Category</h2>
    
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {#each productCategories as category}
        <a href={category.href}
           class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center group hover:scale-105">
          <div class="text-4xl mb-3 group-hover:animate-bounce">{category.icon}</div>
          <h3 class="font-semibold text-gray-800">{category.name}</h3>
          <p class="text-sm text-gray-600 mt-1">{category.count}</p>
        </a>
      {/each}
    </div>
  </div>
</section>

<!-- Disney Parks Exclusive -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 md:p-12">
    <h2 class="text-3xl font-bold mb-8 text-gray-900">Disney Parks Exclusive Merchandise</h2>
    <p class="text-lg text-gray-700 mb-8">
      Can't make it to the parks? Shop exclusive merchandise only available at Disney Parks, now online!
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each parksExclusive as item}
        <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6">
          <span class="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-3 py-1 rounded-full mb-3">
            {item.badge}
          </span>
          <h3 class="text-lg font-bold mb-2 text-gray-900">{item.name}</h3>
          <p class="text-gray-600 text-sm mb-4">{item.description}</p>
          <p class="text-purple-600 font-bold">{item.price}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Personalization Services -->
<section class="bg-gradient-to-br from-blue-500 to-purple-600 text-white py-16">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-6">Make It Personal</h2>
      <p class="text-xl mb-12 text-blue-100">
        Add that special touch with our FREE personalization services
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <div class="text-4xl mb-4">🏷️</div>
          <h3 class="text-xl font-bold mb-2">Name Tags</h3>
          <p class="text-blue-100">Add names to plush toys, backpacks, and more</p>
        </div>
        <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <div class="text-4xl mb-4">👂</div>
          <h3 class="text-xl font-bold mb-2">Mickey Ears</h3>
          <p class="text-blue-100">Customize your ears with embroidered names</p>
        </div>
        <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <div class="text-4xl mb-4">🎨</div>
          <h3 class="text-xl font-bold mb-2">Custom Artwork</h3>
          <p class="text-blue-100">Create personalized Disney art prints</p>
        </div>
      </div>
      
    </div>
  </div>
</section>

<!-- Shopping Benefits -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold mb-12 text-center text-gray-900">Why Shop Disney Store</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {#each shoppingBenefits as benefit}
      <div class="text-center">
        <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full text-white text-3xl mb-4">
          {benefit.icon}
        </div>
        <h3 class="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
        <p class="text-gray-600">{benefit.description}</p>
      </div>
    {/each}
  </div>
</section>


<style>
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
</style>