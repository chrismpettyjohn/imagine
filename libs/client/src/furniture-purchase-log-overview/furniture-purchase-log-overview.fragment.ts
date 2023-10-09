import gql from 'graphql-tag';

export const FURNITURE_PURCHASE_LOG_OVERVIEW_FRAGMMENT: any = gql`
  fragment FurniturePurchaseLogOverview on FurniturePurchaseLogOverviewModel {
    furnitureID
    averageCostCredits
    averageCostPoints
    totalSells
  }
`
export interface FurniturePurchaseLogOverviewFragment {
  furnitureID: number;
  averageCostCredits: number;
  averageCostPoints: number;
  totalSells: number;
}

