import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import useCasesData from '$lib/data/use-cases-db.json';
import adoptionDataRaw from '$lib/data/adoption-data.json';

export const GET: RequestHandler = async () => {
  try {
    // Use the imported JSON data
    const allUseCases = useCasesData;
    const adoptionMatrix = adoptionDataRaw;
    
    // Calculate statistics
    const activeExperiments = 12; // In real implementation, would come from experiments table
    const completedExperiments = 8;
    const successRate = Math.round((7 / completedExperiments) * 100);
    
    // Get unique divisions with low adoption
    const divisionAdoption = new Map();
    const toolAdoption = new Map();
    
    // Calculate average adoption by division
    adoptionMatrix.forEach(item => {
      if (!divisionAdoption.has(item.division)) {
        divisionAdoption.set(item.division, []);
      }
      divisionAdoption.get(item.division).push(item.adoptionPercentage);
      
      if (!toolAdoption.has(item.aiTool)) {
        toolAdoption.set(item.aiTool, []);
      }
      toolAdoption.get(item.aiTool).push(item.adoptionPercentage);
    });
    
    // Find divisions with low adoption (good targets for experiments)
    const lowAdoptionDivisions = [];
    divisionAdoption.forEach((percentages, division) => {
      const avg = percentages.reduce((a, b) => a + b, 0) / percentages.length;
      if (avg < 50) {
        lowAdoptionDivisions.push(division);
      }
    });
    
    // Find underutilized tools
    const underutilizedTools = [];
    toolAdoption.forEach((percentages, tool) => {
      const avg = percentages.reduce((a, b) => a + b, 0) / percentages.length;
      if (avg < 30) {
        underutilizedTools.push(tool);
      }
    });
    
    // Get high impact use cases for potential experiments
    const highImpactUseCases = allUseCases
      .filter(uc => uc.status === 'in-progress' || uc.status === 'planned')
      .sort((a, b) => {
        const impactA = (a.costSavings || 0) + (a.revenueIncrease || 0);
        const impactB = (b.costSavings || 0) + (b.revenueIncrease || 0);
        return impactB - impactA;
      })
      .slice(0, 5);
    
    // Sample experiment recommendations
    const recommendations = [
      {
        id: 'exp-1',
        title: 'AI Code Review Assistant for Development Teams',
        division: lowAdoptionDivisions[0] || 'Technology',
        aiTool: 'Claude',
        estimatedImpact: 'High',
        status: 'proposed',
        description: 'Implement AI-powered code review to improve code quality and reduce review time by 40%'
      },
      {
        id: 'exp-2',
        title: 'Voice-to-Text Meeting Transcription',
        division: lowAdoptionDivisions[1] || 'Sales',
        aiTool: 'Whisper',
        estimatedImpact: 'Medium',
        status: 'active',
        description: 'Automatically transcribe and summarize sales calls to capture insights and action items'
      },
      {
        id: 'exp-3',
        title: 'Automated Contract Analysis',
        division: 'Legal',
        aiTool: 'GPT-4',
        estimatedImpact: 'Very High',
        status: 'proposed',
        description: 'Use AI to review contracts for risk factors and compliance issues, reducing review time by 60%'
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
    console.error('Error fetching experiments data:', error);
    return json({ error: 'Failed to fetch experiments data' }, { status: 500 });
  }
};