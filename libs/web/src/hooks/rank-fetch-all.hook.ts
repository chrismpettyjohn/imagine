import gql from 'graphql-tag';
import {RankWire} from '@imagine-cms/types';
import {UseQueryResponse, useRunQuery} from './run-query.hook';

const FETCH_RANKS = gql`
    query($skip: Float!, $limit: Float!) {
        ranks(other: { skip: $skip, take: $limit }) {
            id
            name
            description
            badgeCode
            users {
                username
                look
            }
        }
    }
`;

export const useRankFetchAll = (skip = 0, limit = 100): UseQueryResponse<{ranks: RankWire[]}> => {
  return useRunQuery(FETCH_RANKS, { skip, limit });
};
