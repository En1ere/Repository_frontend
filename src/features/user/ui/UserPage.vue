<script setup lang="ts">
import Profile from "@/features/user/ui/Profile.vue";
</script>

<template>
  <main class="user-wrapper">
    <Profile />
  </main>
</template>

<style scoped lang="scss">
  .user-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
