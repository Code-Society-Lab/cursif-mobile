import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { AppLoading } from 'expo'
import { ApolloClient, InMemoryCache, ApolloProvider, gql, createHttpLink } from '@apollo/client';


import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/api',
  credentials: 'same-origin'
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjdXJzaWYiLCJleHAiOjE3MjQyMTAzMDgsImlhdCI6MTY5Mjc2MDcwOCwiaXNzIjoiY3Vyc2lmIiwianRpIjoiNWNlM2RmMjItM2MyOC00MDBmLTkwYjUtZWZlNTRkMjExNGE1IiwibmJmIjoxNjkyNzYwNzA3LCJzdWIiOiI3NjRhN2I4Zi0wMzYxLTRkMjEtYjMxZS00MDRkYTk0ODQ1OWIiLCJ0eXAiOiJhY2Nlc3MifQ.VPTn6Llrl7tyqt3v_t142bJazrJwD7w4opKxIqs8-iARPf9iFueMhRBeKtz1y9yTLmbV08i5TLLxibhydBrCTw";//localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default function App() {
  const data = client.query({
    query: gql`
      query TestQuery {
        users {
          id
          username
        }
      }
    `,
  })
  .then((result) => console.log(result));

  return(
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <Text><h1>Welcome to Cursif! {data}</h1></Text>
        <StatusBar style="auto" />
      </View>
    </ApolloProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

