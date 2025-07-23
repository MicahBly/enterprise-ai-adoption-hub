<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Tooltip from '$lib/components/ui/Tooltip.svelte';
  
  export let divisions: string[] = [];
  export let statuses: string[] = [];
  export let availableTags: string[] = [];
  
  // Filter values
  export let selectedDivision: string = '';
  export let selectedTags: string[] = [];
  export let selectedStatus: string = '';
  export let searchQuery: string = '';
  
  // UI state
  let showTagsDropdown = false;
  
  const dispatch = createEventDispatcher();
  
  // Handle filter changes
  function handleDivisionChange() {
    dispatch('filterChange', {
      type: 'division',
      value: selectedDivision
    });
  }
  
  function handleStatusChange() {
    dispatch('filterChange', {
      type: 'status',
      value: selectedStatus
    });
  }
  
  function handleSearchInput() {
    dispatch('filterChange', {
      type: 'search',
      value: searchQuery
    });
  }
  
  function toggleTag(tag: string) {
    if (selectedTags.includes(tag)) {
      selectedTags = selectedTags.filter(t => t !== tag);
    } else {
      selectedTags = [...selectedTags, tag];
    }
    dispatch('filterChange', {
      type: 'tags',
      value: selectedTags
    });
  }
  
  function clearAllFilters() {
    selectedDivision = '';
    selectedTags = [];
    selectedStatus = '';
    searchQuery = '';
    dispatch('clearFilters');
  }
  
  function clearTags() {
    selectedTags = [];
    dispatch('filterChange', {
      type: 'tags',
      value: selectedTags
    });
  }
  
  // Check if any filters are active
  $: hasActiveFilters = selectedDivision || selectedTags.length > 0 || selectedStatus || searchQuery;
  
  // Click outside to close tags dropdown
  function handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.tags-dropdown-container')) {
      showTagsDropdown = false;
    }
  }
</script>

<svelte:window on:click={handleClickOutside} />

<div class="filter-bar">
  <div class="filter-container">
    <!-- Division Filter -->
    <div class="filter-group">
      <label for="division-filter" class="filter-label">Division</label>
      <Tooltip content="Filter by division to explore AI initiatives across FOX's 6 major business units and 30+ brands" >
        <select
          id="division-filter"
          class="filter-select text-gray-900"
          bind:value={selectedDivision}
          on:change={handleDivisionChange}
        >
          <option value="">All Divisions</option>
          {#each divisions as division}
            <option value={division}>{division}</option>
          {/each}
        </select>
      </Tooltip>
    </div>
    
    <!-- Tags Multi-Select -->
    <div class="filter-group tags-dropdown-container">
      <label for="tags-filter" class="filter-label">Tags</label>
      <Tooltip content="Combine AI technologies to discover innovative use case intersections" >
        <button
          id="tags-filter"
          class="tags-select"
          class:has-selection={selectedTags.length > 0}
          on:click|stopPropagation={() => showTagsDropdown = !showTagsDropdown}
        >
          {#if selectedTags.length === 0}
            <span class="placeholder">Select tags...</span>
          {:else}
            <span class="tag-count">{selectedTags.length} selected</span>
          {/if}
          <svg class="chevron" class:rotated={showTagsDropdown} width="12" height="12" viewBox="0 0 12 12">
            <path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="2" fill="none"/>
          </svg>
        </button>
      </Tooltip>
      
      {#if showTagsDropdown}
        <div class="tags-dropdown">
          <div class="tags-header">
            <span class="tags-selected-count">{selectedTags.length} selected</span>
            {#if selectedTags.length > 0}
              <button class="clear-tags-btn" on:click={clearTags}>Clear</button>
            {/if}
          </div>
          <div class="tags-list">
            {#each availableTags as tag}
              <label class="tag-option">
                <input
                  type="checkbox"
                  checked={selectedTags.includes(tag)}
                  on:change={() => toggleTag(tag)}
                />
                <span class="tag-name">{tag}</span>
              </label>
            {/each}
          </div>
        </div>
      {/if}
    </div>
    
    <!-- Status Filter -->
    <div class="filter-group">
      <label for="status-filter" class="filter-label">Status</label>
      <Tooltip content="Track implementation lifecycle: Concept → Development → Pilot → Production" >
        <select
          id="status-filter"
          class="filter-select text-gray-900"
          bind:value={selectedStatus}
          on:change={handleStatusChange}
        >
          <option value="">All Statuses</option>
          {#each statuses as status}
            <option value={status}>{status}</option>
          {/each}
        </select>
      </Tooltip>
    </div>
    
    <!-- Search Input -->
    <div class="filter-group search-group">
      <label for="search-input" class="filter-label">Search</label>
      <Tooltip content="AI-powered semantic search across titles, descriptions, impacts, and technical details" >
        <div class="search-wrapper">
          <svg class="search-icon" width="16" height="16" viewBox="0 0 16 16">
            <path d="M11.5 7a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" stroke="currentColor" stroke-width="1.5" fill="none"/>
            <path d="M14 14l-3.5-3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          <input
            id="search-input"
            type="text"
            class="search-input"
            placeholder="Search use cases..."
            bind:value={searchQuery}
            on:input={handleSearchInput}
          />
        </div>
      </Tooltip>
    </div>
    
    <!-- Clear Filters Button -->
    {#if hasActiveFilters}
      <div class="filter-group clear-button-group">
        <Tooltip content="Reset view to explore all AI initiatives across FOX" >
          <button class="clear-filters-btn" on:click={clearAllFilters}>
            <svg width="14" height="14" viewBox="0 0 14 14">
              <path d="M2 2L12 12M2 12L12 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            Clear filters
          </button>
        </Tooltip>
      </div>
    {/if}
  </div>
  
  <!-- Active Filters Display -->
  {#if selectedTags.length > 0}
    <div class="active-tags">
      {#each selectedTags as tag}
        <span class="active-tag">
          {tag}
          <button class="remove-tag" on:click={() => toggleTag(tag)}>
            <svg width="10" height="10" viewBox="0 0 10 10">
              <path d="M2 2L8 8M2 8L8 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </button>
        </span>
      {/each}
    </div>
  {/if}
</div>

<style>
  .filter-bar {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  }
  
  .filter-container {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    align-items: flex-end;
  }
  
  .filter-group {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
    min-width: 0;
    flex: 1 1 200px;
  }
  
  .search-group {
    flex: 2 1 300px;
  }
  
  .clear-button-group {
    flex: 0 0 auto;
    align-self: flex-end;
  }
  
  .filter-label {
    font-size: 0.875rem;
    font-weight: 500;
    color: #374151;
  }
  
  .filter-select,
  .tags-select,
  .search-input {
    height: 2.5rem;
    padding: 0 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    background: #ffffff;
    color: #111827;
    transition: border-color 0.15s ease;
  }
  
  .filter-select:hover,
  .tags-select:hover,
  .search-input:hover {
    border-color: #9ca3af;
  }
  
  .filter-select:focus,
  .tags-select:focus,
  .search-input:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
  
  /* Tags Multi-Select Specific Styles */
  .tags-dropdown-container {
    position: relative;
  }
  
  .tags-select {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    background: #ffffff;
    padding-right: 2rem;
  }
  
  .tags-select.has-selection {
    font-weight: 500;
  }
  
  .placeholder {
    color: #6b7280;
  }
  
  .tag-count {
    color: #111827;
  }
  
  .chevron {
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    transition: transform 0.2s ease;
    color: #6b7280;
  }
  
  .chevron.rotated {
    transform: translateY(-50%) rotate(180deg);
  }
  
  .tags-dropdown {
    position: absolute;
    top: calc(100% + 0.25rem);
    left: 0;
    right: 0;
    background: #ffffff;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    z-index: 10;
    max-height: 300px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  
  .tags-header {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid #e5e7eb;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f9fafb;
  }
  
  .tags-selected-count {
    font-size: 0.75rem;
    color: #6b7280;
    font-weight: 500;
  }
  
  .clear-tags-btn {
    font-size: 0.75rem;
    color: #3b82f6;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    transition: background-color 0.15s ease;
  }
  
  .clear-tags-btn:hover {
    background: #eff6ff;
  }
  
  .tags-list {
    overflow-y: auto;
    max-height: 250px;
  }
  
  .tag-option {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: background-color 0.15s ease;
  }
  
  .tag-option:hover {
    background: #f9fafb;
  }
  
  .tag-option input[type="checkbox"] {
    margin-right: 0.75rem;
    cursor: pointer;
  }
  
  .tag-name {
    font-size: 0.875rem;
    color: #374151;
  }
  
  /* Search Input Styles */
  .search-wrapper {
    position: relative;
    width: 100%;
  }
  
  .search-icon {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: #6b7280;
    pointer-events: none;
  }
  
  .search-input {
    width: 100%;
    padding-left: 2.5rem;
  }
  
  /* Clear Filters Button */
  .clear-filters-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0 1rem;
    height: 2.5rem;
    background: #ffffff;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    color: #6b7280;
    cursor: pointer;
    transition: all 0.15s ease;
    white-space: nowrap;
  }
  
  .clear-filters-btn:hover {
    border-color: #9ca3af;
    color: #374151;
    background: #f9fafb;
  }
  
  /* Active Tags Display */
  .active-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.75rem;
    padding-top: 0.75rem;
    border-top: 1px solid #e5e7eb;
  }
  
  .active-tag {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.25rem 0.625rem;
    background: #eff6ff;
    color: #3b82f6;
    border-radius: 0.375rem;
    font-size: 0.75rem;
    font-weight: 500;
  }
  
  .remove-tag {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
    height: 1rem;
    background: none;
    border: none;
    cursor: pointer;
    color: #3b82f6;
    border-radius: 0.25rem;
    transition: background-color 0.15s ease;
  }
  
  .remove-tag:hover {
    background: #dbeafe;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .filter-container {
      gap: 0.75rem;
    }
    
    .filter-group {
      flex: 1 1 100%;
    }
    
    .search-group {
      flex: 1 1 100%;
    }
    
    .tags-dropdown {
      position: fixed;
      top: auto;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: 0.75rem 0.75rem 0 0;
      max-height: 70vh;
    }
  }
  
  @media (max-width: 480px) {
    .filter-bar {
      padding: 0.75rem;
    }
    
    .active-tags {
      gap: 0.375rem;
    }
    
    .active-tag {
      font-size: 0.7rem;
      padding: 0.2rem 0.5rem;
    }
  }
</style>