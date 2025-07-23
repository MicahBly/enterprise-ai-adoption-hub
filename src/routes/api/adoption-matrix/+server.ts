import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { db } from '$lib/db';
import { useCases } from '$lib/db/schema';

export const GET: RequestHandler = async () => {
  try {
    // Get all use cases from database
    const allUseCases = await db.select().from(useCases);
    
    if (allUseCases.length === 0) {
      return json({ error: 'No use cases found' }, { status: 404 });
    }
    
    // AI tools we want to track (from adoption matrix)
    const trackedTools = [
      "Claude", "GPT-4", "Whisper", "GitHub Copilot", 
      "Midjourney", "Stable Diffusion", "Gemini", "Perplexity"
    ];
    
    // Get unique divisions
    const divisions = [...new Set(allUseCases.map(uc => uc.division))].sort();
    
    // Build adoption matrix
    const matrix: Record<string, Record<string, number>> = {};
    
    divisions.forEach(division => {
      matrix[division] = {};
      
      trackedTools.forEach(tool => {
        // Get use cases for this division
        const divisionUseCases = allUseCases.filter(uc => uc.division === division);
        
        if (divisionUseCases.length === 0) {
          matrix[division][tool] = 0;
          return;
        }
        
        // Count how many use cases use this tool (fuzzy match)
        const useCasesWithTool = divisionUseCases.filter(uc => {
          try {
            // Handle both JSON strings and arrays
            let techStack = [];
            if (uc.techStackAi) {
              if (typeof uc.techStackAi === 'string') {
                techStack = JSON.parse(uc.techStackAi);
              } else if (Array.isArray(uc.techStackAi)) {
                techStack = uc.techStackAi;
              }
            }
            
            return techStack.some((tech: string) => 
              tech.toLowerCase().includes(tool.toLowerCase()) || 
              tool.toLowerCase().includes(tech.toLowerCase())
            );
          } catch (error) {
            console.error(`Error parsing techStackAi for use case ${uc.id}:`, error);
            return false;
          }
        });
        
        // Calculate percentage
        const percentage = Math.round((useCasesWithTool.length / divisionUseCases.length) * 100);
        matrix[division][tool] = percentage;
      });
    });
    
    return json({
      matrix,
      divisions,
      tools: trackedTools
    });
  } catch (error) {
    console.error('Error calculating adoption data:', error);
    return json({ error: 'Failed to calculate adoption data' }, { status: 500 });
  }
};

export const PUT: RequestHandler = async ({ request }) => {
  try {
    const { division, aiTool, adoptionPercentage } = await request.json();
    
    const id = `${division.toLowerCase().replace(/\s+/g, '-')}-${aiTool.toLowerCase().replace(/\s+/g, '-')}`;
    
    const updatedData = await db.insert(adoptionData).values({
      id,
      division,
      aiTool,
      adoptionPercentage,
      lastUpdated: new Date().toISOString(),
    }).onConflictDoUpdate({
      target: adoptionData.id,
      set: {
        adoptionPercentage,
        lastUpdated: new Date().toISOString(),
      }
    }).returning();
    
    return json(updatedData[0]);
  } catch (error) {
    console.error('Error updating adoption data:', error);
    return json({ error: 'Failed to update adoption data' }, { status: 500 });
  }
};