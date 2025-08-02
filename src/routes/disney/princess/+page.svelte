<script>
  const princesses = [
    {
      name: 'Snow White',
      movie: 'Snow White and the Seven Dwarfs',
      year: 1937,
      icon: '🍎',
      traits: ['Kind', 'Gentle', 'Optimistic'],
      color: 'from-yellow-400 to-blue-500'
    },
    {
      name: 'Cinderella',
      movie: 'Cinderella',
      year: 1950,
      icon: '👠',
      traits: ['Hopeful', 'Hardworking', 'Kind'],
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'Aurora',
      movie: 'Sleeping Beauty',
      year: 1959,
      icon: '🌹',
      traits: ['Graceful', 'Romantic', 'Gentle'],
      color: 'from-pink-400 to-purple-500'
    },
    {
      name: 'Ariel',
      movie: 'The Little Mermaid',
      year: 1989,
      icon: '🧜‍♀️',
      traits: ['Curious', 'Adventurous', 'Determined'],
      color: 'from-teal-400 to-purple-500'
    },
    {
      name: 'Belle',
      movie: 'Beauty and the Beast',
      year: 1991,
      icon: '📚',
      traits: ['Intelligent', 'Brave', 'Compassionate'],
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      name: 'Jasmine',
      movie: 'Aladdin',
      year: 1992,
      icon: '🏺',
      traits: ['Independent', 'Strong-willed', 'Free-spirited'],
      color: 'from-teal-500 to-purple-600'
    },
    {
      name: 'Pocahontas',
      movie: 'Pocahontas',
      year: 1995,
      icon: '🍃',
      traits: ['Wise', 'Spiritual', 'Brave'],
      color: 'from-orange-500 to-brown-600'
    },
    {
      name: 'Mulan',
      movie: 'Mulan',
      year: 1998,
      icon: '⚔️',
      traits: ['Courageous', 'Loyal', 'Clever'],
      color: 'from-red-500 to-pink-600'
    },
    {
      name: 'Tiana',
      movie: 'The Princess and the Frog',
      year: 2009,
      icon: '🐸',
      traits: ['Ambitious', 'Hardworking', 'Determined'],
      color: 'from-green-500 to-yellow-500'
    },
    {
      name: 'Rapunzel',
      movie: 'Tangled',
      year: 2010,
      icon: '🌻',
      traits: ['Creative', 'Spirited', 'Adventurous'],
      color: 'from-purple-400 to-pink-500'
    },
    {
      name: 'Merida',
      movie: 'Brave',
      year: 2012,
      icon: '🏹',
      traits: ['Bold', 'Independent', 'Skilled'],
      color: 'from-orange-500 to-green-600'
    },
    {
      name: 'Moana',
      movie: 'Moana',
      year: 2016,
      icon: '🌊',
      traits: ['Brave', 'Determined', 'Caring'],
      color: 'from-blue-500 to-orange-500'
    },
    {
      name: 'Raya',
      movie: 'Raya and the Last Dragon',
      year: 2021,
      icon: '🐉',
      traits: ['Warrior', 'Resilient', 'Trustworthy'],
      color: 'from-blue-600 to-purple-600'
    }
  ];
  
  const products = [
    { category: 'Costumes & Dress-Up', icon: '👗', items: '1000+' },
    { category: 'Dolls & Toys', icon: '🎎', items: '500+' },
    { category: 'Books & Stories', icon: '📖', items: '300+' },
    { category: 'Room Decor', icon: '🏰', items: '400+' },
    { category: 'Party Supplies', icon: '🎉', items: '200+' },
    { category: 'Accessories', icon: '👑', items: '600+' }
  ];
  
  const experiences = [
    {
      title: 'Bibbidi Bobbidi Boutique',
      description: 'Magical makeovers at Disney Parks',
      icon: '✨'
    },
    {
      title: 'Character Dining',
      description: 'Dine with your favorite princesses',
      icon: '🍽️'
    },
    {
      title: 'Princess Meet & Greets',
      description: 'Personal time with Disney Princesses',
      icon: '🤝'
    },
    {
      title: 'Enchanted Tales',
      description: 'Interactive storytelling experiences',
      icon: '📚'
    }
  ];
</script>

<svelte:head>
  <title>Disney Princess - Dream Big, Princess</title>
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 text-white">
  <div class="absolute inset-0">
    <!-- Sparkles and magic -->
    <div class="absolute inset-0">
      {#each Array(40) as _, i}
        <div 
          class="absolute text-3xl animate-sparkle"
          style="
            top: {Math.random() * 100}%;
            left: {Math.random() * 100}%;
            animation-delay: {Math.random() * 4}s;
            animation-duration: {3 + Math.random() * 2}s;
          "
        >
          ✨
        </div>
      {/each}
    </div>
  </div>
  
  <div class="relative z-10 container mx-auto px-4 py-20">
    <div class="text-center">
      <h1 class="text-5xl md:text-7xl font-bold mb-6">
        Disney Princess
      </h1>
      <p class="text-2xl md:text-3xl mb-8 text-pink-100">
        Dream Big, Princess
      </p>
      <p class="text-lg max-w-3xl mx-auto mb-8 text-purple-100">
        Celebrate courage, kindness, and adventure with the Disney Princesses. 
        Each princess teaches us that with determination and heart, dreams really do come true.
      </p>
      <div class="text-8xl mb-8">👑</div>
    </div>
  </div>
</section>

<!-- Meet the Princesses -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Meet the Disney Princesses</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {#each princesses as princess}
      <div class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
        <div class="bg-gradient-to-br {princess.color} p-6 text-white text-center">
          <div class="text-5xl mb-3">{princess.icon}</div>
          <h3 class="text-xl font-bold">{princess.name}</h3>
        </div>
        <div class="p-4">
          <p class="text-sm text-gray-600 mb-2">{princess.movie} ({princess.year})</p>
          <div class="flex flex-wrap gap-1">
            {#each princess.traits as trait}
              <span class="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                {trait}
              </span>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- Princess Values -->
<section class="bg-gradient-to-b from-pink-50 to-purple-50 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">The Power of Princess</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      <div class="text-center">
        <div class="text-6xl mb-4">💪</div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">Courage</h3>
        <p class="text-gray-600">Face challenges with bravery and determination</p>
      </div>
      <div class="text-center">
        <div class="text-6xl mb-4">❤️</div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">Kindness</h3>
        <p class="text-gray-600">Show compassion and care for others</p>
      </div>
      <div class="text-center">
        <div class="text-6xl mb-4">🌟</div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">Dreams</h3>
        <p class="text-gray-600">Believe in yourself and pursue your goals</p>
      </div>
    </div>
  </div>
</section>

<!-- Princess Products -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 md:p-12">
    <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Princess Collection</h2>
    
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {#each products as product}
        <div class="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow">
          <div class="text-3xl mb-2">{product.icon}</div>
          <p class="font-semibold text-gray-900 text-sm">{product.category}</p>
          <p class="text-xs text-gray-600">{product.items} Products</p>
        </div>
      {/each}
    </div>
    
    <div class="text-center mt-8">
    </div>
  </div>
</section>

<!-- Princess Experiences -->
<section class="bg-white py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Live Your Princess Story</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each experiences as experience}
        <div class="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
          <div class="text-4xl mb-4 text-center">{experience.icon}</div>
          <h3 class="font-bold text-gray-900 text-lg mb-2">{experience.title}</h3>
          <p class="text-gray-600 text-sm">{experience.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Ultimate Princess Celebration -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white text-center">
    <h2 class="text-3xl font-bold mb-6">Create Your Own Fairy Tale</h2>
    <p class="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
      From enchanting products to magical experiences at Disney Parks, 
      make every day a princess adventure
    </p>
  </div>
</section>

<style>
  @keyframes sparkle {
    0%, 100% { 
      opacity: 0;
      transform: scale(0) rotate(0deg);
    }
    50% { 
      opacity: 1;
      transform: scale(1) rotate(180deg);
    }
  }
  
  .animate-sparkle {
    animation: sparkle infinite ease-in-out;
  }
</style>