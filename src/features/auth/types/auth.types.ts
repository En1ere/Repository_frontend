export enum AuthPath {
  SIGN_IN = '/login',
  SIGN_UP = '/register',
  RESET_PASSWORD = '/resetPassword',
  RECOVER_PASSWORD = '/recoverPassword',
}

export type UserStatusType = 'active'

// _________________DTO________________________________

export interface UserDto {
  id: string
  login: string
  status: UserStatusType
  createdAt: string
}

export interface LoginDto {
  user: UserDto,
  accessToken: string,
  refreshToken: string
}

export interface LogoutDto {
  loggedOut: true
}

export interface ResetPasswordDto {
  passwordChanged: true
}

// _________________Payload____________________________

export interface LoginPayload {
  login: string
  password: string
}

export interface RegisterPayload {
  login: string
  password: string
}

export interface ResetPasswordPayload {
  oldPassword: string
  newPassword: string
}
