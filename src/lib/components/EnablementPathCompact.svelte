<script lang="ts">
	import { ChevronDown, ChevronRight, CheckCircle, Circle, PlayCircle, Clock, Users, Target, FileText, Settings } from 'lucide-svelte';
	import Tooltip from '$lib/components/ui/Tooltip.svelte';
	
	export interface EnablementStep {
		id: string;
		title: string;
		description: string;
		duration?: string;
		status?: 'pending' | 'in-progress' | 'completed';
		icon?: string;
		details?: {
			objectives?: string[];
			deliverables?: string[];
			resources?: string[];
			stakeholders?: string[];
			successCriteria?: string[];
			risks?: string[];
		};
	}
	
	export let enablementSteps: EnablementStep[] = [];
	
	let expandedSteps: Set<string> = new Set();
	
	// Toggle step expansion
	function toggleStep(stepId: string) {
		if (expandedSteps.has(stepId)) {
			expandedSteps.delete(stepId);
		} else {
			expandedSteps.add(stepId);
		}
		expandedSteps = expandedSteps;
	}
	
	// Get step icon
	function getStepIcon(step: EnablementStep, index: number) {
		if (step.status === 'completed') return CheckCircle;
		if (step.status === 'in-progress') return PlayCircle;
		
		// Default icons based on step index
		const defaultIcons = [Target, FileText, Settings, Users, Clock];
		return defaultIcons[index % defaultIcons.length];
	}
	
	// Get step color classes
	function getStepClasses(status?: string) {
		switch (status) {
			case 'completed':
				return {
					icon: 'text-green-600',
					bg: 'bg-green-50 border-green-200',
					text: 'text-green-900',
					badge: 'bg-green-100 text-green-800 border-green-300'
				};
			case 'in-progress':
				return {
					icon: 'text-blue-600',
					bg: 'bg-blue-50 border-blue-200',
					text: 'text-blue-900',
					badge: 'bg-blue-100 text-blue-800 border-blue-300'
				};
			default:
				return {
					icon: 'text-gray-400',
					bg: 'bg-gray-50 border-gray-200',
					text: 'text-gray-900',
					badge: 'bg-gray-100 text-gray-800 border-gray-300'
				};
		}
	}
	
	// Calculate overall progress
	$: completedCount = enablementSteps.filter(s => s.status === 'completed').length;
	$: inProgressCount = enablementSteps.filter(s => s.status === 'in-progress').length;
	$: progressPercentage = enablementSteps.length > 0 
		? Math.round((completedCount / enablementSteps.length) * 100)
		: 0;
</script>

<div class="enablement-path-compact">
	<!-- Compact Progress Header -->
	<div class="mb-4">
		<div class="flex items-center justify-between mb-2">
			<h3 class="text-lg font-semibold text-gray-900">Implementation Roadmap</h3>
			<div class="flex items-center gap-4 text-sm">
				<span class="text-gray-600">
					<span class="font-medium text-green-600">{completedCount}</span> completed
				</span>
				{#if inProgressCount > 0}
					<span class="text-gray-600">
						<span class="font-medium text-blue-600">{inProgressCount}</span> in progress
					</span>
				{/if}
				<span class="font-medium text-gray-700">{progressPercentage}%</span>
			</div>
		</div>
		
		<!-- Progress Bar -->
		<div class="w-full bg-gray-200 rounded-full h-1.5">
			<div 
				class="bg-gradient-to-r from-blue-500 to-blue-600 h-1.5 rounded-full transition-all duration-500"
				style="width: {progressPercentage}%"
			/>
		</div>
	</div>

	<!-- Compact Steps List -->
	<div class="space-y-2">
		{#each enablementSteps as step, index}
			{@const classes = getStepClasses(step.status)}
			{@const Icon = getStepIcon(step, index)}
			{@const isExpanded = expandedSteps.has(step.id)}
			
			<div class="border rounded-lg {classes.bg} transition-all duration-200">
				<!-- Step Header (Always Visible) -->
				<button
					on:click={() => toggleStep(step.id)}
					class="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50/50 transition-colors rounded-lg"
				>
					<!-- Step Icon -->
					<div class="flex-shrink-0">
						<Icon class="w-5 h-5 {classes.icon}" />
					</div>
					
					<!-- Step Info -->
					<div class="flex-1 text-left">
						<div class="flex items-center gap-2">
							<h4 class="font-medium {classes.text}">{step.title}</h4>
							{#if step.duration}
								<span class="text-xs px-2 py-0.5 rounded-full border {classes.badge}">
									{step.duration}
								</span>
							{/if}
						</div>
						{#if !isExpanded}
							<p class="text-sm text-gray-600 mt-0.5 line-clamp-1">{step.description}</p>
						{/if}
					</div>
					
					<!-- Expand Icon -->
					<div class="flex-shrink-0">
						{#if isExpanded}
							<ChevronDown class="w-4 h-4 text-gray-400" />
						{:else}
							<ChevronRight class="w-4 h-4 text-gray-400" />
						{/if}
					</div>
				</button>
				
				<!-- Expanded Content -->
				{#if isExpanded}
					<div class="px-4 pb-4 space-y-3 border-t border-gray-200/50 mt-2 pt-3">
						<!-- Full Description -->
						<div>
							<p class="text-sm text-gray-700">{step.description}</p>
						</div>
						
						{#if step.details}
							<div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
								<!-- Objectives -->
								{#if step.details.objectives && step.details.objectives.length > 0}
									<div class="space-y-1">
										<h5 class="font-medium text-gray-700 flex items-center gap-1">
											<Target class="w-3.5 h-3.5" />
											Objectives
										</h5>
										<ul class="space-y-0.5 text-gray-600">
											{#each step.details.objectives as objective}
												<li class="flex items-start gap-1">
													<span class="text-gray-400 mt-0.5">•</span>
													<span>{objective}</span>
												</li>
											{/each}
										</ul>
									</div>
								{/if}
								
								<!-- Deliverables -->
								{#if step.details.deliverables && step.details.deliverables.length > 0}
									<div class="space-y-1">
										<h5 class="font-medium text-gray-700 flex items-center gap-1">
											<FileText class="w-3.5 h-3.5" />
											Deliverables
										</h5>
										<ul class="space-y-0.5 text-gray-600">
											{#each step.details.deliverables as deliverable}
												<li class="flex items-start gap-1">
													<span class="text-gray-400 mt-0.5">•</span>
													<span>{deliverable}</span>
												</li>
											{/each}
										</ul>
									</div>
								{/if}
								
								<!-- Stakeholders -->
								{#if step.details.stakeholders && step.details.stakeholders.length > 0}
									<div class="space-y-1">
										<h5 class="font-medium text-gray-700 flex items-center gap-1">
											<Users class="w-3.5 h-3.5" />
											Key Stakeholders
										</h5>
										<ul class="space-y-0.5 text-gray-600">
											{#each step.details.stakeholders as stakeholder}
												<li class="flex items-start gap-1">
													<span class="text-gray-400 mt-0.5">•</span>
													<span>{stakeholder}</span>
												</li>
											{/each}
										</ul>
									</div>
								{/if}
								
								<!-- Success Criteria -->
								{#if step.details.successCriteria && step.details.successCriteria.length > 0}
									<div class="space-y-1">
										<h5 class="font-medium text-gray-700 flex items-center gap-1">
											<CheckCircle class="w-3.5 h-3.5" />
											Success Criteria
										</h5>
										<ul class="space-y-0.5 text-gray-600">
											{#each step.details.successCriteria as criteria}
												<li class="flex items-start gap-1">
													<span class="text-gray-400 mt-0.5">•</span>
													<span>{criteria}</span>
												</li>
											{/each}
										</ul>
									</div>
								{/if}
							</div>
						{/if}
						
						<!-- Quick Contact -->
						{#if step.status === 'in-progress' || index === 0}
							<div class="pt-2 border-t border-gray-200/50">
								<button class="text-sm text-blue-600 hover:text-blue-700 font-medium">
									Contact project owner for details →
								</button>
							</div>
						{/if}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>

<style>
	.line-clamp-1 {
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>