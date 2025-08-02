<script>
	import AdoptionMatrix from '$lib/components/AdoptionMatrix.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Download, FileSpreadsheet } from 'lucide-svelte';
	import { useCasesStore, getAllDivisions, getAllTags, getUseCaseStats } from '$lib/stores/useCases';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { fade, slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	
	let matrixData = {
		categories: [],
		departments: [],
		data: []
	};
	
	let insights = {
		topTechnologies: [],
		topDivisions: [],
		lowAdoptionAreas: [],
		averageTechPerDivision: 0,
		mostVersatileTech: '',
		mostSpecializedDivision: ''
	};
	
	onMount(async () => {
		// Load adoption matrix data from API
		try {
			const response = await fetch(`${base}/api/adoption-matrix`);
			const apiData = await response.json();
			
			if (apiData.matrix && apiData.divisions && apiData.tools) {
				// Update matrix data for heatmap
				const departments = apiData.divisions;
				const categories = apiData.tools;
				const data = categories.map(tool => 
					departments.map(dept => apiData.matrix[dept]?.[tool] || 0)
				);
				
				matrixData = { categories, departments, data };
				
				// Calculate summary statistics from matrix data
				const allPercentages = data.flat();
				highAdoption = allPercentages.filter(p => p >= 75).length;
				mediumAdoption = allPercentages.filter(p => p >= 35 && p < 75).length;
				lowAdoption = allPercentages.filter(p => p < 35).length;
				totalTools = categories.length * departments.length;
				averageAdoption = Math.round(allPercentages.reduce((a, b) => a + b, 0) / (totalTools || 1));
			}
		} catch (error) {
			console.error('Error loading adoption matrix data:', error);
		}
		
		// Also load use cases data for insights
		await useCasesStore.loadUseCases();
		
		// Get all use cases for insights calculation
		const unsubscribe = useCasesStore.subscribe(useCases => {
			if (useCases.length === 0) return;
			
			allUseCases = useCases; // Store for insights
			
			// Generate insights using use case data and API matrix data
			if (matrixData.categories.length > 0) {
				generateInsights(useCases, matrixData.departments, matrixData);
			}
		});
		
		return unsubscribe;
	});
	
	function generateInsights(useCases, divisions, matrixData) {
		if (!matrixData.data || matrixData.data.length === 0) return;
		
		// Calculate technology scores from matrix data
		const techScores = matrixData.categories.map((tech, techIndex) => {
			const adoptionRates = matrixData.data[techIndex] || [];
			const avgAdoption = adoptionRates.reduce((a, b) => a + b, 0) / (adoptionRates.length || 1);
			const usageCount = useCases.filter(uc => 
				uc.techStackAi && uc.techStackAi.some(t => 
					t.toLowerCase().includes(tech.toLowerCase()) || 
					tech.toLowerCase().includes(t.toLowerCase())
				)
			).length;
			
			return { tech, avgAdoption, adoptionRates, usageCount };
		}).sort((a, b) => b.avgAdoption - a.avgAdoption);
		
		// Top technologies
		insights.topTechnologies = techScores.slice(0, 3).map(item => 
			`${item.tech} (${Math.round(item.avgAdoption)}% avg adoption, ${item.usageCount} use cases)`
		);
		
		// Find divisions with highest AI adoption
		const divisionScores = divisions.map((div, divIndex) => {
			const scores = matrixData.data.map(techData => techData[divIndex] || 0);
			const avgScore = scores.reduce((a, b) => a + b, 0) / (scores.length || 1);
			return { division: div, avgScore };
		}).sort((a, b) => b.avgScore - a.avgScore);
		
		insights.topDivisions = divisionScores.slice(0, 3).map(d => 
			`${d.division} (${Math.round(d.avgScore)}% avg tech adoption)`
		);
		
		// Find low adoption areas
		const lowAdoption = [];
		techScores.forEach(item => {
			divisions.forEach((div, divIndex) => {
				const adoptionRate = item.adoptionRates[divIndex] || 0;
				if (adoptionRate < 30 && item.avgAdoption > 40) {
					lowAdoption.push(`${item.tech} in ${div} (only ${adoptionRate}% vs ${Math.round(item.avgAdoption)}% avg)`);
				}
			});
		});
		insights.lowAdoptionAreas = lowAdoption.slice(0, 3);
		
		// Calculate average tech per division from use cases
		const techCounts = divisions.map(div => {
			const divUseCases = useCases.filter(uc => uc.division === div);
			const allTechsInDiv = new Set();
			divUseCases.forEach(uc => {
				if (uc.techStackAi) {
					uc.techStackAi.forEach(tech => allTechsInDiv.add(tech));
				}
			});
			return allTechsInDiv.size;
		});
		insights.averageTechPerDivision = techCounts.length > 0 ? 
			Math.round(techCounts.reduce((a, b) => a + b, 0) / techCounts.length) : 0;
		
		// Most versatile tech
		const techDivisionCount = techScores.map(item => {
			const divisionsUsingTech = item.adoptionRates.filter(rate => rate > 0).length;
			return { tech: item.tech, count: divisionsUsingTech, avgAdoption: item.avgAdoption };
		}).sort((a, b) => {
			if (a.count !== b.count) return b.count - a.count;
			return b.avgAdoption - a.avgAdoption;
		});
		
		if (techDivisionCount.length > 0) {
			insights.mostVersatileTech = `${techDivisionCount[0].tech} (used in ${techDivisionCount[0].count} divisions)`;
		}
		
		// Most specialized division
		if (divisionScores.length > 0) {
			insights.mostSpecializedDivision = `${divisionScores[0].division} (${Math.round(divisionScores[0].avgScore)}% avg adoption)`;
		}
	}
	
	// Store use cases for insights
	let allUseCases = [];
	let highAdoption = 0;
	let mediumAdoption = 0;
	let lowAdoption = 0;
	let totalTools = 0;
	let averageAdoption = 0;
	
	// Export functions
	function exportToCSV() {
		let csv = 'Department,' + matrixData.categories.join(',') + '\n';
		matrixData.departments.forEach((dept, i) => {
			const row = [dept, ...matrixData.data.map(row => row[i])];
			csv += row.join(',') + '\n';
		});
		
		const blob = new Blob([csv], { type: 'text/csv' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'ai-adoption-matrix.csv';
		a.click();
		URL.revokeObjectURL(url);
	}
	
	function exportToJSON() {
		const exportData = {
			timestamp: new Date().toISOString(),
			categories: matrixData.categories,
			departments: matrixData.departments,
			adoptionData: matrixData.data,
			statistics: {
				totalTools,
				highAdoption,
				mediumAdoption,
				lowAdoption,
				averageAdoption
			}
		};
		
		const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'ai-adoption-matrix.json';
		a.click();
		URL.revokeObjectURL(url);
	}
</script>

<div class="min-h-screen bg-gray-50">
	<!-- Hero Section -->
	<section class="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
		<div class="container mx-auto px-4 py-6 sm:py-9 lg:py-12">
			<div class="max-w-4xl mx-auto text-center">
				<h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
					AI Adoption Matrix
				</h1>
				<p class="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
					Visualize AI tool adoption across different departments and use cases in your organization
				</p>
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
	<main class="container mx-auto px-4 py-8 space-y-6">
	
	<!-- Summary Statistics -->
	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-5 mb-8">
		<!-- Total Combinations Card -->
		<div 
			class="rounded-lg border bg-white text-gray-900 shadow-sm p-4 flex flex-col justify-between h-[100px]"
			in:fade={{ duration: 400, delay: 0 }}
		>
			<div class="text-sm font-medium text-gray-600 mb-2">Total Combinations</div>
			<div class="text-2xl font-bold">{totalTools}</div>
			<div class="text-xs text-gray-400">&nbsp;</div>
		</div>
		
		<!-- Average Adoption Card -->
		<div 
			class="rounded-lg border bg-white text-gray-900 shadow-sm p-4 flex flex-col justify-between h-[100px]"
			in:fade={{ duration: 400, delay: 100 }}
		>
			<div class="text-sm font-medium text-gray-600 mb-2">Average Adoption</div>
			<div class="text-2xl font-bold">{averageAdoption}%</div>
			<div class="text-xs text-gray-400">&nbsp;</div>
		</div>
		
		<!-- High Adoption Card -->
		<a href="{base}/adoption-level/high" class="block hover:shadow-lg transition-shadow" in:fade={{ duration: 400, delay: 200 }}>
			<div class="rounded-lg border bg-white text-gray-900 shadow-sm p-4 flex flex-col justify-between h-[100px] cursor-pointer hover:border-green-300 hover:bg-green-50 transition-colors">
				<div class="text-sm font-medium text-gray-600 mb-2">High Adoption</div>
				<div class="text-2xl font-bold text-green-600">{highAdoption}</div>
				<div class="text-xs text-gray-500">75-100%</div>
			</div>
		</a>
		
		<!-- Medium Adoption Card -->
		<a href="{base}/adoption-level/medium" class="block hover:shadow-lg transition-shadow" in:fade={{ duration: 400, delay: 300 }}>
			<div class="rounded-lg border bg-white text-gray-900 shadow-sm p-4 flex flex-col justify-between h-[100px] cursor-pointer hover:border-yellow-300 hover:bg-yellow-50 transition-colors">
				<div class="text-sm font-medium text-gray-600 mb-2">Medium Adoption</div>
				<div class="text-2xl font-bold text-yellow-600">{mediumAdoption}</div>
				<div class="text-xs text-gray-500">35-74%</div>
			</div>
		</a>
		
		<!-- Low Adoption Card -->
		<a href="{base}/adoption-level/low" class="block hover:shadow-lg transition-shadow" in:fade={{ duration: 400, delay: 400 }}>
			<div class="rounded-lg border bg-white text-gray-900 shadow-sm p-4 flex flex-col justify-between h-[100px] cursor-pointer hover:border-red-300 hover:bg-red-50 transition-colors">
				<div class="text-sm font-medium text-gray-600 mb-2">Low Adoption</div>
				<div class="text-2xl font-bold text-red-600">{lowAdoption}</div>
				<div class="text-xs text-gray-500">0-34%</div>
			</div>
		</a>
	</div>
	
	<!-- Adoption Matrix Component -->
	<div in:slide={{ duration: 400, delay: 500, easing: quintOut }}>
	<Card>
		<CardHeader>
			<div class="flex items-center justify-between">
				<CardTitle>Adoption Heatmap</CardTitle>
				<div class="flex gap-2">
					<Button variant="outline" size="sm" on:click={exportToCSV}>
						<FileSpreadsheet class="mr-2 h-4 w-4" />
						Export CSV
					</Button>
					<Button variant="outline" size="sm" on:click={exportToJSON}>
						<Download class="mr-2 h-4 w-4" />
						Export JSON
					</Button>
				</div>
			</div>
		</CardHeader>
		<CardContent>
			<AdoptionMatrix {matrixData} />
		</CardContent>
	</Card>
	</div>
	
	<!-- Insights Section -->
	<div in:slide={{ duration: 400, delay: 600, easing: quintOut }}>
	<Card>
		<CardHeader>
			<CardTitle class="text-lg">Key Insights</CardTitle>
		</CardHeader>
		<CardContent class="space-y-4">
			<div class="space-y-2">
				<h3 class="font-semibold">Top Performing Technologies</h3>
				<ul class="list-disc list-inside space-y-1 text-sm text-muted-foreground">
					{#each insights.topTechnologies as tech}
						<li>{tech}</li>
					{/each}
				</ul>
			</div>
			
			<div class="space-y-2">
				<h3 class="font-semibold">Leading Divisions</h3>
				<ul class="list-disc list-inside space-y-1 text-sm text-muted-foreground">
					{#each insights.topDivisions as division}
						<li>{division}</li>
					{/each}
				</ul>
			</div>
			
			<div class="space-y-2">
				<h3 class="font-semibold">Key Statistics</h3>
				<ul class="list-disc list-inside space-y-1 text-sm text-muted-foreground">
					<li>Average technologies per division: {insights.averageTechPerDivision}</li>
					<li>Most versatile technology: {insights.mostVersatileTech}</li>
					<li>AI leader: {insights.mostSpecializedDivision}</li>
				</ul>
			</div>
			
			{#if insights.lowAdoptionAreas.length > 0}
			<div class="space-y-2">
				<h3 class="font-semibold">Areas for Improvement</h3>
				<ul class="list-disc list-inside space-y-1 text-sm text-muted-foreground">
					{#each insights.lowAdoptionAreas as area}
						<li>{area}</li>
					{/each}
				</ul>
			</div>
			{/if}
			
			<div class="space-y-2">
				<h3 class="font-semibold">Recommendations</h3>
				<ul class="list-disc list-inside space-y-1 text-sm text-muted-foreground">
					<li>Cross-pollinate successful AI implementations from {insights.topDivisions[0]?.split(' ')[0] || 'leading divisions'} to other divisions</li>
					<li>Create centers of excellence around {insights.topTechnologies[0]?.split(' ')[0] || 'top technologies'} for knowledge sharing</li>
					<li>Develop targeted training programs for divisions with lower adoption rates</li>
					<li>Establish AI champions in each division to drive adoption and best practices</li>
				</ul>
			</div>
		</CardContent>
	</Card>
	</div>
	</main>
</div>

<style>
	/* Add any custom styles here if needed */
</style>