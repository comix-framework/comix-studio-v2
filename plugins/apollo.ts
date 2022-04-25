import { defineNuxtPlugin } from '#app'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient, provideApolloClient } from '@vue/apollo-composable'
import { linkBuilder } from '~/graphql/link'

export default defineNuxtPlugin((nuxtApp) => {
  const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: linkBuilder(false)
    // configuration //
  })
  provideApolloClient(apolloClient)
  nuxtApp.provide('apollo', { DefaultApolloClient, apolloClient })
})
