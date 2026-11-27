<script setup lang="ts">
import type {SizeTypes} from "@/shared/types/styleTypes.ts";
import {computed} from "vue";

interface InputProps {
  label?: string
  size?: SizeTypes
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

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.checked)
}

const normalizeClasses = computed(() => {
  return props.size
})

</script>

<template>
  <label :class="['switcher-wrapper', {'disabled': disabled}]">
    <input
      type="checkbox"
      class="hidden-input"
      :checked="modelValue"
      :disabled="disabled"
      @change="onInput"
    />
    <span
      :class="['switcher', normalizeClasses, {'active': modelValue, 'disabled': disabled}]"
      aria-hidden="true"
    >
      <span :class="['dot', normalizeClasses, {'active': modelValue, 'disabled': disabled}]"/>
    </span>
    <span :class="['switcher-label', {'disabled': disabled}]">
      {{ label }}
    </span>
  </label>
</template>

<style scoped lang="scss">
  .switcher-wrapper {
    display: flex;
    align-items: center;
    cursor: pointer;

    &.disabled {
      cursor: default;
    }
  }

  .switcher-label {
    margin: 0 0 0 12px;
    color: var(--color-text-gray);

    &.disabled {
      color: var(--color-disabled);
    }
  }

  .switcher {
    background: var(--color-background-input);
    border-radius: 24px;
    border: 1px solid var(--color-border);
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

    &.disabled {
      cursor: default;
      pointer-events: none;
      border: 1px solid var(--color-disabled);
      opacity: 0.7;
    }
  }

  .dot {
    display: block;
    border-radius: 100%;
    background: var(--color-text-gray);
    transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
    border: 1px solid var(--color-text-gray);
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

    &.disabled {
      background: var(--color-disabled);
      border: 1px solid var(--color-disabled);
    }
    &.active {
      background: var(--color-text);
      border: 1px solid var(--color-text);
    }
  }

  .hidden-input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    pointer-events: none;

    &:checked + .switcher {
      background: var(--color-primary);
      border: 1px solid var(--color-primary);
    }

    &:focus-visible + .switcher {
      outline: 2px solid var(--color-primary);
      outline-offset: 2px;
    }
  }
</style>
