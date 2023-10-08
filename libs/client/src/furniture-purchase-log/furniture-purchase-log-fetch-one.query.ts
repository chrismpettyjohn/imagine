import gql from 'graphql-tag';
import { FurniturePurchaseLogFilterOneInput } from './furniture-purchase-log.input';
import { FURNITURE_PURCHASE_LOG_FRAGMENT, FurniturePurchaseLogFragment } from './furniture-purchase-log.fragment';

export const FURNITURE_PURCHASE_LOG_FETCH_ONE_QUERY: any = gql`
  ${FURNITURE_PURCHASE_LOG_FRAGMENT}
  query($filter: FurniturePurchaseLogFilterOneInput!) {
    furniturePurchaseLog(filter: $filter) {
      ...FurniturePurchaseLogFragment
    }
  }
`

export interface FurniturePurchaseLogFetchOneQueryVariables {
  filter: FurniturePurchaseLogFilterOneInput;
}
export interface FurniturePurchaseLogFetchOneQueryResponse {
  furniturePurchaseLog: FurniturePurchaseLogFragment;
}