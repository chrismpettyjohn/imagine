import gql from 'graphql-tag';

export const USER_FURNITURE_FRAGMENT: any = gql`
  fragment UserFurnitureFragment on UserFurnitureModel {
    id
    userID
    roomID
    itemID
    createdAt
  }
`

export interface UserFurnitureFragment {
  id: number;
  userID: number;
  roomID: number;
  itemID: number;
  createdAt: number;
}