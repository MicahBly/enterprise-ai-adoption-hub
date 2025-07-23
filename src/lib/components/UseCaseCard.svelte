<script lang="ts">
	import type { UseCase } from '$lib/stores/useCases';
	import Tooltip from '$lib/components/ui/Tooltip.svelte';
	import { fade, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { base } from '$app/paths';

	export let useCase: UseCase;
	export let index: number = 0; // Used for staggered animations
	$: index; // Mark as used to suppress warning

	// Status color mapping
	const statusColors: Record<string, { bg: string; text: string; border: string }> = {
		'Submitted': { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-300' },
		'Under Review': { bg: 'bg-yellow-100', text: 'text-yellow-700', border: 'border-yellow-300' },
		'In Development': { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300' },
		'Testing': { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-300' },
		'Deployed': { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-300' },
		'On Hold': { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-300' },
		'Rejected': { bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-300' },
		'Completed': { bg: 'bg-emerald-100', text: 'text-emerald-700', border: 'border-emerald-300' }
	};

	// Status messages for tooltips
	const statusMessages: Record<string, string> = {
		'Submitted': 'Initial proposal awaiting review - Expect feedback within 1-2 weeks',
		'Under Review': 'Business case validation in progress - Decision expected within 5-7 days',
		'In Development': 'Active implementation phase - MVP delivery targeted within current sprint',
		'Testing': 'Solution validation and quality assurance - Production deployment imminent',
		'Deployed': 'Live in production - Monitor KPIs and gather user feedback for optimization',
		'On Hold': 'Temporarily paused - Awaiting resource allocation or strategic alignment',
		'Rejected': 'Not aligned with current priorities - Consider resubmission with refined approach',
		'Completed': 'Successfully delivered - Review outcomes for enterprise-wide scaling opportunities'
	};

	$: statusStyle = statusColors[useCase.status] || statusColors['Submitted'];
	$: statusMessage = statusMessages[useCase.status] || 'Current implementation status';

	// Format impact numbers
	function formatNumber(num: number | undefined): string {
		if (!num) return '';
		if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
		if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
		return num.toString();
	}

	// Truncate description for preview
	function truncateText(text: string, maxLength: number = 150): string {
		if (text.length <= maxLength) return text;
		return text.substring(0, maxLength).trim() + '...';
	}

	// Reuse potential messages
	function getReusePotentialMessage(potential: string | undefined): string {
		if (!potential) return 'Scalability assessment pending';
		if (potential.includes('Very High')) return 'Enterprise-ready solution - Proven ROI with immediate scalability across all divisions';
		if (potential.includes('High')) return 'Strong scaling candidate - Minimal adaptation needed for cross-functional deployment';
		if (potential.includes('Medium')) return 'Moderate reuse potential - Requires customization for broader organizational adoption';
		return 'Limited scalability - Best suited for specific use cases within current division';
	}

</script>

<Tooltip 
	content="Click for detailed implementation roadmap, success metrics, and stakeholder contacts"
	
>
	<a
		href="{base}/use-cases/{useCase.id}"
		class="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-gray-300 cursor-pointer overflow-hidden block text-inherit no-underline"
		in:scale={{ duration: 300, delay: index * 50, start: 0.95, opacity: 0, easing: quintOut }}
	>
		<!-- Status ribbon -->
		<div class="absolute top-0 right-0 mt-4 mr-4">
			<Tooltip content={`Implementation phase - ${statusMessage}`} >
				<span
					class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border {statusStyle.bg} {statusStyle.text} {statusStyle.border}"
				>
					{useCase.status}
				</span>
			</Tooltip>
		</div>

		<!-- Card content -->
		<div class="p-6">
			<!-- Header -->
			<div class="pr-20">
				<h3 class="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
					{useCase.title}
				</h3>
				<p class="text-sm text-gray-700 mt-1">
					<Tooltip content={`Click to see all AI initiatives from ${useCase.division}`} >
						<button 
							class="hover:text-gray-700 cursor-pointer text-left bg-transparent border-none p-0 m-0 font-inherit" 
							on:click|stopPropagation
						>
							{useCase.division}
						</button>
					</Tooltip>
					<span class="mx-1">•</span>
					{useCase.owner}
				</p>
			</div>

			<!-- Description -->
			<p class="mt-3 text-sm text-gray-600 line-clamp-3">
				{truncateText(useCase.description)}
			</p>

			<!-- Impact section -->
			{#if useCase.impact}
				<Tooltip content="Measurable business outcomes validating ROI and strategic alignment" >
					<div class="mt-4 text-sm text-gray-600">
						<p class="font-medium text-gray-700">Impact:</p>
						<p class="mt-1">{truncateText(useCase.impact, 100)}</p>
					</div>
				</Tooltip>
			{/if}

			<!-- Tags -->
			{#if useCase.tags && useCase.tags.length > 0}
				<div class="mt-4 flex flex-wrap gap-2">
					{#each useCase.tags.slice(0, 3) as tag}
						<Tooltip content="AI stack powering this solution - click to find similar implementations" >
							<a
								href="{base}/taxonomy/{encodeURIComponent(tag)}"
								class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
								on:click|stopPropagation
							>
								{tag}
							</a>
						</Tooltip>
					{/each}
					{#if useCase.tags.length > 3}
						<span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">
							+{useCase.tags.length - 3} more
						</span>
					{/if}
				</div>
			{/if}

			<!-- Reuse potential indicator -->
			{#if useCase.reusePotential}
				<Tooltip content={getReusePotentialMessage(useCase.reusePotential)} >
					<div class="absolute bottom-0 left-0 right-0 h-1 bg-gray-100">
						<div 
							class="h-full transition-all duration-200 {useCase.reusePotential.includes('Very High') ? 'w-full bg-emerald-600' : 
								useCase.reusePotential.includes('High') ? 'w-3/4 bg-green-500' : 
								useCase.reusePotential.includes('Medium') ? 'w-2/4 bg-yellow-400' : 
								'w-1/4 bg-gray-400'}"
						/>
					</div>
				</Tooltip>
			{/if}
		</div>

		<!-- Hover overlay -->
		<div class="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-200 pointer-events-none" />
	</a>
</Tooltip>

<style>
	/* Line clamp utility for description truncation */
	.line-clamp-3 {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>