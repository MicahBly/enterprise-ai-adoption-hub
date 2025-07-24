<script lang="ts">
  let className = '';
  export { className as class };
  export { className };
</script>

<div class="rounded-lg border bg-white text-gray-900 shadow-sm {className}">
  <slot />
</div>