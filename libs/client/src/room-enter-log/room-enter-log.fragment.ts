import gql from 'graphql-tag';

export const ROOM_ENTER_LOG_FRAGMENT: any = gql`
  fragment RoomEnterLogFragment on RoomEnterLogModel {
    id
    roomID
    userID
    enterTimestamp
    exitTimestamp
  }
`

export interface RoomEnterLogFragment {
  id: number;
  roomID: number;
  userID: number;
  enterTimestamp: number;
  exitTimestamp: number;
}