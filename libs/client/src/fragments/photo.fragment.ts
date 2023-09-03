import { gql } from 'graphql-tag';
import { USER_FRAGMENT, UserFragment } from './user.fragment';

export interface PhotoFragment {
  id: number;
  userID: number;
  user: UserFragment;
  roomID: number;
  photoURL: string;
  createdAt: number;
}

export const PHOTO_FRAGMENT: any = gql`
  ${USER_FRAGMENT}
  fragment PhotoFragment on PhotoModel {
    id
    userID
    user {
      ...UserFragment
    }
    roomID
    photoURL
    createdAt
  }`