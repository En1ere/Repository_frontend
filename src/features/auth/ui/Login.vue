<script setup lang="ts">
import RInput from "@/shared/ui/RInput.vue";
import {reactive} from "vue";
import RButton from "@/shared/ui/RButton.vue";
import useAuth from "@/features/auth/composables/useAuth.ts";
import {AuthPath} from "@/features/auth/types/auth.types.ts";

const {navigateTo, login} = useAuth();
const userInput = reactive({
  login: '',
  password: ''
})

const createAccountHandler = () => navigateTo(AuthPath.SIGN_UP)
const recoverPasswordHandler = () => navigateTo(AuthPath.RECOVER_PASSWORD)
const continueHandler = () => login(userInput)
</script>

<template>
  <section class="login">
    <h1 class="login__title">
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
      class="login__btn"
      @click="continueHandler"
    >
      Продолжить
    </RButton>
    <div class="login__links">
      <RButton
        fill-type="empty"
        @click="createAccountHandler"
      >
        Создать аккаунт
      </RButton>
      <RButton
        fill-type="empty"
        @click="recoverPasswordHandler"
      >
        Забыли пароль?
      </RButton>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .login {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;

    &__title {
      margin: 0 0 24px;
    }
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
