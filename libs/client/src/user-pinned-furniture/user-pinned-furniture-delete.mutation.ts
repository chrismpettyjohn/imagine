import gql from 'graphql-tag';
import { USER_PINNED_FURNITURE_FRAGMENT } from './user-pinned-furniture.fragment';
import { UserPinnedFurnitureFilterOneInput } from './user-pinned-furniture.input';

export const USER_PINNED_FURNITURE_DELETE_MUTATION: any = gql`
  ${USER_PINNED_FURNITURE_FRAGMENT}
  mutation($filter: UserPinnedFurnitureFilterOneInput!) {
    userPinnedFurnitureDelete(filter: $filter)
  }
`

export interface UserPinnedFurnitureDeleteVariables {
  filter: UserPinnedFurnitureFilterOneInput;
}

export interface UserPinnedFurnitureDeleteResponse {
  userPinnedFurnitureDelete: boolean;
}