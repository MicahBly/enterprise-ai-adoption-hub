<script>
  import { onMount } from 'svelte';
  
  // AI Innovation areas at Pixar
  const aiInnovations = [
    {
      title: 'AI-Assisted Storyboarding',
      status: 'Testing',
      description: 'Revolutionary AI tools that help artists create storyboards and concept art during pre-production, enhancing creative exploration while maintaining artistic vision.',
      impact: '30% faster pre-production process',
      link: '/disney/use-cases#storyboard-ai',
      icon: '🎨',
      category: 'Pre-production'
    },
    {
      title: 'Generative AI Character Animation',
      status: 'Active Development',
      description: 'Using generative AI to create character animations based on voice performances and scripts, automating lip-sync and generating realistic body movements.',
      impact: '35% time saved in animation process',
      link: '/disney/experiments#generative-character-animation',
      icon: '🎭',
      category: 'Animation'
    },
    {
      title: 'AI-Powered Rendering Optimization',
      status: 'Deployed',
      description: 'Machine learning algorithms optimize rendering processes, predicting computational needs and automatically adjusting quality settings for optimal performance.',
      impact: '45% reduction in render times',
      link: '#',
      icon: '⚡',
      category: 'Rendering'
    },
    {
      title: 'Neural Scene Understanding',
      status: 'Research',
      description: 'AI systems that understand 3D scenes to automatically generate lighting setups, camera angles, and scene compositions based on storytelling intent.',
      impact: 'Enhanced creative decision-making',
      link: '#',
      icon: '🧠',
      category: 'Scene Design'
    },
    {
      title: 'Motion Capture Enhancement',
      status: 'Testing',
      description: 'AI-driven cleanup and enhancement of motion capture data, reducing manual correction time while preserving performance nuances.',
      impact: '60% reduction in mocap cleanup time',
      link: '#',
      icon: '🎬',
      category: 'Motion Capture'
    },
    {
      title: 'Procedural Animation AI',
      status: 'Deployed',
      description: 'Intelligent systems for generating crowds, particles, and environmental effects that respond naturally to story context.',
      impact: 'Scalable complexity without manual work',
      link: '#',
      icon: '🌊',
      category: 'Effects'
    }
  ];

  // Technical achievements
  const techAchievements = [
    {
      year: 2020,
      title: 'Machine Learning Pipeline',
      description: 'Integrated ML workflows into production pipeline',
      award: 'Technical Achievement Award'
    },
    {
      year: 2021,
      title: 'AI-Assisted Animation Tools',
      description: 'First deployment of AI in-betweening systems',
      award: 'Innovation Recognition'
    },
    {
      year: 2022,
      title: 'Neural Rendering Engine',
      description: 'AI-accelerated rendering for complex scenes',
      award: 'Industry Game-Changer'
    },
    {
      year: 2023,
      title: 'Generative Pre-visualization',
      description: 'AI tools for rapid scene prototyping',
      award: 'Creative Technology Award'
    },
    {
      year: 2024,
      title: 'Unified AI Platform',
      description: 'Enterprise-wide AI infrastructure for all studios',
      award: 'Strategic Initiative'
    }
  ];

  // Research areas
  const researchAreas = [
    {
      area: 'Computer Vision',
      projects: ['Scene Understanding', 'Motion Analysis', 'Asset Recognition'],
      impact: 'Automated scene setup and optimization'
    },
    {
      area: 'Natural Language Processing',
      projects: ['Script-to-Scene', 'Dialogue Animation', 'Story Analysis'],
      impact: 'Direct story-to-animation workflows'
    },
    {
      area: 'Generative AI',
      projects: ['Character Design', 'Environment Creation', 'Texture Synthesis'],
      impact: 'Rapid prototyping and ideation'
    },
    {
      area: 'Reinforcement Learning',
      projects: ['Character Behavior', 'Crowd Simulation', 'Physics Optimization'],
      impact: 'Realistic autonomous animations'
    }
  ];

  // AI Integration stats
  const integrationStats = {
    productionsUsingAI: 100,
    aiToolsDeployed: 25,
    timeReduction: 40,
    artistsTrainedOnAI: 500,
    customModels: 15
  };

  let selectedCategory = 'all';
  let animationProgress = 0;
  
  onMount(() => {
    // Animate progress bars
    const interval = setInterval(() => {
      if (animationProgress < 100) {
        animationProgress += 2;
      } else {
        clearInterval(interval);
      }
    }, 20);
    
    return () => clearInterval(interval);
  });

  function filterInnovations(category) {
    selectedCategory = category;
  }

  $: filteredInnovations = selectedCategory === 'all' 
    ? aiInnovations 
    : aiInnovations.filter(item => item.category.toLowerCase().includes(selectedCategory.toLowerCase()));
</script>

<svelte:head>
  <title>Pixar AI Innovation Lab - Pioneering Animation Technology</title>
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
  <div class="absolute inset-0 opacity-10">
    <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2523ffffff%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
  </div>
  
  <div class="relative z-10 container mx-auto px-4 py-20">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-5xl md:text-7xl font-bold mb-6">
        PIXAR <span class="text-yellow-300">AI Lab</span>
      </h1>
      <p class="text-2xl md:text-3xl mb-8 text-blue-100">
        Where Artificial Intelligence Meets Artistic Vision
      </p>
      <p class="text-xl mb-12 max-w-3xl mx-auto">
        Pioneering the future of animation through cutting-edge AI technologies that enhance creativity, 
        streamline production, and push the boundaries of what's possible in storytelling.
      </p>
      
      <!-- Key Stats -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
        <div class="bg-white/20 backdrop-blur rounded-xl p-6">
          <div class="text-4xl font-bold text-yellow-300">{integrationStats.aiToolsDeployed}</div>
          <div class="text-sm mt-2">AI Tools Deployed</div>
        </div>
        <div class="bg-white/20 backdrop-blur rounded-xl p-6">
          <div class="text-4xl font-bold text-yellow-300">{integrationStats.timeReduction}%</div>
          <div class="text-sm mt-2">Time Reduction</div>
        </div>
        <div class="bg-white/20 backdrop-blur rounded-xl p-6">
          <div class="text-4xl font-bold text-yellow-300">{integrationStats.artistsTrainedOnAI}+</div>
          <div class="text-sm mt-2">Artists Trained</div>
        </div>
        <div class="bg-white/20 backdrop-blur rounded-xl p-6">
          <div class="text-4xl font-bold text-yellow-300">{integrationStats.customModels}</div>
          <div class="text-sm mt-2">Custom AI Models</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- AI Innovations -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-4xl font-bold text-gray-900 mb-4">AI-Powered Innovation</h2>
  <p class="text-lg text-gray-700 mb-8">Discover how we're using AI to revolutionize animation</p>
  
  <!-- Category Filter -->
  <div class="flex flex-wrap gap-3 mb-8">
    <button 
      on:click={() => filterInnovations('all')}
      class="px-6 py-2 rounded-full transition-all {selectedCategory === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}"
    >
      All Categories
    </button>
    <button 
      on:click={() => filterInnovations('pre-production')}
      class="px-6 py-2 rounded-full transition-all {selectedCategory === 'pre-production' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}"
    >
      Pre-production
    </button>
    <button 
      on:click={() => filterInnovations('animation')}
      class="px-6 py-2 rounded-full transition-all {selectedCategory === 'animation' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}"
    >
      Animation
    </button>
    <button 
      on:click={() => filterInnovations('rendering')}
      class="px-6 py-2 rounded-full transition-all {selectedCategory === 'rendering' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}"
    >
      Rendering
    </button>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each filteredInnovations as innovation}
      <a 
        href={innovation.link}
        class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105 {innovation.link === '#' ? 'cursor-default' : ''}"
      >
        <div class="p-8">
          <div class="flex items-start justify-between mb-4">
            <div class="text-5xl">{innovation.icon}</div>
            <span class="px-3 py-1 rounded-full text-xs font-bold 
              {innovation.status === 'Deployed' ? 'bg-green-100 text-green-800' : 
               innovation.status === 'Testing' ? 'bg-yellow-100 text-yellow-800' : 
               innovation.status === 'Active Development' ? 'bg-blue-100 text-blue-800' :
               'bg-gray-100 text-gray-800'}">
              {innovation.status}
            </span>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">{innovation.title}</h3>
          <p class="text-gray-600 mb-4">{innovation.description}</p>
          <div class="pt-4 border-t border-gray-100">
            <p class="text-sm font-semibold text-blue-600">{innovation.impact}</p>
            <p class="text-xs text-gray-500 mt-1">{innovation.category}</p>
          </div>
        </div>
      </a>
    {/each}
  </div>
</section>

<!-- Technical Achievements Timeline -->
<section class="bg-gray-50 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold text-gray-900 mb-8">AI Technology Timeline</h2>
    
    <div class="relative">
      <!-- Timeline line -->
      <div class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>
      
      {#each techAchievements as achievement, index}
        <div class="relative flex items-center mb-8 {index % 2 === 0 ? 'md:flex-row-reverse' : ''}">
          <div class="w-full md:w-1/2 {index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}">
            <div class="bg-white rounded-xl shadow-lg p-6 ml-8 md:ml-0">
              <div class="text-2xl font-bold text-blue-600 mb-2">{achievement.year}</div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
              <p class="text-gray-600 mb-3">{achievement.description}</p>
              <span class="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                {achievement.award}
              </span>
            </div>
          </div>
          
          <!-- Timeline dot -->
          <div class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Research Areas -->
<section class="container mx-auto px-4 py-16">
  <h2 class="text-4xl font-bold text-gray-900 mb-8">AI Research Focus Areas</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    {#each researchAreas as area}
      <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
        <h3 class="text-2xl font-bold text-gray-900 mb-4">{area.area}</h3>
        <div class="mb-4">
          <h4 class="text-sm font-semibold text-gray-700 mb-2">Active Projects:</h4>
          <div class="flex flex-wrap gap-2">
            {#each area.projects as project}
              <span class="px-3 py-1 bg-white rounded-lg text-sm font-medium text-gray-700">
                {project}
              </span>
            {/each}
          </div>
        </div>
        <div class="pt-4 border-t border-blue-100">
          <p class="text-sm text-gray-700">
            <span class="font-semibold">Impact:</span> {area.impact}
          </p>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- Integration Progress -->
<section class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold mb-8 text-center">AI Integration Progress</h2>
    
    <div class="max-w-4xl mx-auto space-y-6">
      <div>
        <div class="flex justify-between mb-2">
          <span>Pre-production AI Tools</span>
          <span>{Math.round(animationProgress * 0.85)}%</span>
        </div>
        <div class="bg-white/20 rounded-full h-4 overflow-hidden">
          <div 
            class="bg-yellow-400 h-full transition-all duration-1000 ease-out"
            style="width: {animationProgress * 0.85}%"
          ></div>
        </div>
      </div>
      
      <div>
        <div class="flex justify-between mb-2">
          <span>Animation AI Assistance</span>
          <span>{Math.round(animationProgress * 0.75)}%</span>
        </div>
        <div class="bg-white/20 rounded-full h-4 overflow-hidden">
          <div 
            class="bg-yellow-400 h-full transition-all duration-1000 ease-out"
            style="width: {animationProgress * 0.75}%"
          ></div>
        </div>
      </div>
      
      <div>
        <div class="flex justify-between mb-2">
          <span>Rendering Optimization</span>
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
          <span>Post-production AI</span>
          <span>{Math.round(animationProgress * 0.70)}%</span>
        </div>
        <div class="bg-white/20 rounded-full h-4 overflow-hidden">
          <div 
            class="bg-yellow-400 h-full transition-all duration-1000 ease-out"
            style="width: {animationProgress * 0.70}%"
          ></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Call to Action -->
<section class="container mx-auto px-4 py-16">
  <div class="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white text-center">
    <h2 class="text-3xl md:text-4xl font-bold mb-4">Join the AI Revolution at Pixar</h2>
    <p class="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
      Explore how we're using AI to enhance creativity and push the boundaries of animation
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="/disney/use-cases" class="px-8 py-4 bg-white text-purple-600 rounded-lg font-bold hover:bg-purple-50 transition-colors">
        View All Use Cases
      </a>
      <a href="/disney/experiments" class="px-8 py-4 bg-purple-500 text-white rounded-lg font-bold hover:bg-purple-400 transition-colors">
        Explore Experiments
      </a>
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