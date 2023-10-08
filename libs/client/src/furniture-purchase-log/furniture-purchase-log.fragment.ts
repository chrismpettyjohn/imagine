import gql from 'graphql-tag';

export const FURNITURE_PURCHASE_LOG_FRAGMENT: any = gql`
  fragment FurniturePurchaseLogFragment on FurniturePurchaseLogModel {
    id
    userID
    itemIDs
    costCredits
    costPixels
    createdAt
  }
`

export interface FurniturePurchaseLogFragment {
  id: number;
  userID: number;
  itemIDs: number[];
  costCredits: number;
  costPixels: number;
  createdAt: number;
}