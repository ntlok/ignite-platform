import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL_2,
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN_TESTE_2}`
  },
  cache: new InMemoryCache()
})