<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { useCasesStore, getUseCasesByTag, getAllTags, type UseCase } from '$lib/stores/useCases';
	import UseCaseCard from '$lib/components/UseCaseCard.svelte';
	import FilterBar from '$lib/components/FilterBar.svelte';
	import { ArrowLeft, Tag as TagIcon, Grid, List } from 'lucide-svelte';
	import Tooltip from '$lib/components/ui/Tooltip.svelte';

	let tag: string = '';
	let useCases: UseCase[] = [];
	let relatedTags: string[] = [];
	let loading = true;
	let viewMode: 'grid' | 'list' = 'grid';
	let sortBy: 'title' | 'division' | 'status' = 'title';
	let filterDivision: string = 'all';
	let filterStatus: string = 'all';

	onMount(async () => {
		// Load use cases
		await useCasesStore.loadUseCases();
		
		// Get tag from URL
		const unsubscribe = page.subscribe(($page) => {
			tag = decodeURIComponent($page.params.tag || '');
			
			// Get use cases with this tag
			useCases = getUseCasesByTag(tag);
			
			// Find related tags (tags that appear frequently with this tag)
			const tagCoOccurrence = new Map<string, number>();
			useCases.forEach(uc => {
				uc.tags.forEach(t => {
					if (t !== tag) {
						tagCoOccurrence.set(t, (tagCoOccurrence.get(t) || 0) + 1);
					}
				});
			});
			
			// Sort by co-occurrence and take top 10
			relatedTags = Array.from(tagCoOccurrence.entries())
				.sort((a, b) => b[1] - a[1])
				.slice(0, 10)
				.map(entry => entry[0]);
			
			loading = false;
		});

		return unsubscribe;
	});

	// Apply filters and sorting
	$: filteredUseCases = useCases
		.filter(uc => filterDivision === 'all' || uc.division === filterDivision)
		.filter(uc => filterStatus === 'all' || uc.status === filterStatus)
		.sort((a, b) => {
			switch (sortBy) {
				case 'division':
					return a.division.localeCompare(b.division);
				case 'status':
					return a.status.localeCompare(b.status);
				default:
					return a.title.localeCompare(b.title);
			}
		});

	// Get unique divisions and statuses from filtered use cases
	$: divisions = [...new Set(useCases.map(uc => uc.division))].sort();
	$: statuses = [...new Set(useCases.map(uc => uc.status))].sort();

	// Calculate stats
	$: productionCount = useCases.filter(uc => uc.status === 'production').length;
	$: divisionCount = divisions.length;
	$: avgTechStackSize = useCases.length > 0 
		? Math.round(useCases.reduce((sum, uc) => sum + (uc.techStackAi?.length || 0), 0) / useCases.length)
		: 0;
</script>

<svelte:head>
	<title>{tag} - AI Taxonomy | FOX AI Hub</title>
</svelte:head>

<div class="min-h-screen bg-gray-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
		<!-- Back Button -->
		<button
			on:click={() => goto(`${base}/use-cases`)}
			class="mb-6 inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
		>
			<ArrowLeft class="h-4 w-4" />
			<span>Back to Use Cases</span>
		</button>

		{#if loading}
			<div class="animate-pulse">
				<div class="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
				<div class="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
				<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
					<div class="h-48 bg-gray-200 rounded"></div>
					<div class="h-48 bg-gray-200 rounded"></div>
					<div class="h-48 bg-gray-200 rounded"></div>
				</div>
			</div>
		{:else if !tag || useCases.length === 0}
			<!-- Empty State -->
			<div class="text-center py-16">
				<TagIcon class="h-16 w-16 text-gray-400 mx-auto mb-4" />
				<h1 class="text-2xl font-bold text-gray-900 mb-2">No Use Cases Found</h1>
				<p class="text-gray-600 mb-8">No use cases are tagged with "{tag}"</p>
				<button
					on:click={() => goto(`${base}/use-cases`)}
					class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
				>
					Browse All Use Cases
				</button>
			</div>
		{:else}
			<!-- Tag Header -->
			<div class="mb-8">
				<div class="flex items-center gap-3 mb-4">
					<div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
						<TagIcon class="h-6 w-6 text-blue-600" />
					</div>
					<div>
						<h1 class="text-3xl font-bold text-gray-900">{tag}</h1>
						<p class="text-gray-600">AI Technology Taxonomy</p>
					</div>
				</div>

				<!-- Stats -->
				<div class="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
					<div class="bg-white rounded-lg p-4 border border-gray-200">
						<div class="text-2xl font-bold text-gray-900">{useCases.length}</div>
						<div class="text-sm text-gray-600">Total Use Cases</div>
					</div>
					<div class="bg-white rounded-lg p-4 border border-gray-200">
						<div class="text-2xl font-bold text-green-600">{productionCount}</div>
						<div class="text-sm text-gray-600">In Production</div>
					</div>
					<div class="bg-white rounded-lg p-4 border border-gray-200">
						<div class="text-2xl font-bold text-blue-600">{divisionCount}</div>
						<div class="text-sm text-gray-600">Divisions Using</div>
					</div>
					<div class="bg-white rounded-lg p-4 border border-gray-200">
						<div class="text-2xl font-bold text-purple-600">{avgTechStackSize}</div>
						<div class="text-sm text-gray-600">Avg Tech Stack Size</div>
					</div>
				</div>

				<!-- Related Tags -->
				{#if relatedTags.length > 0}
					<div class="bg-white rounded-lg p-4 border border-gray-200">
						<h3 class="text-sm font-semibold text-gray-700 mb-2">Frequently Used With:</h3>
						<div class="flex flex-wrap gap-2">
							{#each relatedTags as relatedTag}
								<a
									href="{base}/taxonomy/{encodeURIComponent(relatedTag)}"
									class="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
								>
									{relatedTag}
								</a>
							{/each}
						</div>
					</div>
				{/if}
			</div>

			<!-- Filter and Sort Controls -->
			<div class="mb-6 bg-white rounded-lg p-4 border border-gray-200">
				<div class="flex flex-wrap items-center gap-4">
					<!-- Division Filter -->
					<div class="flex items-center gap-2">
						<label for="division-filter" class="text-sm font-medium text-gray-700">Division:</label>
						<select
							id="division-filter"
							bind:value={filterDivision}
							class="px-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
						>
							<option value="all">All Divisions</option>
							{#each divisions as division}
								<option value={division}>{division}</option>
							{/each}
						</select>
					</div>

					<!-- Status Filter -->
					<div class="flex items-center gap-2">
						<label for="status-filter" class="text-sm font-medium text-gray-700">Status:</label>
						<select
							id="status-filter"
							bind:value={filterStatus}
							class="px-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
						>
							<option value="all">All Statuses</option>
							{#each statuses as status}
								<option value={status}>{status}</option>
							{/each}
						</select>
					</div>

					<!-- Sort By -->
					<div class="flex items-center gap-2">
						<label for="sort-by" class="text-sm font-medium text-gray-700">Sort by:</label>
						<select
							id="sort-by"
							bind:value={sortBy}
							class="px-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
						>
							<option value="title">Title</option>
							<option value="division">Division</option>
							<option value="status">Status</option>
						</select>
					</div>

					<!-- View Mode Toggle -->
					<div class="ml-auto flex items-center gap-1 bg-gray-100 rounded-lg p-1">
						<button
							on:click={() => viewMode = 'grid'}
							class="p-1.5 rounded {viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'} transition-colors"
							aria-label="Grid view"
						>
							<Grid class="h-4 w-4 text-gray-600" />
						</button>
						<button
							on:click={() => viewMode = 'list'}
							class="p-1.5 rounded {viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'} transition-colors"
							aria-label="List view"
						>
							<List class="h-4 w-4 text-gray-600" />
						</button>
					</div>
				</div>
			</div>

			<!-- Use Cases Grid/List -->
			<div class="{viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}">
				{#each filteredUseCases as useCase}
					<UseCaseCard {useCase} />
				{/each}
			</div>

			<!-- No Results -->
			{#if filteredUseCases.length === 0}
				<div class="text-center py-12">
					<p class="text-gray-600">No use cases match the selected filters.</p>
				</div>
			{/if}
		{/if}
	</div>
</div>