<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { getUseCaseById, useCasesStore, type UseCase } from '$lib/stores/useCases';
	import { onMount } from 'svelte';
	import { ArrowLeft, Tag, Users, Zap, Code, Server, Link2, Target, HelpCircle, Lightbulb } from 'lucide-svelte';
	import ChatSearchContext from '$lib/components/ChatSearchContext.svelte';
	import EnablementPathCompact from '$lib/components/EnablementPathCompact.svelte';
	import { generateEnablementSteps } from '$lib/utils/enablementGenerator';
	import Tooltip from '$lib/components/ui/Tooltip.svelte';

	let useCase: UseCase | undefined;
	let relatedUseCases: UseCase[] = [];
	let loading = true;

	onMount(() => {
		// Get the use case by ID from the URL
		const unsubscribe = page.subscribe(($page) => {
			const id = $page.params.id;
			useCase = getUseCaseById(id);
			
			if (useCase) {
				// Find related use cases (same division or similar tags)
				useCasesStore.subscribe((allUseCases) => {
					relatedUseCases = allUseCases
						.filter(uc => 
							uc.id !== useCase?.id && 
							(uc.division === useCase?.division || 
							 uc.tags.some(tag => useCase?.tags.includes(tag)))
						)
						.slice(0, 3);
				});
			}
			
			loading = false;
		});

		return unsubscribe;
	});

	function getStatusColor(status: string): string {
		switch (status) {
			case 'production':
				return 'bg-green-100 text-green-800';
			case 'pilot':
				return 'bg-blue-100 text-blue-800';
			case 'development':
				return 'bg-yellow-100 text-yellow-800';
			case 'concept':
				return 'bg-gray-100 text-gray-800';
			default:
				return 'bg-gray-100 text-gray-800';
		}
	}

	function getReusePotentialColor(potential: string): string {
		const lowerPotential = potential.toLowerCase();
		if (lowerPotential.includes('very high') || lowerPotential.includes('excellent')) {
			return 'text-green-600';
		} else if (lowerPotential.includes('high')) {
			return 'text-blue-600';
		} else if (lowerPotential.includes('medium')) {
			return 'text-yellow-600';
		} else {
			return 'text-gray-600';
		}
	}
</script>

<svelte:head>
	<title>{useCase ? useCase.title : 'Use Case Not Found'} - FOX AI Hub</title>
</svelte:head>

<div class="min-h-screen bg-gray-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
		<!-- Back Button -->
		<Tooltip content="Return to browse more AI innovations" >
			<button
				on:click={() => goto(`${base}/use-cases`)}
				class="mb-6 inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
			>
				<ArrowLeft class="h-4 w-4" />
				<span>Back to Use Cases</span>
			</button>
		</Tooltip>

		{#if loading}
			<div class="animate-pulse">
				<div class="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
				<div class="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
				<div class="space-y-4">
					<div class="h-32 bg-gray-200 rounded"></div>
					<div class="h-24 bg-gray-200 rounded"></div>
				</div>
			</div>
		{:else if !useCase}
			<!-- 404 State -->
			<div class="text-center py-16">
				<h1 class="text-4xl font-bold text-gray-900 mb-4">Use Case Not Found</h1>
				<p class="text-gray-600 mb-8">The use case you're looking for doesn't exist or has been removed.</p>
				<button
					on:click={() => goto(`${base}/use-cases`)}
					class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
				>
					Browse All Use Cases
				</button>
			</div>
		{:else}
			<!-- Use Case Details -->
			<div class="bg-white rounded-lg shadow-sm">
				<div class="p-8">
					<!-- Header -->
					<div class="mb-8">
						<div class="flex items-start justify-between mb-4">
							<h1 class="text-3xl font-bold text-gray-900">{useCase.title}</h1>
							<Tooltip content="Current phase with expected timeline to production" >
								<span class={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(useCase.status)}`}>
									{useCase.status}
								</span>
							</Tooltip>
						</div>
						
						<div class="flex flex-wrap items-center gap-4 text-gray-600">
							<div class="flex items-center gap-2">
								<Users class="h-4 w-4" />
								<span>{useCase.division}</span>
							</div>
							<Tooltip content="Direct line to the innovation champion - collaboration encouraged" >
								<div class="flex items-center gap-2">
									<Users class="h-4 w-4" />
									<span>{useCase.owner}</span>
								</div>
							</Tooltip>
						</div>
					</div>

					<!-- AI Assistant for this Use Case -->
					<section class="mb-8">
						<ChatSearchContext 
							context={{
								type: 'useCase',
								data: useCase
							}}
						/>
					</section>

					<!-- Description -->
					<section class="mb-8">
						<h2 class="text-xl font-semibold text-gray-900 mb-3">Description</h2>
						<p class="text-gray-700 leading-relaxed">{useCase.description}</p>
					</section>

					<!-- Impact -->
					<section class="mb-8">
						<div class="flex items-center gap-2 mb-3">
							<Zap class="h-5 w-5 text-yellow-500" />
							<h2 class="text-xl font-semibold text-gray-900">Business Impact</h2>
						</div>
						<p class="text-gray-700 leading-relaxed">{useCase.impact}</p>
					</section>

					<!-- Tags -->
					<section class="mb-8">
						<div class="flex items-center gap-2 mb-3">
							<Tag class="h-5 w-5 text-gray-500" />
							<h2 class="text-xl font-semibold text-gray-900">Tags</h2>
						</div>
						<div class="flex flex-wrap gap-2">
							{#each useCase.tags as tag}
								<Tooltip content="Click to see all use cases with this technology">
									<a
										href="{base}/taxonomy/{encodeURIComponent(tag)}"
										class="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
									>
										{tag}
									</a>
								</Tooltip>
							{/each}
						</div>
					</section>

					<!-- Tech Stack -->
					<section class="mb-8">
						<div class="flex items-center gap-2 mb-4">
							<h2 class="text-xl font-semibold text-gray-900">Technology Stack</h2>
							<Tooltip content="Complete technical architecture - ready for implementation" >
								<HelpCircle class="h-4 w-4 text-gray-400" />
							</Tooltip>
						</div>
						<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
							<!-- AI Technologies -->
							<div class="bg-gray-50 rounded-lg p-4">
								<div class="flex items-center gap-2 mb-3">
									<Code class="h-4 w-4 text-blue-600" />
									<h3 class="font-semibold text-gray-900">AI Technologies</h3>
								</div>
								<ul class="space-y-1">
									{#each useCase.techStackAi as tech}
										<li class="text-gray-700 text-sm">{tech}</li>
									{/each}
								</ul>
							</div>

							<!-- Infrastructure -->
							<div class="bg-gray-50 rounded-lg p-4">
								<div class="flex items-center gap-2 mb-3">
									<Server class="h-4 w-4 text-green-600" />
									<h3 class="font-semibold text-gray-900">Infrastructure</h3>
								</div>
								<ul class="space-y-1">
									{#each useCase.techStackInfrastructure as tech}
										<li class="text-gray-700 text-sm">{tech}</li>
									{/each}
								</ul>
							</div>

							<!-- Integrations -->
							<div class="bg-gray-50 rounded-lg p-4">
								<div class="flex items-center gap-2 mb-3">
									<Link2 class="h-4 w-4 text-purple-600" />
									<h3 class="font-semibold text-gray-900">Integrations</h3>
								</div>
								<ul class="space-y-1">
									{#each useCase.techStackIntegration as tech}
										<li class="text-gray-700 text-sm">{tech}</li>
									{/each}
								</ul>
							</div>
						</div>
					</section>

					<!-- Suggested Technologies -->
					{#if useCase.suggestedTechnologies && useCase.suggestedTechnologies.length > 0}
					<section class="mb-8">
						<div class="flex items-center gap-2 mb-3">
							<Lightbulb class="h-5 w-5 text-yellow-500" />
							<h2 class="text-xl font-semibold text-gray-900">Suggested Technologies</h2>
							<Tooltip content="AI-powered recommendations to enhance this use case" >
								<HelpCircle class="h-4 w-4 text-gray-400" />
							</Tooltip>
						</div>
						<div class="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
							<p class="text-sm text-gray-700 mb-3">Consider these additional AI technologies to enhance your implementation:</p>
							<div class="flex flex-wrap gap-2">
								{#each useCase.suggestedTechnologies as tech}
									<span class="px-3 py-1 bg-white border border-yellow-300 text-yellow-800 rounded-full text-sm font-medium">
										{tech}
									</span>
								{/each}
							</div>
						</div>
					</section>
					{/if}

					<!-- Reuse Potential -->
					<section class="mb-8">
						<div class="flex items-center gap-2 mb-3">
							<Target class="h-5 w-5 text-indigo-500" />
							<h2 class="text-xl font-semibold text-gray-900">Reuse Potential</h2>
							<Tooltip content="Validated scalability score based on technical and business factors" >
								<HelpCircle class="h-4 w-4 text-gray-400" />
							</Tooltip>
						</div>
						<p class={`text-lg ${getReusePotentialColor(useCase.reusePotential)}`}>
							{useCase.reusePotential}
						</p>
					</section>

					<!-- Enablement Path -->
					<section class="mb-8">
						<EnablementPathCompact 
							enablementSteps={generateEnablementSteps(useCase)}
						/>
					</section>
					
					<!-- Project Contact -->
					<section class="mb-8">
						<div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
							<div class="flex items-center justify-between">
								<div class="flex items-center gap-3">
									<div class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
										{useCase.owner.split(' ').map(n => n[0]).join('').toUpperCase()}
									</div>
									<div>
										<h4 class="font-semibold text-gray-900">{useCase.owner}</h4>
										<p class="text-sm text-gray-600">AI Project Lead • {useCase.division}</p>
									</div>
								</div>
								<button
									on:click={() => window.location.href = `mailto:${useCase.owner.toLowerCase().replace(/\s+/g, '.')}@fox.com?subject=AI%20Use%20Case:%20${encodeURIComponent(useCase.title)}`}
									class="px-4 py-2 bg-white border border-blue-300 text-blue-700 rounded-md hover:bg-blue-50 transition-colors text-sm font-medium"
								>
									Contact Project Lead
								</button>
							</div>
						</div>
					</section>
				</div>
			</div>

			<!-- Related Use Cases -->
			{#if relatedUseCases.length > 0}
				<section class="mt-12">
					<div class="flex items-center gap-2 mb-6">
						<h2 class="text-2xl font-bold text-gray-900">Related Use Cases</h2>
						<Tooltip content="Similar initiatives that could benefit from shared learnings" >
							<HelpCircle class="h-4 w-4 text-gray-400" />
						</Tooltip>
					</div>
					<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
						{#each relatedUseCases as relatedCase}
							<a
								href={`/use-cases/${relatedCase.id}`}
								class="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
							>
								<h3 class="font-semibold text-gray-900 mb-2">{relatedCase.title}</h3>
								<p class="text-sm text-gray-600 mb-3 line-clamp-2">{relatedCase.description}</p>
								<div class="flex items-center justify-between">
									<span class="text-sm text-gray-500">{relatedCase.division}</span>
									<span class={`text-xs px-2 py-1 rounded-full ${getStatusColor(relatedCase.status)}`}>
										{relatedCase.status}
									</span>
								</div>
							</a>
						{/each}
					</div>
				</section>
			{/if}
		{/if}
	</div>
</div>

<style>
	.line-clamp-2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>