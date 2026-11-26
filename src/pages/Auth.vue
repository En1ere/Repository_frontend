<script setup lang="ts">
import RBottomSection from "@/shared/ui/RBottomSection.vue";
import SignIn from "@/features/auth/sign-in/SignIn.vue";
import SignUp from "@/features/auth/sign-up/SignUp.vue";
import IconRegistrationBoxes from "@/shared/ui/icons/IconRegistrationBoxes.vue";

const signIn = true
</script>

<template>
  <main class="auth">
    <div class="auth__content">
      <h1 class="auth__title">Repository</h1>
      <div class="auth__img">
        <IconRegistrationBoxes />
      </div>
      <span class="auth__subtitle">
        Все на своих местах
      </span>
    </div>
    <RBottomSection>
      <SignIn v-if="signIn" />
      <SignUp v-if="!signIn" />
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
      font-family: 'CheyenneBold', sans-serif;;
    }
    &__img {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 300px;
      height: 300px;
      color: $color-primary;
    }
    &__subtitle {
      font-size: $font-m;
    }
  }
</style>
