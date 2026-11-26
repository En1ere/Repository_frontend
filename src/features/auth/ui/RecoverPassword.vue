<script setup lang="ts">
import RInput from "@/shared/ui/RInput.vue";
import RButton from "@/shared/ui/RButton.vue";
import {reactive} from "vue";
import useAuth from "@/features/auth/composables/useAuth.ts";
import {useRouter} from "vue-router";
import RIcon from "@/shared/ui/RIcon.vue";

const {resetPassword} = useAuth();
const router = useRouter()

const userInput = reactive({
  oldPassword: '',
  newPassword: ''
})

const continueHandler = () => resetPassword(userInput)
const backHandler = () => router.back()

</script>

<template>
  <section class="reset">
    <h1 class="reset__title">
      Восстановление пароля
    </h1>
    <span class="reset__subtitle">
      Придумайте новый пароль для аккаунта
    </span>
    <RInput
      label="Старый пароль"
      :model-value="userInput.oldPassword"
    />
    <RInput
      label="Новый пароль"
      :model-value="userInput.newPassword"
    />
    <RButton
      class="reset__btn"
      @click="continueHandler"
    >
      Обновить пароль
    </RButton>
    <RButton
      class="reset__back-btn"
      @click="backHandler"
      fill-type="empty"
    >
      Назад
    </RButton>
    <div class="reset__info">
      <RIcon name="shieldInfo" />
      <span>После смены пароля все сессии будут завершены</span>
    </div>
  </section>
</template>

<style scoped lang="scss">
.reset {
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
