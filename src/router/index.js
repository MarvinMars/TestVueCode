import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import GameView from '../views/GameView.vue'
import ProfileView from '../views/ProfileView.vue'

import { useAuthStore } from '@/stores/auth'
import { useUserStore } from '@/stores/user'
import UserView from '@/views/UserView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/game',
      name: 'Game',
      component: GameView,
      meta: { requiresAuth: true }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: ProfileView,
      meta: { requiresAuth: true }
    },
    {
      path: '/users/:id',
      name: 'User',
      component: UserView
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  const userStore = useUserStore()
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: 'Login' })
  } else if (to.meta.requiresAuth && !userStore.userData) {
    try {
      await userStore.fetchUserData()
      next()
    } catch (error) {
      console.error('Failed to fetch user data:', error)
    }
  } else {
    next()
  }
})

export default router
