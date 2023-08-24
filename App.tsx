import { StrictMode } from "react";

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

import AppRoutes from './src/routes/AppRoutes'
import Config from './src/config/Config';

if (__DEV__) {
  loadDevMessages();
  loadErrorMessages();
}

// TODO: Remove this when Login is done
localStorage.setItem("user_token", "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjdXJzaWYiLCJleHAiOjE3MjQyMTAzMDgsImlhdCI6MTY5Mjc2MDcwOCwiaXNzIjoiY3Vyc2lmIiwianRpIjoiNWNlM2RmMjItM2MyOC00MDBmLTkwYjUtZWZlNTRkMjExNGE1IiwibmJmIjoxNjkyNzYwNzA3LCJzdWIiOiI3NjRhN2I4Zi0wMzYxLTRkMjEtYjMxZS00MDRkYTk0ODQ1OWIiLCJ0eXAiOiJhY2Nlc3MifQ.VPTn6Llrl7tyqt3v_t142bJazrJwD7w4opKxIqs8-iARPf9iFueMhRBeKtz1y9yTLmbV08i5TLLxibhydBrCTw")

const httpLink = createHttpLink({ uri: Config.API.url });

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('user_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export default function App() {
  return(
    <StrictMode>
      <ApolloProvider client={client}>
        <AppRoutes />
      </ApolloProvider>
    </StrictMode>
  )
}

