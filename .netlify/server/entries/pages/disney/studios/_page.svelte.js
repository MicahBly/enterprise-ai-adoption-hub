import { c as create_ssr_component, b as each, e as escape } from "../../../../chunks/ssr.js";
const css = {
  code: "@keyframes svelte-1lwjkrr-slideIn{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.animate-slideIn.svelte-1lwjkrr{animation:svelte-1lwjkrr-slideIn 0.6s ease-out}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import { onMount } from 'svelte';\\n  import { fade, fly, scale } from 'svelte/transition';\\n  \\n  // Studio AI Overview Data\\n  const studios = [\\n    {\\n      name: 'Walt Disney Animation',\\n      slug: 'walt-disney-animation',\\n      icon: '🏰',\\n      color: 'from-blue-600 to-purple-600',\\n      description: 'Pioneering AI in traditional and computer animation',\\n      aiHighlights: [\\n        'AI-Assisted Storyboarding - 30% faster pre-production',\\n        'Generative Character Animation - 35% time reduction',\\n        'AI-Powered Rendering Optimization - 45% faster renders'\\n      ],\\n      status: 'Leading',\\n      tools: 25,\\n      artistsTrained: 500\\n    },\\n    {\\n      name: 'Pixar Animation Studios',\\n      slug: 'pixar',\\n      icon: '💡',\\n      color: 'from-yellow-500 to-orange-500',\\n      description: 'Advanced AI research and production innovation',\\n      aiHighlights: [\\n        'Neural Scene Understanding for automated lighting',\\n        'Motion Capture Enhancement - 60% cleanup reduction',\\n        'Procedural Animation AI for complex effects'\\n      ],\\n      status: 'Advanced',\\n      tools: 25,\\n      artistsTrained: 500\\n    },\\n    {\\n      name: 'Marvel Studios',\\n      slug: 'marvel',\\n      icon: '🦸',\\n      color: 'from-red-600 to-black',\\n      description: 'Cutting-edge VFX and digital character creation',\\n      aiHighlights: [\\n        'Smart Rotoscoping - 90% time reduction',\\n        'Digital Doubles for enhanced safety',\\n        'AI-Enhanced Visual Effects pipeline'\\n      ],\\n      status: 'Revolutionary',\\n      tools: 30,\\n      artistsTrained: 800\\n    },\\n    {\\n      name: 'Lucasfilm',\\n      slug: 'lucasfilm',\\n      icon: '⭐',\\n      color: 'from-blue-400 to-indigo-600',\\n      description: 'ILM leading global VFX AI innovation',\\n      aiHighlights: [\\n        'StageCraft LED volume technology',\\n        'AI-powered creature animation',\\n        'Real-time environment generation'\\n      ],\\n      status: 'Industry Pioneer',\\n      tools: 35,\\n      artistsTrained: 1000\\n    },\\n    {\\n      name: '20th Century Studios',\\n      slug: '20th-century',\\n      icon: '🎬',\\n      color: 'from-gray-700 to-blue-800',\\n      description: 'Live-action AI integration and enhancement',\\n      aiHighlights: [\\n        'AI script analysis and pre-visualization',\\n        'Automated color grading and matching',\\n        'Enhanced post-production workflows'\\n      ],\\n      status: 'Expanding',\\n      tools: 20,\\n      artistsTrained: 350\\n    },\\n    {\\n      name: 'Searchlight Pictures',\\n      slug: 'searchlight',\\n      icon: '🔦',\\n      color: 'from-amber-600 to-red-600',\\n      description: 'Boutique AI applications for indie filmmaking',\\n      aiHighlights: [\\n        'Budget-conscious AI tools',\\n        'Streamlined post-production AI',\\n        'Creative AI assistance for smaller productions'\\n      ],\\n      status: 'Emerging',\\n      tools: 12,\\n      artistsTrained: 150\\n    }\\n  ];\\n\\n  // Animation and VFX Breakthroughs\\n  const breakthroughs = [\\n    {\\n      title: 'Photorealistic Digital Humans',\\n      studio: 'Marvel Studios',\\n      technology: 'Advanced facial mapping AI',\\n      impact: 'Seamless CGI character integration',\\n      icon: '👤',\\n      year: '2024'\\n    },\\n    {\\n      title: 'Real-time Virtual Production',\\n      studio: 'Lucasfilm (ILM)',\\n      technology: 'StageCraft AI environments',\\n      impact: 'In-camera VFX revolution',\\n      icon: '🎭',\\n      year: '2024'\\n    },\\n    {\\n      title: 'AI Animation In-betweening',\\n      studio: 'Walt Disney Animation',\\n      technology: 'Neural animation interpolation',\\n      impact: '40% faster character animation',\\n      icon: '🎨',\\n      year: '2023'\\n    },\\n    {\\n      title: 'Procedural World Generation',\\n      studio: 'Pixar',\\n      technology: 'AI-driven environment creation',\\n      impact: 'Infinite scalable backgrounds',\\n      icon: '🌍',\\n      year: '2023'\\n    },\\n    {\\n      title: 'Intelligent Crowd Simulation',\\n      studio: 'Marvel Studios',\\n      technology: 'Autonomous character behavior AI',\\n      impact: 'Realistic battle sequences',\\n      icon: '👥',\\n      year: '2022'\\n    },\\n    {\\n      title: 'AI-Powered De-aging',\\n      studio: 'Lucasfilm',\\n      technology: 'Deep learning facial reconstruction',\\n      impact: 'Seamless timeline storytelling',\\n      icon: '⏰',\\n      year: '2022'\\n    }\\n  ];\\n\\n  // Overall AI Stats across all studios\\n  const overallStats = [\\n    { label: 'AI Tools Deployed', value: '150+', description: 'Across all studios' },\\n    { label: 'Production Time Saved', value: '35%', description: 'Average per project' },\\n    { label: 'Artists Trained', value: '3,300+', description: 'In AI technologies' },\\n    { label: 'AI-Enhanced Projects', value: '90%', description: 'Of current productions' }\\n  ];\\n\\n  // AI Innovation Categories\\n  const innovationCategories = [\\n    {\\n      category: 'Animation & Character',\\n      description: 'AI-powered character creation and animation',\\n      technologies: ['Facial Animation AI', 'Motion Capture Enhancement', 'Character Rigging Automation'],\\n      studios: ['Disney Animation', 'Pixar', 'Marvel'],\\n      icon: '🎭'\\n    },\\n    {\\n      category: 'Visual Effects & Rendering',\\n      description: 'Next-generation VFX and rendering optimization',\\n      technologies: ['Neural Rendering', 'Smart Compositing', 'Real-time Ray Tracing'],\\n      studios: ['Marvel', 'Lucasfilm', '20th Century'],\\n      icon: '✨'\\n    },\\n    {\\n      category: 'Production & Workflow',\\n      description: 'AI streamlining production processes',\\n      technologies: ['Script Analysis', 'Automated Dailies', 'Predictive Scheduling'],\\n      studios: ['All Studios'],\\n      icon: '⚙️'\\n    },\\n    {\\n      category: 'Creative Tools',\\n      description: 'AI-assisted creative decision making',\\n      technologies: ['Storyboard Generation', 'Color Palette AI', 'Music Composition'],\\n      studios: ['Disney Animation', 'Pixar', 'Searchlight'],\\n      icon: '🎨'\\n    }\\n  ];\\n\\n  let selectedCategory = null;\\n  let animationProgress = 0;\\n  \\n  onMount(() => {\\n    // Animate progress bars\\n    const interval = setInterval(() => {\\n      if (animationProgress < 100) {\\n        animationProgress += 1;\\n      } else {\\n        clearInterval(interval);\\n      }\\n    }, 30);\\n    \\n    return () => clearInterval(interval);\\n  });\\n\\n  function selectCategory(category) {\\n    selectedCategory = selectedCategory === category ? null : category;\\n  }\\n<\/script>\\n\\n<svelte:head>\\n  <title>Disney Studios AI Innovation Hub - Leading Entertainment AI</title>\\n</svelte:head>\\n\\n<!-- Hero Section -->\\n<section class=\\"relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white\\">\\n  <div class=\\"absolute inset-0 opacity-10\\">\\n    <div class=\\"absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2523ffffff%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat\\"></div>\\n  </div>\\n  \\n  <div class=\\"relative z-10 container mx-auto px-4 py-20\\">\\n    <div class=\\"max-w-4xl mx-auto text-center\\">\\n      <h1 class=\\"text-5xl md:text-7xl font-bold mb-6\\">\\n        Disney Studios <span class=\\"text-yellow-300\\">AI Hub</span>\\n      </h1>\\n      <p class=\\"text-2xl md:text-3xl mb-8 text-blue-100\\">\\n        Where Artificial Intelligence Transforms Storytelling\\n      </p>\\n      <p class=\\"text-xl mb-12 max-w-3xl mx-auto\\">\\n        Explore how Disney's family of studios is pioneering the future of entertainment \\n        through cutting-edge AI technologies that enhance creativity, streamline production, \\n        and push the boundaries of visual storytelling.\\n      </p>\\n      \\n      <!-- Global AI Stats -->\\n      <div class=\\"grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto\\">\\n        {#each overallStats as stat}\\n          <div class=\\"bg-white/20 backdrop-blur rounded-xl p-6\\" in:scale={{ delay: 200, duration: 500 }}>\\n            <div class=\\"text-4xl font-bold text-yellow-300\\">{stat.value}</div>\\n            <div class=\\"text-sm mt-2 font-semibold\\">{stat.label}</div>\\n            <div class=\\"text-xs mt-1 opacity-80\\">{stat.description}</div>\\n          </div>\\n        {/each}\\n      </div>\\n    </div>\\n  </div>\\n</section>\\n\\n<!-- Studios Overview Grid -->\\n<section class=\\"container mx-auto px-4 py-16\\">\\n  <h2 class=\\"text-4xl font-bold text-gray-900 mb-4 text-center\\">AI Innovation Across Our Studios</h2>\\n  <p class=\\"text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto\\">\\n    Each Disney studio is leveraging AI in unique ways to enhance their creative capabilities and production efficiency\\n  </p>\\n  \\n  <div class=\\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\\">\\n    {#each studios as studio, i}\\n      <a \\n        href=\\"/disney/studios/{studio.slug}\\"\\n        class=\\"group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105\\"\\n        in:fly={{ y: 50, delay: i * 100, duration: 500 }}\\n      >\\n        <div class=\\"bg-gradient-to-r {studio.color} p-6 text-white\\">\\n          <div class=\\"flex items-center justify-between mb-4\\">\\n            <div class=\\"text-5xl\\">{studio.icon}</div>\\n            <span class=\\"px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs font-bold\\">\\n              {studio.status}\\n            </span>\\n          </div>\\n          <h3 class=\\"text-xl font-bold mb-2\\">{studio.name}</h3>\\n          <p class=\\"text-sm opacity-90\\">{studio.description}</p>\\n        </div>\\n        \\n        <div class=\\"p-6\\">\\n          <div class=\\"mb-4\\">\\n            <h4 class=\\"font-semibold text-gray-900 mb-2\\">AI Highlights:</h4>\\n            <ul class=\\"space-y-1\\">\\n              {#each studio.aiHighlights as highlight}\\n                <li class=\\"text-sm text-gray-600 flex items-start\\">\\n                  <span class=\\"text-blue-600 mr-2 mt-1\\">•</span>\\n                  {highlight}\\n                </li>\\n              {/each}\\n            </ul>\\n          </div>\\n          \\n          <div class=\\"pt-4 border-t border-gray-100\\">\\n            <div class=\\"flex justify-between text-sm\\">\\n              <span class=\\"text-gray-600\\">AI Tools: <span class=\\"font-semibold text-blue-600\\">{studio.tools}</span></span>\\n              <span class=\\"text-gray-600\\">Trained: <span class=\\"font-semibold text-green-600\\">{studio.artistsTrained}+</span></span>\\n            </div>\\n          </div>\\n        </div>\\n      </a>\\n    {/each}\\n  </div>\\n</section>\\n\\n<!-- Animation & VFX Breakthroughs -->\\n<section class=\\"bg-gray-50 py-16\\">\\n  <div class=\\"container mx-auto px-4\\">\\n    <h2 class=\\"text-4xl font-bold text-gray-900 mb-8 text-center\\">Latest AI Breakthroughs</h2>\\n    <p class=\\"text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto\\">\\n      Groundbreaking AI innovations that are reshaping animation and visual effects across the industry\\n    </p>\\n    \\n    <div class=\\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6\\">\\n      {#each breakthroughs as breakthrough, i}\\n        <div \\n          class=\\"bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300\\"\\n          in:fly={{ y: 30, delay: i * 50, duration: 400 }}\\n        >\\n          <div class=\\"flex items-start justify-between mb-4\\">\\n            <div class=\\"text-4xl\\">{breakthrough.icon}</div>\\n            <span class=\\"px-2 py-1 bg-blue-100 text-blue-800 rounded-lg text-xs font-bold\\">\\n              {breakthrough.year}\\n            </span>\\n          </div>\\n          \\n          <h3 class=\\"text-lg font-bold text-gray-900 mb-2\\">{breakthrough.title}</h3>\\n          <p class=\\"text-sm text-blue-600 mb-2 font-semibold\\">{breakthrough.studio}</p>\\n          <p class=\\"text-gray-600 text-sm mb-3\\">{breakthrough.technology}</p>\\n          \\n          <div class=\\"pt-3 border-t border-gray-100\\">\\n            <p class=\\"text-sm font-semibold text-green-600\\">\\n              Impact: {breakthrough.impact}\\n            </p>\\n          </div>\\n        </div>\\n      {/each}\\n    </div>\\n  </div>\\n</section>\\n\\n<!-- AI Innovation Categories -->\\n<section class=\\"container mx-auto px-4 py-16\\">\\n  <h2 class=\\"text-4xl font-bold text-gray-900 mb-8 text-center\\">AI Innovation Categories</h2>\\n  <p class=\\"text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto\\">\\n    Discover the key areas where AI is transforming Disney's creative and production processes\\n  </p>\\n  \\n  <div class=\\"grid grid-cols-1 md:grid-cols-2 gap-6\\">\\n    {#each innovationCategories as category}\\n      <div \\n        class=\\"bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer\\"\\n        on:click={() => selectCategory(category)}\\n        class:ring-2={selectedCategory === category}\\n        class:ring-blue-500={selectedCategory === category}\\n      >\\n        <div class=\\"flex items-start justify-between mb-4\\">\\n          <div class=\\"flex items-center\\">\\n            <div class=\\"text-3xl mr-3\\">{category.icon}</div>\\n            <h3 class=\\"text-xl font-bold text-gray-900\\">{category.category}</h3>\\n          </div>\\n          <svg \\n            class=\\"w-5 h-5 text-gray-400 transform transition-transform {selectedCategory === category ? 'rotate-180' : ''}\\"\\n            fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\"\\n          >\\n            <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M19 9l-7 7-7-7\\" />\\n          </svg>\\n        </div>\\n        \\n        <p class=\\"text-gray-600 mb-4\\">{category.description}</p>\\n        \\n        {#if selectedCategory === category}\\n          <div class=\\"space-y-3\\" in:fade={{ duration: 200 }}>\\n            <div>\\n              <h4 class=\\"font-semibold text-gray-900 text-sm mb-2\\">Key Technologies:</h4>\\n              <div class=\\"flex flex-wrap gap-2\\">\\n                {#each category.technologies as tech}\\n                  <span class=\\"px-3 py-1 bg-blue-100 text-blue-800 rounded-lg text-xs font-medium\\">\\n                    {tech}\\n                  </span>\\n                {/each}\\n              </div>\\n            </div>\\n            \\n            <div>\\n              <h4 class=\\"font-semibold text-gray-900 text-sm mb-2\\">Leading Studios:</h4>\\n              <div class=\\"flex flex-wrap gap-2\\">\\n                {#each category.studios as studio}\\n                  <span class=\\"px-3 py-1 bg-green-100 text-green-800 rounded-lg text-xs font-medium\\">\\n                    {studio}\\n                  </span>\\n                {/each}\\n              </div>\\n            </div>\\n          </div>\\n        {/if}\\n      </div>\\n    {/each}\\n  </div>\\n</section>\\n\\n<!-- AI Integration Progress -->\\n<section class=\\"bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16\\">\\n  <div class=\\"container mx-auto px-4\\">\\n    <h2 class=\\"text-4xl font-bold mb-8 text-center\\">Industry-Leading AI Integration</h2>\\n    \\n    <div class=\\"max-w-4xl mx-auto\\">\\n      <div class=\\"grid grid-cols-1 md:grid-cols-2 gap-8 mb-12\\">\\n        <div class=\\"space-y-6\\">\\n          <div>\\n            <div class=\\"flex justify-between mb-2\\">\\n              <span>Pre-production AI Tools</span>\\n              <span>{Math.round(animationProgress * 0.88)}%</span>\\n            </div>\\n            <div class=\\"bg-white/20 rounded-full h-4 overflow-hidden\\">\\n              <div \\n                class=\\"bg-yellow-400 h-full transition-all duration-1000 ease-out\\"\\n                style=\\"width: {animationProgress * 0.88}%\\"\\n              ></div>\\n            </div>\\n          </div>\\n          \\n          <div>\\n            <div class=\\"flex justify-between mb-2\\">\\n              <span>Animation AI Integration</span>\\n              <span>{Math.round(animationProgress * 0.82)}%</span>\\n            </div>\\n            <div class=\\"bg-white/20 rounded-full h-4 overflow-hidden\\">\\n              <div \\n                class=\\"bg-yellow-400 h-full transition-all duration-1000 ease-out\\"\\n                style=\\"width: {animationProgress * 0.82}%\\"\\n              ></div>\\n            </div>\\n          </div>\\n        </div>\\n        \\n        <div class=\\"space-y-6\\">\\n          <div>\\n            <div class=\\"flex justify-between mb-2\\">\\n              <span>VFX AI Capabilities</span>\\n              <span>{Math.round(animationProgress * 0.95)}%</span>\\n            </div>\\n            <div class=\\"bg-white/20 rounded-full h-4 overflow-hidden\\">\\n              <div \\n                class=\\"bg-yellow-400 h-full transition-all duration-1000 ease-out\\"\\n                style=\\"width: {animationProgress * 0.95}%\\"\\n              ></div>\\n            </div>\\n          </div>\\n          \\n          <div>\\n            <div class=\\"flex justify-between mb-2\\">\\n              <span>Production AI Workflows</span>\\n              <span>{Math.round(animationProgress * 0.75)}%</span>\\n            </div>\\n            <div class=\\"bg-white/20 rounded-full h-4 overflow-hidden\\">\\n              <div \\n                class=\\"bg-yellow-400 h-full transition-all duration-1000 ease-out\\"\\n                style=\\"width: {animationProgress * 0.75}%\\"\\n              ></div>\\n            </div>\\n          </div>\\n        </div>\\n      </div>\\n      \\n      <div class=\\"text-center\\">\\n        <p class=\\"text-xl text-blue-100 mb-6\\">\\n          Disney Studios leads the entertainment industry in AI adoption and innovation\\n        </p>\\n      </div>\\n    </div>\\n  </div>\\n</section>\\n\\n<!-- Quick Links to Studio AI Pages -->\\n<section class=\\"container mx-auto px-4 py-16\\">\\n  <h2 class=\\"text-4xl font-bold text-gray-900 mb-8 text-center\\">Explore Studio AI Initiatives</h2>\\n  \\n  <div class=\\"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4\\">\\n    {#each studios as studio}\\n      <a \\n        href=\\"/disney/studios/{studio.slug}\\"\\n        class=\\"group bg-gradient-to-r {studio.color} rounded-xl p-4 text-white text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl\\"\\n      >\\n        <div class=\\"text-3xl mb-2\\">{studio.icon}</div>\\n        <div class=\\"text-sm font-semibold\\">{studio.name}</div>\\n        <div class=\\"text-xs opacity-80 mt-1\\">{studio.tools} AI Tools</div>\\n      </a>\\n    {/each}\\n  </div>\\n</section>\\n\\n<!-- Call to Action -->\\n<section class=\\"bg-gray-50 py-16\\">\\n  <div class=\\"container mx-auto px-4\\">\\n    <div class=\\"bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white text-center\\">\\n      <h2 class=\\"text-3xl md:text-4xl font-bold mb-4\\">The Future of Entertainment is AI-Powered</h2>\\n      <p class=\\"text-xl mb-8 text-purple-100 max-w-3xl mx-auto\\">\\n        Discover how Disney Studios is pushing the boundaries of what's possible in storytelling and visual effects through AI innovation\\n      </p>\\n      <div class=\\"flex flex-col sm:flex-row gap-4 justify-center\\">\\n        <a href=\\"/disney/use-cases\\" class=\\"px-8 py-4 bg-white text-purple-600 rounded-lg font-bold hover:bg-purple-50 transition-colors\\">\\n          View All Use Cases\\n        </a>\\n        <a href=\\"/disney/experiments\\" class=\\"px-8 py-4 bg-purple-500 text-white rounded-lg font-bold hover:bg-purple-400 transition-colors\\">\\n          Explore AI Experiments\\n        </a>\\n        <a href=\\"/disney/efficiency\\" class=\\"px-8 py-4 bg-purple-700 text-white rounded-lg font-bold hover:bg-purple-600 transition-colors\\">\\n          See Efficiency Gains\\n        </a>\\n      </div>\\n    </div>\\n  </div>\\n</section>\\n\\n<style>\\n  /* Custom animations */\\n  @keyframes slideIn {\\n    from {\\n      opacity: 0;\\n      transform: translateY(20px);\\n    }\\n    to {\\n      opacity: 1;\\n      transform: translateY(0);\\n    }\\n  }\\n  \\n  .animate-slideIn {\\n    animation: slideIn 0.6s ease-out;\\n  }\\n</style>"],"names":[],"mappings":"AA+fE,WAAW,sBAAQ,CACjB,IAAK,CACH,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,WAAW,IAAI,CAC5B,CACA,EAAG,CACD,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,WAAW,CAAC,CACzB,CACF,CAEA,+BAAiB,CACf,SAAS,CAAE,sBAAO,CAAC,IAAI,CAAC,QAC1B"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const studios = [
    {
      name: "Walt Disney Animation",
      slug: "walt-disney-animation",
      icon: "🏰",
      color: "from-blue-600 to-purple-600",
      description: "Pioneering AI in traditional and computer animation",
      aiHighlights: [
        "AI-Assisted Storyboarding - 30% faster pre-production",
        "Generative Character Animation - 35% time reduction",
        "AI-Powered Rendering Optimization - 45% faster renders"
      ],
      status: "Leading",
      tools: 25,
      artistsTrained: 500
    },
    {
      name: "Pixar Animation Studios",
      slug: "pixar",
      icon: "💡",
      color: "from-yellow-500 to-orange-500",
      description: "Advanced AI research and production innovation",
      aiHighlights: [
        "Neural Scene Understanding for automated lighting",
        "Motion Capture Enhancement - 60% cleanup reduction",
        "Procedural Animation AI for complex effects"
      ],
      status: "Advanced",
      tools: 25,
      artistsTrained: 500
    },
    {
      name: "Marvel Studios",
      slug: "marvel",
      icon: "🦸",
      color: "from-red-600 to-black",
      description: "Cutting-edge VFX and digital character creation",
      aiHighlights: [
        "Smart Rotoscoping - 90% time reduction",
        "Digital Doubles for enhanced safety",
        "AI-Enhanced Visual Effects pipeline"
      ],
      status: "Revolutionary",
      tools: 30,
      artistsTrained: 800
    },
    {
      name: "Lucasfilm",
      slug: "lucasfilm",
      icon: "⭐",
      color: "from-blue-400 to-indigo-600",
      description: "ILM leading global VFX AI innovation",
      aiHighlights: [
        "StageCraft LED volume technology",
        "AI-powered creature animation",
        "Real-time environment generation"
      ],
      status: "Industry Pioneer",
      tools: 35,
      artistsTrained: 1e3
    },
    {
      name: "20th Century Studios",
      slug: "20th-century",
      icon: "🎬",
      color: "from-gray-700 to-blue-800",
      description: "Live-action AI integration and enhancement",
      aiHighlights: [
        "AI script analysis and pre-visualization",
        "Automated color grading and matching",
        "Enhanced post-production workflows"
      ],
      status: "Expanding",
      tools: 20,
      artistsTrained: 350
    },
    {
      name: "Searchlight Pictures",
      slug: "searchlight",
      icon: "🔦",
      color: "from-amber-600 to-red-600",
      description: "Boutique AI applications for indie filmmaking",
      aiHighlights: [
        "Budget-conscious AI tools",
        "Streamlined post-production AI",
        "Creative AI assistance for smaller productions"
      ],
      status: "Emerging",
      tools: 12,
      artistsTrained: 150
    }
  ];
  const breakthroughs = [
    {
      title: "Photorealistic Digital Humans",
      studio: "Marvel Studios",
      technology: "Advanced facial mapping AI",
      impact: "Seamless CGI character integration",
      icon: "👤",
      year: "2024"
    },
    {
      title: "Real-time Virtual Production",
      studio: "Lucasfilm (ILM)",
      technology: "StageCraft AI environments",
      impact: "In-camera VFX revolution",
      icon: "🎭",
      year: "2024"
    },
    {
      title: "AI Animation In-betweening",
      studio: "Walt Disney Animation",
      technology: "Neural animation interpolation",
      impact: "40% faster character animation",
      icon: "🎨",
      year: "2023"
    },
    {
      title: "Procedural World Generation",
      studio: "Pixar",
      technology: "AI-driven environment creation",
      impact: "Infinite scalable backgrounds",
      icon: "🌍",
      year: "2023"
    },
    {
      title: "Intelligent Crowd Simulation",
      studio: "Marvel Studios",
      technology: "Autonomous character behavior AI",
      impact: "Realistic battle sequences",
      icon: "👥",
      year: "2022"
    },
    {
      title: "AI-Powered De-aging",
      studio: "Lucasfilm",
      technology: "Deep learning facial reconstruction",
      impact: "Seamless timeline storytelling",
      icon: "⏰",
      year: "2022"
    }
  ];
  const overallStats = [
    {
      label: "AI Tools Deployed",
      value: "150+",
      description: "Across all studios"
    },
    {
      label: "Production Time Saved",
      value: "35%",
      description: "Average per project"
    },
    {
      label: "Artists Trained",
      value: "3,300+",
      description: "In AI technologies"
    },
    {
      label: "AI-Enhanced Projects",
      value: "90%",
      description: "Of current productions"
    }
  ];
  const innovationCategories = [
    {
      category: "Animation & Character",
      description: "AI-powered character creation and animation",
      technologies: [
        "Facial Animation AI",
        "Motion Capture Enhancement",
        "Character Rigging Automation"
      ],
      studios: ["Disney Animation", "Pixar", "Marvel"],
      icon: "🎭"
    },
    {
      category: "Visual Effects & Rendering",
      description: "Next-generation VFX and rendering optimization",
      technologies: ["Neural Rendering", "Smart Compositing", "Real-time Ray Tracing"],
      studios: ["Marvel", "Lucasfilm", "20th Century"],
      icon: "✨"
    },
    {
      category: "Production & Workflow",
      description: "AI streamlining production processes",
      technologies: ["Script Analysis", "Automated Dailies", "Predictive Scheduling"],
      studios: ["All Studios"],
      icon: "⚙️"
    },
    {
      category: "Creative Tools",
      description: "AI-assisted creative decision making",
      technologies: ["Storyboard Generation", "Color Palette AI", "Music Composition"],
      studios: ["Disney Animation", "Pixar", "Searchlight"],
      icon: "🎨"
    }
  ];
  let selectedCategory = null;
  let animationProgress = 0;
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1ay8i7x_START -->${$$result.title = `<title>Disney Studios AI Innovation Hub - Leading Entertainment AI</title>`, ""}<!-- HEAD_svelte-1ay8i7x_END -->`, ""}  <section class="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white"><div class="absolute inset-0 opacity-10" data-svelte-h="svelte-pg28z4"><div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2523ffffff%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div></div> <div class="relative z-10 container mx-auto px-4 py-20"><div class="max-w-4xl mx-auto text-center"><h1 class="text-5xl md:text-7xl font-bold mb-6" data-svelte-h="svelte-118owbz">Disney Studios <span class="text-yellow-300">AI Hub</span></h1> <p class="text-2xl md:text-3xl mb-8 text-blue-100" data-svelte-h="svelte-dj9liy">Where Artificial Intelligence Transforms Storytelling</p> <p class="text-xl mb-12 max-w-3xl mx-auto" data-svelte-h="svelte-wi2g85">Explore how Disney&#39;s family of studios is pioneering the future of entertainment 
        through cutting-edge AI technologies that enhance creativity, streamline production, 
        and push the boundaries of visual storytelling.</p>  <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">${each(overallStats, (stat) => {
    return `<div class="bg-white/20 backdrop-blur rounded-xl p-6"><div class="text-4xl font-bold text-yellow-300">${escape(stat.value)}</div> <div class="text-sm mt-2 font-semibold">${escape(stat.label)}</div> <div class="text-xs mt-1 opacity-80">${escape(stat.description)}</div> </div>`;
  })}</div></div></div></section>  <section class="container mx-auto px-4 py-16"><h2 class="text-4xl font-bold text-gray-900 mb-4 text-center" data-svelte-h="svelte-1oqlw39">AI Innovation Across Our Studios</h2> <p class="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto" data-svelte-h="svelte-qjhdgl">Each Disney studio is leveraging AI in unique ways to enhance their creative capabilities and production efficiency</p> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">${each(studios, (studio, i) => {
    return `<a href="${"/disney/studios/" + escape(studio.slug, true)}" class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105"><div class="${"bg-gradient-to-r " + escape(studio.color, true) + " p-6 text-white svelte-1lwjkrr"}"><div class="flex items-center justify-between mb-4"><div class="text-5xl">${escape(studio.icon)}</div> <span class="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs font-bold">${escape(studio.status)} </span></div> <h3 class="text-xl font-bold mb-2">${escape(studio.name)}</h3> <p class="text-sm opacity-90">${escape(studio.description)}</p></div> <div class="p-6"><div class="mb-4"><h4 class="font-semibold text-gray-900 mb-2" data-svelte-h="svelte-fxdgqm">AI Highlights:</h4> <ul class="space-y-1">${each(studio.aiHighlights, (highlight) => {
      return `<li class="text-sm text-gray-600 flex items-start"><span class="text-blue-600 mr-2 mt-1" data-svelte-h="svelte-1wbwia9">•</span> ${escape(highlight)} </li>`;
    })} </ul></div> <div class="pt-4 border-t border-gray-100"><div class="flex justify-between text-sm"><span class="text-gray-600">AI Tools: <span class="font-semibold text-blue-600">${escape(studio.tools)}</span></span> <span class="text-gray-600">Trained: <span class="font-semibold text-green-600">${escape(studio.artistsTrained)}+</span></span></div> </div></div> </a>`;
  })}</div></section>  <section class="bg-gray-50 py-16"><div class="container mx-auto px-4"><h2 class="text-4xl font-bold text-gray-900 mb-8 text-center" data-svelte-h="svelte-c7phz4">Latest AI Breakthroughs</h2> <p class="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto" data-svelte-h="svelte-e91eao">Groundbreaking AI innovations that are reshaping animation and visual effects across the industry</p> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">${each(breakthroughs, (breakthrough, i) => {
    return `<div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"><div class="flex items-start justify-between mb-4"><div class="text-4xl">${escape(breakthrough.icon)}</div> <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded-lg text-xs font-bold">${escape(breakthrough.year)} </span></div> <h3 class="text-lg font-bold text-gray-900 mb-2">${escape(breakthrough.title)}</h3> <p class="text-sm text-blue-600 mb-2 font-semibold">${escape(breakthrough.studio)}</p> <p class="text-gray-600 text-sm mb-3">${escape(breakthrough.technology)}</p> <div class="pt-3 border-t border-gray-100"><p class="text-sm font-semibold text-green-600">Impact: ${escape(breakthrough.impact)} </p></div> </div>`;
  })}</div></div></section>  <section class="container mx-auto px-4 py-16"><h2 class="text-4xl font-bold text-gray-900 mb-8 text-center" data-svelte-h="svelte-ohnowp">AI Innovation Categories</h2> <p class="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto" data-svelte-h="svelte-1s4ecab">Discover the key areas where AI is transforming Disney&#39;s creative and production processes</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-6">${each(innovationCategories, (category) => {
    return `<div class="${[
      "bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer",
      (selectedCategory === category ? "ring-2" : "") + " " + (selectedCategory === category ? "ring-blue-500" : "")
    ].join(" ").trim()}"><div class="flex items-start justify-between mb-4"><div class="flex items-center"><div class="text-3xl mr-3">${escape(category.icon)}</div> <h3 class="text-xl font-bold text-gray-900">${escape(category.category)}</h3></div> <svg class="${"w-5 h-5 text-gray-400 transform transition-transform " + escape(selectedCategory === category ? "rotate-180" : "", true)}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div> <p class="text-gray-600 mb-4">${escape(category.description)}</p> ${selectedCategory === category ? `<div class="space-y-3"><div><h4 class="font-semibold text-gray-900 text-sm mb-2" data-svelte-h="svelte-1hqoiy6">Key Technologies:</h4> <div class="flex flex-wrap gap-2">${each(category.technologies, (tech) => {
      return `<span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-lg text-xs font-medium">${escape(tech)} </span>`;
    })} </div></div> <div><h4 class="font-semibold text-gray-900 text-sm mb-2" data-svelte-h="svelte-z11qvq">Leading Studios:</h4> <div class="flex flex-wrap gap-2">${each(category.studios, (studio) => {
      return `<span class="px-3 py-1 bg-green-100 text-green-800 rounded-lg text-xs font-medium">${escape(studio)} </span>`;
    })} </div></div> </div>` : ``} </div>`;
  })}</div></section>  <section class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16"><div class="container mx-auto px-4"><h2 class="text-4xl font-bold mb-8 text-center" data-svelte-h="svelte-2faliy">Industry-Leading AI Integration</h2> <div class="max-w-4xl mx-auto"><div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"><div class="space-y-6"><div><div class="flex justify-between mb-2"><span data-svelte-h="svelte-18n1zsa">Pre-production AI Tools</span> <span>${escape(Math.round(animationProgress * 0.88))}%</span></div> <div class="bg-white/20 rounded-full h-4 overflow-hidden"><div class="bg-yellow-400 h-full transition-all duration-1000 ease-out" style="${"width: " + escape(animationProgress * 0.88, true) + "%"}"></div></div></div> <div><div class="flex justify-between mb-2"><span data-svelte-h="svelte-1m1jg8g">Animation AI Integration</span> <span>${escape(Math.round(animationProgress * 0.82))}%</span></div> <div class="bg-white/20 rounded-full h-4 overflow-hidden"><div class="bg-yellow-400 h-full transition-all duration-1000 ease-out" style="${"width: " + escape(animationProgress * 0.82, true) + "%"}"></div></div></div></div> <div class="space-y-6"><div><div class="flex justify-between mb-2"><span data-svelte-h="svelte-1rkl1nq">VFX AI Capabilities</span> <span>${escape(Math.round(animationProgress * 0.95))}%</span></div> <div class="bg-white/20 rounded-full h-4 overflow-hidden"><div class="bg-yellow-400 h-full transition-all duration-1000 ease-out" style="${"width: " + escape(animationProgress * 0.95, true) + "%"}"></div></div></div> <div><div class="flex justify-between mb-2"><span data-svelte-h="svelte-1mxe9al">Production AI Workflows</span> <span>${escape(Math.round(animationProgress * 0.75))}%</span></div> <div class="bg-white/20 rounded-full h-4 overflow-hidden"><div class="bg-yellow-400 h-full transition-all duration-1000 ease-out" style="${"width: " + escape(animationProgress * 0.75, true) + "%"}"></div></div></div></div></div> <div class="text-center" data-svelte-h="svelte-ex83cw"><p class="text-xl text-blue-100 mb-6">Disney Studios leads the entertainment industry in AI adoption and innovation</p></div></div></div></section>  <section class="container mx-auto px-4 py-16"><h2 class="text-4xl font-bold text-gray-900 mb-8 text-center" data-svelte-h="svelte-1kcbrju">Explore Studio AI Initiatives</h2> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">${each(studios, (studio) => {
    return `<a href="${"/disney/studios/" + escape(studio.slug, true)}" class="${"group bg-gradient-to-r " + escape(studio.color, true) + " rounded-xl p-4 text-white text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl svelte-1lwjkrr"}"><div class="text-3xl mb-2">${escape(studio.icon)}</div> <div class="text-sm font-semibold">${escape(studio.name)}</div> <div class="text-xs opacity-80 mt-1">${escape(studio.tools)} AI Tools</div> </a>`;
  })}</div></section>  <section class="bg-gray-50 py-16" data-svelte-h="svelte-hb53my"><div class="container mx-auto px-4"><div class="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white text-center"><h2 class="text-3xl md:text-4xl font-bold mb-4">The Future of Entertainment is AI-Powered</h2> <p class="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">Discover how Disney Studios is pushing the boundaries of what&#39;s possible in storytelling and visual effects through AI innovation</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"><a href="/disney/use-cases" class="px-8 py-4 bg-white text-purple-600 rounded-lg font-bold hover:bg-purple-50 transition-colors">View All Use Cases</a> <a href="/disney/experiments" class="px-8 py-4 bg-purple-500 text-white rounded-lg font-bold hover:bg-purple-400 transition-colors">Explore AI Experiments</a> <a href="/disney/efficiency" class="px-8 py-4 bg-purple-700 text-white rounded-lg font-bold hover:bg-purple-600 transition-colors">See Efficiency Gains</a></div></div></div> </section>`;
});
export {
  Page as default
};
