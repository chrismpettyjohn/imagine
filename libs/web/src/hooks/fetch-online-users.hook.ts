import gql from 'graphql-tag';
import {UserWire} from '@imagine-cms/types';
import {UseQueryResponse, useRunQuery} from './run-query.hook';

const FETCH_ONLINE_USERS = gql`
  query {
    users {
      id
      username
      look
      lastOnline
    }
  }
`;

export const useFetchOnlineUsers = (): UseQueryResponse<{users: UserWire[]}> => {
  return useRunQuery(FETCH_ONLINE_USERS);
};
