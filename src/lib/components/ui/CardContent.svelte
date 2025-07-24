<script lang="ts">
  let className = '';
  export { className as class };
  export { className };
</script>

<div class="p-6 pt-0 {className}">
  <slot />
</div>