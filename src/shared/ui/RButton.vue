<script setup lang="ts">
import {computed} from "vue";
import type {ContentTypes, FillTypes, SizeTypes} from "@/shared/types/sizeTypes.ts";

interface ButtonProps {
  size?: SizeTypes,
  fillType?: FillTypes,
  contentType?: ContentTypes,
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

    &:focus-visible {
      outline: 1px solid $color-primary !important;
      outline-offset: 4px;
    }
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
      text-decoration: underline;
    }
    &:active:not(:disabled) {
      filter: brightness(90%);
    }
  }

  .s {
    height: 30px;
    &.text {
      padding: 0 8px;
    }
    &.icon {
      padding: 4px;
    }
  }
  .m {
    height: 36px;
    &.text {
      padding: 0 16px;
    }
    &.icon {
      padding: 8px;
    }
  }
  .l {
    height: 42px;
    &.text {
      padding: 0 24px;
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
