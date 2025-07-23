import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { db } from '$lib/db';
import { useCases } from '$lib/db/schema';
import { eq } from 'drizzle-orm';

export const GET: RequestHandler = async ({ params }) => {
  try {
    const { id } = params;
    
    const useCase = await db.select().from(useCases).where(eq(useCases.id, id)).limit(1);
    
    if (useCase.length === 0) {
      return json({ error: 'Use case not found' }, { status: 404 });
    }

    return json(useCase[0]);
  } catch (error) {
    console.error('Error fetching use case:', error);
    return json({ error: 'Failed to fetch use case' }, { status: 500 });
  }
};

export const PUT: RequestHandler = async ({ params, request }) => {
  try {
    const { id } = params;
    const data = await request.json();
    
    const updatedUseCase = await db.update(useCases)
      .set({ ...data, updatedAt: new Date().toISOString() })
      .where(eq(useCases.id, id))
      .returning();

    if (updatedUseCase.length === 0) {
      return json({ error: 'Use case not found' }, { status: 404 });
    }

    return json(updatedUseCase[0]);
  } catch (error) {
    console.error('Error updating use case:', error);
    return json({ error: 'Failed to update use case' }, { status: 500 });
  }
};

export const DELETE: RequestHandler = async ({ params }) => {
  try {
    const { id } = params;
    
    const deletedUseCase = await db.delete(useCases)
      .where(eq(useCases.id, id))
      .returning();

    if (deletedUseCase.length === 0) {
      return json({ error: 'Use case not found' }, { status: 404 });
    }

    return json({ message: 'Use case deleted successfully' });
  } catch (error) {
    console.error('Error deleting use case:', error);
    return json({ error: 'Failed to delete use case' }, { status: 500 });
  }
};