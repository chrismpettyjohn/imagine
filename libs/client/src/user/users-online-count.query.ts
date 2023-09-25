import gql from 'graphql-tag';

export const USERS_ONLINE_COUNT_QUERY: any = gql`
  query {
    usersOnlineCount
  }
`

export interface UsersOnlineCountQueryResponse {
  usersOnlineCount: number;
}