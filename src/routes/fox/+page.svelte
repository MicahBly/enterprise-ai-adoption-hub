<script lang="ts">
	import FilterBar from '$lib/components/FilterBar.svelte';
	import UseCaseGrid from '$lib/components/UseCaseGrid.svelte';
	import ChatSearch from '$lib/components/ChatSearch.svelte';
	import Tooltip from '$lib/components/ui/Tooltip.svelte';
	import { filteredUseCases, useCaseFilters, updateFilters, resetFilters, getAllDivisions, getAllTags, getAllStatuses, useCasesStore } from '$lib/stores/useCases';
	import { onMount } from 'svelte';
	import { fade, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	
	// View mode state
	let viewMode: 'grid' | 'list' = 'grid';
	
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
	
	// Toggle view mode
	function toggleViewMode() {
		viewMode = viewMode === 'grid' ? 'list' : 'grid';
	}
	
	// Stats for hero section
	$: totalUseCases = $filteredUseCases.length;
</script>

<svelte:head>
	<title>FOX AI Hub - AI Use Cases Dashboard</title>
	<meta name="description" content="Explore and discover AI use cases across FOX Corporation divisions" />
</svelte:head>

<div class="min-h-screen bg-gray-50">
	<!-- Hero Section -->
	<section class="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
		<div class="container mx-auto px-4 py-9 sm:py-12 lg:py-15">
			<div class="max-w-4xl mx-auto text-center">
				<Tooltip content="Your centralized platform for discovering, sharing, and scaling AI solutions across FOX Corporation - driving $50M+ in annual value" >
					<h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 cursor-help">
						FOX AI Innovation Hub
					</h1>
				</Tooltip>
				<p class="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
					Discover how AI is transforming FOX Corporation. Explore use cases across all divisions, 
					share insights, and accelerate innovation through collaboration.
				</p>
				
				<!-- Quick Stats -->
				<div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
					<Tooltip content="Live count of AI initiatives demonstrating FOX's commitment to innovation - each saving an average of $2M annually" >
						<div 
							class="bg-white/10 backdrop-blur-sm rounded-lg p-4 cursor-help"
							in:scale={{ duration: 600, delay: 200, start: 0.8, easing: quintOut }}
						>
							<div class="text-3xl font-bold mb-1">{totalUseCases}</div>
							<div class="text-sm text-blue-100">Active Use Cases</div>
						</div>
					</Tooltip>
					<Tooltip content="Cross-functional AI adoption showing enterprise-wide digital transformation" >
						<div 
							class="bg-white/10 backdrop-blur-sm rounded-lg p-4 cursor-help"
							in:scale={{ duration: 600, delay: 350, start: 0.8, easing: quintOut }}
						>
							<div class="text-3xl font-bold mb-1">{divisions.length}</div>
							<div class="text-sm text-blue-100">Divisions</div>
						</div>
					</Tooltip>
					<Tooltip content="Diverse AI portfolio from NLP to Computer Vision, showcasing technical breadth" >
						<div 
							class="bg-white/10 backdrop-blur-sm rounded-lg p-4 cursor-help"
							in:scale={{ duration: 600, delay: 500, start: 0.8, easing: quintOut }}
						>
							<div class="text-3xl font-bold mb-1">{tags.length}</div>
							<div class="text-sm text-blue-100">Technology Tags</div>
						</div>
					</Tooltip>
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
		<!-- AI Search Bar -->
		<div class="mb-8">
			<ChatSearch />
		</div>
		
		<!-- Filter Section -->
		<div class="mb-6">
			<div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
				<h2 class="text-2xl font-semibold text-gray-900">Browse Use Cases</h2>
				
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
		
	</main>
</div>

<style>
	/* Custom scrollbar for filter dropdowns */
	:global(.tags-list::-webkit-scrollbar) {
		width: 6px;
	}
	
	:global(.tags-list::-webkit-scrollbar-track) {
		background: #f3f4f6;
	}
	
	:global(.tags-list::-webkit-scrollbar-thumb) {
		background: #d1d5db;
		border-radius: 3px;
	}
	
	:global(.tags-list::-webkit-scrollbar-thumb:hover) {
		background: #9ca3af;
	}
</style>