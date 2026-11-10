# План реализации frontend-репозитория

Статус: исполнимый checklist первой версии

Связанный ориентир: `FRONT_EXPECTED_ARCH.md`.

## 1. Правила работы с планом

- [ ] Выполнять группы последовательно, если задача явно не отмечена как независимая.
- [ ] Перед началом группы обновлять зафиксированный `contracts/openapi.json`.
- [ ] Не импортировать backend DTO или исходный код напрямую.
- [ ] Не редактировать `shared/api/generated` вручную.
- [ ] Не считать группу завершённой без проверки применимых loading, empty, validation, disabled, offline, permission lost, not found, stale/conflict, rate limit, transient error, retry и success состояний.
- [ ] Для каждой мутации определить query invalidation, неизвестный сетевой результат и безопасный повтор.
- [ ] Для каждого сложного UI определить keyboard route, focus order, focus trap/restore, screen-reader announcements и reduced-motion поведение.
- [ ] Подтверждать mobile-поведение до desktop-адаптации.
- [ ] Не создавать пустые FSD-срезы и универсальные абстракции «на будущее».
- [ ] После завершения группы обновлять документацию, версию frontend-репозитория и его журнал изменений.

## 2. Contract baseline и продуктовые решения

Зависимость: согласованный backend OpenAPI baseline.

- [ ] Зафиксировать inventory маршрутов auth, account, workspaces, catalog, search, scanner, photos, archive, activity, notifications и export.
- [ ] Определить URL-схему с обязательным `workspaceId` для workspace-scoped экранов.
- [ ] Определить deep links для invitation, catalog entity и internal QR.
- [ ] Зафиксировать browser/device matrix, camera support и accessibility matrix.
- [ ] Зафиксировать frontend-обработку стабильных backend `error.code`.
- [ ] Зафиксировать правила `Idempotency-Key` для нового намерения и повтора того же намерения.
- [ ] Зафиксировать обработку `version`/`If-Match` и `409 Conflict`.
- [ ] Зафиксировать поведение при неизвестном результате запроса: readback/refetch без ложного success.
- [ ] Связать каждый v1 flow с UI-reference, API endpoint и типом проверки.
- [ ] Проверить отсутствие frontend-требований, которых нет в API/domain contract.

Критерий завершения:

- [ ] Маршруты, состояния, deep links, error mapping и contract dependencies однозначны до scaffold.

## 3. Репозиторий и технический фундамент

- [ ] Инициализировать React, TypeScript strict, Vite и React Router Framework Mode.
- [ ] Зафиксировать поддерживаемые Node.js и package-manager версии.
- [ ] Настроить ESLint, Prettier, Stylelint и typecheck.
- [ ] Настроить FSD-границы `app → pages → widgets → features → entities → shared`.
- [ ] Запретить внутренние импорты соседних срезов и обратные зависимости.
- [ ] Настроить Vitest, Testing Library, MSW, Playwright и axe.
- [ ] Создать frontend environment schema только для публичной конфигурации.
- [ ] Настроить production/dev/test build без попадания секретов в bundle.
- [ ] Подключить CSS Modules, design tokens и глобальные foundations.
- [ ] Добавить минимальные UI primitives только для подтверждённых сценариев.
- [ ] Настроить CI: install, generated-client check, typecheck, lint, unit и build.
- [ ] Добавить architecture test для FSD import boundaries.
- [ ] Добавить bundle и Web Vitals budgets.
- [ ] Документировать команды локального запуска и проверок.

Критерий завершения:

- [ ] Чистая установка, проверки и production build воспроизводимы штатными командами.

## 4. API client и общее приложение

- [ ] Добавить `contracts/openapi.json` и `contract-version.json`.
- [ ] Настроить генерацию клиента в `shared/api/generated`.
- [ ] Добавить проверку актуальности generated client относительно OpenAPI.
- [ ] Создать transport wrapper с cookie credentials, CSRF, request ID и `AbortSignal`.
- [ ] Не хранить access/refresh token: авторизация основана на `HttpOnly` cookie-session.
- [ ] Реализовать получение и обновление CSRF-токена согласно backend contract.
- [ ] Создать typed error mapper по стабильному `error.code`.
- [ ] Отделить validation, domain, permission, conflict, rate-limit и transient ошибки.
- [ ] Реализовать query-key factory с обязательным `workspaceId`.
- [ ] Настроить QueryClient retry policy без автоматического повтора необратимых мутаций.
- [ ] Создать app-level error boundary и route-level recovery.
- [ ] Создать app shell, mobile/desktop navigation и skip-link.
- [ ] Настроить route guards для anonymous, pending-verification, active и deletion-pending состояний.
- [ ] Добавить безопасную очистку user-scoped query cache при logout, session loss и account deletion.
- [ ] Создать MSW handlers из зафиксированного OpenAPI-контракта.
- [ ] Покрыть transport, error mapping и cache isolation integration-тестами.

Критерий завершения:

- [ ] Приложение безопасно различает session expiry, forbidden, conflict, backend failure и offline.

## 5. Регистрация, вход и подтверждение e-mail

Зависимости backend: account/auth/profile/session endpoints и стабильные auth error codes.

- [ ] Реализовать форму регистрации: display name, e-mail и password.
- [ ] Реализовать client validation без расхождения с server constraints.
- [ ] Передавать новый idempotency key только для нового registration intent.
- [ ] Реализовать нейтральный результат регистрации без лишнего раскрытия аккаунта.
- [ ] Реализовать экран ожидания подтверждения e-mail.
- [ ] Реализовать verify deep link с invalid, expired, consumed и success состояниями.
- [ ] Реализовать resend с cooldown и rate-limit состояниями.
- [ ] Реализовать вход по e-mail и паролю.
- [ ] При активном TOTP переводить flow на отдельный TOTP step.
- [ ] При отсутствии TOTP не блокировать подтверждённый аккаунт.
- [ ] Обрабатывать locked, invalid credentials, unverified e-mail и session failure.
- [ ] После входа загружать account/session state до открытия protected routes.
- [ ] Проверить password-manager и autocomplete semantics.
- [ ] Покрыть регистрацию, verify, resend и login component/integration/e2e тестами.
- [ ] Проверить keyboard, focus, live errors и 200% zoom.

Критерий завершения:

- [ ] Protected routes не открываются без подтверждённой серверной session state.

## 6. TOTP, recovery codes и пароль

Зависимости backend: TOTP setup/confirm/login/disable, recovery codes и password reset/change.

- [ ] Реализовать опциональное предложение настройки TOTP после verify.
- [ ] Разрешить безопасно пропустить настройку без ограничения аккаунта.
- [ ] Реализовать setup с QR/secret и короткоживущим setup state.
- [ ] Не сохранять TOTP secret после завершения или закрытия setup.
- [ ] Реализовать confirm TOTP и одноразовый показ восьми recovery codes.
- [ ] Добавить явное подтверждение сохранения recovery codes.
- [ ] Реализовать TOTP login step и trusted-device option по контракту.
- [ ] Реализовать вход recovery code без повторного использования кода.
- [ ] Реализовать regeneration recovery codes с security proof.
- [ ] Реализовать отключение TOTP с объяснением отзыва trusted devices.
- [ ] Реализовать forgot/reset password с нейтральным ответом request.
- [ ] Реализовать password change и последующее обновление session list.
- [ ] Обработать invalid/expired proof, rate limit, concurrent consume и session expiry.
- [ ] Исключить секреты и codes из telemetry, URL и persisted client state.
- [ ] Покрыть сценарии TOTP, recovery и password E2E/accessibility тестами.

Критерий завершения:

- [ ] Секреты и recovery codes не остаются в кеше или логах; повторное потребление корректно отображается как ошибка.

## 7. Аккаунт и серверные сессии

- [ ] Реализовать просмотр и изменение display name с optimistic version.
- [ ] Показать e-mail как неизменяемое справочное поле.
- [ ] Реализовать список серверных сессий без полного IP.
- [ ] Отметить текущую и trusted session.
- [ ] Реализовать revoke одной session.
- [ ] Реализовать revoke others и revoke all.
- [ ] После revoke current/all очистить user-scoped cache и открыть sign-in.
- [ ] Обработать параллельный отзыв, уже отозванную session и `401`.
- [ ] Не показывать ложный успех до server confirmation/readback.
- [ ] Покрыть account/session integration и E2E тестами.

## 8. Хранилища и переключение контекста

Зависимости backend: workspaces, members и ownership endpoints.

- [ ] Создать entity slices `workspace` и `membership`.
- [ ] Реализовать список personal/shared workspaces.
- [ ] Отразить активный `workspaceId` в URL.
- [ ] Исключить попадание кеша одного workspace в другой.
- [ ] Реализовать переключатель workspace без неявной смены после invitation accept.
- [ ] Реализовать создание shared workspace.
- [ ] Реализовать просмотр участников и ролей.
- [ ] Реализовать owner-only remove member.
- [ ] Реализовать отдельный flow ownership transfer с точным preview ролей.
- [ ] Реализовать leave member и запрет leave owner до transfer.
- [ ] После потери membership закрыть workspace-scoped поверхности, очистить кеш и предложить доступный workspace.
- [ ] Обработать owner conflict, removed member, not found и stale workspace version.
- [ ] Покрыть cache isolation, tabs, deep links и access loss E2E тестами.

Критерий завершения:

- [ ] Смена workspace не смешивает query keys, UI-состояние и данные.

## 9. Приглашения

Зависимости backend: create/list/revoke/preview/accept/decline invitation.

- [ ] Создать entity slice `invitation`.
- [ ] Реализовать объединённое представление memberships и active invitations без объединения их жизненных циклов.
- [ ] Реализовать ввод одного и нескольких e-mail.
- [ ] Отправлять отдельную команду и idempotency key для каждого адреса.
- [ ] Сохранять успешные результаты при частичном ответе.
- [ ] Разрешать повтор только неуспешных адресов.
- [ ] Реализовать revoke своего invitation и owner revoke любого.
- [ ] Реализовать безопасный invitation preview deep link.
- [ ] Реализовать accept без автоматической смены active workspace.
- [ ] Реализовать отдельное действие «Открыть» после принятия.
- [ ] Реализовать decline.
- [ ] Обработать expired, revoked, declined, e-mail mismatch, already member и already pending.
- [ ] Проверить focus management нижней поверхности и announcements частичного результата.
- [ ] Покрыть accept/decline/revoke/partial batch E2E тестами.

## 10. Каталог, дерево и быстрое добавление

Зависимости backend: root/entity/children/path/recent containers/create/update/quantity.

- [ ] Создать entity slice `catalog-entity`.
- [ ] Реализовать root и cursor pagination непосредственных детей.
- [ ] Не загружать всё дерево при открытии каталога.
- [ ] Реализовать breadcrumbs через отдельную path query.
- [ ] Реализовать карточку place/container/item с type-specific fields.
- [ ] Реализовать quick add с обязательным name и автоматически выбранным parent.
- [ ] Реализовать выбор place/container/item без неподтверждённых полей.
- [ ] Реализовать «Добавить ещё», «Дублировать» и «Готово».
- [ ] Реализовать редактирование основных полей, details и tags.
- [ ] Реализовать quantity `increment` и `set` с decimal-string semantics.
- [ ] Не агрегировать серверные команды количества; агрегировать только пользовательское сообщение.
- [ ] Реализовать recent containers после успешного create/move.
- [ ] Реализовать 20-секундный server-backed Undo создания.
- [ ] Обработать parent cannot contain, max depth, archived entity, version conflict и permission lost.
- [ ] После мутации точно обновлять detail, children, path, recent и search caches.
- [ ] Проверить длинные названия, глубину 30, empty/large children и decimal quantities.
- [ ] Покрыть quick add, edit, quantity, pagination и Undo E2E/accessibility тестами.

Критерий завершения:

- [ ] Все каталожные query keys изолированы по workspace, а сервер остаётся источником дерева и version.

## 11. Поиск и быстрый доступ

Зависимости backend: workspace search, archive search и explicit all-workspaces search.

- [ ] Реализовать поиск только текущего workspace по умолчанию.
- [ ] Не использовать пустой запрос для выгрузки каталога.
- [ ] Реализовать фильтры kind, status, quantity и согласованных дат.
- [ ] Показать полный путь и thumbnail в результате.
- [ ] Открывать сущность в контексте её родителя.
- [ ] Реализовать явное действие cross-workspace search.
- [ ] Группировать cross-workspace results и не менять active workspace.
- [ ] Реализовать отдельный archive search.
- [ ] Различать initial empty, filtered empty, no results и partial/transient failure.
- [ ] Не отображать snippets/counts после membership loss.
- [ ] Реализовать debounce/cancellation без stale-result overwrite.
- [ ] Покрыть isolation, pagination, filters, archive exclusion и deep navigation тестами.

## 12. Перемещение и быстрый Undo

Зависимости backend: move и move/undo.

- [ ] Реализовать location picker с текущим путём, search, recent containers и tree.
- [ ] Исключить текущую сущность, потомков, archive и `canContain=false`.
- [ ] Передавать актуальную version и новый idempotency key.
- [ ] После успеха открыть destination parent и подсветить moved row.
- [ ] Обновить source/destination children, entity path, recent containers и search.
- [ ] Реализовать 20-секундный server-backed Undo только на текущей поверхности.
- [ ] При уходе скрыть token/action, не пытаясь отменить серверное состояние.
- [ ] Обработать cycle, depth, stale version, destination unavailable, permission loss и expired/consumed Undo.
- [ ] При неизвестном результате выполнить readback пути до показа результата.
- [ ] Покрыть move/Undo, conflict, deep tree и keyboard location picker E2E тестами.

## 13. Идентификаторы и сканирование

Зависимости backend: identifiers CRUD/resolve/internal QR и atomic create+identifier.

- [ ] Создать entity slice `identifier`.
- [ ] Реализовать scanner capability detection и camera permission flow.
- [ ] Предусмотреть ручной ввод при отсутствии или запрете камеры.
- [ ] Реализовать QR, barcode и Data Matrix recognition states.
- [ ] Реализовать workspace-scoped resolve без раскрытия чужого кода.
- [ ] Реализовать переход к найденной сущности.
- [ ] Реализовать привязку внешнего кода.
- [ ] Реализовать атомарное создание entity вместе с identifier.
- [ ] Реализовать server-generated internal QR без клиентского ID.
- [ ] Не сохранять открытый internal QR token в persistent state или telemetry.
- [ ] Обработать conflict явным выбором без автоматической перепривязки.
- [ ] Обработать camera denied, unsupported, not found, invalid code и permission loss.
- [ ] Проверить focus и announcements scanner surface.
- [ ] Покрыть resolve/attach/conflict/internal QR E2E тестами.

## 14. Фотографии

Зависимости backend: upload intent, complete/cancel/retry/status/primary/delete.

- [ ] Создать entity slice `attachment`.
- [ ] Реализовать выбор camera/file с проверкой browser capability.
- [ ] Показать занятые слоты и лимит `N из 3`.
- [ ] Получать upload intent до прямой загрузки.
- [ ] Загружать объект по signed parameters без раскрытия storage key.
- [ ] Показывать реальный upload progress только при наличии достоверных данных.
- [ ] Реализовать cancel текущего upload intent.
- [ ] После upload вызывать complete и показывать processing без ложного success.
- [ ] Poll/refetch status до ready/failed с ограниченным backoff.
- [ ] Реализовать retry только для разрешённого transient failed state.
- [ ] Для expired или удалённого source предлагать новый upload intent.
- [ ] Реализовать primary selection без drag/reorder.
- [ ] Реализовать delete и обновление автоматически выбранного primary.
- [ ] Разделить 413, MIME, pixel/decompression, corrupt, checksum, quota и transient errors.
- [ ] Не считать закрытие UI отменой загрузки.
- [ ] Обновлять detail и thumbnail caches после finalization.
- [ ] Проверить keyboard, screen-reader progress/live status и camera denied recovery.
- [ ] Покрыть slot limit, cancel/complete race, processing, retry, primary/delete E2E тестами.

## 15. Архив и восстановление

Зависимости backend: archive/restore/list/search/card и Undo endpoints.

- [ ] Реализовать подтверждение архивации одиночной сущности.
- [ ] Для непустого контейнера предложить move-first или subtree.
- [ ] Показать последствия и affected count.
- [ ] После успеха удалить ветку из active caches и открыть parent.
- [ ] Реализовать 20-секундный archive Undo.
- [ ] Реализовать archive screen как плоский список root operations.
- [ ] Показать original path, date, type и descendant count.
- [ ] Не показывать quantity stepper и permanent delete в archive.
- [ ] Реализовать archived entity read-only card.
- [ ] Реализовать restore к original parent, если он доступен.
- [ ] Запрашивать destination только при недоступном original parent.
- [ ] Обработать identifier conflict без partial success и автоматической перепривязки.
- [ ] После restore открыть target parent и подсветить row.
- [ ] Реализовать 20-секундный restore Undo.
- [ ] Покрыть single/subtree, search, fallback destination, conflict и Undo E2E тестами.

## 16. История и цепочный rollback

Зависимости backend: activity feed/detail, rollback preview/commit/undo.

- [ ] Создать entity slice `audit-event`.
- [ ] Реализовать workspace-scoped activity feed с cursor pagination.
- [ ] Реализовать day groups, filters и search.
- [ ] Показать безопасный typed diff, actor snapshot, time и path.
- [ ] Не отображать auth/security secrets или лишний e-mail.
- [ ] Реализовать detail surface и reversibility state.
- [ ] Реализовать single rollback preview с точным итоговым состоянием.
- [ ] Передавать `previewRevision`, а не строить rollback из frontend state.
- [ ] Реализовать blocking-chain preview в фактическом обратном порядке.
- [ ] Отметить выбранное событие, итоговое состояние и число новых событий.
- [ ] Не включать unrelated changes.
- [ ] После commit открыть обычную карточку и подсветить изменённое значение.
- [ ] Реализовать 20-секундный rollback Undo.
- [ ] При stale preview/conflict обновлять preview без partial success.
- [ ] Обработать non-reversible, chain limit, permission loss и inaccessible target.
- [ ] Покрыть single/chain/stale/result/Undo E2E и accessibility тестами.

## 17. Уведомления

Зависимости backend: notification feed/count/read/preference и готовые audit/outbox events.

- [ ] Создать entity slice `notification`.
- [ ] Реализовать unread badge для каждого workspace.
- [ ] Не добавлять уведомление автора о собственном действии.
- [ ] Реализовать feed только active workspace.
- [ ] Реализовать all/unread filters и day groups.
- [ ] Реализовать mark selected, read-through и mark all.
- [ ] Обновлять badge/feed caches только после подтверждённого ответа.
- [ ] Реализовать target navigation и recovery для archived, removed или inaccessible target.
- [ ] Реализовать один catalog-notification switch для shared workspace.
- [ ] Объяснить, что invitation/security notifications не отключаются.
- [ ] Не добавлять push, channels и frequency settings в v1.
- [ ] Реализовать polling/refetch без WebSocket-зависимости.
- [ ] Проверить accessible unread semantics и live updates.
- [ ] Покрыть counts, filters, read, navigation, preference и membership loss тестами.

## 18. Экспорт

Зависимости backend: create/list/status/retry/download export и worker finalization.

- [ ] Создать entity slice `export-job`.
- [ ] Реализовать выбор JSON/CSV и include photos.
- [ ] Объяснить включение active и archived данных.
- [ ] Создать export request с idempotency key.
- [ ] Показать queued и processing без выдуманных процентов или ETA.
- [ ] Разрешить закрыть поверхность без отмены job.
- [ ] Обнаруживать current/recent jobs после reload/login.
- [ ] Показать ready artifact, checksum и expiry при наличии контракта.
- [ ] Получать fresh authorized download URL только по действию пользователя.
- [ ] Реализовать failed retry с сохранёнными параметрами.
- [ ] Для expired job предлагать новый export.
- [ ] Обработать membership loss, revoked access, URL expiry и transient provider error.
- [ ] Не кешировать download URLs в persistent storage или service worker.
- [ ] Покрыть request/reopen/ready/download/failed retry/expired E2E и accessibility тестами.

## 19. Удаление и восстановление аккаунта

Зависимости backend: delete/status/recovery request/confirm и готовые retention-процессы.

- [ ] Реализовать подтверждение удаления с описанием последствий.
- [ ] Показать шестимесячное окно восстановления без обещания немедленного purge.
- [ ] Объяснить передачу shared workspace ownership.
- [ ] Разблокировать destructive action только после acknowledgement checkbox.
- [ ] Не запрашивать password/TOTP, если этого нет в согласованном контракте.
- [ ] После подтверждения очистить account/workspace caches и завершить UI-session.
- [ ] Показать нейтральный deletion-pending результат.
- [ ] Реализовать recovery request с нейтральным ответом.
- [ ] Реализовать one-time proof confirm.
- [ ] Показать точный `recoverableUntil`.
- [ ] После восстановления требовать новый sign-in; старые sessions не оживают.
- [ ] Реализовать expired/not recoverable и e-mail conflict состояния.
- [ ] Не допускать доступа к архивированным данным deletion-pending account.
- [ ] Покрыть deletion/logout/recovery/expired/ownership outcomes E2E и accessibility тестами.

## 20. PWA и offline-граница

Зависимость: стабильный app shell и завершённые основные flows.

- [ ] Добавить manifest, icons и installability.
- [ ] Реализовать безопасное service-worker update уведомление.
- [ ] Не кешировать auth, API mutation, photo signed URL и export download URL.
- [ ] Отличать offline от backend error.
- [ ] Разрешить только явно согласованный read-only cached shell.
- [ ] Отключать mutations offline с понятным следующим шагом.
- [ ] Не добавлять offline command queue и не показывать ложный success.
- [ ] Проверить восстановление после возврата сети.
- [ ] Покрыть service-worker update, stale asset и offline boundary тестами.

## 21. Финальное hardening и выпуск

- [ ] Выполнить полный responsive pass mobile/tablet/desktop.
- [ ] Проверить keyboard-only маршруты всех flows.
- [ ] Проверить focus trap/restore, focus after mutation и route transition.
- [ ] Выполнить screen-reader smoke критических сценариев.
- [ ] Проверить 200% zoom, reflow, long strings и depth-30 paths.
- [ ] Проверить reduced motion и контраст WCAG 2.2 AA.
- [ ] Проверить target size не менее `44 × 44 px`.
- [ ] Выполнить cross-browser matrix.
- [ ] Проверить route chunking для scanner/photos и тяжёлых экранов.
- [ ] Проверить thumbnails, request waterfalls и cache invalidation matrix.
- [ ] Выполнить bundle/Web Vitals budgets.
- [ ] Выполнить contract check против release backend OpenAPI.
- [ ] Выполнить typecheck, lint, unit, integration, accessibility, e2e и production build.
- [ ] Проверить отсутствие secrets, tokens и PII в bundle, logging и telemetry.
- [ ] Провести tenant/cache isolation regression.
- [ ] Зафиксировать известные ограничения и production configuration.
- [ ] Обновить фактический README только после сверки с реализованным кодом.

## 22. Общий Definition of Done группы

Группа считается завершённой, когда:

- [ ] Backend dependency реализована и представлена принятой OpenAPI-версией.
- [ ] Normal и релевантные negative/recovery состояния реализованы.
- [ ] Mobile и desktop поведение проверено.
- [ ] Keyboard, focus и screen-reader поведение проверено.
- [ ] Query keys, invalidation и cache isolation определены.
- [ ] Retry, cancellation, idempotency и unknown outcome обработаны.
- [ ] Unit/component/integration/e2e проверки добавлены соразмерно риску.
- [ ] Generated client, typecheck, lint и build проходят.
- [ ] Публичный API FSD-среза минимален.
- [ ] Временные данные и тестовые артефакты удалены.
