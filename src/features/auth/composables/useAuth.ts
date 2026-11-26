import {useRoute, useRouter} from "vue-router";
import {apiRequest} from "@/shared/api/http.ts";
import {
  AuthPath, type LoginDto,
  type LoginPayload, type LogoutDto,
  type RegisterPayload, type ResetPasswordDto, type ResetPasswordPayload, type UserDto
} from "@/features/auth/types/auth.types.ts";
import {computed} from "vue";

const useAuth = () => {
  const route = useRoute()
  const router = useRouter()

  // todo recover password

  const navigateTo = (path: AuthPath) => {
    router.push(path).then()
  }

  const currentPage = computed(() => route.path);
  const isReset = computed(() => {
    return currentPage.value === AuthPath.RESET_PASSWORD || currentPage.value === AuthPath.RECOVER_PASSWORD
  })



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

  const resetPassword = async(payload: ResetPasswordPayload) => {
    return await apiRequest<ResetPasswordDto>('/resetPassword', {
      body: payload
    })
  }

  return {
    currentPage,
    isReset,
    navigateTo,
    logout,
    login,
    register,
    resetPassword
  }
}
export default useAuth
