<script>
  import { onMount } from 'svelte';
  
  // AI Technologies at Lucasfilm
  const aiTechnologies = [
    {
      title: 'AI Visual Effects Enhancement',
      category: 'ILM Innovation',
      description: 'Machine learning algorithms that automatically enhance visual effects, reduce rendering time, and improve realism',
      applications: 'Character de-aging, environment generation, particle effects',
      films: 'Indiana Jones 5, The Mandalorian, Ahsoka',
      icon: '🤖',
      link: '/use-cases/vfx-ai'
    },
    {
      title: 'Virtual Production with AI',
      category: 'StageCraft Technology',
      description: 'AI-powered real-time environment generation for LED volume stages',
      applications: 'Dynamic backgrounds, intelligent lighting, automated camera tracking',
      films: 'The Mandalorian, Obi-Wan Kenobi, Ahsoka',
      icon: '🎬',
      link: '/use-cases/virtual-production'
    },
    {
      title: 'AI De-aging Technology',
      category: 'Digital Human Technology',
      description: 'Advanced neural networks for photorealistic age manipulation of actors',
      applications: 'Young Luke Skywalker, Young Leia, Indiana Jones',
      films: 'The Mandalorian S2, The Book of Boba Fett, Indiana Jones 5',
      icon: '👤',
      link: '/use-cases/deepfake-detection'
    },
    {
      title: 'AI-Driven Motion Capture',
      category: 'Performance Capture',
      description: 'Machine learning for enhanced motion capture and performance translation',
      applications: 'Digital doubles, creature animation, facial capture',
      films: 'Star Wars sequels, The Mandalorian creatures',
      icon: '🎭',
      link: '/use-cases/motion-capture'
    },
    {
      title: 'Intelligent Sound Design',
      category: 'Skywalker Sound',
      description: 'AI-assisted sound effect generation and spatial audio processing',
      applications: 'Creature voices, environmental sounds, music composition',
      films: 'All modern Star Wars productions',
      icon: '🔊',
      link: '/use-cases/audio-ai'
    },
    {
      title: 'AI Script Analysis',
      category: 'Pre-production',
      description: 'Natural language processing for script breakdown and production planning',
      applications: 'Scene analysis, budget estimation, scheduling optimization',
      films: 'Upcoming Star Wars projects',
      icon: '📝',
      link: '/use-cases/content-creation'
    }
  ];

  // AI Innovation Timeline
  const innovationTimeline = [
    {
      year: 2019,
      title: 'StageCraft Debut',
      description: 'Revolutionary LED volume technology powered by game engines',
      impact: 'Transformed virtual production for The Mandalorian',
      icon: '🎮'
    },
    {
      year: 2020,
      title: 'AI De-aging Breakthrough',
      description: 'Deep learning models for photorealistic de-aging',
      impact: 'Young Luke Skywalker in The Mandalorian Season 2',
      icon: '✨'
    },
    {
      year: 2021,
      title: 'Real-time Ray Tracing',
      description: 'AI-accelerated lighting for virtual production',
      impact: 'Enhanced realism in LED volume environments',
      icon: '💡'
    },
    {
      year: 2022,
      title: 'AI Voice Synthesis',
      description: 'Neural voice models for character dialogue',
      impact: 'Young Luke and Vader voice recreation',
      icon: '🎤'
    },
    {
      year: 2023,
      title: 'Generative AI Integration',
      description: 'AI-assisted concept art and pre-visualization',
      impact: 'Accelerated pre-production for new projects',
      icon: '🎨'
    },
    {
      year: 2024,
      title: 'AI Performance Capture',
      description: 'Machine learning for enhanced motion capture',
      impact: 'More realistic digital characters and creatures',
      icon: '🏃'
    }
  ];

  // Research Partnerships
  const researchPartners = [
    {
      partner: 'NVIDIA',
      focus: 'Real-time ray tracing and AI-accelerated rendering',
      technologies: 'RTX, DLSS, Omniverse',
      icon: '🖥️'
    },
    {
      partner: 'Epic Games',
      focus: 'Unreal Engine integration for virtual production',
      technologies: 'UE5, Nanite, Lumen',
      icon: '🎮'
    },
    {
      partner: 'Disney Research',
      focus: 'Advanced computer graphics and AI research',
      technologies: 'Neural rendering, digital humans',
      icon: '🔬'
    },
    {
      partner: 'USC Institute for Creative Technologies',
      focus: 'Virtual humans and immersive experiences',
      technologies: 'Digital actors, VR/AR applications',
      icon: '🎓'
    }
  ];

  // Case Studies
  const caseStudies = [
    {
      title: 'The Mandalorian: StageCraft Revolution',
      challenge: 'Creating diverse alien worlds on a TV budget and schedule',
      solution: 'AI-powered virtual production with real-time environments',
      results: 'Reduced location costs by 60%, faster production, Emmy wins',
      icon: '🌍'
    },
    {
      title: 'Luke Skywalker: Digital Resurrection',
      challenge: 'Creating a young Luke Skywalker for key story moments',
      solution: 'AI de-aging and deepfake technology with ethical guidelines',
      results: 'Photorealistic appearance that honored the character',
      icon: '⚔️'
    },
    {
      title: 'Indiana Jones 5: Time-Defying Technology',
      challenge: 'De-aging Harrison Ford for extended flashback sequences',
      solution: 'Advanced AI algorithms trained on archival footage',
      results: 'Seamless integration of young and old Indy',
      icon: '🏺'
    }
  ];

  // Future Initiatives
  const futureInitiatives = [
    {
      title: 'AI-Generated Worlds',
      description: 'Procedural generation of Star Wars planets and environments',
      timeline: '2025-2026',
      icon: '🌌'
    },
    {
      title: 'Autonomous Digital Actors',
      description: 'AI-driven background characters with realistic behaviors',
      timeline: '2024-2025',
      icon: '👥'
    },
    {
      title: 'Real-time Language Translation',
      description: 'AI translation for alien languages in production',
      timeline: '2024',
      icon: '🗣️'
    },
    {
      title: 'Predictive Pre-visualization',
      description: 'AI-assisted shot planning and cinematography',
      timeline: '2025',
      icon: '📹'
    }
  ];

  // Awards and achievements
  const achievements = {
    emmyAwards: 15,
    vesAwards: 23,
    techOscars: 8,
    innovationAwards: 12
  };

  let crawlAnimation = false;
  let lightsaberActive = false;
  
  onMount(() => {
    // Trigger crawl animation on load
    setTimeout(() => {
      crawlAnimation = true;
    }, 500);
    
    // Lightsaber effect
    const interval = setInterval(() => {
      lightsaberActive = !lightsaberActive;
    }, 3000);
    
    return () => clearInterval(interval);
  });
</script>

<svelte:head>
  <title>Lucasfilm AI Innovations - Star Wars Technology & ILM</title>
</svelte:head>

<!-- Hero Section with Star Wars Crawl Effect -->
<section class="relative min-h-screen bg-black overflow-hidden">
  <!-- Star field background -->
  <div class="absolute inset-0">
    <div class="stars"></div>
    <div class="stars2"></div>
    <div class="stars3"></div>
  </div>
  
  <!-- Hero Content -->
  <div class="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen">
    <div class={`text-center transform transition-all duration-1000 ${crawlAnimation ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
      <h1 class="text-6xl md:text-8xl font-bold mb-6 text-yellow-400 tracking-wider">
        LUCASFILM
      </h1>
      <p class="text-2xl md:text-3xl mb-8 text-blue-400 font-light tracking-widest">
        PIONEERING AI IN FILMMAKING
      </p>
      <div class="max-w-3xl mx-auto text-white text-lg leading-relaxed space-y-4">
        <p>Where artificial intelligence meets cinematic storytelling</p>
        <p>Creating the future of entertainment technology</p>
      </div>
      
    </div>
    
    <!-- Lightsaber effect -->
    <div class={`absolute bottom-10 transition-all duration-500 ${lightsaberActive ? 'opacity-100' : 'opacity-0'}`}>
      <div class="w-1 h-32 bg-gradient-to-t from-blue-400 via-blue-300 to-white rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)]"></div>
    </div>
  </div>
</section>

<!-- AI Technologies Section -->
<section class="bg-gray-900 text-white py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold mb-12 text-center text-yellow-400">AI INNOVATIONS AT LUCASFILM</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each aiTechnologies as tech}
        <a href={tech.link} class="block">
          <div class="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-yellow-400 transition-all hover:transform hover:scale-105">
            <div class="flex items-center justify-between mb-4">
              <span class="text-4xl">{tech.icon}</span>
              <span class="text-sm text-blue-400 font-semibold">{tech.category}</span>
            </div>
            <h3 class="text-xl font-bold mb-2 text-yellow-300">{tech.title}</h3>
            <p class="text-gray-300 mb-3">{tech.description}</p>
            <p class="text-sm text-blue-300 mb-2"><strong>Applications:</strong> {tech.applications}</p>
            <p class="text-sm text-gray-400 italic">Featured in: {tech.films}</p>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<!-- Innovation Timeline -->
<section class="bg-gradient-to-b from-gray-900 to-black py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold mb-12 text-center text-yellow-400">AI INNOVATION TIMELINE</h2>
    
    <div class="max-w-4xl mx-auto">
      {#each innovationTimeline as milestone}
        <div class="flex items-start mb-8 group">
          <div class="flex-shrink-0 w-24 text-right mr-8">
            <div class="text-2xl font-bold text-blue-400">{milestone.year}</div>
          </div>
          <div class="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
            {milestone.icon}
          </div>
          <div class="ml-8 flex-grow bg-gray-800 rounded-lg p-6 group-hover:bg-gray-700 transition-colors">
            <h3 class="text-xl font-bold text-yellow-300 mb-2">{milestone.title}</h3>
            <p class="text-gray-300 mb-2">{milestone.description}</p>
            <p class="text-sm text-blue-300"><strong>Impact:</strong> {milestone.impact}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Case Studies Section -->
<section class="bg-gradient-to-br from-yellow-900 via-yellow-800 to-amber-900 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold mb-12 text-center text-white">AI SUCCESS STORIES</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {#each caseStudies as study}
        <div class="bg-gradient-to-br from-amber-700 to-amber-800 rounded-lg p-6 text-white hover:from-amber-600 hover:to-amber-700 transition-all">
          <div class="text-5xl mb-4 text-center">{study.icon}</div>
          <h3 class="text-xl font-bold mb-3">{study.title}</h3>
          <div class="space-y-3">
            <div>
              <p class="text-sm font-semibold text-yellow-200">Challenge:</p>
              <p class="text-sm">{study.challenge}</p>
            </div>
            <div>
              <p class="text-sm font-semibold text-yellow-200">Solution:</p>
              <p class="text-sm">{study.solution}</p>
            </div>
            <div>
              <p class="text-sm font-semibold text-yellow-200">Results:</p>
              <p class="text-sm">{study.results}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Research Partnerships -->
<section class="bg-gray-100 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold text-gray-900 mb-8">Research Partnerships</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each researchPartners as partner}
        <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div class="text-4xl mb-4">{partner.icon}</div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">{partner.partner}</h3>
          <p class="text-gray-600 mb-3">{partner.focus}</p>
          <p class="text-sm text-blue-600 font-semibold">Tech: {partner.technologies}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Future Initiatives Section -->
<section class="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-16">
  <div class="container mx-auto px-4">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold mb-4">FUTURE AI INITIATIVES</h2>
      <p class="text-xl text-blue-200">Next-Generation Filmmaking Technology</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each futureInitiatives as initiative}
        <div class="bg-white/10 backdrop-blur rounded-lg p-6 hover:bg-white/20 transition-all">
          <div class="text-4xl mb-4">{initiative.icon}</div>
          <h3 class="text-xl font-bold mb-2">{initiative.title}</h3>
          <p class="text-sm mb-3">{initiative.description}</p>
          <p class="text-xs text-blue-300">Timeline: {initiative.timeline}</p>
        </div>
      {/each}
    </div>
    
    <div class="mt-12 text-center">
      <div class="inline-grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/10 rounded-2xl p-8">
        <div>
          <div class="text-4xl font-bold text-yellow-400">{achievements.emmyAwards}</div>
          <p class="text-sm">Emmy Awards</p>
        </div>
        <div>
          <div class="text-4xl font-bold text-yellow-400">{achievements.vesAwards}</div>
          <p class="text-sm">VES Awards</p>
        </div>
        <div>
          <div class="text-4xl font-bold text-yellow-400">{achievements.techOscars}</div>
          <p class="text-sm">Tech Oscars</p>
        </div>
        <div>
          <div class="text-4xl font-bold text-yellow-400">{achievements.innovationAwards}</div>
          <p class="text-sm">Innovation Awards</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- AI Integration Benefits -->
<section class="bg-black text-white py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold mb-12 text-center text-yellow-400">THE IMPACT OF AI</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <div class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 border border-gray-700">
        <h3 class="text-2xl font-bold mb-4 text-blue-400">Production Efficiency</h3>
        <ul class="space-y-3 text-gray-300">
          <li class="flex items-start">
            <span class="text-yellow-400 mr-2">▸</span>
            <span>60% reduction in VFX production time</span>
          </li>
          <li class="flex items-start">
            <span class="text-yellow-400 mr-2">▸</span>
            <span>Real-time rendering for instant feedback</span>
          </li>
          <li class="flex items-start">
            <span class="text-yellow-400 mr-2">▸</span>
            <span>Automated rotoscoping and compositing</span>
          </li>
        </ul>
      </div>
      
      <div class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 border border-gray-700">
        <h3 class="text-2xl font-bold mb-4 text-blue-400">Creative Enhancement</h3>
        <ul class="space-y-3 text-gray-300">
          <li class="flex items-start">
            <span class="text-yellow-400 mr-2">▸</span>
            <span>AI-assisted concept art generation</span>
          </li>
          <li class="flex items-start">
            <span class="text-yellow-400 mr-2">▸</span>
            <span>Enhanced storytelling possibilities</span>
          </li>
          <li class="flex items-start">
            <span class="text-yellow-400 mr-2">▸</span>
            <span>Photorealistic digital humans</span>
          </li>
        </ul>
      </div>
      
      <div class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 border border-gray-700">
        <h3 class="text-2xl font-bold mb-4 text-blue-400">Cost Optimization</h3>
        <ul class="space-y-3 text-gray-300">
          <li class="flex items-start">
            <span class="text-yellow-400 mr-2">▸</span>
            <span>Reduced location shooting costs</span>
          </li>
          <li class="flex items-start">
            <span class="text-yellow-400 mr-2">▸</span>
            <span>Faster iteration cycles</span>
          </li>
          <li class="flex items-start">
            <span class="text-yellow-400 mr-2">▸</span>
            <span>Scalable production pipelines</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- AI Ethics & Responsibility -->
<section class="bg-gradient-to-b from-gray-900 to-black py-16">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto text-center text-white">
      <h2 class="text-4xl font-bold mb-8 text-yellow-400">RESPONSIBLE AI INNOVATION</h2>
      
      <div class="space-y-8">
        <div class="bg-gray-800/50 rounded-2xl p-8 backdrop-blur">
          <h3 class="text-2xl font-bold mb-4 text-blue-400">Ethical Guidelines</h3>
          <p class="text-lg leading-relaxed">
            Lucasfilm maintains strict ethical guidelines for AI use, ensuring technology enhances 
            rather than replaces human creativity. We prioritize transparency, consent, and respect 
            for legacy performances when using AI for digital humans.
          </p>
        </div>
        
        <div class="bg-gray-800/50 rounded-2xl p-8 backdrop-blur">
          <h3 class="text-2xl font-bold mb-4 text-blue-400">Collaboration with Artists</h3>
          <p class="text-lg leading-relaxed">
            AI tools are designed to augment artist capabilities, not replace them. Our approach 
            ensures that human creativity remains at the center of storytelling, with AI serving 
            as a powerful tool for realizing artistic visions.
          </p>
        </div>
        
        <div class="bg-gray-800/50 rounded-2xl p-8 backdrop-blur">
          <h3 class="text-2xl font-bold mb-4 text-blue-400">Industry Leadership</h3>
          <p class="text-lg leading-relaxed">
            As pioneers in entertainment AI, we're committed to setting industry standards for 
            responsible innovation. Through open collaboration and knowledge sharing, we're helping 
            shape a future where AI enhances cinematic storytelling for everyone.
          </p>
        </div>
      </div>
      
      <div class="mt-12">
        <p class="text-2xl text-yellow-400 font-light italic">
          "Technology in service of storytelling"
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Call to Action -->
<section class="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
  <div class="container mx-auto px-4">
    <div class="max-w-3xl mx-auto text-center text-white">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Learn More About Our AI Innovations</h2>
      <p class="text-xl mb-8 text-blue-100">
        Discover how Lucasfilm is using AI to create the next generation of cinematic experiences
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <a href="/use-cases/vfx-ai" class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Explore VFX AI
        </a>
        <a href="/use-cases/virtual-production" class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Virtual Production
        </a>
        <a href="/contact" class="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
          Contact Us
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  /* Star field animation */
  .stars {
    position: absolute;
    width: 1px;
    height: 1px;
    background: white;
    box-shadow: 
      100px 100px white, 200px 150px white, 300px 250px white,
      400px 200px white, 500px 300px white, 600px 150px white,
      700px 250px white, 800px 100px white, 900px 350px white,
      150px 400px white, 250px 450px white, 350px 500px white,
      450px 550px white, 550px 600px white, 650px 400px white,
      750px 500px white, 850px 450px white, 950px 550px white;
    animation: animStar 50s linear infinite;
  }
  
  .stars2 {
    position: absolute;
    width: 2px;
    height: 2px;
    background: white;
    box-shadow: 
      150px 200px white, 250px 100px white, 350px 300px white,
      450px 150px white, 550px 250px white, 650px 350px white,
      750px 200px white, 850px 300px white, 950px 150px white,
      100px 450px white, 200px 550px white, 300px 400px white,
      400px 500px white, 500px 600px white, 600px 450px white,
      700px 550px white, 800px 400px white, 900px 500px white;
    animation: animStar 100s linear infinite;
  }
  
  .stars3 {
    position: absolute;
    width: 1px;
    height: 1px;
    background: white;
    box-shadow: 
      50px 150px white, 150px 50px white, 250px 200px white,
      350px 100px white, 450px 250px white, 550px 150px white,
      650px 50px white, 750px 200px white, 850px 100px white,
      200px 350px white, 300px 450px white, 400px 350px white,
      500px 450px white, 600px 550px white, 700px 350px white,
      800px 450px white, 900px 350px white;
    animation: animStar 150s linear infinite;
  }
  
  @keyframes animStar {
    from { transform: translateY(0px); }
    to { transform: translateY(-2000px); }
  }
</style>