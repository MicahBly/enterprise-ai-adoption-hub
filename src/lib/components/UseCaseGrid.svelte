<script lang="ts">
	import type { UseCase } from '$lib/stores/useCases';
	import UseCaseCard from './UseCaseCard.svelte';
	
	export let useCases: UseCase[] = [];
	export let viewMode: 'grid' | 'list' = 'grid';
	export let loading = false;
</script>

{#if loading}
	<div class="flex items-center justify-center min-h-64">
		<div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
	</div>
{:else if useCases.length === 0}
	<div class="flex flex-col items-center justify-center min-h-64 text-center">
		<svg class="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
		</svg>
		<h3 class="text-lg font-medium text-gray-900 mb-2">No use cases found</h3>
		<p class="text-sm text-gray-500 max-w-sm">
			Try adjusting your filters or search criteria to find what you're looking for.
		</p>
	</div>
{:else}
	<div class="use-case-grid" class:list-view={viewMode === 'list'}>
		{#each useCases as useCase, index (useCase.id)}
			<UseCaseCard {useCase} {index} />
		{/each}
	</div>
{/if}

<style>
	.use-case-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: 1.5rem;
		animation: fadeIn 0.3s ease-out;
	}
	
	.use-case-grid.list-view {
		grid-template-columns: 1fr;
		gap: 1rem;
	}
	
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	
	/* Responsive adjustments */
	@media (max-width: 640px) {
		.use-case-grid {
			grid-template-columns: 1fr;
			gap: 1rem;
		}
	}
	
	@media (min-width: 1280px) {
		.use-case-grid {
			grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
		}
	}
</style>