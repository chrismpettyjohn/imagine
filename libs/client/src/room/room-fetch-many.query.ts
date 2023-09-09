import gql from 'graphql-tag';
import { RoomFilterManyInput } from './room.input';
import { ROOM_FRAGMENT, RoomFragment } from './room.fragment';

export const ROOM_FETCH_MANY_QUERY: any = gql`
  ${ROOM_FRAGMENT}
  query($filter: RoomFilterManyInput!) {
    rooms(filter: $filter) {
      ...RoomFragment
    }
  }
`

export interface RoomFetchManyQueryVariables {
  filter: RoomFilterManyInput;
}
export interface RoomFetchManyQueryResponse {
  rooms: RoomFragment[];
}