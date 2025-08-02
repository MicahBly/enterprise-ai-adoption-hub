import { c as create_ssr_component, v as validate_component, e as escape, b as each, q as createEventDispatcher, d as add_attribute } from "./ssr.js";
import { T as Tooltip } from "./Tooltip.js";
/* empty css                                        */
import { b as base } from "./paths.js";
/* empty css                                          */
const css$2 = {
  code: ".line-clamp-3.svelte-12rp2s0{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}",
  map: `{"version":3,"file":"UseCaseCard.svelte","sources":["UseCaseCard.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Tooltip from \\"$lib/components/ui/Tooltip.svelte\\";\\nimport { fade, scale } from \\"svelte/transition\\";\\nimport { quintOut } from \\"svelte/easing\\";\\nimport { base } from \\"$app/paths\\";\\nexport let useCase;\\nexport let index = 0;\\n$: index;\\nconst statusColors = {\\n  \\"Submitted\\": { bg: \\"bg-gray-100\\", text: \\"text-gray-700\\", border: \\"border-gray-300\\" },\\n  \\"Under Review\\": { bg: \\"bg-yellow-100\\", text: \\"text-yellow-700\\", border: \\"border-yellow-300\\" },\\n  \\"In Development\\": { bg: \\"bg-blue-100\\", text: \\"text-blue-700\\", border: \\"border-blue-300\\" },\\n  \\"Testing\\": { bg: \\"bg-purple-100\\", text: \\"text-purple-700\\", border: \\"border-purple-300\\" },\\n  \\"Deployed\\": { bg: \\"bg-green-100\\", text: \\"text-green-700\\", border: \\"border-green-300\\" },\\n  \\"On Hold\\": { bg: \\"bg-orange-100\\", text: \\"text-orange-700\\", border: \\"border-orange-300\\" },\\n  \\"Rejected\\": { bg: \\"bg-red-100\\", text: \\"text-red-700\\", border: \\"border-red-300\\" },\\n  \\"Completed\\": { bg: \\"bg-emerald-100\\", text: \\"text-emerald-700\\", border: \\"border-emerald-300\\" }\\n};\\nconst statusMessages = {\\n  \\"Submitted\\": \\"Initial proposal awaiting review - Expect feedback within 1-2 weeks\\",\\n  \\"Under Review\\": \\"Business case validation in progress - Decision expected within 5-7 days\\",\\n  \\"In Development\\": \\"Active implementation phase - MVP delivery targeted within current sprint\\",\\n  \\"Testing\\": \\"Solution validation and quality assurance - Production deployment imminent\\",\\n  \\"Deployed\\": \\"Live in production - Monitor KPIs and gather user feedback for optimization\\",\\n  \\"On Hold\\": \\"Temporarily paused - Awaiting resource allocation or strategic alignment\\",\\n  \\"Rejected\\": \\"Not aligned with current priorities - Consider resubmission with refined approach\\",\\n  \\"Completed\\": \\"Successfully delivered - Review outcomes for enterprise-wide scaling opportunities\\"\\n};\\n$: statusStyle = statusColors[useCase.status] || statusColors[\\"Submitted\\"];\\n$: statusMessage = statusMessages[useCase.status] || \\"Current implementation status\\";\\nfunction formatNumber(num) {\\n  if (!num) return \\"\\";\\n  if (num >= 1e6) return \`\${(num / 1e6).toFixed(1)}M\`;\\n  if (num >= 1e3) return \`\${(num / 1e3).toFixed(1)}K\`;\\n  return num.toString();\\n}\\nfunction truncateText(text, maxLength = 150) {\\n  if (text.length <= maxLength) return text;\\n  return text.substring(0, maxLength).trim() + \\"...\\";\\n}\\nfunction getReusePotentialMessage(potential) {\\n  if (!potential) return \\"Scalability assessment pending\\";\\n  if (potential.includes(\\"Very High\\")) return \\"Enterprise-ready solution - Proven ROI with immediate scalability across all divisions\\";\\n  if (potential.includes(\\"High\\")) return \\"Strong scaling candidate - Minimal adaptation needed for cross-functional deployment\\";\\n  if (potential.includes(\\"Medium\\")) return \\"Moderate reuse potential - Requires customization for broader organizational adoption\\";\\n  return \\"Limited scalability - Best suited for specific use cases within current division\\";\\n}\\n<\/script>\\n\\n<Tooltip \\n\\tcontent=\\"Click for detailed implementation roadmap, success metrics, and stakeholder contacts\\"\\n\\t\\n>\\n\\t<a\\n\\t\\thref=\\"{base}/use-cases/{useCase.id}\\"\\n\\t\\tclass=\\"group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-gray-300 cursor-pointer overflow-hidden block text-inherit no-underline\\"\\n\\t\\tin:scale={{ duration: 300, delay: index * 50, start: 0.95, opacity: 0, easing: quintOut }}\\n\\t>\\n\\t\\t<!-- Status ribbon -->\\n\\t\\t<div class=\\"absolute top-0 right-0 mt-4 mr-4\\">\\n\\t\\t\\t<Tooltip content={\`Implementation phase - \${statusMessage}\`} >\\n\\t\\t\\t\\t<span\\n\\t\\t\\t\\t\\tclass=\\"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border {statusStyle.bg} {statusStyle.text} {statusStyle.border}\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t{useCase.status}\\n\\t\\t\\t\\t</span>\\n\\t\\t\\t</Tooltip>\\n\\t\\t</div>\\n\\n\\t\\t<!-- Card content -->\\n\\t\\t<div class=\\"p-6\\">\\n\\t\\t\\t<!-- Header -->\\n\\t\\t\\t<div class=\\"pr-20\\">\\n\\t\\t\\t\\t<h3 class=\\"text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors\\">\\n\\t\\t\\t\\t\\t{useCase.title}\\n\\t\\t\\t\\t</h3>\\n\\t\\t\\t\\t<p class=\\"text-sm text-gray-700 mt-1\\">\\n\\t\\t\\t\\t\\t<Tooltip content={\`Click to see all AI initiatives from \${useCase.division}\`} >\\n\\t\\t\\t\\t\\t\\t<button \\n\\t\\t\\t\\t\\t\\t\\tclass=\\"hover:text-gray-700 cursor-pointer text-left bg-transparent border-none p-0 m-0 font-inherit\\" \\n\\t\\t\\t\\t\\t\\t\\ton:click|stopPropagation\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t{useCase.division}\\n\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t</Tooltip>\\n\\t\\t\\t\\t\\t<span class=\\"mx-1\\">•</span>\\n\\t\\t\\t\\t\\t{useCase.owner}\\n\\t\\t\\t\\t</p>\\n\\t\\t\\t</div>\\n\\n\\t\\t\\t<!-- Description -->\\n\\t\\t\\t<p class=\\"mt-3 text-sm text-gray-600 line-clamp-3\\">\\n\\t\\t\\t\\t{truncateText(useCase.description)}\\n\\t\\t\\t</p>\\n\\n\\t\\t\\t<!-- Impact section -->\\n\\t\\t\\t{#if useCase.impact}\\n\\t\\t\\t\\t<Tooltip content=\\"Measurable business outcomes validating ROI and strategic alignment\\" >\\n\\t\\t\\t\\t\\t<div class=\\"mt-4 text-sm text-gray-600\\">\\n\\t\\t\\t\\t\\t\\t<p class=\\"font-medium text-gray-700\\">Impact:</p>\\n\\t\\t\\t\\t\\t\\t<p class=\\"mt-1\\">{truncateText(useCase.impact, 100)}</p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</Tooltip>\\n\\t\\t\\t{/if}\\n\\n\\t\\t\\t<!-- Tags -->\\n\\t\\t\\t{#if useCase.tags && useCase.tags.length > 0}\\n\\t\\t\\t\\t<div class=\\"mt-4 flex flex-wrap gap-2\\">\\n\\t\\t\\t\\t\\t{#each useCase.tags.slice(0, 3) as tag}\\n\\t\\t\\t\\t\\t\\t<Tooltip content=\\"AI stack powering this solution - click to find similar implementations\\" >\\n\\t\\t\\t\\t\\t\\t\\t<a\\n\\t\\t\\t\\t\\t\\t\\t\\thref=\\"{base}/taxonomy/{encodeURIComponent(tag)}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors\\"\\n\\t\\t\\t\\t\\t\\t\\t\\ton:click|stopPropagation\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t{tag}\\n\\t\\t\\t\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t\\t\\t</Tooltip>\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t{#if useCase.tags.length > 3}\\n\\t\\t\\t\\t\\t\\t<span class=\\"inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700\\">\\n\\t\\t\\t\\t\\t\\t\\t+{useCase.tags.length - 3} more\\n\\t\\t\\t\\t\\t\\t</span>\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/if}\\n\\n\\t\\t\\t<!-- Reuse potential indicator -->\\n\\t\\t\\t{#if useCase.reusePotential}\\n\\t\\t\\t\\t<Tooltip content={getReusePotentialMessage(useCase.reusePotential)} >\\n\\t\\t\\t\\t\\t<div class=\\"absolute bottom-0 left-0 right-0 h-1 bg-gray-100\\">\\n\\t\\t\\t\\t\\t\\t<div \\n\\t\\t\\t\\t\\t\\t\\tclass=\\"h-full transition-all duration-200 {useCase.reusePotential.includes('Very High') ? 'w-full bg-emerald-600' : \\n\\t\\t\\t\\t\\t\\t\\t\\tuseCase.reusePotential.includes('High') ? 'w-3/4 bg-green-500' : \\n\\t\\t\\t\\t\\t\\t\\t\\tuseCase.reusePotential.includes('Medium') ? 'w-2/4 bg-yellow-400' : \\n\\t\\t\\t\\t\\t\\t\\t\\t'w-1/4 bg-gray-400'}\\"\\n\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</Tooltip>\\n\\t\\t\\t{/if}\\n\\t\\t</div>\\n\\n\\t\\t<!-- Hover overlay -->\\n\\t\\t<div class=\\"absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-200 pointer-events-none\\" />\\n\\t</a>\\n</Tooltip>\\n\\n<style>\\n\\t/* Line clamp utility for description truncation */\\n\\t.line-clamp-3 {\\n\\t\\tdisplay: -webkit-box;\\n\\t\\t-webkit-line-clamp: 3;\\n\\t\\t-webkit-box-orient: vertical;\\n\\t\\toverflow: hidden;\\n\\t}\\n</style>"],"names":[],"mappings":"AAoJC,4BAAc,CACb,OAAO,CAAE,WAAW,CACpB,kBAAkB,CAAE,CAAC,CACrB,kBAAkB,CAAE,QAAQ,CAC5B,QAAQ,CAAE,MACX"}`
};
function truncateText(text, maxLength = 150) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
}
function getReusePotentialMessage(potential) {
  if (!potential) return "Scalability assessment pending";
  if (potential.includes("Very High")) return "Enterprise-ready solution - Proven ROI with immediate scalability across all divisions";
  if (potential.includes("High")) return "Strong scaling candidate - Minimal adaptation needed for cross-functional deployment";
  if (potential.includes("Medium")) return "Moderate reuse potential - Requires customization for broader organizational adoption";
  return "Limited scalability - Best suited for specific use cases within current division";
}
const UseCaseCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let statusStyle;
  let statusMessage;
  let { useCase } = $$props;
  let { index = 0 } = $$props;
  const statusColors = {
    "Submitted": {
      bg: "bg-gray-100",
      text: "text-gray-700",
      border: "border-gray-300"
    },
    "Under Review": {
      bg: "bg-yellow-100",
      text: "text-yellow-700",
      border: "border-yellow-300"
    },
    "In Development": {
      bg: "bg-blue-100",
      text: "text-blue-700",
      border: "border-blue-300"
    },
    "Testing": {
      bg: "bg-purple-100",
      text: "text-purple-700",
      border: "border-purple-300"
    },
    "Deployed": {
      bg: "bg-green-100",
      text: "text-green-700",
      border: "border-green-300"
    },
    "On Hold": {
      bg: "bg-orange-100",
      text: "text-orange-700",
      border: "border-orange-300"
    },
    "Rejected": {
      bg: "bg-red-100",
      text: "text-red-700",
      border: "border-red-300"
    },
    "Completed": {
      bg: "bg-emerald-100",
      text: "text-emerald-700",
      border: "border-emerald-300"
    }
  };
  const statusMessages = {
    "Submitted": "Initial proposal awaiting review - Expect feedback within 1-2 weeks",
    "Under Review": "Business case validation in progress - Decision expected within 5-7 days",
    "In Development": "Active implementation phase - MVP delivery targeted within current sprint",
    "Testing": "Solution validation and quality assurance - Production deployment imminent",
    "Deployed": "Live in production - Monitor KPIs and gather user feedback for optimization",
    "On Hold": "Temporarily paused - Awaiting resource allocation or strategic alignment",
    "Rejected": "Not aligned with current priorities - Consider resubmission with refined approach",
    "Completed": "Successfully delivered - Review outcomes for enterprise-wide scaling opportunities"
  };
  if ($$props.useCase === void 0 && $$bindings.useCase && useCase !== void 0) $$bindings.useCase(useCase);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
  $$result.css.add(css$2);
  statusStyle = statusColors[useCase.status] || statusColors["Submitted"];
  statusMessage = statusMessages[useCase.status] || "Current implementation status";
  return `${validate_component(Tooltip, "Tooltip").$$render(
    $$result,
    {
      content: "Click for detailed implementation roadmap, success metrics, and stakeholder contacts"
    },
    {},
    {
      default: () => {
        return `<a href="${escape(base, true) + "/use-cases/" + escape(useCase.id, true)}" class="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-gray-300 cursor-pointer overflow-hidden block text-inherit no-underline"> <div class="absolute top-0 right-0 mt-4 mr-4">${validate_component(Tooltip, "Tooltip").$$render(
          $$result,
          {
            content: `Implementation phase - ${statusMessage}`
          },
          {},
          {
            default: () => {
              return `<span class="${"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border " + escape(statusStyle.bg, true) + " " + escape(statusStyle.text, true) + " " + escape(statusStyle.border, true) + " svelte-12rp2s0"}">${escape(useCase.status)}</span>`;
            }
          }
        )}</div>  <div class="p-6"> <div class="pr-20"><h3 class="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">${escape(useCase.title)}</h3> <p class="text-sm text-gray-700 mt-1">${validate_component(Tooltip, "Tooltip").$$render(
          $$result,
          {
            content: `Click to see all AI initiatives from ${useCase.division}`
          },
          {},
          {
            default: () => {
              return `<button class="hover:text-gray-700 cursor-pointer text-left bg-transparent border-none p-0 m-0 font-inherit">${escape(useCase.division)}</button>`;
            }
          }
        )} <span class="mx-1" data-svelte-h="svelte-3gu6cy">•</span> ${escape(useCase.owner)}</p></div>  <p class="mt-3 text-sm text-gray-600 line-clamp-3 svelte-12rp2s0">${escape(truncateText(useCase.description))}</p>  ${useCase.impact ? `${validate_component(Tooltip, "Tooltip").$$render(
          $$result,
          {
            content: "Measurable business outcomes validating ROI and strategic alignment"
          },
          {},
          {
            default: () => {
              return `<div class="mt-4 text-sm text-gray-600"><p class="font-medium text-gray-700" data-svelte-h="svelte-112prs3">Impact:</p> <p class="mt-1">${escape(truncateText(useCase.impact, 100))}</p></div>`;
            }
          }
        )}` : ``}  ${useCase.tags && useCase.tags.length > 0 ? `<div class="mt-4 flex flex-wrap gap-2">${each(useCase.tags.slice(0, 3), (tag) => {
          return `${validate_component(Tooltip, "Tooltip").$$render(
            $$result,
            {
              content: "AI stack powering this solution - click to find similar implementations"
            },
            {},
            {
              default: () => {
                return `<a href="${escape(base, true) + "/taxonomy/" + escape(encodeURIComponent(tag), true)}" class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">${escape(tag)}</a> `;
              }
            }
          )}`;
        })} ${useCase.tags.length > 3 ? `<span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">+${escape(useCase.tags.length - 3)} more</span>` : ``}</div>` : ``}  ${useCase.reusePotential ? `${validate_component(Tooltip, "Tooltip").$$render(
          $$result,
          {
            content: getReusePotentialMessage(useCase.reusePotential)
          },
          {},
          {
            default: () => {
              return `<div class="absolute bottom-0 left-0 right-0 h-1 bg-gray-100"><div class="${"h-full transition-all duration-200 " + escape(
                useCase.reusePotential.includes("Very High") ? "w-full bg-emerald-600" : useCase.reusePotential.includes("High") ? "w-3/4 bg-green-500" : useCase.reusePotential.includes("Medium") ? "w-2/4 bg-yellow-400" : "w-1/4 bg-gray-400",
                true
              )}"></div></div>`;
            }
          }
        )}` : ``}</div>  <div class="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-200 pointer-events-none"></div></a>`;
      }
    }
  )}`;
});
const css$1 = {
  code: '.filter-bar.svelte-lse2yw.svelte-lse2yw{background:#ffffff;border:1px solid #e5e7eb;border-radius:0.5rem;padding:1rem;margin-bottom:1.5rem;box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1)}.filter-container.svelte-lse2yw.svelte-lse2yw{display:flex;gap:1rem;flex-wrap:wrap;align-items:flex-end}.filter-group.svelte-lse2yw.svelte-lse2yw{display:flex;flex-direction:column;gap:0.375rem;min-width:0;flex:1 1 200px}.search-group.svelte-lse2yw.svelte-lse2yw{flex:2 1 300px}.clear-button-group.svelte-lse2yw.svelte-lse2yw{flex:0 0 auto;align-self:flex-end}.filter-label.svelte-lse2yw.svelte-lse2yw{font-size:0.875rem;font-weight:500;color:#374151}.filter-select.svelte-lse2yw.svelte-lse2yw,.tags-select.svelte-lse2yw.svelte-lse2yw,.search-input.svelte-lse2yw.svelte-lse2yw{height:2.5rem;padding:0 0.75rem;border:1px solid #d1d5db;border-radius:0.375rem;font-size:0.875rem;background:#ffffff;color:#111827;transition:border-color 0.15s ease}.filter-select.svelte-lse2yw.svelte-lse2yw:hover,.tags-select.svelte-lse2yw.svelte-lse2yw:hover,.search-input.svelte-lse2yw.svelte-lse2yw:hover{border-color:#9ca3af}.filter-select.svelte-lse2yw.svelte-lse2yw:focus,.tags-select.svelte-lse2yw.svelte-lse2yw:focus,.search-input.svelte-lse2yw.svelte-lse2yw:focus{outline:none;border-color:#3b82f6;box-shadow:0 0 0 3px rgba(59, 130, 246, 0.1)}.tags-dropdown-container.svelte-lse2yw.svelte-lse2yw{position:relative}.tags-select.svelte-lse2yw.svelte-lse2yw{width:100%;display:flex;align-items:center;justify-content:space-between;cursor:pointer;background:#ffffff;padding-right:2rem}.tags-select.has-selection.svelte-lse2yw.svelte-lse2yw{font-weight:500}.placeholder.svelte-lse2yw.svelte-lse2yw{color:#6b7280}.tag-count.svelte-lse2yw.svelte-lse2yw{color:#111827}.chevron.svelte-lse2yw.svelte-lse2yw{position:absolute;right:0.75rem;top:50%;transform:translateY(-50%);transition:transform 0.2s ease;color:#6b7280}.chevron.rotated.svelte-lse2yw.svelte-lse2yw{transform:translateY(-50%) rotate(180deg)}.tags-dropdown.svelte-lse2yw.svelte-lse2yw{position:absolute;top:calc(100% + 0.25rem);left:0;right:0;background:#ffffff;border:1px solid #d1d5db;border-radius:0.375rem;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1);z-index:10;max-height:300px;overflow:hidden;display:flex;flex-direction:column}.tags-header.svelte-lse2yw.svelte-lse2yw{padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;display:flex;justify-content:space-between;align-items:center;background:#f9fafb}.tags-selected-count.svelte-lse2yw.svelte-lse2yw{font-size:0.75rem;color:#6b7280;font-weight:500}.clear-tags-btn.svelte-lse2yw.svelte-lse2yw{font-size:0.75rem;color:#3b82f6;background:none;border:none;cursor:pointer;padding:0.25rem 0.5rem;border-radius:0.25rem;transition:background-color 0.15s ease}.clear-tags-btn.svelte-lse2yw.svelte-lse2yw:hover{background:#eff6ff}.tags-list.svelte-lse2yw.svelte-lse2yw{overflow-y:auto;max-height:250px}.tag-option.svelte-lse2yw.svelte-lse2yw{display:flex;align-items:center;padding:0.5rem 1rem;cursor:pointer;transition:background-color 0.15s ease}.tag-option.svelte-lse2yw.svelte-lse2yw:hover{background:#f9fafb}.tag-option.svelte-lse2yw input[type="checkbox"].svelte-lse2yw{margin-right:0.75rem;cursor:pointer}.tag-name.svelte-lse2yw.svelte-lse2yw{font-size:0.875rem;color:#374151}.search-wrapper.svelte-lse2yw.svelte-lse2yw{position:relative;width:100%}.search-icon.svelte-lse2yw.svelte-lse2yw{position:absolute;left:0.75rem;top:50%;transform:translateY(-50%);color:#6b7280;pointer-events:none}.search-input.svelte-lse2yw.svelte-lse2yw{width:100%;padding-left:2.5rem}.clear-filters-btn.svelte-lse2yw.svelte-lse2yw{display:flex;align-items:center;gap:0.5rem;padding:0 1rem;height:2.5rem;background:#ffffff;border:1px solid #d1d5db;border-radius:0.375rem;font-size:0.875rem;color:#6b7280;cursor:pointer;transition:all 0.15s ease;white-space:nowrap}.clear-filters-btn.svelte-lse2yw.svelte-lse2yw:hover{border-color:#9ca3af;color:#374151;background:#f9fafb}.active-tags.svelte-lse2yw.svelte-lse2yw{display:flex;flex-wrap:wrap;gap:0.5rem;margin-top:0.75rem;padding-top:0.75rem;border-top:1px solid #e5e7eb}.active-tag.svelte-lse2yw.svelte-lse2yw{display:inline-flex;align-items:center;gap:0.375rem;padding:0.25rem 0.625rem;background:#eff6ff;color:#3b82f6;border-radius:0.375rem;font-size:0.75rem;font-weight:500}.remove-tag.svelte-lse2yw.svelte-lse2yw{display:flex;align-items:center;justify-content:center;width:1rem;height:1rem;background:none;border:none;cursor:pointer;color:#3b82f6;border-radius:0.25rem;transition:background-color 0.15s ease}.remove-tag.svelte-lse2yw.svelte-lse2yw:hover{background:#dbeafe}@media(max-width: 768px){.filter-container.svelte-lse2yw.svelte-lse2yw{gap:0.75rem}.filter-group.svelte-lse2yw.svelte-lse2yw{flex:1 1 100%}.search-group.svelte-lse2yw.svelte-lse2yw{flex:1 1 100%}.tags-dropdown.svelte-lse2yw.svelte-lse2yw{position:fixed;top:auto;bottom:0;left:0;right:0;border-radius:0.75rem 0.75rem 0 0;max-height:70vh}}@media(max-width: 480px){.filter-bar.svelte-lse2yw.svelte-lse2yw{padding:0.75rem}.active-tags.svelte-lse2yw.svelte-lse2yw{gap:0.375rem}.active-tag.svelte-lse2yw.svelte-lse2yw{font-size:0.7rem;padding:0.2rem 0.5rem}}',
  map: `{"version":3,"file":"FilterBar.svelte","sources":["FilterBar.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { createEventDispatcher } from \\"svelte\\";\\nimport Tooltip from \\"$lib/components/ui/Tooltip.svelte\\";\\nexport let divisions = [];\\nexport let statuses = [];\\nexport let availableTags = [];\\nexport let selectedDivision = \\"\\";\\nexport let selectedTags = [];\\nexport let selectedStatus = \\"\\";\\nexport let searchQuery = \\"\\";\\nlet showTagsDropdown = false;\\nconst dispatch = createEventDispatcher();\\nfunction handleDivisionChange() {\\n  dispatch(\\"filterChange\\", {\\n    type: \\"division\\",\\n    value: selectedDivision\\n  });\\n}\\nfunction handleStatusChange() {\\n  dispatch(\\"filterChange\\", {\\n    type: \\"status\\",\\n    value: selectedStatus\\n  });\\n}\\nfunction handleSearchInput() {\\n  dispatch(\\"filterChange\\", {\\n    type: \\"search\\",\\n    value: searchQuery\\n  });\\n}\\nfunction toggleTag(tag) {\\n  if (selectedTags.includes(tag)) {\\n    selectedTags = selectedTags.filter((t) => t !== tag);\\n  } else {\\n    selectedTags = [...selectedTags, tag];\\n  }\\n  dispatch(\\"filterChange\\", {\\n    type: \\"tags\\",\\n    value: selectedTags\\n  });\\n}\\nfunction clearAllFilters() {\\n  selectedDivision = \\"\\";\\n  selectedTags = [];\\n  selectedStatus = \\"\\";\\n  searchQuery = \\"\\";\\n  dispatch(\\"clearFilters\\");\\n}\\nfunction clearTags() {\\n  selectedTags = [];\\n  dispatch(\\"filterChange\\", {\\n    type: \\"tags\\",\\n    value: selectedTags\\n  });\\n}\\n$: hasActiveFilters = selectedDivision || selectedTags.length > 0 || selectedStatus || searchQuery;\\nfunction handleClickOutside(event) {\\n  const target = event.target;\\n  if (!target.closest(\\".tags-dropdown-container\\")) {\\n    showTagsDropdown = false;\\n  }\\n}\\n<\/script>\\n\\n<svelte:window on:click={handleClickOutside} />\\n\\n<div class=\\"filter-bar\\">\\n  <div class=\\"filter-container\\">\\n    <!-- Division Filter -->\\n    <div class=\\"filter-group\\">\\n      <label for=\\"division-filter\\" class=\\"filter-label\\">Division</label>\\n      <Tooltip content=\\"Filter by division to explore AI initiatives across FOX's 6 major business units and 30+ brands\\" >\\n        <select\\n          id=\\"division-filter\\"\\n          class=\\"filter-select text-gray-900\\"\\n          bind:value={selectedDivision}\\n          on:change={handleDivisionChange}\\n        >\\n          <option value=\\"\\">All Divisions</option>\\n          {#each divisions as division}\\n            <option value={division}>{division}</option>\\n          {/each}\\n        </select>\\n      </Tooltip>\\n    </div>\\n    \\n    <!-- Tags Multi-Select -->\\n    <div class=\\"filter-group tags-dropdown-container\\">\\n      <label for=\\"tags-filter\\" class=\\"filter-label\\">Tags</label>\\n      <Tooltip content=\\"Combine AI technologies to discover innovative use case intersections\\" >\\n        <button\\n          id=\\"tags-filter\\"\\n          class=\\"tags-select\\"\\n          class:has-selection={selectedTags.length > 0}\\n          on:click|stopPropagation={() => showTagsDropdown = !showTagsDropdown}\\n        >\\n          {#if selectedTags.length === 0}\\n            <span class=\\"placeholder\\">Select tags...</span>\\n          {:else}\\n            <span class=\\"tag-count\\">{selectedTags.length} selected</span>\\n          {/if}\\n          <svg class=\\"chevron\\" class:rotated={showTagsDropdown} width=\\"12\\" height=\\"12\\" viewBox=\\"0 0 12 12\\">\\n            <path d=\\"M2 4L6 8L10 4\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" fill=\\"none\\"/>\\n          </svg>\\n        </button>\\n      </Tooltip>\\n      \\n      {#if showTagsDropdown}\\n        <div class=\\"tags-dropdown\\">\\n          <div class=\\"tags-header\\">\\n            <span class=\\"tags-selected-count\\">{selectedTags.length} selected</span>\\n            {#if selectedTags.length > 0}\\n              <button class=\\"clear-tags-btn\\" on:click={clearTags}>Clear</button>\\n            {/if}\\n          </div>\\n          <div class=\\"tags-list\\">\\n            {#each availableTags as tag}\\n              <label class=\\"tag-option\\">\\n                <input\\n                  type=\\"checkbox\\"\\n                  checked={selectedTags.includes(tag)}\\n                  on:change={() => toggleTag(tag)}\\n                />\\n                <span class=\\"tag-name\\">{tag}</span>\\n              </label>\\n            {/each}\\n          </div>\\n        </div>\\n      {/if}\\n    </div>\\n    \\n    <!-- Status Filter -->\\n    <div class=\\"filter-group\\">\\n      <label for=\\"status-filter\\" class=\\"filter-label\\">Status</label>\\n      <Tooltip content=\\"Track implementation lifecycle: Concept → Development → Pilot → Production\\" >\\n        <select\\n          id=\\"status-filter\\"\\n          class=\\"filter-select text-gray-900\\"\\n          bind:value={selectedStatus}\\n          on:change={handleStatusChange}\\n        >\\n          <option value=\\"\\">All Statuses</option>\\n          {#each statuses as status}\\n            <option value={status}>{status}</option>\\n          {/each}\\n        </select>\\n      </Tooltip>\\n    </div>\\n    \\n    <!-- Search Input -->\\n    <div class=\\"filter-group search-group\\">\\n      <label for=\\"search-input\\" class=\\"filter-label\\">Search</label>\\n      <Tooltip content=\\"AI-powered semantic search across titles, descriptions, impacts, and technical details\\" >\\n        <div class=\\"search-wrapper\\">\\n          <svg class=\\"search-icon\\" width=\\"16\\" height=\\"16\\" viewBox=\\"0 0 16 16\\">\\n            <path d=\\"M11.5 7a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z\\" stroke=\\"currentColor\\" stroke-width=\\"1.5\\" fill=\\"none\\"/>\\n            <path d=\\"M14 14l-3.5-3.5\\" stroke=\\"currentColor\\" stroke-width=\\"1.5\\" stroke-linecap=\\"round\\"/>\\n          </svg>\\n          <input\\n            id=\\"search-input\\"\\n            type=\\"text\\"\\n            class=\\"search-input\\"\\n            placeholder=\\"Search use cases...\\"\\n            bind:value={searchQuery}\\n            on:input={handleSearchInput}\\n          />\\n        </div>\\n      </Tooltip>\\n    </div>\\n    \\n    <!-- Clear Filters Button -->\\n    {#if hasActiveFilters}\\n      <div class=\\"filter-group clear-button-group\\">\\n        <Tooltip content=\\"Reset view to explore all AI initiatives across FOX\\" >\\n          <button class=\\"clear-filters-btn\\" on:click={clearAllFilters}>\\n            <svg width=\\"14\\" height=\\"14\\" viewBox=\\"0 0 14 14\\">\\n              <path d=\\"M2 2L12 12M2 12L12 2\\" stroke=\\"currentColor\\" stroke-width=\\"1.5\\" stroke-linecap=\\"round\\"/>\\n            </svg>\\n            Clear filters\\n          </button>\\n        </Tooltip>\\n      </div>\\n    {/if}\\n  </div>\\n  \\n  <!-- Active Filters Display -->\\n  {#if selectedTags.length > 0}\\n    <div class=\\"active-tags\\">\\n      {#each selectedTags as tag}\\n        <span class=\\"active-tag\\">\\n          {tag}\\n          <button class=\\"remove-tag\\" on:click={() => toggleTag(tag)}>\\n            <svg width=\\"10\\" height=\\"10\\" viewBox=\\"0 0 10 10\\">\\n              <path d=\\"M2 2L8 8M2 8L8 2\\" stroke=\\"currentColor\\" stroke-width=\\"1.5\\" stroke-linecap=\\"round\\"/>\\n            </svg>\\n          </button>\\n        </span>\\n      {/each}\\n    </div>\\n  {/if}\\n</div>\\n\\n<style>\\n  .filter-bar {\\n    background: #ffffff;\\n    border: 1px solid #e5e7eb;\\n    border-radius: 0.5rem;\\n    padding: 1rem;\\n    margin-bottom: 1.5rem;\\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\\n  }\\n  \\n  .filter-container {\\n    display: flex;\\n    gap: 1rem;\\n    flex-wrap: wrap;\\n    align-items: flex-end;\\n  }\\n  \\n  .filter-group {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 0.375rem;\\n    min-width: 0;\\n    flex: 1 1 200px;\\n  }\\n  \\n  .search-group {\\n    flex: 2 1 300px;\\n  }\\n  \\n  .clear-button-group {\\n    flex: 0 0 auto;\\n    align-self: flex-end;\\n  }\\n  \\n  .filter-label {\\n    font-size: 0.875rem;\\n    font-weight: 500;\\n    color: #374151;\\n  }\\n  \\n  .filter-select,\\n  .tags-select,\\n  .search-input {\\n    height: 2.5rem;\\n    padding: 0 0.75rem;\\n    border: 1px solid #d1d5db;\\n    border-radius: 0.375rem;\\n    font-size: 0.875rem;\\n    background: #ffffff;\\n    color: #111827;\\n    transition: border-color 0.15s ease;\\n  }\\n  \\n  .filter-select:hover,\\n  .tags-select:hover,\\n  .search-input:hover {\\n    border-color: #9ca3af;\\n  }\\n  \\n  .filter-select:focus,\\n  .tags-select:focus,\\n  .search-input:focus {\\n    outline: none;\\n    border-color: #3b82f6;\\n    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\\n  }\\n  \\n  /* Tags Multi-Select Specific Styles */\\n  .tags-dropdown-container {\\n    position: relative;\\n  }\\n  \\n  .tags-select {\\n    width: 100%;\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n    cursor: pointer;\\n    background: #ffffff;\\n    padding-right: 2rem;\\n  }\\n  \\n  .tags-select.has-selection {\\n    font-weight: 500;\\n  }\\n  \\n  .placeholder {\\n    color: #6b7280;\\n  }\\n  \\n  .tag-count {\\n    color: #111827;\\n  }\\n  \\n  .chevron {\\n    position: absolute;\\n    right: 0.75rem;\\n    top: 50%;\\n    transform: translateY(-50%);\\n    transition: transform 0.2s ease;\\n    color: #6b7280;\\n  }\\n  \\n  .chevron.rotated {\\n    transform: translateY(-50%) rotate(180deg);\\n  }\\n  \\n  .tags-dropdown {\\n    position: absolute;\\n    top: calc(100% + 0.25rem);\\n    left: 0;\\n    right: 0;\\n    background: #ffffff;\\n    border: 1px solid #d1d5db;\\n    border-radius: 0.375rem;\\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\\n    z-index: 10;\\n    max-height: 300px;\\n    overflow: hidden;\\n    display: flex;\\n    flex-direction: column;\\n  }\\n  \\n  .tags-header {\\n    padding: 0.75rem 1rem;\\n    border-bottom: 1px solid #e5e7eb;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    background: #f9fafb;\\n  }\\n  \\n  .tags-selected-count {\\n    font-size: 0.75rem;\\n    color: #6b7280;\\n    font-weight: 500;\\n  }\\n  \\n  .clear-tags-btn {\\n    font-size: 0.75rem;\\n    color: #3b82f6;\\n    background: none;\\n    border: none;\\n    cursor: pointer;\\n    padding: 0.25rem 0.5rem;\\n    border-radius: 0.25rem;\\n    transition: background-color 0.15s ease;\\n  }\\n  \\n  .clear-tags-btn:hover {\\n    background: #eff6ff;\\n  }\\n  \\n  .tags-list {\\n    overflow-y: auto;\\n    max-height: 250px;\\n  }\\n  \\n  .tag-option {\\n    display: flex;\\n    align-items: center;\\n    padding: 0.5rem 1rem;\\n    cursor: pointer;\\n    transition: background-color 0.15s ease;\\n  }\\n  \\n  .tag-option:hover {\\n    background: #f9fafb;\\n  }\\n  \\n  .tag-option input[type=\\"checkbox\\"] {\\n    margin-right: 0.75rem;\\n    cursor: pointer;\\n  }\\n  \\n  .tag-name {\\n    font-size: 0.875rem;\\n    color: #374151;\\n  }\\n  \\n  /* Search Input Styles */\\n  .search-wrapper {\\n    position: relative;\\n    width: 100%;\\n  }\\n  \\n  .search-icon {\\n    position: absolute;\\n    left: 0.75rem;\\n    top: 50%;\\n    transform: translateY(-50%);\\n    color: #6b7280;\\n    pointer-events: none;\\n  }\\n  \\n  .search-input {\\n    width: 100%;\\n    padding-left: 2.5rem;\\n  }\\n  \\n  /* Clear Filters Button */\\n  .clear-filters-btn {\\n    display: flex;\\n    align-items: center;\\n    gap: 0.5rem;\\n    padding: 0 1rem;\\n    height: 2.5rem;\\n    background: #ffffff;\\n    border: 1px solid #d1d5db;\\n    border-radius: 0.375rem;\\n    font-size: 0.875rem;\\n    color: #6b7280;\\n    cursor: pointer;\\n    transition: all 0.15s ease;\\n    white-space: nowrap;\\n  }\\n  \\n  .clear-filters-btn:hover {\\n    border-color: #9ca3af;\\n    color: #374151;\\n    background: #f9fafb;\\n  }\\n  \\n  /* Active Tags Display */\\n  .active-tags {\\n    display: flex;\\n    flex-wrap: wrap;\\n    gap: 0.5rem;\\n    margin-top: 0.75rem;\\n    padding-top: 0.75rem;\\n    border-top: 1px solid #e5e7eb;\\n  }\\n  \\n  .active-tag {\\n    display: inline-flex;\\n    align-items: center;\\n    gap: 0.375rem;\\n    padding: 0.25rem 0.625rem;\\n    background: #eff6ff;\\n    color: #3b82f6;\\n    border-radius: 0.375rem;\\n    font-size: 0.75rem;\\n    font-weight: 500;\\n  }\\n  \\n  .remove-tag {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    width: 1rem;\\n    height: 1rem;\\n    background: none;\\n    border: none;\\n    cursor: pointer;\\n    color: #3b82f6;\\n    border-radius: 0.25rem;\\n    transition: background-color 0.15s ease;\\n  }\\n  \\n  .remove-tag:hover {\\n    background: #dbeafe;\\n  }\\n  \\n  /* Responsive Design */\\n  @media (max-width: 768px) {\\n    .filter-container {\\n      gap: 0.75rem;\\n    }\\n    \\n    .filter-group {\\n      flex: 1 1 100%;\\n    }\\n    \\n    .search-group {\\n      flex: 1 1 100%;\\n    }\\n    \\n    .tags-dropdown {\\n      position: fixed;\\n      top: auto;\\n      bottom: 0;\\n      left: 0;\\n      right: 0;\\n      border-radius: 0.75rem 0.75rem 0 0;\\n      max-height: 70vh;\\n    }\\n  }\\n  \\n  @media (max-width: 480px) {\\n    .filter-bar {\\n      padding: 0.75rem;\\n    }\\n    \\n    .active-tags {\\n      gap: 0.375rem;\\n    }\\n    \\n    .active-tag {\\n      font-size: 0.7rem;\\n      padding: 0.2rem 0.5rem;\\n    }\\n  }\\n</style>"],"names":[],"mappings":"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"}`
};
const FilterBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hasActiveFilters;
  let { divisions = [] } = $$props;
  let { statuses = [] } = $$props;
  let { availableTags = [] } = $$props;
  let { selectedDivision = "" } = $$props;
  let { selectedTags = [] } = $$props;
  let { selectedStatus = "" } = $$props;
  let { searchQuery = "" } = $$props;
  createEventDispatcher();
  if ($$props.divisions === void 0 && $$bindings.divisions && divisions !== void 0) $$bindings.divisions(divisions);
  if ($$props.statuses === void 0 && $$bindings.statuses && statuses !== void 0) $$bindings.statuses(statuses);
  if ($$props.availableTags === void 0 && $$bindings.availableTags && availableTags !== void 0) $$bindings.availableTags(availableTags);
  if ($$props.selectedDivision === void 0 && $$bindings.selectedDivision && selectedDivision !== void 0) $$bindings.selectedDivision(selectedDivision);
  if ($$props.selectedTags === void 0 && $$bindings.selectedTags && selectedTags !== void 0) $$bindings.selectedTags(selectedTags);
  if ($$props.selectedStatus === void 0 && $$bindings.selectedStatus && selectedStatus !== void 0) $$bindings.selectedStatus(selectedStatus);
  if ($$props.searchQuery === void 0 && $$bindings.searchQuery && searchQuery !== void 0) $$bindings.searchQuery(searchQuery);
  $$result.css.add(css$1);
  hasActiveFilters = selectedDivision || selectedTags.length > 0 || selectedStatus || searchQuery;
  return ` <div class="filter-bar svelte-lse2yw"><div class="filter-container svelte-lse2yw"> <div class="filter-group svelte-lse2yw"><label for="division-filter" class="filter-label svelte-lse2yw" data-svelte-h="svelte-1vn66p1">Division</label> ${validate_component(Tooltip, "Tooltip").$$render(
    $$result,
    {
      content: "Filter by division to explore AI initiatives across FOX's 6 major business units and 30+ brands"
    },
    {},
    {
      default: () => {
        return `<select id="division-filter" class="filter-select text-gray-900 svelte-lse2yw"><option value="" data-svelte-h="svelte-1tdqqu3">All Divisions</option>${each(divisions, (division) => {
          return `<option${add_attribute("value", division, 0)}>${escape(division)}</option>`;
        })}</select>`;
      }
    }
  )}</div>  <div class="filter-group tags-dropdown-container svelte-lse2yw"><label for="tags-filter" class="filter-label svelte-lse2yw" data-svelte-h="svelte-orivip">Tags</label> ${validate_component(Tooltip, "Tooltip").$$render(
    $$result,
    {
      content: "Combine AI technologies to discover innovative use case intersections"
    },
    {},
    {
      default: () => {
        return `<button id="tags-filter" class="${[
          "tags-select svelte-lse2yw",
          selectedTags.length > 0 ? "has-selection" : ""
        ].join(" ").trim()}">${selectedTags.length === 0 ? `<span class="placeholder svelte-lse2yw" data-svelte-h="svelte-1ttmzch">Select tags...</span>` : `<span class="tag-count svelte-lse2yw">${escape(selectedTags.length)} selected</span>`} <svg class="${["chevron svelte-lse2yw", ""].join(" ").trim()}" width="12" height="12" viewBox="0 0 12 12"><path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="2" fill="none"></path></svg></button>`;
      }
    }
  )} ${``}</div>  <div class="filter-group svelte-lse2yw"><label for="status-filter" class="filter-label svelte-lse2yw" data-svelte-h="svelte-byllx5">Status</label> ${validate_component(Tooltip, "Tooltip").$$render(
    $$result,
    {
      content: "Track implementation lifecycle: Concept → Development → Pilot → Production"
    },
    {},
    {
      default: () => {
        return `<select id="status-filter" class="filter-select text-gray-900 svelte-lse2yw"><option value="" data-svelte-h="svelte-1n598p3">All Statuses</option>${each(statuses, (status) => {
          return `<option${add_attribute("value", status, 0)}>${escape(status)}</option>`;
        })}</select>`;
      }
    }
  )}</div>  <div class="filter-group search-group svelte-lse2yw"><label for="search-input" class="filter-label svelte-lse2yw" data-svelte-h="svelte-1gjcryz">Search</label> ${validate_component(Tooltip, "Tooltip").$$render(
    $$result,
    {
      content: "AI-powered semantic search across titles, descriptions, impacts, and technical details"
    },
    {},
    {
      default: () => {
        return `<div class="search-wrapper svelte-lse2yw"><svg class="search-icon svelte-lse2yw" width="16" height="16" viewBox="0 0 16 16"><path d="M11.5 7a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" stroke="currentColor" stroke-width="1.5" fill="none"></path><path d="M14 14l-3.5-3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg> <input id="search-input" type="text" class="search-input svelte-lse2yw" placeholder="Search use cases..."${add_attribute("value", searchQuery, 0)}></div>`;
      }
    }
  )}</div>  ${hasActiveFilters ? `<div class="filter-group clear-button-group svelte-lse2yw">${validate_component(Tooltip, "Tooltip").$$render(
    $$result,
    {
      content: "Reset view to explore all AI initiatives across FOX"
    },
    {},
    {
      default: () => {
        return `<button class="clear-filters-btn svelte-lse2yw" data-svelte-h="svelte-1yno597"><svg width="14" height="14" viewBox="0 0 14 14"><path d="M2 2L12 12M2 12L12 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>
            Clear filters</button>`;
      }
    }
  )}</div>` : ``}</div>  ${selectedTags.length > 0 ? `<div class="active-tags svelte-lse2yw">${each(selectedTags, (tag) => {
    return `<span class="active-tag svelte-lse2yw">${escape(tag)} <button class="remove-tag svelte-lse2yw" data-svelte-h="svelte-1ejtn66"><svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 2L8 8M2 8L8 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></button> </span>`;
  })}</div>` : ``} </div>`;
});
const css = {
  code: ".use-case-grid.svelte-1biq88u{display:grid;grid-template-columns:repeat(auto-fill, minmax(320px, 1fr));gap:1.5rem;animation:svelte-1biq88u-fadeIn 0.3s ease-out}.use-case-grid.list-view.svelte-1biq88u{grid-template-columns:1fr;gap:1rem}@keyframes svelte-1biq88u-fadeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@media(max-width: 640px){.use-case-grid.svelte-1biq88u{grid-template-columns:1fr;gap:1rem}}@media(min-width: 1280px){.use-case-grid.svelte-1biq88u{grid-template-columns:repeat(auto-fill, minmax(360px, 1fr))}}",
  map: `{"version":3,"file":"UseCaseGrid.svelte","sources":["UseCaseGrid.svelte"],"sourcesContent":["<script lang=\\"ts\\">import UseCaseCard from \\"./UseCaseCard.svelte\\";\\nexport let useCases = [];\\nexport let viewMode = \\"grid\\";\\nexport let loading = false;\\n<\/script>\\n\\n{#if loading}\\n\\t<div class=\\"flex items-center justify-center min-h-64\\">\\n\\t\\t<div class=\\"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600\\"></div>\\n\\t</div>\\n{:else if useCases.length === 0}\\n\\t<div class=\\"flex flex-col items-center justify-center min-h-64 text-center\\">\\n\\t\\t<svg class=\\"w-16 h-16 text-gray-400 mb-4\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\">\\n\\t\\t\\t<path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"1.5\\" d=\\"M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z\\" />\\n\\t\\t</svg>\\n\\t\\t<h3 class=\\"text-lg font-medium text-gray-900 mb-2\\">No use cases found</h3>\\n\\t\\t<p class=\\"text-sm text-gray-500 max-w-sm\\">\\n\\t\\t\\tTry adjusting your filters or search criteria to find what you're looking for.\\n\\t\\t</p>\\n\\t</div>\\n{:else}\\n\\t<div class=\\"use-case-grid\\" class:list-view={viewMode === 'list'}>\\n\\t\\t{#each useCases as useCase, index (useCase.id)}\\n\\t\\t\\t<UseCaseCard {useCase} {index} />\\n\\t\\t{/each}\\n\\t</div>\\n{/if}\\n\\n<style>\\n\\t.use-case-grid {\\n\\t\\tdisplay: grid;\\n\\t\\tgrid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\\n\\t\\tgap: 1.5rem;\\n\\t\\tanimation: fadeIn 0.3s ease-out;\\n\\t}\\n\\t\\n\\t.use-case-grid.list-view {\\n\\t\\tgrid-template-columns: 1fr;\\n\\t\\tgap: 1rem;\\n\\t}\\n\\t\\n\\t@keyframes fadeIn {\\n\\t\\tfrom {\\n\\t\\t\\topacity: 0;\\n\\t\\t\\ttransform: translateY(10px);\\n\\t\\t}\\n\\t\\tto {\\n\\t\\t\\topacity: 1;\\n\\t\\t\\ttransform: translateY(0);\\n\\t\\t}\\n\\t}\\n\\t\\n\\t/* Responsive adjustments */\\n\\t@media (max-width: 640px) {\\n\\t\\t.use-case-grid {\\n\\t\\t\\tgrid-template-columns: 1fr;\\n\\t\\t\\tgap: 1rem;\\n\\t\\t}\\n\\t}\\n\\t\\n\\t@media (min-width: 1280px) {\\n\\t\\t.use-case-grid {\\n\\t\\t\\tgrid-template-columns: repeat(auto-fill, minmax(360px, 1fr));\\n\\t\\t}\\n\\t}\\n</style>"],"names":[],"mappings":"AA6BC,6BAAe,CACd,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,SAAS,CAAC,CAAC,OAAO,KAAK,CAAC,CAAC,GAAG,CAAC,CAAC,CAC5D,GAAG,CAAE,MAAM,CACX,SAAS,CAAE,qBAAM,CAAC,IAAI,CAAC,QACxB,CAEA,cAAc,yBAAW,CACxB,qBAAqB,CAAE,GAAG,CAC1B,GAAG,CAAE,IACN,CAEA,WAAW,qBAAO,CACjB,IAAK,CACJ,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,WAAW,IAAI,CAC3B,CACA,EAAG,CACF,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,WAAW,CAAC,CACxB,CACD,CAGA,MAAO,YAAY,KAAK,CAAE,CACzB,6BAAe,CACd,qBAAqB,CAAE,GAAG,CAC1B,GAAG,CAAE,IACN,CACD,CAEA,MAAO,YAAY,MAAM,CAAE,CAC1B,6BAAe,CACd,qBAAqB,CAAE,OAAO,SAAS,CAAC,CAAC,OAAO,KAAK,CAAC,CAAC,GAAG,CAAC,CAC5D,CACD"}`
};
const UseCaseGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { useCases = [] } = $$props;
  let { viewMode = "grid" } = $$props;
  let { loading = false } = $$props;
  if ($$props.useCases === void 0 && $$bindings.useCases && useCases !== void 0) $$bindings.useCases(useCases);
  if ($$props.viewMode === void 0 && $$bindings.viewMode && viewMode !== void 0) $$bindings.viewMode(viewMode);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0) $$bindings.loading(loading);
  $$result.css.add(css);
  return `${loading ? `<div class="flex items-center justify-center min-h-64" data-svelte-h="svelte-20ttt"><div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>` : `${useCases.length === 0 ? `<div class="flex flex-col items-center justify-center min-h-64 text-center" data-svelte-h="svelte-10s4l3r"><svg class="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <h3 class="text-lg font-medium text-gray-900 mb-2">No use cases found</h3> <p class="text-sm text-gray-500 max-w-sm">Try adjusting your filters or search criteria to find what you&#39;re looking for.</p></div>` : `<div class="${["use-case-grid svelte-1biq88u", viewMode === "list" ? "list-view" : ""].join(" ").trim()}">${each(useCases, (useCase, index) => {
    return `${validate_component(UseCaseCard, "UseCaseCard").$$render($$result, { useCase, index }, {}, {})}`;
  })}</div>`}`}`;
});
export {
  FilterBar as F,
  UseCaseGrid as U
};
