import { defineNuxtRouteMiddleware, navigateTo } from '#app'
import { useUser } from '~/stores/user'

export default defineNuxtRouteMiddleware((to) => {
  const userStore = useUser()

  if (to.path === '/' && userStore.auth) {
    return navigateTo('/dashboard')
  }
  if (to.path !== '/' && !userStore.auth) {
    return navigateTo('/')
  }
})
