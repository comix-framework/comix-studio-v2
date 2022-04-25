import { defineNuxtPlugin } from '#app'
import { useApolloClient } from '@vue/apollo-composable'
// import Vue from 'vue'

export default defineNuxtPlugin(() => {
  const { resolveClient } = useApolloClient()
  return {
    provide: {
      client: resolveClient()
    }
  }
})
