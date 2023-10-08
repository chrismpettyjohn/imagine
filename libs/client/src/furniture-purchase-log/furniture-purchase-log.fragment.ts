import gql from 'graphql-tag';

export const FURNITURE_PURCHASE_LOG_FRAGMENT: any = gql`
  fragment FurniturePurchaseLogFragment on FurniturePurchaseLogModel {
    id
    userID
    itemIDs
    costCredits
    costPoints
    averageCostCredits
    averageCostPoints
    createdAt
  }
`

export interface FurniturePurchaseLogFragment {
  id: number;
  userID: number;
  itemIDs: number[];
  costCredits: number;
  costPoints: number;
  averageCostCredits: number;
  averageCostPoints: number;
  createdAt: number;
}