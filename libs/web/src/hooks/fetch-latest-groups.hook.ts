import gql from 'graphql-tag';
import {GroupWire} from '@imagine-cms/types';
import {UseQueryResponse, useRunQuery} from './run-query.hook';

const FETCH_LATEST_GROUPS = gql`
    query ($limit: Float!) {
        groups(other: {take: $limit, order: {id: "DESC"}}) {
            id,
            name,
            description,
            badge,
            userID,
        }
    }
`;

export const useFetchLatestGroups = (limit = 16): UseQueryResponse<{groups: GroupWire[]}> => {
  return useRunQuery(FETCH_LATEST_GROUPS, {limit});
};
