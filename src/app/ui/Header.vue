<script setup lang="ts">
import RIcon from "@/shared/ui/RIcon.vue";
import RButton from "@/shared/ui/RButton.vue";

const notificationsHandler = () => {}
const settingsHandler = () => {}
</script>

<template>
  <header class="header">
    <h1 class="header__logo">
      Repository
    </h1>
    <div class="right-block">
      <RButton
        fill-type="empty"
        @click="notificationsHandler"
      >
        <RIcon name="bell" />
      </RButton>
      <RButton
        fill-type="empty"
        @click="settingsHandler"
      >
        <RIcon name="settings" />
      </RButton>
    </div>
  </header>
</template>

<style scoped lang="scss">
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #7a1743;

    &__logo {
      color: $color-text;
      &:first-letter {
        color: $color-primary;
      }
    }
  }
</style>
