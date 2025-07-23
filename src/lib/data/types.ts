// FOX AI Hub Type Definitions

// Division type - union of FOX divisions
export type Division = 
  | 'Fox News Media'
  | 'Fox Sports Media Group'
  | 'Fox Entertainment'
  | 'Fox Television Stations'
  | 'Tubi Media Group'
  | 'Other Assets';

// DivisionInfo interface for detailed division information
export interface DivisionInfo {
  name: string;
  coreFocus: string;
  subsidiaries: string[];
  aiOpportunities: string[];
}

// Comprehensive division information
export const DIVISION_INFO: Record<Division, DivisionInfo> = {
  'Fox News Media': {
    name: 'Fox News Media',
    coreFocus: 'News, business, and opinion programming across multiple platforms',
    subsidiaries: [
      'FOX News Channel',
      'FOX Business Network',
      'FOX News Digital',
      'FOX News Audio',
      'FOX News Books',
      'FOX Nation (streaming service)',
      'FOX Weather'
    ],
    aiOpportunities: [
      'Automated news summarization and content generation',
      'Real-time fact-checking and verification systems',
      'Personalized news recommendations and content curation',
      'Automated closed captioning and transcription',
      'Sentiment analysis for breaking news coverage',
      'Predictive analytics for news trends and viewership',
      'Voice-to-text for field reporting',
      'Automated video editing and highlight generation',
      'Natural language processing for viewer feedback analysis',
      'Content moderation for digital platforms'
    ]
  },
  'Fox Sports Media Group': {
    name: 'Fox Sports Media Group',
    coreFocus: 'Live sports broadcasting, sports news, and analysis',
    subsidiaries: [
      'FOX Sports (FS1, FS2)',
      'FOX Deportes',
      'FOX Sports Digital',
      'Big Ten Network (51% stake)',
      'FOX Bet',
      'FOX Sports Regional Networks (select markets)'
    ],
    aiOpportunities: [
      'Real-time sports analytics and statistics generation',
      'Automated highlight reel creation',
      'Predictive modeling for game outcomes and player performance',
      'Computer vision for player tracking and analysis',
      'Natural language generation for play-by-play descriptions',
      'Personalized sports content recommendations',
      'Automated camera switching for live broadcasts',
      'Voice recognition for sports commentary analysis',
      'Fan engagement prediction and optimization',
      'Injury prediction and player health analytics'
    ]
  },
  'Fox Entertainment': {
    name: 'Fox Entertainment',
    coreFocus: 'Broadcast entertainment programming and content production',
    subsidiaries: [
      'FOX Broadcasting Company',
      'FOX Entertainment Studios',
      'Bento Box Entertainment',
      'MarVista Entertainment',
      'TMZ',
      'Studio Ramsay Global',
      'FOX Alternative Entertainment'
    ],
    aiOpportunities: [
      'Script analysis and development recommendations',
      'Audience preference prediction for programming decisions',
      'Automated content tagging and metadata generation',
      'Voice synthesis for animation and dubbing',
      'Visual effects automation and enhancement',
      'Music composition and sound design assistance',
      'Predictive analytics for show performance',
      'Content recommendation engines for streaming',
      'Automated promotional content generation',
      'Social media sentiment analysis for shows'
    ]
  },
  'Fox Television Stations': {
    name: 'Fox Television Stations',
    coreFocus: 'Local broadcast television stations and local news operations',
    subsidiaries: [
      '29 owned-and-operated television stations',
      'FOX Television Stations Productions',
      'FOX Soul',
      'LiveNOW from FOX',
      'Movies!',
      'Buzzr',
      'Decades'
    ],
    aiOpportunities: [
      'Automated local news production and editing',
      'Weather prediction and visualization',
      'Traffic analysis and reporting automation',
      'Hyperlocal content personalization',
      'Automated closed captioning for local broadcasts',
      'Community event detection and coverage planning',
      'Local advertising optimization and targeting',
      'Emergency alert system automation',
      'Viewer engagement analytics for local markets',
      'Social media integration for local news'
    ]
  },
  'Tubi Media Group': {
    name: 'Tubi Media Group',
    coreFocus: 'Free ad-supported streaming television service',
    subsidiaries: [
      'Tubi streaming platform',
      'Tubi Originals production',
      'Tubi Kids',
      'Tubi en Español'
    ],
    aiOpportunities: [
      'Advanced content recommendation algorithms',
      'Viewer behavior prediction and analysis',
      'Automated content categorization and tagging',
      'Ad placement optimization using machine learning',
      'Content quality assessment and curation',
      'Personalized user interface optimization',
      'Churn prediction and retention strategies',
      'Automated thumbnail generation and A/B testing',
      'Natural language search optimization',
      'Real-time content popularity prediction'
    ]
  },
  'Other Assets': {
    name: 'Other Assets',
    coreFocus: 'Additional investments and emerging media ventures',
    subsidiaries: [
      'Blockchain Creative Labs',
      'Credible Labs',
      'FOX Digital Consumer Group',
      'FOX Tech',
      'Various strategic investments and partnerships'
    ],
    aiOpportunities: [
      'Blockchain and NFT authentication systems',
      'Emerging technology experimentation',
      'Cross-platform content distribution optimization',
      'Digital rights management automation',
      'Innovation lab projects and prototypes',
      'Strategic partnership opportunity analysis',
      'Technology trend prediction and assessment',
      'Digital transformation initiatives',
      'Cybersecurity threat detection',
      'Enterprise process automation'
    ]
  }
};

// Status type - union of use case statuses
export type Status = 
  | 'Submitted'
  | 'Under Review'
  | 'In Development'
  | 'Testing'
  | 'Deployed'
  | 'On Hold'
  | 'Rejected'
  | 'Completed';

// Priority levels
export type Priority = 'Low' | 'Medium' | 'High' | 'Critical';

// AI Technology types
export type AITechnology = 
  | 'Machine Learning'
  | 'Natural Language Processing'
  | 'Computer Vision'
  | 'Predictive Analytics'
  | 'Generative AI'
  | 'Speech Recognition'
  | 'Recommendation Systems'
  | 'Robotic Process Automation'
  | 'Other';

// UseCase interface with all fields
export interface UseCase {
  id: string;
  title: string;
  description: string;
  division: Division;
  subsidiary?: string;
  department: string;
  submittedBy: {
    name: string;
    email: string;
    role?: string;
  };
  businessJustification: string;
  expectedOutcomes: string[];
  targetUsers: string;
  estimatedImpact: {
    users: number;
    costSavings?: number;
    revenueIncrease?: number;
    timeToValue: string; // e.g., "3 months", "6 months", "1 year"
  };
  technicalRequirements: {
    aiTechnologies: AITechnology[];
    dataRequirements: string[];
    integrations: string[];
    securityConsiderations: string[];
  };
  status: Status;
  priority: Priority;
  timeline: {
    submittedDate: Date | string;
    reviewedDate?: Date | string;
    startDate?: Date | string;
    targetCompletionDate?: Date | string;
    completedDate?: Date | string;
  };
  stakeholders: {
    businessOwner: string;
    technicalLead?: string;
    additionalStakeholders?: string[];
  };
  risks: string[];
  dependencies: string[];
  successMetrics: string[];
  currentPhase?: string;
  nextSteps?: string[];
  comments?: string;
  attachments?: {
    name: string;
    url: string;
    type: string;
    uploadedDate: Date | string;
  }[];
  tags?: string[];
  score?: number; // For ranking/prioritization
  approvals?: {
    approver: string;
    role: string;
    date: Date | string;
    status: 'Approved' | 'Rejected' | 'Pending';
    comments?: string;
  }[];
  updates?: {
    date: Date | string;
    author: string;
    description: string;
  }[];
}

// Chat message types for AI assistant
export type MessageRole = 'user' | 'assistant' | 'system';

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: Date | string;
  metadata?: {
    model?: string;
    tokens?: number;
    processingTime?: number;
    error?: boolean;
    errorMessage?: string;
  };
}

// Submit form data interface
export interface SubmitFormData {
  // Basic Information
  title: string;
  description: string;
  division: Division;
  subsidiary?: string;
  department: string;
  
  // Submitter Information
  submitterName: string;
  submitterEmail: string;
  submitterRole?: string;
  
  // Business Case
  businessJustification: string;
  expectedOutcomes: string[]; // Array of outcome strings
  targetUsers: string;
  
  // Impact Estimation
  estimatedUsers: number;
  estimatedCostSavings?: number;
  estimatedRevenueIncrease?: number;
  timeToValue: string;
  
  // Technical Details
  aiTechnologies: AITechnology[];
  dataRequirements: string[];
  integrations: string[];
  securityConsiderations: string[];
  
  // Project Details
  priority: Priority;
  targetCompletionDate?: Date | string;
  businessOwner: string;
  technicalLead?: string;
  additionalStakeholders?: string[];
  
  // Risk & Success
  risks: string[];
  dependencies: string[];
  successMetrics: string[];
  
  // Additional Information
  comments?: string;
  tags?: string[];
  
  // Form metadata (not submitted by user)
  submittedAt?: Date | string;
  formVersion?: string;
}

// Validation result interface
export interface ValidationResult {
  isValid: boolean;
  errors: {
    field: string;
    message: string;
  }[];
}

// Filter options for use cases
export interface UseCaseFilters {
  divisions?: Division[];
  statuses?: Status[];
  priorities?: Priority[];
  technologies?: AITechnology[];
  dateRange?: {
    start: Date | string;
    end: Date | string;
  };
  searchQuery?: string;
  tags?: string[];
}

// Adoption metrics interface
export interface AdoptionMetrics {
  division: Division;
  totalUseCases: number;
  byStatus: Record<Status, number>;
  byPriority: Record<Priority, number>;
  averageTimeToCompletion: number; // in days
  successRate: number; // percentage
  topTechnologies: {
    technology: AITechnology;
    count: number;
  }[];
  monthlyTrend: {
    month: string;
    submitted: number;
    completed: number;
  }[];
}

// Dashboard statistics
export interface DashboardStats {
  totalUseCases: number;
  activeUseCases: number;
  completedUseCases: number;
  averageCompletionTime: number;
  topDivisions: {
    division: Division;
    count: number;
  }[];
  recentActivity: {
    date: Date | string;
    action: string;
    useCase: string;
    user: string;
  }[];
}

// Export all types for convenience
export type {
  UseCase as IUseCase,
  ChatMessage as IChatMessage,
  SubmitFormData as ISubmitFormData,
  ValidationResult as IValidationResult,
  UseCaseFilters as IUseCaseFilters,
  AdoptionMetrics as IAdoptionMetrics,
  DashboardStats as IDashboardStats
};