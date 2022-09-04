import gql from 'graphql-tag';
import {ChatlogWire} from '@imagine-cms/types';
import {UseQueryResponse, useRunQuery} from './run-query.hook';

const FETCH_CHATLOG = gql`
    query ($roomID: Float, $userID: Float, $skip: Float!, $limit: Float!) {
        chatlogs(roomID: $roomID, userID: $userID, other: {skip: $skip, take: $limit, order: {id: "DESC"}}) {
            id,
            userID,
            roomID,
            message,
            createdAt
        }
    }
`;

export const useFetchChatlog = (userID?: number, roomID?: number, skip = 0, limit = 6): UseQueryResponse<{chatlogs: ChatlogWire[]}> => {
  return useRunQuery(FETCH_CHATLOG, {userID, roomID, skip, limit});
};
