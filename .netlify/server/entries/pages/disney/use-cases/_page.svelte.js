import { c as create_ssr_component, a as subscribe, e as escape, d as add_attribute, b as each } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  const useCases = [
    // Disney Entertainment
    {
      id: "animation-inbetweening",
      title: "AI-Powered Animation In-Betweening",
      division: "Disney Entertainment",
      department: "Walt Disney Animation Studios",
      status: "Deployed",
      description: "Machine learning algorithms generate intermediate frames between key animation frames, significantly reducing animator workload.",
      impact: {
        efficiency: "40% reduction in animation time",
        quality: "Maintains Disney animation quality standards",
        adoption: "100% of animation teams"
      },
      techStack: ["TensorFlow", "PyTorch", "Custom ML Models"],
      owner: "Animation Technology Team",
      tags: ["Computer Vision", "Deep Learning", "Content Creation"]
    },
    {
      id: "visual-effects-enhancement",
      title: "AI Visual Effects Enhancement",
      division: "Disney Entertainment",
      department: "Industrial Light & Magic",
      status: "Deployed",
      description: "AI-driven tools for realistic visual effects in films, analyzing real-life movements and interactions.",
      impact: {
        efficiency: "60% faster VFX rendering",
        quality: "Photorealistic effects",
        adoption: "All major productions"
      },
      techStack: ["NVIDIA AI", "Custom Neural Networks", "Cloud Rendering"],
      owner: "VFX Technology Team",
      tags: ["Visual Effects", "Neural Rendering", "Film Production"]
    },
    {
      id: "content-recommendation",
      title: "Disney+ Personalized Recommendations",
      division: "Disney Entertainment",
      department: "Disney Streaming",
      status: "Deployed",
      description: "Advanced recommendation engine analyzing viewing patterns to suggest content across Disney+ catalog.",
      impact: {
        efficiency: "35% increase in content engagement",
        quality: "4.2/5 user satisfaction",
        adoption: "150M+ subscribers"
      },
      techStack: ["AWS SageMaker", "Apache Spark", "Real-time ML"],
      owner: "Streaming Analytics Team",
      tags: ["Personalization", "Machine Learning", "Streaming"]
    },
    {
      id: "storyboard-ai",
      title: "AI-Assisted Storyboarding",
      division: "Disney Entertainment",
      department: "Pixar Animation Studios",
      status: "Testing",
      description: "AI tools assist in creating storyboards and concept art during pre-production.",
      impact: {
        efficiency: "30% faster pre-production",
        quality: "Enhanced creative exploration",
        adoption: "3 pilot projects"
      },
      techStack: ["Stable Diffusion", "Custom Models", "Adobe Integration"],
      owner: "Creative Technology Team",
      tags: ["Generative AI", "Pre-production", "Creative Tools"]
    },
    // ESPN
    {
      id: "sports-analytics",
      title: "Real-time Sports Analytics Platform",
      division: "ESPN",
      department: "ESPN Technology",
      status: "Deployed",
      description: "AI-powered analytics providing real-time game predictions and player performance insights.",
      impact: {
        efficiency: "50ms prediction latency",
        quality: "87% prediction accuracy",
        adoption: "All major sports"
      },
      techStack: ["Apache Kafka", "TensorFlow", "Redis"],
      owner: "Sports Data Science Team",
      tags: ["Sports Analytics", "Real-time ML", "Predictive Analytics"]
    },
    {
      id: "fantasy-insights",
      title: "Fantasy Sports AI Assistant",
      division: "ESPN",
      department: "Fantasy Sports",
      status: "Deployed",
      description: "AI-driven recommendations for fantasy lineup optimization and player selection.",
      impact: {
        efficiency: "45% better team performance",
        quality: "25M+ active users",
        adoption: "All fantasy sports"
      },
      techStack: ["Python", "Scikit-learn", "PostgreSQL"],
      owner: "Fantasy Product Team",
      tags: ["Fantasy Sports", "Recommendation Engine", "Gaming"]
    },
    {
      id: "automated-highlights",
      title: "Automated Highlight Generation",
      division: "ESPN",
      department: "Content Production",
      status: "Testing",
      description: "AI identifies and creates highlight reels from live sports broadcasts automatically.",
      impact: {
        efficiency: "80% faster highlight creation",
        quality: "Broadcast quality",
        adoption: "5 sports piloting"
      },
      techStack: ["Computer Vision", "Video AI", "Edge Computing"],
      owner: "Broadcast Technology Team",
      tags: ["Video Processing", "Automation", "Content Creation"]
    },
    // Disney Experiences
    {
      id: "crowd-management",
      title: "AI Crowd Flow Optimization",
      division: "Disney Experiences",
      department: "Parks Operations",
      status: "Deployed",
      description: "Real-time crowd management using AI to predict and optimize guest flow throughout parks.",
      impact: {
        efficiency: "25% reduction in wait times",
        quality: "92% guest satisfaction",
        adoption: "All US parks"
      },
      techStack: ["IoT Sensors", "Edge AI", "Predictive Analytics"],
      owner: "Parks Technology Team",
      tags: ["IoT", "Operations", "Guest Experience"]
    },
    {
      id: "facial-recognition-security",
      title: "Enhanced Security Systems",
      division: "Disney Experiences",
      department: "Security Operations",
      status: "Deployed",
      description: "AI-based facial recognition and surveillance for enhanced park security.",
      impact: {
        efficiency: "60% faster threat detection",
        quality: "99.9% uptime",
        adoption: "All park entrances"
      },
      techStack: ["Computer Vision", "Edge Computing", "Real-time Processing"],
      owner: "Security Technology Team",
      tags: ["Security", "Computer Vision", "Safety"]
    },
    {
      id: "virtual-queue",
      title: "Lightning Lane AI Optimization",
      division: "Disney Experiences",
      department: "Guest Experience",
      status: "Deployed",
      description: "AI optimizes virtual queue and Lightning Lane availability based on real-time data.",
      impact: {
        efficiency: "35% better capacity utilization",
        quality: "4.5/5 guest rating",
        adoption: "50+ attractions"
      },
      techStack: ["Machine Learning", "Mobile Integration", "Cloud Services"],
      owner: "Guest Experience Team",
      tags: ["Guest Experience", "Mobile", "Operations"]
    },
    {
      id: "chatbot-support",
      title: "AI Guest Support Assistant",
      division: "Disney Experiences",
      department: "Guest Relations",
      status: "Deployed",
      description: "AI chatbots handle guest inquiries about park hours, attractions, and dining.",
      impact: {
        efficiency: "70% query resolution rate",
        quality: "24/7 availability",
        adoption: "Web and mobile apps"
      },
      techStack: ["Natural Language Processing", "DialogFlow", "Multi-language"],
      owner: "Digital Experience Team",
      tags: ["NLP", "Customer Service", "Automation"]
    },
    {
      id: "photopass-ai",
      title: "PhotoPass AI Enhancement",
      division: "Disney Experiences",
      department: "PhotoPass",
      status: "Testing",
      description: "AI automatically captures and enhances guest photos at attractions.",
      impact: {
        efficiency: "3x more photos captured",
        quality: "Professional quality",
        adoption: "10 attractions piloting"
      },
      techStack: ["Computer Vision", "Image Enhancement", "Cloud Storage"],
      owner: "PhotoPass Team",
      tags: ["Photography", "Computer Vision", "Guest Experience"]
    }
  ];
  let filteredUseCases = useCases;
  let selectedDivision = "all";
  let selectedStatus = "all";
  let searchQuery = "";
  let selectedTags = [];
  const divisions = ["all", "Disney Entertainment", "ESPN", "Disney Experiences"];
  const statuses = ["all", "Deployed", "Testing", "Planning"];
  const allTags = [...new Set(useCases.flatMap((uc) => uc.tags))].sort();
  {
    {
      filteredUseCases = useCases.filter((useCase) => {
        const divisionMatch = selectedDivision === "all";
        const statusMatch = selectedStatus === "all";
        const searchMatch = searchQuery === "";
        const tagMatch = selectedTags.length === 0 || selectedTags.every((tag) => useCase.tags.includes(tag));
        return divisionMatch && statusMatch && searchMatch && tagMatch;
      });
    }
  }
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-scx79l_START -->${$$result.title = `<title>AI Use Cases - Disney AI Adoption Hub</title>`, ""}<!-- HEAD_svelte-scx79l_END -->`, ""}  <section class="bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 text-white py-16"><div class="container mx-auto px-4"><h1 class="text-4xl md:text-5xl font-bold mb-4" data-svelte-h="svelte-1sy0tui">AI Use Cases</h1> <p class="text-xl text-purple-100 mb-8" data-svelte-h="svelte-1ssrgin">Explore how Disney is leveraging AI across all divisions to create magic, 
      enhance experiences, and drive innovation.</p>  <div class="grid grid-cols-2 md:grid-cols-4 gap-4"><div class="bg-white/10 backdrop-blur rounded-lg p-4"><div class="text-2xl font-bold">${escape(useCases.length)}</div> <div class="text-sm text-gray-300" data-svelte-h="svelte-agx8iu">Total Use Cases</div></div> <div class="bg-white/10 backdrop-blur rounded-lg p-4"><div class="text-2xl font-bold">${escape(useCases.filter((uc) => uc.status === "Deployed").length)}</div> <div class="text-sm text-gray-300" data-svelte-h="svelte-1qwq288">In Production</div></div> <div class="bg-white/10 backdrop-blur rounded-lg p-4"><div class="text-2xl font-bold">${escape(useCases.filter((uc) => uc.status === "Testing").length)}</div> <div class="text-sm text-gray-300" data-svelte-h="svelte-1b8k2wp">In Testing</div></div> <div class="bg-white/10 backdrop-blur rounded-lg p-4" data-svelte-h="svelte-90p9yp"><div class="text-2xl font-bold">3</div> <div class="text-sm text-gray-300">Divisions</div></div></div></div></section>  <section class="bg-gray-50 py-6 sticky top-0 z-20 shadow-sm"><div class="container mx-auto px-4"><div class="flex flex-wrap gap-4"> <div class="flex-1 min-w-[200px]"><input type="text" placeholder="Search use cases..." class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"${add_attribute("value", searchQuery, 0)}></div>  <select class="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500">${each(divisions, (division) => {
    return `<option${add_attribute("value", division, 0)}>${escape(division === "all" ? "All Divisions" : division)} </option>`;
  })}</select>  <select class="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500">${each(statuses, (status) => {
    return `<option${add_attribute("value", status, 0)}>${escape(status === "all" ? "All Statuses" : status)} </option>`;
  })}</select>  ${selectedTags.length > 0 ? `<button class="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors" data-svelte-h="svelte-t91n2z">Clear Filters</button>` : ``}</div>  <div class="mt-4 flex flex-wrap gap-2">${each(allTags, (tag) => {
    return `<button class="${"px-3 py-1 rounded-full text-sm transition-colors " + escape(
      selectedTags.includes(tag) ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-900 hover:bg-gray-300",
      true
    )}">${escape(tag)} </button>`;
  })}</div></div></section>  <section class="container mx-auto px-4 py-8"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">${each(filteredUseCases, (useCase) => {
    return `<div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"> <div class="${"bg-gradient-to-r " + escape(
      useCase.division === "Disney Entertainment" ? "from-purple-500 to-pink-500" : useCase.division === "ESPN" ? "from-red-500 to-orange-500" : "from-blue-500 to-purple-500",
      true
    ) + " p-6 text-white"}"><div class="flex justify-between items-start mb-2"><h3 class="text-xl font-bold">${escape(useCase.title)}</h3> <span class="px-2 py-1 rounded-full text-xs font-semibold bg-white/20">${escape(useCase.status)} </span></div> <p class="text-sm opacity-90">${escape(useCase.division)} • ${escape(useCase.department)}</p></div>  <div class="p-6"><p class="text-gray-900 mb-4">${escape(useCase.description)}</p>  <div class="bg-gray-50 rounded-lg p-4 mb-4"><h4 class="font-semibold text-sm mb-2" data-svelte-h="svelte-qdkcs8">Impact</h4> <div class="space-y-1 text-sm"><div class="flex justify-between"><span class="text-gray-900" data-svelte-h="svelte-7444f5">Efficiency:</span> <span class="font-medium">${escape(useCase.impact.efficiency)}</span></div> <div class="flex justify-between"><span class="text-gray-900" data-svelte-h="svelte-18mfc73">Quality:</span> <span class="font-medium">${escape(useCase.impact.quality)}</span></div> <div class="flex justify-between"><span class="text-gray-900" data-svelte-h="svelte-18293zg">Adoption:</span> <span class="font-medium">${escape(useCase.impact.adoption)}</span></div> </div></div>  <div class="mb-4"><h4 class="font-semibold text-sm mb-2" data-svelte-h="svelte-7ob8gu">Tech Stack</h4> <div class="flex flex-wrap gap-1">${each(useCase.techStack, (tech) => {
      return `<span class="px-2 py-1 bg-blue-100 text-blue-900 rounded text-xs">${escape(tech)} </span>`;
    })} </div></div>  <div class="flex flex-wrap gap-1 mb-4">${each(useCase.tags, (tag) => {
      return `<span class="px-2 py-1 bg-gray-100 text-gray-900 rounded-full text-xs">#${escape(tag)} </span>`;
    })}</div>  <div class="text-sm text-gray-800"><span class="font-medium" data-svelte-h="svelte-x3y0f5">Owner:</span> ${escape(useCase.owner)} </div></div> </div>`;
  })}</div> ${filteredUseCases.length === 0 ? `<div class="text-center py-12" data-svelte-h="svelte-1guadh0"><p class="text-gray-900">No use cases match your filters. Try adjusting your search criteria.</p></div>` : ``}</section>`;
});
export {
  Page as default
};
