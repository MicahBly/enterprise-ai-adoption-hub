import { c as create_ssr_component, v as validate_component, b as each, e as escape } from "./ssr.js";
import { I as Icon } from "./Icon.js";
import { b as base } from "./paths.js";
import { T as Tooltip } from "./Tooltip.js";
const File_spreadsheet = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
      }
    ],
    ["path", { "d": "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { "d": "M8 13h2" }],
    ["path", { "d": "M14 13h2" }],
    ["path", { "d": "M8 17h2" }],
    ["path", { "d": "M14 17h2" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "file-spreadsheet" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const css = {
  code: ".overflow-x-auto.svelte-y3dc1z.svelte-y3dc1z{scrollbar-width:thin;scrollbar-color:#cbd5e0 #f7fafc}.overflow-x-auto.svelte-y3dc1z.svelte-y3dc1z::-webkit-scrollbar{height:8px}.overflow-x-auto.svelte-y3dc1z.svelte-y3dc1z::-webkit-scrollbar-track{background:#f7fafc;border-radius:4px}.overflow-x-auto.svelte-y3dc1z.svelte-y3dc1z::-webkit-scrollbar-thumb{background:#cbd5e0;border-radius:4px}.overflow-x-auto.svelte-y3dc1z.svelte-y3dc1z::-webkit-scrollbar-thumb:hover{background:#a0aec0}.sticky.svelte-y3dc1z.svelte-y3dc1z{position:sticky}.overflow-x-auto.svelte-y3dc1z:has(> div:not(:first-child)) .sticky.svelte-y3dc1z{box-shadow:2px 0 4px -2px rgba(0, 0, 0, 0.1)}",
  map: `{"version":3,"file":"AdoptionMatrix.svelte","sources":["AdoptionMatrix.svelte"],"sourcesContent":["<script>\\n\\timport { onMount } from 'svelte';\\n\\timport { base } from '$app/paths';\\n\\timport Tooltip from '$lib/components/ui/Tooltip.svelte';\\n\\n\\t// Accept matrixData as a prop\\n\\texport let matrixData = {\\n\\t\\tcategories: [],\\n\\t\\tdepartments: [],\\n\\t\\tdata: []\\n\\t};\\n\\n\\tlet divisions = [];\\n\\tlet aiTools = [];\\n\\tlet adoptionData = {};\\n\\tlet loading = true;\\n\\tlet error = null;\\n\\n\\t// Use prop data if provided, otherwise fetch from API\\n\\t$: if (matrixData && matrixData.categories.length > 0) {\\n\\t\\t// Convert from parent format to our format\\n\\t\\taiTools = matrixData.categories;\\n\\t\\tdivisions = matrixData.departments;\\n\\t\\t\\n\\t\\t// Build adoptionData object from matrix data\\n\\t\\tadoptionData = {};\\n\\t\\tdivisions.forEach((div, divIndex) => {\\n\\t\\t\\tadoptionData[div] = {};\\n\\t\\t\\taiTools.forEach((tool, toolIndex) => {\\n\\t\\t\\t\\tadoptionData[div][tool] = matrixData.data[toolIndex][divIndex];\\n\\t\\t\\t});\\n\\t\\t});\\n\\t\\t\\n\\t\\tloading = false;\\n\\t}\\n\\n\\t// Fetch adoption data from API if no prop data\\n\\tasync function fetchAdoptionData() {\\n\\t\\tif (matrixData && matrixData.categories.length > 0) {\\n\\t\\t\\treturn; // Use prop data instead\\n\\t\\t}\\n\\t\\t\\n\\t\\ttry {\\n\\t\\t\\tloading = true;\\n\\t\\t\\tconst response = await fetch(\`\${base}/api/adoption-matrix\`);\\n\\t\\t\\t\\n\\t\\t\\tif (!response.ok) {\\n\\t\\t\\t\\tthrow new Error(\`Failed to fetch adoption data: \${response.statusText}\`);\\n\\t\\t\\t}\\n\\t\\t\\t\\n\\t\\t\\tconst data = await response.json();\\n\\t\\t\\tadoptionData = data.matrix;\\n\\t\\t\\tdivisions = data.divisions;\\n\\t\\t\\taiTools = data.tools;\\n\\t\\t\\tloading = false;\\n\\t\\t} catch (err) {\\n\\t\\t\\terror = err.message;\\n\\t\\t\\tloading = false;\\n\\t\\t}\\n\\t}\\n\\n\\tonMount(() => {\\n\\t\\tfetchAdoptionData();\\n\\t});\\n\\n\\t// Function to get color based on adoption percentage\\n\\tfunction getColorForPercentage(percentage) {\\n\\t\\tif (percentage >= 80) return 'bg-green-700';\\n\\t\\tif (percentage >= 60) return 'bg-green-600';\\n\\t\\tif (percentage >= 40) return 'bg-yellow-600';\\n\\t\\tif (percentage >= 20) return 'bg-orange-600';\\n\\t\\treturn 'bg-red-600';\\n\\t}\\n\\n\\t// Function to get text color based on background\\n\\tfunction getTextColor(percentage) {\\n\\t\\t// Always use white text for better contrast\\n\\t\\treturn 'text-white';\\n\\t}\\n\\n\\t// Export data function\\n\\tfunction exportData() {\\n\\t\\tconst exportObject = {\\n\\t\\t\\ttimestamp: new Date().toISOString(),\\n\\t\\t\\tdivisions,\\n\\t\\t\\taiTools,\\n\\t\\t\\tadoptionData,\\n\\t\\t\\tmetadata: {\\n\\t\\t\\t\\ttitle: 'FOX Corporation AI Tool Adoption Matrix',\\n\\t\\t\\t\\tdescription: 'Percentage adoption of various AI tools across FOX Corporation divisions including News Media, Sports, Entertainment, Television Stations, Tubi, and Other Assets'\\n\\t\\t\\t}\\n\\t\\t};\\n\\t\\t\\n\\t\\tconsole.log('Adoption Matrix Data Export:', exportObject);\\n\\t\\tconsole.log('JSON Format:', JSON.stringify(exportObject, null, 2));\\n\\t}\\n\\n\\t// Calculate averages\\n\\tfunction calculateDivisionAverage(division) {\\n\\t\\tif (!adoptionData[division]) return 0;\\n\\t\\tconst values = Object.values(adoptionData[division]);\\n\\t\\treturn Math.round(values.reduce((sum, val) => sum + val, 0) / values.length);\\n\\t}\\n\\n\\tfunction calculateToolAverage(tool) {\\n\\t\\tif (!divisions.length || !adoptionData) return 0;\\n\\t\\tconst values = divisions.map(div => adoptionData[div]?.[tool] || 0);\\n\\t\\treturn Math.round(values.reduce((sum, val) => sum + val, 0) / values.length);\\n\\t}\\n\\n\\tfunction calculateOverallAverage() {\\n\\t\\tif (!divisions.length) return 0;\\n\\t\\treturn Math.round(divisions.reduce((sum, div) => sum + calculateDivisionAverage(div), 0) / divisions.length);\\n\\t}\\n\\n\\t// Get division-specific tooltips\\n\\tfunction getDivisionTooltip(division) {\\n\\t\\tconst tooltips = {\\n\\t\\t\\t'Fox News Media': 'NLP & content generation leader',\\n\\t\\t\\t'Fox Sports Media Group': 'Computer vision excellence',\\n\\t\\t\\t'Fox Entertainment': 'Creative AI production',\\n\\t\\t\\t'Fox Television Stations': 'Local news AI innovation',\\n\\t\\t\\t'Tubi Media Group': 'Streaming AI platform',\\n\\t\\t\\t'Other Assets': 'Digital ventures & emerging media'\\n\\t\\t};\\n\\t\\treturn tooltips[division] || \`\${division} AI initiatives\`;\\n\\t}\\n<\/script>\\n\\n<div class=\\"w-full bg-white rounded-lg shadow-lg p-6\\">\\n\\t<div class=\\"flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6\\">\\n\\t\\t<div>\\n\\t\\t\\t<h2 class=\\"text-2xl font-bold text-gray-900\\">AI Tool Adoption Matrix</h2>\\n\\t\\t\\t<p class=\\"text-gray-600 mt-1\\">Adoption percentages across FOX Corporation divisions</p>\\n\\t\\t</div>\\n\\t\\t<Tooltip content=\\"Download executive-ready visualizations for board presentations\\" placement=\\"bottom\\">\\n\\t\\t\\t<button\\n\\t\\t\\t\\ton:click={exportData}\\n\\t\\t\\t\\tclass=\\"mt-4 sm:mt-0 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2\\"\\n\\t\\t\\t>\\n\\t\\t\\t\\t<svg class=\\"w-5 h-5\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\">\\n\\t\\t\\t\\t\\t<path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4\\" />\\n\\t\\t\\t\\t</svg>\\n\\t\\t\\t\\tExport Data\\n\\t\\t\\t</button>\\n\\t\\t</Tooltip>\\n\\t</div>\\n\\n\\t<!-- Color Legend -->\\n\\t<div class=\\"mb-6 flex flex-wrap gap-4 text-sm\\">\\n\\t\\t<Tooltip content=\\"Market leaders: Full integration, ROI realized, scaling success\\" placement=\\"bottom\\">\\n\\t\\t\\t<div class=\\"flex items-center gap-2\\">\\n\\t\\t\\t\\t<div class=\\"w-4 h-4 bg-green-700 rounded\\"></div>\\n\\t\\t\\t\\t<span class=\\"text-gray-700\\">80-100% Adoption</span>\\n\\t\\t\\t</div>\\n\\t\\t</Tooltip>\\n\\t\\t<Tooltip content=\\"Strong adoption: Positive ROI, expanding use cases\\" placement=\\"bottom\\">\\n\\t\\t\\t<div class=\\"flex items-center gap-2\\">\\n\\t\\t\\t\\t<div class=\\"w-4 h-4 bg-green-600 rounded\\"></div>\\n\\t\\t\\t\\t<span class=\\"text-gray-700\\">60-79% Adoption</span>\\n\\t\\t\\t</div>\\n\\t\\t</Tooltip>\\n\\t\\t<Tooltip content=\\"Moderate progress: Early wins, needs strategic push\\" placement=\\"bottom\\">\\n\\t\\t\\t<div class=\\"flex items-center gap-2\\">\\n\\t\\t\\t\\t<div class=\\"w-4 h-4 bg-yellow-600 rounded\\"></div>\\n\\t\\t\\t\\t<span class=\\"text-gray-700\\">40-59% Adoption</span>\\n\\t\\t\\t</div>\\n\\t\\t</Tooltip>\\n\\t\\t<Tooltip content=\\"Early stage: Pilot phase, investment opportunity\\" placement=\\"bottom\\">\\n\\t\\t\\t<div class=\\"flex items-center gap-2\\">\\n\\t\\t\\t\\t<div class=\\"w-4 h-4 bg-orange-600 rounded\\"></div>\\n\\t\\t\\t\\t<span class=\\"text-gray-700\\">20-39% Adoption</span>\\n\\t\\t\\t</div>\\n\\t\\t</Tooltip>\\n\\t\\t<Tooltip content=\\"Lagging: High risk of competitive disadvantage\\" placement=\\"bottom\\">\\n\\t\\t\\t<div class=\\"flex items-center gap-2\\">\\n\\t\\t\\t\\t<div class=\\"w-4 h-4 bg-red-600 rounded\\"></div>\\n\\t\\t\\t\\t<span class=\\"text-gray-700\\">0-19% Adoption</span>\\n\\t\\t\\t</div>\\n\\t\\t</Tooltip>\\n\\t</div>\\n\\n\\t<!-- Loading State -->\\n\\t{#if loading}\\n\\t\\t<div class=\\"flex items-center justify-center py-12\\">\\n\\t\\t\\t<div class=\\"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600\\"></div>\\n\\t\\t\\t<span class=\\"ml-3 text-gray-600\\">Loading adoption data...</span>\\n\\t\\t</div>\\n\\t{:else if error}\\n\\t\\t<!-- Error State -->\\n\\t\\t<div class=\\"flex items-center justify-center py-12\\">\\n\\t\\t\\t<div class=\\"text-center\\">\\n\\t\\t\\t\\t<div class=\\"text-red-600 mb-2\\">⚠️ Error loading data</div>\\n\\t\\t\\t\\t<div class=\\"text-gray-600 text-sm\\">{error}</div>\\n\\t\\t\\t\\t<button \\n\\t\\t\\t\\t\\ton:click={fetchAdoptionData}\\n\\t\\t\\t\\t\\tclass=\\"mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\tRetry\\n\\t\\t\\t\\t</button>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t{:else}\\n\\t\\t<!-- Scrollable Table Container -->\\n\\t\\t<div class=\\"overflow-x-auto -mx-6 px-6\\">\\n\\t\\t\\t<div class=\\"inline-block min-w-full align-middle\\">\\n\\t\\t\\t\\t<table class=\\"min-w-full divide-y divide-gray-200\\">\\n\\t\\t\\t\\t<thead class=\\"bg-gray-50\\">\\n\\t\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t\\t<th class=\\"sticky left-0 z-10 bg-gray-50 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider\\">\\n\\t\\t\\t\\t\\t\\t\\tDivision\\n\\t\\t\\t\\t\\t\\t</th>\\n\\t\\t\\t\\t\\t\\t{#each aiTools as tool}\\n\\t\\t\\t\\t\\t\\t\\t<th class=\\"px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Tooltip content=\\"{tool} - Click to see all implementations\\" placement=\\"bottom\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<a href=\\"{base}/taxonomy/{encodeURIComponent(tool)}\\" class=\\"cursor-pointer hover:text-blue-600 transition-colors\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{tool}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t\\t\\t\\t\\t</Tooltip>\\n\\t\\t\\t\\t\\t\\t\\t</th>\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t\\t<th class=\\"px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider\\">\\n\\t\\t\\t\\t\\t\\t\\tAvg\\n\\t\\t\\t\\t\\t\\t</th>\\n\\t\\t\\t\\t\\t</tr>\\n\\t\\t\\t\\t</thead>\\n\\t\\t\\t\\t<tbody class=\\"bg-white divide-y divide-gray-200\\">\\n\\t\\t\\t\\t\\t{#each divisions as division}\\n\\t\\t\\t\\t\\t\\t<tr class=\\"hover:bg-gray-50 transition-colors duration-150\\">\\n\\t\\t\\t\\t\\t\\t\\t<td class=\\"sticky left-0 z-10 bg-white px-4 py-3 text-sm font-medium text-gray-900 whitespace-nowrap\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Tooltip content=\\"{getDivisionTooltip(division)}\\" placement=\\"right\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<span class=\\"cursor-help\\">{division}</span>\\n\\t\\t\\t\\t\\t\\t\\t\\t</Tooltip>\\n\\t\\t\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t\\t\\t{#each aiTools as tool}\\n\\t\\t\\t\\t\\t\\t\\t\\t{@const percentage = adoptionData[division]?.[tool] || 0}\\n\\t\\t\\t\\t\\t\\t\\t\\t<td class=\\"px-3 py-3 text-sm text-center\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"inline-flex items-center justify-center w-20 h-10 rounded-md {getColorForPercentage(percentage)} {getTextColor(percentage)} font-semibold text-sm shadow-sm\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{percentage}%\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t\\t\\t<td class=\\"px-3 py-3 text-sm text-center\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<Tooltip content=\\"Benchmark performance - identify leaders and laggards\\" placement=\\"left\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"inline-flex items-center justify-center w-20 h-10 rounded-md bg-gray-800 text-white font-semibold text-sm shadow-sm\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{calculateDivisionAverage(division)}%\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t</Tooltip>\\n\\t\\t\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t\\t</tr>\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t<!-- Tool Averages Row -->\\n\\t\\t\\t\\t\\t<tr class=\\"bg-gray-50 font-medium\\">\\n\\t\\t\\t\\t\\t\\t<td class=\\"sticky left-0 z-10 bg-gray-50 px-4 py-3 text-sm text-gray-900\\">\\n\\t\\t\\t\\t\\t\\t\\tAverage\\n\\t\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t\\t{#each aiTools as tool}\\n\\t\\t\\t\\t\\t\\t\\t<td class=\\"px-3 py-3 text-sm text-center\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"inline-flex items-center justify-center w-20 h-10 rounded-md bg-gray-800 text-white font-semibold text-sm shadow-sm\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{calculateToolAverage(tool)}%\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t\\t<td class=\\"px-3 py-3 text-sm text-center\\">\\n\\t\\t\\t\\t\\t\\t\\t<Tooltip content=\\"FOX's AI maturity score - tracking toward 75% target by Q4\\" placement=\\"left\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"inline-flex items-center justify-center w-20 h-10 rounded-md bg-gray-900 text-white font-bold text-sm shadow-sm\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{calculateOverallAverage()}%\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t</Tooltip>\\n\\t\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t</tr>\\n\\t\\t\\t\\t</tbody>\\n\\t\\t\\t</table>\\n\\t\\t</div>\\n\\t</div>\\n\\n\\t<!-- Mobile Scroll Indicator -->\\n\\t<div class=\\"mt-4 text-center text-sm text-gray-500 sm:hidden\\">\\n\\t\\t<div class=\\"flex items-center justify-center gap-1\\">\\n\\t\\t\\t<svg class=\\"w-4 h-4\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\">\\n\\t\\t\\t\\t<path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M7 16l-4-4m0 0l4-4m-4 4h18\\" />\\n\\t\\t\\t</svg>\\n\\t\\t\\t<span>Scroll horizontally to see all tools</span>\\n\\t\\t\\t<svg class=\\"w-4 h-4\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\">\\n\\t\\t\\t\\t<path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M17 8l4 4m0 0l-4 4m4-4H3\\" />\\n\\t\\t\\t</svg>\\n\\t\\t</div>\\n\\t</div>\\n\\t{/if}\\n</div>\\n\\n<style>\\n\\t/* Custom scrollbar for better UX */\\n\\t.overflow-x-auto {\\n\\t\\tscrollbar-width: thin;\\n\\t\\tscrollbar-color: #cbd5e0 #f7fafc;\\n\\t}\\n\\n\\t.overflow-x-auto::-webkit-scrollbar {\\n\\t\\theight: 8px;\\n\\t}\\n\\n\\t.overflow-x-auto::-webkit-scrollbar-track {\\n\\t\\tbackground: #f7fafc;\\n\\t\\tborder-radius: 4px;\\n\\t}\\n\\n\\t.overflow-x-auto::-webkit-scrollbar-thumb {\\n\\t\\tbackground: #cbd5e0;\\n\\t\\tborder-radius: 4px;\\n\\t}\\n\\n\\t.overflow-x-auto::-webkit-scrollbar-thumb:hover {\\n\\t\\tbackground: #a0aec0;\\n\\t}\\n\\n\\t/* Ensure sticky positioning works properly */\\n\\t.sticky {\\n\\t\\tposition: sticky;\\n\\t}\\n\\n\\t/* Add shadow to sticky column on scroll */\\n\\t.overflow-x-auto:has(> div:not(:first-child)) .sticky {\\n\\t\\tbox-shadow: 2px 0 4px -2px rgba(0, 0, 0, 0.1);\\n\\t}\\n</style>"],"names":[],"mappings":"AAqSC,4CAAiB,CAChB,eAAe,CAAE,IAAI,CACrB,eAAe,CAAE,OAAO,CAAC,OAC1B,CAEA,4CAAgB,mBAAoB,CACnC,MAAM,CAAE,GACT,CAEA,4CAAgB,yBAA0B,CACzC,UAAU,CAAE,OAAO,CACnB,aAAa,CAAE,GAChB,CAEA,4CAAgB,yBAA0B,CACzC,UAAU,CAAE,OAAO,CACnB,aAAa,CAAE,GAChB,CAEA,4CAAgB,yBAAyB,MAAO,CAC/C,UAAU,CAAE,OACb,CAGA,mCAAQ,CACP,QAAQ,CAAE,MACX,CAGA,8BAAgB,KAAK,CAAC,CAAC,GAAG,KAAK,YAAY,CAAC,CAAC,CAAC,qBAAQ,CACrD,UAAU,CAAE,GAAG,CAAC,CAAC,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAC7C"}`
};
function getColorForPercentage(percentage) {
  if (percentage >= 80) return "bg-green-700";
  if (percentage >= 60) return "bg-green-600";
  if (percentage >= 40) return "bg-yellow-600";
  if (percentage >= 20) return "bg-orange-600";
  return "bg-red-600";
}
function getTextColor(percentage) {
  return "text-white";
}
function getDivisionTooltip(division) {
  const tooltips = {
    "Fox News Media": "NLP & content generation leader",
    "Fox Sports Media Group": "Computer vision excellence",
    "Fox Entertainment": "Creative AI production",
    "Fox Television Stations": "Local news AI innovation",
    "Tubi Media Group": "Streaming AI platform",
    "Other Assets": "Digital ventures & emerging media"
  };
  return tooltips[division] || `${division} AI initiatives`;
}
const AdoptionMatrix = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { matrixData = {
    categories: [],
    departments: [],
    data: []
  } } = $$props;
  let divisions = [];
  let aiTools = [];
  let adoptionData = {};
  let loading = true;
  function calculateDivisionAverage(division) {
    if (!adoptionData[division]) return 0;
    const values = Object.values(adoptionData[division]);
    return Math.round(values.reduce((sum, val) => sum + val, 0) / values.length);
  }
  function calculateToolAverage(tool) {
    if (!divisions.length || !adoptionData) return 0;
    const values = divisions.map((div) => adoptionData[div]?.[tool] || 0);
    return Math.round(values.reduce((sum, val) => sum + val, 0) / values.length);
  }
  function calculateOverallAverage() {
    if (!divisions.length) return 0;
    return Math.round(divisions.reduce((sum, div) => sum + calculateDivisionAverage(div), 0) / divisions.length);
  }
  if ($$props.matrixData === void 0 && $$bindings.matrixData && matrixData !== void 0) $$bindings.matrixData(matrixData);
  $$result.css.add(css);
  {
    if (matrixData && matrixData.categories.length > 0) {
      aiTools = matrixData.categories;
      divisions = matrixData.departments;
      adoptionData = {};
      divisions.forEach((div, divIndex) => {
        adoptionData[div] = {};
        aiTools.forEach((tool, toolIndex) => {
          adoptionData[div][tool] = matrixData.data[toolIndex][divIndex];
        });
      });
      loading = false;
    }
  }
  return `<div class="w-full bg-white rounded-lg shadow-lg p-6"><div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6"><div data-svelte-h="svelte-9ehxil"><h2 class="text-2xl font-bold text-gray-900">AI Tool Adoption Matrix</h2> <p class="text-gray-600 mt-1">Adoption percentages across FOX Corporation divisions</p></div> ${validate_component(Tooltip, "Tooltip").$$render(
    $$result,
    {
      content: "Download executive-ready visualizations for board presentations",
      placement: "bottom"
    },
    {},
    {
      default: () => {
        return `<button class="mt-4 sm:mt-0 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2" data-svelte-h="svelte-c269be"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
				Export Data</button>`;
      }
    }
  )}</div>  <div class="mb-6 flex flex-wrap gap-4 text-sm">${validate_component(Tooltip, "Tooltip").$$render(
    $$result,
    {
      content: "Market leaders: Full integration, ROI realized, scaling success",
      placement: "bottom"
    },
    {},
    {
      default: () => {
        return `<div class="flex items-center gap-2" data-svelte-h="svelte-153p07h"><div class="w-4 h-4 bg-green-700 rounded"></div> <span class="text-gray-700">80-100% Adoption</span></div>`;
      }
    }
  )} ${validate_component(Tooltip, "Tooltip").$$render(
    $$result,
    {
      content: "Strong adoption: Positive ROI, expanding use cases",
      placement: "bottom"
    },
    {},
    {
      default: () => {
        return `<div class="flex items-center gap-2" data-svelte-h="svelte-dtpq1x"><div class="w-4 h-4 bg-green-600 rounded"></div> <span class="text-gray-700">60-79% Adoption</span></div>`;
      }
    }
  )} ${validate_component(Tooltip, "Tooltip").$$render(
    $$result,
    {
      content: "Moderate progress: Early wins, needs strategic push",
      placement: "bottom"
    },
    {},
    {
      default: () => {
        return `<div class="flex items-center gap-2" data-svelte-h="svelte-1651i1c"><div class="w-4 h-4 bg-yellow-600 rounded"></div> <span class="text-gray-700">40-59% Adoption</span></div>`;
      }
    }
  )} ${validate_component(Tooltip, "Tooltip").$$render(
    $$result,
    {
      content: "Early stage: Pilot phase, investment opportunity",
      placement: "bottom"
    },
    {},
    {
      default: () => {
        return `<div class="flex items-center gap-2" data-svelte-h="svelte-1vhdjqu"><div class="w-4 h-4 bg-orange-600 rounded"></div> <span class="text-gray-700">20-39% Adoption</span></div>`;
      }
    }
  )} ${validate_component(Tooltip, "Tooltip").$$render(
    $$result,
    {
      content: "Lagging: High risk of competitive disadvantage",
      placement: "bottom"
    },
    {},
    {
      default: () => {
        return `<div class="flex items-center gap-2" data-svelte-h="svelte-1pezba3"><div class="w-4 h-4 bg-red-600 rounded"></div> <span class="text-gray-700">0-19% Adoption</span></div>`;
      }
    }
  )}</div>  ${loading ? `<div class="flex items-center justify-center py-12" data-svelte-h="svelte-1wfkv9c"><div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div> <span class="ml-3 text-gray-600">Loading adoption data...</span></div>` : `${` <div class="overflow-x-auto -mx-6 px-6 svelte-y3dc1z"><div class="inline-block min-w-full align-middle"><table class="min-w-full divide-y divide-gray-200"><thead class="bg-gray-50"><tr><th class="sticky left-0 z-10 bg-gray-50 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider svelte-y3dc1z" data-svelte-h="svelte-1r9y6yk">Division</th> ${each(aiTools, (tool) => {
    return `<th class="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        content: tool + " - Click to see all implementations",
        placement: "bottom"
      },
      {},
      {
        default: () => {
          return `<a href="${escape(base, true) + "/taxonomy/" + escape(encodeURIComponent(tool), true)}" class="cursor-pointer hover:text-blue-600 transition-colors">${escape(tool)}</a> `;
        }
      }
    )} </th>`;
  })} <th class="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider" data-svelte-h="svelte-tl1otq">Avg</th></tr></thead> <tbody class="bg-white divide-y divide-gray-200">${each(divisions, (division) => {
    return `<tr class="hover:bg-gray-50 transition-colors duration-150"><td class="sticky left-0 z-10 bg-white px-4 py-3 text-sm font-medium text-gray-900 whitespace-nowrap svelte-y3dc1z">${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        content: getDivisionTooltip(division),
        placement: "right"
      },
      {},
      {
        default: () => {
          return `<span class="cursor-help">${escape(division)}</span> `;
        }
      }
    )}</td> ${each(aiTools, (tool) => {
      let percentage = adoptionData[division]?.[tool] || 0;
      return ` <td class="px-3 py-3 text-sm text-center"><div class="${"inline-flex items-center justify-center w-20 h-10 rounded-md " + escape(getColorForPercentage(percentage), true) + " " + escape(getTextColor(), true) + " font-semibold text-sm shadow-sm svelte-y3dc1z"}">${escape(percentage)}%</div> </td>`;
    })} <td class="px-3 py-3 text-sm text-center">${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        content: "Benchmark performance - identify leaders and laggards",
        placement: "left"
      },
      {},
      {
        default: () => {
          return `<div class="inline-flex items-center justify-center w-20 h-10 rounded-md bg-gray-800 text-white font-semibold text-sm shadow-sm">${escape(calculateDivisionAverage(division))}%</div> `;
        }
      }
    )}</td> </tr>`;
  })}  <tr class="bg-gray-50 font-medium"><td class="sticky left-0 z-10 bg-gray-50 px-4 py-3 text-sm text-gray-900 svelte-y3dc1z" data-svelte-h="svelte-om6lrm">Average</td> ${each(aiTools, (tool) => {
    return `<td class="px-3 py-3 text-sm text-center"><div class="inline-flex items-center justify-center w-20 h-10 rounded-md bg-gray-800 text-white font-semibold text-sm shadow-sm">${escape(calculateToolAverage(tool))}%</div> </td>`;
  })} <td class="px-3 py-3 text-sm text-center">${validate_component(Tooltip, "Tooltip").$$render(
    $$result,
    {
      content: "FOX's AI maturity score - tracking toward 75% target by Q4",
      placement: "left"
    },
    {},
    {
      default: () => {
        return `<div class="inline-flex items-center justify-center w-20 h-10 rounded-md bg-gray-900 text-white font-bold text-sm shadow-sm">${escape(calculateOverallAverage())}%</div>`;
      }
    }
  )}</td></tr></tbody></table></div></div>  <div class="mt-4 text-center text-sm text-gray-500 sm:hidden" data-svelte-h="svelte-gtc7dz"><div class="flex items-center justify-center gap-1"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg> <span>Scroll horizontally to see all tools</span> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></div></div>`}`} </div>`;
});
export {
  AdoptionMatrix as A,
  File_spreadsheet as F
};
