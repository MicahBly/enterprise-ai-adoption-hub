import { json } from "@sveltejs/kit";
import { u as useCasesData } from "../../../../chunks/use-cases-db.js";
const GET = async () => {
  try {
    const allUseCases = useCasesData;
    if (allUseCases.length === 0) {
      return json({ error: "No use cases found" }, { status: 404 });
    }
    const trackedTools = [
      "Claude",
      "GPT-4",
      "Whisper",
      "GitHub Copilot",
      "Midjourney",
      "Stable Diffusion",
      "Gemini",
      "Perplexity"
    ];
    const divisions = [...new Set(allUseCases.map((uc) => uc.division))].sort();
    const matrix = {};
    divisions.forEach((division) => {
      matrix[division] = {};
      trackedTools.forEach((tool) => {
        const divisionUseCases = allUseCases.filter((uc) => uc.division === division);
        if (divisionUseCases.length === 0) {
          matrix[division][tool] = 0;
          return;
        }
        const useCasesWithTool = divisionUseCases.filter((uc) => {
          try {
            let techStack = [];
            if (uc.techStackAi) {
              if (typeof uc.techStackAi === "string") {
                techStack = JSON.parse(uc.techStackAi);
              } else if (Array.isArray(uc.techStackAi)) {
                techStack = uc.techStackAi;
              }
            }
            return techStack.some(
              (tech) => tech.toLowerCase().includes(tool.toLowerCase()) || tool.toLowerCase().includes(tech.toLowerCase())
            );
          } catch (error) {
            console.error(`Error parsing techStackAi for use case ${uc.id}:`, error);
            return false;
          }
        });
        const percentage = Math.round(useCasesWithTool.length / divisionUseCases.length * 100);
        matrix[division][tool] = percentage;
      });
    });
    return json({
      matrix,
      divisions,
      tools: trackedTools
    });
  } catch (error) {
    console.error("Error calculating adoption data:", error);
    return json({ error: "Failed to calculate adoption data" }, { status: 500 });
  }
};
const PUT = async ({ request }) => {
  try {
    return json({ error: "Updating adoption data is not supported in production" }, { status: 501 });
  } catch (error) {
    console.error("Error updating adoption data:", error);
    return json({ error: "Failed to update adoption data" }, { status: 500 });
  }
};
export {
  GET,
  PUT
};
