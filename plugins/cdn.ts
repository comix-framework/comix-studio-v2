import { defineNuxtPlugin } from '#app'
// import Vue from 'vue'

export default defineNuxtPlugin(() => {
  const cdn = (path: string, storage: string) => {
    // Vue.prototype.$cdn(path, storage)
    if (storage === 'local') {
      return `http://localhost:3000${path}`
    }
    return path
  }

  return {
    provide: {
      cdn
    }
  }
})
