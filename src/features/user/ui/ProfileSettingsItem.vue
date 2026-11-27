<script setup lang="ts">
  type SettingsItemProps = {
    id: number,
    title: string,
    value: string
  }
  const props = withDefaults(defineProps<SettingsItemProps>(), {
    id: 1,
    title: '',
    value: '',
  })
</script>

<template>
  <div>
    <span>{{title}}</span>
    <span>{{value}}</span>
  </div>
</template>

<style scoped lang="scss">

</style>
