<script lang="ts">
  import type { Division } from '$lib/data/types';
  import { divisionsData } from '$lib/data/divisions';
  import Card from './ui/Card.svelte';
  import CardHeader from './ui/CardHeader.svelte';
  import CardTitle from './ui/CardTitle.svelte';
  import CardContent from './ui/CardContent.svelte';
  import Tooltip from './ui/Tooltip.svelte';

  export let division: Division;

  $: divisionInfo = divisionsData[division];
  $: adoptionStats = divisionInfo?.adoptionStats;
  $: successStories = divisionInfo?.successStories || [];
</script>

{#if divisionInfo}
  <div class="division-overview">
    <!-- Header Section -->
    <div class="header-section">
      <h2 class="division-name">{divisionInfo.name}</h2>
      <p class="core-focus">{divisionInfo.coreFocus}</p>
      <p class="description">{divisionInfo.description}</p>
    </div>

    <!-- Subsidiaries Section -->
    <Card class="mb-6">
      <CardHeader>
        <CardTitle>Subsidiaries & Brands</CardTitle>
      </CardHeader>
      <CardContent>
        <div class="subsidiaries-grid">
          {#each divisionInfo.subsidiaries as subsidiary}
            <Tooltip content={subsidiary.description}>
              <div class="subsidiary-item">
                <span class="subsidiary-icon">{subsidiary.icon}</span>
                <span class="subsidiary-name">{subsidiary.name}</span>
              </div>
            </Tooltip>
          {/each}
        </div>
      </CardContent>
    </Card>

    <!-- AI Opportunities Section -->
    <Card class="mb-6">
      <CardHeader>
        <CardTitle>Key AI Opportunities</CardTitle>
      </CardHeader>
      <CardContent>
        <ul class="opportunities-list">
          {#each divisionInfo.aiOpportunities as opportunity}
            <li class="opportunity-item">
              <svg class="opportunity-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1L10.163 5.379L15 6.123L11.5 9.527L12.326 14.35L8 12.079L3.674 14.35L4.5 9.527L1 6.123L5.837 5.379L8 1Z" fill="currentColor"/>
              </svg>
              {opportunity}
            </li>
          {/each}
        </ul>
      </CardContent>
    </Card>

    <!-- Adoption Stats Section -->
    {#if adoptionStats}
      <Card class="mb-6">
        <CardHeader>
          <CardTitle>Current Adoption Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="stats-grid">
            <div class="stat-item">
              <div class="stat-value">{adoptionStats.totalUseCases}</div>
              <div class="stat-label">Total Use Cases</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">{adoptionStats.activeProjects}</div>
              <div class="stat-label">Active Projects</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">{adoptionStats.completedProjects}</div>
              <div class="stat-label">Completed Projects</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">{adoptionStats.successRate}%</div>
              <div class="stat-label">Success Rate</div>
            </div>
          </div>
        </CardContent>
      </Card>
    {/if}

    <!-- Success Stories Section -->
    {#if successStories.length > 0}
      <Card>
        <CardHeader>
          <CardTitle>Division Success Stories</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="success-stories">
            {#each successStories as story}
              <div class="success-story">
                <h4 class="story-title">{story.title}</h4>
                <p class="story-impact">{story.impact}</p>
                <div class="story-tech">
                  <svg class="tech-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 2C4.686 2 2 4.686 2 8s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 10.5c-2.485 0-4.5-2.015-4.5-4.5S5.515 3.5 8 3.5s4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5z" fill="currentColor"/>
                    <path d="M8 5.5c-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5S9.378 5.5 8 5.5z" fill="currentColor"/>
                  </svg>
                  <span class="tech-label">Technology:</span>
                  <span class="tech-value">{story.technology}</span>
                </div>
              </div>
            {/each}
          </div>
        </CardContent>
      </Card>
    {/if}
  </div>
{:else}
  <div class="no-division">
    <p>Please select a division to view details.</p>
  </div>
{/if}

<style>
  .division-overview {
    max-width: 1000px;
    margin: 0 auto;
  }

  .header-section {
    margin-bottom: 2rem;
  }

  .division-name {
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: 0.5rem;
  }

  .core-focus {
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--color-primary);
    margin-bottom: 1rem;
  }

  .description {
    font-size: 1rem;
    color: var(--color-text-secondary);
    line-height: 1.6;
  }

  .subsidiaries-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }

  .subsidiary-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    background: var(--color-bg-secondary);
    border-radius: 0.5rem;
    transition: all 0.2s ease;
    cursor: help;
  }

  .subsidiary-item:hover {
    background: var(--color-bg-hover);
    transform: translateY(-2px);
  }

  .subsidiary-icon {
    font-size: 1.5rem;
  }

  .subsidiary-name {
    font-weight: 500;
    color: var(--color-text-primary);
  }

  .opportunities-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .opportunity-item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 0.75rem 0;
    border-bottom: 1px solid var(--color-border);
  }

  .opportunity-item:last-child {
    border-bottom: none;
  }

  .opportunity-icon {
    color: var(--color-primary);
    flex-shrink: 0;
    margin-top: 0.125rem;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
    text-align: center;
  }

  .stat-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .stat-value {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--color-primary);
  }

  .stat-label {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .success-stories {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .success-story {
    padding: 1.5rem;
    background: var(--color-bg-secondary);
    border-radius: 0.5rem;
    border-left: 4px solid var(--color-primary);
  }

  .story-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: 0.5rem;
  }

  .story-impact {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    margin-bottom: 1rem;
    line-height: 1.5;
  }

  .story-tech {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
  }

  .tech-icon {
    color: var(--color-secondary);
  }

  .tech-label {
    color: var(--color-text-secondary);
  }

  .tech-value {
    color: var(--color-text-primary);
    font-weight: 500;
  }

  .no-division {
    text-align: center;
    padding: 4rem 2rem;
    color: var(--color-text-secondary);
  }

  /* Dark mode adjustments */
  :global(.dark) .subsidiary-item {
    background: rgba(255, 255, 255, 0.05);
  }

  :global(.dark) .subsidiary-item:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  :global(.dark) .success-story {
    background: rgba(255, 255, 255, 0.05);
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .division-name {
      font-size: 1.5rem;
    }

    .core-focus {
      font-size: 1.125rem;
    }

    .subsidiaries-grid {
      grid-template-columns: 1fr;
    }

    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }

    .stat-value {
      font-size: 2rem;
    }
  }
</style>