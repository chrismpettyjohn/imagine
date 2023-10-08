import gql from 'graphql-tag';
import { USER_FRAGMENT, UserFragment } from '../user/user.fragment';

export const GROUP_FRAGMENT: any = gql`
  ${USER_FRAGMENT}
  fragment GroupFragment on GroupModel {
    id
    name
    badge
    description
    userID
    user {
      ...UserFragment
    }
    userCount
    roomID
  }
`

export interface GroupFragment {
  id: number;
  name: string;
  badge: string;
  description: string;
  userID: number;
  user: UserFragment;
  userCount: number;
  roomID: number;
}