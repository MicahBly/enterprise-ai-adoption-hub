import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import useCasesData from '$lib/data/use-cases-db.json';

export const GET: RequestHandler = async ({ params }) => {
  try {
    const useCase = useCasesData.find(uc => uc.id === params.id);
    
    if (!useCase) {
      return json({ error: 'Use case not found' }, { status: 404 });
    }
    
    return json(useCase);
  } catch (error) {
    console.error('Error fetching use case:', error);
    return json({ error: 'Failed to fetch use case' }, { status: 500 });
  }
};

export const PUT: RequestHandler = async ({ params, request }) => {
  try {
    // For production, just return an error since we can't write to JSON files
    return json({ error: 'Updating use cases is not supported in production' }, { status: 501 });
  } catch (error) {
    console.error('Error updating use case:', error);
    return json({ error: 'Failed to update use case' }, { status: 500 });
  }
};

export const DELETE: RequestHandler = async ({ params }) => {
  try {
    // For production, just return an error since we can't write to JSON files
    return json({ error: 'Deleting use cases is not supported in production' }, { status: 501 });
  } catch (error) {
    console.error('Error deleting use case:', error);
    return json({ error: 'Failed to delete use case' }, { status: 500 });
  }
};