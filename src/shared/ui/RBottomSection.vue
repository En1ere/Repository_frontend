<script setup lang="ts">

</script>

<template>
  <section class="bottom-section-wrapper">
    <div class="bottom-section">
      <slot />
    </div>
  </section>
</template>

<style scoped lang="scss">
  .bottom-section-wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background: var(--color-border);
    border-radius: 12px 12px 0 0;
    padding: 2px 0 0;
  }
  .bottom-section {
    display: flex;
    padding: 24px;
    background: var(--color-background-light);
    border-radius: 14px 14px 0 0;
    border: transparent;
  }
</style>
