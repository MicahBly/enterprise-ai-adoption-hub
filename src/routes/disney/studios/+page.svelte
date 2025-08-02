<script>
  import { onMount } from 'svelte';
  import { fade, fly, scale } from 'svelte/transition';
  
  // Studio AI Overview Data
  const studios = [
    {
      name: 'Walt Disney Animation',
      slug: 'walt-disney-animation',
      icon: '🏰',
      color: 'from-blue-600 to-purple-600',
      description: 'Pioneering AI in traditional and computer animation',
      aiHighlights: [
        'AI-Assisted Storyboarding - 30% faster pre-production',
        'Generative Character Animation - 35% time reduction',
        'AI-Powered Rendering Optimization - 45% faster renders'
      ],
      status: 'Leading',
      tools: 25,
      artistsTrained: 500
    },
    {
      name: 'Pixar Animation Studios',
      slug: 'pixar',
      icon: '💡',
      color: 'from-yellow-500 to-orange-500',
      description: 'Advanced AI research and production innovation',
      aiHighlights: [
        'Neural Scene Understanding for automated lighting',
        'Motion Capture Enhancement - 60% cleanup reduction',
        'Procedural Animation AI for complex effects'
      ],
      status: 'Advanced',
      tools: 25,
      artistsTrained: 500
    },
    {
      name: 'Marvel Studios',
      slug: 'marvel',
      icon: '🦸',
      color: 'from-red-600 to-black',
      description: 'Cutting-edge VFX and digital character creation',
      aiHighlights: [
        'Smart Rotoscoping - 90% time reduction',
        'Digital Doubles for enhanced safety',
        'AI-Enhanced Visual Effects pipeline'
      ],
      status: 'Revolutionary',
      tools: 30,
      artistsTrained: 800
    },
    {
      name: 'Lucasfilm',
      slug: 'lucasfilm',
      icon: '⭐',
      color: 'from-blue-400 to-indigo-600',
      description: 'ILM leading global VFX AI innovation',
      aiHighlights: [
        'StageCraft LED volume technology',
        'AI-powered creature animation',
        'Real-time environment generation'
      ],
      status: 'Industry Pioneer',
      tools: 35,
      artistsTrained: 1000
    },
    {
      name: '20th Century Studios',
      slug: '20th-century',
      icon: '🎬',
      color: 'from-gray-700 to-blue-800',
      description: 'Live-action AI integration and enhancement',
      aiHighlights: [
        'AI script analysis and pre-visualization',
        'Automated color grading and matching',
        'Enhanced post-production workflows'
      ],
      status: 'Expanding',
      tools: 20,
      artistsTrained: 350
    },
    {
      name: 'Searchlight Pictures',
      slug: 'searchlight',
      icon: '🔦',
      color: 'from-amber-600 to-red-600',
      description: 'Boutique AI applications for indie filmmaking',
      aiHighlights: [
        'Budget-conscious AI tools',
        'Streamlined post-production AI',
        'Creative AI assistance for smaller productions'
      ],
      status: 'Emerging',
      tools: 12,
      artistsTrained: 150
    }
  ];

  // Animation and VFX Breakthroughs
  const breakthroughs = [
    {
      title: 'Photorealistic Digital Humans',
      studio: 'Marvel Studios',
      technology: 'Advanced facial mapping AI',
      impact: 'Seamless CGI character integration',
      icon: '👤',
      year: '2024'
    },
    {
      title: 'Real-time Virtual Production',
      studio: 'Lucasfilm (ILM)',
      technology: 'StageCraft AI environments',
      impact: 'In-camera VFX revolution',
      icon: '🎭',
      year: '2024'
    },
    {
      title: 'AI Animation In-betweening',
      studio: 'Walt Disney Animation',
      technology: 'Neural animation interpolation',
      impact: '40% faster character animation',
      icon: '🎨',
      year: '2023'
    },
    {
      title: 'Procedural World Generation',
      studio: 'Pixar',
      technology: 'AI-driven environment creation',
      impact: 'Infinite scalable backgrounds',
      icon: '🌍',
      year: '2023'
    },
    {
      title: 'Intelligent Crowd Simulation',
      studio: 'Marvel Studios',
      technology: 'Autonomous character behavior AI',
      impact: 'Realistic battle sequences',
      icon: '👥',
      year: '2022'
    },
    {
      title: 'AI-Powered De-aging',
      studio: 'Lucasfilm',
      technology: 'Deep learning facial reconstruction',
      impact: 'Seamless timeline storytelling',
      icon: '⏰',
      year: '2022'
    }
  ];

  // Overall AI Stats across all studios
  const overallStats = [
    { label: 'AI Tools Deployed', value: '150+', description: 'Across all studios' },
    { label: 'Production Time Saved', value: '35%', description: 'Average per project' },
    { label: 'Artists Trained', value: '3,300+', description: 'In AI technologies' },
    { label: 'AI-Enhanced Projects', value: '90%', description: 'Of current productions' }
  ];

  // AI Innovation Categories
  const innovationCategories = [
    {
      category: 'Animation & Character',
      description: 'AI-powered character creation and animation',
      technologies: ['Facial Animation AI', 'Motion Capture Enhancement', 'Character Rigging Automation'],
      studios: ['Disney Animation', 'Pixar', 'Marvel'],
      icon: '🎭'
    },
    {
      category: 'Visual Effects & Rendering',
      description: 'Next-generation VFX and rendering optimization',
      technologies: ['Neural Rendering', 'Smart Compositing', 'Real-time Ray Tracing'],
      studios: ['Marvel', 'Lucasfilm', '20th Century'],
      icon: '✨'
    },
    {
      category: 'Production & Workflow',
      description: 'AI streamlining production processes',
      technologies: ['Script Analysis', 'Automated Dailies', 'Predictive Scheduling'],
      studios: ['All Studios'],
      icon: '⚙️'
    },
    {
      category: 'Creative Tools',
      description: 'AI-assisted creative decision making',
      technologies: ['Storyboard Generation', 'Color Palette AI', 'Music Composition'],
      studios: ['Disney Animation', 'Pixar', 'Searchlight'],
      icon: '🎨'
    }
  ];

  let selectedCategory = null;
  let animationProgress = 0;
  
  onMount(() => {
    // Animate progress bars
    const interval = setInterval(() => {
      if (animationProgress < 100) {
        animationProgress += 1;
      } else {
        clearInterval(interval);
      }
    }, 30);
    
    return () => clearInterval(interval);
  });

  function selectCategory(category) {
    selectedCategory = selectedCategory === category ? null : category;
  }
</script>

<svelte:head>
  <title>Disney Studios AI Innovation Hub - Leading Entertainment AI</title>
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white">
  <div class="absolute inset-0 opacity-10">
    <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
  </div>
  
  <div class="relative z-10 container mx-auto px-4 py-20">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-5xl md:text-7xl font-bold mb-6">
        Disney Studios <span class="text-yellow-300">AI Hub</span>
      </h1>
      <p class="text-2xl md:text-3xl mb-8 text-blue-100">
        Where Artificial Intelligence Transforms Storytelling
      </p>
      <p class="text-xl mb-12 max-w-3xl mx-auto">
        Explore how Disney's family of studios is pioneering the future of entertainment 
        through cutting-edge AI technologies that enhance creativity, streamline production, 
        and push the boundaries of visual storytelling.
      </p>
      
      <!-- Global AI Stats -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {#each overallStats as stat}
          <div class="bg-white/20 backdrop-blur rounded-xl p-6" in:scale={{ delay: 200, duration: 500 }}>
            <div class="text-4xl font-bold text-yellow-300">{stat.value}</div>
            <div class="text-sm mt-2 font-semibold">{stat.label}</div>
            <div class="text-xs mt-1 opacity-80">{stat.description}</div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- Studios Overview Grid -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-4xl font-bold text-gray-900 mb-4 text-center">AI Innovation Across Our Studios</h2>
  <p class="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
    Each Disney studio is leveraging AI in unique ways to enhance their creative capabilities and production efficiency
  </p>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each studios as studio, i}
      <a 
        href="/disney/studios/{studio.slug}"
        class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105"
        in:fly={{ y: 50, delay: i * 100, duration: 500 }}
      >
        <div class="bg-gradient-to-r {studio.color} p-6 text-white">
          <div class="flex items-center justify-between mb-4">
            <div class="text-5xl">{studio.icon}</div>
            <span class="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs font-bold">
              {studio.status}
            </span>
          </div>
          <h3 class="text-xl font-bold mb-2">{studio.name}</h3>
          <p class="text-sm opacity-90">{studio.description}</p>
        </div>
        
        <div class="p-6">
          <div class="mb-4">
            <h4 class="font-semibold text-gray-900 mb-2">AI Highlights:</h4>
            <ul class="space-y-1">
              {#each studio.aiHighlights as highlight}
                <li class="text-sm text-gray-600 flex items-start">
                  <span class="text-blue-600 mr-2 mt-1">•</span>
                  {highlight}
                </li>
              {/each}
            </ul>
          </div>
          
          <div class="pt-4 border-t border-gray-100">
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">AI Tools: <span class="font-semibold text-blue-600">{studio.tools}</span></span>
              <span class="text-gray-600">Trained: <span class="font-semibold text-green-600">{studio.artistsTrained}+</span></span>
            </div>
          </div>
        </div>
      </a>
    {/each}
  </div>
</section>

<!-- Animation & VFX Breakthroughs -->
<section class="bg-gray-50 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold text-gray-900 mb-8 text-center">Latest AI Breakthroughs</h2>
    <p class="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
      Groundbreaking AI innovations that are reshaping animation and visual effects across the industry
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each breakthroughs as breakthrough, i}
        <div 
          class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          in:fly={{ y: 30, delay: i * 50, duration: 400 }}
        >
          <div class="flex items-start justify-between mb-4">
            <div class="text-4xl">{breakthrough.icon}</div>
            <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded-lg text-xs font-bold">
              {breakthrough.year}
            </span>
          </div>
          
          <h3 class="text-lg font-bold text-gray-900 mb-2">{breakthrough.title}</h3>
          <p class="text-sm text-blue-600 mb-2 font-semibold">{breakthrough.studio}</p>
          <p class="text-gray-600 text-sm mb-3">{breakthrough.technology}</p>
          
          <div class="pt-3 border-t border-gray-100">
            <p class="text-sm font-semibold text-green-600">
              Impact: {breakthrough.impact}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- AI Innovation Categories -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-4xl font-bold text-gray-900 mb-8 text-center">AI Innovation Categories</h2>
  <p class="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
    Discover the key areas where AI is transforming Disney's creative and production processes
  </p>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    {#each innovationCategories as category}
      <div 
        class="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer"
        on:click={() => selectCategory(category)}
        class:ring-2={selectedCategory === category}
        class:ring-blue-500={selectedCategory === category}
      >
        <div class="flex items-start justify-between mb-4">
          <div class="flex items-center">
            <div class="text-3xl mr-3">{category.icon}</div>
            <h3 class="text-xl font-bold text-gray-900">{category.category}</h3>
          </div>
          <svg 
            class="w-5 h-5 text-gray-400 transform transition-transform {selectedCategory === category ? 'rotate-180' : ''}"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        
        <p class="text-gray-600 mb-4">{category.description}</p>
        
        {#if selectedCategory === category}
          <div class="space-y-3" in:fade={{ duration: 200 }}>
            <div>
              <h4 class="font-semibold text-gray-900 text-sm mb-2">Key Technologies:</h4>
              <div class="flex flex-wrap gap-2">
                {#each category.technologies as tech}
                  <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-lg text-xs font-medium">
                    {tech}
                  </span>
                {/each}
              </div>
            </div>
            
            <div>
              <h4 class="font-semibold text-gray-900 text-sm mb-2">Leading Studios:</h4>
              <div class="flex flex-wrap gap-2">
                {#each category.studios as studio}
                  <span class="px-3 py-1 bg-green-100 text-green-800 rounded-lg text-xs font-medium">
                    {studio}
                  </span>
                {/each}
              </div>
            </div>
          </div>
        {/if}
      </div>
    {/each}
  </div>
</section>

<!-- AI Integration Progress -->
<section class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold mb-8 text-center">Industry-Leading AI Integration</h2>
    
    <div class="max-w-4xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div class="space-y-6">
          <div>
            <div class="flex justify-between mb-2">
              <span>Pre-production AI Tools</span>
              <span>{Math.round(animationProgress * 0.88)}%</span>
            </div>
            <div class="bg-white/20 rounded-full h-4 overflow-hidden">
              <div 
                class="bg-yellow-400 h-full transition-all duration-1000 ease-out"
                style="width: {animationProgress * 0.88}%"
              ></div>
            </div>
          </div>
          
          <div>
            <div class="flex justify-between mb-2">
              <span>Animation AI Integration</span>
              <span>{Math.round(animationProgress * 0.82)}%</span>
            </div>
            <div class="bg-white/20 rounded-full h-4 overflow-hidden">
              <div 
                class="bg-yellow-400 h-full transition-all duration-1000 ease-out"
                style="width: {animationProgress * 0.82}%"
              ></div>
            </div>
          </div>
        </div>
        
        <div class="space-y-6">
          <div>
            <div class="flex justify-between mb-2">
              <span>VFX AI Capabilities</span>
              <span>{Math.round(animationProgress * 0.95)}%</span>
            </div>
            <div class="bg-white/20 rounded-full h-4 overflow-hidden">
              <div 
                class="bg-yellow-400 h-full transition-all duration-1000 ease-out"
                style="width: {animationProgress * 0.95}%"
              ></div>
            </div>
          </div>
          
          <div>
            <div class="flex justify-between mb-2">
              <span>Production AI Workflows</span>
              <span>{Math.round(animationProgress * 0.75)}%</span>
            </div>
            <div class="bg-white/20 rounded-full h-4 overflow-hidden">
              <div 
                class="bg-yellow-400 h-full transition-all duration-1000 ease-out"
                style="width: {animationProgress * 0.75}%"
              ></div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="text-center">
        <p class="text-xl text-blue-100 mb-6">
          Disney Studios leads the entertainment industry in AI adoption and innovation
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Quick Links to Studio AI Pages -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-4xl font-bold text-gray-900 mb-8 text-center">Explore Studio AI Initiatives</h2>
  
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
    {#each studios as studio}
      <a 
        href="/disney/studios/{studio.slug}"
        class="group bg-gradient-to-r {studio.color} rounded-xl p-4 text-white text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        <div class="text-3xl mb-2">{studio.icon}</div>
        <div class="text-sm font-semibold">{studio.name}</div>
        <div class="text-xs opacity-80 mt-1">{studio.tools} AI Tools</div>
      </a>
    {/each}
  </div>
</section>

<!-- Call to Action -->
<section class="bg-gray-50 py-16">
  <div class="container mx-auto px-4">
    <div class="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">The Future of Entertainment is AI-Powered</h2>
      <p class="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
        Discover how Disney Studios is pushing the boundaries of what's possible in storytelling and visual effects through AI innovation
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/disney/use-cases" class="px-8 py-4 bg-white text-purple-600 rounded-lg font-bold hover:bg-purple-50 transition-colors">
          View All Use Cases
        </a>
        <a href="/disney/experiments" class="px-8 py-4 bg-purple-500 text-white rounded-lg font-bold hover:bg-purple-400 transition-colors">
          Explore AI Experiments
        </a>
        <a href="/disney/efficiency" class="px-8 py-4 bg-purple-700 text-white rounded-lg font-bold hover:bg-purple-600 transition-colors">
          See Efficiency Gains
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  /* Custom animations */
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-slideIn {
    animation: slideIn 0.6s ease-out;
  }
</style>