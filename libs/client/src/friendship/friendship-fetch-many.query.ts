import gql from 'graphql-tag';
import { FriendshipFilterManyInput } from './friendship.input';
import { FRIENDSHIP_FRAGMENT, FriendshipFragment } from './friendship.fragment';

export const FRIENDSHIP_FETCH_MANY_QUERY: any = gql`
  ${FRIENDSHIP_FRAGMENT}
  query($filter: FriendshipFilterManyInput!) {
    friendships(filter: $filter) {
      ...FriendshipFragment
    }
  }
`

export interface FriendshipFetchManyQueryVariables {
  filter: FriendshipFilterManyInput;
}

export interface FriendshipFetchManyQueryResponse {
  friendships: FriendshipFragment[];
}