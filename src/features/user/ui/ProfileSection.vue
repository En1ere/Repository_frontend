<script setup lang="ts">
type SectionProps = {
  title: string
}
const props = withDefaults(defineProps<SectionProps>(), {
  title: ''
})
</script>

<template>
  <section>
    <h2>
      {{ title }}
    </h2>
    <div>list</div>
  </section>
</template>

<style scoped lang="scss">

</style>
