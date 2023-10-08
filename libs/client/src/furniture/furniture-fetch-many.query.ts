import gql from 'graphql-tag';
import { FurnitureFilterManyInput } from './furniture.input';
import { FURNITURE_FRAGMENT, FurnitureFragment } from './furniture.fragment';

export const FURNITURE_FETCH_MANY_QUERY: any = gql`
  ${FURNITURE_FRAGMENT}
  query($filter: FurnitureFilterManyInput!) {
    furnitures(filter: $filter) {
      ...FurnitureFragment
    }
  }
`

export interface FurnitureFetchManyQueryVariables {
  filter: FurnitureFilterManyInput;
}

export interface FurnitureFetchManyQueryResponse {
  furnitures: FurnitureFragment[];
}