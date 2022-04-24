import { defineNuxtPlugin } from "#app"
import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client/core"
import { DefaultApolloClient } from "@vue/apollo-composable"

export default defineNuxtPlugin((nuxtApp) => {

    const httpLink = createHttpLink({
        // You should use an absolute URL here
        uri: 'http://localhost:3000/graphql',
    })

    const apolloClient = new ApolloClient({
        cache: new InMemoryCache(),
        link: httpLink,
        // configuration //
    })
    nuxtApp.vueApp.provide(DefaultApolloClient, apolloClient)
})
