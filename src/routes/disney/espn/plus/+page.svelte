<script>
  import { onMount } from 'svelte';
  
  const aiFeatures = [
    {
      name: 'Personalized Content Recommendations',
      description: 'AI analyzes your viewing habits and favorite teams to curate a custom sports feed just for you',
      icon: '🎯',
      benefits: [
        'Custom home screen based on your interests',
        'Smart notifications for must-see moments',
        'Discover new sports and teams you\'ll love',
        'Prioritized highlights from your favorite athletes',
        'Context-aware suggestions based on season',
        'Cross-sport recommendations to expand horizons'
      ],
      technology: 'Machine Learning & Collaborative Filtering'
    },
    {
      name: 'AI-Generated Highlight Reels',
      description: 'Intelligent video processing creates personalized highlight packages in real-time',
      icon: '🎬',
      benefits: [
        'Instant game recaps tailored to your preferences',
        'Key moment detection and compilation',
        'Player-specific highlight packages',
        'Custom duration options (30s to 10min)',
        'Smart transitions and pacing',
        'Multi-angle best view selection'
      ],
      technology: 'Computer Vision & Video Analytics'
    },
    {
      name: 'Fantasy Sports Predictive Analytics',
      description: 'Advanced AI models provide data-driven insights for fantasy sports success',
      icon: '📊',
      benefits: [
        'Player performance predictions',
        'Injury risk assessment',
        'Optimal lineup recommendations',
        'Trade value analysis',
        'Matchup advantages insights',
        'Real-time strategy adjustments'
      ],
      technology: 'Predictive Modeling & Statistical Analysis'
    },
    {
      name: 'Smart Stats & Insights',
      description: 'AI-powered analytics transform raw data into actionable sports intelligence',
      icon: '🧠',
      benefits: [
        'Advanced player performance metrics',
        'Team chemistry analysis',
        'Historical pattern recognition',
        'Contextual stat explanations',
        'Predictive game outcomes',
        'Hidden correlation discoveries'
      ],
      technology: 'Deep Learning & Natural Language Processing'
    }
  ];

  const aiUseCases = [
    {
      title: 'Morning Briefing',
      description: 'Wake up to AI-curated highlights from overnight games',
      icon: '☀️',
      example: 'Personalized 5-minute recap of last night\'s action'
    },
    {
      title: 'Game Day Companion',
      description: 'Real-time insights and predictions during live games',
      icon: '🏈',
      example: 'Live win probability and key player impact analysis'
    },
    {
      title: 'Fantasy Assistant',
      description: 'AI coach provides lineup optimization and trade advice',
      icon: '🏆',
      example: 'Start/sit recommendations based on 50+ data points'
    },
    {
      title: 'Discovery Mode',
      description: 'Find new sports and athletes based on your preferences',
      icon: '🔍',
      example: 'If you like NBA, you might enjoy EuroLeague basketball'
    },
    {
      title: 'Stats Storyteller',
      description: 'Complex statistics explained in simple, engaging narratives',
      icon: '📖',
      example: 'Why this pitcher\'s spin rate matters for tonight\'s game'
    },
    {
      title: 'Highlight Hunter',
      description: 'Never miss a spectacular play from any sport',
      icon: '🎪',
      example: 'Top 10 plays across all sports, personalized for you'
    }
  ];

  const aiTechStack = [
    {
      category: 'Computer Vision',
      title: 'Action Recognition',
      description: 'Identifies key plays and moments in real-time',
      capabilities: ['Player tracking', 'Ball detection', 'Score changes', 'Celebration detection'],
      accuracy: '97%'
    },
    {
      category: 'NLP',
      title: 'Commentary Analysis',
      description: 'Processes live commentary for instant insights',
      capabilities: ['Sentiment analysis', 'Key quote extraction', 'Play-by-play summaries', 'Multi-language support'],
      accuracy: '94%'
    },
    {
      category: 'ML Models',
      title: 'Predictive Engine',
      description: 'Forecasts game outcomes and player performance',
      capabilities: ['Win probability', 'Player projections', 'Injury likelihood', 'Team momentum'],
      accuracy: '89%'
    },
    {
      category: 'Deep Learning',
      title: 'Pattern Recognition',
      description: 'Discovers hidden patterns in sports data',
      capabilities: ['Play style analysis', 'Team strategies', 'Historical comparisons', 'Anomaly detection'],
      accuracy: '92%'
    }
  ];

  const realWorldImpact = [
    { metric: '73%', description: 'Increase in user engagement with AI recommendations' },
    { metric: '4.8/5', description: 'Average rating for AI-generated highlights' },
    { metric: '62%', description: 'Fantasy players using AI insights win more often' },
    { metric: '89%', description: 'Accuracy in predicting game-changing moments' },
    { metric: '45min', description: 'Average additional viewing time per user' },
    { metric: '91%', description: 'Users discover new favorite teams through AI' }
  ];

  let selectedFeature = 0;
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
  <title>ESPN+ AI Features - Personalized Sports Intelligence | Disney</title>
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
        AI-Powered<br/>
        Sports Intelligence.<br/>
        <span class="text-red-500">Just for You.</span>
      </h1>
      
      <p class="text-xl md:text-2xl mb-8 text-gray-200">
        Experience sports like never before with personalized recommendations, AI-generated highlights, and predictive analytics.
      </p>
      
      
      <div class="flex flex-wrap gap-4 mb-8">
        <a href="/disney/espn" class="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center">
          Explore ESPN AI Use Cases
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
        </a>
        <button class="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Watch AI Demo
        </button>
      </div>
      
      <div class="flex items-center space-x-6 text-sm text-gray-300">
        <span class="flex items-center">
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
          </svg>
          Personalized Experience
        </span>
        <span class="flex items-center">
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
          </svg>
          Real-time Analytics
        </span>
        <span class="flex items-center">
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
          </svg>
          Smart Recommendations
        </span>
      </div>
    </div>
  </div>
</section>

<!-- AI Features -->
<section class="container mx-auto px-4 py-16">
  <div class="text-center mb-12">
    <h2 class="text-4xl font-bold mb-4 text-gray-900">AI-Powered Features</h2>
    <p class="text-xl text-gray-600">Transforming how you experience sports with cutting-edge artificial intelligence</p>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    {#each aiFeatures as feature, index}
      <div class="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer"
           on:click={() => selectedFeature = index}
           class:ring-4={selectedFeature === index}
           class:ring-red-500={selectedFeature === index}>
        <div class="p-8">
          <div class="flex items-center mb-4">
            <span class="text-4xl mr-4">{feature.icon}</span>
            <div>
              <h3 class="text-2xl font-bold text-gray-900">{feature.name}</h3>
              <span class="text-sm text-red-600 font-semibold">{feature.technology}</span>
            </div>
          </div>
          
          <p class="text-gray-600 mb-6">{feature.description}</p>
          
          <ul class="space-y-2">
            {#each feature.benefits as benefit}
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700">{benefit}</span>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- AI Use Cases -->
<section class="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
  <div class="container mx-auto px-4">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold mb-4 text-gray-900">AI in Action</h2>
      <p class="text-xl text-gray-600">Real-world applications enhancing your sports experience</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each aiUseCases as useCase}
        <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6">
          <div class="text-3xl mb-4">{useCase.icon}</div>
          <h3 class="text-xl font-bold mb-2 text-gray-900">{useCase.title}</h3>
          <p class="text-gray-600 mb-3">{useCase.description}</p>
          <div class="bg-red-50 text-red-700 p-3 rounded-lg text-sm">
            <strong>Example:</strong> {useCase.example}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- AI Technology Stack -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">The Technology Behind the Magic</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    {#each aiTechStack as tech}
      <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
        <div class="bg-gradient-to-r from-red-600 to-red-700 text-white p-6">
          <div class="flex items-center justify-between">
            <div>
              <span class="text-sm font-semibold opacity-90">{tech.category}</span>
              <h3 class="text-2xl font-bold">{tech.title}</h3>
            </div>
            <div class="text-3xl font-bold bg-white bg-opacity-20 rounded-lg px-4 py-2">
              {tech.accuracy}
            </div>
          </div>
        </div>
        <div class="p-6">
          <p class="text-gray-600 mb-4">{tech.description}</p>
          <div class="grid grid-cols-2 gap-3">
            {#each tech.capabilities as capability}
              <div class="bg-gray-50 px-3 py-2 rounded-lg text-sm text-gray-700">
                • {capability}
              </div>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- Real World Impact -->
<section class="bg-gray-100 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">Proven Results</h2>
    <p class="text-xl text-gray-600 text-center mb-12">How AI is transforming the ESPN+ experience</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {#each realWorldImpact as impact}
        <div class="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300">
          <div class="text-4xl font-bold text-red-600 mb-3">{impact.metric}</div>
          <p class="text-gray-700">{impact.description}</p>
        </div>
      {/each}
    </div>
    
    <div class="mt-12 bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
      <h3 class="text-2xl font-bold mb-6 text-center text-gray-900">What Fans Are Saying</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-gray-50 p-6 rounded-xl">
          <p class="text-gray-700 italic mb-4">"The AI recommendations are spot on! I've discovered so many amazing games I would have missed."</p>
          <p class="text-sm font-semibold text-red-600">- Sarah M., Basketball Fan</p>
        </div>
        <div class="bg-gray-50 p-6 rounded-xl">
          <p class="text-gray-700 italic mb-4">"Fantasy football has never been easier. The AI predictions helped me win my league!"</p>
          <p class="text-sm font-semibold text-red-600">- Mike T., Fantasy Sports Player</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Future of Sports AI -->
<section class="container mx-auto px-4 py-16">
  <div class="text-center mb-12">
    <h2 class="text-4xl font-bold mb-4 text-gray-900">The Future of Sports Entertainment</h2>
    <p class="text-xl text-gray-600">What's next in AI-powered sports experiences</p>
  </div>
  
  <div class="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 md:p-12 text-white">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 class="text-2xl font-bold mb-6">Coming Soon</h3>
        <ul class="space-y-4">
          <li class="flex items-start">
            <span class="text-2xl mr-4">🎙️</span>
            <div>
              <h4 class="font-bold mb-1">AI Commentary Customization</h4>
              <p class="text-gray-300 text-sm">Choose your preferred commentary style and language in real-time</p>
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-2xl mr-4">🏃</span>
            <div>
              <h4 class="font-bold mb-1">Motion Capture Analytics</h4>
              <p class="text-gray-300 text-sm">Advanced biomechanics analysis for every athlete</p>
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-2xl mr-4">🌐</span>
            <div>
              <h4 class="font-bold mb-1">Virtual Reality Integration</h4>
              <p class="text-gray-300 text-sm">Experience games from any angle with AI-enhanced VR</p>
            </div>
          </li>
        </ul>
      </div>
      
      <div>
        <h3 class="text-2xl font-bold mb-6">Research & Development</h3>
        <div class="bg-white bg-opacity-10 rounded-xl p-6">
          <div class="mb-4">
            <div class="flex justify-between text-sm mb-2">
              <span>AI Model Accuracy</span>
              <span>92%</span>
            </div>
            <div class="bg-white bg-opacity-20 rounded-full h-3">
              <div class="bg-red-500 h-3 rounded-full" style="width: 92%"></div>
            </div>
          </div>
          <div class="mb-4">
            <div class="flex justify-between text-sm mb-2">
              <span>Processing Speed</span>
              <span>0.3s</span>
            </div>
            <div class="bg-white bg-opacity-20 rounded-full h-3">
              <div class="bg-red-500 h-3 rounded-full" style="width: 95%"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between text-sm mb-2">
              <span>User Satisfaction</span>
              <span>4.8/5</span>
            </div>
            <div class="bg-white bg-opacity-20 rounded-full h-3">
              <div class="bg-red-500 h-3 rounded-full" style="width: 96%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Why AI Matters -->
<section class="bg-gradient-to-br from-red-600 to-red-800 text-white py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold text-center mb-12">Why AI-Powered Sports?</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <div class="text-center">
        <div class="bg-white bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
          <span class="text-3xl">⚡</span>
        </div>
        <h3 class="text-xl font-bold mb-2">Instant Insights</h3>
        <p class="text-red-100">Get real-time analysis and predictions as the action unfolds.</p>
      </div>
      
      <div class="text-center">
        <div class="bg-white bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
          <span class="text-3xl">🎯</span>
        </div>
        <h3 class="text-xl font-bold mb-2">Perfect Personalization</h3>
        <p class="text-red-100">AI learns your preferences to deliver exactly what you want to see.</p>
      </div>
      
      <div class="text-center">
        <div class="bg-white bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
          <span class="text-3xl">📈</span>
        </div>
        <h3 class="text-xl font-bold mb-2">Data-Driven Decisions</h3>
        <p class="text-red-100">Make smarter fantasy picks with AI-powered predictive analytics.</p>
      </div>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 md:p-12 text-white text-center">
    <h2 class="text-4xl font-bold mb-4">Experience the Future of Sports</h2>
    <p class="text-xl mb-8 text-gray-300">Discover how AI is revolutionizing sports entertainment at ESPN</p>
    
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="/disney/espn" class="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center justify-center">
        Explore ESPN AI Use Cases
        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
        </svg>
      </a>
      <button class="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
        Request AI Demo
      </button>
    </div>
    
    <p class="mt-8 text-sm text-gray-400">
      Learn how ESPN is using AI to enhance fan experiences worldwide.
    </p>
  </div>
</section>

<style>
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
</style>