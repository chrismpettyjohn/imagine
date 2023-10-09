import gql from 'graphql-tag';
import { UserFurnitureFilterManyInput } from './user-furniture.input';
import { USER_FURNITURE_FRAGMENT, UserFurnitureFragment } from './user-furniture.fragment';

export const USER_FURNITURE_FETCH_MANY_QUERY: any = gql`
  ${USER_FURNITURE_FRAGMENT}
  query($filter: UserFurnitureFilterManyInput!) {
    userFurnitures(filter: $filter) {
      ...UserFurnitureFragment
    }
  }
`

export interface UserFurnitureFetchManyQueryVariables {
  filter: UserFurnitureFilterManyInput;
}
export interface UserFurnitureFetchManyQueryResponse {
  userFurnitures: UserFurnitureFragment[];
}