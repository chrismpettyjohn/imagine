import gql from 'graphql-tag';
import {useMutation} from '@apollo/react-hooks';

const LOGIN_WITH_USERNAME_AND_PASSWORD = gql`
mutation($username: String!, $password: String!) {
  sessionCreate(username: $username, password: $password) {
    id,
    userID,
    accessToken
  }
}
`

export function useLoginWithUsernameAndPassword(username?: string, password?: string): { tryLogin(): void, jwt?: string}  {
  const [tryLogin, { data }] = useMutation(LOGIN_WITH_USERNAME_AND_PASSWORD, {
    variables: { username, password },
  });
  return {
    tryLogin,
    jwt: data?.sessionCreate,
  }
}

