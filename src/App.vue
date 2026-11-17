<script setup lang="ts">
import RButton from "@/shared/ui/RButton.vue";
import RInput from "@/shared/ui/RInput.vue";
import {ref} from "vue";
import RSwitcher from "@/shared/ui/RSwitcher.vue";
import RCheckbox from "@/shared/ui/RCheckbox.vue";
import RLogo from "@/shared/ui/RLogo.vue";
import RIcon from "@/shared/ui/RIcon.vue";

const aboba = ref('');
const switcher = ref(false);
</script>

<template>
  <h1>Repository</h1>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
  </nav>
  <div class="test">

    <r-logo />
    <div class="test-btn">
      <r-button fill-type="primary">Aboba</r-button>
      <r-button fill-type="outline">Aboba</r-button>
      <r-button fill-type="destructive">Aboba</r-button>
      <r-button fill-type="empty">Aboba</r-button>
    </div>
    <r-input label="huisdaf" v-model="aboba" />
    <r-switcher size="l" label="aboba" v-model="switcher" />
    <r-checkbox label="aboba" v-model="switcher" />
    <r-icon name="search" variant="warning" :rotate="180" />


    <span>Норм</span>
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
      <r-icon name="search"/>
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
    </div>
    <hr>
    <span>Нужно поправить</span>
    <div class="icons">
      <r-icon name="cameraOff"/><!--catalog-photo-camera-denied-reference-->
      <r-icon name="ellipsisVertical"/> <!--сделать точки побольше-->
      <r-icon name="moveHorizontal"/> <!--неясно, что вообще делает. Вероятно из catalog-history-reference на пункте перемещен - нужно исправить-->
      <r-icon name="wrench"/> <!--тут просто сломана - изменить полностью-->
      <r-icon name="settings"/> <!--сделать более рельефную - сливается-->
      <r-icon name="userCrown"/> <!--корона не считывается-->
      <r-icon name="chrome"/> <!--Сделать линии загнутыми, как в лого хрома-->
      <r-icon name="calendar"/> <!--календарь выглядит как просто блокнот - нужно доработать-->
      <r-icon name="file"/> <!--Слишком узкая и высокая. Вероятно, должна быть частью фона, а не прям иконка (уточнить)-->
      <r-icon name="fileText"/> <!--Слишком узкая и высокая. Вероятно, должна быть частью фона, а не прям иконка (уточнить)-->
      <r-icon name="logOut"/> <!--сделать более понятную - слишком узкая-->
      <r-icon name="users"/> <!-- account-deletion-reference тут хороший вариант есть-->
    </div>
    <hr>
    <span>Должна быть большая не просто иконка, а как часть визуального фона</span>
    <div class="icons">
      <r-icon name="imageOff"/><!--Нужно две вариации: для светлой и темной тем: catalog-photo-processing-error-reference-->
      <r-icon name="smartphoneShieldCheck"/> <!--нужно две: auth-totp-setup-mobile-reference и auth-totp-verification-reference-->
      <r-icon name="mailCheck"/> <!--auth-email-verification-reference -->
      <r-icon name="boxes"/> <!-- auth-registration-reference -->
      <r-icon name="recoveryCodes"/> <!--auth-recovery-codes-reference-->
      <r-icon name="clockLarge"/> <!--(account-recovery-expired-reference)-->
      <r-icon name="keyMail"/><!--Не понял от чего это, но вероятно для экрана auth-password-recovery-start-reference - исправить-->
      <r-icon name="keyCheck"/> <!--auth-password-reset-reference - подогнать, под визуал-->
    </div>
    <hr>
    <span>Не хватает в реестре</span>
    <div>
      щит с инфо: например, тут в инфо-подписи: auth-password-recovery-start-reference
      <br>
      скачать: тут для скачивания auth-recovery-codes-reference
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
span {
  display: block;
}
</style>
