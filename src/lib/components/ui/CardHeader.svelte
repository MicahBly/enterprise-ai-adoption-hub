<script lang="ts">
  let className = '';
  export { className as class };
  export { className };
</script>

<div class="flex flex-col space-y-1.5 p-6 {className}">
  <slot />
</div>