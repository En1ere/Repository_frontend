import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/pages/Home.vue'
import AboutView from '@/pages/About.vue'
import Auth from "@/pages/Auth.vue";

const routes = [
  { path: '/', component: HomeView },
  { path: '/auth', component: Auth },
  { path: '/about', component: AboutView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
