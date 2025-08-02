<script>
  const aiFeatures = [
    {
      title: 'AI-Powered Booking Optimization',
      description: 'Machine learning algorithms analyze booking patterns to suggest optimal reservation times and maximize point value',
      icon: '🤖',
      benefits: ['Best availability predictions', 'Point optimization strategies', 'Waitlist success forecasting']
    },
    {
      title: 'Predictive Resort Maintenance',
      description: 'AI monitors resort conditions and predicts maintenance needs to minimize guest disruptions',
      icon: '🔧',
      benefits: ['Proactive issue resolution', 'Minimal downtime', 'Enhanced guest satisfaction']
    },
    {
      title: 'Personalized Vacation Planning',
      description: 'AI analyzes your vacation history and preferences to create custom itineraries and experiences',
      icon: '✨',
      benefits: ['Tailored activity suggestions', 'Dining recommendations', 'Crowd pattern predictions']
    },
    {
      title: 'Smart Room Technology',
      description: 'AI-enabled room features that learn and adapt to your preferences throughout your stay',
      icon: '🏠',
      benefits: ['Automated climate control', 'Personalized lighting', 'Voice-activated services']
    }
  ];
  
  const aiApplications = [
    {
      category: 'Booking Intelligence',
      icon: '📊',
      features: [
        'Real-time availability prediction',
        'Dynamic point value optimization',
        'Seasonal demand forecasting',
        'Alternative resort suggestions'
      ]
    },
    {
      category: 'Guest Experience',
      icon: '🎯',
      features: [
        'Personalized welcome experiences',
        'AI concierge services',
        'Smart itinerary planning',
        'Preference learning systems'
      ]
    },
    {
      category: 'Operations Excellence',
      icon: '⚡',
      features: [
        'Predictive housekeeping scheduling',
        'Energy usage optimization',
        'Staff allocation efficiency',
        'Maintenance prioritization'
      ]
    },
    {
      category: 'Member Services',
      icon: '💎',
      features: [
        'Virtual member assistants',
        'Automated point management',
        'Personalized communication',
        'Predictive member support'
      ]
    }
  ];
  
  const smartRoomFeatures = [
    {
      name: 'Adaptive Climate Control',
      description: 'AI learns your temperature preferences and adjusts automatically',
      icon: '🌡️'
    },
    {
      name: 'Voice-Activated Magic',
      description: 'Control room features and get resort information with voice commands',
      icon: '🎤'
    },
    {
      name: 'Smart Entertainment',
      description: 'Personalized content recommendations based on family preferences',
      icon: '📺'
    },
    {
      name: 'Automated Lighting',
      description: 'Lighting that adapts to time of day and your activities',
      icon: '💡'
    }
  ];
  
  const futureInnovations = [
    {
      title: 'Virtual Resort Tours',
      description: 'AI-powered VR experiences for exploring resorts before booking',
      timeline: 'Coming 2025'
    },
    {
      title: 'Predictive Vacation Planning',
      description: 'AI suggests optimal vacation times based on your calendar and preferences',
      timeline: 'In Development'
    },
    {
      title: 'Real-Time Translation Services',
      description: 'AI-powered language translation for international destinations',
      timeline: 'Pilot Program'
    },
    {
      title: 'Biometric Room Access',
      description: 'Facial recognition and fingerprint access for enhanced security',
      timeline: 'Testing Phase'
    }
  ];
</script>

<svelte:head>
  <title>AI in Disney Vacation Club - Enhancing Magical Experiences</title>
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-purple-800 via-purple-600 to-pink-600 text-white">
  <div class="absolute inset-0 opacity-20">
    <!-- AI network pattern -->
    <div class="absolute inset-0">
      {#each Array(20) as _, i}
        <div 
          class="absolute w-2 h-2 bg-white rounded-full"
          style="
            top: {Math.random() * 100}%;
            left: {Math.random() * 100}%;
            animation: pulse {2 + Math.random() * 2}s ease-in-out infinite;
            animation-delay: {Math.random() * 2}s;
          "
        >
        </div>
      {/each}
    </div>
  </div>
  
  <div class="relative z-10 container mx-auto px-4 py-20">
    <div class="text-center">
      <h1 class="text-5xl md:text-7xl font-bold mb-6">
        AI-Enhanced Disney Vacation Club
      </h1>
      <p class="text-2xl md:text-3xl mb-8 text-purple-100">
        Where Technology Meets Magic
      </p>
      <p class="text-lg max-w-3xl mx-auto mb-8 text-purple-200">
        Discover how artificial intelligence is transforming the Disney Vacation Club experience, 
        from intelligent booking systems to personalized vacation planning and smart resort technology.
      </p>
    </div>
  </div>
</section>

<!-- AI Features -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">AI-Powered Vacation Excellence</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    {#each aiFeatures as feature}
      <div class="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-8 hover:shadow-xl transition-shadow">
        <div class="flex items-start mb-4">
          <div class="text-5xl mr-4">{feature.icon}</div>
          <div class="flex-1">
            <h3 class="font-bold text-gray-900 text-xl mb-2">{feature.title}</h3>
            <p class="text-gray-700 mb-4">{feature.description}</p>
            <ul class="space-y-2">
              {#each feature.benefits as benefit}
                <li class="text-sm text-gray-600 flex items-center">
                  <span class="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                  {benefit}
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- AI Applications -->
<section class="bg-gray-50 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">AI Applications Across DVC</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each aiApplications as app}
        <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
          <div class="bg-gradient-to-br from-purple-500 to-pink-500 p-6 text-white text-center">
            <div class="text-5xl mb-3">{app.icon}</div>
            <h3 class="text-xl font-bold">{app.category}</h3>
          </div>
          <div class="p-6">
            <ul class="space-y-3">
              {#each app.features as feature}
                <li class="text-sm text-gray-700 flex items-start">
                  <svg class="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
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

<!-- Smart Room Technology -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 md:p-12">
    <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Smart Room Technology</h2>
    <p class="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
      Experience the future of hospitality with AI-powered room features that learn and adapt to your preferences
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each smartRoomFeatures as feature}
        <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
          <div class="text-4xl mb-3">{feature.icon}</div>
          <h3 class="font-bold text-gray-900 text-lg mb-2">{feature.name}</h3>
          <p class="text-sm text-gray-600">{feature.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Booking Optimization -->
<section class="bg-gradient-to-b from-blue-50 to-white py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">AI-Powered Booking Intelligence</h2>
    
    <div class="max-w-4xl mx-auto">
      <div class="bg-white rounded-2xl shadow-xl p-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Optimization Engine</h3>
            <p class="text-gray-700 mb-4">
              Our AI analyzes millions of booking patterns to help you maximize your DVC points and find the perfect vacation times.
            </p>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-purple-500 mr-2">▸</span>
                <span class="text-gray-700">Real-time availability predictions with 95% accuracy</span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-500 mr-2">▸</span>
                <span class="text-gray-700">Point value optimization across all seasons</span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-500 mr-2">▸</span>
                <span class="text-gray-700">Waitlist success probability calculations</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Personalized Recommendations</h3>
            <p class="text-gray-700 mb-4">
              Machine learning creates custom vacation suggestions based on your family's unique preferences and history.
            </p>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-purple-500 mr-2">▸</span>
                <span class="text-gray-700">Alternative resort suggestions when preferred unavailable</span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-500 mr-2">▸</span>
                <span class="text-gray-700">Optimal booking window notifications</span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-500 mr-2">▸</span>
                <span class="text-gray-700">Historical data-driven insights</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Predictive Maintenance -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white">
    <h2 class="text-3xl font-bold mb-8 text-center">Predictive Resort Maintenance</h2>
    <p class="text-center text-purple-100 mb-8 max-w-3xl mx-auto">
      Advanced AI systems monitor resort infrastructure 24/7, predicting and preventing issues before they impact your vacation
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="text-center">
        <div class="w-16 h-16 bg-white text-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
          <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
            <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
          </svg>
        </div>
        <h3 class="font-bold text-lg mb-2">IoT Monitoring</h3>
        <p class="text-purple-100">Thousands of sensors track system performance in real-time</p>
      </div>
      <div class="text-center">
        <div class="w-16 h-16 bg-white text-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
          <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
          </svg>
        </div>
        <h3 class="font-bold text-lg mb-2">Predictive Analytics</h3>
        <p class="text-purple-100">AI predicts maintenance needs with 98% accuracy</p>
      </div>
      <div class="text-center">
        <div class="w-16 h-16 bg-white text-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
          <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/>
          </svg>
        </div>
        <h3 class="font-bold text-lg mb-2">Proactive Resolution</h3>
        <p class="text-purple-100">Issues resolved before guests notice disruption</p>
      </div>
    </div>
  </div>
</section>

<!-- Future Innovations -->
<section class="bg-gray-50 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">The Future of AI in DVC</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {#each futureInnovations as innovation}
        <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <div class="text-purple-600 font-semibold text-sm mb-2">{innovation.timeline}</div>
          <h3 class="font-bold text-gray-900 text-lg mb-2">{innovation.title}</h3>
          <p class="text-sm text-gray-600">{innovation.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Call to Action -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-r from-purple-700 to-pink-700 rounded-3xl p-8 md:p-12 text-white text-center">
    <h2 class="text-4xl font-bold mb-6">Experience the Future of Vacation Ownership</h2>
    <p class="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
      Discover how AI technology is revolutionizing the Disney Vacation Club experience, 
      creating more magical and personalized vacations than ever before
    </p>
  </div>
</section>

<style>
  @keyframes pulse {
    0%, 100% { 
      opacity: 0.2;
      transform: scale(0.8);
    }
    50% { 
      opacity: 0.8;
      transform: scale(1.2);
    }
  }
</style>