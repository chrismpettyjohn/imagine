import gql from 'graphql-tag';

export const USER_PINNED_FURNITURE_FRAGMENT: any = gql`
  fragment UserPinnedFurnitureFragment on UserPinnedFurnitureModel {
    id
    userID
    furnitureID
    createdAt
    updatedAt
  }
`

export interface UserPinnedFurnitureFragment {
  id: number;
  userID: number;
  furnitureID: number;
  createdAt: number;
  updatedAt: number;
}