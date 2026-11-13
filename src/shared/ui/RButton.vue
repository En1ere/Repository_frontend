<script setup lang="ts">
import {computed} from "vue";

type ButtonSizeType = 's' | 'm' | 'l';
type FillType = 'primary' | 'outline' | 'destructive' | 'empty';
type ContentType = 'text' | 'icon';

interface ButtonProps {
  size?: ButtonSizeType,
  fillType?: FillType,
  contentType?: ContentType,
  disabled?: boolean
}
const props = withDefaults(defineProps<ButtonProps>(), {
  size: 'm',
  fillType: 'primary',
  contentType: 'text',
  disabled: false,
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
    cursor: pointer;
    transition: all 0.2s;
  }

  .primary {
    background: $color-primary;
    color: $color-text;

    &:hover:not(:disabled) {
      filter: brightness(85%);
    }
    &:active:not(:disabled) {
      filter: brightness(70%);
    }
  }

  .outline {
    background: transparent;
    color: $color-primary;

    &:hover:not(:disabled) {
      box-shadow: 0px 0px 10px 1px $color-primary;
    }
    &:active:not(:disabled) {
      filter: brightness(90%);
    }
  }

  .empty {
    border-color: transparent;
    background: transparent;
    color: $color-primary;

    &:hover:not(:disabled) {
      box-shadow: 0px 0px 10px 1px $color-primary;
    }
    &:active:not(:disabled) {
      filter: brightness(90%);
    }
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
    opacity: 0.6;
    cursor: default;
    pointer-events: none;
  }
</style>
