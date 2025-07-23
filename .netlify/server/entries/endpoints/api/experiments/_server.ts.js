import { json } from "@sveltejs/kit";
import { d as db, u as useCases, a as adoptionData } from "../../../../chunks/index2.js";
const GET = async () => {
  try {
    const allUseCases = await db.select().from(useCases);
    const adoptionMatrix = await db.select().from(adoptionData);
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
    const currentExperiments = [
      {
        id: "exp-001",
        title: "AI Champions Program",
        division: "Fox News Media",
        description: "Training 20 AI champions to mentor teams and drive adoption of ChatGPT and Claude for content creation.",
        status: "active",
        progress: 65,
        startDate: "Oct 2024",
        duration: "3 months",
        metrics: [
          "20 champions trained",
          "50+ team members mentored",
          "30% increase in AI tool usage"
        ]
      },
      {
        id: "exp-002",
        title: "Automated Workflow Templates",
        division: "Fox Sports Media Group",
        description: "Creating pre-built AI workflow templates for common sports content generation tasks.",
        status: "active",
        progress: 40,
        startDate: "Nov 2024",
        duration: "2 months",
        metrics: [
          "10 workflow templates created",
          "5 hours saved per week per user",
          "80% user satisfaction"
        ]
      },
      {
        id: "exp-003",
        title: "AI Hackathon Series",
        division: "Fox Digital",
        description: "Monthly hackathons to discover innovative AI use cases and build prototypes.",
        status: "completed",
        progress: 100,
        startDate: "Sep 2024",
        duration: "3 months",
        metrics: [
          "3 hackathons completed",
          "15 prototypes built",
          "5 ideas moved to production"
        ]
      }
    ];
    const suggestedExperiments = {
      training: [
        {
          title: "AI Literacy Bootcamp",
          description: "Intensive 2-day workshops for divisions with low AI adoption to build foundational skills.",
          impact: "high",
          targetDivisions: lowAdoptionDivisions.slice(0, 3),
          estimatedDuration: "2 weeks",
          successCriteria: [
            "90% participant completion",
            "25% increase in tool usage",
            "NPS score > 8"
          ]
        },
        {
          title: "Tool-Specific Workshops",
          description: "Deep dive sessions on underutilized tools like Whisper for transcription and Midjourney for visuals.",
          impact: "medium",
          targetDivisions: ["Fox News Media", "Fox Sports"],
          estimatedDuration: "1 month",
          successCriteria: [
            "50 participants per session",
            "3x increase in tool usage",
            "Create 5 success stories"
          ]
        }
      ],
      incentive: [
        {
          title: "AI Innovation Awards",
          description: "Quarterly awards recognizing teams that achieve significant results using AI tools.",
          impact: "high",
          targetDivisions: ["All Divisions"],
          estimatedDuration: "Ongoing",
          successCriteria: [
            "20+ submissions per quarter",
            "Cross-division participation",
            "Documented ROI > $100k"
          ]
        },
        {
          title: "Usage Milestone Rewards",
          description: "Gamified system rewarding teams for reaching AI tool usage milestones.",
          impact: "medium",
          targetDivisions: lowAdoptionDivisions,
          estimatedDuration: "6 months",
          successCriteria: [
            "50% participation rate",
            "2x usage increase",
            "Sustained engagement"
          ]
        }
      ],
      infrastructure: [
        {
          title: "AI Sandbox Environment",
          description: "Dedicated environment for teams to experiment with AI tools without production risks.",
          impact: "high",
          targetDivisions: ["Fox Digital", "Fox Entertainment"],
          estimatedDuration: "2 months",
          successCriteria: [
            "100+ active users",
            "20 experiments per month",
            "5 ideas promoted to production"
          ]
        },
        {
          title: "Integration Templates",
          description: "Pre-built integrations between AI tools and existing Fox systems.",
          impact: "medium",
          targetDivisions: ["All Technical Teams"],
          estimatedDuration: "3 months",
          successCriteria: [
            "10 templates created",
            "50% reduction in setup time",
            "80% reuse rate"
          ]
        }
      ],
      community: [
        {
          title: "AI User Groups",
          description: "Division-specific communities for sharing best practices and use cases.",
          impact: "medium",
          targetDivisions: ["All Divisions"],
          estimatedDuration: "Ongoing",
          successCriteria: [
            "200+ active members",
            "Weekly knowledge sharing",
            "10 cross-team collaborations"
          ]
        },
        {
          title: "Show & Tell Sessions",
          description: "Monthly demos where teams showcase their AI implementations and results.",
          impact: "low",
          targetDivisions: ["All Divisions"],
          estimatedDuration: "Ongoing",
          successCriteria: [
            "5 demos per session",
            "100+ attendees",
            "3 ideas replicated"
          ]
        }
      ]
    };
    const participatingDivisions = new Set(currentExperiments.map((exp) => exp.division)).size;
    const projectedImpact = 18;
    return json({
      current: currentExperiments,
      suggested: suggestedExperiments,
      stats: {
        activeExperiments,
        successRate,
        participatingDivisions,
        projectedImpact
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
