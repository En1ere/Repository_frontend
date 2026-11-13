<script setup lang="ts">
import { computed, useId } from 'vue'

interface Props {
  size?: number | string
  graphite?: string
  ruby?: string
  white?: string
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 48,
  graphite: '#17181B',
  ruby: '#C9184A',
  white: '#FFFFFF',
})

const titleId = `repository-logo-${useId()}`

const normalizedSize = computed(() =>
  typeof props.size === 'number' ? `${props.size}px` : props.size,
)
</script>

<template>
  <svg
    class="repository-logo"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1024 1024"
    fill="none"
    preserveAspectRatio="xMidYMid meet"
    :width="normalizedSize"
    :height="normalizedSize"
    :role="title ? 'img' : undefined"
    :aria-labelledby="title ? titleId : undefined"
    :aria-hidden="title ? undefined : 'true'"
    :style="{
      '--repository-logo-graphite': graphite,
      '--repository-logo-ruby': ruby,
      '--repository-logo-white': white,
    }"
  >
    <title v-if="title" :id="titleId">{{ title }}</title>
    <path
      class="repository-logo__graphite"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M144 120H560C750 120 860 220 860 405C860 555 780 640 650 665L865 904H720L560 700H360V904H144V120ZM360 300V520H548C638 520 680 482 680 410C680 338 638 300 548 300H360Z"
    />
    <path
      class="repository-logo__ruby"
      d="M360 520L560 700H585L750 904H560L360 690V520Z"
    />
    <path
      class="repository-logo__white"
      d="M360 520L575 710H600L760 904H720L565 725H545L360 560V520Z"
    />
  </svg>
</template>

<style scoped>
.repository-logo {
  display: block;
  flex: none;
}

.repository-logo__graphite {
  fill: var(--repository-logo-graphite);
}

.repository-logo__ruby {
  fill: var(--repository-logo-ruby);
}

.repository-logo__white {
  fill: var(--repository-logo-white);
}
</style>
