#!/usr/bin/env node

// This script redirects wrangler deploy to pages deploy
const { execSync } = require('child_process');

console.log('Redirecting to Cloudflare Pages deployment...');

try {
  // First build the project
  console.log('Building project...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Then deploy to Pages
  console.log('Deploying to Cloudflare Pages...');
  execSync('npx wrangler pages deploy .svelte-kit/cloudflare --project-name=enterprise-ai-adoption-hub --compatibility-date=2025-01-23', { stdio: 'inherit' });
} catch (error) {
  console.error('Deployment failed:', error.message);
  process.exit(1);
}