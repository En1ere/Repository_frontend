import {useRouter} from "vue-router";
import {
  AuthPath, type LoginDto,
  type LoginPayload, type LogoutDto,
  type RegisterPayload, type UserDto
} from "@/features/auth/types/auth.types.ts";
import {apiRequest} from "@/shared/api/http.ts";

export const useAuth = () => {
  const router = useRouter()

  const navigateTo = (path: AuthPath) => {
    router.push(path).then()
  }

  const logout = async() => {
    return await apiRequest<LogoutDto>('/logout', {})
  }

  const login = async(payload: LoginPayload) => {
    return await apiRequest<LoginDto>('/login', {
      body: payload
    })
  }

  const register = async(payload: RegisterPayload) => {
    return await apiRequest<UserDto>('/register', {
      body: payload
    })
  }

  const resetPassword = async() => {

  }

  return {
    navigateTo,
    logout,
    login,
    register,
    resetPassword
  }
}
