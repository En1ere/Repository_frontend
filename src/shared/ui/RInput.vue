<script setup lang="ts">
import type {SizeTypes} from "@/shared/types/styleTypes.ts";
import {computed} from "vue";
import RButton from "@/shared/ui/RButton.vue";
import RIcon from "@/shared/ui/RIcon.vue";

interface InputProps {
  label?: string
  size?: SizeTypes
  disabled?: boolean
  modelValue: string
}
const props = withDefaults(defineProps<InputProps>(), {
  label: '',
  size: 'm',
  disabled: false,
  modelValue: ''
})

const emit = defineEmits(['update:modelValue'])

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value || '')
}

const normalizeClasses = computed(() => {
  return `input-container ${props.size}`
})

const clearInput = () => {
  emit('update:modelValue', '')
}
</script>

<template>
  <div class="input-wrapper">
    <label
      v-if="label"
      :class="['input-label', {'disabled': disabled}]"
    >
      {{label}}
    </label>
    <div :class="[normalizeClasses, {'disabled': disabled}]">
      <input
        class="input"
        type="text"
        :value="modelValue"
        :disabled="disabled"
        @input="onInput"
      >
      <RButton
        v-if="modelValue.length > 0"
        class="clear-input-btn"
        fill-type="empty"
        @click="clearInput"
      >
        <r-icon name="close" />
      </RButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .input-wrapper {
    display: flex;
    flex-direction: column;
  }

  .input-label {
    color: var(--color-label);
    font-size: 0.6rem;
    margin-bottom: 4px;

    &.disabled {
      color: var(--color-disabled);
    }
  }

  .input-container {
    position: relative;
    background: var(--color-background-input);
    border: 1px solid var(--color-border);
    border-radius: $border-radius;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &.s {
      height: 32px;
    }
    &.m {
      height: 36px;
    }
    &.l {
      height: 42px;
    }

    &.disabled {
      border: 1px solid var(--color-disabled);
    }
  }

  .input {
    width: 100%;
    height: 100%;
    background: transparent;
    outline: 0;
    color: var(--color-text);
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 0 12px;
    transition: all 0.2s;

    &:focus-visible {
      outline: 1px solid var(--color-primary);
    }

    &:disabled {
      pointer-events: none;
    }
  }

  .clear-input-btn {
    position: absolute;
    right: 0;
  }
</style>
