import { writable, derived, get } from 'svelte/store';
import { base } from '$app/paths';
import useCasesData from '$lib/data/use-cases.json';

// Type definition for the use case structure
export interface UseCase {
  id: string;
  title: string;
  division: string;
  subsidiary?: string | null;
  status: string;
  description: string;
  impact: string;
  tags: string[];
  owner: string;
  techStackAi: string[];
  techStackInfrastructure: string[];
  techStackIntegration: string[];
  estimatedUsers?: number | null;
  costSavings?: number | null;
  revenueIncrease?: number | null;
  timeToValue?: string | null;
  reusePotential: string;
  enablementSteps: string[];
  suggestedTechnologies?: string[];
  createdAt?: string;
  updatedAt?: string;
}

// Filter state interface
export interface UseCaseFilters {
  division: string;
  tags: string[];
  status: string;
  search: string;
}

// Create the main writable store with initial empty array
function createUseCasesStore() {
  const { subscribe, set, update } = writable<UseCase[]>([]);

  const loadUseCases = async () => {
    try {
      const response = await fetch(`${base}/api/use-cases`);
      if (!response.ok) {
        throw new Error(`Failed to fetch use cases: ${response.statusText}`);
      }
      const useCases = await response.json();
      set(useCases);
    } catch (error) {
      console.error('Error loading use cases:', error);
      // Transform JSON data to match database schema and fallback
      const transformedData = (useCasesData as any[]).map(uc => ({
        ...uc,
        techStackAi: uc.techStack?.ai || [],
        techStackInfrastructure: uc.techStack?.infrastructure || [],
        techStackIntegration: uc.techStack?.integration || [],
        subsidiary: uc.subsidiary || null,
        estimatedUsers: uc.estimatedUsers || null,
        costSavings: uc.costSavings || null,
        revenueIncrease: uc.revenueIncrease || null,
        timeToValue: uc.timeToValue || null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }));
      set(transformedData);
    }
  };

  return {
    subscribe,
    set,
    update,
    // Load use cases from database API
    loadUseCases,
    // Reload use cases from API
    reload: async () => {
      await loadUseCases();
    }
  };
}

// Create the main store instance
export const useCasesStore = createUseCasesStore();

// Create a writable store for filters
export const useCaseFilters = writable<UseCaseFilters>({
  division: 'all',
  tags: [],
  status: 'all',
  search: ''
});

// Derived store for filtered use cases
export const filteredUseCases = derived(
  [useCasesStore, useCaseFilters],
  ([$useCases, $filters]) => {
    let filtered = [...$useCases];

    // Filter by division
    if ($filters.division && $filters.division !== 'all') {
      filtered = filtered.filter(uc => uc.division === $filters.division);
    }

    // Filter by tags (use cases must have at least one of the selected tags)
    if ($filters.tags && $filters.tags.length > 0) {
      filtered = filtered.filter(uc => 
        uc.tags.some(tag => $filters.tags.includes(tag))
      );
    }

    // Filter by status
    if ($filters.status && $filters.status !== 'all') {
      filtered = filtered.filter(uc => uc.status === $filters.status);
    }

    // Filter by search query (searches in title, description, and impact)
    if ($filters.search && $filters.search.trim() !== '') {
      const searchLower = $filters.search.toLowerCase().trim();
      filtered = filtered.filter(uc => 
        uc.title.toLowerCase().includes(searchLower) ||
        uc.description.toLowerCase().includes(searchLower) ||
        uc.impact.toLowerCase().includes(searchLower) ||
        uc.owner.toLowerCase().includes(searchLower) ||
        uc.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }

    return filtered;
  }
);

// Helper function to get a single use case by ID
export function getUseCaseById(id: string): UseCase | undefined {
  const useCases = get(useCasesStore);
  return useCases.find(uc => uc.id === id);
}

// Helper function to get all unique divisions
export function getAllDivisions(): string[] {
  const useCases = get(useCasesStore);
  const divisions = [...new Set(useCases.map(uc => uc.division))];
  return divisions.sort();
}

// Helper function to get all unique tags
export function getAllTags(): string[] {
  const useCases = get(useCasesStore);
  const tags = new Set<string>();
  useCases.forEach(uc => {
    uc.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
}

// Helper function to get all unique statuses
export function getAllStatuses(): string[] {
  const useCases = get(useCasesStore);
  const statuses = [...new Set(useCases.map(uc => uc.status))];
  return statuses.sort();
}

// Helper function to get use cases by division
export function getUseCasesByDivision(division: string): UseCase[] {
  const useCases = get(useCasesStore);
  return useCases.filter(uc => uc.division === division);
}

// Helper function to get use cases by status
export function getUseCasesByStatus(status: string): UseCase[] {
  const useCases = get(useCasesStore);
  return useCases.filter(uc => uc.status === status);
}

// Helper function to get use cases by tag
export function getUseCasesByTag(tag: string): UseCase[] {
  const useCases = get(useCasesStore);
  return useCases.filter(uc => uc.tags.includes(tag));
}

// Helper function to update filters
export function updateFilters(filters: Partial<UseCaseFilters>) {
  useCaseFilters.update(current => ({
    ...current,
    ...filters
  }));
}

// Helper function to reset filters
export function resetFilters() {
  useCaseFilters.set({
    division: 'all',
    tags: [],
    status: 'all',
    search: ''
  });
}

// Helper function to search use cases
export function searchUseCases(query: string) {
  useCaseFilters.update(filters => ({
    ...filters,
    search: query
  }));
}

// Statistics helper functions
export function getUseCaseStats() {
  const useCases = get(useCasesStore);
  
  const stats = {
    total: useCases.length,
    byDivision: {} as Record<string, number>,
    byStatus: {} as Record<string, number>,
    byTag: {} as Record<string, number>
  };

  // Count by division
  useCases.forEach(uc => {
    stats.byDivision[uc.division] = (stats.byDivision[uc.division] || 0) + 1;
    stats.byStatus[uc.status] = (stats.byStatus[uc.status] || 0) + 1;
    uc.tags.forEach(tag => {
      stats.byTag[tag] = (stats.byTag[tag] || 0) + 1;
    });
  });

  return stats;
}

// Export a function to get the most used AI technologies
export function getTopAITechnologies(limit = 5): { technology: string; count: number }[] {
  const useCases = get(useCasesStore);
  const techCount = new Map<string, number>();

  useCases.forEach(uc => {
    if (uc.techStackAi) {
      uc.techStackAi.forEach(tech => {
        techCount.set(tech, (techCount.get(tech) || 0) + 1);
      });
    }
  });

  return Array.from(techCount.entries())
    .map(([technology, count]) => ({ technology, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
}