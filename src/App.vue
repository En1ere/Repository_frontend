<script setup lang="ts">
import RButton from "@/shared/ui/RButton.vue";
import RInput from "@/shared/ui/RInput.vue";
import {ref} from "vue";
import RSwitcher from "@/shared/ui/RSwitcher.vue";
import RCheckbox from "@/shared/ui/RCheckbox.vue";
import RLogo from "@/shared/ui/RLogo.vue";
import RIcon from "@/shared/ui/RIcon.vue";

const aboba = ref('');
const switcher = ref(false);
</script>

<template>
  <h1>Repository</h1>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
  </nav>
  <div class="test">

    <r-logo />
    <div class="test-btn">
      <r-button fill-type="primary">Aboba</r-button>
      <r-button fill-type="outline">Aboba</r-button>
      <r-button fill-type="destructive">Aboba</r-button>
      <r-button fill-type="empty">Aboba</r-button>
    </div>
    <r-input label="huisdaf" v-model="aboba" />
    <r-switcher size="l" label="aboba" v-model="switcher" />
    <r-checkbox label="aboba" v-model="switcher" />
    <r-icon name="search" variant="warning" :rotate="180" />
  </div>
  <main>
    <RouterView />
  </main>
</template>

<style scoped lang="scss">
h1:first-letter {
  color: $color-primary;
}
.test {
  background: $color-background-light;
  border: 1px solid $color-border;
  margin: 24px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.test-btn {
  display: flex;
  gap: 8px;
}
</style>
