import { json } from "@sveltejs/kit";
import { d as db, u as useCases } from "../../../../chunks/index2.js";
const GET = async ({ url }) => {
  try {
    const period = url.searchParams.get("period") || "all";
    const allUseCases = await db.select().from(useCases);
    const totalSavings = allUseCases.reduce((sum, uc) => sum + (uc.costSavings || 0), 0);
    const totalRevenue = allUseCases.reduce((sum, uc) => sum + (uc.revenueIncrease || 0), 0);
    const totalUsers = allUseCases.reduce((sum, uc) => sum + (uc.estimatedUsers || 0), 0);
    const avgHoursPerUserPerYear = 2080;
    const laborHoursSaved = Math.round(totalUsers * avgHoursPerUserPerYear * 0.2);
    const estimatedInvestment = allUseCases.length * 5e4;
    const totalReturn = totalSavings + totalRevenue;
    const roi = Math.round(totalReturn / estimatedInvestment * 100);
    const savingsTrend = Array.from(
      { length: 12 },
      (_, i) => Math.round(totalSavings / 12 * (i + 1) * (1 + Math.random() * 0.2))
    );
    const productionCases = allUseCases.filter((uc) => uc.status === "production");
    const avgTimeToValue = Math.round(
      allUseCases.filter((uc) => uc.timeToValue).reduce((sum, uc) => {
        const days = parseInt(uc.timeToValue) || 30;
        return sum + days;
      }, 0) / (allUseCases.filter((uc) => uc.timeToValue).length || 1)
    );
    const automationKeywords = ["automat", "bot", "workflow", "process", "pipeline"];
    const automationCases = allUseCases.filter(
      (uc) => automationKeywords.some(
        (keyword) => uc.title.toLowerCase().includes(keyword) || uc.description.toLowerCase().includes(keyword)
      )
    );
    const automationRate = Math.round(automationCases.length / allUseCases.length * 100);
    const processEfficiency = Math.round(laborHoursSaved / (totalUsers * avgHoursPerUserPerYear) * 100);
    const productivityGain = Math.round(laborHoursSaved / totalUsers / 52 * 2.5);
    const activeUsers = totalUsers;
    const productionUseCases = productionCases.length;
    const reusableCases = allUseCases.filter(
      (uc) => uc.reusePotential === "high" || uc.reusePotential === "medium"
    );
    const reuseRate = Math.round(reusableCases.length / allUseCases.length * 100);
    const innovationVelocity = Math.round(allUseCases.length / 4);
    const divisionMap = /* @__PURE__ */ new Map();
    allUseCases.forEach((uc) => {
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
      pilot: allUseCases.filter((uc) => uc.status === "pilot").length,
      development: allUseCases.filter((uc) => uc.status === "development").length,
      concept: allUseCases.filter((uc) => uc.status === "concept").length
    };
    const timeline = Array.from({ length: 12 }, (_, i) => ({
      month: new Date(2024, i).toLocaleString("default", { month: "short" }),
      implementations: Math.floor(Math.random() * 10) + 5,
      savings: Math.round(totalSavings / 12 * (1 + Math.random() * 0.3))
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
