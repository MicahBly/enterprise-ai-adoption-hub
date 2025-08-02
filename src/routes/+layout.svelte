<script>
  import '../app.css';
  import { page } from '$app/stores';
  import { base } from '$app/paths';
  import Tooltip from '$lib/components/ui/Tooltip.svelte';
  
  let mobileMenuOpen = false;
  
  // Helper function to check if a link is active
  $: isActive = (path) => {
    if (path === '/' && $page.url.pathname === '/') return true;
    if (path !== '/' && $page.url.pathname.startsWith(path)) return true;
    return false;
  };
</script>

<div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
  <!-- Navigation Bar -->
  {#if !$page.url.pathname.startsWith('/disney')}
  <nav class="bg-white dark:bg-gray-800 shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo and Brand -->
        <div class="flex items-center">
          <Tooltip content="Centralized AI innovation platform driving digital transformation across FOX Corporation" >
            <a href="{base}/" class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <span class="font-bold text-xl text-gray-900 dark:text-white">FOX AI Hub</span>
            </a>
          </Tooltip>
        </div>

        <!-- Desktop Navigation Links -->
        <div class="hidden sm:flex sm:items-center sm:space-x-8">
          <Tooltip content="Browse 50+ AI use cases and discover innovation opportunities" >
            <a 
              href="{base}/" 
              class="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                     {isActive('/') && !isActive('/use-cases') ? 
                      'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200' : 
                      'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'}"
            >
              Home
            </a>
          </Tooltip>
          <Tooltip content="View all AI implementations across Fox divisions" >
            <a 
              href="{base}/use-cases" 
              class="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                     {isActive('/use-cases') ? 
                      'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200' : 
                      'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'}"
            >
              Use Cases
            </a>
          </Tooltip>
          <Tooltip content="Data-driven insights on AI tool adoption across all divisions" >
            <a 
              href="{base}/adoption-matrix" 
              class="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                     {isActive('/adoption-matrix') ? 
                      'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200' : 
                      'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'}"
            >
              Adoption Matrix
            </a>
          </Tooltip>
          <Tooltip content="Active experiments and initiatives to boost AI adoption" >
            <a 
              href="{base}/experiments" 
              class="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                     {isActive('/experiments') ? 
                      'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200' : 
                      'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'}"
            >
              Experiments
            </a>
          </Tooltip>
          <Tooltip content="Key performance indicators and ROI metrics for AI initiatives" >
            <a 
              href="{base}/efficiency" 
              class="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                     {isActive('/efficiency') ? 
                      'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200' : 
                      'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'}"
            >
              Efficiency
            </a>
          </Tooltip>
        </div>

        <!-- Mobile menu button -->
        <div class="flex items-center sm:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            aria-controls="mobile-menu"
            aria-expanded="false"
            on:click={() => mobileMenuOpen = !mobileMenuOpen}
          >
            <span class="sr-only">Open main menu</span>
            <!-- Icon when menu is closed -->
            <svg class="{mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <!-- Icon when menu is open -->
            <svg class="{mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div class="{mobileMenuOpen ? 'block' : 'hidden'} sm:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a 
          href="{base}/" 
          class="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200
                 {isActive('/') && !isActive('/use-cases') ? 
                  'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200' : 
                  'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'}"
        >
          Home
        </a>
        <a 
          href="{base}/use-cases" 
          class="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200
                 {isActive('/use-cases') ? 
                  'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200' : 
                  'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'}"
        >
          Use Cases
        </a>
        <a 
          href="{base}/adoption-matrix" 
          class="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200
                 {isActive('/adoption-matrix') ? 
                  'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200' : 
                  'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'}"
        >
          Adoption Matrix
        </a>
        <a 
          href="{base}/experiments" 
          class="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200
                 {isActive('/experiments') ? 
                  'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200' : 
                  'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'}"
        >
          Experiments
        </a>
        <a 
          href="{base}/efficiency" 
          class="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200
                 {isActive('/efficiency') ? 
                  'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200' : 
                  'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'}"
        >
          Efficiency
        </a>
      </div>
    </div>
  </nav>
  {/if}

  <!-- Main Content -->
  <main>
    <slot />
  </main>
</div>

<style>
  /* Additional styles for smooth transitions */
  :global(html) {
    scroll-behavior: smooth;
  }
</style>