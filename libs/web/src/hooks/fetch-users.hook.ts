import gql from 'graphql-tag';
import {UserWire} from '@imagine-cms/types';
import {UseQueryResponse, useRunQuery} from './run-query.hook';

const FETCH_USERS = gql`
    query($skip: Float!, $limit: Float!) {
        users(other: { skip: $skip, take: $limit }) {
            id,
            username,
            email,
            rankID,
            rankVipID,
            credits,
            vipPoints,
            activityPoints,
            look,
            gender,motto,
            accountCreatedAt,
            lastOnline,
            onlineStatus,
            ipRegisteredWith,
            homeRoomID,
            muteStatus,
            allowingNewFriends,
            showOnlineStatus,
            vipStatus,
        }
    }
`;

export const useFetchUsers = (skip = 0, limit = 100): UseQueryResponse<{users: UserWire[]}> => {
  return useRunQuery(FETCH_USERS, { skip, limit });
};
