<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { useCasesStore, type UseCase } from '$lib/stores/useCases';
	import UseCaseCard from '$lib/components/UseCaseCard.svelte';
	import { ArrowLeft, TrendingUp, TrendingDown, Activity } from 'lucide-svelte';

	let level: string = '';
	let useCases: UseCase[] = [];
	let loading = true;
	let viewMode: 'grid' | 'list' = 'grid';
	let filterDivision: string = 'all';
	let divisions: string[] = [];

	// Define adoption level ranges
	const adoptionLevels = {
		'high': { min: 75, max: 100, label: 'High Adoption', color: 'green', icon: TrendingUp },
		'medium': { min: 50, max: 74, label: 'Medium Adoption', color: 'yellow', icon: Activity },
		'low': { min: 0, max: 49, label: 'Low Adoption', color: 'red', icon: TrendingDown }
	};

	onMount(async () => {
		// Load use cases
		await useCasesStore.loadUseCases();
		
		// Get level from URL
		const unsubscribe = page.subscribe(($page) => {
			level = $page.params.level || '';
			
			if (!adoptionLevels[level]) {
				// Invalid level, redirect to adoption matrix
				goto(`${base}/adoption-matrix`);
				return;
			}
			
			// Get all use cases and calculate adoption percentages
			useCasesStore.subscribe(allUseCases => {
				// Group by division and technology to calculate adoption
				const adoptionData = new Map();
				
				allUseCases.forEach(uc => {
					if (uc.techStackAi) {
						uc.techStackAi.forEach(tech => {
							const key = `${uc.division}|${tech}`;
							adoptionData.set(key, (adoptionData.get(key) || 0) + 1);
						});
					}
				});
				
				// Calculate total use cases per division
				const divisionCounts = new Map();
				allUseCases.forEach(uc => {
					divisionCounts.set(uc.division, (divisionCounts.get(uc.division) || 0) + 1);
				});
				
				// Filter use cases based on adoption level
				const levelConfig = adoptionLevels[level];
				const filteredUseCases: UseCase[] = [];
				
				allUseCases.forEach(uc => {
					// Calculate average adoption for this use case's technologies
					let totalAdoption = 0;
					let techCount = 0;
					
					if (uc.techStackAi) {
						uc.techStackAi.forEach(tech => {
							let divAdoption = 0;
							let divCount = 0;
							
							divisionCounts.forEach((count, division) => {
								const key = `${division}|${tech}`;
								const techInDivision = adoptionData.get(key) || 0;
								const adoptionPercent = (techInDivision / count) * 100;
								divAdoption += adoptionPercent;
								divCount++;
							});
							
							if (divCount > 0) {
								totalAdoption += divAdoption / divCount;
								techCount++;
							}
						});
					}
					
					// Check if this use case falls within the adoption level
					if (techCount > 0) {
						const avgAdoption = totalAdoption / techCount;
						if (avgAdoption >= levelConfig.min && avgAdoption <= levelConfig.max) {
							filteredUseCases.push(uc);
						}
					}
				});
				
				useCases = filteredUseCases;
				divisions = [...new Set(filteredUseCases.map(uc => uc.division))].sort();
				loading = false;
			});
		});

		return unsubscribe;
	});

	// Apply division filter
	$: filteredUseCases = filterDivision === 'all' 
		? useCases 
		: useCases.filter(uc => uc.division === filterDivision);

	// Get level configuration
	$: levelConfig = adoptionLevels[level] || adoptionLevels.low;
</script>

<svelte:head>
	<title>{levelConfig.label} - Adoption Analysis | FOX AI Hub</title>
</svelte:head>

<div class="min-h-screen bg-gray-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
		<!-- Back Button -->
		<button
			on:click={() => goto(`${base}/adoption-matrix`)}
			class="mb-6 inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
		>
			<ArrowLeft class="h-4 w-4" />
			<span>Back to Adoption Matrix</span>
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
		{:else}
			<!-- Header -->
			<div class="mb-8">
				<div class="flex items-center gap-3 mb-4">
					<div class="w-12 h-12 bg-{levelConfig.color}-100 rounded-lg flex items-center justify-center">
						<svelte:component this={levelConfig.icon} class="h-6 w-6 text-{levelConfig.color}-600" />
					</div>
					<div>
						<h1 class="text-3xl font-bold text-gray-900">{levelConfig.label} Use Cases</h1>
						<p class="text-gray-600">{levelConfig.min}% - {levelConfig.max}% technology adoption across divisions</p>
					</div>
				</div>

				<!-- Stats -->
				<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
					<div class="bg-white rounded-lg p-4 border border-gray-200">
						<div class="text-2xl font-bold text-{levelConfig.color}-600">{useCases.length}</div>
						<div class="text-sm text-gray-600">Total Use Cases</div>
					</div>
					<div class="bg-white rounded-lg p-4 border border-gray-200">
						<div class="text-2xl font-bold text-gray-900">{divisions.length}</div>
						<div class="text-sm text-gray-600">Divisions Represented</div>
					</div>
					<div class="bg-white rounded-lg p-4 border border-gray-200">
						<div class="text-2xl font-bold text-blue-600">
							{useCases.filter(uc => uc.status === 'production').length}
						</div>
						<div class="text-sm text-gray-600">In Production</div>
					</div>
				</div>

				<!-- Insights -->
				<div class="bg-white rounded-lg p-4 border border-gray-200 mb-6">
					<h3 class="font-semibold text-gray-900 mb-2">Key Insights</h3>
					{#if level === 'high'}
						<p class="text-sm text-gray-600">
							These use cases represent mature, widely-adopted AI technologies with proven ROI. 
							They serve as best practice examples for scaling AI across the organization.
						</p>
					{:else if level === 'medium'}
						<p class="text-sm text-gray-600">
							These implementations show promising adoption with room for growth. 
							Focus on removing barriers and sharing successes to increase adoption rates.
						</p>
					{:else}
						<p class="text-sm text-gray-600">
							Early-stage or specialized implementations that may benefit from additional support, 
							training, or strategic alignment to increase adoption.
						</p>
					{/if}
				</div>
			</div>

			<!-- Filter Controls -->
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

					<!-- View Mode Toggle -->
					<div class="ml-auto flex items-center gap-1 bg-gray-100 rounded-lg p-1">
						<button
							on:click={() => viewMode = 'grid'}
							class="p-1.5 rounded {viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'} transition-colors"
							aria-label="Grid view"
						>
							<svg class="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
							</svg>
						</button>
						<button
							on:click={() => viewMode = 'list'}
							class="p-1.5 rounded {viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'} transition-colors"
							aria-label="List view"
						>
							<svg class="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
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