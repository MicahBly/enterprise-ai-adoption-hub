import { db } from './index';
import { useCases, adoptionData } from './schema';
import useCasesData from '../data/use-cases.json';

// Seed use cases from JSON data
export async function seedUseCases() {
  console.log('Seeding use cases...');
  
  for (const useCase of useCasesData) {
    await db.insert(useCases).values({
      id: useCase.id,
      title: useCase.title,
      description: useCase.description,
      division: useCase.division,
      subsidiary: (useCase as any).subsidiary || null,
      owner: useCase.owner,
      status: useCase.status,
      impact: useCase.impact,
      techStackAi: useCase.techStack.ai,
      techStackInfrastructure: useCase.techStack.infrastructure,
      techStackIntegration: useCase.techStack.integration,
      estimatedUsers: (useCase as any).estimatedUsers || null,
      costSavings: (useCase as any).costSavings || null,
      revenueIncrease: (useCase as any).revenueIncrease || null,
      timeToValue: (useCase as any).timeToValue || null,
      reusePotential: useCase.reusePotential,
      tags: useCase.tags,
      enablementSteps: useCase.enablementSteps,
    }).onConflictDoNothing();
  }
  
  console.log(`Seeded ${useCasesData.length} use cases`);
}

// Seed adoption matrix data
export async function seedAdoptionData() {
  console.log('Seeding adoption data...');
  
  const divisions = [
    'Fox News Media',
    'Fox Sports Media Group',
    'Fox Entertainment',
    'Fox Television Stations',
    'Tubi Media Group',
    'Other Assets'
  ];
  
  const aiTools = [
    'Claude',
    'GPT-4',
    'Whisper',
    'GitHub Copilot',
    'Midjourney',
    'Stable Diffusion',
    'Gemini',
    'Perplexity'
  ];
  
  // Sample adoption data based on the AdoptionMatrix component
  const adoptionMatrix = {
    'Fox News Media': {
      'Claude': 88, 'GPT-4': 82, 'Whisper': 95, 'GitHub Copilot': 45,
      'Midjourney': 60, 'Stable Diffusion': 35, 'Gemini': 20, 'Perplexity': 75
    },
    'Fox Sports Media Group': {
      'Claude': 70, 'GPT-4': 80, 'Whisper': 65, 'GitHub Copilot': 75,
      'Midjourney': 85, 'Stable Diffusion': 80, 'Gemini': 40, 'Perplexity': 50
    },
    'Fox Entertainment': {
      'Claude': 60, 'GPT-4': 65, 'Whisper': 55, 'GitHub Copilot': 30,
      'Midjourney': 92, 'Stable Diffusion': 88, 'Gemini': 35, 'Perplexity': 45
    },
    'Fox Television Stations': {
      'Claude': 65, 'GPT-4': 70, 'Whisper': 85, 'GitHub Copilot': 55,
      'Midjourney': 50, 'Stable Diffusion': 45, 'Gemini': 60, 'Perplexity': 65
    },
    'Tubi Media Group': {
      'Claude': 85, 'GPT-4': 75, 'Whisper': 60, 'GitHub Copilot': 90,
      'Midjourney': 55, 'Stable Diffusion': 50, 'Gemini': 45, 'Perplexity': 70
    },
    'Other Assets': {
      'Claude': 70, 'GPT-4': 68, 'Whisper': 55, 'GitHub Copilot': 75,
      'Midjourney': 45, 'Stable Diffusion': 40, 'Gemini': 50, 'Perplexity': 60
    }
  };
  
  for (const division of divisions) {
    for (const tool of aiTools) {
      const percentage = adoptionMatrix[division as keyof typeof adoptionMatrix]?.[tool as keyof typeof adoptionMatrix['Fox News Media']] || 0;
      
      await db.insert(adoptionData).values({
        id: `${division.toLowerCase().replace(/\s+/g, '-')}-${tool.toLowerCase().replace(/\s+/g, '-')}`,
        division,
        aiTool: tool,
        adoptionPercentage: percentage,
      }).onConflictDoNothing();
    }
  }
  
  console.log(`Seeded adoption data for ${divisions.length} divisions and ${aiTools.length} tools`);
}

// Run all seeders
export async function seedDatabase() {
  try {
    await seedUseCases();
    await seedAdoptionData();
    console.log('Database seeding completed successfully');
  } catch (error) {
    console.error('Database seeding failed:', error);
    throw error;
  }
}