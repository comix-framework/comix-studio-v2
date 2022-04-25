import { defineNuxtRouteMiddleware, useRouter } from '#app'
import { useUser } from '~/stores/user'

export default defineNuxtRouteMiddleware((to) => {
  const userStore = useUser()

  if (to.path === '/' && userStore.auth) {
    return '/dashboard'
  }
  if (to.path !== '/' && !userStore.auth) {
    return '/'
  }
})
