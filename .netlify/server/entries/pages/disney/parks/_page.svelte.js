import { c as create_ssr_component, b as each, e as escape, d as add_attribute } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const aiUseCases = [
    {
      id: "crowd-management",
      title: "AI Crowd Flow Optimization",
      icon: "🚶‍♀️",
      description: "Real-time crowd management using AI to predict and optimize guest flow throughout parks",
      impact: "25% reduction in wait times",
      status: "Deployed in all US parks",
      link: "/disney/use-cases#crowd-management"
    },
    {
      id: "virtual-queue",
      title: "Lightning Lane AI Optimization",
      icon: "⚡",
      description: "AI optimizes virtual queue and Lightning Lane availability based on real-time data",
      impact: "35% better capacity utilization",
      status: "Active on 50+ attractions",
      link: "/disney/use-cases#virtual-queue"
    },
    {
      id: "chatbot-support",
      title: "AI Guest Support Assistant",
      icon: "💬",
      description: "AI chatbots handle guest inquiries about park hours, attractions, and dining",
      impact: "70% query resolution rate",
      status: "24/7 availability",
      link: "/disney/use-cases#chatbot-support"
    }
  ];
  const activeExperiments = [
    {
      id: "mixed-reality-parks",
      name: "Mixed Reality Park Experiences",
      icon: "🥽",
      phase: "Pilot",
      description: "AR/VR integration for enhanced park attractions and guest experiences",
      progress: 65,
      metrics: {
        "Guest Satisfaction": "+23%",
        "Engagement Time": "12 min avg"
      },
      link: "/disney/experiments#mixed-reality-parks"
    },
    {
      id: "autonomous-park-vehicles",
      name: "Autonomous Vehicle Integration",
      icon: "🚗",
      phase: "Planning",
      description: "Partnership with Nuro for autonomous delivery and transportation",
      progress: 25,
      metrics: {
        "Routes Mapped": "12",
        "Guest Interest": "78%"
      },
      link: "/disney/experiments#autonomous-park-vehicles"
    },
    {
      id: "predictive-maintenance",
      name: "AI Predictive Maintenance",
      icon: "🔧",
      phase: "Deployed",
      description: "IoT and AI system predicting ride maintenance needs before failures",
      progress: 100,
      metrics: {
        "Downtime Reduction": "73%",
        "Cost Savings": "$2.3M/year"
      },
      link: "/disney/experiments#predictive-maintenance"
    }
  ];
  const parkTechStats = [
    {
      label: "AI Systems Active",
      value: "15+",
      icon: "🤖"
    },
    {
      label: "Guest Satisfaction",
      value: "92%",
      icon: "😊"
    },
    {
      label: "Wait Time Reduction",
      value: "25%",
      icon: "⏱️"
    },
    {
      label: "Annual Tech Investment",
      value: "$1B+",
      icon: "💰"
    }
  ];
  const parks = [
    {
      resort: "Walt Disney World Resort",
      location: "Orlando, Florida",
      parks: [
        {
          name: "Magic Kingdom",
          icon: "🏰",
          aiFeatures: [
            "Crowd Flow AI",
            "Lightning Lane Optimization",
            "Predictive Maintenance"
          ],
          attendance: "17.1M/year"
        },
        {
          name: "EPCOT",
          icon: "🌐",
          aiFeatures: [
            "Guest Support Chatbot",
            "Mixed Reality Experiences",
            "Smart Queue Management"
          ],
          attendance: "11.9M/year"
        },
        {
          name: "Hollywood Studios",
          icon: "🎬",
          aiFeatures: ["Virtual Production Tech", "AI Photo Enhancement", "Crowd Analytics"],
          attendance: "10.9M/year"
        },
        {
          name: "Animal Kingdom",
          icon: "🦁",
          aiFeatures: [
            "Wildlife Monitoring AI",
            "Environmental Sensors",
            "Guest Flow Optimization"
          ],
          attendance: "10.9M/year"
        }
      ]
    },
    {
      resort: "Disneyland Resort",
      location: "Anaheim, California",
      parks: [
        {
          name: "Disneyland Park",
          icon: "🎠",
          aiFeatures: [
            "Mobile App AI Assistant",
            "Dynamic Pricing AI",
            "Security Vision Systems"
          ],
          attendance: "16.9M/year"
        },
        {
          name: "Disney California Adventure",
          icon: "🎡",
          aiFeatures: [
            "Autonomous Delivery Pilots",
            "AR Experiences",
            "Smart Energy Management"
          ],
          attendance: "9.9M/year"
        }
      ]
    }
  ];
  const internationalParks = [
    {
      name: "Tokyo Disney Resort",
      location: "Japan",
      icon: "🗾",
      parks: ["Tokyo Disneyland", "Tokyo DisneySea"],
      aiHighlight: "Advanced robotics and AI character interactions"
    },
    {
      name: "Disneyland Paris",
      location: "France",
      icon: "🗼",
      parks: ["Disneyland Park", "Walt Disney Studios Park"],
      aiHighlight: "Multilingual AI guest services"
    },
    {
      name: "Hong Kong Disneyland",
      location: "China",
      icon: "🏮",
      parks: ["Hong Kong Disneyland"],
      aiHighlight: "AI-powered mobile payment systems"
    },
    {
      name: "Shanghai Disney Resort",
      location: "China",
      icon: "🐉",
      parks: ["Shanghai Disneyland"],
      aiHighlight: "Facial recognition for park entry and payments"
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-1jyfoqs_START -->${$$result.title = `<title>AI in Disney Parks - Transforming the Theme Park Experience</title>`, ""}<!-- HEAD_svelte-1jyfoqs_END -->`, ""}  <section class="relative overflow-hidden bg-gradient-to-br from-blue-700 via-purple-700 to-pink-700 text-white"><div class="absolute inset-0" data-svelte-h="svelte-cx7pjr"><svg viewBox="0 0 1200 600" class="w-full h-full opacity-20"><path d="M500 600 L500 300 L550 200 L600 300 L600 250 L650 150 L700 250 L700 300 L750 200 L800 300 L800 600 Z" fill="currentColor"></path><circle cx="200" cy="200" r="8" fill="currentColor"></circle><circle cx="300" cy="150" r="8" fill="currentColor"></circle><circle cx="400" cy="250" r="8" fill="currentColor"></circle><line x1="200" y1="200" x2="300" y2="150" stroke="currentColor" stroke-width="2" opacity="0.5"></line><line x1="300" y1="150" x2="400" y2="250" stroke="currentColor" stroke-width="2" opacity="0.5"></line><path d="M0 400 Q150 350 300 400 T600 400" fill="none" stroke="currentColor" stroke-width="3" opacity="0.3"></path><path d="M600 450 Q750 400 900 450 T1200 450" fill="none" stroke="currentColor" stroke-width="3" opacity="0.3"></path></svg></div> <div class="relative z-10 container mx-auto px-4 py-20"><h1 class="text-5xl md:text-7xl font-bold mb-6" data-svelte-h="svelte-1dd53n5">AI in Disney Parks</h1> <p class="text-2xl md:text-3xl mb-8 text-blue-100" data-svelte-h="svelte-1hxv4uk">Transforming the Magic with Artificial Intelligence</p> <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">${each(parkTechStats, (stat) => {
    return `<div class="text-center"><div class="text-4xl mb-2">${escape(stat.icon)}</div> <div class="text-3xl font-bold">${escape(stat.value)}</div> <div class="text-sm text-blue-200">${escape(stat.label)}</div> </div>`;
  })}</div></div></section>  <section class="container mx-auto px-4 py-16"><h2 class="text-3xl font-bold text-gray-900 mb-4" data-svelte-h="svelte-1i8i689">AI Technologies Enhancing Your Visit</h2> <p class="text-lg text-gray-700 mb-12 max-w-3xl" data-svelte-h="svelte-1pxrbur">Disney Parks leverage cutting-edge AI to create seamless, personalized experiences for millions of guests annually.</p> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">${each(aiUseCases, (useCase) => {
    return `<a${add_attribute("href", useCase.link, 0)} class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"><div class="bg-gradient-to-br from-blue-500 to-purple-500 p-8 text-white"><div class="text-5xl mb-4">${escape(useCase.icon)}</div> <h3 class="text-xl font-bold mb-2">${escape(useCase.title)}</h3> <div class="text-sm bg-white/20 rounded-full px-3 py-1 inline-block">${escape(useCase.status)} </div></div> <div class="p-6"><p class="text-gray-700 mb-4">${escape(useCase.description)}</p> <div class="flex items-center justify-between"><span class="text-purple-600 font-bold">${escape(useCase.impact)}</span> <span class="text-gray-500 group-hover:translate-x-2 transition-transform" data-svelte-h="svelte-15vqlgo">→</span> </div></div> </a>`;
  })}</div></section>  <section class="bg-gradient-to-b from-purple-50 to-white py-16"><div class="container mx-auto px-4"><h2 class="text-3xl font-bold text-gray-900 mb-4" data-svelte-h="svelte-1sy7t26">AI Experiments in Progress</h2> <p class="text-lg text-gray-700 mb-12 max-w-3xl" data-svelte-h="svelte-cxr26w">Discover the future of theme parks through our innovative AI experiments and pilot programs.</p> <div class="space-y-6">${each(activeExperiments, (experiment) => {
    return `<a${add_attribute("href", experiment.link, 0)} class="block bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 group"><div class="flex flex-col md:flex-row md:items-center gap-6"><div class="text-5xl">${escape(experiment.icon)}</div> <div class="flex-1"><div class="flex items-start justify-between mb-2"><h3 class="text-xl font-bold text-gray-900">${escape(experiment.name)}</h3> <span class="bg-purple-100 text-purple-700 text-sm font-semibold px-3 py-1 rounded-full">${escape(experiment.phase)} </span></div> <p class="text-gray-700 mb-4">${escape(experiment.description)}</p> <div class="space-y-2"><div class="flex items-center gap-2"><div class="flex-1 bg-gray-200 rounded-full h-2"><div class="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full" style="${"width: " + escape(experiment.progress, true) + "%"}"></div></div> <span class="text-sm font-semibold text-gray-700">${escape(experiment.progress)}%</span></div> <div class="flex flex-wrap gap-4 text-sm">${each(Object.entries(experiment.metrics), ([key, value]) => {
      return `<div class="text-gray-700"><span class="font-semibold text-gray-900">${escape(key)}:</span> <span class="text-purple-600">${escape(value)}</span> </div>`;
    })}</div> </div></div> <div class="text-gray-400 group-hover:text-purple-600 transition-colors" data-svelte-h="svelte-szy9s1"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg> </div></div> </a>`;
  })}</div> <div class="text-center mt-8" data-svelte-h="svelte-mkbpip"><a href="/disney/experiments" class="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold">View All Experiments
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></a></div></div></section>  <section class="container mx-auto px-4 py-16"><h2 class="text-3xl font-bold text-gray-900 mb-12" data-svelte-h="svelte-1zi2iw">AI-Enhanced Parks in the United States</h2> ${each(parks, (resort) => {
    return `<div class="mb-16"><h3 class="text-2xl font-bold text-gray-900 mb-2">${escape(resort.resort)}</h3> <p class="text-gray-700 mb-6">${escape(resort.location)}</p> <div class="${"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-" + escape(resort.parks.length, true) + " gap-6"}">${each(resort.parks, (park) => {
      return `<div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"><div class="bg-gradient-to-br from-blue-500 to-purple-500 p-8 text-white text-center"><div class="text-6xl mb-4">${escape(park.icon)}</div> <h4 class="text-xl font-bold">${escape(park.name)}</h4> <p class="text-sm text-blue-100 mt-2">${escape(park.attendance)} visitors</p></div> <div class="p-6"><h5 class="font-semibold text-gray-900 mb-3" data-svelte-h="svelte-1g0uuc8">AI Technologies:</h5> <ul class="space-y-2">${each(park.aiFeatures, (feature) => {
        return `<li class="text-sm text-gray-700 flex items-start"><span class="text-purple-500 mr-2" data-svelte-h="svelte-121hz8d">•</span> <span>${escape(feature)}</span> </li>`;
      })}</ul> <div class="mt-4 pt-4 border-t border-gray-200" data-svelte-h="svelte-4lpjb6"><div class="flex items-center text-sm text-gray-700"><svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg> <span class="text-gray-700">AI enhancing guest experiences daily</span></div> </div></div> </div>`;
    })}</div> </div>`;
  })}</section>  <section class="bg-gray-50 py-16"><div class="container mx-auto px-4"><h2 class="text-3xl font-bold text-gray-900 mb-12" data-svelte-h="svelte-1ly6ftg">International Disney Parks</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6">${each(internationalParks, (park) => {
    return `<div class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6"><div class="flex items-start space-x-4"><div class="text-5xl">${escape(park.icon)}</div> <div class="flex-1"><h3 class="text-xl font-bold text-gray-900 mb-1">${escape(park.name)}</h3> <p class="text-gray-700 mb-2">${escape(park.location)}</p> <p class="text-sm text-purple-600 font-semibold mb-3">${escape(park.aiHighlight)}</p> <div class="space-y-1">${each(park.parks, (parkName) => {
      return `<p class="text-sm text-gray-700">• ${escape(parkName)}</p>`;
    })}</div> </div></div> </div>`;
  })}</div></div></section>  <section class="container mx-auto px-4 py-16" data-svelte-h="svelte-1w3rowh"><div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white"><div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"><div><h2 class="text-3xl font-bold mb-4">AI-Powered Guest Experience</h2> <p class="text-lg mb-6 text-blue-100">Experience the future of theme parks with our intelligent systems working behind the scenes</p> <ul class="space-y-4"><li class="flex items-start"><span class="text-2xl mr-3">🤖</span> <div><h4 class="font-semibold mb-1 text-white">Smart Queue Management</h4> <p class="text-blue-100 text-sm">AI predicts wait times and optimizes Lightning Lane availability</p></div></li> <li class="flex items-start"><span class="text-2xl mr-3">💬</span> <div><h4 class="font-semibold mb-1 text-white">24/7 AI Assistant</h4> <p class="text-blue-100 text-sm">Get instant answers about attractions, dining, and showtimes</p></div></li> <li class="flex items-start"><span class="text-2xl mr-3">🚶</span> <div><h4 class="font-semibold mb-1 text-white">Crowd Flow Optimization</h4> <p class="text-blue-100 text-sm">AI manages guest distribution for shorter wait times</p></div></li> <li class="flex items-start"><span class="text-2xl mr-3">🥽</span> <div><h4 class="font-semibold mb-1 text-white">Mixed Reality Experiences</h4> <p class="text-blue-100 text-sm">Piloting AR/VR enhancements for select attractions</p></div></li></ul> <div class="mt-8 space-x-4"><a href="/disney/use-cases" class="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Explore AI Use Cases</a> <a href="/disney/experiments" class="inline-block bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors">View Experiments</a></div></div> <div class="text-center"><div class="relative"><div class="text-9xl">🎢</div> <div class="absolute top-0 right-0 animate-pulse"><div class="bg-blue-400 rounded-full w-4 h-4"></div></div> <div class="absolute bottom-0 left-0 animate-pulse" style="animation-delay: 0.5s"><div class="bg-purple-400 rounded-full w-3 h-3"></div></div></div></div></div></div></section>  <section class="bg-gradient-to-b from-purple-50 to-white py-16" data-svelte-h="svelte-1yyk93p"><div class="container mx-auto px-4 text-center"><h2 class="text-3xl font-bold text-gray-900 mb-4">Experience the Future of Theme Parks</h2> <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Disney Parks continue to pioneer AI innovations that create magical experiences while improving 
      operational efficiency and guest satisfaction.</p> <div class="flex flex-wrap justify-center gap-4"><a href="/disney/use-cases" class="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center gap-2">View All AI Use Cases
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg></a> <a href="/disney/experiments" class="bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors">Explore AI Experiments</a></div></div></section>`;
});
export {
  Page as default
};
