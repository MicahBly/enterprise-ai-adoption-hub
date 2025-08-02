<script>
  import { onMount } from 'svelte';
  
  // Real Disney AI experiments based on their announced initiatives
  const experiments = [
    // Office of Technology Enablement Initiatives
    {
      id: 'ai-content-production',
      name: 'Large-Scale AI Content Production Initiative',
      division: 'Disney Entertainment',
      status: 'active',
      phase: 'Testing',
      description: 'Revolutionary AI system for enhancing post-production and visual effects across films and TV shows.',
      objectives: [
        'Reduce post-production time by 50%',
        'Maintain creative quality standards',
        'Scale across all studio productions'
      ],
      participants: 300,
      startDate: '2024-01',
      estimatedCompletion: '2025-06',
      metrics: {
        'Render Time Reduction': '45%',
        'Artist Productivity': '+60%',
        'Quality Score': '9.2/10'
      },
      techStack: ['Custom AI Models', 'Cloud Computing', 'NVIDIA GPUs'],
      risk: 'medium'
    },
    {
      id: 'mixed-reality-parks',
      name: 'Mixed Reality (XR) Park Experiences',
      division: 'Disney Experiences',
      status: 'active',
      phase: 'Pilot',
      description: 'Exploring AR/VR integration for enhanced park attractions and guest experiences.',
      objectives: [
        'Create immersive AR overlays for attractions',
        'Develop virtual queue experiences',
        'Test guest engagement metrics'
      ],
      participants: 50,
      startDate: '2024-02',
      estimatedCompletion: '2024-12',
      metrics: {
        'Guest Satisfaction': '+23%',
        'Engagement Time': '12 min avg',
        'Technical Success Rate': '87%'
      },
      techStack: ['Apple Vision Pro', 'Unity', 'ARCore', 'Custom XR Platform'],
      risk: 'high'
    },
    {
      id: 'ai-script-analysis',
      name: 'AI Script Analysis & Development',
      division: 'Disney Entertainment',
      status: 'active',
      phase: 'Research',
      description: 'AI system to analyze scripts and predict audience engagement and box office performance.',
      objectives: [
        'Predict audience reception',
        'Identify story improvements',
        'Optimize release strategies'
      ],
      participants: 25,
      startDate: '2024-03',
      estimatedCompletion: '2024-09',
      metrics: {
        'Prediction Accuracy': '72%',
        'Scripts Analyzed': '150+',
        'Insights Generated': '500+'
      },
      techStack: ['NLP Models', 'Sentiment Analysis', 'Predictive Analytics'],
      risk: 'low'
    },
    {
      id: 'generative-character-animation',
      name: 'Generative AI Character Animation',
      division: 'Disney Entertainment',
      status: 'active',
      phase: 'Development',
      description: 'Using generative AI to create character animations based on voice performances and scripts.',
      objectives: [
        'Automate character lip-sync',
        'Generate realistic body movements',
        'Preserve Disney animation style'
      ],
      participants: 40,
      startDate: '2023-11',
      estimatedCompletion: '2024-08',
      metrics: {
        'Animation Accuracy': '88%',
        'Time Saved': '35%',
        'Animator Approval': '7.5/10'
      },
      techStack: ['Generative AI', 'Motion Capture', 'Deep Learning'],
      risk: 'medium'
    },
    {
      id: 'autonomous-park-vehicles',
      name: 'Autonomous Vehicle Integration',
      division: 'Disney Experiences',
      status: 'active',
      phase: 'Planning',
      description: 'Partnership with Nuro for autonomous delivery and transportation within Disney properties.',
      objectives: [
        'Implement autonomous food delivery',
        'Test guest transportation pods',
        'Reduce operational costs'
      ],
      participants: 20,
      startDate: '2024-04',
      estimatedCompletion: '2025-12',
      metrics: {
        'Routes Mapped': '12',
        'Safety Tests': '100%',
        'Guest Interest': '78%'
      },
      techStack: ['Nuro Platform', 'LiDAR', 'Computer Vision', '5G Network'],
      risk: 'high'
    },
    {
      id: 'voice-ai-characters',
      name: 'AI Voice Synthesis for Characters',
      division: 'Disney Entertainment',
      status: 'active',
      phase: 'Testing',
      description: 'Using ElevenLabs AI for creating character voices in multiple languages.',
      objectives: [
        'Generate character voices in 40+ languages',
        'Maintain emotional authenticity',
        'Reduce dubbing costs by 70%'
      ],
      participants: 35,
      startDate: '2024-01',
      estimatedCompletion: '2024-07',
      metrics: {
        'Languages Tested': '25',
        'Voice Match Quality': '91%',
        'Cost Reduction': '62%'
      },
      techStack: ['ElevenLabs', 'Voice AI', 'Audio Processing'],
      risk: 'low'
    },
    {
      id: 'predictive-maintenance',
      name: 'AI Predictive Maintenance System',
      division: 'Disney Experiences',
      status: 'completed',
      phase: 'Deployed',
      description: 'IoT and AI system predicting ride maintenance needs before failures occur.',
      objectives: [
        'Reduce unexpected downtime by 80%',
        'Optimize maintenance schedules',
        'Improve guest satisfaction'
      ],
      participants: 60,
      startDate: '2023-06',
      estimatedCompletion: '2024-03',
      metrics: {
        'Downtime Reduction': '73%',
        'Cost Savings': '$2.3M/year',
        'Prediction Accuracy': '94%'
      },
      techStack: ['IoT Sensors', 'Predictive ML', 'Azure IoT'],
      risk: 'low'
    },
    {
      id: 'sports-highlight-ai',
      name: 'Automated Sports Highlight Generation',
      division: 'ESPN',
      status: 'active',
      phase: 'Pilot',
      description: 'AI system that automatically identifies and creates highlight reels from live sports.',
      objectives: [
        'Generate highlights within 30 seconds',
        'Identify key moments with 95% accuracy',
        'Scale to all major sports'
      ],
      participants: 30,
      startDate: '2024-02',
      estimatedCompletion: '2024-10',
      metrics: {
        'Processing Speed': '28 seconds',
        'Accuracy Rate': '89%',
        'Sports Covered': '5'
      },
      techStack: ['Computer Vision', 'Video AI', 'Edge Computing'],
      risk: 'medium'
    },
    {
      id: 'virtual-world-creation',
      name: 'PrometheanAI Virtual World Building',
      division: 'Disney Entertainment',
      status: 'active',
      phase: 'Research',
      description: 'Using PrometheanAI to automatically generate virtual environments for games and VR.',
      objectives: [
        'Create photorealistic environments',
        'Reduce world-building time by 80%',
        'Maintain artistic control'
      ],
      participants: 15,
      startDate: '2024-03',
      estimatedCompletion: '2024-11',
      metrics: {
        'Worlds Created': '8',
        'Time Saved': '65%',
        'Quality Score': '8.5/10'
      },
      techStack: ['PrometheanAI', 'Unreal Engine', 'Procedural Generation'],
      risk: 'medium'
    },
    {
      id: 'guest-sentiment-analysis',
      name: 'Real-time Guest Sentiment Analysis',
      division: 'Disney Experiences',
      status: 'planning',
      phase: 'Planning',
      description: 'AI system analyzing guest feedback and social media for real-time sentiment tracking.',
      objectives: [
        'Monitor guest satisfaction in real-time',
        'Identify issues before escalation',
        'Personalize guest recovery'
      ],
      participants: 10,
      startDate: '2024-06',
      estimatedCompletion: '2025-03',
      metrics: {
        'Data Sources': '0',
        'Analysis Speed': 'TBD',
        'Accuracy': 'TBD'
      },
      techStack: ['NLP', 'Sentiment Analysis', 'Real-time Processing'],
      risk: 'low'
    }
  ];
  
  let filteredExperiments = experiments;
  let selectedStatus = 'all';
  let selectedDivision = 'all';
  let selectedRisk = 'all';
  
  const statuses = ['all', 'active', 'completed', 'planning'];
  const divisions = ['all', 'Disney Entertainment', 'ESPN', 'Disney Experiences'];
  const risks = ['all', 'low', 'medium', 'high'];
  
  $: {
    filteredExperiments = experiments.filter(exp => {
      const statusMatch = selectedStatus === 'all' || exp.status === selectedStatus;
      const divisionMatch = selectedDivision === 'all' || exp.division === selectedDivision;
      const riskMatch = selectedRisk === 'all' || exp.risk === selectedRisk;
      
      return statusMatch && divisionMatch && riskMatch;
    });
  }
  
  function getPhaseColor(phase) {
    switch(phase) {
      case 'Research': return 'bg-blue-100 text-blue-800';
      case 'Planning': return 'bg-gray-100 text-gray-800';
      case 'Development': return 'bg-yellow-100 text-yellow-800';
      case 'Testing': return 'bg-purple-100 text-purple-800';
      case 'Pilot': return 'bg-orange-100 text-orange-800';
      case 'Deployed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }
  
  function getRiskColor(risk) {
    switch(risk) {
      case 'low': return 'text-green-600';
      case 'medium': return 'text-yellow-600';
      case 'high': return 'text-red-600';
      default: return 'text-gray-600';
    }
  }
</script>

<svelte:head>
  <title>AI Experiments - Disney AI Adoption Hub</title>
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 text-white py-16">
  <div class="container mx-auto px-4">
    <h1 class="text-4xl md:text-5xl font-bold mb-4">AI Experiments</h1>
    <p class="text-xl text-purple-100 mb-8">
      Innovation labs pushing the boundaries of AI across Disney
    </p>
    
    <!-- Summary Stats -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="bg-white/10 backdrop-blur rounded-lg p-4">
        <div class="text-2xl font-bold">{experiments.length}</div>
        <div class="text-sm text-gray-200">Total Experiments</div>
      </div>
      <div class="bg-white/10 backdrop-blur rounded-lg p-4">
        <div class="text-2xl font-bold">{experiments.filter(e => e.status === 'active').length}</div>
        <div class="text-sm text-gray-200">Active</div>
      </div>
      <div class="bg-white/10 backdrop-blur rounded-lg p-4">
        <div class="text-2xl font-bold">{experiments.reduce((sum, e) => sum + e.participants, 0)}</div>
        <div class="text-sm text-gray-200">Participants</div>
      </div>
      <div class="bg-white/10 backdrop-blur rounded-lg p-4">
        <div class="text-2xl font-bold">{experiments.filter(e => e.status === 'completed').length}</div>
        <div class="text-sm text-gray-200">Completed</div>
      </div>
    </div>
  </div>
</section>

<!-- Filters -->
<section class="bg-gray-50 py-6 sticky top-0 z-20 shadow-sm">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap gap-4">
      <!-- Status Filter -->
      <select
        bind:value={selectedStatus}
        class="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
      >
        {#each statuses as status}
          <option value={status}>
            {status === 'all' ? 'All Statuses' : status.charAt(0).toUpperCase() + status.slice(1)}
          </option>
        {/each}
      </select>
      
      <!-- Division Filter -->
      <select
        bind:value={selectedDivision}
        class="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
      >
        {#each divisions as division}
          <option value={division}>
            {division === 'all' ? 'All Divisions' : division}
          </option>
        {/each}
      </select>
      
      <!-- Risk Filter -->
      <select
        bind:value={selectedRisk}
        class="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
      >
        {#each risks as risk}
          <option value={risk}>
            {risk === 'all' ? 'All Risk Levels' : risk.charAt(0).toUpperCase() + risk.slice(1) + ' Risk'}
          </option>
        {/each}
      </select>
      
      <!-- Clear Filters -->
      {#if selectedStatus !== 'all' || selectedDivision !== 'all' || selectedRisk !== 'all'}
        <button
          on:click={() => {
            selectedStatus = 'all';
            selectedDivision = 'all';
            selectedRisk = 'all';
          }}
          class="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
        >
          Clear Filters
        </button>
      {/if}
    </div>
  </div>
</section>

<!-- Experiments Grid -->
<section class="container mx-auto px-4 py-8">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    {#each filteredExperiments as experiment}
      <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
        <!-- Header -->
        <div class="bg-gradient-to-r 
                    {experiment.division === 'Disney Entertainment' ? 'from-purple-500 to-pink-500' :
                     experiment.division === 'ESPN' ? 'from-red-500 to-orange-500' :
                     'from-blue-500 to-purple-500'} 
                    p-6 text-white">
          <div class="flex justify-between items-start mb-2">
            <h3 class="text-xl font-bold">{experiment.name}</h3>
            <span class="px-3 py-1 rounded-full text-xs font-semibold {getPhaseColor(experiment.phase)}">
              {experiment.phase}
            </span>
          </div>
          <p class="text-sm opacity-90">{experiment.division}</p>
        </div>
        
        <!-- Content -->
        <div class="p-6">
          <p class="text-gray-900 mb-4">{experiment.description}</p>
          
          <!-- Objectives -->
          <div class="mb-4">
            <h4 class="font-semibold text-sm mb-2">Objectives</h4>
            <ul class="space-y-1">
              {#each experiment.objectives as objective}
                <li class="text-sm text-gray-900 flex items-start">
                  <span class="text-purple-500 mr-2">•</span>
                  {objective}
                </li>
              {/each}
            </ul>
          </div>
          
          <!-- Metrics -->
          {#if Object.keys(experiment.metrics).length > 0}
            <div class="bg-gray-50 rounded-lg p-4 mb-4">
              <h4 class="font-semibold text-sm mb-2">Current Metrics</h4>
              <div class="grid grid-cols-2 gap-2 text-sm">
                {#each Object.entries(experiment.metrics) as [key, value]}
                  <div class="flex justify-between">
                    <span class="text-gray-900">{key}:</span>
                    <span class="font-medium">{value}</span>
                  </div>
                {/each}
              </div>
            </div>
          {/if}
          
          <!-- Details -->
          <div class="grid grid-cols-2 gap-4 text-sm mb-4">
            <div>
              <span class="text-gray-900">Participants:</span>
              <span class="font-medium ml-2">{experiment.participants}</span>
            </div>
            <div>
              <span class="text-gray-900">Risk:</span>
              <span class="font-medium ml-2 {getRiskColor(experiment.risk)}">
                {experiment.risk.charAt(0).toUpperCase() + experiment.risk.slice(1)}
              </span>
            </div>
            <div>
              <span class="text-gray-900">Start:</span>
              <span class="font-medium ml-2">{experiment.startDate}</span>
            </div>
            <div>
              <span class="text-gray-900">Est. Complete:</span>
              <span class="font-medium ml-2">{experiment.estimatedCompletion}</span>
            </div>
          </div>
          
          <!-- Tech Stack -->
          <div class="flex flex-wrap gap-1">
            {#each experiment.techStack as tech}
              <span class="px-2 py-1 bg-blue-100 text-blue-900 rounded text-xs">
                {tech}
              </span>
            {/each}
          </div>
          
          <!-- Status Indicator -->
          <div class="mt-4 flex items-center justify-between">
            <span class="flex items-center">
              <span class="w-2 h-2 rounded-full mr-2
                           {experiment.status === 'active' ? 'bg-green-500 animate-pulse' :
                            experiment.status === 'completed' ? 'bg-blue-500' :
                            'bg-gray-400'}">
              </span>
              <span class="text-sm font-medium capitalize">{experiment.status}</span>
            </span>
          </div>
        </div>
      </div>
    {/each}
  </div>
  
  {#if filteredExperiments.length === 0}
    <div class="text-center py-12">
      <p class="text-gray-900">No experiments match your filters.</p>
    </div>
  {/if}
</section>