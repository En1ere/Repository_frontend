import {
  API_ERROR_EVENT, API_URL,
  type ApiErrorEventDetail,
  type ApiRequestOptions, REQUEST_TIMEOUT_MS
} from "@/shared/api/types.ts";
import {createUrl, isAbortError, parseResponse, setRequestTimeout} from "@/shared/api/utils.ts";
import {readTokens, refreshAccessToken} from "@/shared/api/auth.ts";

export let refreshPromise: Promise<string|null> | null = null;

export const apiRequest = async<T>(path: string, options: ApiRequestOptions = {}): Promise<T> => {
  try {
    return await executeApiRequest<T>(path, options);
  }
  catch(error: unknown) {
    if(!isAbortError(error) && typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent<ApiErrorEventDetail>(API_ERROR_EVENT, {
        detail: {error, path}
      }))
    }
    throw error
  }
}

const executeApiRequest = async<T>(path: string, options: ApiRequestOptions = {}): Promise<T> => {
  const headers = new Headers();
  const tokens = readTokens();
  const baseUrl = options.baseUrl ?? API_URL;

  let body: BodyInit | undefined;
  if(options.body instanceof FormData) {
    body = options.body;
  }
  else if(options.body !== undefined) {
    headers.set('Content-Type', 'application/json');
  }
  if(tokens?.accessToken) {
    headers.set('Authorization', `Bearer ${tokens.accessToken}`);
  }

  const {timeoutId, signal} = setRequestTimeout();

  let response: Response;
  try {
    response = await fetch(createUrl(path, baseUrl), {
      headers,
      body,
      signal,
      credentials: 'include',
      method: options.method ?? (options.body === undefined ? 'GET' : 'POST'),
    })
  }
  finally {
    globalThis.clearTimeout(timeoutId)
  }

  if(response.status === 401 && options.retry !== false) {
    if (!refreshPromise) {
      const promise = refreshAccessToken().finally(() => {
        if(refreshPromise === promise) {
          refreshPromise = null;
        }
        refreshPromise = promise;
      });
    }
    if(await refreshPromise) {
      return executeApiRequest<T>(path, {...options, retry: false})
    }
  }

  return parseResponse<T>(response);
}
