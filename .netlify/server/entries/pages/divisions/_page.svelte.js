import { c as create_ssr_component, e as escape, v as validate_component, b as each } from "../../../chunks/ssr.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "../../../chunks/CardTitle.js";
import { T as Tooltip } from "../../../chunks/Tooltip.js";
const divisionsData = {
  "FOX Entertainment": {
    name: "FOX Entertainment",
    coreFocus: "Scripted and unscripted television programming",
    description: "FOX Entertainment develops and produces primetime programming for the FOX broadcast network, including dramas, comedies, and reality shows.",
    subsidiaries: [
      {
        name: "FOX Alternative Entertainment",
        icon: "🎭",
        description: "Produces unscripted and alternative programming including reality shows and game shows"
      },
      {
        name: "Bento Box Entertainment",
        icon: "🎨",
        description: `Animation studio behind shows like "Bob's Burgers" and "The Great North"`
      },
      {
        name: "MarVista Entertainment",
        icon: "🎬",
        description: "Produces and distributes film and television content globally"
      }
    ],
    aiOpportunities: [
      "Script analysis and development insights using GPT-4",
      "Automated content tagging and metadata generation",
      "Virtual audience testing to predict viewer engagement",
      "AI-assisted animation and production workflows",
      "Predictive analytics for show performance"
    ],
    adoptionStats: {
      totalUseCases: 12,
      activeProjects: 5,
      completedProjects: 7,
      successRate: 85
    },
    successStories: [
      {
        title: "Script Analysis System",
        impact: "35% improvement in pilot success rate, $2M saved in development costs",
        technology: "GPT-4, Custom NLP Models"
      },
      {
        title: "Virtual Audience Testing",
        impact: "70% reduction in testing costs, 2x faster content iteration",
        technology: "GPT-4, Predictive Analytics"
      }
    ]
  },
  "FOX News": {
    name: "FOX News",
    coreFocus: "24/7 news coverage and analysis",
    description: "FOX News Channel delivers breaking news and analysis across television and digital platforms, reaching millions of viewers daily.",
    subsidiaries: [
      {
        name: "FOX News Digital",
        icon: "💻",
        description: "Digital news platform and mobile applications"
      },
      {
        name: "FOX News Audio",
        icon: "🎙️",
        description: "Podcasts and audio content distribution"
      },
      {
        name: "FOX News Books",
        icon: "📚",
        description: "Publishing division for news-related content"
      }
    ],
    aiOpportunities: [
      "AI-powered script generation and fact-checking",
      "Real-time sentiment analysis of audience feedback",
      "Automated closed captioning and transcription",
      "Predictive analytics for news trending",
      "Natural language processing for content categorization"
    ],
    adoptionStats: {
      totalUseCases: 15,
      activeProjects: 8,
      completedProjects: 7,
      successRate: 80
    },
    successStories: [
      {
        title: "AI Producer Assistant",
        impact: "50% reduction in script prep time, faster news cycle response",
        technology: "Microsoft Copilot, Azure OpenAI"
      },
      {
        title: "Real-time Sentiment Analysis",
        impact: "20% improvement in audience retention",
        technology: "BERT, Custom Sentiment Models"
      }
    ]
  },
  "FOX Sports": {
    name: "FOX Sports",
    coreFocus: "Live sports broadcasting and analysis",
    description: "FOX Sports is the umbrella entity for FOX's wide array of multi-platform sports assets, delivering championship-level coverage.",
    subsidiaries: [
      {
        name: "FS1",
        icon: "🏆",
        description: "National sports cable channel featuring live events and studio shows"
      },
      {
        name: "FS2",
        icon: "⚽",
        description: "Secondary sports channel for overflow and niche sports coverage"
      },
      {
        name: "FOX Deportes",
        icon: "🌎",
        description: "Spanish-language sports programming"
      },
      {
        name: "FOX Soccer Plus",
        icon: "⚽",
        description: "Premium soccer channel featuring exclusive matches"
      }
    ],
    aiOpportunities: [
      "AI-powered highlight detection and clipping",
      "Computer vision for player tracking and analytics",
      "Real-time statistics generation and visualization",
      "Automated camera switching based on action detection",
      "Predictive analytics for game outcomes and player performance"
    ],
    adoptionStats: {
      totalUseCases: 20,
      activeProjects: 10,
      completedProjects: 10,
      successRate: 90
    },
    successStories: [
      {
        title: "AI-Powered Highlight Detection",
        impact: "95% reduction in highlight creation time",
        technology: "OpenAI Whisper, Custom ML Models"
      },
      {
        title: "Player Tracking System",
        impact: "30% increase in viewer engagement, new revenue stream",
        technology: "YOLO v8, Computer Vision"
      }
    ]
  },
  "FOX Television Stations": {
    name: "FOX Television Stations",
    coreFocus: "Local television broadcasting",
    description: "FOX Television Stations owns and operates 29 full power broadcast television stations in the U.S., delivering local news and programming.",
    subsidiaries: [
      {
        name: "FOX 5 New York",
        icon: "🗽",
        description: "WNYW - Flagship station serving the New York metropolitan area"
      },
      {
        name: "FOX 11 Los Angeles",
        icon: "🌴",
        description: "KTTV - Serving the Los Angeles market"
      },
      {
        name: "LiveNOW from FOX",
        icon: "📱",
        description: "Streaming news service featuring live breaking news"
      }
    ],
    aiOpportunities: [
      "Automated local content personalization",
      "AI-driven weather forecasting and graphics",
      "Speech-to-text for live captioning",
      "Hyperlocal content recommendation",
      "Automated news gathering from social media"
    ],
    adoptionStats: {
      totalUseCases: 18,
      activeProjects: 9,
      completedProjects: 9,
      successRate: 83
    }
  },
  "FOX Business": {
    name: "FOX Business",
    coreFocus: "Business and financial news coverage",
    description: "FOX Business Network provides real-time financial news and analysis, market coverage, and business programming.",
    subsidiaries: [
      {
        name: "FOX Business Digital",
        icon: "📊",
        description: "Online platform for business news and market data"
      },
      {
        name: "FOX Business Podcasts",
        icon: "🎧",
        description: "Audio content covering markets and business trends"
      }
    ],
    aiOpportunities: [
      "AI-powered market analysis and predictions",
      "Automated financial report generation",
      "Real-time sentiment analysis of market news",
      "Natural language processing for earnings calls",
      "Predictive analytics for economic indicators"
    ],
    adoptionStats: {
      totalUseCases: 10,
      activeProjects: 6,
      completedProjects: 4,
      successRate: 75
    }
  },
  "FOX Nation": {
    name: "FOX Nation",
    coreFocus: "Subscription streaming service for opinion programming",
    description: "FOX Nation is a subscription streaming service featuring original opinion programming, documentaries, and historical content.",
    subsidiaries: [
      {
        name: "FOX Nation Originals",
        icon: "🎥",
        description: "Exclusive original programming and documentaries"
      },
      {
        name: "FOX Nation History",
        icon: "📜",
        description: "Historical documentaries and special programming"
      }
    ],
    aiOpportunities: [
      "Personalized content recommendations",
      "AI-driven content categorization",
      "Automated subtitle generation",
      "Viewer engagement prediction",
      "Content performance analytics"
    ],
    adoptionStats: {
      totalUseCases: 8,
      activeProjects: 4,
      completedProjects: 4,
      successRate: 88
    }
  },
  "FOX Weather": {
    name: "FOX Weather",
    coreFocus: "24/7 weather news and forecasting",
    description: "FOX Weather provides comprehensive weather coverage across digital platforms and streaming services.",
    subsidiaries: [
      {
        name: "FOX Weather App",
        icon: "📱",
        description: "Mobile application for personalized weather updates"
      },
      {
        name: "FOX Weather Streaming",
        icon: "🌦️",
        description: "24/7 streaming weather service"
      }
    ],
    aiOpportunities: [
      "AI-enhanced weather prediction models",
      "Automated severe weather alerting",
      "Natural language weather report generation",
      "Computer vision for weather pattern recognition",
      "Predictive analytics for climate trends"
    ],
    adoptionStats: {
      totalUseCases: 12,
      activeProjects: 7,
      completedProjects: 5,
      successRate: 82
    }
  },
  "Tubi": {
    name: "Tubi",
    coreFocus: "Free ad-supported streaming service",
    description: "Tubi is a free ad-supported streaming service offering over 40,000 movies and television series from major studios.",
    subsidiaries: [
      {
        name: "Tubi Originals",
        icon: "🎬",
        description: "Original content produced exclusively for Tubi"
      },
      {
        name: "Tubi Kids",
        icon: "👶",
        description: "Family-friendly content section with parental controls"
      },
      {
        name: "Tubi en Español",
        icon: "🌍",
        description: "Spanish-language content library"
      }
    ],
    aiOpportunities: [
      "Advanced recommendation engine with embeddings",
      "Automated content tagging and metadata generation",
      "AI-powered content discovery",
      "Predictive analytics for content acquisition",
      "Personalized ad targeting using ML"
    ],
    adoptionStats: {
      totalUseCases: 25,
      activeProjects: 12,
      completedProjects: 13,
      successRate: 92
    },
    successStories: [
      {
        title: "Advanced Recommendation Engine",
        impact: "45% increase in engagement, $15M additional ad revenue",
        technology: "Sentence Transformers, Custom Embeddings"
      },
      {
        title: "Automated Content Tagging",
        impact: "40% improvement in content discovery, 60% reduction in manual effort",
        technology: "Claude, OpenAI Whisper"
      }
    ]
  },
  "Corporate": {
    name: "Corporate",
    coreFocus: "Enterprise-wide operations and shared services",
    description: "FOX Corporation's corporate division manages company-wide initiatives, technology infrastructure, and shared services across all divisions.",
    subsidiaries: [
      {
        name: "FOX Technology",
        icon: "💡",
        description: "Central technology and innovation team"
      },
      {
        name: "FOX Data & Analytics",
        icon: "📈",
        description: "Enterprise data strategy and analytics"
      },
      {
        name: "FOX Digital",
        icon: "🌐",
        description: "Digital transformation and platform development"
      }
    ],
    aiOpportunities: [
      "Enterprise AI governance and standards",
      "Cross-division AI platform development",
      "Centralized ML model repository",
      "AI-powered business intelligence",
      "Automated compliance and risk management"
    ],
    adoptionStats: {
      totalUseCases: 30,
      activeProjects: 15,
      completedProjects: 15,
      successRate: 87
    }
  }
};
const css = {
  code: ".division-overview.svelte-1xa0dly{max-width:1000px;margin:0 auto}.header-section.svelte-1xa0dly{margin-bottom:2rem}.division-name.svelte-1xa0dly{font-size:2rem;font-weight:700;color:var(--color-text-primary);margin-bottom:0.5rem}.core-focus.svelte-1xa0dly{font-size:1.25rem;font-weight:500;color:var(--color-primary);margin-bottom:1rem}.description.svelte-1xa0dly{font-size:1rem;color:var(--color-text-secondary);line-height:1.6}.subsidiaries-grid.svelte-1xa0dly{display:grid;grid-template-columns:repeat(auto-fill, minmax(200px, 1fr));gap:1rem}.subsidiary-item.svelte-1xa0dly{display:flex;align-items:center;gap:0.75rem;padding:0.75rem;background:var(--color-bg-secondary);border-radius:0.5rem;transition:all 0.2s ease;cursor:help}.subsidiary-item.svelte-1xa0dly:hover{background:var(--color-bg-hover);transform:translateY(-2px)}.subsidiary-icon.svelte-1xa0dly{font-size:1.5rem}.subsidiary-name.svelte-1xa0dly{font-weight:500;color:var(--color-text-primary)}.opportunities-list.svelte-1xa0dly{list-style:none;padding:0;margin:0}.opportunity-item.svelte-1xa0dly{display:flex;align-items:flex-start;gap:0.75rem;padding:0.75rem 0;border-bottom:1px solid var(--color-border)}.opportunity-item.svelte-1xa0dly:last-child{border-bottom:none}.opportunity-icon.svelte-1xa0dly{color:var(--color-primary);flex-shrink:0;margin-top:0.125rem}.stats-grid.svelte-1xa0dly{display:grid;grid-template-columns:repeat(auto-fit, minmax(150px, 1fr));gap:2rem;text-align:center}.stat-item.svelte-1xa0dly{display:flex;flex-direction:column;gap:0.5rem}.stat-value.svelte-1xa0dly{font-size:2.5rem;font-weight:700;color:var(--color-primary)}.stat-label.svelte-1xa0dly{font-size:0.875rem;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:0.05em}.success-stories.svelte-1xa0dly{display:flex;flex-direction:column;gap:1.5rem}.success-story.svelte-1xa0dly{padding:1.5rem;background:var(--color-bg-secondary);border-radius:0.5rem;border-left:4px solid var(--color-primary)}.story-title.svelte-1xa0dly{font-size:1.125rem;font-weight:600;color:var(--color-text-primary);margin-bottom:0.5rem}.story-impact.svelte-1xa0dly{font-size:0.875rem;color:var(--color-text-secondary);margin-bottom:1rem;line-height:1.5}.story-tech.svelte-1xa0dly{display:flex;align-items:center;gap:0.5rem;font-size:0.875rem}.tech-icon.svelte-1xa0dly{color:var(--color-secondary)}.tech-label.svelte-1xa0dly{color:var(--color-text-secondary)}.tech-value.svelte-1xa0dly{color:var(--color-text-primary);font-weight:500}.no-division.svelte-1xa0dly{text-align:center;padding:4rem 2rem;color:var(--color-text-secondary)}.dark .subsidiary-item.svelte-1xa0dly{background:rgba(255, 255, 255, 0.05)}.dark .subsidiary-item.svelte-1xa0dly:hover{background:rgba(255, 255, 255, 0.1)}.dark .success-story.svelte-1xa0dly{background:rgba(255, 255, 255, 0.05)}@media(max-width: 768px){.division-name.svelte-1xa0dly{font-size:1.5rem}.core-focus.svelte-1xa0dly{font-size:1.125rem}.subsidiaries-grid.svelte-1xa0dly{grid-template-columns:1fr}.stats-grid.svelte-1xa0dly{grid-template-columns:repeat(2, 1fr);gap:1rem}.stat-value.svelte-1xa0dly{font-size:2rem}}",
  map: '{"version":3,"file":"DivisionOverview.svelte","sources":["DivisionOverview.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { divisionsData } from \\"$lib/data/divisions\\";\\nimport Card from \\"./ui/Card.svelte\\";\\nimport CardHeader from \\"./ui/CardHeader.svelte\\";\\nimport CardTitle from \\"./ui/CardTitle.svelte\\";\\nimport CardContent from \\"./ui/CardContent.svelte\\";\\nimport Tooltip from \\"./ui/Tooltip.svelte\\";\\nexport let division;\\n$: divisionInfo = divisionsData[division];\\n$: adoptionStats = divisionInfo?.adoptionStats;\\n$: successStories = divisionInfo?.successStories || [];\\n<\/script>\\n\\n{#if divisionInfo}\\n  <div class=\\"division-overview\\">\\n    <!-- Header Section -->\\n    <div class=\\"header-section\\">\\n      <h2 class=\\"division-name\\">{divisionInfo.name}</h2>\\n      <p class=\\"core-focus\\">{divisionInfo.coreFocus}</p>\\n      <p class=\\"description\\">{divisionInfo.description}</p>\\n    </div>\\n\\n    <!-- Subsidiaries Section -->\\n    <Card class=\\"mb-6\\">\\n      <CardHeader>\\n        <CardTitle>Subsidiaries & Brands</CardTitle>\\n      </CardHeader>\\n      <CardContent>\\n        <div class=\\"subsidiaries-grid\\">\\n          {#each divisionInfo.subsidiaries as subsidiary}\\n            <Tooltip content={subsidiary.description}>\\n              <div class=\\"subsidiary-item\\">\\n                <span class=\\"subsidiary-icon\\">{subsidiary.icon}</span>\\n                <span class=\\"subsidiary-name\\">{subsidiary.name}</span>\\n              </div>\\n            </Tooltip>\\n          {/each}\\n        </div>\\n      </CardContent>\\n    </Card>\\n\\n    <!-- AI Opportunities Section -->\\n    <Card class=\\"mb-6\\">\\n      <CardHeader>\\n        <CardTitle>Key AI Opportunities</CardTitle>\\n      </CardHeader>\\n      <CardContent>\\n        <ul class=\\"opportunities-list\\">\\n          {#each divisionInfo.aiOpportunities as opportunity}\\n            <li class=\\"opportunity-item\\">\\n              <svg class=\\"opportunity-icon\\" width=\\"16\\" height=\\"16\\" viewBox=\\"0 0 16 16\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n                <path d=\\"M8 1L10.163 5.379L15 6.123L11.5 9.527L12.326 14.35L8 12.079L3.674 14.35L4.5 9.527L1 6.123L5.837 5.379L8 1Z\\" fill=\\"currentColor\\"/>\\n              </svg>\\n              {opportunity}\\n            </li>\\n          {/each}\\n        </ul>\\n      </CardContent>\\n    </Card>\\n\\n    <!-- Adoption Stats Section -->\\n    {#if adoptionStats}\\n      <Card class=\\"mb-6\\">\\n        <CardHeader>\\n          <CardTitle>Current Adoption Statistics</CardTitle>\\n        </CardHeader>\\n        <CardContent>\\n          <div class=\\"stats-grid\\">\\n            <div class=\\"stat-item\\">\\n              <div class=\\"stat-value\\">{adoptionStats.totalUseCases}</div>\\n              <div class=\\"stat-label\\">Total Use Cases</div>\\n            </div>\\n            <div class=\\"stat-item\\">\\n              <div class=\\"stat-value\\">{adoptionStats.activeProjects}</div>\\n              <div class=\\"stat-label\\">Active Projects</div>\\n            </div>\\n            <div class=\\"stat-item\\">\\n              <div class=\\"stat-value\\">{adoptionStats.completedProjects}</div>\\n              <div class=\\"stat-label\\">Completed Projects</div>\\n            </div>\\n            <div class=\\"stat-item\\">\\n              <div class=\\"stat-value\\">{adoptionStats.successRate}%</div>\\n              <div class=\\"stat-label\\">Success Rate</div>\\n            </div>\\n          </div>\\n        </CardContent>\\n      </Card>\\n    {/if}\\n\\n    <!-- Success Stories Section -->\\n    {#if successStories.length > 0}\\n      <Card>\\n        <CardHeader>\\n          <CardTitle>Division Success Stories</CardTitle>\\n        </CardHeader>\\n        <CardContent>\\n          <div class=\\"success-stories\\">\\n            {#each successStories as story}\\n              <div class=\\"success-story\\">\\n                <h4 class=\\"story-title\\">{story.title}</h4>\\n                <p class=\\"story-impact\\">{story.impact}</p>\\n                <div class=\\"story-tech\\">\\n                  <svg class=\\"tech-icon\\" width=\\"16\\" height=\\"16\\" viewBox=\\"0 0 16 16\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n                    <path d=\\"M8 2C4.686 2 2 4.686 2 8s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 10.5c-2.485 0-4.5-2.015-4.5-4.5S5.515 3.5 8 3.5s4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5z\\" fill=\\"currentColor\\"/>\\n                    <path d=\\"M8 5.5c-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5S9.378 5.5 8 5.5z\\" fill=\\"currentColor\\"/>\\n                  </svg>\\n                  <span class=\\"tech-label\\">Technology:</span>\\n                  <span class=\\"tech-value\\">{story.technology}</span>\\n                </div>\\n              </div>\\n            {/each}\\n          </div>\\n        </CardContent>\\n      </Card>\\n    {/if}\\n  </div>\\n{:else}\\n  <div class=\\"no-division\\">\\n    <p>Please select a division to view details.</p>\\n  </div>\\n{/if}\\n\\n<style>\\n  .division-overview {\\n    max-width: 1000px;\\n    margin: 0 auto;\\n  }\\n\\n  .header-section {\\n    margin-bottom: 2rem;\\n  }\\n\\n  .division-name {\\n    font-size: 2rem;\\n    font-weight: 700;\\n    color: var(--color-text-primary);\\n    margin-bottom: 0.5rem;\\n  }\\n\\n  .core-focus {\\n    font-size: 1.25rem;\\n    font-weight: 500;\\n    color: var(--color-primary);\\n    margin-bottom: 1rem;\\n  }\\n\\n  .description {\\n    font-size: 1rem;\\n    color: var(--color-text-secondary);\\n    line-height: 1.6;\\n  }\\n\\n  .subsidiaries-grid {\\n    display: grid;\\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\\n    gap: 1rem;\\n  }\\n\\n  .subsidiary-item {\\n    display: flex;\\n    align-items: center;\\n    gap: 0.75rem;\\n    padding: 0.75rem;\\n    background: var(--color-bg-secondary);\\n    border-radius: 0.5rem;\\n    transition: all 0.2s ease;\\n    cursor: help;\\n  }\\n\\n  .subsidiary-item:hover {\\n    background: var(--color-bg-hover);\\n    transform: translateY(-2px);\\n  }\\n\\n  .subsidiary-icon {\\n    font-size: 1.5rem;\\n  }\\n\\n  .subsidiary-name {\\n    font-weight: 500;\\n    color: var(--color-text-primary);\\n  }\\n\\n  .opportunities-list {\\n    list-style: none;\\n    padding: 0;\\n    margin: 0;\\n  }\\n\\n  .opportunity-item {\\n    display: flex;\\n    align-items: flex-start;\\n    gap: 0.75rem;\\n    padding: 0.75rem 0;\\n    border-bottom: 1px solid var(--color-border);\\n  }\\n\\n  .opportunity-item:last-child {\\n    border-bottom: none;\\n  }\\n\\n  .opportunity-icon {\\n    color: var(--color-primary);\\n    flex-shrink: 0;\\n    margin-top: 0.125rem;\\n  }\\n\\n  .stats-grid {\\n    display: grid;\\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\\n    gap: 2rem;\\n    text-align: center;\\n  }\\n\\n  .stat-item {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 0.5rem;\\n  }\\n\\n  .stat-value {\\n    font-size: 2.5rem;\\n    font-weight: 700;\\n    color: var(--color-primary);\\n  }\\n\\n  .stat-label {\\n    font-size: 0.875rem;\\n    color: var(--color-text-secondary);\\n    text-transform: uppercase;\\n    letter-spacing: 0.05em;\\n  }\\n\\n  .success-stories {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 1.5rem;\\n  }\\n\\n  .success-story {\\n    padding: 1.5rem;\\n    background: var(--color-bg-secondary);\\n    border-radius: 0.5rem;\\n    border-left: 4px solid var(--color-primary);\\n  }\\n\\n  .story-title {\\n    font-size: 1.125rem;\\n    font-weight: 600;\\n    color: var(--color-text-primary);\\n    margin-bottom: 0.5rem;\\n  }\\n\\n  .story-impact {\\n    font-size: 0.875rem;\\n    color: var(--color-text-secondary);\\n    margin-bottom: 1rem;\\n    line-height: 1.5;\\n  }\\n\\n  .story-tech {\\n    display: flex;\\n    align-items: center;\\n    gap: 0.5rem;\\n    font-size: 0.875rem;\\n  }\\n\\n  .tech-icon {\\n    color: var(--color-secondary);\\n  }\\n\\n  .tech-label {\\n    color: var(--color-text-secondary);\\n  }\\n\\n  .tech-value {\\n    color: var(--color-text-primary);\\n    font-weight: 500;\\n  }\\n\\n  .no-division {\\n    text-align: center;\\n    padding: 4rem 2rem;\\n    color: var(--color-text-secondary);\\n  }\\n\\n  /* Dark mode adjustments */\\n  :global(.dark) .subsidiary-item {\\n    background: rgba(255, 255, 255, 0.05);\\n  }\\n\\n  :global(.dark) .subsidiary-item:hover {\\n    background: rgba(255, 255, 255, 0.1);\\n  }\\n\\n  :global(.dark) .success-story {\\n    background: rgba(255, 255, 255, 0.05);\\n  }\\n\\n  /* Responsive design */\\n  @media (max-width: 768px) {\\n    .division-name {\\n      font-size: 1.5rem;\\n    }\\n\\n    .core-focus {\\n      font-size: 1.125rem;\\n    }\\n\\n    .subsidiaries-grid {\\n      grid-template-columns: 1fr;\\n    }\\n\\n    .stats-grid {\\n      grid-template-columns: repeat(2, 1fr);\\n      gap: 1rem;\\n    }\\n\\n    .stat-value {\\n      font-size: 2rem;\\n    }\\n  }\\n</style>"],"names":[],"mappings":"AA0HE,iCAAmB,CACjB,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,CAAC,CAAC,IACZ,CAEA,8BAAgB,CACd,aAAa,CAAE,IACjB,CAEA,6BAAe,CACb,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,IAAI,oBAAoB,CAAC,CAChC,aAAa,CAAE,MACjB,CAEA,0BAAY,CACV,SAAS,CAAE,OAAO,CAClB,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,IAAI,eAAe,CAAC,CAC3B,aAAa,CAAE,IACjB,CAEA,2BAAa,CACX,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,IAAI,sBAAsB,CAAC,CAClC,WAAW,CAAE,GACf,CAEA,iCAAmB,CACjB,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,SAAS,CAAC,CAAC,OAAO,KAAK,CAAC,CAAC,GAAG,CAAC,CAAC,CAC5D,GAAG,CAAE,IACP,CAEA,+BAAiB,CACf,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,OAAO,CACZ,OAAO,CAAE,OAAO,CAChB,UAAU,CAAE,IAAI,oBAAoB,CAAC,CACrC,aAAa,CAAE,MAAM,CACrB,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,IAAI,CACzB,MAAM,CAAE,IACV,CAEA,+BAAgB,MAAO,CACrB,UAAU,CAAE,IAAI,gBAAgB,CAAC,CACjC,SAAS,CAAE,WAAW,IAAI,CAC5B,CAEA,+BAAiB,CACf,SAAS,CAAE,MACb,CAEA,+BAAiB,CACf,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,IAAI,oBAAoB,CACjC,CAEA,kCAAoB,CAClB,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CACV,CAEA,gCAAkB,CAChB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,UAAU,CACvB,GAAG,CAAE,OAAO,CACZ,OAAO,CAAE,OAAO,CAAC,CAAC,CAClB,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,cAAc,CAC7C,CAEA,gCAAiB,WAAY,CAC3B,aAAa,CAAE,IACjB,CAEA,gCAAkB,CAChB,KAAK,CAAE,IAAI,eAAe,CAAC,CAC3B,WAAW,CAAE,CAAC,CACd,UAAU,CAAE,QACd,CAEA,0BAAY,CACV,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,QAAQ,CAAC,CAAC,OAAO,KAAK,CAAC,CAAC,GAAG,CAAC,CAAC,CAC3D,GAAG,CAAE,IAAI,CACT,UAAU,CAAE,MACd,CAEA,yBAAW,CACT,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,MACP,CAEA,0BAAY,CACV,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,IAAI,eAAe,CAC5B,CAEA,0BAAY,CACV,SAAS,CAAE,QAAQ,CACnB,KAAK,CAAE,IAAI,sBAAsB,CAAC,CAClC,cAAc,CAAE,SAAS,CACzB,cAAc,CAAE,MAClB,CAEA,+BAAiB,CACf,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,MACP,CAEA,6BAAe,CACb,OAAO,CAAE,MAAM,CACf,UAAU,CAAE,IAAI,oBAAoB,CAAC,CACrC,aAAa,CAAE,MAAM,CACrB,WAAW,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,eAAe,CAC5C,CAEA,2BAAa,CACX,SAAS,CAAE,QAAQ,CACnB,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,IAAI,oBAAoB,CAAC,CAChC,aAAa,CAAE,MACjB,CAEA,4BAAc,CACZ,SAAS,CAAE,QAAQ,CACnB,KAAK,CAAE,IAAI,sBAAsB,CAAC,CAClC,aAAa,CAAE,IAAI,CACnB,WAAW,CAAE,GACf,CAEA,0BAAY,CACV,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,MAAM,CACX,SAAS,CAAE,QACb,CAEA,yBAAW,CACT,KAAK,CAAE,IAAI,iBAAiB,CAC9B,CAEA,0BAAY,CACV,KAAK,CAAE,IAAI,sBAAsB,CACnC,CAEA,0BAAY,CACV,KAAK,CAAE,IAAI,oBAAoB,CAAC,CAChC,WAAW,CAAE,GACf,CAEA,2BAAa,CACX,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,KAAK,CAAE,IAAI,sBAAsB,CACnC,CAGQ,KAAM,CAAC,+BAAiB,CAC9B,UAAU,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CACtC,CAEQ,KAAM,CAAC,+BAAgB,MAAO,CACpC,UAAU,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACrC,CAEQ,KAAM,CAAC,6BAAe,CAC5B,UAAU,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CACtC,CAGA,MAAO,YAAY,KAAK,CAAE,CACxB,6BAAe,CACb,SAAS,CAAE,MACb,CAEA,0BAAY,CACV,SAAS,CAAE,QACb,CAEA,iCAAmB,CACjB,qBAAqB,CAAE,GACzB,CAEA,0BAAY,CACV,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CAAC,CACrC,GAAG,CAAE,IACP,CAEA,0BAAY,CACV,SAAS,CAAE,IACb,CACF"}'
};
const DivisionOverview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let divisionInfo;
  let adoptionStats;
  let successStories;
  let { division } = $$props;
  if ($$props.division === void 0 && $$bindings.division && division !== void 0) $$bindings.division(division);
  $$result.css.add(css);
  divisionInfo = divisionsData[division];
  adoptionStats = divisionInfo?.adoptionStats;
  successStories = divisionInfo?.successStories || [];
  return `${divisionInfo ? `<div class="division-overview svelte-1xa0dly"> <div class="header-section svelte-1xa0dly"><h2 class="division-name svelte-1xa0dly">${escape(divisionInfo.name)}</h2> <p class="core-focus svelte-1xa0dly">${escape(divisionInfo.coreFocus)}</p> <p class="description svelte-1xa0dly">${escape(divisionInfo.description)}</p></div>  ${validate_component(Card, "Card").$$render($$result, { class: "mb-6" }, {}, {
    default: () => {
      return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(CardTitle, "CardTitle").$$render($$result, {}, {}, {
            default: () => {
              return `Subsidiaries &amp; Brands`;
            }
          })}`;
        }
      })} ${validate_component(CardContent, "CardContent").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="subsidiaries-grid svelte-1xa0dly">${each(divisionInfo.subsidiaries, (subsidiary) => {
            return `${validate_component(Tooltip, "Tooltip").$$render($$result, { content: subsidiary.description }, {}, {
              default: () => {
                return `<div class="subsidiary-item svelte-1xa0dly"><span class="subsidiary-icon svelte-1xa0dly">${escape(subsidiary.icon)}</span> <span class="subsidiary-name svelte-1xa0dly">${escape(subsidiary.name)}</span></div> `;
              }
            })}`;
          })}</div>`;
        }
      })}`;
    }
  })}  ${validate_component(Card, "Card").$$render($$result, { class: "mb-6" }, {}, {
    default: () => {
      return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(CardTitle, "CardTitle").$$render($$result, {}, {}, {
            default: () => {
              return `Key AI Opportunities`;
            }
          })}`;
        }
      })} ${validate_component(CardContent, "CardContent").$$render($$result, {}, {}, {
        default: () => {
          return `<ul class="opportunities-list svelte-1xa0dly">${each(divisionInfo.aiOpportunities, (opportunity) => {
            return `<li class="opportunity-item svelte-1xa0dly"><svg class="opportunity-icon svelte-1xa0dly" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1L10.163 5.379L15 6.123L11.5 9.527L12.326 14.35L8 12.079L3.674 14.35L4.5 9.527L1 6.123L5.837 5.379L8 1Z" fill="currentColor"></path></svg> ${escape(opportunity)} </li>`;
          })}</ul>`;
        }
      })}`;
    }
  })}  ${adoptionStats ? `${validate_component(Card, "Card").$$render($$result, { class: "mb-6" }, {}, {
    default: () => {
      return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(CardTitle, "CardTitle").$$render($$result, {}, {}, {
            default: () => {
              return `Current Adoption Statistics`;
            }
          })}`;
        }
      })} ${validate_component(CardContent, "CardContent").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="stats-grid svelte-1xa0dly"><div class="stat-item svelte-1xa0dly"><div class="stat-value svelte-1xa0dly">${escape(adoptionStats.totalUseCases)}</div> <div class="stat-label svelte-1xa0dly" data-svelte-h="svelte-53y2y8">Total Use Cases</div></div> <div class="stat-item svelte-1xa0dly"><div class="stat-value svelte-1xa0dly">${escape(adoptionStats.activeProjects)}</div> <div class="stat-label svelte-1xa0dly" data-svelte-h="svelte-wsxkqg">Active Projects</div></div> <div class="stat-item svelte-1xa0dly"><div class="stat-value svelte-1xa0dly">${escape(adoptionStats.completedProjects)}</div> <div class="stat-label svelte-1xa0dly" data-svelte-h="svelte-wt9a0b">Completed Projects</div></div> <div class="stat-item svelte-1xa0dly"><div class="stat-value svelte-1xa0dly">${escape(adoptionStats.successRate)}%</div> <div class="stat-label svelte-1xa0dly" data-svelte-h="svelte-ikapvl">Success Rate</div></div></div>`;
        }
      })}`;
    }
  })}` : ``}  ${successStories.length > 0 ? `${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(CardHeader, "CardHeader").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(CardTitle, "CardTitle").$$render($$result, {}, {}, {
            default: () => {
              return `Division Success Stories`;
            }
          })}`;
        }
      })} ${validate_component(CardContent, "CardContent").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="success-stories svelte-1xa0dly">${each(successStories, (story) => {
            return `<div class="success-story svelte-1xa0dly"><h4 class="story-title svelte-1xa0dly">${escape(story.title)}</h4> <p class="story-impact svelte-1xa0dly">${escape(story.impact)}</p> <div class="story-tech svelte-1xa0dly"><svg class="tech-icon svelte-1xa0dly" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2C4.686 2 2 4.686 2 8s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 10.5c-2.485 0-4.5-2.015-4.5-4.5S5.515 3.5 8 3.5s4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5z" fill="currentColor"></path><path d="M8 5.5c-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5S9.378 5.5 8 5.5z" fill="currentColor"></path></svg> <span class="tech-label svelte-1xa0dly" data-svelte-h="svelte-159sjgc">Technology:</span> <span class="tech-value svelte-1xa0dly">${escape(story.technology)}</span></div> </div>`;
          })}</div>`;
        }
      })}`;
    }
  })}` : ``}</div>` : `<div class="no-division svelte-1xa0dly" data-svelte-h="svelte-1szorph"><p>Please select a division to view details.</p></div>`}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selectedDivision = "FOX Entertainment";
  const divisions = Object.keys(divisionsData);
  return `<div class="container mx-auto px-4 py-8"><h1 class="text-3xl font-bold mb-8" data-svelte-h="svelte-8g5kh">FOX Divisions Overview</h1> <div class="grid grid-cols-1 lg:grid-cols-4 gap-8"> <div class="lg:col-span-1"><h3 class="text-lg font-semibold mb-4" data-svelte-h="svelte-gtq058">Select Division</h3> <div class="space-y-2">${each(divisions, (division) => {
    return `<button class="${"w-full text-left px-4 py-3 rounded-lg transition-colors " + escape(
      selectedDivision === division ? "bg-blue-100 text-blue-700 font-medium" : "bg-gray-100 hover:bg-gray-200",
      true
    )}">${escape(division)} </button>`;
  })}</div></div>  <div class="lg:col-span-3">${`${validate_component(DivisionOverview, "DivisionOverview").$$render($$result, { division: selectedDivision }, {}, {})}`}</div></div></div>`;
});
export {
  Page as default
};
