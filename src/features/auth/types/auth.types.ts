export enum AuthPath {
  SIGN_IN = '/sign-in',
  SIGN_UP = '/sign-up',
  RECOVER_PASSWORD = '/recover-password',
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

// _________________Payload____________________________

export interface LoginPayload {
  login: string
  password: string
}

export interface RegisterPayload {
  login: string
  password: string
}
