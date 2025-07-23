import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { b as base } from "../../chunks/paths.js";
import { T as Tooltip } from "../../chunks/Tooltip.js";
const css = {
  code: "html{scroll-behavior:smooth}",
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script>\\n  import '../app.css';\\n  import { page } from '$app/stores';\\n  import { base } from '$app/paths';\\n  import Tooltip from '$lib/components/ui/Tooltip.svelte';\\n  \\n  let mobileMenuOpen = false;\\n  \\n  // Helper function to check if a link is active\\n  $: isActive = (path) => {\\n    if (path === '/' && $page.url.pathname === '/') return true;\\n    if (path !== '/' && $page.url.pathname.startsWith(path)) return true;\\n    return false;\\n  };\\n<\/script>\\n\\n<div class=\\"min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100\\">\\n  <!-- Navigation Bar -->\\n  <nav class=\\"bg-white dark:bg-gray-800 shadow-lg\\">\\n    <div class=\\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\\">\\n      <div class=\\"flex justify-between h-16\\">\\n        <!-- Logo and Brand -->\\n        <div class=\\"flex items-center\\">\\n          <Tooltip content=\\"Centralized AI innovation platform driving digital transformation across FOX Corporation\\" >\\n            <a href=\\"{base}/\\" class=\\"flex items-center space-x-3\\">\\n              <div class=\\"w-10 h-10 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center\\">\\n                <svg class=\\"w-6 h-6 text-white\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n                  <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z\\"></path>\\n                </svg>\\n              </div>\\n              <span class=\\"font-bold text-xl text-gray-900 dark:text-white\\">FOX AI Hub</span>\\n            </a>\\n          </Tooltip>\\n        </div>\\n\\n        <!-- Desktop Navigation Links -->\\n        <div class=\\"hidden sm:flex sm:items-center sm:space-x-8\\">\\n          <Tooltip content=\\"Browse 50+ AI use cases and discover innovation opportunities\\" >\\n            <a \\n              href=\\"{base}/\\" \\n              class=\\"px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200\\n                     {isActive('/') && !isActive('/use-cases') ? \\n                      'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200' : \\n                      'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'}\\"\\n            >\\n              Home\\n            </a>\\n          </Tooltip>\\n          <Tooltip content=\\"View all AI implementations across Fox divisions\\" >\\n            <a \\n              href=\\"{base}/use-cases\\" \\n              class=\\"px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200\\n                     {isActive('/use-cases') ? \\n                      'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200' : \\n                      'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'}\\"\\n            >\\n              Use Cases\\n            </a>\\n          </Tooltip>\\n          <Tooltip content=\\"Data-driven insights on AI tool adoption across all divisions\\" >\\n            <a \\n              href=\\"{base}/adoption-matrix\\" \\n              class=\\"px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200\\n                     {isActive('/adoption-matrix') ? \\n                      'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200' : \\n                      'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'}\\"\\n            >\\n              Adoption Matrix\\n            </a>\\n          </Tooltip>\\n          <Tooltip content=\\"Active experiments and initiatives to boost AI adoption\\" >\\n            <a \\n              href=\\"{base}/experiments\\" \\n              class=\\"px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200\\n                     {isActive('/experiments') ? \\n                      'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200' : \\n                      'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'}\\"\\n            >\\n              Experiments\\n            </a>\\n          </Tooltip>\\n          <Tooltip content=\\"Key performance indicators and ROI metrics for AI initiatives\\" >\\n            <a \\n              href=\\"{base}/efficiency\\" \\n              class=\\"px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200\\n                     {isActive('/efficiency') ? \\n                      'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200' : \\n                      'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'}\\"\\n            >\\n              Efficiency\\n            </a>\\n          </Tooltip>\\n        </div>\\n\\n        <!-- Mobile menu button -->\\n        <div class=\\"flex items-center sm:hidden\\">\\n          <button\\n            type=\\"button\\"\\n            class=\\"inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500\\"\\n            aria-controls=\\"mobile-menu\\"\\n            aria-expanded=\\"false\\"\\n            on:click={() => mobileMenuOpen = !mobileMenuOpen}\\n          >\\n            <span class=\\"sr-only\\">Open main menu</span>\\n            <!-- Icon when menu is closed -->\\n            <svg class=\\"{mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n              <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M4 6h16M4 12h16M4 18h16\\"></path>\\n            </svg>\\n            <!-- Icon when menu is open -->\\n            <svg class=\\"{mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n              <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M6 18L18 6M6 6l12 12\\"></path>\\n            </svg>\\n          </button>\\n        </div>\\n      </div>\\n    </div>\\n\\n    <!-- Mobile menu -->\\n    <div class=\\"{mobileMenuOpen ? 'block' : 'hidden'} sm:hidden\\" id=\\"mobile-menu\\">\\n      <div class=\\"px-2 pt-2 pb-3 space-y-1\\">\\n        <a \\n          href=\\"{base}/\\" \\n          class=\\"block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200\\n                 {isActive('/') && !isActive('/use-cases') ? \\n                  'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200' : \\n                  'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'}\\"\\n        >\\n          Home\\n        </a>\\n        <a \\n          href=\\"{base}/use-cases\\" \\n          class=\\"block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200\\n                 {isActive('/use-cases') ? \\n                  'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200' : \\n                  'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'}\\"\\n        >\\n          Use Cases\\n        </a>\\n        <a \\n          href=\\"{base}/adoption-matrix\\" \\n          class=\\"block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200\\n                 {isActive('/adoption-matrix') ? \\n                  'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200' : \\n                  'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'}\\"\\n        >\\n          Adoption Matrix\\n        </a>\\n        <a \\n          href=\\"{base}/experiments\\" \\n          class=\\"block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200\\n                 {isActive('/experiments') ? \\n                  'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200' : \\n                  'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'}\\"\\n        >\\n          Experiments\\n        </a>\\n        <a \\n          href=\\"{base}/efficiency\\" \\n          class=\\"block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200\\n                 {isActive('/efficiency') ? \\n                  'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200' : \\n                  'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'}\\"\\n        >\\n          Efficiency\\n        </a>\\n      </div>\\n    </div>\\n  </nav>\\n\\n  <!-- Main Content -->\\n  <main>\\n    <slot />\\n  </main>\\n</div>\\n\\n<style>\\n  /* Additional styles for smooth transitions */\\n  :global(html) {\\n    scroll-behavior: smooth;\\n  }\\n</style>"],"names":[],"mappings":"AAiLU,IAAM,CACZ,eAAe,CAAE,MACnB"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isActive;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  isActive = (path) => {
    if (path === "/" && $page.url.pathname === "/") return true;
    if (path !== "/" && $page.url.pathname.startsWith(path)) return true;
    return false;
  };
  $$unsubscribe_page();
  return `<div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"> <nav class="bg-white dark:bg-gray-800 shadow-lg"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between h-16"> <div class="flex items-center">${validate_component(Tooltip, "Tooltip").$$render(
    $$result,
    {
      content: "Centralized AI innovation platform driving digital transformation across FOX Corporation"
    },
    {},
    {
      default: () => {
        return `<a href="${escape(base, true) + "/"}" class="flex items-center space-x-3" data-svelte-h="svelte-8ndyoa"><div class="w-10 h-10 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center"><svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div> <span class="font-bold text-xl text-gray-900 dark:text-white">FOX AI Hub</span></a>`;
      }
    }
  )}</div>  <div class="hidden sm:flex sm:items-center sm:space-x-8">${validate_component(Tooltip, "Tooltip").$$render(
    $$result,
    {
      content: "Browse 50+ AI use cases and discover innovation opportunities"
    },
    {},
    {
      default: () => {
        return `<a href="${escape(base, true) + "/"}" class="${"px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 " + escape(
          isActive("/") && !isActive("/use-cases") ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white",
          true
        )}">Home</a>`;
      }
    }
  )} ${validate_component(Tooltip, "Tooltip").$$render(
    $$result,
    {
      content: "View all AI implementations across Fox divisions"
    },
    {},
    {
      default: () => {
        return `<a href="${escape(base, true) + "/use-cases"}" class="${"px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 " + escape(
          isActive("/use-cases") ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white",
          true
        )}">Use Cases</a>`;
      }
    }
  )} ${validate_component(Tooltip, "Tooltip").$$render(
    $$result,
    {
      content: "Data-driven insights on AI tool adoption across all divisions"
    },
    {},
    {
      default: () => {
        return `<a href="${escape(base, true) + "/adoption-matrix"}" class="${"px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 " + escape(
          isActive("/adoption-matrix") ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white",
          true
        )}">Adoption Matrix</a>`;
      }
    }
  )} ${validate_component(Tooltip, "Tooltip").$$render(
    $$result,
    {
      content: "Active experiments and initiatives to boost AI adoption"
    },
    {},
    {
      default: () => {
        return `<a href="${escape(base, true) + "/experiments"}" class="${"px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 " + escape(
          isActive("/experiments") ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white",
          true
        )}">Experiments</a>`;
      }
    }
  )} ${validate_component(Tooltip, "Tooltip").$$render(
    $$result,
    {
      content: "Key performance indicators and ROI metrics for AI initiatives"
    },
    {},
    {
      default: () => {
        return `<a href="${escape(base, true) + "/efficiency"}" class="${"px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 " + escape(
          isActive("/efficiency") ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white",
          true
        )}">Efficiency</a>`;
      }
    }
  )}</div>  <div class="flex items-center sm:hidden"><button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" aria-controls="mobile-menu" aria-expanded="false"><span class="sr-only" data-svelte-h="svelte-1bvqpab">Open main menu</span>  <svg class="${escape("block", true) + " h-6 w-6"}" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>  <svg class="${escape("hidden", true) + " h-6 w-6"}" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div>  <div class="${escape("hidden", true) + " sm:hidden"}" id="mobile-menu"><div class="px-2 pt-2 pb-3 space-y-1"><a href="${escape(base, true) + "/"}" class="${"block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 " + escape(
    isActive("/") && !isActive("/use-cases") ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white",
    true
  )}">Home</a> <a href="${escape(base, true) + "/use-cases"}" class="${"block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 " + escape(
    isActive("/use-cases") ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white",
    true
  )}">Use Cases</a> <a href="${escape(base, true) + "/adoption-matrix"}" class="${"block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 " + escape(
    isActive("/adoption-matrix") ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white",
    true
  )}">Adoption Matrix</a> <a href="${escape(base, true) + "/experiments"}" class="${"block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 " + escape(
    isActive("/experiments") ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white",
    true
  )}">Experiments</a> <a href="${escape(base, true) + "/efficiency"}" class="${"block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 " + escape(
    isActive("/efficiency") ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white",
    true
  )}">Efficiency</a></div></div></nav>  <main>${slots.default ? slots.default({}) : ``}</main> </div>`;
});
export {
  Layout as default
};
