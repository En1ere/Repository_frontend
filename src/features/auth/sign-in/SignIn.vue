<script setup lang="ts">
import RInput from "@/shared/ui/RInput.vue";
import {reactive} from "vue";
import RButton from "@/shared/ui/RButton.vue";
import {useAuth} from "@/features/auth/composables/useAuth.ts";
import {AuthPath} from "@/features/auth/types/auth.types.ts";

const {navigateTo} = useAuth();
const userInput = reactive({
  login: '',
  password: ''
})

const createAccountHandler = () => navigateTo(AuthPath.SIGN_UP)
const resetPasswordHandler = () => navigateTo(AuthPath.RECOVER_PASSWORD)
</script>

<template>
  <section class="signin">
    <h1 class="signin__title">
      Войти
    </h1>
    <RInput
      label="Логин"
      :model-value="userInput.login"
    />
    <RInput
      label="Пароль"
      :model-value="userInput.password"
    />
    <RButton
      class="signin__btn"
    >
      Продолжить
    </RButton>
    <div class="signin__links">
      <RButton
        fill-type="empty"
        @click="createAccountHandler"
      >
        Создать аккаунт
      </RButton>
      <RButton
        fill-type="empty"
        @click="resetPasswordHandler"
      >
        Забыли пароль?
      </RButton>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .signin {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;

    &__btn {
      width: 100%;
    }
     &__links {
       width: 100%;
       display: flex;
       justify-content: space-between;

       & button {
         padding: 0 !important;
       }
     }
  }
</style>
