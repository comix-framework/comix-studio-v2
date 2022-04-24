import { defineNuxtConfig } from 'nuxt'
import eslintPlugin from 'vite-plugin-eslint'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  build: {
    transpile: [
      '@apollo/client',
      'ts-invariant/process'
    ]
  },
  modules: ['@nuxtjs/tailwindcss'],
  buildModules: [
    ['@pinia/nuxt', { disableVuex: true }]
  ],
  vite: {
    plugins: [
      eslintPlugin()
    ]
  }
})
