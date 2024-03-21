import { defineStore } from 'pinia'
import Cookies from 'js-cookie'
import { login, logout } from '@/api/auth.js'

const COOKIE_NAME = import.meta.env.VITE_COOKIE_NAME
const COOKIE_TIME = import.meta.env.VITE_COOKIE_OPTIONS

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    isAuthenticated: !!Cookies.get(COOKIE_NAME),
    token: Cookies.get(COOKIE_NAME)
  }),
  actions: {
    async login(email, password) {
      const token = await login(email, password)
      if (token) {
        Cookies.set(COOKIE_NAME, token, { expires: COOKIE_TIME })
        this.isAuthenticated = true
      }

      return this.isAuthenticated
    },
    async logout() {
      const response = await logout()

      if (response) {
        Cookies.remove(COOKIE_NAME)
        this.isAuthenticated = false
      }

      return this.isAuthenticated
    }
  }
})
