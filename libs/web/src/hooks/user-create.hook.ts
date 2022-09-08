import gql from 'graphql-tag';
import {UserGender, UserWire} from '@imagine-cms/types';
import {UseMutationResponse, useRunMutation} from './run-mutation.hook';

const CREATE_NEW_USER = gql`
  mutation ($username: String!, $email: String!, $password: String!, $gender: String, $look: String) {
    userCreate(newUser: {email: $email, username: $username, password: $password, gender: $gender, look: $look}) {
      id
      username
      email
      rankID
      rankVipID
      credits
      vipPoints
      activityPoints
      look
      gender
      motto
      accountCreatedAt
      lastOnline
      onlineStatus
      ipRegisteredWith
      homeRoomID
      muteStatus
      allowingNewFriends
      showOnlineStatus
      vipStatus
    }
  }
`;

export const useUserCreateMutation = (
  username: string,
  email: string,
  password: string,
  gender?: UserGender,
  look?: string
): UseMutationResponse<{userCreate: UserWire}> => {
  return useRunMutation(CREATE_NEW_USER, {username, email, password, gender, look});
};
