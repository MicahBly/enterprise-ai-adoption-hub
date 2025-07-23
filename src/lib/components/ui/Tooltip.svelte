<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  
  export let content: string;
  export let delay: number = 300;
  
  let tooltipElement: HTMLDivElement;
  let targetElement: HTMLDivElement;
  let isVisible = false;
  let isMobile = false;
  let timeoutId: NodeJS.Timeout;
  
  onMount(() => {
    // Check if device is mobile
    isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Cleanup on unmount
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  });
  
  function showTooltip() {
    if (isMobile) return; // Handle mobile differently
    
    if (timeoutId) clearTimeout(timeoutId);
    
    timeoutId = setTimeout(() => {
      isVisible = true;
      // Ensure positioning happens after element is visible
      requestAnimationFrame(() => {
        positionTooltip();
      });
    }, delay);
  }
  
  function hideTooltip() {
    if (timeoutId) clearTimeout(timeoutId);
    isVisible = false;
  }
  
  function handleMobileTouch(event: TouchEvent) {
    if (!isMobile) return;
    
    event.preventDefault();
    isVisible = !isVisible;
    
    if (isVisible) {
      // Ensure positioning happens after element is visible
      requestAnimationFrame(() => {
        positionTooltip();
      });
      
      // Hide tooltip when touching outside
      const handleOutsideTouch = (e: TouchEvent) => {
        if (!tooltipElement?.contains(e.target as Node) && !targetElement?.contains(e.target as Node)) {
          isVisible = false;
          document.removeEventListener('touchstart', handleOutsideTouch);
        }
      };
      
      setTimeout(() => {
        document.addEventListener('touchstart', handleOutsideTouch);
      }, 100);
    }
  }
  
  function positionTooltip() {
    if (!tooltipElement || !targetElement) return;
    
    const targetRect = targetElement.getBoundingClientRect();
    const tooltipRect = tooltipElement.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Normalize position: 15vw from bottom right
    const rightOffset = viewportWidth * 0.15; // 15vw from right
    const bottomOffset = viewportHeight * 0.15; // 15vw from bottom
    
    // Calculate position
    const left = viewportWidth - tooltipRect.width - rightOffset;
    const top = viewportHeight - tooltipRect.height - bottomOffset;
    
    // Ensure minimum padding from edges
    const minPadding = 20;
    const finalLeft = Math.max(minPadding, Math.min(left, viewportWidth - tooltipRect.width - minPadding));
    const finalTop = Math.max(minPadding, Math.min(top, viewportHeight - tooltipRect.height - minPadding));
    
    tooltipElement.style.top = `${finalTop}px`;
    tooltipElement.style.left = `${finalLeft}px`;
    
    // Calculate arrow position to point toward the trigger element
    const tooltipCenterX = finalLeft + tooltipRect.width / 2;
    const tooltipCenterY = finalTop + tooltipRect.height / 2;
    const targetCenterX = targetRect.left + targetRect.width / 2;
    const targetCenterY = targetRect.top + targetRect.height / 2;
    
    // Determine which edge the arrow should be on
    const deltaX = targetCenterX - tooltipCenterX;
    const deltaY = targetCenterY - tooltipCenterY;
    
    // Store arrow position data for CSS
    tooltipElement.dataset.arrowDirection = 'none';
    
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // Arrow on left or right side
      if (deltaX < 0) {
        tooltipElement.dataset.arrowDirection = 'left';
      } else {
        tooltipElement.dataset.arrowDirection = 'right';
      }
    } else {
      // Arrow on top or bottom side
      if (deltaY < 0) {
        tooltipElement.dataset.arrowDirection = 'top';
      } else {
        tooltipElement.dataset.arrowDirection = 'bottom';
      }
    }
  }
  
  onDestroy(() => {
    if (timeoutId) clearTimeout(timeoutId);
  });
</script>

<div 
  bind:this={targetElement}
  class="inline-block"
  on:mouseenter={showTooltip}
  on:mouseleave={hideTooltip}
  on:focus={showTooltip}
  on:blur={hideTooltip}
  on:touchstart={handleMobileTouch}
  role="button"
  tabindex="0"
  aria-label="More information"
>
  <slot>
    <div class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 hover:bg-blue-200 transition-all hover:scale-110 cursor-help">
      <svg
        class="h-4 w-4 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2.5"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  </slot>
</div>

{#if isVisible}
  <div
    bind:this={tooltipElement}
    class="tooltip fixed z-50 px-4 py-3 text-base text-white bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg shadow-2xl pointer-events-none max-w-[400px] border border-gray-700"
    role="tooltip"
  >
    <div class="relative">
      <div class="font-bold text-blue-400 mb-2 text-sm uppercase tracking-wider">
        Feature Product Value:
      </div>
      <div class="leading-relaxed">
        {content}
      </div>
      <div class="tooltip-arrow" />
    </div>
  </div>
{/if}

<style>
  .tooltip {
    animation: fadeIn 0.2s ease-out;
  }
  
  .tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
  }
  
  /* Arrow positioning styles */
  .tooltip[data-arrow-direction="top"] .tooltip-arrow {
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 0 6px 6px 6px;
    border-color: transparent transparent #1f2937 transparent;
  }
  
  .tooltip[data-arrow-direction="bottom"] .tooltip-arrow {
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 6px 6px 0 6px;
    border-color: #1f2937 transparent transparent transparent;
  }
  
  .tooltip[data-arrow-direction="left"] .tooltip-arrow {
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border-width: 6px 6px 6px 0;
    border-color: transparent #1f2937 transparent transparent;
  }
  
  .tooltip[data-arrow-direction="right"] .tooltip-arrow {
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    border-width: 6px 0 6px 6px;
    border-color: transparent transparent transparent #1f2937;
  }
  
  .tooltip[data-arrow-direction="none"] .tooltip-arrow {
    display: none;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.9) translateY(10px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
  
  /* Add subtle glow effect */
  .tooltip {
    box-shadow: 
      0 20px 25px -5px rgba(0, 0, 0, 0.3),
      0 10px 10px -5px rgba(0, 0, 0, 0.2),
      0 0 0 1px rgba(59, 130, 246, 0.3),
      0 0 20px rgba(59, 130, 246, 0.15);
  }
  
  /* Mobile-specific styles */
  @media (hover: none) and (pointer: coarse) {
    .tooltip {
      pointer-events: auto;
    }
  }
</style>