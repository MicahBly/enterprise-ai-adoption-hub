import type { Division, Status } from './types';

export interface Subsidiary {
  name: string;
  icon: string;
  description: string;
}

export interface DivisionInfo {
  name: Division;
  coreFocus: string;
  description: string;
  subsidiaries: Subsidiary[];
  aiOpportunities: string[];
  adoptionStats?: {
    totalUseCases: number;
    activeProjects: number;
    completedProjects: number;
    successRate: number;
  };
  successStories?: {
    title: string;
    impact: string;
    technology: string;
  }[];
}

export const divisionsData: Record<Division, DivisionInfo> = {
  'FOX Entertainment': {
    name: 'FOX Entertainment',
    coreFocus: 'Scripted and unscripted television programming',
    description: 'FOX Entertainment develops and produces primetime programming for the FOX broadcast network, including dramas, comedies, and reality shows.',
    subsidiaries: [
      {
        name: 'FOX Alternative Entertainment',
        icon: '🎭',
        description: 'Produces unscripted and alternative programming including reality shows and game shows'
      },
      {
        name: 'Bento Box Entertainment',
        icon: '🎨',
        description: 'Animation studio behind shows like "Bob\'s Burgers" and "The Great North"'
      },
      {
        name: 'MarVista Entertainment',
        icon: '🎬',
        description: 'Produces and distributes film and television content globally'
      }
    ],
    aiOpportunities: [
      'Script analysis and development insights using GPT-4',
      'Automated content tagging and metadata generation',
      'Virtual audience testing to predict viewer engagement',
      'AI-assisted animation and production workflows',
      'Predictive analytics for show performance'
    ],
    adoptionStats: {
      totalUseCases: 12,
      activeProjects: 5,
      completedProjects: 7,
      successRate: 85
    },
    successStories: [
      {
        title: 'Script Analysis System',
        impact: '35% improvement in pilot success rate, $2M saved in development costs',
        technology: 'GPT-4, Custom NLP Models'
      },
      {
        title: 'Virtual Audience Testing',
        impact: '70% reduction in testing costs, 2x faster content iteration',
        technology: 'GPT-4, Predictive Analytics'
      }
    ]
  },
  'FOX News': {
    name: 'FOX News',
    coreFocus: '24/7 news coverage and analysis',
    description: 'FOX News Channel delivers breaking news and analysis across television and digital platforms, reaching millions of viewers daily.',
    subsidiaries: [
      {
        name: 'FOX News Digital',
        icon: '💻',
        description: 'Digital news platform and mobile applications'
      },
      {
        name: 'FOX News Audio',
        icon: '🎙️',
        description: 'Podcasts and audio content distribution'
      },
      {
        name: 'FOX News Books',
        icon: '📚',
        description: 'Publishing division for news-related content'
      }
    ],
    aiOpportunities: [
      'AI-powered script generation and fact-checking',
      'Real-time sentiment analysis of audience feedback',
      'Automated closed captioning and transcription',
      'Predictive analytics for news trending',
      'Natural language processing for content categorization'
    ],
    adoptionStats: {
      totalUseCases: 15,
      activeProjects: 8,
      completedProjects: 7,
      successRate: 80
    },
    successStories: [
      {
        title: 'AI Producer Assistant',
        impact: '50% reduction in script prep time, faster news cycle response',
        technology: 'Microsoft Copilot, Azure OpenAI'
      },
      {
        title: 'Real-time Sentiment Analysis',
        impact: '20% improvement in audience retention',
        technology: 'BERT, Custom Sentiment Models'
      }
    ]
  },
  'FOX Sports': {
    name: 'FOX Sports',
    coreFocus: 'Live sports broadcasting and analysis',
    description: 'FOX Sports is the umbrella entity for FOX\'s wide array of multi-platform sports assets, delivering championship-level coverage.',
    subsidiaries: [
      {
        name: 'FS1',
        icon: '🏆',
        description: 'National sports cable channel featuring live events and studio shows'
      },
      {
        name: 'FS2',
        icon: '⚽',
        description: 'Secondary sports channel for overflow and niche sports coverage'
      },
      {
        name: 'FOX Deportes',
        icon: '🌎',
        description: 'Spanish-language sports programming'
      },
      {
        name: 'FOX Soccer Plus',
        icon: '⚽',
        description: 'Premium soccer channel featuring exclusive matches'
      }
    ],
    aiOpportunities: [
      'AI-powered highlight detection and clipping',
      'Computer vision for player tracking and analytics',
      'Real-time statistics generation and visualization',
      'Automated camera switching based on action detection',
      'Predictive analytics for game outcomes and player performance'
    ],
    adoptionStats: {
      totalUseCases: 20,
      activeProjects: 10,
      completedProjects: 10,
      successRate: 90
    },
    successStories: [
      {
        title: 'AI-Powered Highlight Detection',
        impact: '95% reduction in highlight creation time',
        technology: 'OpenAI Whisper, Custom ML Models'
      },
      {
        title: 'Player Tracking System',
        impact: '30% increase in viewer engagement, new revenue stream',
        technology: 'YOLO v8, Computer Vision'
      }
    ]
  },
  'FOX Television Stations': {
    name: 'FOX Television Stations',
    coreFocus: 'Local television broadcasting',
    description: 'FOX Television Stations owns and operates 29 full power broadcast television stations in the U.S., delivering local news and programming.',
    subsidiaries: [
      {
        name: 'FOX 5 New York',
        icon: '🗽',
        description: 'WNYW - Flagship station serving the New York metropolitan area'
      },
      {
        name: 'FOX 11 Los Angeles',
        icon: '🌴',
        description: 'KTTV - Serving the Los Angeles market'
      },
      {
        name: 'LiveNOW from FOX',
        icon: '📱',
        description: 'Streaming news service featuring live breaking news'
      }
    ],
    aiOpportunities: [
      'Automated local content personalization',
      'AI-driven weather forecasting and graphics',
      'Speech-to-text for live captioning',
      'Hyperlocal content recommendation',
      'Automated news gathering from social media'
    ],
    adoptionStats: {
      totalUseCases: 18,
      activeProjects: 9,
      completedProjects: 9,
      successRate: 83
    }
  },
  'FOX Business': {
    name: 'FOX Business',
    coreFocus: 'Business and financial news coverage',
    description: 'FOX Business Network provides real-time financial news and analysis, market coverage, and business programming.',
    subsidiaries: [
      {
        name: 'FOX Business Digital',
        icon: '📊',
        description: 'Online platform for business news and market data'
      },
      {
        name: 'FOX Business Podcasts',
        icon: '🎧',
        description: 'Audio content covering markets and business trends'
      }
    ],
    aiOpportunities: [
      'AI-powered market analysis and predictions',
      'Automated financial report generation',
      'Real-time sentiment analysis of market news',
      'Natural language processing for earnings calls',
      'Predictive analytics for economic indicators'
    ],
    adoptionStats: {
      totalUseCases: 10,
      activeProjects: 6,
      completedProjects: 4,
      successRate: 75
    }
  },
  'FOX Nation': {
    name: 'FOX Nation',
    coreFocus: 'Subscription streaming service for opinion programming',
    description: 'FOX Nation is a subscription streaming service featuring original opinion programming, documentaries, and historical content.',
    subsidiaries: [
      {
        name: 'FOX Nation Originals',
        icon: '🎥',
        description: 'Exclusive original programming and documentaries'
      },
      {
        name: 'FOX Nation History',
        icon: '📜',
        description: 'Historical documentaries and special programming'
      }
    ],
    aiOpportunities: [
      'Personalized content recommendations',
      'AI-driven content categorization',
      'Automated subtitle generation',
      'Viewer engagement prediction',
      'Content performance analytics'
    ],
    adoptionStats: {
      totalUseCases: 8,
      activeProjects: 4,
      completedProjects: 4,
      successRate: 88
    }
  },
  'FOX Weather': {
    name: 'FOX Weather',
    coreFocus: '24/7 weather news and forecasting',
    description: 'FOX Weather provides comprehensive weather coverage across digital platforms and streaming services.',
    subsidiaries: [
      {
        name: 'FOX Weather App',
        icon: '📱',
        description: 'Mobile application for personalized weather updates'
      },
      {
        name: 'FOX Weather Streaming',
        icon: '🌦️',
        description: '24/7 streaming weather service'
      }
    ],
    aiOpportunities: [
      'AI-enhanced weather prediction models',
      'Automated severe weather alerting',
      'Natural language weather report generation',
      'Computer vision for weather pattern recognition',
      'Predictive analytics for climate trends'
    ],
    adoptionStats: {
      totalUseCases: 12,
      activeProjects: 7,
      completedProjects: 5,
      successRate: 82
    }
  },
  'Tubi': {
    name: 'Tubi',
    coreFocus: 'Free ad-supported streaming service',
    description: 'Tubi is a free ad-supported streaming service offering over 40,000 movies and television series from major studios.',
    subsidiaries: [
      {
        name: 'Tubi Originals',
        icon: '🎬',
        description: 'Original content produced exclusively for Tubi'
      },
      {
        name: 'Tubi Kids',
        icon: '👶',
        description: 'Family-friendly content section with parental controls'
      },
      {
        name: 'Tubi en Español',
        icon: '🌍',
        description: 'Spanish-language content library'
      }
    ],
    aiOpportunities: [
      'Advanced recommendation engine with embeddings',
      'Automated content tagging and metadata generation',
      'AI-powered content discovery',
      'Predictive analytics for content acquisition',
      'Personalized ad targeting using ML'
    ],
    adoptionStats: {
      totalUseCases: 25,
      activeProjects: 12,
      completedProjects: 13,
      successRate: 92
    },
    successStories: [
      {
        title: 'Advanced Recommendation Engine',
        impact: '45% increase in engagement, $15M additional ad revenue',
        technology: 'Sentence Transformers, Custom Embeddings'
      },
      {
        title: 'Automated Content Tagging',
        impact: '40% improvement in content discovery, 60% reduction in manual effort',
        technology: 'Claude, OpenAI Whisper'
      }
    ]
  },
  'Corporate': {
    name: 'Corporate',
    coreFocus: 'Enterprise-wide operations and shared services',
    description: 'FOX Corporation\'s corporate division manages company-wide initiatives, technology infrastructure, and shared services across all divisions.',
    subsidiaries: [
      {
        name: 'FOX Technology',
        icon: '💡',
        description: 'Central technology and innovation team'
      },
      {
        name: 'FOX Data & Analytics',
        icon: '📈',
        description: 'Enterprise data strategy and analytics'
      },
      {
        name: 'FOX Digital',
        icon: '🌐',
        description: 'Digital transformation and platform development'
      }
    ],
    aiOpportunities: [
      'Enterprise AI governance and standards',
      'Cross-division AI platform development',
      'Centralized ML model repository',
      'AI-powered business intelligence',
      'Automated compliance and risk management'
    ],
    adoptionStats: {
      totalUseCases: 30,
      activeProjects: 15,
      completedProjects: 15,
      successRate: 87
    }
  }
};