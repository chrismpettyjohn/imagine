import gql from 'graphql-tag';
import { FurniturePurchaseLogFilterManyInput } from './furniture-purchase-log.input';
import { FURNITURE_PURCHASE_LOG_FRAGMENT, FurniturePurchaseLogFragment } from './furniture-purchase-log.fragment';

export const FURNITURE_PURCHASE_LOG_FETCH_MANY_QUERY: any = gql`
  ${FURNITURE_PURCHASE_LOG_FRAGMENT}
  query($filter: FurniturePurchaseLogFilterManyInput!) {
    furniturePurchaseLogs(filter: $filter) {
      ...FurniturePurchaseLogFragment
    }
  }
`

export interface FurniturePurchaseLogFetchManyQueryVariables {
  filter: FurniturePurchaseLogFilterManyInput;
}
export interface FurniturePurchaseLogFetchManyQueryResponse {
  furniturePurchaseLogs: FurniturePurchaseLogFragment[];
}