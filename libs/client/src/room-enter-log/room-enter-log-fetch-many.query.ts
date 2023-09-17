import gql from 'graphql-tag';
import { RoomEnterLogFilterManyInput } from './room-enter-log.input';
import { ROOM_ENTER_LOG_FRAGMENT, RoomEnterLogFragment } from './room-enter-log.fragment';

export const ROOM_ENTER_LOG_FETCH_MANY_QUERY: any = gql`
  ${ROOM_ENTER_LOG_FRAGMENT}
  query($filter: RoomEnterLogFilterManyInput!) {
    roomEnterLogs(filter: $filter) {
      ...RoomEnterLogFragment
    }
  }
`

export interface RoomEnterLogFetchManyQueryVariables {
  filter: RoomEnterLogFilterManyInput;
}

export interface RoomEnterLogFetchManyQueryResponse {
  roomEnterLogs: RoomEnterLogFragment[];
}