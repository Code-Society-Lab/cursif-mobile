import { gql, useQuery } from '@apollo/client';

const GET_GREETING = gql`
  query GetUser {
    users {
      id
      username
    }
  }
`;

// This is an example of a query... It is to be removed.
function Hello() {
  const { loading, error, data } = useQuery(GET_GREETING, {
    variables: {  },
  });

  if (loading) return <p>Loading ...</p>;

  return data.users.map((user) => {
    return <span>Hello {user.username}!</span>
  });
}

export default function LoginScreen() {
  return(<span>Login</span>);
}