<script setup lang="ts">
import RIcon from "@/shared/ui/RIcon.vue";
import {computed, onBeforeUnmount, onMounted, ref} from "vue";
import type {SizeTypes} from "@/shared/types/styleTypes.ts";

export type DropdownOption = {
  id: number,
  label: string
}
interface DropdownProps {
  options: DropdownOption[]
  modelValue: DropdownOption|null
  label?: string
  size?: SizeTypes
  disabled?: boolean
}

const props = withDefaults(defineProps<DropdownProps>(), {
  label: '',
  options: () => [],
  modelValue: null,
  size: 'm',
  disabled: false
});
const emit = defineEmits<{
  'update:modelValue': [data: DropdownOption]
}>()

const dropdownRef = ref<HTMLElement | null>(null)

const selectedOption = computed(() => {
  return props.options.find(option => props.modelValue ? option.id === props.modelValue.id : null)
})
const isDisabled = computed(() => props.disabled || props.options.length < 1);
const isOpen = ref(true);
const labelText = computed(() => props.label.length > 0 ? props.label : 'Выберите');
const normalizeClasses = computed(() => {
  return `${props.size} ${isDisabled.value && 'disabled'} ${selectedOption.value && 'value'}`
})

const toggleOpen = () => {
  if(isDisabled.value) return;
  isOpen.value = !isOpen.value;
}
function selectOption(option: DropdownOption) {
  emit('update:modelValue', option)
  isOpen.value = false
}

function handleOutsidePointer(event: PointerEvent) {
  const target = event.target

  if (!(target instanceof Node)) return

  if (dropdownRef.value?.contains(target)) return

  isOpen.value = false
}

onMounted(() => {
  document.addEventListener('pointerdown', handleOutsidePointer)
})

onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', handleOutsidePointer)
})
</script>

<template>
  <div
    ref="dropdownRef"
    :class="['r-dropdown-wrapper', normalizeClasses]"
  >
    <button
      class="r-dropdown-button"
      @click="toggleOpen()"
    >
      <span>
        {{selectedOption?.label ?? labelText}}
      </span>
      <r-icon
        name="chevronDown"
        :rotate="isOpen ? 180 : 0"
      />
    </button>

    <Transition name="dropdown">
      <div
        v-if="isOpen"
        :class="['r-dropdown-options', normalizeClasses]"
      >
        <div :class="['scroll-wrapper', normalizeClasses]">
          <button
            v-for="option in options"
            :key="option.id"
            @click="selectOption(option)"
            :class="[normalizeClasses]"
          >
            {{option.label}}
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
  .r-dropdown-wrapper {
    width: 100%;
    position: relative;
    cursor: pointer;
    color: $color-label;

    &.s {
      height: 32px;
    }
    &.m {
      height: 36px;
    }
    &.l {
      height: 42px;
    }

    &.value {
      color: $color-text;
    }
    &.disabled {
      opacity: 0.6;
    }
  }

  .r-dropdown-button {
    cursor: pointer;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    background: $color-background-input;
    border: 1px solid $color-border;
    border-radius: $border-radius;
    color: inherit;

    &:focus-visible {
      outline: 2px solid $color-primary;
      outline-offset: 2px;
    }
  }

  .r-dropdown-options {
    z-index: 100;
    position: absolute;
    width: 100%;
    background: $color-background-input;
    border: 1px solid $color-border;
    border-radius: $border-radius;
    overflow: hidden;
    padding: 4px 0;

    &.s {
      top: 38px;
    }
    &.m {
      top: 42px;
    }
    &.l {
      top: 48px;
    }

    & button {
      background: transparent;
      border: 0;
      color: $color-text;
      text-align: left;
      padding: 0 12px;
      cursor: pointer;


      &.s {
        height: 28px;
        min-height: 28px;
      }
      &.m {
        height: 32px;
        min-height: 32px;
      }
      &.l {
        height: 38px;
        min-height: 38px;
      }

      &:hover {
        background: color-mix($color-primary 15%, transparent);
      }

      &:focus-visible {
        outline: 0;
        background: color-mix($color-primary 15%, transparent);
      }
    }
  }

  .scroll-wrapper {
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    &.s {
      top: 38px;
      max-height: calc(28px * 4);
    }
    &.m {
      top: 42px;
      max-height: calc(32px * 4);
    }
    &.l {
      top: 48px;
      max-height: calc(38px * 4);
    }
  }

  .dropdown-enter-active,
  .dropdown-leave-active {
    transition:
      opacity 150ms ease,
      transform 150ms ease;
  }

  .dropdown-enter-from,
  .dropdown-leave-to {
    opacity: 0;
    transform: translateY(-4px) scaleY(0.6);
  }

  .dropdown-enter-to,
  .dropdown-leave-from {
    opacity: 1;
    transform: translateY(0) scaleY(1);
  }

  @media (prefers-reduced-motion: reduce) {
    .dropdown-enter-active,
    .dropdown-leave-active {
      transition: none;
    }
  }
</style>
