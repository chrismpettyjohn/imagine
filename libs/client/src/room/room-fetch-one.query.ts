import gql from 'graphql-tag';
import { RoomFilterOneInput } from './room.input';
import { ROOM_FRAGMENT, RoomFragment } from './room.fragment';

export const ROOM_FETCH_ONE_QUERY: any = gql`
  ${ROOM_FRAGMENT}
  query($filter: RoomFilterOneInput!) {
    room(filter: $filter) {
      ...RoomFragment
    }
  }
`

export interface RoomFetchOneQueryVariables {
  filter: RoomFilterOneInput;
}

export interface RoomFetchOneQueryResponse {
  room: RoomFragment;
}