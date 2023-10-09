import gql from 'graphql-tag';
import { FurniturePurchaseLogOverviewFilterManyInput } from './furniture-purchase-log-overview.input';
import { FURNITURE_PURCHASE_LOG_OVERVIEW_FRAGMMENT, FurniturePurchaseLogOverviewFragment } from './furniture-purchase-log-overview.fragment';

export const FURNITURE_PURCHASE_LOG_OVERVIEW_LEAST_SELLS_QUERY: any = gql`
  ${FURNITURE_PURCHASE_LOG_OVERVIEW_FRAGMMENT}
  query($filter: FurniturePurchaseLogOverviewFilterManyInput!) {
    furniturePurchaseLogOverviewLeastSells(filter: $filter) {
      ...FurniturePurchaseLogOverviewFragment
    }
  }
`
export interface FurniturePurchaseLogOverviewLeastSellsQueryVariables {
  filter: FurniturePurchaseLogOverviewFilterManyInput;
}

export interface FurniturePurchaseLogOverviewLeastSellsQueryResponse {
  furniturePurchaseLogOverviewLeastSells: FurniturePurchaseLogOverviewFragment[];
}