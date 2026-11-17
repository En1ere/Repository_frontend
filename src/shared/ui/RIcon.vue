<script setup lang="ts">
import { computed, type CSSProperties } from 'vue'
import { iconRegistry, type IconName } from './icons/registry'

export type IconColor = 'primary' | 'text' | 'destructive' | 'success' | 'warning' | 'muted'

export interface RIconProps {
  name: IconName
  variant?: IconColor
  size?: number
  rotate?: number
}

const props = withDefaults(defineProps<RIconProps>(), {
  variant: 'primary',
  size: 20,
  rotate: 0,
})

const iconComponent = computed(() => iconRegistry[props.name])

const iconStyles = computed<CSSProperties>(() => {
  const dimension = `${props.size}px`
  return {
    width: dimension,
    height: dimension,
    rotate: `${props.rotate}deg`,
  }
})
</script>

<template>
  <component
    :is="iconComponent"
    class="r-icon"
    :class="['r-icon', `r-icon_color-${props.variant}`]"
    :style="iconStyles"
    aria-hidden="true"
  />
</template>

<style scoped lang="scss">
$icon-colors: (
  'primary': $color-primary,
  'text': $color-text,
  'destructive': $color-error,
  'warning': $color-warning,
  'success': $color-success,
  'muted': $color-disabled,
);

.r-icon {
  display: inline-block;
  flex-shrink: 0;
  vertical-align: middle;
  transition:
    color 0.15s ease,
    transform 0.2s ease;

  @each $name, $value in $icon-colors {
    &_color-#{$name} {
      color: #{$value};
    }
  }
}
</style>
