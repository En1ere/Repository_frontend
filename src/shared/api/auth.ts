import {API_URL, AUTH_TOKENS_STORAGE_KEY, type AuthTokens} from "@/shared/api/types.ts";
import {createUrl, parseResponse, setRequestTimeout} from "@/shared/api/utils.ts";

export const readTokens = (): AuthTokens|null => {
  const rawTokens = localStorage.getItem(AUTH_TOKENS_STORAGE_KEY);

  if(!rawTokens) {
    return null;
  }

  try {
    const parsedTokens = JSON.parse(rawTokens) as Partial<AuthTokens>;
    if(!parsedTokens.accessToken || !parsedTokens.refreshTokens) {
      return null;
    }
    return {
      accessToken: parsedTokens.accessToken,
      refreshTokens: parsedTokens.refreshTokens
    }
  }
  catch(err: unknown) {
    localStorage.removeItem(AUTH_TOKENS_STORAGE_KEY);
    return null;
  }
}

const writeTokens = (tokens: AuthTokens) => {
  localStorage.setItem(AUTH_TOKENS_STORAGE_KEY, JSON.stringify(tokens))
}

export const refreshAccessToken = async(): Promise<string|null> => {
  const refreshToken = readTokens()?.refreshTokens;
  if(!refreshToken) {
    return null
  }

  const {timeoutId, signal} = setRequestTimeout();

  try {
    const response = await fetch(createUrl('/auth/refresh', API_URL), {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({refreshToken}),
      credentials: 'include',
      signal,
    });

    const result = await parseResponse<AuthTokens>(response);
    writeTokens(result);
    return result.accessToken;
  }
  catch (err: unknown) {
    return null;
  }
  finally {
    globalThis.clearTimeout(timeoutId)
  }
}
