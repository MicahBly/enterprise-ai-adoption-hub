import { json } from "@sveltejs/kit";
import { u as useCasesData } from "../../../../chunks/use-cases-db.js";
const adoptionDataRaw = [
  {
    id: "fox-news-media-claude",
    division: "Fox News Media",
    aiTool: "Claude",
    adoptionPercentage: 88,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "fox-news-media-gpt-4",
    division: "Fox News Media",
    aiTool: "GPT-4",
    adoptionPercentage: 82,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "fox-news-media-whisper",
    division: "Fox News Media",
    aiTool: "Whisper",
    adoptionPercentage: 95,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "fox-news-media-github-copilot",
    division: "Fox News Media",
    aiTool: "GitHub Copilot",
    adoptionPercentage: 45,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "fox-news-media-midjourney",
    division: "Fox News Media",
    aiTool: "Midjourney",
    adoptionPercentage: 60,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "fox-news-media-stable-diffusion",
    division: "Fox News Media",
    aiTool: "Stable Diffusion",
    adoptionPercentage: 35,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "fox-news-media-gemini",
    division: "Fox News Media",
    aiTool: "Gemini",
    adoptionPercentage: 20,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "fox-news-media-perplexity",
    division: "Fox News Media",
    aiTool: "Perplexity",
    adoptionPercentage: 75,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "fox-sports-media-group-claude",
    division: "Fox Sports Media Group",
    aiTool: "Claude",
    adoptionPercentage: 70,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "fox-sports-media-group-gpt-4",
    division: "Fox Sports Media Group",
    aiTool: "GPT-4",
    adoptionPercentage: 80,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "fox-sports-media-group-whisper",
    division: "Fox Sports Media Group",
    aiTool: "Whisper",
    adoptionPercentage: 65,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "fox-sports-media-group-github-copilot",
    division: "Fox Sports Media Group",
    aiTool: "GitHub Copilot",
    adoptionPercentage: 75,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "fox-sports-media-group-midjourney",
    division: "Fox Sports Media Group",
    aiTool: "Midjourney",
    adoptionPercentage: 85,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "fox-sports-media-group-stable-diffusion",
    division: "Fox Sports Media Group",
    aiTool: "Stable Diffusion",
    adoptionPercentage: 80,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "fox-sports-media-group-gemini",
    division: "Fox Sports Media Group",
    aiTool: "Gemini",
    adoptionPercentage: 40,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "fox-sports-media-group-perplexity",
    division: "Fox Sports Media Group",
    aiTool: "Perplexity",
    adoptionPercentage: 50,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "fox-entertainment-claude",
    division: "Fox Entertainment",
    aiTool: "Claude",
    adoptionPercentage: 60,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "fox-entertainment-gpt-4",
    division: "Fox Entertainment",
    aiTool: "GPT-4",
    adoptionPercentage: 65,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "fox-entertainment-whisper",
    division: "Fox Entertainment",
    aiTool: "Whisper",
    adoptionPercentage: 55,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "fox-entertainment-github-copilot",
    division: "Fox Entertainment",
    aiTool: "GitHub Copilot",
    adoptionPercentage: 30,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "fox-entertainment-midjourney",
    division: "Fox Entertainment",
    aiTool: "Midjourney",
    adoptionPercentage: 92,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "fox-entertainment-stable-diffusion",
    division: "Fox Entertainment",
    aiTool: "Stable Diffusion",
    adoptionPercentage: 88,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "fox-entertainment-gemini",
    division: "Fox Entertainment",
    aiTool: "Gemini",
    adoptionPercentage: 35,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "fox-entertainment-perplexity",
    division: "Fox Entertainment",
    aiTool: "Perplexity",
    adoptionPercentage: 45,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "fox-television-stations-claude",
    division: "Fox Television Stations",
    aiTool: "Claude",
    adoptionPercentage: 65,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "fox-television-stations-gpt-4",
    division: "Fox Television Stations",
    aiTool: "GPT-4",
    adoptionPercentage: 70,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "fox-television-stations-whisper",
    division: "Fox Television Stations",
    aiTool: "Whisper",
    adoptionPercentage: 85,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "fox-television-stations-github-copilot",
    division: "Fox Television Stations",
    aiTool: "GitHub Copilot",
    adoptionPercentage: 55,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "fox-television-stations-midjourney",
    division: "Fox Television Stations",
    aiTool: "Midjourney",
    adoptionPercentage: 50,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "fox-television-stations-stable-diffusion",
    division: "Fox Television Stations",
    aiTool: "Stable Diffusion",
    adoptionPercentage: 45,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "fox-television-stations-gemini",
    division: "Fox Television Stations",
    aiTool: "Gemini",
    adoptionPercentage: 60,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "fox-television-stations-perplexity",
    division: "Fox Television Stations",
    aiTool: "Perplexity",
    adoptionPercentage: 65,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "tubi-media-group-claude",
    division: "Tubi Media Group",
    aiTool: "Claude",
    adoptionPercentage: 85,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "tubi-media-group-gpt-4",
    division: "Tubi Media Group",
    aiTool: "GPT-4",
    adoptionPercentage: 75,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "tubi-media-group-whisper",
    division: "Tubi Media Group",
    aiTool: "Whisper",
    adoptionPercentage: 60,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "tubi-media-group-github-copilot",
    division: "Tubi Media Group",
    aiTool: "GitHub Copilot",
    adoptionPercentage: 90,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "tubi-media-group-midjourney",
    division: "Tubi Media Group",
    aiTool: "Midjourney",
    adoptionPercentage: 55,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "tubi-media-group-stable-diffusion",
    division: "Tubi Media Group",
    aiTool: "Stable Diffusion",
    adoptionPercentage: 50,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "tubi-media-group-gemini",
    division: "Tubi Media Group",
    aiTool: "Gemini",
    adoptionPercentage: 45,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "tubi-media-group-perplexity",
    division: "Tubi Media Group",
    aiTool: "Perplexity",
    adoptionPercentage: 70,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "other-assets-claude",
    division: "Other Assets",
    aiTool: "Claude",
    adoptionPercentage: 70,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "other-assets-gpt-4",
    division: "Other Assets",
    aiTool: "GPT-4",
    adoptionPercentage: 68,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "other-assets-whisper",
    division: "Other Assets",
    aiTool: "Whisper",
    adoptionPercentage: 55,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "other-assets-github-copilot",
    division: "Other Assets",
    aiTool: "GitHub Copilot",
    adoptionPercentage: 75,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "other-assets-midjourney",
    division: "Other Assets",
    aiTool: "Midjourney",
    adoptionPercentage: 45,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "other-assets-stable-diffusion",
    division: "Other Assets",
    aiTool: "Stable Diffusion",
    adoptionPercentage: 40,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "other-assets-gemini",
    division: "Other Assets",
    aiTool: "Gemini",
    adoptionPercentage: 50,
    lastUpdated: "2025-07-12 06:23:37"
  },
  {
    id: "other-assets-perplexity",
    division: "Other Assets",
    aiTool: "Perplexity",
    adoptionPercentage: 60,
    lastUpdated: "2025-07-12 06:23:37"
  }
];
const GET = async () => {
  try {
    const allUseCases = useCasesData;
    const adoptionMatrix = adoptionDataRaw;
    const activeExperiments = 12;
    const completedExperiments = 8;
    const successRate = Math.round(7 / completedExperiments * 100);
    const divisionAdoption = /* @__PURE__ */ new Map();
    const toolAdoption = /* @__PURE__ */ new Map();
    adoptionMatrix.forEach((item) => {
      if (!divisionAdoption.has(item.division)) {
        divisionAdoption.set(item.division, []);
      }
      divisionAdoption.get(item.division).push(item.adoptionPercentage);
      if (!toolAdoption.has(item.aiTool)) {
        toolAdoption.set(item.aiTool, []);
      }
      toolAdoption.get(item.aiTool).push(item.adoptionPercentage);
    });
    const lowAdoptionDivisions = [];
    divisionAdoption.forEach((percentages, division) => {
      const avg = percentages.reduce((a, b) => a + b, 0) / percentages.length;
      if (avg < 50) {
        lowAdoptionDivisions.push(division);
      }
    });
    const underutilizedTools = [];
    toolAdoption.forEach((percentages, tool) => {
      const avg = percentages.reduce((a, b) => a + b, 0) / percentages.length;
      if (avg < 30) {
        underutilizedTools.push(tool);
      }
    });
    const highImpactUseCases = allUseCases.filter((uc) => uc.status === "in-progress" || uc.status === "planned").sort((a, b) => {
      const impactA = (a.costSavings || 0) + (a.revenueIncrease || 0);
      const impactB = (b.costSavings || 0) + (b.revenueIncrease || 0);
      return impactB - impactA;
    }).slice(0, 5);
    const recommendations = [
      {
        id: "exp-1",
        title: "AI Code Review Assistant for Development Teams",
        division: lowAdoptionDivisions[0] || "Technology",
        aiTool: "Claude",
        estimatedImpact: "High",
        status: "proposed",
        description: "Implement AI-powered code review to improve code quality and reduce review time by 40%"
      },
      {
        id: "exp-2",
        title: "Voice-to-Text Meeting Transcription",
        division: lowAdoptionDivisions[1] || "Sales",
        aiTool: "Whisper",
        estimatedImpact: "Medium",
        status: "active",
        description: "Automatically transcribe and summarize sales calls to capture insights and action items"
      },
      {
        id: "exp-3",
        title: "Automated Contract Analysis",
        division: "Legal",
        aiTool: "GPT-4",
        estimatedImpact: "Very High",
        status: "proposed",
        description: "Use AI to review contracts for risk factors and compliance issues, reducing review time by 60%"
      }
    ];
    return json({
      stats: {
        activeExperiments,
        completedExperiments,
        successRate,
        lowAdoptionDivisions: lowAdoptionDivisions.length,
        underutilizedTools: underutilizedTools.length
      },
      recommendations,
      insights: {
        lowAdoptionDivisions: lowAdoptionDivisions.slice(0, 3),
        underutilizedTools: underutilizedTools.slice(0, 3),
        highImpactOpportunities: highImpactUseCases.length
      }
    });
  } catch (error) {
    console.error("Error fetching experiments data:", error);
    return json({ error: "Failed to fetch experiments data" }, { status: 500 });
  }
};
export {
  GET
};
