# FOX AI Hub

A comprehensive AI Use Case Management and Adoption Tracking platform for Fox Corporation, built with SvelteKit and TypeScript.

## 🚀 Features

### Core Functionality
- **AI Use Case Directory**: Browse and discover AI implementations across Fox divisions
- **Adoption Matrix**: Visualize AI technology adoption patterns across departments
- **Context-Aware Chat**: Get insights about specific use cases with AI assistance
- **Enablement Paths**: Step-by-step implementation guidance for each use case
- **Taxonomy Navigation**: Explore use cases by technology tags and categories

### Advanced Features
- **Dynamic Adoption Analytics**: Real-time statistics and insights
- **Suggested Technologies**: AI-powered recommendations for enhancing use cases
- **Interactive Filtering**: Filter by division, status, tags, and adoption levels
- **Responsive Design**: Optimized for desktop and mobile viewing
- **Dark Mode Support**: System-adaptive theme switching

## 🏗️ Tech Stack

- **Frontend**: SvelteKit, TypeScript, TailwindCSS
- **Database**: SQLite with Drizzle ORM
- **AI Integration**: OpenAI API for chat and recommendations
- **Icons**: Lucide Svelte
- **Deployment**: Node.js compatible

## 📊 Data Structure

### Use Cases
Each use case includes:
- Title, description, and business impact
- Division and subsidiary information
- Technology stack (AI, Infrastructure, Integrations)
- Status tracking (concept → development → pilot → production)
- Business metrics (users, cost savings, revenue impact)
- Enablement steps and reuse potential
- AI-generated suggested technologies

### Adoption Matrix
- Technology adoption percentages across divisions
- Dynamic calculation of adoption levels (High/Medium/Low)
- Visual heatmap with interactive navigation
- Export capabilities (CSV, JSON)

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd fox-ai-hub

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Initialize database
npm run db:migrate

# Start development server
npm run dev
```

### Environment Variables
```env
# OpenAI API (for chat functionality)
OPENAI_API_KEY=your_openai_api_key

# Database
DATABASE_URL=./fox-ai-hub.db
```

## 📁 Project Structure

```
src/
├── lib/
│   ├── components/         # Reusable UI components
│   ├── stores/            # Svelte stores for state management
│   ├── utils/             # Utility functions
│   └── db/                # Database schema and operations
├── routes/
│   ├── api/               # API endpoints
│   ├── use-cases/         # Use case pages
│   ├── adoption-matrix/   # Adoption visualization
│   └── taxonomy/          # Tag-based navigation
└── app.html               # Application shell
```

## 🎯 Key Components

### Use Case Management
- **UseCaseCard**: Display use case summaries with status indicators
- **FilterBar**: Advanced filtering and search functionality
- **EnablementPathCompact**: Accordion-style implementation guides

### Analytics & Visualization  
- **AdoptionMatrix**: Interactive heatmap of technology adoption
- **ChatSearchContext**: Context-aware AI assistance
- **SuggestedTechnologies**: AI-powered enhancement recommendations

### Navigation & Discovery
- **TaxonomyPages**: Technology-based use case discovery
- **AdoptionLevelPages**: Filtered views by adoption percentage

## 🔧 Configuration

### AI Tools Configuration
The platform tracks adoption of these AI technologies:
- Claude, GPT-4, Whisper, GitHub Copilot
- Midjourney, Stable Diffusion, Gemini, Perplexity

### Division Structure
Supports Fox Corporation divisions:
- Fox News Media, Fox Sports Media Group
- Fox Entertainment, Fox Television Stations
- Tubi Media Group, Other Assets

## 📈 Analytics

### Adoption Metrics
- **High Adoption**: 75-100% (mature, widely-adopted technologies)
- **Medium Adoption**: 50-74% (promising implementations with growth potential)
- **Low Adoption**: 0-49% (early-stage or specialized implementations)

### Insights Generation
- Top performing technologies and leading divisions
- Areas for improvement and strategic recommendations
- Technology versatility and specialization analysis

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and test thoroughly
4. Commit with descriptive messages
5. Push to your branch and create a Pull Request

## 📝 License

Private - Fox Corporation Internal Use

## 🔮 Future Enhancements

- Advanced analytics dashboard
- Integration with Fox internal systems
- Automated use case discovery
- Performance benchmarking tools
- Cross-division collaboration features

---

Built with ❤️ for Fox Corporation's AI transformation journey.