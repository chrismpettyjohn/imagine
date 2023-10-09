import gql from 'graphql-tag';
import { UserFurnitureFilterOneInput } from './user-furniture.input';
import { USER_FURNITURE_FRAGMENT, UserFurnitureFragment } from './user-furniture.fragment';

export const USER_FURNITURE_FETCH_ONE_QUERY: any = gql`
  ${USER_FURNITURE_FRAGMENT}
  query($filter: UserFurnitureFilterOneInput!) {
    userFurniture(filter: $filter) {
      ...UserFurnitureFragment
    }
  }
`
export interface UserFurnitureFetchOneVariables {
  filter: UserFurnitureFilterOneInput;
}

export interface UserFurnitureFetchOneResponse {
  userFurniture: UserFurnitureFragment;
}