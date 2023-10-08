import gql from 'graphql-tag';
import { UserPinnedFurnitureFilterManyInput } from './user-pinned-furniture.input';
import { USER_PINNED_FURNITURE_FRAGMENT, UserPinnedFurnitureFragment } from './user-pinned-furniture.fragment';

export const USER_PINNED_FURNITURE_FETCH_MANY_QUERY: any = gql`
  ${USER_PINNED_FURNITURE_FRAGMENT}
  query($filter: UserPinnedFurnitureFilterManyInput!) {
    userPinnedFurnitures(filter: $filter) {
      ...UserPinnedFurnitureFragment
    }
  }
`

export interface UserPinnedFurnitureFetchManyQueryVariables {
  filter: UserPinnedFurnitureFilterManyInput;
}

export interface UserPinnedFurnitureFetchManyQueryResponse {
  userPinnedFurnitures: UserPinnedFurnitureFragment[];
}