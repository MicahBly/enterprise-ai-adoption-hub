# Build stage
FROM node:20-alpine AS builder

# Install Python and build dependencies for better-sqlite3
RUN apk add --no-cache python3 make g++ 

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy application files
COPY . .

# Ensure database file exists
RUN touch fox-ai-hub.db

# Build the application
ENV NODE_ENV=production
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy built application
COPY --from=builder /app/build ./build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/fox-ai-hub.db* ./
COPY --from=builder /app/src/lib/db ./src/lib/db
COPY --from=builder /app/start.sh ./

# Make start script executable
RUN chmod +x start.sh

# Expose port
EXPOSE 3000

# Set environment variables
ENV HOST=0.0.0.0
ENV PORT=3000

# Start the application
CMD ["./start.sh"]