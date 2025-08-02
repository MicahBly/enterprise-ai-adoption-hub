<script>
  let selectedSport = 'football';
  
  const aiFantasySports = [
    {
      id: 'football',
      name: 'AI Fantasy Football',
      icon: '🤖🏈',
      color: 'from-green-600 to-green-800',
      aiFeatures: ['Predictive Player Analytics', 'Injury Risk Assessment', 'Weather Impact Models', 'Advanced Matchup Analysis'],
      accuracy: '87% prediction accuracy',
      users: '25M+ AI-assisted lineups'
    },
    {
      id: 'basketball',
      name: 'AI Fantasy Basketball',
      icon: '🤖🏀',
      color: 'from-orange-500 to-red-600',
      aiFeatures: ['Real-time Performance Prediction', 'Load Management Analysis', 'Lineup Chemistry Optimization', 'Momentum Tracking'],
      accuracy: '84% prediction accuracy',
      users: '15M+ AI recommendations'
    },
    {
      id: 'baseball',
      name: 'AI Fantasy Baseball',
      icon: '🤖⚾',
      color: 'from-blue-600 to-blue-800',
      aiFeatures: ['Sabermetrics Integration', 'Pitcher-Batter Matchups', 'Ballpark Factor Analysis', 'Streak Prediction'],
      accuracy: '82% prediction accuracy',
      users: '8M+ AI insights delivered'
    },
    {
      id: 'hockey',
      name: 'AI Fantasy Hockey',
      icon: '🤖🏒',
      color: 'from-gray-700 to-black',
      aiFeatures: ['Line Combination Analysis', 'Special Teams Optimization', 'Goalie Performance Models', 'Plus-Minus Prediction'],
      accuracy: '79% prediction accuracy',
      users: '3M+ AI-powered decisions'
    }
  ];

  const aiTools = [
    {
      title: 'AI Lineup Optimizer',
      icon: '🧠',
      description: 'Machine learning algorithms analyze thousands of variables to build optimal lineups',
      aiCapabilities: ['Multi-objective optimization', 'Real-time data processing', 'Predictive modeling', 'Risk assessment'],
      techStack: ['Python', 'Scikit-learn', 'TensorFlow'],
      accuracy: '45% better team performance'
    },
    {
      title: 'Predictive Player Models',
      icon: '📈',
      description: 'Advanced statistical models predict player performance using historical data and current trends',
      aiCapabilities: ['Time series forecasting', 'Regression analysis', 'Feature engineering', 'Model validation'],
      techStack: ['PostgreSQL', 'Apache Spark', 'XGBoost'],
      accuracy: '25M+ users trust our predictions'
    },
    {
      title: 'Smart Trade Analyzer',
      icon: '🔄',
      description: 'AI evaluates trade scenarios considering future projections and team synergies',
      aiCapabilities: ['Multi-agent simulation', 'Value optimization', 'Risk-reward analysis', 'Scenario modeling'],
      techStack: ['Neural Networks', 'Monte Carlo', 'Game Theory'],
      accuracy: '90% user satisfaction rate'
    },
    {
      title: 'Injury Risk Assessment',
      icon: '⚕️',
      description: 'AI models predict injury likelihood based on workload, history, and biomechanics',
      aiCapabilities: ['Pattern recognition', 'Medical data analysis', 'Risk scoring', 'Early warning systems'],
      techStack: ['Computer Vision', 'Medical AI', 'Time Series'],
      accuracy: '78% injury prediction accuracy'
    }
  ];

  const aiMetrics = [
    {
      title: 'AI-Powered Predictions',
      value: '50M+',
      description: 'Daily predictions generated',
      growth: '+35% accuracy improvement'
    },
    {
      title: 'Machine Learning Models',
      value: '12',
      description: 'Active ML models in production',
      growth: 'Real-time updates'
    },
    {
      title: 'Data Points Processed',
      value: '2.5B+',
      description: 'Player statistics analyzed',
      growth: '50ms prediction latency'
    },
    {
      title: 'AI Success Rate',
      value: '87%',
      description: 'Average prediction accuracy',
      growth: 'Continuously improving'
    }
  ];

  $: currentSport = aiFantasySports.find(s => s.id === selectedSport) || aiFantasySports[0];
</script>

<svelte:head>
  <title>ESPN Fantasy Sports AI Assistant | Disney AI Hub</title>
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-purple-700 via-blue-700 to-purple-800 text-white">
  <div class="absolute inset-0 opacity-10">
    <div class="grid grid-cols-8 gap-2 p-4">
      {#each Array(64) as _, i}
        <div class="text-2xl animate-pulse" style="animation-delay: {i * 0.05}s">
          {['🤖', '🧠', '📊', '⚡', '🎯', '📈', '🔬', '💡'][i % 8]}
        </div>
      {/each}
    </div>
  </div>
  
  <div class="relative z-10 container mx-auto px-4 py-20">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
        Fantasy Sports AI Assistant
      </h1>
      <p class="text-2xl md:text-3xl mb-8 text-purple-100">
        AI-Powered Fantasy Sports Intelligence
      </p>
      <div class="flex flex-wrap gap-4 justify-center mb-8">
        <a 
          href="/disney/use-cases?division=ESPN"
          class="bg-white text-purple-700 px-8 py-4 rounded-full font-bold hover:bg-purple-100 transition-all transform hover:scale-105 text-lg shadow-xl"
        >
          View AI Use Cases
        </a>
        <button class="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-purple-700 transition-all text-lg">
          Try AI Assistant
        </button>
      </div>
      <div class="flex items-center justify-center gap-8 text-lg">
        <span class="flex items-center">
          <span class="text-3xl mr-2">🤖</span>
          <span>AI-Powered</span>
        </span>
        <span class="flex items-center">
          <span class="text-3xl mr-2">📊</span>
          <span>87% Accuracy</span>
        </span>
        <span class="flex items-center">
          <span class="text-3xl mr-2">⚡</span>
          <span>Real-time Analysis</span>
        </span>
      </div>
    </div>
  </div>
</section>

<!-- AI Fantasy Sports Selection -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold mb-4 text-center text-gray-900">AI-Enhanced Fantasy Sports</h2>
  <p class="text-xl text-gray-600 text-center mb-12">Experience the power of machine learning in fantasy sports</p>
  
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
    {#each aiFantasySports as sport}
      <button 
        class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 {selectedSport === sport.id ? 'ring-4 ring-purple-500' : ''}"
        on:click={() => selectedSport = sport.id}
      >
        <div class="absolute inset-0 bg-gradient-to-br {sport.color}"></div>
        <div class="relative z-10 p-6 text-white">
          <div class="text-4xl mb-2">{sport.icon}</div>
          <h3 class="font-bold text-lg mb-1 text-white">{sport.name}</h3>
          <p class="text-sm opacity-90">{sport.accuracy}</p>
          <p class="text-xs mt-2 bg-white/20 rounded-full px-3 py-1 inline-block">
            {sport.users}
          </p>
        </div>
      </button>
    {/each}
  </div>

  <!-- Selected Sport AI Details -->
  <div class="bg-gradient-to-r {currentSport.color} rounded-3xl p-8 text-white">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 class="text-2xl font-bold mb-4 flex items-center">
          <span class="text-4xl mr-3">{currentSport.icon}</span>
          AI Capabilities
        </h3>
        <ul class="space-y-3">
          {#each currentSport.aiFeatures as feature}
            <li class="flex items-center">
              <span class="w-2 h-2 bg-white rounded-full mr-3"></span>
              <span class="text-lg text-white">{feature}</span>
            </li>
          {/each}
        </ul>
      </div>
      <div>
        <h3 class="text-2xl font-bold mb-4 text-white">AI Performance</h3>
        <div class="space-y-4">
          <div class="bg-white/20 rounded-lg p-4">
            <div class="text-3xl font-bold text-white">{currentSport.accuracy}</div>
            <div class="text-sm opacity-90">Prediction Accuracy</div>
          </div>
          <div class="bg-white/20 rounded-lg p-4">
            <div class="text-lg font-bold text-white">{currentSport.users}</div>
            <div class="text-sm opacity-90">AI-Assisted Users</div>
          </div>
        </div>
        <a 
          href="/disney/use-cases?division=ESPN"
          class="mt-6 bg-white text-purple-700 px-6 py-3 rounded-full font-bold hover:bg-purple-100 transition-colors inline-block"
        >
          Learn More About Our AI →
        </a>
      </div>
    </div>
  </div>
</section>

<!-- AI Tools -->
<section class="bg-gray-50 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-4 text-center text-gray-900">AI-Powered Fantasy Tools</h2>
    <p class="text-xl text-gray-600 text-center mb-12">Advanced machine learning models driving fantasy sports innovation</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each aiTools as tool}
        <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6 border-2 border-transparent hover:border-purple-500">
          <div class="flex items-start space-x-4">
            <span class="text-4xl">{tool.icon}</span>
            <div class="flex-1">
              <h3 class="font-bold text-xl mb-2 text-gray-900">{tool.title}</h3>
              <p class="text-gray-600 mb-4">{tool.description}</p>
              
              <!-- AI Capabilities -->
              <div class="mb-4">
                <h4 class="font-semibold text-sm mb-2 text-purple-700">AI Capabilities</h4>
                <div class="flex flex-wrap gap-2">
                  {#each tool.aiCapabilities as capability}
                    <span class="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                      {capability}
                    </span>
                  {/each}
                </div>
              </div>
              
              <!-- Tech Stack -->
              <div class="mb-4">
                <h4 class="font-semibold text-sm mb-2 text-green-700">Tech Stack</h4>
                <div class="flex flex-wrap gap-2">
                  {#each tool.techStack as tech}
                    <span class="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  {/each}
                </div>
              </div>
              
              <!-- Performance Metric -->
              <div class="bg-purple-50 rounded-lg p-3">
                <div class="font-bold text-purple-700">{tool.accuracy}</div>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- AI Metrics -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12">
    <h2 class="text-3xl font-bold mb-8 text-center text-white">AI Performance Metrics</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each aiMetrics as metric}
        <div class="bg-white/10 backdrop-blur rounded-xl p-6 text-white hover:bg-white/20 transition-all">
          <div class="text-center">
            <div class="text-4xl font-bold mb-2">{metric.value}</div>
            <h3 class="font-bold text-lg mb-2">{metric.title}</h3>
            <p class="text-sm opacity-90 mb-4">{metric.description}</p>
            <div class="text-xs bg-white/20 rounded-full px-3 py-1 inline-block">
              {metric.growth}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- AI Technology Deep Dive -->
<section class="bg-gradient-to-br from-gray-900 to-black text-white py-16">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="text-3xl font-bold mb-6 text-white">AI Technology Stack</h2>
        <p class="text-xl mb-8 text-gray-300">
          Powering fantasy sports with cutting-edge artificial intelligence
        </p>
        <ul class="space-y-4 mb-8">
          <li class="flex items-center">
            <span class="text-2xl mr-4">🧠</span>
            <span class="text-lg text-white">Machine learning prediction models</span>
          </li>
          <li class="flex items-center">
            <span class="text-2xl mr-4">📊</span>
            <span class="text-lg text-white">Real-time data processing pipelines</span>
          </li>
          <li class="flex items-center">
            <span class="text-2xl mr-4">🔬</span>
            <span class="text-lg text-white">Advanced statistical analysis</span>
          </li>
          <li class="flex items-center">
            <span class="text-2xl mr-4">⚡</span>
            <span class="text-lg text-white">50ms prediction latency</span>
          </li>
        </ul>
        <div class="flex gap-4">
          <a 
            href="/disney/use-cases?division=ESPN"
            class="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors flex items-center"
          >
            <span class="mr-2">📋</span>
            View Use Cases
          </a>
          <a 
            href="/disney/espn"
            class="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-black transition-colors flex items-center"
          >
            <span class="mr-2">🏠</span>
            Back to ESPN
          </a>
        </div>
      </div>
      <div class="text-center">
        <div class="relative inline-block">
          <div class="absolute inset-0 bg-purple-600 rounded-3xl blur-3xl opacity-50"></div>
          <div class="relative bg-gradient-to-br from-purple-500 to-blue-600 rounded-3xl p-8">
            <span class="text-9xl">🤖</span>
            <div class="mt-4">
              <div class="text-2xl font-bold text-white">Fantasy Sports AI</div>
              <div class="text-lg opacity-90 text-white">Assistant</div>
            </div>
            <div class="mt-4 bg-white/20 rounded-lg p-3">
              <div class="text-sm text-white">Deployed • ESPN Division</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- AI Impact Stats -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold mb-12 text-center text-gray-900">AI Impact Metrics</h2>
  
  <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
    <div class="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-6">
      <div class="text-4xl font-bold mb-2 text-purple-600">87%</div>
      <div class="text-gray-700">Prediction Accuracy</div>
    </div>
    <div class="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-6">
      <div class="text-4xl font-bold mb-2 text-green-600">45%</div>
      <div class="text-gray-700">Performance Improvement</div>
    </div>
    <div class="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-6">
      <div class="text-4xl font-bold mb-2 text-orange-600">25M+</div>
      <div class="text-gray-700">AI Users</div>
    </div>
    <div class="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-6">
      <div class="text-4xl font-bold mb-2 text-blue-600">50ms</div>
      <div class="text-gray-700">Response Time</div>
    </div>
  </div>
</section>


<style>
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    animation: fade-in 0.5s ease-out;
  }
</style>