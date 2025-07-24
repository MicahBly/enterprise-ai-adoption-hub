const useCasesData = [
  {
    id: "fox-news-fact-checking",
    title: "AI-Powered Real-Time Fact-Checking System",
    description: "Real-time fact-checking system for Fox News Channel that uses Claude and GPT-4 to verify claims during live broadcasts. Cross-references multiple sources and provides instant verification to producers.",
    division: "Fox News Media",
    subsidiary: null,
    owner: "News Standards & Practices",
    status: "production",
    impact: "85% reduction in fact-checking time, 99.2% accuracy rate on verified claims",
    techStackAi: [
      "Anthropic Claude",
      "OpenAI GPT-4",
      "Custom NER Models",
      "GPT-4",
      "Claude",
      "Whisper"
    ],
    techStackInfrastructure: [
      "AWS Lambda",
      "DynamoDB",
      "ElasticSearch"
    ],
    techStackIntegration: [
      "News Archives",
      "Reuters API",
      "AP API"
    ],
    estimatedUsers: null,
    costSavings: null,
    revenueIncrease: null,
    timeToValue: null,
    reusePotential: "High - adaptable to all news programs across FOX properties",
    tags: [
      "claude",
      "gpt-4",
      "fact-checking",
      "real-time"
    ],
    enablementSteps: [
      "Deploy fact-checking API endpoints",
      "Integrate with newsroom systems",
      "Train on verified fact database",
      "Set up real-time alerting"
    ],
    suggestedTechnologies: [
      "OpenAI Embeddings",
      "Pinecone",
      "LangChain"
    ],
    createdAt: "2025-07-12 06:23:37",
    updatedAt: "2025-07-12 20:26:56"
  },
  {
    id: "fox-nation-personalization",
    title: "Personalized Content Recommendations for Fox Nation",
    description: "Advanced recommendation engine that analyzes viewing patterns, political preferences, and content engagement to deliver highly personalized content suggestions for Fox Nation subscribers.",
    division: "Fox News Media",
    subsidiary: null,
    owner: "Fox Nation Product Team",
    status: "production",
    impact: "55% increase in watch time, 40% reduction in churn rate",
    techStackAi: [
      "TensorFlow",
      "Collaborative Filtering",
      "Content Embeddings",
      "GPT-4",
      "Claude",
      "Whisper"
    ],
    techStackInfrastructure: [
      "Google Cloud Platform",
      "BigQuery",
      "Dataflow"
    ],
    techStackIntegration: [
      "User Analytics",
      "Content CMS",
      "Subscription System"
    ],
    estimatedUsers: null,
    costSavings: null,
    revenueIncrease: null,
    timeToValue: null,
    reusePotential: "Very High - core technology applicable to any subscription platform",
    tags: [
      "personalization",
      "machine-learning",
      "recommendations",
      "engagement"
    ],
    enablementSteps: [
      "Build user preference models",
      "Generate content embeddings",
      "Deploy recommendation service",
      "Implement A/B testing framework"
    ],
    suggestedTechnologies: [
      "DALL-E 3",
      "ElevenLabs",
      "Runway ML"
    ],
    createdAt: "2025-07-12 06:23:37",
    updatedAt: "2025-07-12 20:26:56"
  },
  {
    id: "fox-weather-prediction",
    title: "AI-Enhanced Weather Prediction Models",
    description: "Machine learning models that enhance traditional weather forecasting for Fox Weather by analyzing satellite imagery, historical patterns, and real-time sensor data for hyperlocal predictions.",
    division: "Fox News Media",
    subsidiary: null,
    owner: "Fox Weather Technology",
    status: "pilot",
    impact: "30% improvement in 7-day forecast accuracy, 50% better severe weather detection",
    techStackAi: [
      "Custom CNN Models",
      "LSTM Networks",
      "Ensemble Methods",
      "GPT-4",
      "Claude",
      "Whisper"
    ],
    techStackInfrastructure: [
      "NVIDIA DGX",
      "Azure ML",
      "Time Series DB"
    ],
    techStackIntegration: [
      "NOAA Data Feeds",
      "Satellite APIs",
      "Sensor Networks"
    ],
    estimatedUsers: null,
    costSavings: null,
    revenueIncrease: null,
    timeToValue: null,
    reusePotential: "Medium - specific to weather but adaptable to other prediction tasks",
    tags: [
      "weather",
      "prediction",
      "computer-vision",
      "forecasting"
    ],
    enablementSteps: [
      "Ingest historical weather data",
      "Train region-specific models",
      "Deploy prediction pipeline",
      "Integrate with broadcast graphics"
    ],
    suggestedTechnologies: [
      "BigQuery ML",
      "Amazon SageMaker",
      "Azure Machine Learning"
    ],
    createdAt: "2025-07-12 06:23:37",
    updatedAt: "2025-07-12 20:26:56"
  },
  {
    id: "fs1-sports-analytics",
    title: "Real-Time Sports Analytics Platform",
    description: "Comprehensive analytics platform for FS1 that processes player tracking data, game statistics, and historical performance to generate real-time insights and predictive analytics during broadcasts.",
    division: "Fox Sports Media Group",
    subsidiary: null,
    owner: "FS1 Innovation Lab",
    status: "production",
    impact: "40% increase in viewer engagement, new data-driven broadcast segments",
    techStackAi: [
      "XGBoost",
      "Prophet",
      "Custom Statistical Models",
      "Stable Diffusion",
      "Midjourney",
      "GPT-4"
    ],
    techStackInfrastructure: [
      "Apache Spark",
      "Kafka",
      "InfluxDB"
    ],
    techStackIntegration: [
      "SportRadar API",
      "Player Tracking Systems",
      "Graphics Engine"
    ],
    estimatedUsers: null,
    costSavings: null,
    revenueIncrease: null,
    timeToValue: null,
    reusePotential: "High - applicable to all sports broadcasts with minor customization",
    tags: [
      "analytics",
      "real-time",
      "sports-data",
      "predictions"
    ],
    enablementSteps: [
      "Connect to live data feeds",
      "Deploy analytics models",
      "Build real-time dashboard",
      "Train broadcast team on insights"
    ],
    suggestedTechnologies: [
      "BigQuery ML",
      "Amazon SageMaker",
      "Azure Machine Learning"
    ],
    createdAt: "2025-07-12 06:23:37",
    updatedAt: "2025-07-12 20:26:56"
  },
  {
    id: "fox-soccer-commentary",
    title: "AI Commentary Generation for Fox Soccer Plus",
    description: "AI system that generates supplementary commentary for Fox Soccer Plus matches in multiple languages, providing play-by-play narration for lower-tier matches that don't have live commentators.",
    division: "Fox Sports Media Group",
    subsidiary: null,
    owner: "Fox Soccer Digital Team",
    status: "development",
    impact: "Coverage expanded to 300+ additional matches per year, 80% cost reduction",
    techStackAi: [
      "GPT-4",
      "Whisper",
      "Custom Voice Synthesis",
      "Stable Diffusion",
      "Midjourney",
      "Claude"
    ],
    techStackInfrastructure: [
      "AWS Transcribe",
      "Polly",
      "MediaConvert"
    ],
    techStackIntegration: [
      "Match Data APIs",
      "Video Pipeline",
      "Translation Services"
    ],
    estimatedUsers: null,
    costSavings: null,
    revenueIncrease: null,
    timeToValue: null,
    reusePotential: "Medium - adaptable to other sports with commentary training",
    tags: [
      "nlp",
      "commentary",
      "multilingual",
      "automation"
    ],
    enablementSteps: [
      "Train on professional commentary",
      "Integrate match data feeds",
      "Deploy voice synthesis",
      "Quality assurance testing"
    ],
    suggestedTechnologies: [
      "OpenAI Embeddings",
      "Pinecone",
      "LangChain"
    ],
    createdAt: "2025-07-12 06:23:37",
    updatedAt: "2025-07-12 20:26:56"
  },
  {
    id: "btn-highlight-detection",
    title: "Automated Highlight Detection for Big Ten Network",
    description: "Computer vision system that automatically detects and clips highlights from Big Ten Network games, using crowd noise analysis and visual cues to identify key moments across multiple sports.",
    division: "Fox Sports Media Group",
    subsidiary: null,
    owner: "BTN Digital Operations",
    status: "production",
    impact: "95% reduction in highlight turnaround time, 3x more content for social media",
    techStackAi: [
      "YOLO v8",
      "Audio Classification Models",
      "Motion Detection",
      "Stable Diffusion",
      "Midjourney",
      "GPT-4"
    ],
    techStackInfrastructure: [
      "Edge Computing",
      "GPU Clusters",
      "CDN"
    ],
    techStackIntegration: [
      "Production Systems",
      "Social Media APIs",
      "CMS"
    ],
    estimatedUsers: null,
    costSavings: null,
    revenueIncrease: null,
    timeToValue: null,
    reusePotential: "Very High - works across all BTN sports properties",
    tags: [
      "computer-vision",
      "automation",
      "highlights",
      "multi-sport"
    ],
    enablementSteps: [
      "Deploy edge detection systems",
      "Train sport-specific models",
      "Configure clipping rules",
      "Automate social distribution"
    ],
    suggestedTechnologies: [
      "UiPath",
      "Automation Anywhere",
      "Microsoft Power Automate"
    ],
    createdAt: "2025-07-12 06:23:37",
    updatedAt: "2025-07-12 20:26:56"
  },
  {
    id: "fox-studios-script-analysis",
    title: "AI Script Analysis for Fox Entertainment Studios",
    description: "Comprehensive script analysis platform that evaluates dialogue quality, pacing, character arcs, and market potential using advanced NLP. Provides detailed feedback to writers and development executives.",
    division: "Fox Entertainment",
    subsidiary: null,
    owner: "Studio Development Team",
    status: "production",
    impact: "40% improvement in pilot success rate, 25% faster development cycles",
    techStackAi: [
      "Claude",
      "GPT-4",
      "Custom Sentiment Analysis",
      "Midjourney",
      "Stable Diffusion",
      "GitHub Copilot"
    ],
    techStackInfrastructure: [
      "Google Cloud",
      "Vertex AI",
      "BigQuery"
    ],
    techStackIntegration: [
      "Script Management System",
      "Development Pipeline",
      "Writer's Room Tools"
    ],
    estimatedUsers: null,
    costSavings: null,
    revenueIncrease: null,
    timeToValue: null,
    reusePotential: "High - applicable to all scripted content development",
    tags: [
      "nlp",
      "script-analysis",
      "development",
      "creative-tools"
    ],
    enablementSteps: [
      "Ingest historical script data",
      "Train on successful shows",
      "Build analysis dashboard",
      "Integrate with development workflow"
    ],
    suggestedTechnologies: [
      "Tabnine",
      "Amazon CodeWhisperer",
      "Replit AI"
    ],
    createdAt: "2025-07-12 06:23:37",
    updatedAt: "2025-07-12 20:26:56"
  },
  {
    id: "fox-alt-sentiment-prediction",
    title: "Audience Sentiment Prediction for Fox Alternative Entertainment",
    description: "Predictive system that analyzes social media, focus group data, and viewing patterns to forecast audience reception of unscripted content before air, enabling pre-emptive adjustments.",
    division: "Fox Entertainment",
    subsidiary: null,
    owner: "Alternative Programming Research",
    status: "pilot",
    impact: "30% improvement in premiere ratings, 50% reduction in negative social sentiment",
    techStackAi: [
      "BERT",
      "Transformer Models",
      "Time Series Analysis",
      "Midjourney",
      "Stable Diffusion",
      "Claude"
    ],
    techStackInfrastructure: [
      "Databricks",
      "Redis",
      "PostgreSQL"
    ],
    techStackIntegration: [
      "Social Media APIs",
      "Nielsen Data",
      "Focus Group Systems"
    ],
    estimatedUsers: null,
    costSavings: null,
    revenueIncrease: null,
    timeToValue: null,
    reusePotential: "Medium - requires customization for different show formats",
    tags: [
      "sentiment-analysis",
      "prediction",
      "unscripted",
      "social-media"
    ],
    enablementSteps: [
      "Collect historical sentiment data",
      "Train prediction models",
      "Build monitoring dashboard",
      "Create feedback loop system"
    ],
    suggestedTechnologies: [
      "DALL-E 3",
      "ElevenLabs",
      "Runway ML"
    ],
    createdAt: "2025-07-12 06:23:37",
    updatedAt: "2025-07-12 20:26:56"
  },
  {
    id: "bento-box-animation-ai",
    title: "AI-Powered Animation Tools for Bento Box",
    description: "AI-assisted animation tools that help automate in-between frames, lip-sync, and background generation for Bento Box Entertainment productions, significantly speeding up animation workflows.",
    division: "Fox Entertainment",
    subsidiary: null,
    owner: "Bento Box Technology",
    status: "development",
    impact: "60% reduction in animation time, 40% cost savings per episode",
    techStackAi: [
      "Stable Diffusion",
      "Custom GANs",
      "Motion Interpolation",
      "Midjourney",
      "Claude",
      "GPT-4"
    ],
    techStackInfrastructure: [
      "NVIDIA GPUs",
      "Render Farm",
      "Asset Management"
    ],
    techStackIntegration: [
      "Animation Software",
      "Production Pipeline",
      "Review Systems"
    ],
    estimatedUsers: null,
    costSavings: null,
    revenueIncrease: null,
    timeToValue: null,
    reusePotential: "High - applicable to all animated productions",
    tags: [
      "animation",
      "computer-vision",
      "automation",
      "creative-tools"
    ],
    enablementSteps: [
      "Train on existing animation styles",
      "Integrate with animation software",
      "Build artist-friendly interfaces",
      "Implement quality control"
    ],
    suggestedTechnologies: [
      "UiPath",
      "Automation Anywhere",
      "Microsoft Power Automate"
    ],
    createdAt: "2025-07-12 06:23:37",
    updatedAt: "2025-07-12 20:26:56"
  },
  {
    id: "fox-stations-local-automation",
    title: "Local News Automation for 28 Fox Television Stations",
    description: "Automated system that generates local news stories from data feeds, police reports, and public records. Creates first drafts for reporters and automates routine stories like weather and traffic.",
    division: "Fox Television Stations",
    subsidiary: null,
    owner: "Local News Innovation Team",
    status: "production",
    impact: "70% time savings on routine stories, 24/7 news coverage capability",
    techStackAi: [
      "GPT-4",
      "Named Entity Recognition",
      "Template Systems",
      "Whisper",
      "Claude",
      "Perplexity"
    ],
    techStackInfrastructure: [
      "AWS",
      "Content Lake",
      "API Gateway"
    ],
    techStackIntegration: [
      "Local Data Feeds",
      "CMS",
      "Broadcast Systems"
    ],
    estimatedUsers: null,
    costSavings: null,
    revenueIncrease: null,
    timeToValue: null,
    reusePotential: "Very High - deployed across all 28 stations",
    tags: [
      "automation",
      "local-news",
      "nlp",
      "content-generation"
    ],
    enablementSteps: [
      "Connect local data sources",
      "Customize for market needs",
      "Train on local style guides",
      "Implement editorial review"
    ],
    suggestedTechnologies: [
      "BigQuery ML",
      "Amazon SageMaker",
      "Azure Machine Learning"
    ],
    createdAt: "2025-07-12 06:23:37",
    updatedAt: "2025-07-12 20:26:56"
  },
  {
    id: "livenow-hyperlocal",
    title: "Hyperlocal Content Personalization for LiveNow",
    description: "AI system that personalizes LiveNow content based on user location, interests, and local events. Dynamically adjusts content mix to maximize relevance for each viewer's specific area.",
    division: "Fox Television Stations",
    subsidiary: null,
    owner: "LiveNow Product Team",
    status: "pilot",
    impact: "65% increase in session duration, 45% improvement in local content engagement",
    techStackAi: [
      "Geospatial ML Models",
      "Collaborative Filtering",
      "NLP",
      "Whisper",
      "GPT-4",
      "Claude"
    ],
    techStackInfrastructure: [
      "Edge Computing",
      "CDN",
      "Real-time Database"
    ],
    techStackIntegration: [
      "Location Services",
      "Local Event APIs",
      "User Profiles"
    ],
    estimatedUsers: null,
    costSavings: null,
    revenueIncrease: null,
    timeToValue: null,
    reusePotential: "High - technology applicable to any location-based service",
    tags: [
      "personalization",
      "hyperlocal",
      "streaming",
      "recommendation"
    ],
    enablementSteps: [
      "Build location preference models",
      "Integrate local data sources",
      "Deploy edge personalization",
      "Monitor engagement metrics"
    ],
    suggestedTechnologies: [
      "DALL-E 3",
      "ElevenLabs",
      "Runway ML"
    ],
    createdAt: "2025-07-12 06:23:37",
    updatedAt: "2025-07-12 20:26:56"
  },
  {
    id: "fox-local-traffic-ai",
    title: "AI Traffic Reporting for Fox Local",
    description: "Computer vision and data analysis system that generates automated traffic reports by analyzing camera feeds, GPS data, and incident reports. Creates natural language traffic updates for broadcasts.",
    division: "Fox Television Stations",
    subsidiary: null,
    owner: "Traffic & Weather Systems",
    status: "production",
    impact: "90% automation of traffic reporting, 5x more frequent updates",
    techStackAi: [
      "Object Detection",
      "Time Series Prediction",
      "NLG",
      "Whisper",
      "GPT-4",
      "Claude"
    ],
    techStackInfrastructure: [
      "Edge AI",
      "Stream Processing",
      "Cache Layer"
    ],
    techStackIntegration: [
      "Traffic Cameras",
      "DOT APIs",
      "Broadcast Graphics"
    ],
    estimatedUsers: null,
    costSavings: null,
    revenueIncrease: null,
    timeToValue: null,
    reusePotential: "Very High - standardized across all markets",
    tags: [
      "computer-vision",
      "traffic",
      "automation",
      "real-time"
    ],
    enablementSteps: [
      "Connect traffic data sources",
      "Deploy camera analytics",
      "Configure report generation",
      "Integrate with broadcasts"
    ],
    suggestedTechnologies: [
      "BigQuery ML",
      "Amazon SageMaker",
      "Azure Machine Learning"
    ],
    createdAt: "2025-07-12 06:23:37",
    updatedAt: "2025-07-12 20:26:56"
  },
  {
    id: "tubi-recommendation-engine",
    title: "Advanced Content Recommendation Engine for Tubi",
    description: "Sophisticated recommendation system using deep learning and collaborative filtering to analyze viewing patterns across Tubi's 50,000+ title library, delivering highly personalized content suggestions.",
    division: "Tubi Media Group",
    subsidiary: null,
    owner: "Tubi Data Science",
    status: "production",
    impact: "55% increase in watch time, 40% improvement in content discovery",
    techStackAi: [
      "Neural Collaborative Filtering",
      "Transformers",
      "Embeddings",
      "GPT-4",
      "Claude",
      "Perplexity"
    ],
    techStackInfrastructure: [
      "Kubernetes",
      "TensorFlow Serving",
      "Redis"
    ],
    techStackIntegration: [
      "User Service",
      "Content Catalog",
      "Analytics Pipeline"
    ],
    estimatedUsers: null,
    costSavings: null,
    revenueIncrease: null,
    timeToValue: null,
    reusePotential: "Very High - core technology for any content platform",
    tags: [
      "recommendation",
      "deep-learning",
      "personalization",
      "streaming"
    ],
    enablementSteps: [
      "Generate content embeddings",
      "Build user preference models",
      "Deploy real-time inference",
      "Continuous model updates"
    ],
    suggestedTechnologies: [
      "DALL-E 3",
      "ElevenLabs",
      "Runway ML"
    ],
    createdAt: "2025-07-12 06:23:37",
    updatedAt: "2025-07-12 20:26:56"
  },
  {
    id: "adrise-targeting-optimization",
    title: "AI-Powered Ad Targeting for AdRise",
    description: "Machine learning system that optimizes ad targeting and placement across Tubi's platform, analyzing user behavior, content context, and advertiser goals to maximize engagement and revenue.",
    division: "Tubi Media Group",
    subsidiary: null,
    owner: "AdRise Technology Team",
    status: "production",
    impact: "75% improvement in CTR, 45% increase in ad revenue per user",
    techStackAi: [
      "Multi-Armed Bandits",
      "Contextual Bandits",
      "Deep Learning",
      "GPT-4",
      "Claude",
      "Perplexity"
    ],
    techStackInfrastructure: [
      "Real-time Bidding Platform",
      "Feature Store",
      "A/B Testing"
    ],
    techStackIntegration: [
      "Ad Server",
      "User Profiles",
      "Campaign Manager"
    ],
    estimatedUsers: null,
    costSavings: null,
    revenueIncrease: null,
    timeToValue: null,
    reusePotential: "High - applicable to any ad-supported platform",
    tags: [
      "ad-tech",
      "optimization",
      "targeting",
      "revenue"
    ],
    enablementSteps: [
      "Build user interest models",
      "Implement contextual targeting",
      "Deploy optimization algorithms",
      "Set up performance tracking"
    ],
    suggestedTechnologies: [
      "DALL-E 3",
      "ElevenLabs",
      "Runway ML"
    ],
    createdAt: "2025-07-12 06:23:37",
    updatedAt: "2025-07-12 20:26:56"
  },
  {
    id: "tubi-kids-safety-ai",
    title: "Content Safety AI for Tubi Kids",
    description: "AI system that automatically reviews and filters content for Tubi Kids, analyzing video, audio, and metadata to ensure age-appropriate content and flag potential safety concerns.",
    division: "Tubi Media Group",
    subsidiary: null,
    owner: "Trust & Safety Team",
    status: "production",
    impact: "99.8% accuracy in content classification, 100% automated review coverage",
    techStackAi: [
      "Video Classification Models",
      "Audio Analysis",
      "Text Classification",
      "GPT-4",
      "Claude",
      "Perplexity"
    ],
    techStackInfrastructure: [
      "GPU Processing",
      "Queue System",
      "Alert Platform"
    ],
    techStackIntegration: [
      "Content Pipeline",
      "Moderation Dashboard",
      "Parent Controls"
    ],
    estimatedUsers: null,
    costSavings: null,
    revenueIncrease: null,
    timeToValue: null,
    reusePotential: "Medium - specific to kids content but adaptable",
    tags: [
      "safety",
      "content-moderation",
      "kids",
      "classification"
    ],
    enablementSteps: [
      "Train on age-appropriate guidelines",
      "Deploy content analysis pipeline",
      "Implement review workflow",
      "Set up parent reporting"
    ],
    suggestedTechnologies: [
      "DALL-E 3",
      "ElevenLabs",
      "Runway ML"
    ],
    createdAt: "2025-07-12 06:23:37",
    updatedAt: "2025-07-12 20:26:56"
  },
  {
    id: "tmz-trend-analysis",
    title: "Social Media Trend Analysis for TMZ",
    description: "Real-time AI system that monitors social media platforms to identify breaking celebrity news, viral moments, and trending topics. Alerts TMZ reporters to potential stories within seconds of emergence.",
    division: "Other Assets",
    subsidiary: null,
    owner: "TMZ Digital Team",
    status: "production",
    impact: "60% faster story discovery, 40% increase in exclusive content",
    techStackAi: [
      "BERT",
      "Trend Detection Algorithms",
      "Anomaly Detection",
      "GPT-4",
      "Claude",
      "Perplexity"
    ],
    techStackInfrastructure: [
      "Stream Processing",
      "ElasticSearch",
      "Alert System"
    ],
    techStackIntegration: [
      "Social APIs",
      "Editorial CMS",
      "Mobile Apps"
    ],
    estimatedUsers: null,
    costSavings: null,
    revenueIncrease: null,
    timeToValue: null,
    reusePotential: "High - adaptable to any news or entertainment property",
    tags: [
      "social-media",
      "trend-detection",
      "real-time",
      "news"
    ],
    enablementSteps: [
      "Connect social media streams",
      "Configure trend detection",
      "Build reporter dashboard",
      "Implement verification workflow"
    ],
    suggestedTechnologies: [
      "OpenAI Embeddings",
      "Pinecone",
      "LangChain"
    ],
    createdAt: "2025-07-12 06:23:37",
    updatedAt: "2025-07-12 20:26:56"
  },
  {
    id: "fanduel-betting-insights",
    title: "Sports Betting Insights Engine",
    description: "AI system leveraging Fox's sports data and FanDuel partnership to generate betting insights, odds analysis, and personalized recommendations for sports betting content integration.",
    division: "Other Assets",
    subsidiary: null,
    owner: "Fox Sports Digital",
    status: "development",
    impact: "35% increase in betting content engagement, new revenue opportunities",
    techStackAi: [
      "Predictive Models",
      "Statistical Analysis",
      "Risk Assessment",
      "GPT-4",
      "Claude",
      "Perplexity"
    ],
    techStackInfrastructure: [
      "Real-time Processing",
      "Data Warehouse",
      "API Platform"
    ],
    techStackIntegration: [
      "FanDuel APIs",
      "Sports Data Feeds",
      "Content Systems"
    ],
    estimatedUsers: null,
    costSavings: null,
    revenueIncrease: null,
    timeToValue: null,
    reusePotential: "Medium - specific to sports betting but valuable for partnerships",
    tags: [
      "sports-betting",
      "analytics",
      "predictions",
      "insights"
    ],
    enablementSteps: [
      "Integrate betting data feeds",
      "Build prediction models",
      "Create content templates",
      "Ensure compliance protocols"
    ],
    suggestedTechnologies: [
      "DALL-E 3",
      "ElevenLabs",
      "Runway ML"
    ],
    createdAt: "2025-07-12 06:23:37",
    updatedAt: "2025-07-12 20:26:56"
  },
  {
    id: "fox-com-user-analytics",
    title: "Cross-Platform User Analytics for Fox.com",
    description: "Unified AI analytics platform that tracks user behavior across all Fox digital properties, creating comprehensive user profiles and journey maps to optimize content delivery and advertising.",
    division: "Other Assets",
    subsidiary: null,
    owner: "Digital Analytics Team",
    status: "pilot",
    impact: "50% better user understanding, 30% improvement in cross-platform engagement",
    techStackAi: [
      "User Clustering",
      "Journey Analysis",
      "Predictive Analytics",
      "GPT-4",
      "Claude",
      "Perplexity"
    ],
    techStackInfrastructure: [
      "Google Analytics 360",
      "BigQuery",
      "Looker"
    ],
    techStackIntegration: [
      "All Fox Properties",
      "Ad Systems",
      "CRM"
    ],
    estimatedUsers: null,
    costSavings: null,
    revenueIncrease: null,
    timeToValue: null,
    reusePotential: "Very High - foundational for all digital properties",
    tags: [
      "analytics",
      "cross-platform",
      "user-behavior",
      "optimization"
    ],
    enablementSteps: [
      "Implement unified tracking",
      "Build identity resolution",
      "Create analytics models",
      "Deploy insights dashboards"
    ],
    suggestedTechnologies: [
      "DALL-E 3",
      "ElevenLabs",
      "Runway ML"
    ],
    createdAt: "2025-07-12 06:23:37",
    updatedAt: "2025-07-12 20:26:56"
  },
  {
    id: "fox-sports-highlight-detection",
    title: "AI-Powered Sports Highlight Detection",
    description: "Leverages OpenAI Whisper for real-time transcription combined with player telemetry data to automatically detect and clip key moments in live sports broadcasts. Reduces highlight creation time from 15 minutes to under 2 minutes per game.",
    division: "FOX Sports",
    subsidiary: null,
    owner: "Sports Tech Team",
    status: "production",
    impact: "95% reduction in highlight creation time, enabling near real-time social media content",
    techStackAi: [
      "OpenAI Whisper",
      "Custom ML Models",
      "GPT-4",
      "Claude",
      "Perplexity",
      "Gemini"
    ],
    techStackInfrastructure: [
      "AWS Lambda",
      "Kinesis"
    ],
    techStackIntegration: [
      "Telemetry API",
      "Video Processing Pipeline"
    ],
    estimatedUsers: null,
    costSavings: null,
    revenueIncrease: null,
    timeToValue: null,
    reusePotential: "High - adaptable to all live sports broadcasts across FOX properties",
    tags: [
      "whisper",
      "telemetry",
      "automation",
      "real-time"
    ],
    enablementSteps: [
      "Deploy Whisper API endpoint",
      "Connect telemetry data streams",
      "Configure highlight detection rules",
      "Set up automated clipping pipeline"
    ],
    suggestedTechnologies: [
      "BigQuery ML",
      "Amazon SageMaker",
      "Azure Machine Learning"
    ],
    createdAt: "2025-07-12 06:23:37",
    updatedAt: "2025-07-12 20:26:56"
  },
  {
    id: "tubi-content-tagging",
    title: "Automated Content Tagging and Metadata Generation",
    description: "Combines Claude for sophisticated content analysis with Whisper for dialogue transcription to automatically generate rich metadata tags, improving content discoverability and recommendation accuracy by 40%.",
    division: "Tubi",
    subsidiary: null,
    owner: "Content Operations",
    status: "pilot",
    impact: "40% improvement in content discovery, 60% reduction in manual tagging effort",
    techStackAi: [
      "Anthropic Claude",
      "OpenAI Whisper",
      "GPT-4",
      "Claude",
      "Perplexity",
      "Gemini"
    ],
    techStackInfrastructure: [
      "GCP Cloud Run",
      "BigQuery"
    ],
    techStackIntegration: [
      "CMS API",
      "Recommendation Engine"
    ],
    estimatedUsers: null,
    costSavings: null,
    revenueIncrease: null,
    timeToValue: null,
    reusePotential: "Very High - applicable to entire 40,000+ title library",
    tags: [
      "claude",
      "whisper",
      "metadata",
      "automation"
    ],
    enablementSteps: [
      "Integrate Claude API for content analysis",
      "Deploy Whisper for dialogue extraction",
      "Build metadata aggregation pipeline",
      "Connect to existing CMS"
    ],
    suggestedTechnologies: [
      "DALL-E 3",
      "ElevenLabs",
      "Runway ML"
    ],
    createdAt: "2025-07-12 06:23:37",
    updatedAt: "2025-07-12 20:26:56"
  },
  {
    id: "fox-news-producer-copilot",
    title: "AI Producer Assistant for Script Generation",
    description: "Microsoft Copilot integration that assists producers in generating segment scripts, fact-checking, and creating rundowns. Reduces script preparation time by 50% while maintaining editorial standards.",
    division: "FOX News",
    subsidiary: null,
    owner: "News Technology",
    status: "development",
    impact: "50% reduction in script prep time, enabling faster news cycle response",
    techStackAi: [
      "Microsoft Copilot",
      "Azure OpenAI",
      "GPT-4",
      "Claude",
      "Perplexity",
      "Gemini"
    ],
    techStackInfrastructure: [
      "Azure Cloud",
      "Office 365"
    ],
    techStackIntegration: [
      "Newsroom CMS",
      "Teleprompter Systems"
    ],
    estimatedUsers: null,
    costSavings: null,
    revenueIncrease: null,
    timeToValue: null,
    reusePotential: "Medium - customizable for different news formats and shows",
    tags: [
      "copilot",
      "scripting",
      "productivity",
      "editorial"
    ],
    enablementSteps: [
      "Configure Copilot with newsroom guidelines",
      "Train on historical scripts",
      "Integrate with production workflow",
      "Implement fact-checking protocols"
    ],
    suggestedTechnologies: [
      "OpenAI Embeddings",
      "Pinecone",
      "LangChain"
    ],
    createdAt: "2025-07-12 06:23:37",
    updatedAt: "2025-07-12 20:26:56"
  },
  {
    id: "onefox-ai-advertising-platform",
    title: "OneFOX AI-Driven Converged Media Platform",
    description: "AI-powered converged media platform by AdRise that harnesses audience & contextual signals along with behavioral, creative and campaign analytics to create personalized ad experiences and increase ad efficacy across FOX Entertainment, FOX Sports, FOX News Media and Tubi.",
    division: "Fox Corporation",
    subsidiary: null,
    owner: "AdRise Technology Team",
    status: "production",
    impact: "Unified planning, activation and measurement across all Fox properties",
    techStackAi: [
      "Machine Learning",
      "Large Language Models (LLMs)",
      "Predictive Models",
      "Claude",
      "GPT-4",
      "GitHub Copilot"
    ],
    techStackInfrastructure: [
      "AWS",
      "Proprietary AdRise Platform"
    ],
    techStackIntegration: [
      "FOX Entertainment",
      "FOX Sports",
      "FOX News Media",
      "Tubi"
    ],
    estimatedUsers: null,
    costSavings: null,
    revenueIncrease: null,
    timeToValue: null,
    reusePotential: "Very High - core platform for all Fox advertising across properties",
    tags: [
      "ai",
      "advertising",
      "machine-learning",
      "llm"
    ],
    enablementSteps: [
      "Deploy AI-driven audience modeling",
      "Integrate predictive campaign strategies",
      "Implement unified measurement tools",
      "Connect all Fox brand platforms"
    ],
    suggestedTechnologies: [
      "DALL-E 3",
      "ElevenLabs",
      "Runway ML"
    ],
    createdAt: "2025-07-12 14:53:33",
    updatedAt: "2025-07-12 20:26:56"
  },
  {
    id: "verify-blockchain-platform",
    title: "Verify - Blockchain Platform for AI Content Licensing",
    description: "Blockchain platform to negotiate licensing agreements with AI firms, allowing media companies to register content, verify ownership, and grant usage rights to AI platforms for training large language models.",
    division: "Fox Corporation",
    subsidiary: null,
    owner: "Fox Corporation Technology",
    status: "production",
    impact: "Industry-first solution for protecting content from unauthorized AI training",
    techStackAi: [
      "Content Verification Systems",
      "Blockchain Smart Contracts",
      "Claude",
      "GPT-4",
      "GitHub Copilot",
      "Gemini"
    ],
    techStackInfrastructure: [
      "Blockchain Protocol",
      "Third-party Publishing Integrations"
    ],
    techStackIntegration: [
      "Content Management Systems",
      "AI Platform APIs"
    ],
    estimatedUsers: null,
    costSavings: null,
    revenueIncrease: null,
    timeToValue: null,
    reusePotential: "High - can be licensed to other media companies",
    tags: [
      "blockchain",
      "ai",
      "content-protection",
      "licensing"
    ],
    enablementSteps: [
      "Register content on blockchain",
      "Integrate with CMS systems",
      "Establish AI licensing protocols",
      "Deploy verification tools"
    ],
    suggestedTechnologies: [
      "DALL-E 3",
      "ElevenLabs",
      "Runway ML"
    ],
    createdAt: "2025-07-12 14:53:33",
    updatedAt: "2025-07-12 20:26:56"
  },
  {
    id: "fox-mediacloud-aws",
    title: "MediaCloud - Cloud-Based Media Processing Platform",
    description: "Built on AWS after migrating 8 petabytes of content in 6 weeks, MediaCloud processes and distributes programming with enhanced functionality and speed, achieving industry-first uncompressed live video delivery with zero redundancy.",
    division: "Fox Corporation",
    subsidiary: null,
    owner: "Fox Technology Infrastructure",
    status: "production",
    impact: "Enabled remote editing during COVID-19, processes thousands of high-profile events including Super Bowl",
    techStackAi: [
      "Amazon SageMaker",
      "ML Automation",
      "Claude",
      "GPT-4",
      "GitHub Copilot",
      "Gemini"
    ],
    techStackInfrastructure: [
      "AWS S3",
      "AWS EC2",
      "AWS Lambda",
      "Amazon CloudFront"
    ],
    techStackIntegration: [
      "Live Production Systems",
      "Tubi Content Library",
      "Broadcast Systems"
    ],
    estimatedUsers: null,
    costSavings: null,
    revenueIncrease: null,
    timeToValue: null,
    reusePotential: "Very High - foundation for all Fox media operations",
    tags: [
      "cloud",
      "aws",
      "media-processing",
      "live-streaming"
    ],
    enablementSteps: [
      "Migrate content to cloud storage",
      "Deploy serverless processing",
      "Implement disaster recovery",
      "Enable remote workflows"
    ],
    suggestedTechnologies: [
      "DALL-E 3",
      "ElevenLabs",
      "Runway ML"
    ],
    createdAt: "2025-07-12 14:53:33",
    updatedAt: "2025-07-12 20:26:56"
  },
  {
    id: "fox-sports-ml-commentary",
    title: "ML-Powered Natural Language Sports Commentary",
    description: "Using Amazon SageMaker and ML Solutions Lab partnership, generates natural language in-game storylines for live sports commentaries from structured data, enhancing sports narratives with AI-powered insights.",
    division: "Fox Sports Media Group",
    subsidiary: null,
    owner: "Fox Sports Technology",
    status: "production",
    impact: "Enhanced viewer engagement with data-driven storylines during broadcasts",
    techStackAi: [
      "Amazon SageMaker",
      "Natural Language Generation",
      "Custom ML Models",
      "Stable Diffusion",
      "Midjourney",
      "GPT-4"
    ],
    techStackInfrastructure: [
      "AWS ML Solutions",
      "Real-time Processing"
    ],
    techStackIntegration: [
      "Sports Data Feeds",
      "Broadcast Graphics",
      "Commentary Systems"
    ],
    estimatedUsers: null,
    costSavings: null,
    revenueIncrease: null,
    timeToValue: null,
    reusePotential: "High - adaptable to different sports and broadcast formats",
    tags: [
      "nlp",
      "sports",
      "real-time",
      "sagemaker"
    ],
    enablementSteps: [
      "Train NLG models on sports data",
      "Integrate with live data feeds",
      "Deploy real-time generation",
      "Connect to broadcast systems"
    ],
    suggestedTechnologies: [
      "BigQuery ML",
      "Amazon SageMaker",
      "Azure Machine Learning"
    ],
    createdAt: "2025-07-12 14:53:33",
    updatedAt: "2025-07-12 20:26:56"
  },
  {
    id: "fox-tech-streaming-platform",
    title: "Next-Gen Streaming Technology Platform",
    description: "Comprehensive streaming platform supporting iOS, Android, tvOS, Roku, Fire TV with React/Vue.js web frontends, Golang/PHP backends, and advanced video delivery through HLS/MPEG-DASH protocols with 4K/HDR support.",
    division: "Fox Tech",
    subsidiary: null,
    owner: "Fox Tech Engineering",
    status: "production",
    impact: "Powers some of the biggest sports, entertainment and news streaming services",
    techStackAi: [
      "Personalization Algorithms",
      "Content Recommendations",
      "GPT-4",
      "Claude",
      "Perplexity",
      "Gemini"
    ],
    techStackInfrastructure: [
      "AWS",
      "Google Cloud Platform",
      "Docker",
      "Terraform"
    ],
    techStackIntegration: [
      "Akamai CDN",
      "Fastly",
      "AWS CloudFront"
    ],
    estimatedUsers: null,
    costSavings: null,
    revenueIncrease: null,
    timeToValue: null,
    reusePotential: "Very High - core streaming infrastructure for all properties",
    tags: [
      "streaming",
      "multi-platform",
      "4k",
      "hdr"
    ],
    enablementSteps: [
      "Deploy multi-platform apps",
      "Implement video delivery pipeline",
      "Configure CDN distribution",
      "Enable 4K/HDR streaming"
    ],
    suggestedTechnologies: [
      "Adobe Firefly",
      "Runway ML",
      "Pika Labs"
    ],
    createdAt: "2025-07-12 14:53:33",
    updatedAt: "2025-07-12 20:26:56"
  },
  {
    id: "aws-clean-rooms-collaboration",
    title: "AWS Clean Rooms for Secure Data Collaboration",
    description: "Enables secure data collaborations in AWS Cloud helping advertising clients unlock new insights across every Fox brand while protecting consumer data privacy.",
    division: "Fox Corporation",
    subsidiary: null,
    owner: "Fox Data & Commercial Technology",
    status: "production",
    impact: "Secure data sharing with advertisers while maintaining privacy compliance",
    techStackAi: [
      "Privacy-Preserving Analytics",
      "Secure Multi-party Computation",
      "Claude",
      "GPT-4",
      "GitHub Copilot",
      "Gemini"
    ],
    techStackInfrastructure: [
      "AWS Clean Rooms",
      "Encrypted Data Storage"
    ],
    techStackIntegration: [
      "Advertiser Systems",
      "Fox Brand Data",
      "Privacy Compliance Tools"
    ],
    estimatedUsers: null,
    costSavings: null,
    revenueIncrease: null,
    timeToValue: null,
    reusePotential: "High - applicable to all advertiser partnerships",
    tags: [
      "privacy",
      "data-collaboration",
      "aws",
      "advertising"
    ],
    enablementSteps: [
      "Set up secure data environments",
      "Configure privacy protocols",
      "Enable advertiser access",
      "Implement compliance monitoring"
    ],
    suggestedTechnologies: [
      "BigQuery ML",
      "Amazon SageMaker",
      "Azure Machine Learning"
    ],
    createdAt: "2025-07-12 14:53:33",
    updatedAt: "2025-07-12 20:26:56"
  },
  {
    id: "tubi-acquisition-integration",
    title: "Tubi Streaming Service AI Integration",
    description: "Following the $440M acquisition in 2020, integrated Tubi's streaming service with Fox's AI and cloud infrastructure, enabling rapid content transfer and enhanced personalization capabilities.",
    division: "Tubi Media Group",
    subsidiary: null,
    owner: "Tubi Technology Team",
    status: "production",
    impact: "Transferred 2,000 assets in 2 hours, expanded content library reach",
    techStackAi: [
      "Amazon Personalize",
      "Recommendation Engine",
      "Content Analysis",
      "GPT-4",
      "Claude",
      "Perplexity"
    ],
    techStackInfrastructure: [
      "AWS MediaCloud",
      "Content Delivery Network"
    ],
    techStackIntegration: [
      "Fox MediaCloud",
      "Tubi Platform",
      "Analytics Systems"
    ],
    estimatedUsers: null,
    costSavings: null,
    revenueIncrease: null,
    timeToValue: null,
    reusePotential: "Medium - specific to Tubi but learnings apply to other acquisitions",
    tags: [
      "acquisition",
      "streaming",
      "integration",
      "personalization"
    ],
    enablementSteps: [
      "Migrate Tubi infrastructure",
      "Integrate with Fox systems",
      "Deploy AI personalization",
      "Unify content delivery"
    ],
    suggestedTechnologies: [
      "DALL-E 3",
      "ElevenLabs",
      "Runway ML"
    ],
    createdAt: "2025-07-12 14:53:33",
    updatedAt: "2025-07-12 20:26:56"
  },
  {
    id: "fox-ai-exploration-bedrock",
    title: "Generative AI Exploration with Amazon Bedrock",
    description: "Led by Lindsay Silver (SVP Data & Commercial Technology), exploring Amazon Bedrock and Titan for next-generation AI capabilities to deliver contextually relevant products to consumers, advertisers, and broadcasters.",
    division: "Fox Corporation",
    subsidiary: null,
    owner: "Data & Commercial Technology Team",
    status: "development",
    impact: "Future-proofing AI capabilities for emerging use cases",
    techStackAi: [
      "Amazon Bedrock",
      "Amazon Titan",
      "Foundation Models",
      "Claude",
      "GPT-4",
      "GitHub Copilot"
    ],
    techStackInfrastructure: [
      "AWS AI Services",
      "Serverless Architecture"
    ],
    techStackIntegration: [
      "Existing ML Pipeline",
      "Content Systems",
      "Ad Tech Platform"
    ],
    estimatedUsers: null,
    costSavings: null,
    revenueIncrease: null,
    timeToValue: null,
    reusePotential: "Very High - foundation for future AI innovations",
    tags: [
      "generative-ai",
      "bedrock",
      "innovation",
      "exploration"
    ],
    enablementSteps: [
      "Evaluate foundation models",
      "Prototype use cases",
      "Test integration points",
      "Plan production deployment"
    ],
    suggestedTechnologies: [
      "BigQuery ML",
      "Amazon SageMaker",
      "Azure Machine Learning"
    ],
    createdAt: "2025-07-12 14:53:33",
    updatedAt: "2025-07-12 20:26:56"
  },
  {
    id: "experian-transunion-partnership",
    title: "Enhanced Converged Media Platform Partnerships",
    description: "Strategic collaborations with Experian, TransUnion, and LiveRamp to enhance the OneFOX Converged Media Platform with advanced identity resolution and audience data capabilities.",
    division: "Fox Corporation",
    subsidiary: null,
    owner: "Fox Advertising",
    status: "production",
    impact: "Enhanced audience targeting while maintaining privacy compliance",
    techStackAi: [
      "Identity Resolution",
      "Audience Modeling",
      "Privacy-Preserving ML",
      "Claude",
      "GPT-4",
      "GitHub Copilot"
    ],
    techStackInfrastructure: [
      "Partner APIs",
      "Secure Data Exchange"
    ],
    techStackIntegration: [
      "Experian API",
      "TransUnion Systems",
      "LiveRamp Platform"
    ],
    estimatedUsers: null,
    costSavings: null,
    revenueIncrease: null,
    timeToValue: null,
    reusePotential: "High - model for future data partnerships",
    tags: [
      "partnerships",
      "data",
      "identity",
      "advertising"
    ],
    enablementSteps: [
      "Integrate partner data feeds",
      "Implement identity matching",
      "Deploy privacy controls",
      "Enable audience insights"
    ],
    suggestedTechnologies: [
      "BigQuery ML",
      "Amazon SageMaker",
      "Azure Machine Learning"
    ],
    createdAt: "2025-07-12 14:53:33",
    updatedAt: "2025-07-12 20:26:56"
  },
  {
    id: "enhanced-brand-storytelling",
    title: "AI-Enhanced Brand Storytelling Program",
    description: "Strategic investment in The Lighthouse to develop AI-powered brand storytelling capabilities, enabling more effective and engaging advertising content across Fox properties.",
    division: "Fox Corporation",
    subsidiary: null,
    owner: "Fox Advertising",
    status: "production",
    impact: "Improved brand engagement and advertising effectiveness",
    techStackAi: [
      "Creative AI",
      "Content Generation",
      "Brand Analysis",
      "Claude",
      "GPT-4",
      "GitHub Copilot"
    ],
    techStackInfrastructure: [
      "The Lighthouse Platform",
      "Content Creation Tools"
    ],
    techStackIntegration: [
      "Ad Creative Systems",
      "Brand Guidelines",
      "Campaign Management"
    ],
    estimatedUsers: null,
    costSavings: null,
    revenueIncrease: null,
    timeToValue: null,
    reusePotential: "Medium - customizable for different brand needs",
    tags: [
      "storytelling",
      "branding",
      "ai",
      "content-creation"
    ],
    enablementSteps: [
      "Deploy creative AI tools",
      "Train on brand guidelines",
      "Integrate with ad systems",
      "Measure engagement impact"
    ],
    suggestedTechnologies: [
      "DALL-E 3",
      "ElevenLabs",
      "Runway ML"
    ],
    createdAt: "2025-07-12 14:53:33",
    updatedAt: "2025-07-12 20:26:56"
  },
  {
    id: "super-bowl-streaming-scale",
    title: "Super Bowl Live Streaming at Scale",
    description: "Leveraging AWS scale and reliability to broadcast high-profile events like Super Bowl LIV to millions of viewers with zero redundancy and industry-leading performance.",
    division: "Fox Sports Media Group",
    subsidiary: null,
    owner: "Fox Sports Technology",
    status: "production",
    impact: "Flawless delivery of major sporting events to millions of concurrent viewers",
    techStackAi: [
      "Load Prediction",
      "Auto-scaling Algorithms",
      "Stable Diffusion",
      "Midjourney",
      "GPT-4",
      "Claude"
    ],
    techStackInfrastructure: [
      "AWS Auto-scaling",
      "Multi-region Deployment",
      "Edge Computing"
    ],
    techStackIntegration: [
      "Broadcast Systems",
      "CDN Networks",
      "Monitoring Tools"
    ],
    estimatedUsers: null,
    costSavings: null,
    revenueIncrease: null,
    timeToValue: null,
    reusePotential: "Very High - blueprint for all major live events",
    tags: [
      "live-streaming",
      "scale",
      "sports",
      "reliability"
    ],
    enablementSteps: [
      "Design scalable architecture",
      "Implement redundancy systems",
      "Deploy edge infrastructure",
      "Test at scale"
    ],
    suggestedTechnologies: [
      "OpenAI Embeddings",
      "Pinecone",
      "LangChain"
    ],
    createdAt: "2025-07-12 14:53:33",
    updatedAt: "2025-07-12 20:26:56"
  },
  {
    id: "fox-data-science-culture",
    title: "Data Science and Engineering Innovation Hub",
    description: "Building a community of builders, operators and innovators with startup culture, fostering experimentation and collaboration to develop next-generation streaming technology and data solutions.",
    division: "Fox Tech",
    subsidiary: null,
    owner: "Fox Tech Leadership",
    status: "production",
    impact: "Attracting top tech talent and driving innovation across Fox brands",
    techStackAi: [
      "Various ML Frameworks",
      "Experimentation Platforms",
      "GPT-4",
      "Claude",
      "Perplexity",
      "Gemini"
    ],
    techStackInfrastructure: [
      "Multi-cloud",
      "Modern Data Stack",
      "DevOps Tools"
    ],
    techStackIntegration: [
      "Cross-team Collaboration",
      "Innovation Labs",
      "Hackathons"
    ],
    estimatedUsers: null,
    costSavings: null,
    revenueIncrease: null,
    timeToValue: null,
    reusePotential: "Very High - cultural foundation for all tech initiatives",
    tags: [
      "culture",
      "innovation",
      "data-science",
      "engineering"
    ],
    enablementSteps: [
      "Establish innovation programs",
      "Create collaboration spaces",
      "Foster experimentation culture",
      "Measure innovation impact"
    ],
    suggestedTechnologies: [
      "BigQuery ML",
      "Amazon SageMaker",
      "Azure Machine Learning"
    ],
    createdAt: "2025-07-12 14:53:33",
    updatedAt: "2025-07-12 20:26:56"
  }
];
export {
  useCasesData as u
};
