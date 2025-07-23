import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

// Use cases table
export const useCases = sqliteTable('use_cases', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  division: text('division').notNull(),
  subsidiary: text('subsidiary'),
  owner: text('owner').notNull(),
  status: text('status').notNull(), // 'concept', 'development', 'pilot', 'production'
  impact: text('impact').notNull(),
  
  // Technical details
  techStackAi: text('tech_stack_ai', { mode: 'json' }).$type<string[]>().notNull(),
  techStackInfrastructure: text('tech_stack_infrastructure', { mode: 'json' }).$type<string[]>().notNull(),
  techStackIntegration: text('tech_stack_integration', { mode: 'json' }).$type<string[]>().notNull(),
  
  // Business metrics
  estimatedUsers: integer('estimated_users'),
  costSavings: real('cost_savings'),
  revenueIncrease: real('revenue_increase'),
  timeToValue: text('time_to_value'),
  reusePotential: text('reuse_potential').notNull(),
  
  // Metadata
  tags: text('tags', { mode: 'json' }).$type<string[]>().notNull(),
  enablementSteps: text('enablement_steps', { mode: 'json' }).$type<string[]>().notNull(),
  suggestedTechnologies: text('suggested_technologies', { mode: 'json' }).$type<string[]>(),
  
  // Timestamps
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`),
});

// Chat interactions table (for analytics)
export const chatInteractions = sqliteTable('chat_interactions', {
  id: text('id').primaryKey(),
  sessionId: text('session_id'),
  userMessage: text('user_message').notNull(),
  assistantMessage: text('assistant_message').notNull(),
  model: text('model').notNull(),
  tokensUsed: integer('tokens_used'),
  ragUsed: integer('rag_used', { mode: 'boolean' }).default(false), // Whether RAG was used
  ragContent: text('rag_content'), // The retrieved content (truncated)
  responseTime: integer('response_time'), // in milliseconds
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
});

// AI tool adoption matrix data
export const adoptionData = sqliteTable('adoption_data', {
  id: text('id').primaryKey(),
  division: text('division').notNull(),
  aiTool: text('ai_tool').notNull(),
  adoptionPercentage: integer('adoption_percentage').notNull(),
  lastUpdated: text('last_updated').default(sql`CURRENT_TIMESTAMP`),
});

export type UseCase = typeof useCases.$inferSelect;
export type NewUseCase = typeof useCases.$inferInsert;
export type ChatInteraction = typeof chatInteractions.$inferSelect;
export type NewChatInteraction = typeof chatInteractions.$inferInsert;
export type AdoptionData = typeof adoptionData.$inferSelect;
export type NewAdoptionData = typeof adoptionData.$inferInsert;