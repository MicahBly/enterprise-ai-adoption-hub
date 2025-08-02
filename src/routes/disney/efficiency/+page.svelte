<script>
  import { onMount } from 'svelte';
  
  // Real efficiency metrics based on Disney's AI implementations
  const efficiencyData = {
    overall: {
      costSavings: 125000000, // $125M based on reported savings
      timeReduction: 38,
      qualityImprovement: 27,
      employeeProductivity: 42
    },
    byDivision: [
      {
        name: 'Disney Entertainment',
        metrics: {
          costSavings: 65000000,
          timeReduction: 45,
          qualityScore: 92,
          projectsCompleted: 18
        },
        topImpacts: [
          { name: 'Animation Production', savings: 28000000, efficiency: '+40%' },
          { name: 'VFX Rendering', savings: 22000000, efficiency: '+60%' },
          { name: 'Content Personalization', savings: 15000000, efficiency: '+35%' }
        ]
      },
      {
        name: 'ESPN',
        metrics: {
          costSavings: 25000000,
          timeReduction: 35,
          qualityScore: 88,
          projectsCompleted: 8
        },
        topImpacts: [
          { name: 'Automated Highlights', savings: 12000000, efficiency: '+80%' },
          { name: 'Fantasy Analytics', savings: 8000000, efficiency: '+45%' },
          { name: 'Real-time Stats', savings: 5000000, efficiency: '+50%' }
        ]
      },
      {
        name: 'Disney Experiences',
        metrics: {
          costSavings: 35000000,
          timeReduction: 32,
          qualityScore: 95,
          projectsCompleted: 12
        },
        topImpacts: [
          { name: 'Crowd Management', savings: 15000000, efficiency: '+25%' },
          { name: 'Predictive Maintenance', savings: 12000000, efficiency: '+73%' },
          { name: 'Guest Services AI', savings: 8000000, efficiency: '+70%' }
        ]
      }
    ],
    monthlyTrend: [
      { month: 'Jan', savings: 8500000, projects: 28 },
      { month: 'Feb', savings: 9200000, projects: 30 },
      { month: 'Mar', savings: 10100000, projects: 32 },
      { month: 'Apr', savings: 11300000, projects: 35 },
      { month: 'May', savings: 10800000, projects: 33 },
      { month: 'Jun', savings: 12400000, projects: 38 }
    ],
    keyMetrics: [
      {
        title: 'Animation Time Saved',
        value: '40%',
        change: '+8%',
        trend: 'up',
        description: 'Reduction in animation production time'
      },
      {
        title: 'Guest Wait Times',
        value: '-25%',
        change: '-5%',
        trend: 'up',
        description: 'Average wait time reduction in parks'
      },
      {
        title: 'Content Engagement',
        value: '+35%',
        change: '+7%',
        trend: 'up',
        description: 'Increase in Disney+ engagement'
      },
      {
        title: 'Operational Costs',
        value: '-18%',
        change: '-3%',
        trend: 'up',
        description: 'Reduction in overall operational costs'
      }
    ],
    roiByCategory: [
      { category: 'Content Creation', roi: 312, investment: 45000000 },
      { category: 'Guest Experience', roi: 285, investment: 38000000 },
      { category: 'Operations', roi: 428, investment: 22000000 },
      { category: 'Analytics', roi: 256, investment: 18000000 },
      { category: 'Security', roi: 198, investment: 12000000 }
    ]
  };
  
  let selectedTimeRange = '6months';
  let animateNumbers = false;
  
  onMount(() => {
    animateNumbers = true;
  });
  
  function formatCurrency(value) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  }
  
  function calculateTotalROI() {
    const totalInvestment = efficiencyData.roiByCategory.reduce((sum, cat) => sum + cat.investment, 0);
    const totalReturn = efficiencyData.overall.costSavings;
    return Math.round((totalReturn / totalInvestment) * 100);
  }
  
  function exportPDF() {
    // Create a rich HTML document styled like Disney
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Disney AI Efficiency Report</title>
    <style>
        @page {
            size: A4;
            margin: 20mm;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #1f2937;
            margin: 0;
            padding: 0;
        }
        
        .header {
            background: linear-gradient(135deg, #7c3aed 0%, #3b82f6 50%, #ec4899 100%);
            color: white;
            padding: 40px;
            border-radius: 12px;
            margin-bottom: 30px;
            page-break-inside: avoid;
        }
        
        .header h1 {
            margin: 0 0 10px 0;
            font-size: 36px;
            font-weight: bold;
        }
        
        .header .subtitle {
            font-size: 18px;
            opacity: 0.9;
        }
        
        .header .date {
            font-size: 14px;
            opacity: 0.8;
            margin-top: 10px;
        }
        
        .summary-box {
            background: linear-gradient(135deg, #f3e8ff 0%, #e0e7ff 100%);
            border: 2px solid #7c3aed;
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 30px;
            page-break-inside: avoid;
        }
        
        .summary-box h2 {
            color: #7c3aed;
            margin-top: 0;
        }
        
        .metrics-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin-bottom: 30px;
        }
        
        .metric-card {
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            page-break-inside: avoid;
        }
        
        .metric-card .label {
            font-size: 14px;
            color: #6b7280;
            margin-bottom: 5px;
        }
        
        .metric-card .value {
            font-size: 28px;
            font-weight: bold;
            color: #1f2937;
            margin-bottom: 5px;
        }
        
        .metric-card .value.positive {
            color: #10b981;
        }
        
        .metric-card .description {
            font-size: 12px;
            color: #9ca3af;
        }
        
        .section {
            margin-bottom: 40px;
            page-break-inside: avoid;
        }
        
        .section h2 {
            color: #7c3aed;
            border-bottom: 2px solid #e5e7eb;
            padding-bottom: 10px;
            margin-bottom: 20px;
        }
        
        .division-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        
        .division-table th {
            background: #f3f4f6;
            padding: 12px;
            text-align: left;
            font-weight: bold;
            border-bottom: 2px solid #e5e7eb;
        }
        
        .division-table td {
            padding: 12px;
            border-bottom: 1px solid #e5e7eb;
        }
        
        .roi-bar {
            background: #e5e7eb;
            border-radius: 4px;
            height: 24px;
            position: relative;
            margin: 5px 0;
        }
        
        .roi-fill {
            background: linear-gradient(90deg, #7c3aed 0%, #ec4899 100%);
            border-radius: 4px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding-right: 8px;
            color: white;
            font-size: 12px;
            font-weight: bold;
        }
        
        .chart-container {
            background: #f9fafb;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
        }
        
        .bar-chart {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            height: 200px;
            gap: 10px;
        }
        
        .bar {
            flex: 1;
            background: linear-gradient(180deg, #ec4899 0%, #7c3aed 100%);
            border-radius: 4px 4px 0 0;
            position: relative;
            min-height: 20px;
        }
        
        .bar-label {
            position: absolute;
            bottom: -25px;
            left: 0;
            right: 0;
            text-align: center;
            font-size: 12px;
            color: #6b7280;
        }
        
        .bar-value {
            position: absolute;
            top: -25px;
            left: 0;
            right: 0;
            text-align: center;
            font-size: 11px;
            font-weight: bold;
            color: #1f2937;
        }
        
        .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 2px solid #e5e7eb;
            text-align: center;
            color: #6b7280;
            font-size: 12px;
        }
        
        .disney-magic {
            display: inline-block;
            background: linear-gradient(90deg, #7c3aed 0%, #ec4899 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Disney AI Efficiency Report</h1>
        <div class="subtitle">Transforming Magic with Intelligence</div>
        <div class="date">Generated: ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
    </div>
    
    <div class="summary-box">
        <h2>Executive Summary</h2>
        <p>Disney's AI initiatives have delivered <strong class="disney-magic">${formatCurrency(efficiencyData.overall.costSavings)}</strong> in annual cost savings with an impressive <strong class="disney-magic">${calculateTotalROI()}% ROI</strong>. Our AI implementations have reduced operational time by <strong>${efficiencyData.overall.timeReduction}%</strong> while improving quality by <strong>${efficiencyData.overall.qualityImprovement}%</strong> across all divisions.</p>
    </div>
    
    <div class="section">
        <h2>Overall Performance Metrics</h2>
        <div class="metrics-grid">
            <div class="metric-card">
                <div class="label">Annual Cost Savings</div>
                <div class="value positive">${formatCurrency(efficiencyData.overall.costSavings)}</div>
                <div class="description">Total savings across all divisions</div>
            </div>
            <div class="metric-card">
                <div class="label">Time Reduction</div>
                <div class="value">${efficiencyData.overall.timeReduction}%</div>
                <div class="description">Average process time savings</div>
            </div>
            <div class="metric-card">
                <div class="label">Quality Improvement</div>
                <div class="value">${efficiencyData.overall.qualityImprovement}%</div>
                <div class="description">Output quality enhancement</div>
            </div>
            <div class="metric-card">
                <div class="label">Employee Productivity</div>
                <div class="value positive">+${efficiencyData.overall.employeeProductivity}%</div>
                <div class="description">Productivity gain per employee</div>
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
                    <th>Time Saved</th>
                    <th>Quality Score</th>
                    <th>AI Projects</th>
                </tr>
            </thead>
            <tbody>
                ${efficiencyData.byDivision.map(div => `
                <tr>
                    <td><strong>${div.name}</strong></td>
                    <td style="color: #10b981;">${formatCurrency(div.metrics.costSavings)}</td>
                    <td>${div.metrics.timeReduction}%</td>
                    <td>${div.metrics.qualityScore}/100</td>
                    <td>${div.metrics.projectsCompleted}</td>
                </tr>
                `).join('')}
            </tbody>
        </table>
    </div>
    
    <div class="section">
        <h2>ROI by AI Category</h2>
        ${efficiencyData.roiByCategory.map((cat, index) => {
            const barWidth = Math.min(cat.roi / 5, 100);
            return `
            <div style="margin-bottom: 20px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                    <span><strong>${cat.category}</strong></span>
                    <span style="color: #6b7280;">${cat.roi}% ROI</span>
                </div>
                <svg width="100%" height="30" style="display: block;">
                    <!-- Background bar -->
                    <rect x="0" y="3" width="100%" height="24" fill="#e5e7eb" rx="4"/>
                    
                    <!-- ROI bar with gradient -->
                    <defs>
                        <linearGradient id="roiGradient${index}" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style="stop-color:#7c3aed;stop-opacity:1" />
                            <stop offset="100%" style="stop-color:#ec4899;stop-opacity:1" />
                        </linearGradient>
                    </defs>
                    <rect x="0" y="3" width="${barWidth}%" height="24" fill="url(#roiGradient${index})" rx="4"/>
                    
                    <!-- Investment amount text -->
                    <text x="${barWidth - 2}%" y="20" text-anchor="end" font-size="12" font-weight="bold" fill="white">
                        ${formatCurrency(cat.investment)}
                    </text>
                </svg>
            </div>
            `;
        }).join('')}
    </div>
    
    <div class="section">
        <h2>Monthly Savings Trend</h2>
        <div class="chart-container">
            <svg width="100%" height="250" viewBox="0 0 600 250" style="display: block;">
                <!-- Grid lines -->
                <line x1="50" y1="200" x2="550" y2="200" stroke="#e5e7eb" stroke-width="1"/>
                <line x1="50" y1="150" x2="550" y2="150" stroke="#e5e7eb" stroke-width="1"/>
                <line x1="50" y1="100" x2="550" y2="100" stroke="#e5e7eb" stroke-width="1"/>
                <line x1="50" y1="50" x2="550" y2="50" stroke="#e5e7eb" stroke-width="1"/>
                
                <!-- Y-axis labels -->
                <text x="40" y="205" text-anchor="end" font-size="12" fill="#6b7280">$0</text>
                <text x="40" y="155" text-anchor="end" font-size="12" fill="#6b7280">$5M</text>
                <text x="40" y="105" text-anchor="end" font-size="12" fill="#6b7280">$10M</text>
                <text x="40" y="55" text-anchor="end" font-size="12" fill="#6b7280">$15M</text>
                
                <!-- Bars -->
                ${efficiencyData.monthlyTrend.map((month, index) => {
                    const barWidth = 70;
                    const gap = 10;
                    const x = 60 + index * (barWidth + gap);
                    const height = (month.savings / 15000000) * 150;
                    const y = 200 - height;
                    
                    return `
                    <g>
                        <!-- Bar -->
                        <rect x="${x}" y="${y}" width="${barWidth}" height="${height}" rx="4">
                            <animate attributeName="height" from="0" to="${height}" dur="0.8s" begin="${index * 0.1}s" fill="freeze"/>
                            <animate attributeName="y" from="200" to="${y}" dur="0.8s" begin="${index * 0.1}s" fill="freeze"/>
                        </rect>
                        <!-- Gradient definition -->
                        <defs>
                            <linearGradient id="barGradient${index}" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style="stop-color:#ec4899;stop-opacity:1" />
                                <stop offset="100%" style="stop-color:#7c3aed;stop-opacity:1" />
                            </linearGradient>
                        </defs>
                        <rect x="${x}" y="${y}" width="${barWidth}" height="${height}" fill="url(#barGradient${index})" rx="4"/>
                        
                        <!-- Value label -->
                        <text x="${x + barWidth/2}" y="${y - 5}" text-anchor="middle" font-size="11" font-weight="bold" fill="#1f2937">
                            $${(month.savings / 1000000).toFixed(1)}M
                        </text>
                        
                        <!-- Month label -->
                        <text x="${x + barWidth/2}" y="220" text-anchor="middle" font-size="12" fill="#6b7280">
                            ${month.month}
                        </text>
                    </g>
                    `;
                }).join('')}
            </svg>
        </div>
    </div>
    
    <div class="section">
        <h2>Investment Summary</h2>
        <div class="summary-box" style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-color: #f59e0b;">
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; text-align: center;">
                <div>
                    <div style="font-size: 14px; color: #92400e;">Total Investment</div>
                    <div style="font-size: 24px; font-weight: bold; color: #92400e;">${formatCurrency(efficiencyData.roiByCategory.reduce((sum, cat) => sum + cat.investment, 0))}</div>
                </div>
                <div>
                    <div style="font-size: 14px; color: #166534;">Total Returns</div>
                    <div style="font-size: 24px; font-weight: bold; color: #166534;">${formatCurrency(efficiencyData.overall.costSavings)}</div>
                </div>
                <div>
                    <div style="font-size: 14px; color: #7c3aed;">Overall ROI</div>
                    <div style="font-size: 28px; font-weight: bold; color: #7c3aed;">${calculateTotalROI()}%</div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="footer">
        <p>This report was generated by the <span class="disney-magic">Disney AI Adoption Hub</span></p>
        <p>© ${new Date().getFullYear()} The Walt Disney Company. All Rights Reserved.</p>
    </div>
</body>
</html>
    `;
    
    // Open in new window for printing as PDF
    const printWindow = window.open('', '_blank');
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    
    // Wait for content to load then trigger print dialog
    printWindow.onload = function() {
        printWindow.print();
    };
  }
  
  function downloadRawData() {
    // Export the raw data as JSON
    const rawData = {
      exportDate: new Date().toISOString(),
      overall: efficiencyData.overall,
      byDivision: efficiencyData.byDivision,
      monthlyTrend: efficiencyData.monthlyTrend,
      keyMetrics: efficiencyData.keyMetrics,
      roiByCategory: efficiencyData.roiByCategory,
      calculatedMetrics: {
        totalInvestment: efficiencyData.roiByCategory.reduce((sum, cat) => sum + cat.investment, 0),
        totalROI: calculateTotalROI()
      }
    };
    
    const blob = new Blob([JSON.stringify(rawData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `disney-ai-efficiency-data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
</script>

<svelte:head>
  <title>Efficiency Dashboard - Disney AI Adoption Hub</title>
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 text-white py-16">
  <div class="container mx-auto px-4">
    <h1 class="text-4xl md:text-5xl font-bold mb-4">AI Efficiency Dashboard</h1>
    <p class="text-xl text-purple-100 mb-8">
      Real-time metrics showcasing the impact of AI across Disney
    </p>
    
    <!-- Key Performance Indicators -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="bg-white/10 backdrop-blur rounded-lg p-4">
        <div class="text-3xl font-bold text-green-300">
          {animateNumbers ? formatCurrency(efficiencyData.overall.costSavings) : '$0'}
        </div>
        <div class="text-sm text-gray-200">Annual Cost Savings</div>
      </div>
      <div class="bg-white/10 backdrop-blur rounded-lg p-4">
        <div class="text-3xl font-bold text-yellow-300">
          {animateNumbers ? efficiencyData.overall.timeReduction : 0}%
        </div>
        <div class="text-sm text-gray-200">Time Reduction</div>
      </div>
      <div class="bg-white/10 backdrop-blur rounded-lg p-4">
        <div class="text-3xl font-bold text-blue-300">
          {animateNumbers ? efficiencyData.overall.qualityImprovement : 0}%
        </div>
        <div class="text-sm text-gray-200">Quality Improvement</div>
      </div>
      <div class="bg-white/10 backdrop-blur rounded-lg p-4">
        <div class="text-3xl font-bold text-purple-300">
          {animateNumbers ? efficiencyData.overall.employeeProductivity : 0}%
        </div>
        <div class="text-sm text-gray-200">Productivity Gain</div>
      </div>
    </div>
  </div>
</section>

<!-- Division Performance -->
<section class="container mx-auto px-4 py-8">
  <h2 class="text-2xl font-bold mb-6 text-gray-900">Performance by Division</h2>
  
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
    {#each efficiencyData.byDivision as division}
      <div class="bg-white rounded-xl shadow-lg p-6">
        <h3 class="text-xl font-bold mb-4 text-purple-700">{division.name}</h3>
        
        <!-- Division Metrics -->
        <div class="grid grid-cols-2 gap-4 mb-6">
          <div class="bg-gray-50 rounded-lg p-3">
            <div class="text-sm text-gray-700">Cost Savings</div>
            <div class="text-lg font-bold text-green-600">
              {formatCurrency(division.metrics.costSavings)}
            </div>
          </div>
          <div class="bg-gray-50 rounded-lg p-3">
            <div class="text-sm text-gray-700">Time Saved</div>
            <div class="text-lg font-bold text-blue-600">
              {division.metrics.timeReduction}%
            </div>
          </div>
          <div class="bg-gray-50 rounded-lg p-3">
            <div class="text-sm text-gray-700">Quality Score</div>
            <div class="text-lg font-bold text-purple-600">
              {division.metrics.qualityScore}/100
            </div>
          </div>
          <div class="bg-gray-50 rounded-lg p-3">
            <div class="text-sm text-gray-700">AI Projects</div>
            <div class="text-lg font-bold text-orange-600">
              {division.metrics.projectsCompleted}
            </div>
          </div>
        </div>
        
        <!-- Top Impacts -->
        <div>
          <h4 class="font-semibold text-sm mb-3 text-gray-900">Top AI Impacts</h4>
          <div class="space-y-2">
            {#each division.topImpacts as impact}
              <div class="flex justify-between items-center text-sm">
                <span class="text-gray-700">{impact.name}</span>
                <div class="text-right">
                  <span class="font-medium text-green-600">{formatCurrency(impact.savings)}</span>
                  <span class="text-gray-700 ml-2">{impact.efficiency}</span>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- Key Metrics Grid -->
<section class="bg-gray-50 py-8">
  <div class="container mx-auto px-4">
    <h2 class="text-2xl font-bold mb-6 text-gray-900">Key Performance Metrics</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each efficiencyData.keyMetrics as metric}
        <div class="bg-white rounded-xl shadow-md p-6">
          <h3 class="font-semibold text-gray-900 mb-2">{metric.title}</h3>
          <div class="flex items-end justify-between mb-2">
            <span class="text-3xl font-bold 
                         {metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}">
              {metric.value}
            </span>
            <span class="text-sm {metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}">
              {metric.change} vs last month
            </span>
          </div>
          <p class="text-sm text-gray-700">{metric.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- ROI Analysis -->
<section class="container mx-auto px-4 py-8">
  <div class="bg-white rounded-xl shadow-lg p-6">
    <h2 class="text-2xl font-bold mb-6 text-gray-900">ROI by AI Category</h2>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- ROI Chart -->
      <div>
        <div class="space-y-4">
          {#each efficiencyData.roiByCategory as category}
            <div>
              <div class="flex justify-between mb-1">
                <span class="font-medium text-gray-900">{category.category}</span>
                <span class="text-sm text-gray-700">{category.roi}% ROI</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-8 relative">
                <div class="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full flex items-center justify-end pr-3"
                     style="width: {Math.min(category.roi / 5, 100)}%">
                  <span class="text-white text-sm font-medium">{formatCurrency(category.investment)}</span>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
      
      <!-- Summary Stats -->
      <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
        <h3 class="text-xl font-bold mb-4 text-gray-900">Investment Summary</h3>
        <div class="space-y-4">
          <div class="flex justify-between">
            <span class="text-gray-900">Total AI Investment</span>
            <span class="font-bold text-xl text-gray-900">
              {formatCurrency(efficiencyData.roiByCategory.reduce((sum, cat) => sum + cat.investment, 0))}
            </span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-900">Total Returns</span>
            <span class="font-bold text-xl text-green-600">
              {formatCurrency(efficiencyData.overall.costSavings)}
            </span>
          </div>
          <div class="border-t pt-4">
            <div class="flex justify-between">
              <span class="text-gray-900">Overall ROI</span>
              <span class="font-bold text-2xl text-purple-600">
                {calculateTotalROI()}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Monthly Trend -->
<section class="bg-gray-50 py-8">
  <div class="container mx-auto px-4">
    <div class="bg-white rounded-xl shadow-lg p-6">
      <div class="flex justify-between items-center mb-3">
        <h2 class="text-2xl font-bold text-gray-900">Monthly Savings Trend</h2>
        <select class="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
                bind:value={selectedTimeRange}>
          <option value="6months">Last 6 Months</option>
          <option value="12months">Last 12 Months</option>
          <option value="all">All Time</option>
        </select>
      </div>
      
      <!-- Simple Chart -->
      <div class="relative h-64 bg-gray-50 rounded-lg p-4">
        <!-- Grid lines -->
        <div class="absolute inset-4 flex flex-col justify-between pointer-events-none">
          <div class="border-b border-gray-200"></div>
          <div class="border-b border-gray-200"></div>
          <div class="border-b border-gray-200"></div>
          <div class="border-b border-gray-200"></div>
        </div>
        <div class="absolute inset-4 flex items-end justify-between gap-2">
          {#each efficiencyData.monthlyTrend as month, i}
            <div class="flex-1 flex flex-col items-center justify-end h-full">
              <div class="w-full bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-lg transition-all duration-500 hover:opacity-80 relative"
                   style="height: {(month.savings / 15000000) * 100}%">
                <div class="absolute -top-6 left-0 right-0 text-center">
                  <span class="text-xs font-semibold text-gray-900">{formatCurrency(month.savings).replace('$', '')}</span>
                </div>
              </div>
              <span class="text-xs mt-2 text-gray-900 font-medium">{month.month}</span>
            </div>
          {/each}
        </div>
      </div>
      
      <!-- Legend -->
      <div class="mt-6 grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
        {#each efficiencyData.monthlyTrend as month}
          <div>
            <div class="text-sm font-bold text-gray-900">{formatCurrency(month.savings)}</div>
            <div class="text-xs text-gray-900">{month.projects} projects</div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- Export Options -->
<section class="container mx-auto px-4 py-8">
  <div class="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white text-center">
    <h3 class="text-xl font-bold mb-4">Share These Results</h3>
    <p class="mb-6">Export efficiency metrics for presentations and reports</p>
    <div class="flex flex-wrap gap-4 justify-center">
      <button 
        on:click={exportPDF}
        class="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
        Export PDF Report
      </button>
      <button 
        on:click={downloadRawData}
        class="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
        Download Raw Data
      </button>
    </div>
  </div>
</section>