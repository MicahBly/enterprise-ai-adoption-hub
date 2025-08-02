<script>
  import { onMount } from 'svelte';
  
  const subscriptionPlans = [
    {
      name: 'Monthly',
      price: '$10.99',
      period: '/month',
      features: [
        'Unlimited streaming of live sports',
        'Exclusive UFC Fight Nights',
        'Original shows and series',
        'Complete 30 for 30 library',
        'NHL, MLB, and MLS games',
        'Top college sports'
      ],
      popular: false
    },
    {
      name: 'Annual',
      price: '$109.99',
      period: '/year',
      savings: 'Save $21.89',
      features: [
        'Everything in Monthly plan',
        'Pay for 10 months, get 12',
        'Best value for sports fans',
        'Cancel anytime',
        'Ad-free experience available',
        'Download for offline viewing'
      ],
      popular: true
    }
  ];

  const bundleOptions = [
    {
      name: 'Disney Bundle Duo',
      services: ['Disney+', 'ESPN+'],
      price: '$14.99',
      savings: 'Save $6.98/month',
      icon: '🏰⚽'
    },
    {
      name: 'Disney Bundle Trio',
      services: ['Disney+', 'Hulu', 'ESPN+'],
      price: '$24.99',
      savings: 'Save $17.97/month',
      icon: '🏰📺⚽',
      bestValue: true
    }
  ];

  const exclusiveContent = [
    {
      category: 'UFC',
      title: 'UFC Fight Nights',
      description: 'Exclusive UFC events and preliminary cards',
      image: '🥊',
      live: true
    },
    {
      category: 'Soccer',
      title: 'LaLiga & Bundesliga',
      description: 'Top European soccer leagues live',
      image: '⚽',
      live: true
    },
    {
      category: 'Original',
      title: '30 for 30',
      description: 'Award-winning sports documentaries',
      image: '🎬',
      live: false
    },
    {
      category: 'NHL',
      title: 'NHL Games',
      description: '1,000+ out-of-market NHL games',
      image: '🏒',
      live: true
    },
    {
      category: 'College',
      title: 'College Sports',
      description: 'Football, basketball, and more',
      image: '🎓',
      live: true
    },
    {
      category: 'Original',
      title: 'Peyton\'s Places',
      description: 'Exclusive series with Peyton Manning',
      image: '🏈',
      live: false
    }
  ];

  const upcomingEvents = [
    { date: 'Tonight', time: '8:00 PM ET', event: 'UFC Fight Night: Main Card', sport: 'MMA' },
    { date: 'Tomorrow', time: '2:30 PM ET', event: 'LaLiga: Real Madrid vs Barcelona', sport: 'Soccer' },
    { date: 'Saturday', time: '7:00 PM ET', event: 'NHL: Rangers vs Bruins', sport: 'Hockey' },
    { date: 'Sunday', time: '12:00 PM ET', event: 'College Football: Top 25 Matchups', sport: 'Football' },
    { date: 'Monday', time: '9:00 PM ET', event: 'Monday Night Football with Peyton & Eli', sport: 'Football' }
  ];

  const originalSeries = [
    {
      title: 'The Last Dance',
      description: 'Michael Jordan and the \'97-\'98 Chicago Bulls',
      episodes: '10 Episodes',
      rating: '9.8/10'
    },
    {
      title: 'Man in the Arena',
      description: 'Tom Brady\'s championship seasons',
      episodes: '10 Episodes',
      rating: '9.5/10'
    },
    {
      title: 'Detail',
      description: 'Breaking down game film with legends',
      episodes: '30+ Episodes',
      rating: '9.2/10'
    },
    {
      title: 'UFC Embedded',
      description: 'Behind-the-scenes fight week access',
      episodes: 'Weekly',
      rating: '9.0/10'
    }
  ];

  let selectedPlan = 1; // Default to annual
  let mouseX = 0;
  let mouseY = 0;

  onMount(() => {
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  });
</script>

<svelte:head>
  <title>ESPN+ - Stream Live Sports & Exclusive Originals | Disney</title>
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-gray-900 via-red-900 to-black text-white">
  <div class="absolute inset-0 opacity-20">
    <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
  </div>
  
  <div class="relative z-10 container mx-auto px-4 py-20">
    <div class="max-w-4xl">
      <div class="flex items-center space-x-4 mb-6">
        <span class="bg-red-600 text-white px-4 py-2 rounded-full font-bold text-lg">ESPN+</span>
        <span class="text-red-400 font-semibold">Premium Streaming</span>
      </div>
      
      <h1 class="text-5xl md:text-7xl font-bold mb-6">
        Every Game.<br/>
        Every Story.<br/>
        <span class="text-red-500">Every Fan.</span>
      </h1>
      
      <p class="text-xl md:text-2xl mb-8 text-gray-200">
        Stream thousands of live events and original series. UFC, Soccer, NHL, MLB, College Sports and more.
      </p>
      
      
      <div class="flex items-center space-x-6 text-sm text-gray-300">
        <span class="flex items-center">
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
          </svg>
          Cancel Anytime
        </span>
        <span class="flex items-center">
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
          </svg>
          No Contract
        </span>
        <span class="flex items-center">
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
          </svg>
          Stream on Any Device
        </span>
      </div>
    </div>
  </div>
</section>

<!-- Subscription Plans -->
<section class="container mx-auto px-4 py-16">
  <div class="text-center mb-12">
    <h2 class="text-4xl font-bold mb-4">Choose Your Plan</h2>
    <p class="text-xl text-gray-600">Get unlimited access to exclusive live sports and originals</p>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
    {#each subscriptionPlans as plan, index}
      <div class="relative {plan.popular ? 'ring-4 ring-red-500 transform scale-105' : ''} bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
        {#if plan.popular}
          <div class="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
            BEST VALUE
          </div>
        {/if}
        
        <div class="p-8">
          <h3 class="text-2xl font-bold mb-2">{plan.name}</h3>
          <div class="flex items-baseline mb-6">
            <span class="text-5xl font-bold">{plan.price}</span>
            <span class="text-gray-600 ml-1">{plan.period}</span>
          </div>
          
          {#if plan.savings}
            <div class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-6">
              {plan.savings}
            </div>
          {/if}
          
          <ul class="space-y-3 mb-8">
            {#each plan.features as feature}
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700">{feature}</span>
              </li>
            {/each}
          </ul>
          
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- Bundle Options -->
<section class="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
  <div class="container mx-auto px-4">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold mb-4">Bundle & Save</h2>
      <p class="text-xl text-gray-600">Get more of what you love for less</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {#each bundleOptions as bundle}
        <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 {bundle.bestValue ? 'ring-4 ring-purple-500' : ''}">
          {#if bundle.bestValue}
            <div class="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold inline-block mb-4">
              MOST POPULAR
            </div>
          {/if}
          
          <div class="text-5xl mb-4">{bundle.icon}</div>
          <h3 class="text-2xl font-bold mb-2">{bundle.name}</h3>
          <div class="flex flex-wrap gap-2 mb-4">
            {#each bundle.services as service}
              <span class="bg-gray-100 px-3 py-1 rounded-full text-sm font-semibold">{service}</span>
            {/each}
          </div>
          
          <div class="text-3xl font-bold mb-2">{bundle.price}<span class="text-lg text-gray-600">/month</span></div>
          <p class="text-green-600 font-semibold mb-6">{bundle.savings}</p>
          
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Exclusive Content Grid -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-4xl font-bold text-center mb-12">Exclusive Content</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each exclusiveContent as content}
      <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer">
        <div class="h-48 bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white relative overflow-hidden">
          <span class="text-6xl z-10">{content.image}</span>
          {#if content.live}
            <div class="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
              <span class="w-2 h-2 bg-white rounded-full animate-pulse mr-2"></span>
              LIVE
            </div>
          {/if}
          <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>
        <div class="p-6">
          <span class="text-sm text-red-600 font-bold">{content.category}</span>
          <h3 class="text-xl font-bold mt-2 mb-2">{content.title}</h3>
          <p class="text-gray-600">{content.description}</p>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- Live Events Calendar -->
<section class="bg-gray-100 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold text-center mb-12">Upcoming Live Events</h2>
    
    <div class="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
      <div class="bg-gradient-to-r from-red-600 to-red-700 text-white p-6">
        <h3 class="text-2xl font-bold">This Week on ESPN+</h3>
      </div>
      
      <div class="divide-y divide-gray-200">
        {#each upcomingEvents as event}
          <div class="p-6 hover:bg-gray-50 transition-colors duration-300">
            <div class="flex items-center justify-between">
              <div>
                <div class="flex items-center space-x-4 mb-2">
                  <span class="text-sm font-bold text-red-600">{event.date}</span>
                  <span class="text-sm text-gray-600">{event.time}</span>
                  <span class="bg-gray-100 px-2 py-1 rounded text-xs font-semibold">{event.sport}</span>
                </div>
                <h4 class="text-lg font-semibold">{event.event}</h4>
              </div>
            </div>
          </div>
        {/each}
      </div>
      
      <div class="bg-gray-50 p-6 text-center">
        <span class="text-red-600 font-semibold">View Full Schedule</span>
      </div>
    </div>
  </div>
</section>

<!-- Original Series Showcase -->
<section class="container mx-auto px-4 py-16">
  <div class="text-center mb-12">
    <h2 class="text-4xl font-bold mb-4">Award-Winning Originals</h2>
    <p class="text-xl text-gray-600">Exclusive documentaries and series you can't find anywhere else</p>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {#each originalSeries as series}
      <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer">
        <div class="h-64 bg-gradient-to-br from-gray-800 to-black relative overflow-hidden">
          <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
            <div class="text-yellow-400 text-sm font-bold mb-1">★ {series.rating}</div>
          </div>
          <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="bg-white bg-opacity-90 rounded-full p-4">
              <svg class="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="p-4">
          <h3 class="font-bold text-lg mb-1">{series.title}</h3>
          <p class="text-sm text-gray-600 mb-2">{series.description}</p>
          <span class="text-xs text-red-600 font-semibold">{series.episodes}</span>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- Features Section -->
<section class="bg-gradient-to-br from-red-600 to-red-800 text-white py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold text-center mb-12">Why ESPN+?</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <div class="text-center">
        <div class="bg-white bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
          <span class="text-3xl">📱</span>
        </div>
        <h3 class="text-xl font-bold mb-2">Stream Anywhere</h3>
        <p class="text-red-100">Watch on your TV, phone, tablet, or computer. Download to watch offline.</p>
      </div>
      
      <div class="text-center">
        <div class="bg-white bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
          <span class="text-3xl">🏆</span>
        </div>
        <h3 class="text-xl font-bold mb-2">Exclusive Access</h3>
        <p class="text-red-100">Get sports you can't watch anywhere else, including UFC, soccer, and more.</p>
      </div>
      
      <div class="text-center">
        <div class="bg-white bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
          <span class="text-3xl">💰</span>
        </div>
        <h3 class="text-xl font-bold mb-2">Incredible Value</h3>
        <p class="text-red-100">Thousands of events for less than the cost of a single ticket.</p>
      </div>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 md:p-12 text-white text-center">
    <h2 class="text-4xl font-bold mb-4">Ready to Start Streaming?</h2>
    <p class="text-xl mb-8 text-gray-300">Join millions of fans already watching on ESPN+</p>
    
    
    <p class="mt-8 text-sm text-gray-400">
      No commitment. Cancel anytime. Restrictions apply.
    </p>
  </div>
</section>

<style>
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
</style>