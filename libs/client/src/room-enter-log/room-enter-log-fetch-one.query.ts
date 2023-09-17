import gql from 'graphql-tag';
import { RoomEnterLogFilterOneInput } from './room-enter-log.input';
import { ROOM_ENTER_LOG_FRAGMENT, RoomEnterLogFragment } from './room-enter-log.fragment';

export const ROOM_ENTER_LOG_FETCH_ONE_QUERY: any = gql`
  ${ROOM_ENTER_LOG_FRAGMENT}
  query($filter: RoomEnterLogFilterOneInput!) {
    roomEnterLog(filter: $filter) {
      ...RoomEnterLogFragment
    }
  }
`

export interface RoomEnterLogFetchOneQueryVariables {
  filter: RoomEnterLogFilterOneInput;
}

export interface RoomEnterLogFetchOneQueryResponse {
  roomEnterLog: RoomEnterLogFragment;
}