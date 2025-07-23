import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import { sqliteTable, text, real, integer } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";
import { existsSync } from "fs";
const useCases = sqliteTable("use_cases", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  division: text("division").notNull(),
  subsidiary: text("subsidiary"),
  owner: text("owner").notNull(),
  status: text("status").notNull(),
  // 'concept', 'development', 'pilot', 'production'
  impact: text("impact").notNull(),
  // Technical details
  techStackAi: text("tech_stack_ai", { mode: "json" }).$type().notNull(),
  techStackInfrastructure: text("tech_stack_infrastructure", { mode: "json" }).$type().notNull(),
  techStackIntegration: text("tech_stack_integration", { mode: "json" }).$type().notNull(),
  // Business metrics
  estimatedUsers: integer("estimated_users"),
  costSavings: real("cost_savings"),
  revenueIncrease: real("revenue_increase"),
  timeToValue: text("time_to_value"),
  reusePotential: text("reuse_potential").notNull(),
  // Metadata
  tags: text("tags", { mode: "json" }).$type().notNull(),
  enablementSteps: text("enablement_steps", { mode: "json" }).$type().notNull(),
  suggestedTechnologies: text("suggested_technologies", { mode: "json" }).$type(),
  // Timestamps
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").default(sql`CURRENT_TIMESTAMP`)
});
const chatInteractions = sqliteTable("chat_interactions", {
  id: text("id").primaryKey(),
  sessionId: text("session_id"),
  userMessage: text("user_message").notNull(),
  assistantMessage: text("assistant_message").notNull(),
  model: text("model").notNull(),
  tokensUsed: integer("tokens_used"),
  ragUsed: integer("rag_used", { mode: "boolean" }).default(false),
  // Whether RAG was used
  ragContent: text("rag_content"),
  // The retrieved content (truncated)
  responseTime: integer("response_time"),
  // in milliseconds
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`)
});
const adoptionData = sqliteTable("adoption_data", {
  id: text("id").primaryKey(),
  division: text("division").notNull(),
  aiTool: text("ai_tool").notNull(),
  adoptionPercentage: integer("adoption_percentage").notNull(),
  lastUpdated: text("last_updated").default(sql`CURRENT_TIMESTAMP`)
});
const schema = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  adoptionData,
  chatInteractions,
  useCases
}, Symbol.toStringTag, { value: "Module" }));
const dbPath = "fox-ai-hub.db";
const sqlite = new Database(dbPath);
sqlite.pragma("journal_mode = WAL");
const db = drizzle(sqlite, { schema });
const needsInit = !existsSync(dbPath) || sqlite.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name='use_cases'").get() === void 0;
function initializeDatabase() {
  try {
    migrate(db, { migrationsFolder: "./src/lib/db/migrations" });
    console.log("Database initialized successfully");
  } catch (error) {
    console.error("Database initialization failed:", error);
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
      console.log("Tables created successfully");
    } catch (tableError) {
      console.error("Failed to create tables:", tableError);
    }
  }
}
if (needsInit) {
  console.log("Database not found or empty, initializing...");
  initializeDatabase();
}
export {
  adoptionData as a,
  chatInteractions as c,
  db as d,
  useCases as u
};
