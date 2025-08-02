<script>
  import { onMount } from 'svelte';
  import { fade, fly, scale } from 'svelte/transition';
  
  let selectedTech = null;
  let activeCategory = 'vfx';
  
  const aiTechnologies = [
    {
      id: 'vfx',
      title: 'AI-Enhanced Visual Effects',
      icon: '🎨',
      description: 'Revolutionary VFX powered by machine learning',
      features: [
        {
          title: 'Smart Rotoscoping',
          description: 'AI-powered object isolation reduces manual work from days to hours',
          impact: '90% time reduction'
        },
        {
          title: 'Deep Compositing',
          description: 'Neural networks seamlessly blend CGI elements with live action',
          impact: 'Photorealistic integration'
        },
        {
          title: 'Motion Capture Enhancement',
          description: 'AI fills in missing mocap data and enhances performer movements',
          impact: 'More natural character animation'
        },
        {
          title: 'Intelligent Upscaling',
          description: 'AI upscales footage to 8K while preserving detail and reducing noise',
          impact: 'Future-proof content'
        }
      ]
    },
    {
      id: 'characters',
      title: 'Digital Character Creation',
      icon: '🦸',
      description: 'Bringing heroes and villains to life with AI',
      features: [
        {
          title: 'De-aging Technology',
          description: 'Advanced AI algorithms create younger versions of actors',
          impact: 'Seamless timeline storytelling'
        },
        {
          title: 'Digital Doubles',
          description: 'AI generates photorealistic digital actors for dangerous stunts',
          impact: 'Enhanced safety and possibilities'
        },
        {
          title: 'Facial Animation AI',
          description: 'Machine learning captures subtle expressions and emotions',
          impact: 'More believable CGI characters'
        },
        {
          title: 'Voice Synthesis',
          description: 'AI preserves character voices across different ages and scenarios',
          impact: 'Consistent character portrayal'
        }
      ]
    },
    {
      id: 'action',
      title: 'Action Sequence Planning',
      icon: '💥',
      description: 'AI-driven choreography and visualization',
      features: [
        {
          title: 'Previs AI',
          description: 'AI generates multiple action sequence variations for directors',
          impact: 'Faster creative iteration'
        },
        {
          title: 'Physics Simulation',
          description: 'ML models predict realistic physics for superhero movements',
          impact: 'Believable action scenes'
        },
        {
          title: 'Crowd Simulation',
          description: 'AI creates intelligent crowd behaviors for battle scenes',
          impact: 'Epic scale battles'
        },
        {
          title: 'Camera Path Optimization',
          description: 'AI suggests optimal camera movements for dynamic shots',
          impact: 'More engaging cinematography'
        }
      ]
    },
    {
      id: 'production',
      title: 'Production Innovation',
      icon: '🎬',
      description: 'AI streamlining the filmmaking process',
      features: [
        {
          title: 'Script Analysis',
          description: 'AI analyzes scripts for VFX requirements and budget estimation',
          impact: 'Accurate pre-production planning'
        },
        {
          title: 'Automated Dailies',
          description: 'AI reviews and categorizes daily footage for faster editing',
          impact: '50% faster post-production'
        },
        {
          title: 'Virtual Production',
          description: 'AI-powered LED volumes create immersive filming environments',
          impact: 'Real-time in-camera effects'
        },
        {
          title: 'Color Grading AI',
          description: 'Intelligent color matching across different shots and scenes',
          impact: 'Consistent visual style'
        }
      ]
    }
  ];
  
  const caseStudies = [
    {
      title: "Thanos Creation",
      film: "Avengers: Infinity War & Endgame",
      description: "Revolutionary motion capture and AI facial mapping brought the Mad Titan to life",
      technologies: ["Performance Capture", "Facial AI", "Digital Human Tech"],
      icon: "👊"
    },
    {
      title: "The Multiverse",
      film: "Doctor Strange in the Multiverse of Madness",
      description: "AI-generated reality distortions and dimensional transitions",
      technologies: ["Reality Engine", "AI Simulation", "Quantum Rendering"],
      icon: "🌀"
    },
    {
      title: "Quantum Realm",
      film: "Ant-Man and the Wasp: Quantumania",
      description: "Procedural AI creation of microscopic and surreal environments",
      technologies: ["Procedural Generation", "AI World Building", "Particle Systems"],
      icon: "🔬"
    }
  ];
  
  const aiStats = [
    { label: "VFX Shots Using AI", value: "85%", trend: "+25% YoY" },
    { label: "Production Time Saved", value: "40%", trend: "Per Film" },
    { label: "AI-Enhanced Scenes", value: "2,500+", trend: "Per Blockbuster" },
    { label: "Digital Characters", value: "200+", trend: "Across MCU" }
  ];
  
  let scrollY = 0;
  
  onMount(() => {
    const handleScroll = () => scrollY = window.scrollY;
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<svelte:window bind:scrollY />

<!-- Hero Section with Marvel Branding -->
<section class="relative min-h-screen bg-black overflow-hidden">
  <!-- Animated Comic Book Background -->
  <div class="absolute inset-0">
    <div class="comic-dots"></div>
    <div class="absolute inset-0 bg-gradient-to-b from-red-900/50 via-black/80 to-black"></div>
  </div>
  
  <!-- Marvel Logo Animation -->
  <div class="relative z-10 flex flex-col items-center justify-center min-h-screen px-4"
       style="transform: translateY({scrollY * 0.5}px)">
    <div class="text-center" in:scale={{ duration: 1000, delay: 300 }}>
      <h1 class="marvel-logo text-8xl md:text-9xl font-black text-white mb-4">
        MARVEL
      </h1>
      <div class="text-red-600 text-2xl md:text-3xl font-bold tracking-wider mb-8"
           in:fade={{ duration: 1000, delay: 600 }}>
        STUDIOS
      </div>
      <p class="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto"
         in:fade={{ duration: 1000, delay: 900 }}>
        Pioneering AI Technology in Cinematic Storytelling
      </p>
    </div>
    
    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </div>
</section>

<!-- AI Technology Categories -->
<section class="py-20 bg-gradient-to-b from-black to-gray-900">
  <div class="container mx-auto px-4">
    <h2 class="text-5xl font-black text-center text-white mb-16">AI IN MARVEL PRODUCTIONS</h2>
    
    <!-- Technology Selector -->
    <div class="flex flex-wrap justify-center gap-4 mb-12">
      {#each aiTechnologies as tech}
        <button
          on:click={() => activeCategory = tech.id}
          class="px-6 py-3 rounded-lg font-bold transition-all duration-300 flex items-center gap-2 {
            activeCategory === tech.id 
              ? 'bg-red-600 text-white scale-110 shadow-lg shadow-red-600/50' 
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }"
        >
          <span class="text-2xl">{tech.icon}</span>
          <span>{tech.title}</span>
        </button>
      {/each}
    </div>
    
    <!-- Technology Details -->
    {#each aiTechnologies as tech}
      {#if activeCategory === tech.id}
        <div class="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-red-600/30"
             in:fade={{ duration: 300 }}>
          <h3 class="text-3xl font-bold text-red-500 mb-2">{tech.title}</h3>
          <p class="text-gray-400 mb-8 text-lg">{tech.description}</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {#each tech.features as feature}
              <div class="bg-black/50 rounded-lg p-6 border border-gray-700 hover:border-red-600 transition-all duration-300 group">
                <h4 class="font-bold text-white text-xl mb-2 group-hover:text-red-400 transition-colors">{feature.title}</h4>
                <p class="text-gray-400 mb-3">{feature.description}</p>
                <div class="flex items-center gap-2">
                  <span class="text-red-500">→</span>
                  <span class="text-green-400 font-semibold">{feature.impact}</span>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/if}
    {/each}
  </div>
</section>

<!-- AI Case Studies -->
<section class="py-20 bg-gray-900">
  <div class="container mx-auto px-4">
    <h2 class="text-5xl font-black text-center text-white mb-16">BREAKTHROUGH AI IMPLEMENTATIONS</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each caseStudies as study, i}
        <div class="group relative overflow-hidden rounded-xl bg-black border-2 border-red-600/30 hover:border-red-600 transition-all duration-300 transform hover:scale-105"
             in:fly={{ y: 50, delay: i * 100, duration: 500 }}>
          <div class="p-8">
            <div class="text-6xl mb-4">{study.icon}</div>
            <span class="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full mb-3">
              Case Study
            </span>
            <h3 class="text-2xl font-bold text-white mb-2">{study.title}</h3>
            <p class="text-gray-500 text-sm mb-3">{study.film}</p>
            <p class="text-gray-400 mb-4">{study.description}</p>
            <div class="flex flex-wrap gap-2">
              {#each study.technologies as tech}
                <span class="text-xs px-2 py-1 bg-red-900/30 text-red-300 rounded-full">
                  {tech}
                </span>
              {/each}
            </div>
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- AI Impact Statistics -->
<section class="py-20 bg-black relative overflow-hidden">
  <div class="absolute inset-0 comic-speed-lines opacity-10"></div>
  <div class="container mx-auto px-4 relative z-10">
    <h2 class="text-5xl font-black text-center text-white mb-16">AI IMPACT BY THE NUMBERS</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {#each aiStats as stat, i}
        <div class="bg-gradient-to-br from-red-900/20 to-black p-8 rounded-xl border-2 border-red-600/30 text-center transform hover:scale-105 transition-all duration-300"
             in:scale={{ delay: i * 100, duration: 500 }}>
          <h3 class="text-gray-400 text-sm uppercase tracking-wider mb-2">{stat.label}</h3>
          <p class="text-5xl font-black text-red-500 mb-2">{stat.value}</p>
          <p class="text-green-400 text-sm font-semibold">{stat.trend}</p>
        </div>
      {/each}
    </div>
    
    <div class="mt-16 text-center">
      <a href="/disney/studios/vfx" 
         class="inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors duration-300 group">
        <span>Explore VFX Use Cases</span>
        <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </a>
    </div>
  </div>
</section>

<!-- AI Innovation Timeline -->
<section class="py-20 bg-gradient-to-b from-gray-900 to-black">
  <div class="container mx-auto px-4">
    <h2 class="text-5xl font-black text-center text-white mb-16">AI INNOVATION MILESTONES</h2>
    
    <div class="max-w-4xl mx-auto">
      <div class="relative">
        <!-- Timeline line -->
        <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-600 to-red-900"></div>
        
        <!-- Timeline items -->
        <div class="space-y-12">
          <div class="relative flex items-center" in:fly={{ x: -50, duration: 500 }}>
            <div class="flex-1 text-right pr-8">
              <h3 class="text-xl font-bold text-white">Motion Capture Revolution</h3>
              <p class="text-gray-400">Advanced AI-driven performance capture for Hulk</p>
            </div>
            <div class="w-4 h-4 bg-red-600 rounded-full border-4 border-black relative z-10"></div>
            <div class="flex-1 pl-8">
              <span class="text-red-500 font-bold">2012</span>
            </div>
          </div>
          
          <div class="relative flex items-center" in:fly={{ x: 50, duration: 500, delay: 100 }}>
            <div class="flex-1 text-right pr-8">
              <span class="text-red-500 font-bold">2018</span>
            </div>
            <div class="w-4 h-4 bg-red-600 rounded-full border-4 border-black relative z-10"></div>
            <div class="flex-1 pl-8">
              <h3 class="text-xl font-bold text-white">Digital Human Breakthrough</h3>
              <p class="text-gray-400">Photorealistic Thanos with AI facial mapping</p>
            </div>
          </div>
          
          <div class="relative flex items-center" in:fly={{ x: -50, duration: 500, delay: 200 }}>
            <div class="flex-1 text-right pr-8">
              <h3 class="text-xl font-bold text-white">De-aging Perfected</h3>
              <p class="text-gray-400">Seamless time-travel scenes in Endgame</p>
            </div>
            <div class="w-4 h-4 bg-red-600 rounded-full border-4 border-black relative z-10"></div>
            <div class="flex-1 pl-8">
              <span class="text-red-500 font-bold">2019</span>
            </div>
          </div>
          
          <div class="relative flex items-center" in:fly={{ x: 50, duration: 500, delay: 300 }}>
            <div class="flex-1 text-right pr-8">
              <span class="text-red-500 font-bold">2023</span>
            </div>
            <div class="w-4 h-4 bg-red-600 rounded-full border-4 border-black relative z-10"></div>
            <div class="flex-1 pl-8">
              <h3 class="text-xl font-bold text-white">Quantum Realm AI</h3>
              <p class="text-gray-400">Procedural world generation for Quantumania</p>
            </div>
          </div>
          
          <div class="relative flex items-center" in:fly={{ x: -50, duration: 500, delay: 400 }}>
            <div class="flex-1 text-right pr-8">
              <h3 class="text-xl font-bold text-white">Next-Gen Virtual Production</h3>
              <p class="text-gray-400">AI-powered real-time environments</p>
            </div>
            <div class="w-4 h-4 bg-red-600 rounded-full border-4 border-black relative z-10 animate-pulse"></div>
            <div class="flex-1 pl-8">
              <span class="text-red-500 font-bold">2025+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- AI Technology Partners -->
<section class="py-20 bg-red-950/20">
  <div class="container mx-auto px-4">
    <h2 class="text-5xl font-black text-center text-white mb-16">TECHNOLOGY PARTNERSHIPS</h2>
    
    <div class="max-w-4xl mx-auto">
      <div class="bg-black/60 backdrop-blur-sm rounded-xl p-8 border-2 border-red-600/30">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-2xl font-bold text-red-400 mb-4">VFX Partners</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-red-500 mr-2 mt-1">▸</span>
                <div>
                  <span class="font-bold text-white">Industrial Light & Magic</span>
                  <p class="text-gray-400 text-sm">AI-powered VFX pipeline</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2 mt-1">▸</span>
                <div>
                  <span class="font-bold text-white">Weta Digital</span>
                  <p class="text-gray-400 text-sm">Machine learning character animation</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2 mt-1">▸</span>
                <div>
                  <span class="font-bold text-white">Framestore</span>
                  <p class="text-gray-400 text-sm">Neural rendering technology</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2 mt-1">▸</span>
                <div>
                  <span class="font-bold text-white">Digital Domain</span>
                  <p class="text-gray-400 text-sm">AI facial capture systems</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-2xl font-bold text-red-400 mb-4">AI Technology Stack</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-red-500 mr-2 mt-1">▸</span>
                <div>
                  <span class="font-bold text-white">NVIDIA Omniverse</span>
                  <p class="text-gray-400 text-sm">Real-time collaboration platform</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2 mt-1">▸</span>
                <div>
                  <span class="font-bold text-white">Unreal Engine 5</span>
                  <p class="text-gray-400 text-sm">Virtual production environments</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2 mt-1">▸</span>
                <div>
                  <span class="font-bold text-white">Custom Marvel AI</span>
                  <p class="text-gray-400 text-sm">Proprietary character systems</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2 mt-1">▸</span>
                <div>
                  <span class="font-bold text-white">Volume Capture Tech</span>
                  <p class="text-gray-400 text-sm">LED wall integration</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Future of AI in Marvel -->
<section class="py-20 bg-gradient-to-b from-black to-gray-900">
  <div class="container mx-auto px-4">
    <h2 class="text-5xl font-black text-center text-white mb-16">THE FUTURE OF MARVEL AI</h2>
    
    <div class="max-w-4xl mx-auto">
      <div class="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-red-600/30">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-2xl font-bold text-red-400 mb-4">Next-Gen Technologies</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-red-500 mr-2 mt-1">▸</span>
                <div>
                  <span class="font-bold text-white">AI Director Assistant</span>
                  <p class="text-gray-400 text-sm">Real-time shot composition suggestions</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2 mt-1">▸</span>
                <div>
                  <span class="font-bold text-white">Autonomous Character AI</span>
                  <p class="text-gray-400 text-sm">Self-animating background characters</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2 mt-1">▸</span>
                <div>
                  <span class="font-bold text-white">Predictive Rendering</span>
                  <p class="text-gray-400 text-sm">AI anticipates and pre-renders scenes</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2 mt-1">▸</span>
                <div>
                  <span class="font-bold text-white">Neural Story Engine</span>
                  <p class="text-gray-400 text-sm">AI-assisted narrative development</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-2xl font-bold text-red-400 mb-4">Research Initiatives</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-red-500 mr-2 mt-1">▸</span>
                <div>
                  <span class="font-bold text-white">Quantum Computing VFX</span>
                  <p class="text-gray-400 text-sm">Exponentially faster rendering</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2 mt-1">▸</span>
                <div>
                  <span class="font-bold text-white">Holographic Projection</span>
                  <p class="text-gray-400 text-sm">True 3D filming environments</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2 mt-1">▸</span>
                <div>
                  <span class="font-bold text-white">AI Stunt Coordination</span>
                  <p class="text-gray-400 text-sm">Predictive safety systems</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-red-500 mr-2 mt-1">▸</span>
                <div>
                  <span class="font-bold text-white">Generative World Building</span>
                  <p class="text-gray-400 text-sm">Infinite environment creation</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="mt-8 pt-8 border-t border-gray-700 text-center">
          <p class="text-gray-400 mb-4">Marvel Studios continues to push the boundaries of what's possible in cinema through cutting-edge AI technology</p>
          <a href="/disney/studios/vfx" 
             class="inline-flex items-center gap-3 px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors duration-300 group">
            <span>Learn More About VFX Innovation</span>
            <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .marvel-logo {
    background: linear-gradient(180deg, #fff 0%, #ff0000 50%, #8B0000 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 0 30px rgba(255, 0, 0, 0.5);
    letter-spacing: -0.05em;
  }
  
  .comic-dots {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, #ff0000 1px, transparent 1px);
    background-size: 20px 20px;
    opacity: 0.1;
    animation: slide 10s linear infinite;
  }
  
  .comic-speed-lines {
    background: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 10px,
      rgba(255, 0, 0, 0.1) 10px,
      rgba(255, 0, 0, 0.1) 20px
    );
    animation: speed-lines 2s linear infinite;
  }
  
  @keyframes slide {
    0% { transform: translate(0, 0); }
    100% { transform: translate(20px, 20px); }
  }
  
  @keyframes speed-lines {
    0% { transform: translateX(0); }
    100% { transform: translateX(20px); }
  }
  
  :global(body) {
    font-family: 'Arial', sans-serif;
  }
</style>