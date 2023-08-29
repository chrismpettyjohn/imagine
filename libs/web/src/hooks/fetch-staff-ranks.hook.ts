import gql from 'graphql-tag';
import {RankWire} from '@imagine-cms/types';
import {UseQueryResponse, useRunQuery} from './run-query.hook';

const FETCH_STAFF_RANKS = gql`
  query {
    ranks(other: { order: {id: "DESC"}}) {
      id
      name
      badgeCode
        users {
            username
            motto
            look
            onlineStatus
        }
    }
  }
`;

export const useFetchStaffRanks = (): UseQueryResponse<{ranks: RankWire[]}> => {
  return useRunQuery(FETCH_STAFF_RANKS);
};
