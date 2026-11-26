<script setup lang="ts">
import RBottomSection from "@/shared/ui/RBottomSection.vue";
import IconRegistrationBoxes from "@/shared/ui/icons/IconRegistrationBoxes.vue";
import useAuth from "@/features/auth/composables/useAuth.ts";
import IconPasswordReset from "@/shared/ui/icons/IconPasswordReset.vue";

const {isReset} = useAuth()

</script>

<template>
  <main class="auth">
    <div class="auth__content">
      <h1 class="auth__title">Repository</h1>
      <div class="auth__img">
        <IconPasswordReset v-if="isReset" />
        <IconRegistrationBoxes v-else />
        <Icon />
      </div>
      <span class="auth__subtitle">
        Все на своих местах
      </span>
    </div>
    <RBottomSection>
      <slot />
    </RBottomSection>
  </main>
</template>

<style scoped lang="scss">
  .auth {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 15% 0 0;

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__title {
      font-size: $font-title;
      font-family: 'CheyenneBold', sans-serif;
    }
    &__subtitle {
      color: $color-text-gray;
    }
    &__img {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      color: $color-primary;
    }
    &__subtitle {
      font-size: $font-m;
    }
  }
</style>
