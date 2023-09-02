import gql from 'graphql-tag';
import { UserWire } from '@imagine-cms/types';
import { UseQueryResponse, useRunQuery } from './run-query.hook';

const FIND_USER_BY_USERNAME = gql`
  query ($username: String!) {
    users(username: $username) {
      id
      username
      rankID
      credits
      vipPoints
      activityPoints
      look
      gender
      motto
      accountCreatedAt
      onlineStatus
      homeRoomID
    }
  }
`;

export const useFetchUserByUsername = (username: string): UseQueryResponse<{ user: UserWire }> => {
  return useRunQuery(FIND_USER_BY_USERNAME, { username });
};
