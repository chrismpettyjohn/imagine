import gql from 'graphql-tag';
import {BanWire} from '@imagine-cms/types';
import {UseQueryResponse, useRunQuery} from './run-query.hook';

const FETCH_BANS = gql`
    query ($skip: Float!, $limit: Float!) {
        bans(other: {skip: $skip, take: $limit, order: {id: "DESC"}}) {
            id,
            bannedUserID,
            addedByUserID,
            type,
            reason,
            createdAt,
            expiresAt
        }
    }
`;

export const useFetchBans = (skip = 0, limit = 6): UseQueryResponse<{bans: BanWire[]}> => {
  return useRunQuery(FETCH_BANS, {skip, limit});
};
