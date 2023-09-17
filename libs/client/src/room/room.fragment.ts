import gql from 'graphql-tag';
import { USER_FRAGMENT, UserFragment } from '../user/user.fragment';

export const ROOM_FRAGMENT: any = gql`
  ${USER_FRAGMENT}
  fragment RoomFragment on RoomModel {
    id 
    name
    description
    userID
    user {
      ...UserFragment
    }
    usersNow
    usersMax
  }
`
export interface RoomFragment {
  id: number;
  name: string;
  description: string;
  userID: number;
  user: UserFragment;
  usersNow: number;
  usersMax: number;
}