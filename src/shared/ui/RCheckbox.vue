<script setup lang="ts">
import RIcon from "@/shared/ui/RIcon.vue";

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
      <r-icon
        v-if="modelValue"
        name="check"
        variant="text"
      />
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
