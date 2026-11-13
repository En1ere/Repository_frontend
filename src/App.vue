<script setup lang="ts">
import RButton from "@/shared/ui/RButton.vue";
import RInput from "@/shared/ui/RInput.vue";
</script>

<template>
  <h1>Repository</h1>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
  </nav>
  <div class="test">

    <r-button fill-type="empty">Aboba</r-button>
    <r-input label="huisdaf" />
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
</style>
