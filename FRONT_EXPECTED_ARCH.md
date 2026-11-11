# Ожидаемая архитектура frontend-репозитория

Статус: архитектурный ориентир, а не описание текущей реализации.

## 1. Слои и зависимости

Проект использует Vue 3, TypeScript, Composition API и FSD-like структуру:

```text
app → pages → widgets → features → entities → shared
```

- слой импортирует только нижележащие слои;
- срезы одного слоя не зависят друг от друга;
- внешний импорт из среза проходит через его `index.ts`;
- каталоги создаются только под реальный код, без пустых заготовок;
- frontend и backend связаны через REST/OpenAPI, но не импортируют исходники друг друга.

## 2. Целевая структура

```text
repository_frontend/
├── src/
│   ├── app/                       # сборка и запуск приложения
│   │   ├── plugins/               # Pinia, Vue Query и другие app.use(...)
│   │   ├── router/
│   │   │   ├── routes.ts
│   │   │   └── guards/
│   │   ├── styles/                # global styles и design tokens
│   │   └── config/
│   │
│   ├── pages/                     # компоненты маршрутов
│   │   ├── sign-in/
│   │   ├── catalog/
│   │   ├── entity-details/
│   │   ├── search/
│   │   ├── archive/
│   │   └── account-settings/
│   │
│   ├── widgets/                   # крупные блоки из features и entities
│   │   ├── app-shell/
│   │   ├── workspace-navigation/
│   │   ├── catalog-browser/
│   │   └── notification-center/
│   │
│   ├── features/                  # завершённые действия пользователя
│   │   ├── auth/
│   │   │   ├── sign-in/
│   │   │   └── reset-password/
│   │   ├── catalog/
│   │   │   ├── create-entity/
│   │   │   ├── move-entity/
│   │   │   └── archive-entity/
│   │   └── workspace/
│   │       └── invite-member/
│   │
│   ├── entities/                  # предметные модели и представления
│   │   ├── user/
│   │   ├── session/
│   │   ├── workspace/
│   │   ├── catalog-entity/
│   │   └── notification/
│   │
│   ├── shared/                    # непредметный переиспользуемый код
│   │   ├── api/
│   │   │   ├── generated/         # сгенерированный OpenAPI-клиент
│   │   │   ├── client/
│   │   │   └── error-mapping/
│   │   ├── ui/                    # базовые Vue-компоненты
│   │   ├── lib/                   # общие composables и утилиты
│   │   ├── config/
│   │   ├── assets/
│   │   └── types/
│   │
│   ├── App.vue                    # корневой layout и RouterView
│   └── main.ts                    # createApp и регистрация plugins
│
├── contracts/                     # snapshot OpenAPI и версия контракта
├── tests/
│   ├── unit/
│   ├── integration/
│   ├── contract/
│   └── e2e/
├── public/
└── package.json
```

Перечень срезов примерный: в репозитории остаются только срезы, необходимые реализованным сценариям.

## 3. Устройство среза

```text
features/catalog/move-entity/
├── api/                           # mutation и API-типы сценария
├── model/                         # composables, Pinia store, validation
│   └── useMoveEntity.ts
├── ui/
│   └── MoveEntityForm.vue
├── lib/                           # локальные утилиты среза
├── index.ts                       # публичный API
└── move-entity.test.ts
```

В небольшом срезе лишние каталоги не создаются. Компоненты именуются в `PascalCase.vue`, composables — `useXxx.ts`, Pinia stores — `xxx.store.ts`.

## 4. Ключевые связи

```text
main.ts
  └─ app plugins (router, Pinia, Vue Query)
       └─ App.vue / RouterView
            └─ pages
                 └─ widgets и features
                      └─ entities
                           └─ shared
```

- `app` регистрирует плагины, маршруты, guards, глобальные стили и обработчики ошибок;
- `pages` читают route params и собирают экран, а бизнес-действия делегируют в `features`;
- `widgets` нужны только для повторяемой крупной композиции нескольких срезов;
- `features` владеют пользовательским действием, его формой, валидацией и мутацией;
- `entities` содержат предметные типы, запросы и небольшие read-only представления сущности;
- `shared` не знает о предметной области и не импортирует верхние слои.

## 5. Vue-специфика

- компоненты пишутся как SFC с `<script setup lang="ts">` и Composition API;
- серверное состояние хранится в `@tanstack/vue-query`, а не в Pinia;
- Pinia используется для долгоживущего клиентского состояния, общего для нескольких экранов;
- локальное состояние формы или поверхности остаётся внутри feature-composable или компонента;
- route-компоненты загружаются динамически через Vue Router;
- guards располагаются в `app/router/guards`, а права и предметные правила — в соответствующих `entities` или `features`;
- `provide/inject` применяется для контекста дерева компонентов, но не заменяет публичные API срезов;
- generated OpenAPI-код не редактируется вручную.

## 6. Запрещённые связи

- импорт из верхнего слоя в нижний;
- импорт внутренних файлов соседнего среза в обход `index.ts`;
- API-вызовы и предметная логика непосредственно в route-компонентах;
- хранение server state в Pinia;
- предметная логика в `shared`;
- общие каталоги `components`, `services` или `utils` без границ ответственности.
