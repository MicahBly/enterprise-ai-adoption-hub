import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import useCasesData from '$lib/data/use-cases-db.json';

export const GET: RequestHandler = async ({ url }) => {
  try {
    const period = url.searchParams.get('period') || 'all';
    
    // Use the imported JSON data
    const allUseCases = useCasesData;
    
    // Calculate financial metrics
    const totalSavings = allUseCases.reduce((sum, uc) => sum + (uc.costSavings || 0), 0);
    const totalRevenue = allUseCases.reduce((sum, uc) => sum + (uc.revenueIncrease || 0), 0);
    
    // Estimate labor hours saved (assuming 20% time savings per user on average)
    const totalUsers = allUseCases.reduce((sum, uc) => sum + (uc.estimatedUsers || 0), 0);
    const avgHoursPerUserPerYear = 2080; // Standard work year
    const laborHoursSaved = Math.round(totalUsers * avgHoursPerUserPerYear * 0.2);
    
    // Calculate ROI (simplified - in real implementation would include costs)
    const estimatedInvestment = allUseCases.length * 50000; // Rough estimate per use case
    const totalReturn = totalSavings + totalRevenue;
    const roi = Math.round((totalReturn / estimatedInvestment) * 100);
    
    // Generate trend data (mock data - in real implementation would be historical)
    const savingsTrend = Array.from({ length: 12 }, (_, i) => 
      Math.round(totalSavings / 12 * (i + 1) * (1 + Math.random() * 0.2))
    );
    
    // Calculate productivity metrics
    const productionCases = allUseCases.filter(uc => uc.status === 'production');
    const avgTimeToValue = Math.round(
      allUseCases
        .filter(uc => uc.timeToValue)
        .reduce((sum, uc) => {
          const days = parseInt(uc.timeToValue) || 30;
          return sum + days;
        }, 0) / (allUseCases.filter(uc => uc.timeToValue).length || 1)
    );
    
    // Estimate automation rate based on use case types
    const automationKeywords = ['automat', 'bot', 'workflow', 'process', 'pipeline'];
    const automationCases = allUseCases.filter(uc => 
      automationKeywords.some(keyword => 
        uc.title.toLowerCase().includes(keyword) || 
        uc.description.toLowerCase().includes(keyword)
      )
    );
    const automationRate = Math.round((automationCases.length / allUseCases.length) * 100);
    
    // Process efficiency gain (estimated based on time savings)
    const processEfficiency = Math.round(laborHoursSaved / (totalUsers * avgHoursPerUserPerYear) * 100);
    
    // Productivity gain per employee
    const productivityGain = Math.round((laborHoursSaved / totalUsers / 52) * 2.5); // Hours per week * multiplier
    
    // Scale metrics
    const activeUsers = totalUsers;
    const productionUseCases = productionCases.length;
    
    // Calculate reuse rate
    const reusableCases = allUseCases.filter(uc => 
      uc.reusePotential === 'high' || uc.reusePotential === 'medium'
    );
    const reuseRate = Math.round((reusableCases.length / allUseCases.length) * 100);
    
    // Innovation velocity (new implementations per quarter)
    const innovationVelocity = Math.round(allUseCases.length / 4); // Assuming data is for 1 year
    
    // Group by division for performance metrics
    const divisionMap = new Map();
    allUseCases.forEach(uc => {
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
    
    const byDivision = Array.from(divisionMap.values())
      .map(div => ({
        name: div.name,
        savings: div.savings,
        efficiency: Math.round((div.savings / (div.count * 50000)) * 100), // ROI proxy
        users: div.users,
        useCases: div.count
      }))
      .sort((a, b) => b.savings - a.savings)
      .slice(0, 5); // Top 5 divisions
    
    // Status breakdown
    const byStatus = {
      production: productionCases.length,
      pilot: allUseCases.filter(uc => uc.status === 'pilot').length,
      development: allUseCases.filter(uc => uc.status === 'development').length,
      concept: allUseCases.filter(uc => uc.status === 'concept').length
    };
    
    // Timeline data (mock - in real implementation would be from timestamps)
    const timeline = Array.from({ length: 12 }, (_, i) => ({
      month: new Date(2024, i).toLocaleString('default', { month: 'short' }),
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
    console.error('Error calculating efficiency metrics:', error);
    return json({ error: 'Failed to calculate efficiency metrics' }, { status: 500 });
  }
};