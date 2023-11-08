// 8.set up a GraphQL client library like Apollo Client. Create a simple component that uses the client to fetch and display data from a GraphQL API.

import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
  gql,
  useQuery,
} from '@apollo/client'

const GraphQlComponent = () => {
  const link = new HttpLink({
    uri: 'https://geodb-cities-graphql.p.rapidapi.com/',
    headers: {
      'x-rapidapi-key': 'e23e23b505msh762e4188dbf3778p14f067jsndafaa77ddaf2',
      'x-rapidapi-host': 'geodb-cities-graphql.p.rapidapi.com',
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

const GET_COUNTRIES = gql`
  query MyQuery($first: Int) {
    countries(first: $first) {
      edges {
        node {
          capital
          name
        }
      }
    }
  }
`

const Content = () => {
  const { data, loading, error } = useQuery(GET_COUNTRIES, {
    variables: {
      first: 10,
    },
  })
  if (loading) return 'Loading...'
  if (error) return `Error! ${error}`
  return (
    <>
      <h1>Here is a list of Countries and their capitals</h1>
      <ul>
        {data?.countries?.edges?.map((edge, key) => {
          const { name, capital } = edge.node
          return (
            <li key={key}>
              <h2>Country :{name}</h2>
              <h3>Capital :{capital}</h3>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default GraphQlComponent
