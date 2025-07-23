<script lang="ts">
  import { DivisionOverview } from '$lib/components/ui/division-overview';
  import type { Division } from '$lib/data/types';
  import { divisionsData } from '$lib/data/divisions';

  let selectedDivision: Division | null = 'FOX Entertainment';

  const divisions = Object.keys(divisionsData) as Division[];
</script>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold mb-8">FOX Divisions Overview</h1>
  
  <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
    <!-- Division Selector -->
    <div class="lg:col-span-1">
      <h3 class="text-lg font-semibold mb-4">Select Division</h3>
      <div class="space-y-2">
        {#each divisions as division}
          <button
            class="w-full text-left px-4 py-3 rounded-lg transition-colors {selectedDivision === division ? 'bg-blue-100 text-blue-700 font-medium' : 'bg-gray-100 hover:bg-gray-200'}"
            on:click={() => selectedDivision = division}
          >
            {division}
          </button>
        {/each}
      </div>
    </div>
    
    <!-- Division Details -->
    <div class="lg:col-span-3">
      {#if selectedDivision}
        <DivisionOverview division={selectedDivision} />
      {:else}
        <div class="text-center py-12 text-gray-500">
          Select a division to view details
        </div>
      {/if}
    </div>
  </div>
</div>