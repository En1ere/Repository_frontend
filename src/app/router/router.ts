import {createWebHistory, createRouter, type RouteRecordRaw} from 'vue-router'
import {AuthPath} from "@/features/auth/types/auth.types.ts";
import {UserPath} from "@/features/user/types/user.types.ts";

const authMeta = {
  layout: 'AuthLayout',
} as const

const routes = [
  {
    path: '/',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: AuthPath.SIGN_IN,
    component: () => import('@/features/auth/ui/Login.vue'),
    meta: authMeta,
  },
  {
    path: AuthPath.SIGN_UP,
    component: () => import('@/features/auth/ui/Register.vue'),
    meta: authMeta,
  },
  {
    path: AuthPath.RESET_PASSWORD,
    component: () => import('@/features/auth/ui/ResetPassword.vue'),
    meta: authMeta,
  },
  {
    path: AuthPath.RECOVER_PASSWORD,
    component: () => import('@/features/auth/ui/RecoverPassword.vue'),
    meta: authMeta,
  },
  {
    path: UserPath.PROFILE,
    component: () => import('@/features/user/ui/UserPage.vue')
  },
  {
    path: '/about',
    component: () => import('@/pages/About.vue'),
  },
] satisfies RouteRecordRaw[]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
