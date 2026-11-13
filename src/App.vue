<script setup lang="ts">
import RButton from "@/shared/ui/RButton.vue";
</script>

<template>
  <h1>Hello App!</h1>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
  </nav>
  <r-button>Aboba</r-button>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
