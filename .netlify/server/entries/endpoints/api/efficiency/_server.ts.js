import { json } from "@sveltejs/kit";
import { u as useCasesData } from "../../../../chunks/use-cases-db.js";
const GET = async ({ url }) => {
  try {
    const period = url.searchParams.get("period") || "all";
    const allUseCases = useCasesData;
    const enrichedUseCases = allUseCases.map((uc, index) => {
      let costSavings = 0;
      if (uc.status === "production") {
        if (uc.impact?.includes("reduction") || uc.impact?.includes("efficiency")) {
          const reductionMatch = uc.impact.match(/(\d+)%\s*reduction/);
          const efficiencyMatch = uc.impact.match(/(\d+)%\s*efficiency/);
          const percentage = reductionMatch ? parseInt(reductionMatch[1]) : efficiencyMatch ? parseInt(efficiencyMatch[1]) : 50;
          costSavings = Math.round(percentage * 1e4 + index % 5 * 1e4);
        } else {
          costSavings = Math.round(2e5 + index % 10 * 3e4);
        }
      } else if (uc.status === "pilot") {
        costSavings = Math.round(5e4 + index % 5 * 2e4);
      }
      let revenueIncrease = 0;
      if (uc.division === "Fox Sports Media Group" || uc.division === "Tubi Media Group") {
        if (uc.status === "production") {
          revenueIncrease = Math.round(1e5 + index % 7 * 5e4);
        }
      }
      let estimatedUsers = 0;
      if (uc.status === "production") {
        estimatedUsers = Math.round(50 + index % 15 * 10);
      } else if (uc.status === "pilot") {
        estimatedUsers = Math.round(10 + index % 5 * 8);
      }
      return {
        ...uc,
        costSavings: uc.costSavings || costSavings,
        revenueIncrease: uc.revenueIncrease || revenueIncrease,
        estimatedUsers: uc.estimatedUsers || estimatedUsers
      };
    });
    const totalSavings = enrichedUseCases.reduce((sum, uc) => sum + (uc.costSavings || 0), 0);
    const totalRevenue = enrichedUseCases.reduce((sum, uc) => sum + (uc.revenueIncrease || 0), 0);
    const totalUsers = enrichedUseCases.reduce((sum, uc) => sum + (uc.estimatedUsers || 0), 0);
    const avgHoursPerUserPerYear = 2080;
    const laborHoursSaved = Math.round(totalUsers * avgHoursPerUserPerYear * 0.2);
    const estimatedInvestment = allUseCases.length * 5e4;
    const totalReturn = totalSavings + totalRevenue;
    const roi = Math.round(totalReturn / estimatedInvestment * 100);
    const savingsTrend = Array.from(
      { length: 12 },
      (_, i) => Math.round(totalSavings / 12 * (i + 1) * (1 + i % 3 * 0.1))
    );
    const productionCases = enrichedUseCases.filter((uc) => uc.status === "production");
    const avgTimeToValue = Math.round(
      enrichedUseCases.reduce((sum, uc, index) => {
        let days = 30;
        if (uc.status === "production") days = 25 + index % 20;
        else if (uc.status === "pilot") days = 35 + index % 25;
        else if (uc.status === "development") days = 45 + index % 30;
        return sum + days;
      }, 0) / enrichedUseCases.length
    );
    const automationKeywords = ["automat", "bot", "workflow", "process", "pipeline"];
    const automationCases = enrichedUseCases.filter(
      (uc) => automationKeywords.some(
        (keyword) => uc.title.toLowerCase().includes(keyword) || uc.description.toLowerCase().includes(keyword)
      )
    );
    const automationRate = Math.round(automationCases.length / enrichedUseCases.length * 100);
    const processEfficiency = Math.round(laborHoursSaved / (totalUsers * avgHoursPerUserPerYear) * 100);
    const productivityGain = Math.round(laborHoursSaved / totalUsers / 52 * 2.5);
    const activeUsers = totalUsers;
    const productionUseCases = productionCases.length;
    const reusableCases = enrichedUseCases.filter((uc) => {
      const potential = uc.reusePotential?.toLowerCase();
      return potential?.includes("high") || potential?.includes("medium");
    });
    const reuseRate = Math.round(reusableCases.length / enrichedUseCases.length * 100);
    const innovationVelocity = Math.round(enrichedUseCases.length / 4);
    const divisionMap = /* @__PURE__ */ new Map();
    enrichedUseCases.forEach((uc) => {
      if (!divisionMap.has(uc.division)) {
        divisionMap.set(uc.division, {
          name: uc.division,
          savings: 0,
          revenue: 0,
          users: 0,
          count: 0
        });
      }
      const div = divisionMap.get(uc.division);
      div.savings += uc.costSavings || 0;
      div.revenue += uc.revenueIncrease || 0;
      div.users += uc.estimatedUsers || 0;
      div.count += 1;
    });
    const byDivision = Array.from(divisionMap.values()).map((div) => ({
      name: div.name,
      savings: div.savings,
      efficiency: Math.round(div.savings / (div.count * 5e4) * 100),
      // ROI proxy
      users: div.users,
      useCases: div.count
    })).sort((a, b) => b.savings - a.savings).slice(0, 5);
    const byStatus = {
      production: productionCases.length,
      pilot: enrichedUseCases.filter((uc) => uc.status === "pilot").length,
      development: enrichedUseCases.filter((uc) => uc.status === "development").length,
      concept: enrichedUseCases.filter((uc) => uc.status === "concept").length
    };
    const timeline = Array.from({ length: 12 }, (_, i) => ({
      month: new Date(2024, i).toLocaleString("default", { month: "short" }),
      implementations: 5 + i % 4 * 2,
      savings: Math.round(totalSavings / 12 * (1 + i % 3 * 0.1))
    }));
    return json({
      financial: {
        totalSavings,
        laborHoursSaved,
        revenueImpact: totalRevenue,
        roi,
        savingsTrend
      },
      productivity: {
        avgTimeToValue,
        automationRate,
        processEfficiency,
        productivityGain
      },
      scale: {
        activeUsers,
        productionUseCases,
        reuseRate,
        innovationVelocity
      },
      byDivision,
      byStatus,
      timeline
    });
  } catch (error) {
    console.error("Error calculating efficiency metrics:", error);
    return json({ error: "Failed to calculate efficiency metrics" }, { status: 500 });
  }
};
export {
  GET
};
