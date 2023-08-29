import gql from 'graphql-tag';
import {BadgeWire} from '@imagine-cms/types';
import {UseQueryResponse, useRunQuery} from './run-query.hook';

const FETCH_LATEST_BADGES = gql`
  query ($limit: Float!) {
    badges(other: {take: $limit, order: {id: "DESC"}}) {
      id
      code
    }
  }
`;

export const useFetchLatestBadges = (limit = 16): UseQueryResponse<{badges: BadgeWire[]}> => {
  return useRunQuery(FETCH_LATEST_BADGES, {limit});
};
