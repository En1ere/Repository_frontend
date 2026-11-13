<script setup lang="ts">
import type {StyleSize} from "@/shared/types/styleSize.ts";
import {computed} from "vue";

interface InputProps {
  label?: string
  size?: StyleSize
  disabled?: boolean
}
const props = withDefaults(defineProps<InputProps>(), {
  label: '',
  size: 'm',
  disabled: false
})

const normalizeClasses = computed(() => {
  return `input-container ${props.size}`
})

</script>

<template>
  <div class="input-wrapper">
    <label
      v-if="label"
      class="input-label"
    >
      {{label}}
    </label>
    <div :class="normalizeClasses">
      <input class="input" type="text">
    </div>
  </div>
</template>

<style scoped lang="scss">
  .input-wrapper {
    display: flex;
    flex-direction: column;
  }

  .input-label {
    color: $color-label;
    font-size: 0.6rem;
    margin-bottom: 4px;
  }

  .input-container {
    position: relative;
    background: $color-background-input;
    border: 2px solid $color-border;
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
  }

  .input {
    width: 100%;
    height: 100%;
    background: transparent;
    outline: 0;
    color: $color-text;
    border: 2px solid transparent;
    border-radius: 5px;
    padding: 0 12px;
    transition: all 0.2s;

    &:focus-visible {
      outline: 2px solid $color-primary;
    }
  }
</style>
