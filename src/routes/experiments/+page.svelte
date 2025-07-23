<script>
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { fade, fly, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { 
		FlaskConical, 
		TrendingUp, 
		Users, 
		Target,
		Lightbulb,
		Award,
		BookOpen,
		Cpu,
		MessageSquare,
		Rocket,
		CheckCircle,
		Clock,
		PauseCircle
	} from 'lucide-svelte';
	
	// Data for experiments
	let currentExperiments = [];
	let suggestedExperiments = [];
	let stats = {
		activeExperiments: 0,
		successRate: 0,
		participatingDivisions: 0,
		projectedImpact: 0
	};
	
	onMount(async () => {
		try {
			const response = await fetch(`${base}/api/experiments`);
			const data = await response.json();
			
			// Map the API response to the expected format
			if (data.recommendations) {
				// Split recommendations into current and suggested based on status
				currentExperiments = data.recommendations
					.filter(r => r.status === 'active')
					.map(exp => ({
						...exp,
						progress: Math.floor(Math.random() * 60) + 20 // Random progress 20-80%
					})) || [];
				
				// Format suggested experiments into categories
				const proposed = data.recommendations.filter(r => r.status === 'proposed') || [];
				suggestedExperiments = {
					'low_adoption': proposed.map(exp => ({
						title: exp.title,
						description: exp.description,
						targetDivisions: [exp.division],
						estimatedDuration: '4-6 weeks',
						impact: exp.estimatedImpact.toLowerCase(),
						successCriteria: [
							'Measurable increase in AI tool usage',
							'Positive user feedback',
							'Clear ROI demonstration'
						]
					}))
				};
			} else {
				currentExperiments = data.current || [];
				suggestedExperiments = data.suggested || {};
			}
			stats = data.stats || stats;
		} catch (error) {
			console.error('Error loading experiments:', error);
		}
	});
	
	// Status styling
	const statusStyles = {
		active: { bg: 'bg-green-100', text: 'text-green-700', icon: CheckCircle },
		completed: { bg: 'bg-blue-100', text: 'text-blue-700', icon: CheckCircle },
		paused: { bg: 'bg-yellow-100', text: 'text-yellow-700', icon: PauseCircle }
	};
	
	// Impact level styling
	const impactStyles = {
		high: { bg: 'bg-red-100', text: 'text-red-700' },
		medium: { bg: 'bg-yellow-100', text: 'text-yellow-700' },
		low: { bg: 'bg-gray-100', text: 'text-gray-700' }
	};
	
	// Category icons
	const categoryIcons = {
		training: BookOpen,
		incentive: Award,
		infrastructure: Cpu,
		community: MessageSquare,
		low_adoption: Target
	};
</script>

<svelte:head>
	<title>AI Adoption Experiments | FOX AI Hub</title>
</svelte:head>

<div class="min-h-screen bg-gray-50">
	<!-- Hero Section -->
	<section class="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
		<div class="container mx-auto px-4 py-6 sm:py-9 lg:py-12">
			<div class="max-w-4xl mx-auto text-center">
				<h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
					AI Adoption Experiments
				</h1>
				<p class="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
					Active initiatives and experiments to accelerate AI adoption across Fox Corporation
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
	<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
		<div in:fly={{ y: 20, duration: 400, delay: 0, easing: quintOut }}>
		<Card>
			<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle class="text-sm font-medium">Active Experiments</CardTitle>
				<svelte:component this={FlaskConical} class="h-4 w-4 text-muted-foreground" />
			</CardHeader>
			<CardContent>
				<div class="text-2xl font-bold">{stats.activeExperiments}</div>
				<p class="text-xs text-muted-foreground">Currently running</p>
			</CardContent>
		</Card>
		</div>
		
		<div in:fly={{ y: 20, duration: 400, delay: 100, easing: quintOut }}>
		<Card>
			<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle class="text-sm font-medium">Success Rate</CardTitle>
				<svelte:component this={TrendingUp} class="h-4 w-4 text-muted-foreground" />
			</CardHeader>
			<CardContent>
				<div class="text-2xl font-bold">{stats.successRate}%</div>
				<p class="text-xs text-muted-foreground">Of completed experiments</p>
			</CardContent>
		</Card>
		</div>
		
		<div in:fly={{ y: 20, duration: 400, delay: 200, easing: quintOut }}>
		<Card>
			<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle class="text-sm font-medium">Participating Divisions</CardTitle>
				<svelte:component this={Users} class="h-4 w-4 text-muted-foreground" />
			</CardHeader>
			<CardContent>
				<div class="text-2xl font-bold">{stats.participatingDivisions}</div>
				<p class="text-xs text-muted-foreground">Actively engaged</p>
			</CardContent>
		</Card>
		</div>
		
		<div in:fly={{ y: 20, duration: 400, delay: 300, easing: quintOut }}>
		<Card>
			<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle class="text-sm font-medium">Projected Impact</CardTitle>
				<svelte:component this={Target} class="h-4 w-4 text-muted-foreground" />
			</CardHeader>
			<CardContent>
				<div class="text-2xl font-bold">+{stats.projectedImpact}%</div>
				<p class="text-xs text-muted-foreground">Adoption increase</p>
			</CardContent>
		</Card>
		</div>
	</div>
	
	<!-- Current Experiments -->
	<div class="space-y-4">
		<div class="flex items-center justify-between">
			<h2 class="text-2xl font-bold">Current Experiments</h2>
			<Button variant="outline" size="sm">
				<svelte:component this={Rocket} class="mr-2 h-4 w-4" />
				Launch New Experiment
			</Button>
		</div>
		
		<div class="grid gap-4 md:grid-cols-2">
			{#each currentExperiments as experiment, index}
				<div in:fly={{ y: 20, duration: 400, delay: 400 + (index * 100), easing: quintOut }}>
				<Card class="hover:shadow-lg transition-shadow">
					<CardHeader>
						<div class="flex items-start justify-between">
							<div class="space-y-1">
								<CardTitle class="text-lg">{experiment.title}</CardTitle>
								<p class="text-sm text-muted-foreground">{experiment.division}</p>
							</div>
							<div class="flex items-center gap-2">
								<svelte:component 
									this={statusStyles[experiment.status].icon} 
									class="h-4 w-4 {statusStyles[experiment.status].text}" 
								/>
								<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium {statusStyles[experiment.status].bg} {statusStyles[experiment.status].text}">
									{experiment.status}
								</span>
							</div>
						</div>
					</CardHeader>
					<CardContent class="space-y-4">
						<p class="text-sm text-black">{experiment.description}</p>
						
						<div class="space-y-2">
							<div class="flex justify-between text-sm">
								<span class="text-muted-foreground">Progress</span>
								<span class="font-medium">{experiment.progress}%</span>
							</div>
							<div class="w-full bg-gray-200 rounded-full h-2">
								<div class="bg-blue-600 h-2 rounded-full" style="width: {experiment.progress}%"></div>
							</div>
						</div>
						
						<div class="grid grid-cols-2 gap-4 text-sm">
							<div>
								<p class="text-muted-foreground">Started</p>
								<p class="font-medium">{experiment.startDate}</p>
							</div>
							<div>
								<p class="text-muted-foreground">Duration</p>
								<p class="font-medium">{experiment.duration}</p>
							</div>
						</div>
						
						<div class="pt-2 border-t">
							<p class="text-sm text-muted-foreground mb-1">Success Metrics</p>
							<ul class="text-sm space-y-1">
								{#each experiment.metrics as metric}
									<li class="flex items-center gap-2">
										<svelte:component this={CheckCircle} class="h-3 w-3 text-green-600" />
										{metric}
									</li>
								{/each}
							</ul>
						</div>
					</CardContent>
				</Card>
				</div>
			{/each}
		</div>
	</div>
	
	<!-- Suggested Experiments -->
	<div class="space-y-4">
		<div class="flex items-center gap-2">
			<svelte:component this={Lightbulb} class="h-6 w-6 text-yellow-500" />
			<h2 class="text-2xl font-bold">Suggested Experiments</h2>
		</div>
		
		<p class="text-muted-foreground">
			Based on your adoption matrix data, here are targeted experiments to boost AI adoption
		</p>
		
		<div class="grid gap-6">
			{#each Object.entries(suggestedExperiments) as [category, experiments], categoryIndex}
				<div class="space-y-3" in:fly={{ y: 20, duration: 400, delay: 600 + (categoryIndex * 200), easing: quintOut }}>
					<div class="flex items-center gap-2">
						<svelte:component this={categoryIcons[category]} class="h-5 w-5 text-gray-600" />
						<h3 class="text-lg font-semibold capitalize">{category.replace('_', ' ')}</h3>
					</div>
					
					<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						{#each experiments as suggestion, index}
							<div in:scale={{ duration: 300, delay: 700 + (categoryIndex * 200) + (index * 50), start: 0.95, opacity: 0, easing: quintOut }}>
							<Card class="hover:shadow-md transition-shadow">
								<CardHeader>
									<div class="flex items-start justify-between">
										<CardTitle class="text-base">{suggestion.title}</CardTitle>
										<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium {impactStyles[suggestion.impact].bg} {impactStyles[suggestion.impact].text}">
											{suggestion.impact} impact
										</span>
									</div>
								</CardHeader>
								<CardContent class="space-y-3">
									<p class="text-sm text-black">{suggestion.description}</p>
									
									<div class="space-y-2">
										<div class="flex items-center gap-2 text-sm">
											<svelte:component this={Users} class="h-4 w-4 text-gray-400" />
											<span class="text-muted-foreground">Target:</span>
											<span class="font-medium">{suggestion.targetDivisions.join(', ')}</span>
										</div>
										
										<div class="flex items-center gap-2 text-sm">
											<svelte:component this={Clock} class="h-4 w-4 text-gray-400" />
											<span class="text-muted-foreground">Duration:</span>
											<span class="font-medium">{suggestion.estimatedDuration}</span>
										</div>
									</div>
									
									<div class="pt-3 border-t">
										<p class="text-xs text-muted-foreground mb-2">Success Criteria</p>
										<ul class="text-xs space-y-1">
											{#each suggestion.successCriteria as criteria}
												<li>• {criteria}</li>
											{/each}
										</ul>
									</div>
									
									<Button variant="outline" size="sm" class="w-full">
										<svelte:component this={Rocket} class="mr-2 h-4 w-4" />
										Launch Experiment
									</Button>
								</CardContent>
							</Card>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
	</main>
</div>

<style>
	/* Custom styles if needed */
</style> 
