#!/bin/sh

# Ensure database directory exists
mkdir -p data

# Check if database exists
if [ ! -f "fox-ai-hub.db" ]; then
  echo "Database not found, creating..."
  touch fox-ai-hub.db
fi

# Start the application
node build