# Ожидаемая архитектура frontend-репозитория

Статус: архитектурный ориентир, не описание текущей реализации
Версия проекта: 0.1.111
Дата: 10 ноября 2026 года

## 1. Назначение

Документ фиксирует целевую структуру отдельного frontend-репозитория продукта «Реестр вещей и мест хранения». Он используется как ориентир при инициализации, разработке, ревью и последующем формировании `README.md` по фактическому коду.

Если реальная реализация обоснованно отличается от схемы, сначала фиксируется причина в ADR или архитектурной документации, затем обновляется этот ориентир. Структура не должна поддерживаться ценой бесполезных каталогов и пустых абстракций.

Frontend и backend являются независимыми репозиториями. Они не импортируют исходный код друг друга и связываются только через согласованный REST/OpenAPI-контракт.

## 2. Основной подход

Frontend строится по FSD-like модели:

```text
app → pages → widgets → features → entities → shared
```

Правила:

- верхний слой может зависеть только от нижележащих;
- срезы одного слоя не импортируют внутренности друг друга;
- внешний импорт среза проходит через его `index.ts`;
- бизнес-действие размещается в `features`, бизнес-представление и server-state — в `entities`;
- `pages` и `widgets` композируют сценарии, но не владеют бизнес-инвариантами;
- `shared` не содержит предметных сущностей и не становится каталогом случайных helpers;
- код создаётся по мере появления подтверждённого сценария, без заготовок «на будущее».

## 3. Целевая структура

```text
frontend-repository/
├── src/
│   ├── app/
│   │   ├── providers/
│   │   │   ├── query-provider.tsx
│   │   │   ├── router-provider.tsx
│   │   │   └── error-boundary.tsx
│   │   ├── router/
│   │   │   ├── routes.ts
│   │   │   ├── guards/
│   │   │   └── loaders/
│   │   ├── styles/
│   │   │   ├── globals.css
│   │   │   └── tokens.css
│   │   ├── config/
│   │   └── entry.tsx
│   │
│   ├── pages/
│   │   ├── sign-in/
│   │   ├── registration/
│   │   ├── catalog/
│   │   ├── entity-details/
│   │   ├── search/
│   │   ├── archive/
│   │   ├── activity/
│   │   ├── workspace-access/
│   │   ├── notifications/
│   │   └── account-settings/
│   │
│   ├── widgets/
│   │   ├── app-shell/
│   │   ├── workspace-navigation/
│   │   ├── catalog-browser/
│   │   ├── entity-card/
│   │   ├── notification-center/
│   │   └── account-navigation/
│   │
│   ├── features/
│   │   ├── auth/
│   │   │   ├── sign-in/
│   │   │   ├── verify-email/
│   │   │   ├── setup-totp/
│   │   │   └── reset-password/
│   │   ├── workspace/
│   │   │   ├── create-workspace/
│   │   │   ├── invite-member/
│   │   │   ├── remove-member/
│   │   │   ├── leave-workspace/
│   │   │   └── transfer-ownership/
│   │   ├── catalog/
│   │   │   ├── create-entity/
│   │   │   ├── edit-entity/
│   │   │   ├── update-quantity/
│   │   │   ├── move-entity/
│   │   │   ├── archive-entity/
│   │   │   └── restore-entity/
│   │   ├── identifier/
│   │   │   ├── scan-code/
│   │   │   ├── attach-code/
│   │   │   └── create-internal-qr/
│   │   ├── photo/
│   │   │   ├── upload-photo/
│   │   │   ├── set-primary-photo/
│   │   │   └── delete-photo/
│   │   ├── rollback-event/
│   │   ├── export-workspace/
│   │   └── delete-account/
│   │
│   ├── entities/
│   │   ├── user/
│   │   ├── session/
│   │   ├── workspace/
│   │   ├── membership/
│   │   ├── invitation/
│   │   ├── catalog-entity/
│   │   ├── attachment/
│   │   ├── identifier/
│   │   ├── audit-event/
│   │   ├── notification/
│   │   └── export-job/
│   │
│   └── shared/
│       ├── api/
│       │   ├── generated/
│       │   ├── client/
│       │   ├── error-mapping/
│       │   └── query-keys/
│       ├── ui/
│       ├── lib/
│       ├── config/
│       ├── hooks/
│       ├── assets/
│       └── types/
│
├── contracts/
│   ├── openapi.json
│   └── contract-version.json
│
├── tests/
│   ├── unit/
│   ├── integration/
│   ├── contract/
│   ├── accessibility/
│   └── e2e/
│
├── public/
├── package.json
└── version-list.md
```

Каталоги из схемы создаются только при появлении реального содержимого. Пустой срез не является архитектурным достижением.

## 4. Ответственность слоёв

### `app`

Composition root frontend-приложения: провайдеры, маршрутизация, глобальные стили, конфигурация, обработка необработанных ошибок и запуск приложения. Слой не содержит конкретных каталожных или workspace-сценариев.

### `pages`

Маршрутные композиции. Страница собирает widgets и features, обрабатывает route params и определяет layout конкретного маршрута. Бизнес-запросы не дублируются в page-компонентах.

### `widgets`

Крупные самостоятельные блоки интерфейса, объединяющие несколько features и entities: shell, навигация по хранилищам, браузер каталога, центр уведомлений. Widget появляется только при подтверждённой композиционной необходимости.

### `features`

Завершённые пользовательские действия: переместить сущность, принять приглашение, загрузить фотографию, запустить экспорт. Feature владеет формой, мутацией, локальными состояниями сценария и преобразованием стабильных API error codes в следующий шаг пользователя.

### `entities`

Предметные frontend-модели, query options, read-only представления и небольшие UI-компоненты конкретной сущности. Название `catalog-entity` используется вместо общего `entity`, чтобы избежать путаницы с техническим термином.

### `shared`

Непредметные механизмы: API transport, UI primitives, общие hooks, форматирование, конфигурация и assets. `shared/lib` не должен содержать membership policy, правила каталога или orchestration пользовательских сценариев.

## 5. Шаблон feature-среза

```text
features/catalog/move-entity/
├── api/
│   ├── mutation.ts
│   └── contracts.ts
├── model/
│   ├── use-move-entity.ts
│   └── validation.ts
├── ui/
│   ├── move-entity-form.tsx
│   └── move-entity-result.tsx
├── lib/
├── index.ts
└── move-entity.test.tsx
```

Небольшой срез может содержать меньше каталогов. Не следует создавать `api`, `model`, `ui` и `lib`, если в них нет кода.

## 6. Состояние и получение данных

- TanStack Query владеет серверным состоянием, кешем, invalidation и повторными запросами.
- Активное хранилище отражается в URL и query keys.
- Query keys всегда включают `workspaceId`, если данные workspace-scoped.
- Локальное состояние формы и поверхности находится рядом с feature.
- Глобальный store не добавляется до появления доказанного межэкранного клиентского состояния.
- Optimistic UI не подменяет серверную проверку version, membership и структурных инвариантов.
- После `409` клиент показывает актуальное состояние и предлагает безопасное повторное действие, а не автоматически применяет last-write-wins.

## 7. Контракт с backend

Backend является владельцем OpenAPI. Frontend хранит зафиксированный snapshot принятой версии в `contracts/openapi.json` и генерирует клиент в `shared/api/generated`.

Правила:

- generated-код не редактируется вручную;
- frontend не импортирует backend DTO и исходный код;
- решения принимаются по стабильному `error.code`, а не по тексту `message`;
- API DTO преобразуются в frontend-модели только там, где это действительно нужно;
- обновление контракта сопровождается contract check и typecheck;
- несовместимый контракт требует согласованной миграции или новой версии API;
- `contract-version.json` фиксирует версию или commit опубликованного backend-артефакта.

Рекомендуемый цикл изменения:

1. Backend публикует новую совместимую OpenAPI-версию.
2. Frontend обновляет snapshot и generated client.
3. Реализует или переключает UI.
4. После выпуска frontend устаревшая backend-ветка может быть удалена отдельным изменением.

## 8. Ошибки, повтор и отмена

Каждый пользовательский flow рассматривает применимые состояния: loading, empty, validation, disabled, offline, permission lost, not found, stale/conflict, rate limit, transient error, retry и success.

- Повторяемая мобильная мутация получает новый `Idempotency-Key` для нового намерения пользователя и сохраняет прежний ключ для безопасного повтора того же намерения.
- Undo использует только выданный сервером opaque token и серверный срок действия.
- Навигация может скрыть Undo, но не определяет его серверную допустимость.
- Неизвестный результат сетевого запроса не показывается как подтверждённый успех или ошибка; выполняется readback/refetch.
- Частичный результат пакетного приглашения хранится по каждому адресу отдельно.

## 9. UI и доступность

- Используются существующие UI primitives и design tokens.
- CSS Modules и CSS custom properties остаются базовым способом стилизации.
- Mobile — первая поверхность, desktop развивает тот же сценарий.
- Для dialog, menu, popover и других сложных элементов применяются доступные headless-примитивы.
- Обязательны keyboard-only маршрут, focus order, focus trap/restore, screen-reader labels, live regions, reduced motion, reflow/zoom и контраст WCAG 2.2 AA.
- UI-элемент добавляется только при наличии пользовательской задачи или решения.

## 10. Проверки

- unit: чистая логика, validation и model hooks;
- component/integration: формы, состояния и взаимодействие с API через MSW;
- contract: соответствие snapshot OpenAPI и generated client;
- accessibility: автоматизируемые axe-проверки и ручной keyboard/screen-reader smoke;
- e2e: критические сквозные сценарии в согласованных браузерах;
- architecture: запрет обратных и внутренних межсрезовых импортов.

## 11. Запрещённые направления

- ручное дублирование backend DTO;
- вызов API непосредственно из page-компонентов при наличии feature/entity boundary;
- один общий каталог `components` или `services` для всего приложения;
- предметная логика в `shared`;
- импорт внутренних файлов соседнего среза;
- глобальный store для серверных данных;
- автоматический last-write-wins при конфликте;
- создание универсального schema/form builder без подтверждённых повторяющихся сценариев.

## 12. Критерии архитектурной готовности функции

Функция соответствует ориентиру, если:

- имеет одного понятного владельца среди features/entities;
- использует публичные API нижележащих срезов;
- не нарушает направление зависимостей;
- изолирует кеш по workspace и пользователю;
- поддерживает согласованные ошибки, повтор, conflict и recovery;
- не дублирует generated contract или UI primitive;
- имеет соразмерные unit/integration/e2e проверки;
- может быть найдена и диагностирована по названию пользовательского сценария.
