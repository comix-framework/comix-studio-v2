import { defineNuxtPlugin } from '#app'
import { useCookie } from 'h3'
import { useUser } from '~/stores/user'

export default defineNuxtPlugin(async (nuxtApp) => {
  const req = nuxtApp.ssrContext.req
  const _token = useCookie(req, '_token')
  const userStore = useUser(nuxtApp.$pinia)
  if (_token) {
    userStore.setToken(_token)
    await userStore.getMe()
  }
})
