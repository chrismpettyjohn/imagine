import gql from 'graphql-tag';
import {RoomWire} from '@imagine-cms/types';
import {UseQueryResponse, useRunQuery} from './run-query.hook';

const FETCH_POPULAR_ROOMS = gql`
    query ($limit: Float!) {
        rooms(other: {take: $limit, order: {usersNow: "DESC"}}) {
            id,
            name,
            description,
            usersNow,
            usersMax,
            userID,
            user {
                username,
                look,
            }
        }
    }
`;

export const useFetchPopularRooms = (limit = 4): UseQueryResponse<{rooms: RoomWire[]}> => {
  return useRunQuery(FETCH_POPULAR_ROOMS, {limit});
};
