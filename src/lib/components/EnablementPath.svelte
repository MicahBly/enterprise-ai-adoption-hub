<script lang="ts">
	import Tooltip from '$lib/components/ui/Tooltip.svelte';
	
	export let enablementSteps: {
		id: string;
		title: string;
		description: string;
		duration?: string;
		status?: 'pending' | 'in-progress' | 'completed';
		icon?: string;
	}[] = [];
	
	export let owner: {
		name: string;
		role: string;
		email: string;
		phone?: string;
		department?: string;
		division?: string;
		avatar?: string;
		tooltip?: string;
	} = {
		name: 'AI Innovation Team',
		role: 'Project Manager',
		email: 'ai-innovation@fox.com'
	};
	
	export let currentStep: number = 0;
	export let showTimeline: boolean = true;
	export let contactCardPosition: 'top' | 'bottom' | 'side' = 'bottom';
	
	// Calculate progress percentage
	$: completedSteps = enablementSteps.filter(step => step.status === 'completed').length;
	$: progressPercentage = enablementSteps.length > 0 ? (completedSteps / enablementSteps.length) * 100 : 0;
	
	// Get step status color
	function getStepColor(status?: string): { bg: string; border: string; text: string; icon: string } {
		switch (status) {
			case 'completed':
				return { bg: 'bg-green-50', border: 'border-green-500', text: 'text-green-700', icon: 'text-green-600' };
			case 'in-progress':
				return { bg: 'bg-blue-50', border: 'border-blue-500', text: 'text-blue-700', icon: 'text-blue-600' };
			default:
				return { bg: 'bg-gray-50', border: 'border-gray-300', text: 'text-gray-700', icon: 'text-gray-400' };
		}
	}
	
	// Handle contact actions
	function handleEmailContact() {
		window.location.href = `mailto:${owner.email}?subject=AI%20Use%20Case%20Enablement%20Inquiry`;
	}
	
	function handlePhoneContact() {
		if (owner.phone) {
			window.location.href = `tel:${owner.phone}`;
		}
	}
</script>

<div class="enablement-path-container">
	<!-- Header with progress -->
	{#if showTimeline}
		<div class="mb-6">
			<div class="flex items-center justify-between mb-2">
				<h3 class="text-lg font-semibold text-gray-900">Enablement Progress</h3>
				<span class="text-sm font-medium text-gray-700">{completedSteps} of {enablementSteps.length} completed</span>
			</div>
			<div class="w-full bg-gray-200 rounded-full h-2">
				<div 
					class="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
					style="width: {progressPercentage}%"
				/>
			</div>
		</div>
	{/if}
	
	<div class="flex {contactCardPosition === 'side' ? 'flex-row gap-6' : 'flex-col gap-6'}">
		<!-- Contact Card (if position is top or side) -->
		{#if contactCardPosition === 'top' || contactCardPosition === 'side'}
			<div class="{contactCardPosition === 'side' ? 'w-80 flex-shrink-0' : 'w-full'}">
				<div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200 shadow-sm">
					<div class="flex items-start gap-4">
						{#if owner.avatar}
							<img src={owner.avatar} alt={owner.name} class="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm" />
						{:else}
							<div class="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold text-xl shadow-sm">
								{owner.name.split(' ').map(n => n[0]).join('').toUpperCase()}
							</div>
						{/if}
						<div class="flex-1">
							{#if owner.tooltip}
								<Tooltip content={owner.tooltip} >
									<div>
										<h4 class="font-semibold text-gray-900">{owner.name}</h4>
										<p class="text-sm text-gray-700">{owner.role}</p>
										{#if owner.department}
											<p class="text-xs text-gray-700 mt-1">{owner.department}</p>
										{/if}
									</div>
								</Tooltip>
							{:else}
								<h4 class="font-semibold text-gray-900">{owner.name}</h4>
								<p class="text-sm text-gray-700">{owner.role}</p>
								{#if owner.department}
									<p class="text-xs text-gray-700 mt-1">{owner.department}</p>
								{/if}
							{/if}
						</div>
					</div>
					
					<div class="mt-4 space-y-3">
						<button
							on:click={handleEmailContact}
							class="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white border border-blue-300 text-blue-700 rounded-md hover:bg-blue-50 transition-colors duration-200"
						>
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
							<span class="text-sm font-medium">Email {owner.name.split(' ')[0]}</span>
						</button>
						
						{#if owner.phone}
							<button
								on:click={handlePhoneContact}
								class="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white border border-blue-300 text-blue-700 rounded-md hover:bg-blue-50 transition-colors duration-200"
							>
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
								</svg>
								<span class="text-sm font-medium">Schedule Call</span>
							</button>
						{/if}
					</div>
				</div>
			</div>
		{/if}
		
		<!-- Steps Container -->
		<div class="flex-1">
			<div class="space-y-4">
				{#each enablementSteps as step, index}
					{@const stepColor = getStepColor(step.status)}
					<div 
						class="relative flex gap-4 {index === currentStep ? 'scale-[1.02]' : ''} transition-transform duration-200"
						class:opacity-60={step.status === 'completed' && index !== currentStep}
					>
						<!-- Step number/icon -->
						<div class="flex-shrink-0">
							<div 
								class="w-10 h-10 rounded-full flex items-center justify-center border-2 {stepColor.border} {stepColor.bg} transition-colors duration-200"
								class:shadow-lg={index === currentStep}
							>
								{#if step.status === 'completed'}
									<svg class="w-5 h-5 {stepColor.icon}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
									</svg>
								{:else if step.status === 'in-progress'}
									<div class="w-3 h-3 bg-blue-600 rounded-full animate-pulse" />
								{:else}
									<span class="text-sm font-semibold {stepColor.text}">{index + 1}</span>
								{/if}
							</div>
							
							<!-- Connector line -->
							{#if index < enablementSteps.length - 1}
								<div class="w-0.5 h-16 bg-gray-200 mx-auto mt-2" />
							{/if}
						</div>
						
						<!-- Step content -->
						<div class="flex-1 pb-8">
							<div class="bg-white rounded-lg border {stepColor.border} p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
								<div class="flex items-start justify-between">
									<div class="flex-1">
										<h4 class="font-semibold {stepColor.text} flex items-center gap-2">
											{#if step.icon}
												<span class="text-lg">{step.icon}</span>
											{/if}
											{step.title}
										</h4>
										<p class="text-sm text-gray-700 mt-1">{step.description}</p>
									</div>
									
									{#if step.duration}
										<span class="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded-md ml-4">
											{step.duration}
										</span>
									{/if}
								</div>
								
								{#if step.status === 'in-progress' && index === currentStep}
									<div class="mt-3 pt-3 border-t border-gray-100">
										<button class="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
											<span>View Details</span>
											<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
											</svg>
										</button>
									</div>
								{/if}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
		
		<!-- Contact Card (if position is bottom) -->
		{#if contactCardPosition === 'bottom'}
			<div class="w-full mt-6">
				<div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200 shadow-sm">
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-4">
							{#if owner.avatar}
								<img src={owner.avatar} alt={owner.name} class="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
							{:else}
								<div class="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold shadow-sm">
									{owner.name.split(' ').map(n => n[0]).join('').toUpperCase()}
								</div>
							{/if}
							{#if owner.tooltip}
								<Tooltip content={owner.tooltip} >
									<div>
										<h4 class="font-semibold text-gray-900">{owner.name}</h4>
										<p class="text-sm text-gray-700">{owner.role}</p>
									</div>
								</Tooltip>
							{:else}
								<div>
									<h4 class="font-semibold text-gray-900">{owner.name}</h4>
									<p class="text-sm text-gray-700">{owner.role}</p>
								</div>
							{/if}
						</div>
						
						<div class="flex gap-3">
							<button
								on:click={handleEmailContact}
								class="flex items-center gap-2 px-4 py-2 bg-white border border-blue-300 text-blue-700 rounded-md hover:bg-blue-50 transition-colors duration-200"
							>
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
								<span class="text-sm font-medium">Contact</span>
							</button>
							
							{#if owner.phone}
								<button
									on:click={handlePhoneContact}
									class="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
								>
									<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
									</svg>
									<span class="text-sm font-medium">Schedule Call</span>
								</button>
							{/if}
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	.enablement-path-container {
		@apply w-full;
	}
	
	/* Smooth scroll for timeline updates */
	:global(.enablement-path-container *) {
		scroll-behavior: smooth;
	}
	
	/* Pulse animation for in-progress indicator */
	@keyframes pulse {
		0%, 100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}
	
	.animate-pulse {
		animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	}
</style>