<script setup lang="ts">
const a = {
  // крестик
  // галочка
  // стрелка вниз
  // плюс
  // минус
  // большой плюс
  // урна
  // инфо
  // успех
  // десктоп
  // мобилка
  // хром
  // шестеренка
  // колокол
  // глаз
  // щит успех
  // щит провал
  // карандаш
  // документ
  // юзеры
  // часы
  // письмо
  // большие часы
  // хранилище
  // месяц
  // солнце
  // большое письмо успех
  // ключ с письмом pass recovery
  // ключ успех pass reset
  // документ, ключ, успех recovery codes
  // Коробки auth
  // мобилка щит успех auth totp
  // мобилка щит успех auth totp
  // две стрелки
  // контейнер
  // папка
  // три точки
  // дом
  // часы реверс
  // копировать
  // клавиатура
  // пинмап
  // qr
  // полоса горизонтальная
  // + лупа
  // стрелка
  // юзер
  // решетка
  // фильтр history event ref
  // две стрелки перенос
  // лист документ
  // молния
  // ключ гаечный
  // камера недоступна
  // три полоски
  // нет фото
  // галерея
  // метка координат
  // камера
  // юзер +
  // календарь
  // юзер стрелка
  // выход
  // юзер корона
}
import { computed, type CSSProperties } from 'vue'
import { iconRegistry, type IconName } from './icons/registry'

export type IconColor = 'primary' | 'text' | 'destructive' | 'success' | 'warning' | 'muted';

export interface RIconProps {
  name: IconName
  variant: IconColor
  size?: number
  rotate?: number
}

const props = withDefaults(defineProps<RIconProps>(), {
  variant: 'primary',
  size: 20,
  rotate: 0
})

const iconComponent = computed(() => iconRegistry[props.name])

const iconStyles = computed<CSSProperties>(() => {
  const dimension = `${props.size}px`;
  return {
    width: dimension,
    height: dimension,
    rotate: `${props.rotate}deg`
  }
})
</script>

<template>
  <component
    :is="iconComponent"
    class="r-icon"
    :class="['r-icon', `r-icon_color-${props.variant}`]"
    :style="iconStyles"
    aria-hidden="true"
  />
</template>

<style scoped lang="scss">
$icon-colors: (
  'primary': $color-primary,
  'text': $color-text,
  'destructive': $color-error,
  'warning': $color-warning,
  'success': $color-success,
  'muted': $color-disabled,
);

.r-icon {
  display: inline-block;
  flex-shrink: 0;
  vertical-align: middle;
  transition: color 0.15s ease, transform 0.2s ease;

  @each $name, $value in $icon-colors {
    &_color-#{$name} {
      color: #{$value};
    }
  }
}
</style>

