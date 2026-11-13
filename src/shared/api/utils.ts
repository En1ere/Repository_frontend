import {API_URL, REQUEST_TIMEOUT_MS} from "@/shared/api/types.ts";

export const onApiError = () => {

}

export const isAbortError = (error: unknown) => {
  return error instanceof Error && (error.name === 'AbortError' || error.name === 'RequestAbortedError');
}

export const createUrl = (path: string, baseUrl = API_URL) => {
  const search = new URLSearchParams();
  return `${baseUrl.replace(/\/$/, '')}${path}${search.size ? `?${search}` : ''}`;
};

export const parseResponse = async<T>(response: Response): Promise<T> => {
  if(response.status === 204) {
    return {} as T
  }

  const rawResponse: unknown = await response.json().catch(() => null)
  if(!response.ok) {
    throw new Error(JSON.stringify(response));
  }

  return rawResponse as T;
}

export const setRequestTimeout = () => {
  const timeout = new AbortController();
  const signal = timeout.signal;
  const timeoutId = globalThis.setTimeout(() => {
    new DOMException('Request timed out', 'TimeoutError')
  }, REQUEST_TIMEOUT_MS)

  return {
    signal,
    timeoutId
  }
}
