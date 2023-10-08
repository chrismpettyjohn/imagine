import gql from 'graphql-tag';
import { UserPinnedFurnitureCreateInput } from './user-pinned-furniture.input';
import { USER_PINNED_FURNITURE_FRAGMENT, UserPinnedFurnitureFragment } from './user-pinned-furniture.fragment';

export const USER_PINNED_FURNITURE_CREATE_MUTATION: any = gql`
  ${USER_PINNED_FURNITURE_FRAGMENT}
  mutation($input: UserPinnedFurnitureCreateInput!) {
    userPinnedFurnitureCreate(input: $input) {
      ...UserPinnedFurnitureFragment
    }
  }
`

export interface UserPinnedFurnitureCreateVariables {
  input: UserPinnedFurnitureCreateInput;
}

export interface UserPinnedFurnitureCreateResponse {
  userPinnedFurnitureCreate: UserPinnedFurnitureFragment;
}