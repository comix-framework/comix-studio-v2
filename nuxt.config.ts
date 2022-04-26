import { defineNuxtConfig } from 'nuxt'
// import eslintPlugin from 'vite-plugin-eslint'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
    // { path: 'node_modules/ant-design-vue/es', pathPrefix: false, prefix: 'a' }
  ],
  build: {
    transpile: [
      '@apollo/client',
      'ts-invariant/process'
      // 'ant-design-vue'
    ]
  },
  modules: ['@nuxtjs/tailwindcss'],
  buildModules: [
    ['@pinia/nuxt', { disableVuex: true }]
  ],
  vite: {
    configFile: './vite.config.ts'
  }
})
