import gql from 'graphql-tag';

export const ROOM_FRAGMENT: any = gql`
  fragment RoomFragment on RoomModel {
    id 
    name
    description
    userID
    usersNow
    usersMax
  }
`
export interface RoomFragment {
  id: number;
  name: string;
  description: string;
  userID: number;
  usersNow: number;
  usersMax: number;
}