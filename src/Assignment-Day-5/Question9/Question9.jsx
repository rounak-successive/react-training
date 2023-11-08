// 9.Create a React component that makes GraphQL queries to retrieve a list of items (e.g., a list of books, movies, or products) from a GraphQL API. Implement pagination for large datasets and display the data in a user-friendly way.

import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client'
import Content from './Question9Content'

const GraphQlPaginationComponent = () => {
  const link = new HttpLink({
    uri: 'https://graphql-proxy.p.rapidapi.com/',
    headers: {
      'x-rapidapi-key': 'e23e23b505msh762e4188dbf3778p14f067jsndafaa77ddaf2',
      'x-rapidapi-host': 'graphql-proxy.p.rapidapi.com',
      'Content-Type': 'application/json',
    },
  })

  const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache(),
  })
  return (
    <ApolloProvider client={client}>
      <Content />
    </ApolloProvider>
  )
}

export default GraphQlPaginationComponent
