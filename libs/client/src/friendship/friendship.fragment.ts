import gql from 'graphql-tag';
import { USER_FRAGMENT, UserFragment } from '../user/user.fragment';

export const FRIENDSHIP_FRAGMENT: any = gql`
  ${USER_FRAGMENT}
  fragment FriendshipFragment on FriendshipModel {
    userID
    friendID
    friend {
      ...UserFragment
    }
    relation
    createdAt
  }
`

export interface FriendshipFragment {
  userID: number;
  friendID: number;
  friend: UserFragment;
  relation: number;
  createdAt: number;
}