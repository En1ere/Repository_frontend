<script setup lang="ts">
import RInput from "@/shared/ui/RInput.vue";
import RButton from "@/shared/ui/RButton.vue";
import {reactive} from "vue";
import useAuth from "@/features/auth/composables/useAuth.ts";
import {AuthPath} from "@/features/auth/types/auth.types.ts";

const {navigateTo, register} = useAuth();

const userInput = reactive({
  login: '',
  password: ''
})

// todo politics + validation
const politicsHandler = () => {}
const termsHandler = () => {}
const continueHandler = () => register(userInput)
const loginHandler = () => navigateTo(AuthPath.SIGN_IN)
</script>

<template>
  <section class="register">
    <h1 class="register__title">
      Создать аккаунт
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
      class="register__btn"
      @click="continueHandler"
    >
      Продолжить
    </RButton>
    <div>
      <span>
        Продолжая, вы принимаете
      </span>
      <RButton
        fill-type="empty"
        @click="termsHandler"
      >
        условия
      </RButton>
      <span> и </span>
      <RButton
        fill-type="empty"
        @click="politicsHandler"
      >
        политику конфиденциальности
      </RButton>
    </div>
    <div class="register__links">
      <span>
        Уже есть аккаунт?
      </span>
      <RButton
        fill-type="empty"
        @click="loginHandler"
      >
        Войти
      </RButton>
    </div>
  </section>
</template>

<style scoped lang="scss">
.register {
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
    justify-content: flex-start;
  }
}
</style>
