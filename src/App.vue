<script setup lang="ts">
import RButton from "@/shared/ui/RButton.vue";
import RInput from "@/shared/ui/RInput.vue";
import {ref} from "vue";
import RSwitcher from "@/shared/ui/RSwitcher.vue";
import RCheckbox from "@/shared/ui/RCheckbox.vue";
import RLogo from "@/shared/ui/RLogo.vue";
import RIcon from "@/shared/ui/RIcon.vue";
import RDropdown, {type DropdownOption} from "@/shared/ui/RDropdown.vue";

const aboba = ref('');
const switcher = ref(false);
const options = [
  {id: 1, label: 'option 1'},
  {id: 2, label: 'option 2'},
  {id: 3, label: 'option 3'},
  {id: 4, label: 'option 4'},
  {id: 5, label: 'option 5'},
  {id: 6, label: 'option 6'},
]
const selected = ref<DropdownOption|null>(null);

const setSelected = (data: DropdownOption) => {
  console.log(12123)
  selected.value = data
  console.log(data)
}
</script>

<template>
  <h1>Repository</h1>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
  </nav>
  <div class="test">

    <div class="logo-wrap">
      <r-logo />
    </div>
    <div class="test-btn">
      <r-button fill-type="primary">Aboba</r-button>
      <r-button fill-type="outline">Aboba</r-button>
      <r-button fill-type="destructive">Aboba</r-button>
      <r-button fill-type="empty">Aboba</r-button>
    </div>
    <r-input label="huisdaf" v-model="aboba" />
    <r-switcher size="l" label="aboba" v-model="switcher" />
    <r-checkbox label="aboba" v-model="switcher" />
    <r-dropdown
      v-model="selected"
      :options="options"
      @change="setSelected"
    />

    <div>
      <span>Иконки</span>
      <div class="icons">
        <r-icon name="archive"/>
        <r-icon name="home"/>
        <r-icon name="arrowLeftRight"/>
        <r-icon name="camera"/>
        <r-icon name="folder"/>
        <r-icon name="shieldCheck"/>
        <r-icon name="shieldX"/>
        <r-icon name="info"/>
        <r-icon name="clockLarge"/>
        <r-icon name="userPlus"/>
        <r-icon name="circleCheck"/>
        <r-icon name="container"/>
        <r-icon name="copy"/>
        <r-icon name="eye"/>
        <r-icon name="pencil"/>
        <r-icon name="qrCode"/>
        <r-icon name="menu"/>
        <r-icon name="monitor"/>
        <r-icon name="moon"/>
        <r-icon name="userArrowRight"/>
        <r-icon name="hash"/>
        <r-icon name="images"/>
        <r-icon name="keyboard"/>
        <r-icon name="locateFixed"/>
        <r-icon name="mail"/>
        <r-icon name="mapPin"/>
        <r-icon name="plusLarge"/>
        <r-icon name="search" variant="warning" :rotate="180" />
        <r-icon name="searchPlus"/>
        <r-icon name="slidersHorizontal"/>
        <r-icon name="smartphone"/>
        <r-icon name="trash"/>
        <r-icon name="zap"/>
        <r-icon name="sun"/>
        <r-icon name="minus"/>
        <r-icon name="plus"/>
        <r-icon name="close"/>
        <r-icon name="history"/>
        <r-icon name="user"/>
        <r-icon name="bell"/>
        <r-icon name="check"/>
        <r-icon name="chevronDown"/>
        <r-icon name="chevronRight"/>
        <r-icon name="dragHandle"/>
        <r-icon name="ellipsisVertical"/>
        <r-icon name="moveHorizontal"/>
        <r-icon name="wrench"/>
        <r-icon name="settings"/>
        <r-icon name="userCrown"/>
        <r-icon name="calendar"/>
        <r-icon name="file"/>
        <r-icon name="fileText"/>
        <r-icon name="logOut"/>
        <r-icon name="users"/>
        <r-icon name="shieldInfo"/>
        <r-icon name="download"/>
        <r-icon name="clock"/>
        <r-icon name="cameraOff"/>
        <r-icon name="chrome"/>
      </div>
      <hr>
      <span>Фоновые SVG-иллюстрации</span>
      <div class="illustrations">
        <figure class="illustration illustration--light">
          <r-icon name="imageErrorLight" :size="160" />
        </figure>
        <figure class="illustration illustration--dark">
          <r-icon name="imageErrorDark" :size="160" />
        </figure>
        <figure class="illustration illustration--dark">
          <r-icon name="totpSetup" :size="160" />
          <figcaption>Настройка TOTP</figcaption>
        </figure>
        <figure class="illustration illustration--dark">
          <r-icon name="totpVerification" :size="160" />
          <figcaption>Проверка TOTP</figcaption>
        </figure>
        <figure class="illustration illustration--dark">
          <r-icon name="emailVerification" :size="160" />
          <figcaption>Подтверждение e-mail</figcaption>
        </figure>
        <figure class="illustration illustration--dark">
          <r-icon name="registrationBoxes" :size="160" />
          <figcaption>Регистрация</figcaption>
        </figure>
        <figure class="illustration illustration--dark">
          <r-icon name="recoveryCodesIllustration" :size="160" />
          <figcaption>Резервные коды</figcaption>
        </figure>
        <figure class="illustration illustration--dark">
          <r-icon name="recoveryExpired" :size="160" />
          <figcaption>Срок восстановления истёк</figcaption>
        </figure>
        <figure class="illustration illustration--dark">
          <r-icon name="passwordRecovery" :size="160" />
          <figcaption>Запрос восстановления пароля</figcaption>
        </figure>
        <figure class="illustration illustration--dark">
          <r-icon name="passwordReset" :size="160" />
          <figcaption>Новый пароль</figcaption>
        </figure>
      </div>
    </div>
  </div>
  <main>
    <RouterView />
  </main>
</template>

<style scoped lang="scss">
h1:first-letter {
  color: $color-primary;
}
.logo-wrap {
  width: 28px;
  height: 28px;
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
.test-btn {
  display: flex;
  gap: 8px;
}
.icons {
  display: grid;
  grid-template-columns: repeat(8, 36px);
  gap: 8px;
}
.illustrations {
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  gap: 12px;
}
.illustration {
  min-height: 210px;
  margin: 0;
  padding: 12px;
  border: 1px solid $color-border;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &--light {
    color: #7a1743;
    background: #e8ebf0;
  }

  &--dark {
    color: #ff0f5f;
    background: #252c36;
  }
}
figcaption {
  color: inherit;
  text-align: center;
}
span {
  display: block;
}
</style>
