import { c as create_ssr_component, b as each, e as escape } from "../../../../../chunks/ssr.js";
const css = {
  code: "@keyframes svelte-qqgiyf-float{0%,100%{transform:translateY(0px)}50%{transform:translateY(-10px)}}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import { onMount } from 'svelte';\\n  \\n  const aiFeatures = [\\n    {\\n      name: 'Personalized Content Recommendations',\\n      description: 'AI analyzes your viewing habits and favorite teams to curate a custom sports feed just for you',\\n      icon: '🎯',\\n      benefits: [\\n        'Custom home screen based on your interests',\\n        'Smart notifications for must-see moments',\\n        'Discover new sports and teams you\\\\'ll love',\\n        'Prioritized highlights from your favorite athletes',\\n        'Context-aware suggestions based on season',\\n        'Cross-sport recommendations to expand horizons'\\n      ],\\n      technology: 'Machine Learning & Collaborative Filtering'\\n    },\\n    {\\n      name: 'AI-Generated Highlight Reels',\\n      description: 'Intelligent video processing creates personalized highlight packages in real-time',\\n      icon: '🎬',\\n      benefits: [\\n        'Instant game recaps tailored to your preferences',\\n        'Key moment detection and compilation',\\n        'Player-specific highlight packages',\\n        'Custom duration options (30s to 10min)',\\n        'Smart transitions and pacing',\\n        'Multi-angle best view selection'\\n      ],\\n      technology: 'Computer Vision & Video Analytics'\\n    },\\n    {\\n      name: 'Fantasy Sports Predictive Analytics',\\n      description: 'Advanced AI models provide data-driven insights for fantasy sports success',\\n      icon: '📊',\\n      benefits: [\\n        'Player performance predictions',\\n        'Injury risk assessment',\\n        'Optimal lineup recommendations',\\n        'Trade value analysis',\\n        'Matchup advantages insights',\\n        'Real-time strategy adjustments'\\n      ],\\n      technology: 'Predictive Modeling & Statistical Analysis'\\n    },\\n    {\\n      name: 'Smart Stats & Insights',\\n      description: 'AI-powered analytics transform raw data into actionable sports intelligence',\\n      icon: '🧠',\\n      benefits: [\\n        'Advanced player performance metrics',\\n        'Team chemistry analysis',\\n        'Historical pattern recognition',\\n        'Contextual stat explanations',\\n        'Predictive game outcomes',\\n        'Hidden correlation discoveries'\\n      ],\\n      technology: 'Deep Learning & Natural Language Processing'\\n    }\\n  ];\\n\\n  const aiUseCases = [\\n    {\\n      title: 'Morning Briefing',\\n      description: 'Wake up to AI-curated highlights from overnight games',\\n      icon: '☀️',\\n      example: 'Personalized 5-minute recap of last night\\\\'s action'\\n    },\\n    {\\n      title: 'Game Day Companion',\\n      description: 'Real-time insights and predictions during live games',\\n      icon: '🏈',\\n      example: 'Live win probability and key player impact analysis'\\n    },\\n    {\\n      title: 'Fantasy Assistant',\\n      description: 'AI coach provides lineup optimization and trade advice',\\n      icon: '🏆',\\n      example: 'Start/sit recommendations based on 50+ data points'\\n    },\\n    {\\n      title: 'Discovery Mode',\\n      description: 'Find new sports and athletes based on your preferences',\\n      icon: '🔍',\\n      example: 'If you like NBA, you might enjoy EuroLeague basketball'\\n    },\\n    {\\n      title: 'Stats Storyteller',\\n      description: 'Complex statistics explained in simple, engaging narratives',\\n      icon: '📖',\\n      example: 'Why this pitcher\\\\'s spin rate matters for tonight\\\\'s game'\\n    },\\n    {\\n      title: 'Highlight Hunter',\\n      description: 'Never miss a spectacular play from any sport',\\n      icon: '🎪',\\n      example: 'Top 10 plays across all sports, personalized for you'\\n    }\\n  ];\\n\\n  const aiTechStack = [\\n    {\\n      category: 'Computer Vision',\\n      title: 'Action Recognition',\\n      description: 'Identifies key plays and moments in real-time',\\n      capabilities: ['Player tracking', 'Ball detection', 'Score changes', 'Celebration detection'],\\n      accuracy: '97%'\\n    },\\n    {\\n      category: 'NLP',\\n      title: 'Commentary Analysis',\\n      description: 'Processes live commentary for instant insights',\\n      capabilities: ['Sentiment analysis', 'Key quote extraction', 'Play-by-play summaries', 'Multi-language support'],\\n      accuracy: '94%'\\n    },\\n    {\\n      category: 'ML Models',\\n      title: 'Predictive Engine',\\n      description: 'Forecasts game outcomes and player performance',\\n      capabilities: ['Win probability', 'Player projections', 'Injury likelihood', 'Team momentum'],\\n      accuracy: '89%'\\n    },\\n    {\\n      category: 'Deep Learning',\\n      title: 'Pattern Recognition',\\n      description: 'Discovers hidden patterns in sports data',\\n      capabilities: ['Play style analysis', 'Team strategies', 'Historical comparisons', 'Anomaly detection'],\\n      accuracy: '92%'\\n    }\\n  ];\\n\\n  const realWorldImpact = [\\n    { metric: '73%', description: 'Increase in user engagement with AI recommendations' },\\n    { metric: '4.8/5', description: 'Average rating for AI-generated highlights' },\\n    { metric: '62%', description: 'Fantasy players using AI insights win more often' },\\n    { metric: '89%', description: 'Accuracy in predicting game-changing moments' },\\n    { metric: '45min', description: 'Average additional viewing time per user' },\\n    { metric: '91%', description: 'Users discover new favorite teams through AI' }\\n  ];\\n\\n  let selectedFeature = 0;\\n  let mouseX = 0;\\n  let mouseY = 0;\\n\\n  onMount(() => {\\n    const handleMouseMove = (e) => {\\n      mouseX = e.clientX;\\n      mouseY = e.clientY;\\n    };\\n    \\n    window.addEventListener('mousemove', handleMouseMove);\\n    \\n    return () => {\\n      window.removeEventListener('mousemove', handleMouseMove);\\n    };\\n  });\\n<\/script>\\n\\n<svelte:head>\\n  <title>ESPN+ AI Features - Personalized Sports Intelligence | Disney</title>\\n</svelte:head>\\n\\n<!-- Hero Section -->\\n<section class=\\"relative overflow-hidden bg-gradient-to-br from-gray-900 via-red-900 to-black text-white\\">\\n  <div class=\\"absolute inset-0 opacity-20\\">\\n    <div class=\\"absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2523ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse\\"></div>\\n  </div>\\n  \\n  <div class=\\"relative z-10 container mx-auto px-4 py-20\\">\\n    <div class=\\"max-w-4xl\\">\\n      <div class=\\"flex items-center space-x-4 mb-6\\">\\n        <span class=\\"bg-red-600 text-white px-4 py-2 rounded-full font-bold text-lg\\">ESPN+</span>\\n        <span class=\\"text-red-400 font-semibold\\">Premium Streaming</span>\\n      </div>\\n      \\n      <h1 class=\\"text-5xl md:text-7xl font-bold mb-6\\">\\n        AI-Powered<br/>\\n        Sports Intelligence.<br/>\\n        <span class=\\"text-red-500\\">Just for You.</span>\\n      </h1>\\n      \\n      <p class=\\"text-xl md:text-2xl mb-8 text-gray-200\\">\\n        Experience sports like never before with personalized recommendations, AI-generated highlights, and predictive analytics.\\n      </p>\\n      \\n      \\n      <div class=\\"flex flex-wrap gap-4 mb-8\\">\\n        <a href=\\"/disney/espn\\" class=\\"bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center\\">\\n          Explore ESPN AI Use Cases\\n          <svg class=\\"w-5 h-5 ml-2\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\">\\n            <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M13 7l5 5m0 0l-5 5m5-5H6\\"></path>\\n          </svg>\\n        </a>\\n        <button class=\\"bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors\\">\\n          Watch AI Demo\\n        </button>\\n      </div>\\n      \\n      <div class=\\"flex items-center space-x-6 text-sm text-gray-300\\">\\n        <span class=\\"flex items-center\\">\\n          <svg class=\\"w-5 h-5 mr-2\\" fill=\\"currentColor\\" viewBox=\\"0 0 20 20\\">\\n            <path fill-rule=\\"evenodd\\" d=\\"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z\\" clip-rule=\\"evenodd\\"></path>\\n          </svg>\\n          Personalized Experience\\n        </span>\\n        <span class=\\"flex items-center\\">\\n          <svg class=\\"w-5 h-5 mr-2\\" fill=\\"currentColor\\" viewBox=\\"0 0 20 20\\">\\n            <path fill-rule=\\"evenodd\\" d=\\"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z\\" clip-rule=\\"evenodd\\"></path>\\n          </svg>\\n          Real-time Analytics\\n        </span>\\n        <span class=\\"flex items-center\\">\\n          <svg class=\\"w-5 h-5 mr-2\\" fill=\\"currentColor\\" viewBox=\\"0 0 20 20\\">\\n            <path fill-rule=\\"evenodd\\" d=\\"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z\\" clip-rule=\\"evenodd\\"></path>\\n          </svg>\\n          Smart Recommendations\\n        </span>\\n      </div>\\n    </div>\\n  </div>\\n</section>\\n\\n<!-- AI Features -->\\n<section class=\\"container mx-auto px-4 py-16\\">\\n  <div class=\\"text-center mb-12\\">\\n    <h2 class=\\"text-4xl font-bold mb-4 text-gray-900\\">AI-Powered Features</h2>\\n    <p class=\\"text-xl text-gray-600\\">Transforming how you experience sports with cutting-edge artificial intelligence</p>\\n  </div>\\n  \\n  <div class=\\"grid grid-cols-1 md:grid-cols-2 gap-8\\">\\n    {#each aiFeatures as feature, index}\\n      <div class=\\"bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer\\"\\n           on:click={() => selectedFeature = index}\\n           class:ring-4={selectedFeature === index}\\n           class:ring-red-500={selectedFeature === index}>\\n        <div class=\\"p-8\\">\\n          <div class=\\"flex items-center mb-4\\">\\n            <span class=\\"text-4xl mr-4\\">{feature.icon}</span>\\n            <div>\\n              <h3 class=\\"text-2xl font-bold text-gray-900\\">{feature.name}</h3>\\n              <span class=\\"text-sm text-red-600 font-semibold\\">{feature.technology}</span>\\n            </div>\\n          </div>\\n          \\n          <p class=\\"text-gray-600 mb-6\\">{feature.description}</p>\\n          \\n          <ul class=\\"space-y-2\\">\\n            {#each feature.benefits as benefit}\\n              <li class=\\"flex items-start\\">\\n                <svg class=\\"w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0\\" fill=\\"currentColor\\" viewBox=\\"0 0 20 20\\">\\n                  <path fill-rule=\\"evenodd\\" d=\\"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z\\" clip-rule=\\"evenodd\\"></path>\\n                </svg>\\n                <span class=\\"text-gray-700\\">{benefit}</span>\\n              </li>\\n            {/each}\\n          </ul>\\n        </div>\\n      </div>\\n    {/each}\\n  </div>\\n</section>\\n\\n<!-- AI Use Cases -->\\n<section class=\\"bg-gradient-to-br from-gray-50 to-gray-100 py-16\\">\\n  <div class=\\"container mx-auto px-4\\">\\n    <div class=\\"text-center mb-12\\">\\n      <h2 class=\\"text-4xl font-bold mb-4 text-gray-900\\">AI in Action</h2>\\n      <p class=\\"text-xl text-gray-600\\">Real-world applications enhancing your sports experience</p>\\n    </div>\\n    \\n    <div class=\\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6\\">\\n      {#each aiUseCases as useCase}\\n        <div class=\\"bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6\\">\\n          <div class=\\"text-3xl mb-4\\">{useCase.icon}</div>\\n          <h3 class=\\"text-xl font-bold mb-2 text-gray-900\\">{useCase.title}</h3>\\n          <p class=\\"text-gray-600 mb-3\\">{useCase.description}</p>\\n          <div class=\\"bg-red-50 text-red-700 p-3 rounded-lg text-sm\\">\\n            <strong>Example:</strong> {useCase.example}\\n          </div>\\n        </div>\\n      {/each}\\n    </div>\\n  </div>\\n</section>\\n\\n<!-- AI Technology Stack -->\\n<section class=\\"container mx-auto px-4 py-16\\">\\n  <h2 class=\\"text-4xl font-bold text-center mb-12 text-gray-900\\">The Technology Behind the Magic</h2>\\n  \\n  <div class=\\"grid grid-cols-1 md:grid-cols-2 gap-6\\">\\n    {#each aiTechStack as tech}\\n      <div class=\\"bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden\\">\\n        <div class=\\"bg-gradient-to-r from-red-600 to-red-700 text-white p-6\\">\\n          <div class=\\"flex items-center justify-between\\">\\n            <div>\\n              <span class=\\"text-sm font-semibold opacity-90\\">{tech.category}</span>\\n              <h3 class=\\"text-2xl font-bold\\">{tech.title}</h3>\\n            </div>\\n            <div class=\\"text-3xl font-bold bg-white bg-opacity-20 rounded-lg px-4 py-2\\">\\n              {tech.accuracy}\\n            </div>\\n          </div>\\n        </div>\\n        <div class=\\"p-6\\">\\n          <p class=\\"text-gray-600 mb-4\\">{tech.description}</p>\\n          <div class=\\"grid grid-cols-2 gap-3\\">\\n            {#each tech.capabilities as capability}\\n              <div class=\\"bg-gray-50 px-3 py-2 rounded-lg text-sm text-gray-700\\">\\n                • {capability}\\n              </div>\\n            {/each}\\n          </div>\\n        </div>\\n      </div>\\n    {/each}\\n  </div>\\n</section>\\n\\n<!-- Real World Impact -->\\n<section class=\\"bg-gray-100 py-16\\">\\n  <div class=\\"container mx-auto px-4\\">\\n    <h2 class=\\"text-4xl font-bold text-center mb-12 text-gray-900\\">Proven Results</h2>\\n    <p class=\\"text-xl text-gray-600 text-center mb-12\\">How AI is transforming the ESPN+ experience</p>\\n    \\n    <div class=\\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto\\">\\n      {#each realWorldImpact as impact}\\n        <div class=\\"bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300\\">\\n          <div class=\\"text-4xl font-bold text-red-600 mb-3\\">{impact.metric}</div>\\n          <p class=\\"text-gray-700\\">{impact.description}</p>\\n        </div>\\n      {/each}\\n    </div>\\n    \\n    <div class=\\"mt-12 bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto\\">\\n      <h3 class=\\"text-2xl font-bold mb-6 text-center text-gray-900\\">What Fans Are Saying</h3>\\n      <div class=\\"grid grid-cols-1 md:grid-cols-2 gap-6\\">\\n        <div class=\\"bg-gray-50 p-6 rounded-xl\\">\\n          <p class=\\"text-gray-700 italic mb-4\\">\\"The AI recommendations are spot on! I've discovered so many amazing games I would have missed.\\"</p>\\n          <p class=\\"text-sm font-semibold text-red-600\\">- Sarah M., Basketball Fan</p>\\n        </div>\\n        <div class=\\"bg-gray-50 p-6 rounded-xl\\">\\n          <p class=\\"text-gray-700 italic mb-4\\">\\"Fantasy football has never been easier. The AI predictions helped me win my league!\\"</p>\\n          <p class=\\"text-sm font-semibold text-red-600\\">- Mike T., Fantasy Sports Player</p>\\n        </div>\\n      </div>\\n    </div>\\n  </div>\\n</section>\\n\\n<!-- Future of Sports AI -->\\n<section class=\\"container mx-auto px-4 py-16\\">\\n  <div class=\\"text-center mb-12\\">\\n    <h2 class=\\"text-4xl font-bold mb-4 text-gray-900\\">The Future of Sports Entertainment</h2>\\n    <p class=\\"text-xl text-gray-600\\">What's next in AI-powered sports experiences</p>\\n  </div>\\n  \\n  <div class=\\"bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 md:p-12 text-white\\">\\n    <div class=\\"grid grid-cols-1 md:grid-cols-2 gap-8\\">\\n      <div>\\n        <h3 class=\\"text-2xl font-bold mb-6\\">Coming Soon</h3>\\n        <ul class=\\"space-y-4\\">\\n          <li class=\\"flex items-start\\">\\n            <span class=\\"text-2xl mr-4\\">🎙️</span>\\n            <div>\\n              <h4 class=\\"font-bold mb-1\\">AI Commentary Customization</h4>\\n              <p class=\\"text-gray-300 text-sm\\">Choose your preferred commentary style and language in real-time</p>\\n            </div>\\n          </li>\\n          <li class=\\"flex items-start\\">\\n            <span class=\\"text-2xl mr-4\\">🏃</span>\\n            <div>\\n              <h4 class=\\"font-bold mb-1\\">Motion Capture Analytics</h4>\\n              <p class=\\"text-gray-300 text-sm\\">Advanced biomechanics analysis for every athlete</p>\\n            </div>\\n          </li>\\n          <li class=\\"flex items-start\\">\\n            <span class=\\"text-2xl mr-4\\">🌐</span>\\n            <div>\\n              <h4 class=\\"font-bold mb-1\\">Virtual Reality Integration</h4>\\n              <p class=\\"text-gray-300 text-sm\\">Experience games from any angle with AI-enhanced VR</p>\\n            </div>\\n          </li>\\n        </ul>\\n      </div>\\n      \\n      <div>\\n        <h3 class=\\"text-2xl font-bold mb-6\\">Research & Development</h3>\\n        <div class=\\"bg-white bg-opacity-10 rounded-xl p-6\\">\\n          <div class=\\"mb-4\\">\\n            <div class=\\"flex justify-between text-sm mb-2\\">\\n              <span>AI Model Accuracy</span>\\n              <span>92%</span>\\n            </div>\\n            <div class=\\"bg-white bg-opacity-20 rounded-full h-3\\">\\n              <div class=\\"bg-red-500 h-3 rounded-full\\" style=\\"width: 92%\\"></div>\\n            </div>\\n          </div>\\n          <div class=\\"mb-4\\">\\n            <div class=\\"flex justify-between text-sm mb-2\\">\\n              <span>Processing Speed</span>\\n              <span>0.3s</span>\\n            </div>\\n            <div class=\\"bg-white bg-opacity-20 rounded-full h-3\\">\\n              <div class=\\"bg-red-500 h-3 rounded-full\\" style=\\"width: 95%\\"></div>\\n            </div>\\n          </div>\\n          <div>\\n            <div class=\\"flex justify-between text-sm mb-2\\">\\n              <span>User Satisfaction</span>\\n              <span>4.8/5</span>\\n            </div>\\n            <div class=\\"bg-white bg-opacity-20 rounded-full h-3\\">\\n              <div class=\\"bg-red-500 h-3 rounded-full\\" style=\\"width: 96%\\"></div>\\n            </div>\\n          </div>\\n        </div>\\n      </div>\\n    </div>\\n  </div>\\n</section>\\n\\n<!-- Why AI Matters -->\\n<section class=\\"bg-gradient-to-br from-red-600 to-red-800 text-white py-16\\">\\n  <div class=\\"container mx-auto px-4\\">\\n    <h2 class=\\"text-4xl font-bold text-center mb-12\\">Why AI-Powered Sports?</h2>\\n    \\n    <div class=\\"grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto\\">\\n      <div class=\\"text-center\\">\\n        <div class=\\"bg-white bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4\\">\\n          <span class=\\"text-3xl\\">⚡</span>\\n        </div>\\n        <h3 class=\\"text-xl font-bold mb-2\\">Instant Insights</h3>\\n        <p class=\\"text-red-100\\">Get real-time analysis and predictions as the action unfolds.</p>\\n      </div>\\n      \\n      <div class=\\"text-center\\">\\n        <div class=\\"bg-white bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4\\">\\n          <span class=\\"text-3xl\\">🎯</span>\\n        </div>\\n        <h3 class=\\"text-xl font-bold mb-2\\">Perfect Personalization</h3>\\n        <p class=\\"text-red-100\\">AI learns your preferences to deliver exactly what you want to see.</p>\\n      </div>\\n      \\n      <div class=\\"text-center\\">\\n        <div class=\\"bg-white bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4\\">\\n          <span class=\\"text-3xl\\">📈</span>\\n        </div>\\n        <h3 class=\\"text-xl font-bold mb-2\\">Data-Driven Decisions</h3>\\n        <p class=\\"text-red-100\\">Make smarter fantasy picks with AI-powered predictive analytics.</p>\\n      </div>\\n    </div>\\n  </div>\\n</section>\\n\\n<!-- CTA Section -->\\n<section class=\\"container mx-auto px-4 py-16\\">\\n  <div class=\\"bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 md:p-12 text-white text-center\\">\\n    <h2 class=\\"text-4xl font-bold mb-4\\">Experience the Future of Sports</h2>\\n    <p class=\\"text-xl mb-8 text-gray-300\\">Discover how AI is revolutionizing sports entertainment at ESPN</p>\\n    \\n    <div class=\\"flex flex-col sm:flex-row gap-4 justify-center\\">\\n      <a href=\\"/disney/espn\\" class=\\"bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center justify-center\\">\\n        Explore ESPN AI Use Cases\\n        <svg class=\\"w-5 h-5 ml-2\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\">\\n          <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M13 7l5 5m0 0l-5 5m5-5H6\\"></path>\\n        </svg>\\n      </a>\\n      <button class=\\"bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors\\">\\n        Request AI Demo\\n      </button>\\n    </div>\\n    \\n    <p class=\\"mt-8 text-sm text-gray-400\\">\\n      Learn how ESPN is using AI to enhance fan experiences worldwide.\\n    </p>\\n  </div>\\n</section>\\n\\n<style>\\n  @keyframes float {\\n    0%, 100% { transform: translateY(0px); }\\n    50% { transform: translateY(-10px); }\\n  }\\n</style>"],"names":[],"mappings":"AAgeE,WAAW,mBAAM,CACf,EAAE,CAAE,IAAK,CAAE,SAAS,CAAE,WAAW,GAAG,CAAG,CACvC,GAAI,CAAE,SAAS,CAAE,WAAW,KAAK,CAAG,CACtC"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const aiFeatures = [
    {
      name: "Personalized Content Recommendations",
      description: "AI analyzes your viewing habits and favorite teams to curate a custom sports feed just for you",
      icon: "🎯",
      benefits: [
        "Custom home screen based on your interests",
        "Smart notifications for must-see moments",
        "Discover new sports and teams you'll love",
        "Prioritized highlights from your favorite athletes",
        "Context-aware suggestions based on season",
        "Cross-sport recommendations to expand horizons"
      ],
      technology: "Machine Learning & Collaborative Filtering"
    },
    {
      name: "AI-Generated Highlight Reels",
      description: "Intelligent video processing creates personalized highlight packages in real-time",
      icon: "🎬",
      benefits: [
        "Instant game recaps tailored to your preferences",
        "Key moment detection and compilation",
        "Player-specific highlight packages",
        "Custom duration options (30s to 10min)",
        "Smart transitions and pacing",
        "Multi-angle best view selection"
      ],
      technology: "Computer Vision & Video Analytics"
    },
    {
      name: "Fantasy Sports Predictive Analytics",
      description: "Advanced AI models provide data-driven insights for fantasy sports success",
      icon: "📊",
      benefits: [
        "Player performance predictions",
        "Injury risk assessment",
        "Optimal lineup recommendations",
        "Trade value analysis",
        "Matchup advantages insights",
        "Real-time strategy adjustments"
      ],
      technology: "Predictive Modeling & Statistical Analysis"
    },
    {
      name: "Smart Stats & Insights",
      description: "AI-powered analytics transform raw data into actionable sports intelligence",
      icon: "🧠",
      benefits: [
        "Advanced player performance metrics",
        "Team chemistry analysis",
        "Historical pattern recognition",
        "Contextual stat explanations",
        "Predictive game outcomes",
        "Hidden correlation discoveries"
      ],
      technology: "Deep Learning & Natural Language Processing"
    }
  ];
  const aiUseCases = [
    {
      title: "Morning Briefing",
      description: "Wake up to AI-curated highlights from overnight games",
      icon: "☀️",
      example: "Personalized 5-minute recap of last night's action"
    },
    {
      title: "Game Day Companion",
      description: "Real-time insights and predictions during live games",
      icon: "🏈",
      example: "Live win probability and key player impact analysis"
    },
    {
      title: "Fantasy Assistant",
      description: "AI coach provides lineup optimization and trade advice",
      icon: "🏆",
      example: "Start/sit recommendations based on 50+ data points"
    },
    {
      title: "Discovery Mode",
      description: "Find new sports and athletes based on your preferences",
      icon: "🔍",
      example: "If you like NBA, you might enjoy EuroLeague basketball"
    },
    {
      title: "Stats Storyteller",
      description: "Complex statistics explained in simple, engaging narratives",
      icon: "📖",
      example: "Why this pitcher's spin rate matters for tonight's game"
    },
    {
      title: "Highlight Hunter",
      description: "Never miss a spectacular play from any sport",
      icon: "🎪",
      example: "Top 10 plays across all sports, personalized for you"
    }
  ];
  const aiTechStack = [
    {
      category: "Computer Vision",
      title: "Action Recognition",
      description: "Identifies key plays and moments in real-time",
      capabilities: [
        "Player tracking",
        "Ball detection",
        "Score changes",
        "Celebration detection"
      ],
      accuracy: "97%"
    },
    {
      category: "NLP",
      title: "Commentary Analysis",
      description: "Processes live commentary for instant insights",
      capabilities: [
        "Sentiment analysis",
        "Key quote extraction",
        "Play-by-play summaries",
        "Multi-language support"
      ],
      accuracy: "94%"
    },
    {
      category: "ML Models",
      title: "Predictive Engine",
      description: "Forecasts game outcomes and player performance",
      capabilities: [
        "Win probability",
        "Player projections",
        "Injury likelihood",
        "Team momentum"
      ],
      accuracy: "89%"
    },
    {
      category: "Deep Learning",
      title: "Pattern Recognition",
      description: "Discovers hidden patterns in sports data",
      capabilities: [
        "Play style analysis",
        "Team strategies",
        "Historical comparisons",
        "Anomaly detection"
      ],
      accuracy: "92%"
    }
  ];
  const realWorldImpact = [
    {
      metric: "73%",
      description: "Increase in user engagement with AI recommendations"
    },
    {
      metric: "4.8/5",
      description: "Average rating for AI-generated highlights"
    },
    {
      metric: "62%",
      description: "Fantasy players using AI insights win more often"
    },
    {
      metric: "89%",
      description: "Accuracy in predicting game-changing moments"
    },
    {
      metric: "45min",
      description: "Average additional viewing time per user"
    },
    {
      metric: "91%",
      description: "Users discover new favorite teams through AI"
    }
  ];
  let selectedFeature = 0;
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-e8z3ng_START -->${$$result.title = `<title>ESPN+ AI Features - Personalized Sports Intelligence | Disney</title>`, ""}<!-- HEAD_svelte-e8z3ng_END -->`, ""}  <section class="relative overflow-hidden bg-gradient-to-br from-gray-900 via-red-900 to-black text-white" data-svelte-h="svelte-z2kos4"><div class="absolute inset-0 opacity-20"><div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2523ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div></div> <div class="relative z-10 container mx-auto px-4 py-20"><div class="max-w-4xl"><div class="flex items-center space-x-4 mb-6"><span class="bg-red-600 text-white px-4 py-2 rounded-full font-bold text-lg">ESPN+</span> <span class="text-red-400 font-semibold">Premium Streaming</span></div> <h1 class="text-5xl md:text-7xl font-bold mb-6">AI-Powered<br>
        Sports Intelligence.<br> <span class="text-red-500">Just for You.</span></h1> <p class="text-xl md:text-2xl mb-8 text-gray-200">Experience sports like never before with personalized recommendations, AI-generated highlights, and predictive analytics.</p> <div class="flex flex-wrap gap-4 mb-8"><a href="/disney/espn" class="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center">Explore ESPN AI Use Cases
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg></a> <button class="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Watch AI Demo</button></div> <div class="flex items-center space-x-6 text-sm text-gray-300"><span class="flex items-center"><svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
          Personalized Experience</span> <span class="flex items-center"><svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
          Real-time Analytics</span> <span class="flex items-center"><svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
          Smart Recommendations</span></div></div></div></section>  <section class="container mx-auto px-4 py-16"><div class="text-center mb-12" data-svelte-h="svelte-1qyfgpc"><h2 class="text-4xl font-bold mb-4 text-gray-900">AI-Powered Features</h2> <p class="text-xl text-gray-600">Transforming how you experience sports with cutting-edge artificial intelligence</p></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8">${each(aiFeatures, (feature, index) => {
    return `<div class="${[
      "bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer",
      (selectedFeature === index ? "ring-4" : "") + " " + (selectedFeature === index ? "ring-red-500" : "")
    ].join(" ").trim()}"><div class="p-8"><div class="flex items-center mb-4"><span class="text-4xl mr-4">${escape(feature.icon)}</span> <div><h3 class="text-2xl font-bold text-gray-900">${escape(feature.name)}</h3> <span class="text-sm text-red-600 font-semibold">${escape(feature.technology)}</span> </div></div> <p class="text-gray-600 mb-6">${escape(feature.description)}</p> <ul class="space-y-2">${each(feature.benefits, (benefit) => {
      return `<li class="flex items-start"><svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> <span class="text-gray-700">${escape(benefit)}</span> </li>`;
    })} </ul></div> </div>`;
  })}</div></section>  <section class="bg-gradient-to-br from-gray-50 to-gray-100 py-16"><div class="container mx-auto px-4"><div class="text-center mb-12" data-svelte-h="svelte-1ogvyub"><h2 class="text-4xl font-bold mb-4 text-gray-900">AI in Action</h2> <p class="text-xl text-gray-600">Real-world applications enhancing your sports experience</p></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">${each(aiUseCases, (useCase) => {
    return `<div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6"><div class="text-3xl mb-4">${escape(useCase.icon)}</div> <h3 class="text-xl font-bold mb-2 text-gray-900">${escape(useCase.title)}</h3> <p class="text-gray-600 mb-3">${escape(useCase.description)}</p> <div class="bg-red-50 text-red-700 p-3 rounded-lg text-sm"><strong data-svelte-h="svelte-dxly1o">Example:</strong> ${escape(useCase.example)}</div> </div>`;
  })}</div></div></section>  <section class="container mx-auto px-4 py-16"><h2 class="text-4xl font-bold text-center mb-12 text-gray-900" data-svelte-h="svelte-1jpfqcg">The Technology Behind the Magic</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6">${each(aiTechStack, (tech) => {
    return `<div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"><div class="bg-gradient-to-r from-red-600 to-red-700 text-white p-6"><div class="flex items-center justify-between"><div><span class="text-sm font-semibold opacity-90">${escape(tech.category)}</span> <h3 class="text-2xl font-bold">${escape(tech.title)}</h3></div> <div class="text-3xl font-bold bg-white bg-opacity-20 rounded-lg px-4 py-2">${escape(tech.accuracy)}</div> </div></div> <div class="p-6"><p class="text-gray-600 mb-4">${escape(tech.description)}</p> <div class="grid grid-cols-2 gap-3">${each(tech.capabilities, (capability) => {
      return `<div class="bg-gray-50 px-3 py-2 rounded-lg text-sm text-gray-700">• ${escape(capability)} </div>`;
    })} </div></div> </div>`;
  })}</div></section>  <section class="bg-gray-100 py-16"><div class="container mx-auto px-4"><h2 class="text-4xl font-bold text-center mb-12 text-gray-900" data-svelte-h="svelte-1qv9vmr">Proven Results</h2> <p class="text-xl text-gray-600 text-center mb-12" data-svelte-h="svelte-1iz188j">How AI is transforming the ESPN+ experience</p> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">${each(realWorldImpact, (impact) => {
    return `<div class="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300"><div class="text-4xl font-bold text-red-600 mb-3">${escape(impact.metric)}</div> <p class="text-gray-700">${escape(impact.description)}</p> </div>`;
  })}</div> <div class="mt-12 bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto" data-svelte-h="svelte-1rcl9od"><h3 class="text-2xl font-bold mb-6 text-center text-gray-900">What Fans Are Saying</h3> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="bg-gray-50 p-6 rounded-xl"><p class="text-gray-700 italic mb-4">&quot;The AI recommendations are spot on! I&#39;ve discovered so many amazing games I would have missed.&quot;</p> <p class="text-sm font-semibold text-red-600">- Sarah M., Basketball Fan</p></div> <div class="bg-gray-50 p-6 rounded-xl"><p class="text-gray-700 italic mb-4">&quot;Fantasy football has never been easier. The AI predictions helped me win my league!&quot;</p> <p class="text-sm font-semibold text-red-600">- Mike T., Fantasy Sports Player</p></div></div></div></div></section>  <section class="container mx-auto px-4 py-16" data-svelte-h="svelte-1qet2es"><div class="text-center mb-12"><h2 class="text-4xl font-bold mb-4 text-gray-900">The Future of Sports Entertainment</h2> <p class="text-xl text-gray-600">What&#39;s next in AI-powered sports experiences</p></div> <div class="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 md:p-12 text-white"><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h3 class="text-2xl font-bold mb-6">Coming Soon</h3> <ul class="space-y-4"><li class="flex items-start"><span class="text-2xl mr-4">🎙️</span> <div><h4 class="font-bold mb-1">AI Commentary Customization</h4> <p class="text-gray-300 text-sm">Choose your preferred commentary style and language in real-time</p></div></li> <li class="flex items-start"><span class="text-2xl mr-4">🏃</span> <div><h4 class="font-bold mb-1">Motion Capture Analytics</h4> <p class="text-gray-300 text-sm">Advanced biomechanics analysis for every athlete</p></div></li> <li class="flex items-start"><span class="text-2xl mr-4">🌐</span> <div><h4 class="font-bold mb-1">Virtual Reality Integration</h4> <p class="text-gray-300 text-sm">Experience games from any angle with AI-enhanced VR</p></div></li></ul></div> <div><h3 class="text-2xl font-bold mb-6">Research &amp; Development</h3> <div class="bg-white bg-opacity-10 rounded-xl p-6"><div class="mb-4"><div class="flex justify-between text-sm mb-2"><span>AI Model Accuracy</span> <span>92%</span></div> <div class="bg-white bg-opacity-20 rounded-full h-3"><div class="bg-red-500 h-3 rounded-full" style="width: 92%"></div></div></div> <div class="mb-4"><div class="flex justify-between text-sm mb-2"><span>Processing Speed</span> <span>0.3s</span></div> <div class="bg-white bg-opacity-20 rounded-full h-3"><div class="bg-red-500 h-3 rounded-full" style="width: 95%"></div></div></div> <div><div class="flex justify-between text-sm mb-2"><span>User Satisfaction</span> <span>4.8/5</span></div> <div class="bg-white bg-opacity-20 rounded-full h-3"><div class="bg-red-500 h-3 rounded-full" style="width: 96%"></div></div></div></div></div></div></div></section>  <section class="bg-gradient-to-br from-red-600 to-red-800 text-white py-16" data-svelte-h="svelte-1gj40bc"><div class="container mx-auto px-4"><h2 class="text-4xl font-bold text-center mb-12">Why AI-Powered Sports?</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"><div class="text-center"><div class="bg-white bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4"><span class="text-3xl">⚡</span></div> <h3 class="text-xl font-bold mb-2">Instant Insights</h3> <p class="text-red-100">Get real-time analysis and predictions as the action unfolds.</p></div> <div class="text-center"><div class="bg-white bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4"><span class="text-3xl">🎯</span></div> <h3 class="text-xl font-bold mb-2">Perfect Personalization</h3> <p class="text-red-100">AI learns your preferences to deliver exactly what you want to see.</p></div> <div class="text-center"><div class="bg-white bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4"><span class="text-3xl">📈</span></div> <h3 class="text-xl font-bold mb-2">Data-Driven Decisions</h3> <p class="text-red-100">Make smarter fantasy picks with AI-powered predictive analytics.</p></div></div></div></section>  <section class="container mx-auto px-4 py-16" data-svelte-h="svelte-14zhckb"><div class="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 md:p-12 text-white text-center"><h2 class="text-4xl font-bold mb-4">Experience the Future of Sports</h2> <p class="text-xl mb-8 text-gray-300">Discover how AI is revolutionizing sports entertainment at ESPN</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"><a href="/disney/espn" class="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center justify-center">Explore ESPN AI Use Cases
        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg></a> <button class="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Request AI Demo</button></div> <p class="mt-8 text-sm text-gray-400">Learn how ESPN is using AI to enhance fan experiences worldwide.</p></div> </section>`;
});
export {
  Page as default
};
