import gql from 'graphql-tag';
import { BetaCodeFilterManyInput } from './beta-code.input';
import { BETA_CODE_FRAGMENT, BetaCodeFragment } from './beta-code.fragment';

export const BETA_CODE_FETCH_MANY_QUERY: any = gql`
  ${BETA_CODE_FRAGMENT}
  query($filter: BetaCodeFetchManyInput!) {
    betaCodes(filter: $filter) {
      ...BetaCodeFragment
    }
  }
`

export interface BetaCodeFetchManyQueryVariables {
  filter: BetaCodeFilterManyInput;
}
export interface BetaCodeFetchManyQueryResponse {
  betaCodes: BetaCodeFragment[];
}