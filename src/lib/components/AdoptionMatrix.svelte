<script>
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import Tooltip from '$lib/components/ui/Tooltip.svelte';

	// Accept matrixData as a prop
	export let matrixData = {
		categories: [],
		departments: [],
		data: []
	};

	let divisions = [];
	let aiTools = [];
	let adoptionData = {};
	let loading = true;
	let error = null;

	// Use prop data if provided, otherwise fetch from API
	$: if (matrixData && matrixData.categories.length > 0) {
		// Convert from parent format to our format
		aiTools = matrixData.categories;
		divisions = matrixData.departments;
		
		// Build adoptionData object from matrix data
		adoptionData = {};
		divisions.forEach((div, divIndex) => {
			adoptionData[div] = {};
			aiTools.forEach((tool, toolIndex) => {
				adoptionData[div][tool] = matrixData.data[toolIndex][divIndex];
			});
		});
		
		loading = false;
	}

	// Fetch adoption data from API if no prop data
	async function fetchAdoptionData() {
		if (matrixData && matrixData.categories.length > 0) {
			return; // Use prop data instead
		}
		
		try {
			loading = true;
			const response = await fetch(`${base}/api/adoption-matrix`);
			
			if (!response.ok) {
				throw new Error(`Failed to fetch adoption data: ${response.statusText}`);
			}
			
			const data = await response.json();
			adoptionData = data.matrix;
			divisions = data.divisions;
			aiTools = data.tools;
			loading = false;
		} catch (err) {
			error = err.message;
			loading = false;
		}
	}

	onMount(() => {
		fetchAdoptionData();
	});

	// Function to get color based on adoption percentage
	function getColorForPercentage(percentage) {
		if (percentage >= 80) return 'bg-green-700';
		if (percentage >= 60) return 'bg-green-600';
		if (percentage >= 40) return 'bg-yellow-600';
		if (percentage >= 20) return 'bg-orange-600';
		return 'bg-red-600';
	}

	// Function to get text color based on background
	function getTextColor(percentage) {
		// Always use white text for better contrast
		return 'text-white';
	}

	// Export data function
	function exportData() {
		const exportObject = {
			timestamp: new Date().toISOString(),
			divisions,
			aiTools,
			adoptionData,
			metadata: {
				title: 'FOX Corporation AI Tool Adoption Matrix',
				description: 'Percentage adoption of various AI tools across FOX Corporation divisions including News Media, Sports, Entertainment, Television Stations, Tubi, and Other Assets'
			}
		};
		
		console.log('Adoption Matrix Data Export:', exportObject);
		console.log('JSON Format:', JSON.stringify(exportObject, null, 2));
	}

	// Calculate averages
	function calculateDivisionAverage(division) {
		if (!adoptionData[division]) return 0;
		const values = Object.values(adoptionData[division]);
		return Math.round(values.reduce((sum, val) => sum + val, 0) / values.length);
	}

	function calculateToolAverage(tool) {
		if (!divisions.length || !adoptionData) return 0;
		const values = divisions.map(div => adoptionData[div]?.[tool] || 0);
		return Math.round(values.reduce((sum, val) => sum + val, 0) / values.length);
	}

	function calculateOverallAverage() {
		if (!divisions.length) return 0;
		return Math.round(divisions.reduce((sum, div) => sum + calculateDivisionAverage(div), 0) / divisions.length);
	}

	// Get division-specific tooltips
	function getDivisionTooltip(division) {
		const tooltips = {
			'Fox News Media': 'NLP & content generation leader',
			'Fox Sports Media Group': 'Computer vision excellence',
			'Fox Entertainment': 'Creative AI production',
			'Fox Television Stations': 'Local news AI innovation',
			'Tubi Media Group': 'Streaming AI platform',
			'Other Assets': 'Digital ventures & emerging media'
		};
		return tooltips[division] || `${division} AI initiatives`;
	}
</script>

<div class="w-full bg-white rounded-lg shadow-lg p-6">
	<div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
		<div>
			<h2 class="text-2xl font-bold text-gray-900">AI Tool Adoption Matrix</h2>
			<p class="text-gray-600 mt-1">Adoption percentages across FOX Corporation divisions</p>
		</div>
		<Tooltip content="Download executive-ready visualizations for board presentations" placement="bottom">
			<button
				on:click={exportData}
				class="mt-4 sm:mt-0 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
			>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
				</svg>
				Export Data
			</button>
		</Tooltip>
	</div>

	<!-- Color Legend -->
	<div class="mb-6 flex flex-wrap gap-4 text-sm">
		<Tooltip content="Market leaders: Full integration, ROI realized, scaling success" placement="bottom">
			<div class="flex items-center gap-2">
				<div class="w-4 h-4 bg-green-700 rounded"></div>
				<span class="text-gray-700">80-100% Adoption</span>
			</div>
		</Tooltip>
		<Tooltip content="Strong adoption: Positive ROI, expanding use cases" placement="bottom">
			<div class="flex items-center gap-2">
				<div class="w-4 h-4 bg-green-600 rounded"></div>
				<span class="text-gray-700">60-79% Adoption</span>
			</div>
		</Tooltip>
		<Tooltip content="Moderate progress: Early wins, needs strategic push" placement="bottom">
			<div class="flex items-center gap-2">
				<div class="w-4 h-4 bg-yellow-600 rounded"></div>
				<span class="text-gray-700">40-59% Adoption</span>
			</div>
		</Tooltip>
		<Tooltip content="Early stage: Pilot phase, investment opportunity" placement="bottom">
			<div class="flex items-center gap-2">
				<div class="w-4 h-4 bg-orange-600 rounded"></div>
				<span class="text-gray-700">20-39% Adoption</span>
			</div>
		</Tooltip>
		<Tooltip content="Lagging: High risk of competitive disadvantage" placement="bottom">
			<div class="flex items-center gap-2">
				<div class="w-4 h-4 bg-red-600 rounded"></div>
				<span class="text-gray-700">0-19% Adoption</span>
			</div>
		</Tooltip>
	</div>

	<!-- Loading State -->
	{#if loading}
		<div class="flex items-center justify-center py-12">
			<div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
			<span class="ml-3 text-gray-600">Loading adoption data...</span>
		</div>
	{:else if error}
		<!-- Error State -->
		<div class="flex items-center justify-center py-12">
			<div class="text-center">
				<div class="text-red-600 mb-2">⚠️ Error loading data</div>
				<div class="text-gray-600 text-sm">{error}</div>
				<button 
					on:click={fetchAdoptionData}
					class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
				>
					Retry
				</button>
			</div>
		</div>
	{:else}
		<!-- Scrollable Table Container -->
		<div class="overflow-x-auto -mx-6 px-6">
			<div class="inline-block min-w-full align-middle">
				<table class="min-w-full divide-y divide-gray-200">
				<thead class="bg-gray-50">
					<tr>
						<th class="sticky left-0 z-10 bg-gray-50 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Division
						</th>
						{#each aiTools as tool}
							<th class="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
								<Tooltip content="{tool} - Click to see all implementations" placement="bottom">
									<a href="{base}/taxonomy/{encodeURIComponent(tool)}" class="cursor-pointer hover:text-blue-600 transition-colors">
										{tool}
									</a>
								</Tooltip>
							</th>
						{/each}
						<th class="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
							Avg
						</th>
					</tr>
				</thead>
				<tbody class="bg-white divide-y divide-gray-200">
					{#each divisions as division}
						<tr class="hover:bg-gray-50 transition-colors duration-150">
							<td class="sticky left-0 z-10 bg-white px-4 py-3 text-sm font-medium text-gray-900 whitespace-nowrap">
								<Tooltip content="{getDivisionTooltip(division)}" placement="right">
									<span class="cursor-help">{division}</span>
								</Tooltip>
							</td>
							{#each aiTools as tool}
								{@const percentage = adoptionData[division]?.[tool] || 0}
								<td class="px-3 py-3 text-sm text-center">
									<div class="inline-flex items-center justify-center w-20 h-10 rounded-md {getColorForPercentage(percentage)} {getTextColor(percentage)} font-semibold text-sm shadow-sm">
										{percentage}%
									</div>
								</td>
							{/each}
							<td class="px-3 py-3 text-sm text-center">
								<Tooltip content="Benchmark performance - identify leaders and laggards" placement="left">
									<div class="inline-flex items-center justify-center w-20 h-10 rounded-md bg-gray-800 text-white font-semibold text-sm shadow-sm">
										{calculateDivisionAverage(division)}%
									</div>
								</Tooltip>
							</td>
						</tr>
					{/each}
					<!-- Tool Averages Row -->
					<tr class="bg-gray-50 font-medium">
						<td class="sticky left-0 z-10 bg-gray-50 px-4 py-3 text-sm text-gray-900">
							Average
						</td>
						{#each aiTools as tool}
							<td class="px-3 py-3 text-sm text-center">
								<div class="inline-flex items-center justify-center w-20 h-10 rounded-md bg-gray-800 text-white font-semibold text-sm shadow-sm">
									{calculateToolAverage(tool)}%
								</div>
							</td>
						{/each}
						<td class="px-3 py-3 text-sm text-center">
							<Tooltip content="FOX's AI maturity score - tracking toward 75% target by Q4" placement="left">
								<div class="inline-flex items-center justify-center w-20 h-10 rounded-md bg-gray-900 text-white font-bold text-sm shadow-sm">
									{calculateOverallAverage()}%
								</div>
							</Tooltip>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>

	<!-- Mobile Scroll Indicator -->
	<div class="mt-4 text-center text-sm text-gray-500 sm:hidden">
		<div class="flex items-center justify-center gap-1">
			<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
			</svg>
			<span>Scroll horizontally to see all tools</span>
			<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
			</svg>
		</div>
	</div>
	{/if}
</div>

<style>
	/* Custom scrollbar for better UX */
	.overflow-x-auto {
		scrollbar-width: thin;
		scrollbar-color: #cbd5e0 #f7fafc;
	}

	.overflow-x-auto::-webkit-scrollbar {
		height: 8px;
	}

	.overflow-x-auto::-webkit-scrollbar-track {
		background: #f7fafc;
		border-radius: 4px;
	}

	.overflow-x-auto::-webkit-scrollbar-thumb {
		background: #cbd5e0;
		border-radius: 4px;
	}

	.overflow-x-auto::-webkit-scrollbar-thumb:hover {
		background: #a0aec0;
	}

	/* Ensure sticky positioning works properly */
	.sticky {
		position: sticky;
	}

	/* Add shadow to sticky column on scroll */
	.overflow-x-auto:has(> div:not(:first-child)) .sticky {
		box-shadow: 2px 0 4px -2px rgba(0, 0, 0, 0.1);
	}
</style>