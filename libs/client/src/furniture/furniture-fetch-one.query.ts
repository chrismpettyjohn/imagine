import gql from 'graphql-tag';
import { FurnitureFilterOneInput } from './furniture.input';
import { FURNITURE_FRAGMENT, FurnitureFragment } from './furniture.fragment';

export const FURNITURE_FETCH_ONE_QUERY: any = gql`
  ${FURNITURE_FRAGMENT}
  query($filter: FurnitureFilterOneInput!) {
    furniture(filter: $filter) {
      ...FurnitureFragment
    }
  }
`

export interface FurnitureFetchOneQueryVariables {
  filter: FurnitureFilterOneInput;
}

export interface FurnitureFetchOneQueryResponse {
  furniture: FurnitureFragment;
}