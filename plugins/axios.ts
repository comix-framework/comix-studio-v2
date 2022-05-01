import { defineNuxtPlugin } from '#app'
import axios from 'axios'
import { useUser } from '~/stores/user'

export default defineNuxtPlugin(() => {
  const userStore = useUser()
  /**
   * Axios config
   */
  axios.defaults.baseURL = 'http://localhost:3000/'

  axios.interceptors.request.use((config) => {
    // @ts-ignore
    config.headers.common.Authorization = `Bearer ${userStore._token}`
    return config
  })

  return {
    provide: {
      axios
    }
  }
})
