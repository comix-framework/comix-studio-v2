import { createHttpLink, split } from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { getMainDefinition } from '@apollo/client/utilities'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import { useUser } from '~/stores/user'

export const linkBuilder = (browser: boolean) => {
  const userStore = useUser()

  const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: 'http://localhost:3000/graphql'
  })

  const authLink = setContext((_, { headers }) => {
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${userStore._token}`
      }
    }
  })

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, extensions }) =>
        console.log(`[GraphQL error]: Message: ${message}, Code: ${extensions.code}`)
      )
    }
    if (networkError) { console.log(`[Network error]: ${networkError}`) }
  })

  const getApolloLink = () => split(
    ({ query }) => {
      const definition = getMainDefinition(query)
      return (
        definition.kind === 'OperationDefinition' &&
                definition.operation === 'subscription'
      )
    },
    new GraphQLWsLink(createClient({
      url: 'ws://localhost:3000/graphql',
      connectionParams: {
        Authorization: `Bearer ${userStore._token}`
      }
    })),
    errorLink.concat(authLink.concat(httpLink))
  )

  return browser ? getApolloLink() : errorLink.concat(authLink.concat(httpLink))
}
