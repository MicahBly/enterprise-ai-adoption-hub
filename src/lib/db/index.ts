import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import * as schema from './schema';
import { existsSync } from 'fs';
import path from 'path';

// Determine database path
const dbPath = 'fox-ai-hub.db';

// Create SQLite database connection
const sqlite = new Database(dbPath);
sqlite.pragma('journal_mode = WAL');

// Create Drizzle database instance
export const db = drizzle(sqlite, { schema });

// Check if database needs initialization
const needsInit = !existsSync(dbPath) || sqlite.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name='use_cases'").get() === undefined;

// Initialize database with tables and seed data
export function initializeDatabase() {
  try {
    // Run migrations (create tables)
    migrate(db, { migrationsFolder: './src/lib/db/migrations' });
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Database initialization failed:', error);
    // If migration fails in production, try to create tables directly
    try {
      const createUseCasesTable = `
        CREATE TABLE IF NOT EXISTS use_cases (
          id TEXT PRIMARY KEY,
          title TEXT NOT NULL,
          division TEXT NOT NULL,
          subsidiary TEXT,
          status TEXT NOT NULL,
          description TEXT NOT NULL,
          impact TEXT NOT NULL,
          tags TEXT NOT NULL,
          owner TEXT NOT NULL,
          tech_stack_ai TEXT NOT NULL,
          tech_stack_infrastructure TEXT NOT NULL,
          tech_stack_integration TEXT NOT NULL,
          estimated_users INTEGER,
          cost_savings INTEGER,
          revenue_increase INTEGER,
          time_to_value TEXT,
          reuse_potential TEXT,
          enablement_steps TEXT NOT NULL,
          suggested_technologies TEXT,
          created_at TEXT DEFAULT CURRENT_TIMESTAMP,
          updated_at TEXT DEFAULT CURRENT_TIMESTAMP
        )
      `;
      
      const createAdoptionDataTable = `
        CREATE TABLE IF NOT EXISTS adoption_data (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          division TEXT NOT NULL,
          ai_tool TEXT NOT NULL,
          adoption_percentage INTEGER NOT NULL,
          use_case_count INTEGER NOT NULL,
          created_at TEXT DEFAULT CURRENT_TIMESTAMP
        )
      `;
      
      const createChatInteractionsTable = `
        CREATE TABLE IF NOT EXISTS chat_interactions (
          id TEXT PRIMARY KEY,
          user_message TEXT NOT NULL,
          assistant_message TEXT NOT NULL,
          model TEXT NOT NULL,
          tokens_used INTEGER NOT NULL,
          rag_used INTEGER DEFAULT 0,
          rag_content TEXT,
          created_at TEXT DEFAULT CURRENT_TIMESTAMP
        )
      `;
      
      sqlite.exec(createUseCasesTable);
      sqlite.exec(createAdoptionDataTable);
      sqlite.exec(createChatInteractionsTable);
      
      console.log('Tables created successfully');
    } catch (tableError) {
      console.error('Failed to create tables:', tableError);
    }
  }
}

// Auto-initialize if needed
if (needsInit) {
  console.log('Database not found or empty, initializing...');
  initializeDatabase();
}

// Close database connection
export function closeDatabase() {
  sqlite.close();
}

export { schema };