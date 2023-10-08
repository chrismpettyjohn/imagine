import gql from 'graphql-tag';
import { UserPinnedFurnitureFilterOneInput } from './user-pinned-furniture.input';
import { USER_PINNED_FURNITURE_FRAGMENT, UserPinnedFurnitureFragment } from './user-pinned-furniture.fragment';

export const USER_PINNED_FURNITURE_FETCH_ONE_QUERY: any = gql`
  ${USER_PINNED_FURNITURE_FRAGMENT}
  query($filter: UserPinnedFurnitureFilterOneInput!) {
    userPinnedFurniture(filter: $filter) {
      ...UserPinnedFurnitureFragment
    }
  }
`

export interface UserPinnedFurnitureFetchOneQueryVariables {
  filter: UserPinnedFurnitureFilterOneInput;
}

export interface UserPinnedFurnitureFetchOneQueryResponse {
  userPinnedFurniture: UserPinnedFurnitureFragment;
}