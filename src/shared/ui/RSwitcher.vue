<script setup lang="ts">
import type {StyleSize} from "@/shared/types/styleSize.ts";
import {computed} from "vue";

interface InputProps {
  label?: string
  size?: StyleSize
  disabled?: boolean
  modelValue: boolean
}

const props = withDefaults(defineProps<InputProps>(), {
  label: '',
  size: 'm',
  disabled: false,
  modelValue: false
})

const emit = defineEmits(['update:modelValue'])

const onClick = () => {
  emit('update:modelValue', !props.modelValue);
}

const normalizeClasses = computed(() => {
  return props.size
})

</script>

<template>
  <div class="switcher-wrapper">
    <button
      @click="onClick"
      :class="['switcher', normalizeClasses, {'active': modelValue}]"
      :disabled="disabled"
    >
      <span :class="['dot', normalizeClasses, {'active': modelValue, 'disabled': disabled}]"/>
    </button>
    <label :class="['switcher-label', {'disabled': disabled}]">
      {{ label }}
    </label>
  </div>
</template>

<style scoped lang="scss">
  .switcher-wrapper {
    display: flex;
    align-items: center;
  }

  .switcher-label {
    margin: 0 0 0 12px;
    color: $color-text-gray;

    &.disabled {
      color: $color-disabled;
    }
  }

  .switcher {
    background: $color-background-input;
    border-radius: 24px;
    border: 1px solid $color-border;
    display: flex;
    padding: 6px;
    transition: all 0.2s;

    &.s {
      height: 28px;
      width: 46px;
      min-width: 46px;
    }
    &.m {
      height: 32px;
      width: 54px;
      min-width: 54px;
    }
    &.l {
      height: 36px;
      width: 62px;
      min-width: 62px;
    }

    &.active {
      background: $color-primary;
      border: 1px solid $color-primary;
    }

    &:disabled {
      cursor: default;
      pointer-events: none;
      border: 1px solid $color-disabled;
    }
  }

  .dot {
    display: block;
    border-radius: 100%;
    background: $color-text-gray;
    transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
    border: 1px solid $color-text-gray;
    transform: translateX(0px);

    &.s {
      height: 14px;
      width: 14px;
      min-width: 14px;

      &.active {
        transform: translateX(18px);
      }
    }
    &.m {
      height: 18px;
      width: 18px;
      min-width: 18px;

      &.active {
        transform: translateX(22px);
      }
    }
    &.l {
      height: 22px;
      width: 22px;
      min-width: 22px;

      &.active {
        transform: translateX(26px);
      }
    }

    &.active {
      background: $color-text;
      border: 1px solid $color-text;
    }
    &.disabled {
      background: $color-disabled;
      border: 1px solid $color-disabled;
    }
  }
</style>
