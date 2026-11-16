import type { Component } from 'vue'
import IconSearch from './IconSearch.vue'

export const iconRegistry = {
  search: IconSearch,
} as const satisfies Record<string, Component>

export type IconName = keyof typeof iconRegistry
