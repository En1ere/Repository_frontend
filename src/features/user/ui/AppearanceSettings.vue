<script setup lang="ts">
import ProfileSection from "@/features/user/ui/ProfileSection.vue";
// import ProfileSettingsItem from "@/features/user/ui/ProfileSettingsItem.vue";

const data = {
  theme: 'dark',
  schema: 'ruby'
}
</script>

<template>
  <ProfileSection
    id="appearance"
    title="Оформление"
    description="Настройте внешний вид приложения"
  >
<!--    <ProfileSettingsItem-->
<!--      title="Тема"-->
<!--      :value="data.theme"-->
<!--    />-->
  </ProfileSection>
</template>

<style scoped lang="scss">

</style>
