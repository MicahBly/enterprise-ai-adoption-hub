<script>
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { fade, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { 
		DollarSign, 
		Clock, 
		TrendingUp, 
		Users,
		Zap,
		BarChart3,
		PieChart,
		Activity,
		Download,
		Calendar,
		Target,
		Gauge
	} from 'lucide-svelte';
	
	// Data for efficiency metrics
	let metrics = {
		financial: {
			totalSavings: 0,
			laborHoursSaved: 0,
			revenueImpact: 0,
			roi: 0,
			savingsTrend: []
		},
		productivity: {
			avgTimeToValue: 0,
			automationRate: 0,
			processEfficiency: 0,
			productivityGain: 0
		},
		scale: {
			activeUsers: 0,
			productionUseCases: 0,
			reuseRate: 0,
			innovationVelocity: 0
		},
		byDivision: [],
		byStatus: {},
		timeline: []
	};
	
	let selectedPeriod = 'all'; // all, quarterly, monthly
	let loading = true;
	let visible = false;
	
	onMount(async () => {
		try {
			const response = await fetch(`${base}/api/efficiency?period=${selectedPeriod}`);
			const data = await response.json();
			metrics = data;
			loading = false;
			// Trigger animations after data loads
			setTimeout(() => visible = true, 100);
		} catch (error) {
			console.error('Error loading efficiency metrics:', error);
			loading = false;
		}
	});
	
	// Helper functions for formatting
	function formatCurrency(value) {
		if (value >= 1000000) {
			return `$${(value / 1000000).toFixed(1)}M`;
		} else if (value >= 1000) {
			return `$${(value / 1000).toFixed(0)}K`;
		}
		return `$${value.toFixed(0)}`;
	}
	
	function formatNumber(value) {
		if (value >= 1000000) {
			return `${(value / 1000000).toFixed(1)}M`;
		} else if (value >= 1000) {
			return `${(value / 1000).toFixed(0)}K`;
		}
		return value.toFixed(0);
	}
	
	// Color scale for metrics
	function getColorClass(value, thresholds = { good: 70, warning: 40 }) {
		if (value >= thresholds.good) return 'text-green-600';
		if (value >= thresholds.warning) return 'text-yellow-600';
		return 'text-red-600';
	}
	
	function getBackgroundClass(value, thresholds = { good: 70, warning: 40 }) {
		if (value >= thresholds.good) return 'bg-green-100';
		if (value >= thresholds.warning) return 'bg-yellow-100';
		return 'bg-red-100';
	}
	
	// Export functions
	function exportToPDF() {
		// Helper to create progress bar SVG
		const createProgressBar = (percentage, color = '#3b82f6') => `
			<svg width="200" height="20" style="display: block; margin-top: 5px;">
				<rect x="0" y="0" width="200" height="20" fill="#e5e7eb" rx="4"/>
				<rect x="0" y="0" width="${percentage * 2}" height="20" fill="${color}" rx="4"/>
				<text x="100" y="14" text-anchor="middle" fill="white" font-size="12" font-weight="bold">${percentage}%</text>
			</svg>
		`;
		
		// Helper to create mini bar chart
		const createBarChart = (values, labels) => {
			const maxValue = Math.max(...values);
			const barWidth = 30;
			const spacing = 10;
			const height = 60;
			
			let bars = '';
			values.forEach((value, i) => {
				const barHeight = (value / maxValue) * height;
				const x = i * (barWidth + spacing);
				const y = height - barHeight;
				bars += `
					<rect x="${x}" y="${y}" width="${barWidth}" height="${barHeight}" fill="#3b82f6"/>
					<text x="${x + barWidth/2}" y="${height + 15}" text-anchor="middle" font-size="10">${labels[i]}</text>
				`;
			});
			
			return `<svg width="${values.length * (barWidth + spacing)}" height="${height + 20}" style="margin-top: 10px;">${bars}</svg>`;
		};
		
		// Create a rich HTML representation with visuals
		const content = `
			<html>
			<head>
				<title>FOX AI Hub - Efficiency Report</title>
				<style>
					body { font-family: Arial, sans-serif; padding: 20px; color: #111827; }
					h1 { color: #1e40af; margin-bottom: 10px; }
					h2 { color: #1f2937; margin-top: 30px; border-bottom: 2px solid #e5e7eb; padding-bottom: 5px; }
					.header-info { color: #6b7280; margin-bottom: 20px; }
					.metrics-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin: 20px 0; }
					.metric { 
						padding: 15px; 
						background: #f9fafb; 
						border: 1px solid #e5e7eb;
						border-radius: 8px; 
						page-break-inside: avoid;
					}
					.metric-label { 
						font-weight: bold; 
						color: #6b7280; 
						font-size: 14px;
						margin-bottom: 5px;
					}
					.metric-value { 
						font-size: 28px; 
						color: #111827; 
						font-weight: bold;
						margin: 10px 0;
					}
					.metric-visual { margin-top: 10px; }
					.positive { color: #10b981; }
					.warning { color: #f59e0b; }
					.section { margin: 30px 0; page-break-inside: avoid; }
					.summary-box {
						background: #eff6ff;
						border: 2px solid #3b82f6;
						border-radius: 8px;
						padding: 15px;
						margin: 20px 0;
					}
					.division-table {
						width: 100%;
						border-collapse: collapse;
						margin-top: 10px;
					}
					.division-table th, .division-table td {
						padding: 8px;
						text-align: left;
						border-bottom: 1px solid #e5e7eb;
					}
					.division-table th {
						background: #f3f4f6;
						font-weight: bold;
					}
				</style>
			</head>
			<body>
				<h1>FOX AI Hub - Efficiency Report</h1>
				<div class="header-info">
					<div>Generated: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</div>
					<div>Period: ${selectedPeriod.charAt(0).toUpperCase() + selectedPeriod.slice(1)}</div>
				</div>
				
				<div class="summary-box">
					<h3 style="margin-top: 0;">Executive Summary</h3>
					<p>AI initiatives are delivering <strong>${formatCurrency(metrics.financial.totalSavings)}</strong> in annual savings with a <strong>${metrics.financial.roi}% ROI</strong>. 
					We've automated <strong>${metrics.productivity.automationRate}%</strong> of repetitive tasks, saving <strong>${formatNumber(metrics.financial.laborHoursSaved)}</strong> hours annually.</p>
				</div>
				
				<div class="section">
					<h2>Financial Impact</h2>
					<div class="metrics-grid">
						<div class="metric">
							<div class="metric-label">Total Cost Savings</div>
							<div class="metric-value positive">${formatCurrency(metrics.financial.totalSavings)}</div>
							<div class="metric-visual">Annual run rate</div>
						</div>
						<div class="metric">
							<div class="metric-label">Labor Hours Saved</div>
							<div class="metric-value">${formatNumber(metrics.financial.laborHoursSaved)}</div>
							<div class="metric-visual">
								${createProgressBar(Math.min((metrics.financial.laborHoursSaved / 100000) * 100, 100))}
							</div>
						</div>
						<div class="metric">
							<div class="metric-label">Revenue Impact</div>
							<div class="metric-value positive">+${formatCurrency(metrics.financial.revenueImpact)}</div>
							<div class="metric-visual">YoY growth: +12.5%</div>
						</div>
						<div class="metric">
							<div class="metric-label">Return on Investment</div>
							<div class="metric-value ${metrics.financial.roi >= 70 ? 'positive' : metrics.financial.roi >= 40 ? 'warning' : ''}">${metrics.financial.roi}%</div>
							<div class="metric-visual">
								${createProgressBar(metrics.financial.roi, metrics.financial.roi >= 70 ? '#10b981' : metrics.financial.roi >= 40 ? '#f59e0b' : '#ef4444')}
							</div>
						</div>
					</div>
				</div>
				
				<div class="section">
					<h2>Productivity Metrics</h2>
					<div class="metrics-grid">
						<div class="metric">
							<div class="metric-label">Average Time to Value</div>
							<div class="metric-value">${metrics.productivity.avgTimeToValue} days</div>
							<div class="metric-visual">
								${metrics.productivity.avgTimeToValue < 30 ? 'Fast delivery' : metrics.productivity.avgTimeToValue < 60 ? 'Moderate pace' : 'Needs improvement'}
							</div>
						</div>
						<div class="metric">
							<div class="metric-label">Automation Rate</div>
							<div class="metric-value">${metrics.productivity.automationRate}%</div>
							<div class="metric-visual">
								${createProgressBar(metrics.productivity.automationRate, '#10b981')}
							</div>
						</div>
						<div class="metric">
							<div class="metric-label">Process Efficiency</div>
							<div class="metric-value positive">+${metrics.productivity.processEfficiency}%</div>
							<div class="metric-visual">Improvement vs baseline</div>
						</div>
						<div class="metric">
							<div class="metric-label">Productivity Gain</div>
							<div class="metric-value positive">+${metrics.productivity.productivityGain}%</div>
							<div class="metric-visual">Per employee per week</div>
						</div>
					</div>
				</div>
				
				<div class="section">
					<h2>Scale & Growth</h2>
					<div class="metrics-grid">
						<div class="metric">
							<div class="metric-label">Active AI Users</div>
							<div class="metric-value">${formatNumber(metrics.scale.activeUsers)}</div>
							<div class="metric-visual">Across all divisions</div>
						</div>
						<div class="metric">
							<div class="metric-label">Production Use Cases</div>
							<div class="metric-value">${metrics.scale.productionUseCases}</div>
							<div class="metric-visual">
								${createBarChart(
									[metrics.byStatus.production || 0, metrics.byStatus.pilot || 0, metrics.byStatus.development || 0],
									['Prod', 'Pilot', 'Dev']
								)}
							</div>
						</div>
						<div class="metric">
							<div class="metric-label">Cross-Division Reuse</div>
							<div class="metric-value">${metrics.scale.reuseRate}%</div>
							<div class="metric-visual">
								${createProgressBar(metrics.scale.reuseRate, '#f59e0b')}
							</div>
						</div>
						<div class="metric">
							<div class="metric-label">Innovation Velocity</div>
							<div class="metric-value">${metrics.scale.innovationVelocity}/qtr</div>
							<div class="metric-visual">New implementations</div>
						</div>
					</div>
				</div>
				
				<div class="section">
					<h2>Division Performance</h2>
					<table class="division-table">
						<thead>
							<tr>
								<th>Division</th>
								<th>Cost Savings</th>
								<th>Efficiency</th>
								<th>Visual</th>
							</tr>
						</thead>
						<tbody>
							${metrics.byDivision.map(div => `
								<tr>
									<td>${div.name}</td>
									<td>${formatCurrency(div.savings)}</td>
									<td>${div.efficiency}%</td>
									<td>${createProgressBar(div.efficiency, div.efficiency >= 70 ? '#10b981' : div.efficiency >= 40 ? '#f59e0b' : '#ef4444')}</td>
								</tr>
							`).join('')}
						</tbody>
					</table>
				</div>
			</body>
			</html>
		`;
		
		// Open in new window for printing
		const printWindow = window.open('', '_blank');
		printWindow.document.write(content);
		printWindow.document.close();
		
		// Wait a moment for rendering, then trigger print
		setTimeout(() => {
			printWindow.print();
		}, 250);
	}
	
	function exportToExcel() {
		// Create CSV data
		const headers = [
			'Metric Category',
			'Metric Name',
			'Value',
			'Unit'
		];
		
		const rows = [
			// Financial metrics
			['Financial Impact', 'Total Cost Savings', metrics.financial.totalSavings, 'USD'],
			['Financial Impact', 'Labor Hours Saved', metrics.financial.laborHoursSaved, 'hours'],
			['Financial Impact', 'Revenue Impact', metrics.financial.revenueImpact, 'USD'],
			['Financial Impact', 'Return on Investment', metrics.financial.roi, '%'],
			
			// Productivity metrics
			['Productivity', 'Average Time to Value', metrics.productivity.avgTimeToValue, 'days'],
			['Productivity', 'Automation Rate', metrics.productivity.automationRate, '%'],
			['Productivity', 'Process Efficiency', metrics.productivity.processEfficiency, '%'],
			['Productivity', 'Productivity Gain', metrics.productivity.productivityGain, '%'],
			
			// Scale metrics
			['Scale & Growth', 'Active AI Users', metrics.scale.activeUsers, 'users'],
			['Scale & Growth', 'Production Use Cases', metrics.scale.productionUseCases, 'count'],
			['Scale & Growth', 'Cross-Division Reuse', metrics.scale.reuseRate, '%'],
			['Scale & Growth', 'Innovation Velocity', metrics.scale.innovationVelocity, 'per quarter'],
		];
		
		// Add division data
		metrics.byDivision.forEach(div => {
			rows.push(['Division Performance', div.name, div.savings, 'USD']);
			rows.push(['Division Performance', `${div.name} Efficiency`, div.efficiency, '%']);
		});
		
		// Convert to CSV
		const csvContent = [
			headers.join(','),
			...rows.map(row => row.map(cell => 
				typeof cell === 'string' && cell.includes(',') ? `"${cell}"` : cell
			).join(','))
		].join('\n');
		
		// Create and download file
		const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
		const link = document.createElement('a');
		const url = URL.createObjectURL(blob);
		link.setAttribute('href', url);
		link.setAttribute('download', `fox-ai-efficiency-report-${new Date().toISOString().split('T')[0]}.csv`);
		link.style.visibility = 'hidden';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}
	
	// Create mini sparkline data
	function createSparkline(data) {
		if (!data || data.length === 0) return '';
		const max = Math.max(...data);
		const min = Math.min(...data);
		const range = max - min || 1;
		const width = 60;
		const height = 20;
		
		const points = data.map((value, index) => {
			const x = (index / (data.length - 1)) * width;
			const y = height - ((value - min) / range) * height;
			return `${x},${y}`;
		}).join(' ');
		
		return `M ${points}`;
	}
</script>

<svelte:head>
	<title>Efficiency Dashboard | FOX AI Hub</title>
</svelte:head>

<div class="min-h-screen bg-gray-50">
	<!-- Hero Section -->
	<section class="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
		<div class="container mx-auto px-4 py-6 sm:py-9 lg:py-12">
			<div class="max-w-4xl mx-auto text-center">
				<h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
					Efficiency Dashboard
				</h1>
				<p class="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
					Key performance indicators demonstrating AI's impact on operational efficiency and cost savings
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
	<main class="container mx-auto px-4 py-8">
		<!-- Header with Export Buttons -->
		<div class="flex justify-between items-start mb-6">
			<div class="flex gap-2">
			<button
				class="flex items-center px-3 py-1 text-sm font-medium rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
				on:click={exportToPDF}
			>
				<Download class="mr-2 h-4 w-4" />
				Export PDF
			</button>
			<button
				class="flex items-center px-3 py-1 text-sm font-medium rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
				on:click={exportToExcel}
			>
				<Download class="mr-2 h-4 w-4" />
				Export Excel
			</button>
		</div>
	</div>
	
	<!-- Period Selector -->
	<div class="flex gap-2">
		<button
			class="px-3 py-1 text-sm font-medium rounded-md transition-colors {selectedPeriod === 'all' ? 'bg-blue-600 text-white' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}"
			on:click={() => selectedPeriod = 'all'}
		>
			All Time
		</button>
		<button
			class="px-3 py-1 text-sm font-medium rounded-md transition-colors {selectedPeriod === 'quarterly' ? 'bg-blue-600 text-white' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}"
			on:click={() => selectedPeriod = 'quarterly'}
		>
			Quarterly
		</button>
		<button
			class="px-3 py-1 text-sm font-medium rounded-md transition-colors {selectedPeriod === 'monthly' ? 'bg-blue-600 text-white' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}"
			on:click={() => selectedPeriod = 'monthly'}
		>
			Monthly
		</button>
	</div>
	
	{#if loading}
		<div class="flex items-center justify-center h-64">
			<div class="text-muted-foreground">Loading efficiency metrics...</div>
		</div>
	{:else}
		<!-- Financial Impact Row -->
		<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
			<!-- Total Cost Savings -->
			<div in:fly={{ y: 20, duration: 400, delay: 0, easing: quintOut }}>
			<Card>
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle class="text-sm font-medium">Total Cost Savings</CardTitle>
					<DollarSign class="h-4 w-4 text-muted-foreground" />
				</CardHeader>
				<CardContent>
					<div class="text-2xl font-bold {getColorClass(metrics.financial.roi, {good: 50, warning: 20})}">
						{formatCurrency(metrics.financial.totalSavings)}
					</div>
					<div class="flex items-center justify-between mt-2">
						<p class="text-xs text-muted-foreground">Annual run rate</p>
						{#if metrics.financial.savingsTrend.length > 0}
							<svg class="h-5 w-16" viewBox="0 0 60 20">
								<path 
									d={createSparkline(metrics.financial.savingsTrend)} 
									fill="none" 
									stroke="currentColor" 
									stroke-width="2" 
									class="text-green-500"
								/>
							</svg>
						{/if}
					</div>
				</CardContent>
			</Card>
			</div>
			
			<!-- Labor Hours Saved -->
			<div in:fly={{ y: 20, duration: 400, delay: 100, easing: quintOut }}>
			<Card>
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle class="text-sm font-medium">Labor Hours Saved</CardTitle>
					<Clock class="h-4 w-4 text-muted-foreground" />
				</CardHeader>
				<CardContent>
					<div class="text-2xl font-bold">
						{formatNumber(metrics.financial.laborHoursSaved)}
					</div>
					<div class="mt-2">
						<div class="flex justify-between text-xs mb-1">
							<span class="text-muted-foreground">Weekly average</span>
							<span>{Math.round(metrics.financial.laborHoursSaved / 52)}h</span>
						</div>
						<div class="w-full bg-gray-200 rounded-full h-2">
							<div 
								class="bg-blue-600 h-2 rounded-full transition-all duration-300" 
								style="width: {Math.min((metrics.financial.laborHoursSaved / 100000) * 100, 100)}%"
							></div>
						</div>
					</div>
				</CardContent>
			</Card>
			</div>
			
			<!-- Revenue Impact -->
			<div in:fly={{ y: 20, duration: 400, delay: 200, easing: quintOut }}>
			<Card>
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle class="text-sm font-medium">Revenue Impact</CardTitle>
					<TrendingUp class="h-4 w-4 text-muted-foreground" />
				</CardHeader>
				<CardContent>
					<div class="text-2xl font-bold text-green-600">
						+{formatCurrency(metrics.financial.revenueImpact)}
					</div>
					<div class="flex items-center mt-2">
						<div class="flex-1">
							<div class="text-xs text-muted-foreground">YoY growth</div>
							<div class="text-sm font-medium">+12.5%</div>
						</div>
						<div class="ml-2">
							<svg class="h-8 w-8" viewBox="0 0 32 32">
								<circle cx="16" cy="16" r="14" fill="none" stroke="#e5e7eb" stroke-width="4"/>
								<circle 
									cx="16" cy="16" r="14" 
									fill="none" 
									stroke="#10b981" 
									stroke-width="4"
									stroke-dasharray={`${2 * Math.PI * 14 * 0.125} ${2 * Math.PI * 14}`}
									transform="rotate(-90 16 16)"
								/>
							</svg>
						</div>
					</div>
				</CardContent>
			</Card>
			</div>
			
			<!-- ROI -->
			<div in:fly={{ y: 20, duration: 400, delay: 300, easing: quintOut }}>
			<Card>
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle class="text-sm font-medium">Return on Investment</CardTitle>
					<Gauge class="h-4 w-4 text-muted-foreground" />
				</CardHeader>
				<CardContent>
					<div class="text-2xl font-bold {getColorClass(metrics.financial.roi)}">
						{metrics.financial.roi}%
					</div>
					<div class="mt-2">
						<div class="relative h-8">
							<div class="absolute inset-0 flex items-center">
								<div class="w-full bg-gray-200 rounded-full h-2">
									<div 
										class="h-2 rounded-full transition-all duration-300 {getBackgroundClass(metrics.financial.roi)}"
										style="width: {Math.min(metrics.financial.roi, 100)}%"
									></div>
								</div>
							</div>
							<div class="relative flex justify-between text-xs mt-4">
								<span>0%</span>
								<span>100%+</span>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
			</div>
		</div>
		
		<!-- Productivity Metrics Row -->
		<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
			<!-- Time to Value -->
			<div in:fly={{ y: 20, duration: 400, delay: 400, easing: quintOut }}>
			<Card>
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle class="text-sm font-medium">Avg Time to Value</CardTitle>
					<Target class="h-4 w-4 text-muted-foreground" />
				</CardHeader>
				<CardContent>
					<div class="text-2xl font-bold">
						{metrics.productivity.avgTimeToValue} days
					</div>
					<div class="mt-2 space-y-1">
						<div class="flex justify-between text-xs">
							<span class="text-muted-foreground">Concept → Production</span>
							<span class={getColorClass(100 - metrics.productivity.avgTimeToValue)}>
								{metrics.productivity.avgTimeToValue < 30 ? 'Fast' : metrics.productivity.avgTimeToValue < 60 ? 'Moderate' : 'Slow'}
							</span>
						</div>
						<div class="grid grid-cols-4 gap-1">
							{#each [0, 1, 2, 3] as i}
								<div 
									class="h-3 rounded-sm {i < Math.ceil(metrics.productivity.avgTimeToValue / 30) ? getBackgroundClass(100 - metrics.productivity.avgTimeToValue) : 'bg-gray-200'}"
								></div>
							{/each}
						</div>
					</div>
				</CardContent>
			</Card>
			</div>
			
			<!-- Automation Rate -->
			<div in:fly={{ y: 20, duration: 400, delay: 500, easing: quintOut }}>
			<Card>
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle class="text-sm font-medium">Automation Rate</CardTitle>
					<Zap class="h-4 w-4 text-muted-foreground" />
				</CardHeader>
				<CardContent>
					<div class="text-2xl font-bold {getColorClass(metrics.productivity.automationRate)}">
						{metrics.productivity.automationRate}%
					</div>
					<div class="mt-2">
						<div class="flex justify-between text-xs mb-1">
							<span class="text-muted-foreground">Manual tasks automated</span>
						</div>
						<div class="relative h-12">
							<svg class="w-full h-full" viewBox="0 0 100 40">
								<!-- Background segments -->
								{#each [0, 20, 40, 60, 80] as x}
									<rect x={x} y="10" width="18" height="20" fill="#e5e7eb" rx="2"/>
								{/each}
								<!-- Filled segments -->
								{#each [0, 20, 40, 60, 80] as x, i}
									{#if i < Math.floor(metrics.productivity.automationRate / 20)}
										<rect x={x} y="10" width="18" height="20" fill="#10b981" rx="2"/>
									{/if}
								{/each}
							</svg>
						</div>
					</div>
				</CardContent>
			</Card>
			</div>
			
			<!-- Process Efficiency -->
			<div in:fly={{ y: 20, duration: 400, delay: 600, easing: quintOut }}>
			<Card>
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle class="text-sm font-medium">Process Efficiency</CardTitle>
					<Activity class="h-4 w-4 text-muted-foreground" />
				</CardHeader>
				<CardContent>
					<div class="text-2xl font-bold text-green-600">
						+{metrics.productivity.processEfficiency}%
					</div>
					<div class="mt-2">
						<div class="text-xs text-muted-foreground mb-1">Before vs After AI</div>
						<div class="flex gap-2 items-end">
							<div class="flex-1">
								<div class="text-xs text-center">Before</div>
								<div class="bg-gray-300 h-8 rounded-sm"></div>
							</div>
							<div class="flex-1">
								<div class="text-xs text-center">After</div>
								<div class="bg-green-500 h-12 rounded-sm"></div>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
			</div>
			
			<!-- Employee Productivity -->
			<div in:fly={{ y: 20, duration: 400, delay: 700, easing: quintOut }}>
			<Card>
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle class="text-sm font-medium">Productivity Gain</CardTitle>
					<Users class="h-4 w-4 text-muted-foreground" />
				</CardHeader>
				<CardContent>
					<div class="text-2xl font-bold">
						+{metrics.productivity.productivityGain}%
					</div>
					<div class="mt-2">
						<div class="text-xs text-muted-foreground mb-1">Hours saved per employee/week</div>
						<div class="grid grid-cols-5 gap-0.5">
							{#each Array(25) as _, i}
								<div 
									class="h-2 w-2 rounded-sm {i < Math.floor(metrics.productivity.productivityGain / 4) ? 'bg-blue-500' : 'bg-gray-200'}"
								></div>
							{/each}
						</div>
					</div>
				</CardContent>
			</Card>
			</div>
		</div>
		
		<!-- Scale & Growth Row -->
		<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
			<!-- Active Users -->
			<div in:fly={{ y: 20, duration: 400, delay: 800, easing: quintOut }}>
			<Card>
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle class="text-sm font-medium">Active AI Users</CardTitle>
					<Users class="h-4 w-4 text-muted-foreground" />
				</CardHeader>
				<CardContent>
					<div class="text-2xl font-bold">
						{formatNumber(metrics.scale.activeUsers)}
					</div>
					<div class="mt-2">
						<div class="text-xs text-muted-foreground">Growth trend</div>
						<div class="flex items-end gap-1 h-8 mt-1">
							{#each [40, 55, 45, 70, 65, 80, 85] as height}
								<div 
									class="flex-1 bg-blue-500 rounded-t-sm"
									style="height: {height}%"
								></div>
							{/each}
						</div>
					</div>
				</CardContent>
			</Card>
			</div>
			
			<!-- Production Use Cases -->
			<div in:fly={{ y: 20, duration: 400, delay: 900, easing: quintOut }}>
			<Card>
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle class="text-sm font-medium">Production Use Cases</CardTitle>
					<BarChart3 class="h-4 w-4 text-muted-foreground" />
				</CardHeader>
				<CardContent>
					<div class="text-2xl font-bold">
						{metrics.scale.productionUseCases}
					</div>
					<div class="mt-2">
						<div class="text-xs text-muted-foreground mb-1">By status</div>
						<div class="flex gap-1">
							<div class="flex-1 bg-green-500 h-2 rounded-sm" style="width: 60%"></div>
							<div class="flex-1 bg-yellow-500 h-2 rounded-sm" style="width: 25%"></div>
							<div class="flex-1 bg-blue-500 h-2 rounded-sm" style="width: 15%"></div>
						</div>
						<div class="flex justify-between text-xs mt-1">
							<span class="text-green-600">Prod</span>
							<span class="text-yellow-600">Pilot</span>
							<span class="text-blue-600">Dev</span>
						</div>
					</div>
				</CardContent>
			</Card>
			</div>
			
			<!-- Reuse Rate -->
			<div in:fly={{ y: 20, duration: 400, delay: 1000, easing: quintOut }}>
			<Card>
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle class="text-sm font-medium">Cross-Division Reuse</CardTitle>
					<PieChart class="h-4 w-4 text-muted-foreground" />
				</CardHeader>
				<CardContent>
					<div class="text-2xl font-bold">
						{metrics.scale.reuseRate}%
					</div>
					<div class="mt-2">
						<div class="text-xs text-muted-foreground mb-1">Solutions shared</div>
						<svg class="h-8 w-full" viewBox="0 0 100 32">
							<circle cx="25" cy="16" r="10" fill="#3b82f6" opacity="0.6"/>
							<circle cx="50" cy="16" r="10" fill="#10b981" opacity="0.6"/>
							<circle cx="75" cy="16" r="10" fill="#f59e0b" opacity="0.6"/>
							<path d="M 35 16 L 40 16 M 60 16 L 65 16" stroke="#6b7280" stroke-width="2"/>
						</svg>
					</div>
				</CardContent>
			</Card>
			</div>
			
			<!-- Innovation Velocity -->
			<div in:fly={{ y: 20, duration: 400, delay: 1100, easing: quintOut }}>
			<Card>
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle class="text-sm font-medium">Innovation Velocity</CardTitle>
					<TrendingUp class="h-4 w-4 text-muted-foreground" />
				</CardHeader>
				<CardContent>
					<div class="text-2xl font-bold">
						{metrics.scale.innovationVelocity}/qtr
					</div>
					<div class="mt-2">
						<div class="text-xs text-muted-foreground">New implementations</div>
						<div class="flex items-center gap-1 mt-1">
							{#each ['Q1', 'Q2', 'Q3', 'Q4'] as quarter, i}
								<div class="flex-1 text-center">
									<div class="text-xs text-gray-500">{quarter}</div>
									<div class="text-sm font-medium {i === 3 ? 'text-green-600' : ''}">{5 + i * 2}</div>
								</div>
							{/each}
						</div>
					</div>
				</CardContent>
			</Card>
			</div>
		</div>
		
		<!-- Division Performance -->
		<div in:fly={{ y: 20, duration: 400, delay: 1200, easing: quintOut }}>
		<Card>
			<CardHeader>
				<CardTitle>Performance by Division</CardTitle>
			</CardHeader>
			<CardContent>
				<div class="space-y-4">
					{#each metrics.byDivision as division}
						<div class="space-y-2">
							<div class="flex justify-between items-center">
								<span class="text-sm font-medium">{division.name}</span>
								<span class="text-sm text-muted-foreground">{formatCurrency(division.savings)}</span>
							</div>
							<div class="w-full bg-gray-200 rounded-full h-3">
								<div 
									class="h-3 rounded-full transition-all duration-300"
									class:bg-green-500={division.efficiency >= 70}
									class:bg-yellow-500={division.efficiency >= 40 && division.efficiency < 70}
									class:bg-red-500={division.efficiency < 40}
									style="width: {division.efficiency}%"
								>
									<div class="h-full flex items-center justify-end pr-2">
										<span class="text-xs text-white font-medium">{division.efficiency}%</span>
									</div>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</CardContent>
		</Card>
		</div>
		
		<!-- Key Insights -->
		<div in:fly={{ y: 20, duration: 400, delay: 1300, easing: quintOut }}>
		<Card>
			<CardHeader>
				<CardTitle>Executive Summary</CardTitle>
			</CardHeader>
			<CardContent class="space-y-3">
				<div class="flex items-start gap-3">
					<div class="mt-1 h-2 w-2 rounded-full bg-green-500"></div>
					<div>
						<p class="text-sm font-medium">Strong Financial Returns</p>
						<p class="text-sm text-muted-foreground">
							AI initiatives delivering {formatCurrency(metrics.financial.totalSavings)} in annual savings with {metrics.financial.roi}% ROI
						</p>
					</div>
				</div>
				<div class="flex items-start gap-3">
					<div class="mt-1 h-2 w-2 rounded-full bg-blue-500"></div>
					<div>
						<p class="text-sm font-medium">Productivity Transformation</p>
						<p class="text-sm text-muted-foreground">
							{metrics.productivity.automationRate}% of repetitive tasks automated, saving {formatNumber(metrics.financial.laborHoursSaved)} hours annually
						</p>
					</div>
				</div>
				<div class="flex items-start gap-3">
					<div class="mt-1 h-2 w-2 rounded-full bg-yellow-500"></div>
					<div>
						<p class="text-sm font-medium">Scaling Opportunity</p>
						<p class="text-sm text-muted-foreground">
							{metrics.scale.reuseRate}% of solutions being reused across divisions, indicating strong potential for further scaling
						</p>
					</div>
				</div>
			</CardContent>
		</Card>
		</div>
	{/if}
	</main>
</div>

<style>
	/* Add any custom styles if needed */
</style>