<script setup lang="ts">
type SectionProps = {
  title: string
}
const props = withDefaults(defineProps<SectionProps>(), {
  title: ''
})
</script>

<template>
  <section class="setting-section">
    <h2>
      {{ title }}
    </h2>
    <div class="setting-section__items">
      <slot />
    </div>
  </section>
</template>

<style scoped lang="scss">
  .setting-section {
    border: 1px solid #167A63;

    &__items {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }
</style>
