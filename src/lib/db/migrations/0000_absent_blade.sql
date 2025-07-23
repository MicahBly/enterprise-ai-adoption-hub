CREATE TABLE `adoption_data` (
	`id` text PRIMARY KEY NOT NULL,
	`division` text NOT NULL,
	`ai_tool` text NOT NULL,
	`adoption_percentage` integer NOT NULL,
	`last_updated` text DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE `chat_interactions` (
	`id` text PRIMARY KEY NOT NULL,
	`session_id` text,
	`user_question` text NOT NULL,
	`ai_response` text NOT NULL,
	`response_time` integer,
	`tokens` integer,
	`created_at` text DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE `submissions` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`division` text NOT NULL,
	`subsidiary` text,
	`department` text NOT NULL,
	`submitter_name` text NOT NULL,
	`submitter_email` text NOT NULL,
	`submitter_role` text,
	`business_justification` text NOT NULL,
	`expected_outcomes` text NOT NULL,
	`target_users` text NOT NULL,
	`estimated_users` integer NOT NULL,
	`estimated_cost_savings` real,
	`estimated_revenue_increase` real,
	`time_to_value` text NOT NULL,
	`ai_technologies` text NOT NULL,
	`data_requirements` text,
	`integrations` text,
	`security_considerations` text,
	`priority` text NOT NULL,
	`target_completion_date` text,
	`business_owner` text NOT NULL,
	`technical_lead` text,
	`additional_stakeholders` text,
	`risks` text NOT NULL,
	`dependencies` text,
	`success_metrics` text NOT NULL,
	`comments` text,
	`tags` text NOT NULL,
	`status` text DEFAULT 'pending',
	`review_notes` text,
	`submitted_at` text DEFAULT CURRENT_TIMESTAMP,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE `use_cases` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`division` text NOT NULL,
	`subsidiary` text,
	`owner` text NOT NULL,
	`status` text NOT NULL,
	`impact` text NOT NULL,
	`tech_stack_ai` text NOT NULL,
	`tech_stack_infrastructure` text NOT NULL,
	`tech_stack_integration` text NOT NULL,
	`estimated_users` integer,
	`cost_savings` real,
	`revenue_increase` real,
	`time_to_value` text,
	`reuse_potential` text NOT NULL,
	`tags` text NOT NULL,
	`enablement_steps` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP
);
