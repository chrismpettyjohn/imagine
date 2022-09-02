import gql from 'graphql-tag';
import {UserWire} from '@imagine-cms/types';
import {UseMutationResponse, useRunMutation} from '../graphql/run-mutation';

const CREATE_NEW_USER = gql`
    mutation($username: String!, $email: String!, $password: String!) {
        userCreate(newUser: {
            email: $email
            username: $username
            password: $password
        }), {
            id,
            username,
            email,
            rankID,
            rankVipID,
            credits,
            vipPoints,
            activityPoints,
            look,
            gender,
            motto,
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
`

export const useUserCreateMutation = (username: string, email: string, password: string): UseMutationResponse<{userCreate: UserWire}> => {
  return useRunMutation(CREATE_NEW_USER, { username, email, password });
}
