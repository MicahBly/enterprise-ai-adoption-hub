-- Add suggestedTechnologies column to use_cases table
ALTER TABLE use_cases ADD COLUMN suggested_technologies TEXT;

-- Update the column to have a default empty array
UPDATE use_cases SET suggested_technologies = '[]' WHERE suggested_technologies IS NULL;