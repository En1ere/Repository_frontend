export const API_URL = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');
export const API_ERROR_EVENT = 'apiErrorEvent';
export const AUTH_TOKENS_STORAGE_KEY = 'auth'
export const REQUEST_TIMEOUT_MS = 30 * 1000;

export interface ApiRequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  body?: unknown
  retry?: boolean
  baseUrl?: string
  suppressErrorEvent?: boolean
}

export type AuthTokens = {
  accessToken: string
  refreshTokens: string
}

export type ApiErrorEventDetail = {
  error: unknown;
  path: string;
};
