<script setup lang="ts">
interface InputProps {
  label?: string
  disabled?: boolean
  modelValue: boolean
}
const props = withDefaults(defineProps<InputProps>(), {
  label: '',
  disabled: false,
  modelValue: false,
})

const emit = defineEmits(['update:modelValue'])

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.checked)
}
</script>

<template>
  <label class="checkbox-wrapper" :class="{ disabled }">
    <input
      type="checkbox"
      class="hidden-input"
      :checked="modelValue"
      :disabled="disabled"
      @change="onInput"
    />
    <span class="checkmark" aria-hidden="true">
      <!-- todo icon-->
      <svg v-if="modelValue" viewBox="0 0 24 24" width="16" height="16">
        <path
          fill="currentColor"
          d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
        />
      </svg>
    </span>
    <span v-if="label" class="label-text">{{ label }}</span>
  </label>
</template>

<style scoped lang="scss">
.checkbox-wrapper {
  display: inline-flex;
  align-items: center;
  user-select: none;
  gap: 8px;
  cursor: pointer;

  &.disabled {
    opacity: 0.5;
    cursor: default;
  }
}

.checkmark {
  width: 20px;
  height: 20px;
  border: 2px solid $color-border;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  background-color: $color-background-input;
  color: $color-text;
}
.hidden-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;

  &:checked + .checkmark {
    background-color: $color-primary;
    border-color: $color-primary;
  }

  &:focus-visible + .checkmark {
    outline: 2px solid $color-primary;
    outline-offset: 2px;
  }
}

.label-text {
  color: $color-text-gray;
}
</style>
