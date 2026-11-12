<script setup lang="ts">
import {computed} from "vue";

type ButtonSizeType = 's' | 'm' | 'l';
type FillType = 'primary' | 'outline' | 'destructive' | 'empty';
type ContentType = 'text' | 'icon';

interface ButtonProps {
  size: ButtonSizeType,
  fillType: FillType,
  contentType: ContentType,
  disabled: boolean
}
const props = withDefaults(defineProps<ButtonProps>(), {
  size: 'm',
  fillType: 'primary',
  contentType: 'text'
})

const normalizeClasses = computed(() => {
  return `button ${props.size} ${props.fillType} ${props.contentType}`
})

</script>

<template>
  <button
    :class="normalizeClasses"
    :disabled="disabled"
    type="button"
  >
    <slot/>
  </button>
</template>

<style scoped lang="scss">
  .button {
    border-radius: $border-radius;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid $color-primary;
  }

  .primary {
    background: $color-primary;
    color: $color-text;

    &:hover:not(:disabled) {

    }
  }
  .outline {
    background: transparent;
    color: $color-primary;
  }
  .empty {
    border: none;
    background: transparent;
    color: $color-primary;
  }

  .s {
    &.text {
      padding: 4px 8px;
    }
    &.icon {
      padding: 4px;
    }
  }
  .m {
    &.text {
      padding: 8px 16px;
    }
    &.icon {
      padding: 8px;
    }
  }
  .l {
    &.text {
      padding: 16px 24px;
    }
    &.icon {
      padding: 16px;
    }
  }

  .button:disabled {
    opacity: 0.7;
    cursor: default;
    pointer-events: none;
  }
</style>
