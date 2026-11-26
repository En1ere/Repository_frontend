<script setup lang="ts">
import {computed, defineAsyncComponent} from "vue";
import {useRoute} from "vue-router";

const layouts = {
  DefaultLayout: defineAsyncComponent(() => import('@/app/layouts/DefaultLayout.vue')),
  AuthLayout: defineAsyncComponent(() => import('@/features/auth/layouts/AuthLayout.vue'))
}

type LayoutName = keyof typeof layouts

const isLayoutName = (value: unknown): value is LayoutName => {
  return typeof value === 'string' && value in layouts
}

const route = useRoute()

const layout = computed(() => {
  const layoutName = route.meta.layout

  return isLayoutName(layoutName) ? layouts[layoutName] : layouts.DefaultLayout
})
</script>

<template>
  <component :is="layout">
    <slot />
  </component>
</template>
