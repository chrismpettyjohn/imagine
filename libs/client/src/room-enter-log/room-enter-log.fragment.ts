import gql from 'graphql-tag';
import { USER_FRAGMENT, UserFragment } from '../user/user.fragment';

export const ROOM_ENTER_LOG_FRAGMENT: any = gql`
  ${USER_FRAGMENT}
  fragment RoomEnterLogFragment on RoomEnterLogModel {
    id
    roomID
    userID
    user {
      ...UserFragment
    }
    enterTimestamp
    exitTimestamp
  }
`

export interface RoomEnterLogFragment {
  id: number;
  roomID: number;
  userID: number;
  user: UserFragment;
  enterTimestamp: number;
  exitTimestamp: number;
}