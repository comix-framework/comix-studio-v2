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
    ]
  },
  modules: ['@nuxtjs/tailwindcss'],
  buildModules: [
    ['@pinia/nuxt', { disableVuex: true }]
  ],
  hooks: {
    'pages:extend' (routes) {
      routes.forEach((route) => {
        if (route.name === 'story') {
          route.path = '/story/:slug'
        } else if (route.name === 'chapter') {
          route.path = '/chapter/:slug'
          // create chapter
          routes.push(Object.assign({}, route, {
            name: 'chapter-create',
            path: '/story/:slug/new'
          }))
        }
      })
    }
  },
  vite: {
    configFile: './vite.config.ts'
  }
})
