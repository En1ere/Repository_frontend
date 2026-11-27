export enum UserPath {
  PROFILE = '/profile',
}

export enum UserSections {
  SECURITY = 1,
  THEME = 2,
  DATA = 3,
}

export const UserProfileSections = [
  {
    id: UserSections.SECURITY,
    title: 'Безопасность',
    items: ['Пароль', 'Сессии']
  },
  {
    id: UserSections.THEME,
    title: 'Оформление',
    items: ['Тема', 'Цвет интерфейса']
  },
  {
    id: UserSections.DATA,
    title: 'Данные',
    items: ['Экспорт данных', 'Импорт данных']
  },
]
