<script lang="ts">
  let className = '';
  export { className as class };
  export { className };
</script>

<h3 class="text-2xl font-semibold leading-none tracking-tight text-gray-900 {className}">
  <slot />
</h3>