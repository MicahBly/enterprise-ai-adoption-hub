<script lang="ts">
	import FilterBar from '$lib/components/FilterBar.svelte';
	import UseCaseGrid from '$lib/components/UseCaseGrid.svelte';
	import { filteredUseCases, useCaseFilters, updateFilters, resetFilters, getAllDivisions, getAllTags, getAllStatuses, useCasesStore } from '$lib/stores/useCases';
	import { onMount } from 'svelte';
	
	// View mode state
	let viewMode: 'grid' | 'list' = 'list';
	
	// Get filter options
	let divisions: string[] = [];
	let tags: string[] = [];
	let statuses: string[] = [];
	
	// Current filter values
	let selectedDivision = '';
	let selectedTags: string[] = [];
	let selectedStatus = '';
	let searchQuery = '';
	
	// Loading state
	let loading = true;
	
	onMount(async () => {
		try {
			// Load use cases from database
			await useCasesStore.loadUseCases();
			
			// Get filter options after use cases are loaded
			divisions = getAllDivisions();
			tags = getAllTags();
			statuses = getAllStatuses();
			
			// Subscribe to filter changes
			const unsubscribe = useCaseFilters.subscribe(filters => {
				selectedDivision = filters.division === 'all' ? '' : filters.division;
				selectedTags = filters.tags;
				selectedStatus = filters.status === 'all' ? '' : filters.status;
				searchQuery = filters.search;
			});
			
			loading = false;
			
			return unsubscribe;
		} catch (error) {
			console.error('Error loading page:', error);
			loading = false;
		}
	});
	
	// Handle filter changes from FilterBar
	function handleFilterChange(event: CustomEvent) {
		const { type, value } = event.detail;
		
		switch (type) {
			case 'division':
				updateFilters({ division: value || 'all' });
				break;
			case 'tags':
				updateFilters({ tags: value });
				break;
			case 'status':
				updateFilters({ status: value || 'all' });
				break;
			case 'search':
				updateFilters({ search: value });
				break;
		}
	}
	
	// Handle clear filters
	function handleClearFilters() {
		resetFilters();
	}
	
	// Stats for page
	$: totalUseCases = $filteredUseCases.length;
	$: productionCount = $filteredUseCases.filter(uc => uc.status === 'production').length;
	$: developmentCount = $filteredUseCases.filter(uc => uc.status === 'development').length;
	$: pilotCount = $filteredUseCases.filter(uc => uc.status === 'pilot').length;
</script>

<svelte:head>
	<title>Use Cases - FOX AI Hub</title>
	<meta name="description" content="Browse all AI use cases across FOX Corporation divisions" />
</svelte:head>

<div class="min-h-screen bg-gray-50">
	<!-- Hero Section -->
	<section class="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
		<div class="container mx-auto px-4 py-6 sm:py-9 lg:py-12">
			<div class="max-w-4xl mx-auto text-center">
				<h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
					AI Use Cases
				</h1>
				<p class="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
					Explore real AI implementations across FOX Corporation. From the OneFOX advertising platform to MediaCloud infrastructure, 
					discover how we're leveraging artificial intelligence to transform media and entertainment.
				</p>
				
				<!-- Stats -->
				<div class="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
					<div class="bg-white/10 backdrop-blur-sm rounded-lg p-4">
						<div class="text-2xl font-bold">{totalUseCases}</div>
						<div class="text-sm text-blue-100">Total Use Cases</div>
					</div>
					<div class="bg-white/10 backdrop-blur-sm rounded-lg p-4">
						<div class="text-2xl font-bold">{productionCount}</div>
						<div class="text-sm text-blue-100">In Production</div>
					</div>
					<div class="bg-white/10 backdrop-blur-sm rounded-lg p-4">
						<div class="text-2xl font-bold">{developmentCount}</div>
						<div class="text-sm text-blue-100">In Development</div>
					</div>
					<div class="bg-white/10 backdrop-blur-sm rounded-lg p-4">
						<div class="text-2xl font-bold">{pilotCount}</div>
						<div class="text-sm text-blue-100">In Pilot</div>
					</div>
				</div>
			</div>
		</div>
		
		<!-- Wave decoration -->
		<div class="relative">
			<svg class="absolute bottom-0 w-full h-8 sm:h-12 lg:h-16" preserveAspectRatio="none" viewBox="0 0 1440 64">
				<path fill="#f9fafb" d="M0,32L48,37.3C96,43,192,53,288,53.3C384,53,480,43,576,37.3C672,32,768,32,864,37.3C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,64L1392,64C1344,64,1248,64,1152,64C1056,64,960,64,864,64C768,64,672,64,576,64C480,64,384,64,288,64C192,64,96,64,48,64L0,64Z"></path>
			</svg>
		</div>
	</section>
	
	<!-- Main Content -->
	<main class="container mx-auto px-4 py-8">
		<!-- Filter Section -->
		<div class="mb-6">
			<div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
				<h2 class="text-xl font-semibold text-gray-900">Filter & Search</h2>
				
				<!-- View Toggle -->
				<div class="flex items-center gap-2 bg-white rounded-lg border border-gray-200 p-1">
					<button
						on:click={() => viewMode = 'grid'}
						class="px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
						class:bg-blue-600={viewMode === 'grid'}
						class:text-white={viewMode === 'grid'}
						class:text-gray-600={viewMode !== 'grid'}
						class:hover:text-gray-900={viewMode !== 'grid'}
						aria-label="Grid view"
					>
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
						</svg>
					</button>
					<button
						on:click={() => viewMode = 'list'}
						class="px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
						class:bg-blue-600={viewMode === 'list'}
						class:text-white={viewMode === 'list'}
						class:text-gray-600={viewMode !== 'list'}
						class:hover:text-gray-900={viewMode !== 'list'}
						aria-label="List view"
					>
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
				</div>
			</div>
			
			<!-- Filter Bar -->
			<FilterBar
				{divisions}
				{statuses}
				availableTags={tags}
				bind:selectedDivision
				bind:selectedTags
				bind:selectedStatus
				bind:searchQuery
				on:filterChange={handleFilterChange}
				on:clearFilters={handleClearFilters}
			/>
		</div>
		
		<!-- Results Count -->
		{#if !loading}
			<div class="mb-4 text-sm text-gray-600">
				Showing <span class="font-medium text-gray-900">{totalUseCases}</span> use case{totalUseCases !== 1 ? 's' : ''}
				{#if selectedDivision || selectedTags.length > 0 || selectedStatus || searchQuery}
					<span class="text-gray-500">(filtered)</span>
				{/if}
			</div>
		{/if}
		
		<!-- Use Case Grid -->
		<UseCaseGrid useCases={$filteredUseCases} {viewMode} {loading} />
		
		<!-- Empty State -->
		{#if !loading && totalUseCases === 0}
			<div class="text-center py-12">
				<svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
				<h3 class="mt-4 text-lg font-medium text-gray-900">No use cases found</h3>
				<p class="mt-2 text-gray-600">Try adjusting your filters or search query.</p>
				<button
					on:click={handleClearFilters}
					class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
				>
					Clear all filters
				</button>
			</div>
		{/if}
		
		<!-- Navigation Links -->
		<div class="mt-12 pt-8 border-t">
			<div class="flex justify-center">
				<a
					href="/"
					class="group p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
				>
					<div class="flex items-center gap-4">
						<div class="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
							<svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
							</svg>
						</div>
						<div>
							<h3 class="font-semibold text-gray-900">Back to Dashboard</h3>
							<p class="text-sm text-gray-600 mt-1">Return to the main AI Hub dashboard</p>
						</div>
					</div>
				</a>
			</div>
		</div>
	</main>
</div>