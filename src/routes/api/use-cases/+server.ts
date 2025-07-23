import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import useCasesData from '$lib/data/use-cases-db.json';

export const GET: RequestHandler = async ({ url }) => {
  try {
    const searchParams = url.searchParams;
    const division = searchParams.get('division');
    const search = searchParams.get('search');
    const status = searchParams.get('status');
    const tags = searchParams.get('tags')?.split(',').filter(Boolean);

    let results = [...useCasesData];

    // Apply filters
    if (division && division !== 'all') {
      results = results.filter(uc => 
        uc.division.toLowerCase().includes(division.toLowerCase())
      );
    }
    
    if (search) {
      const searchLower = search.toLowerCase();
      results = results.filter(uc => 
        uc.title.toLowerCase().includes(searchLower) ||
        uc.description.toLowerCase().includes(searchLower) ||
        uc.impact.toLowerCase().includes(searchLower)
      );
    }
    
    if (status && status !== 'all') {
      results = results.filter(uc => uc.status === status);
    }

    // Filter by tags if provided
    if (tags && tags.length > 0) {
      results = results.filter(useCase => {
        const useCaseTags = JSON.parse(useCase.tags);
        return tags.some(tag => useCaseTags.includes(tag));
      });
    }

    // Sort by updatedAt descending
    results.sort((a, b) => {
      const dateA = new Date(a.updatedAt || a.createdAt).getTime();
      const dateB = new Date(b.updatedAt || b.createdAt).getTime();
      return dateB - dateA;
    });

    return json(results);
  } catch (error) {
    console.error('Error fetching use cases:', error);
    return json({ error: 'Failed to fetch use cases' }, { status: 500 });
  }
};

export const POST: RequestHandler = async ({ request }) => {
  try {
    const data = await request.json();
    
    // For production, just return an error since we can't write to JSON files
    return json({ error: 'Creating use cases is not supported in production' }, { status: 501 });
  } catch (error) {
    console.error('Error creating use case:', error);
    return json({ error: 'Failed to create use case' }, { status: 500 });
  }
};