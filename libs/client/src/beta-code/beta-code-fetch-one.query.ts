import gql from 'graphql-tag';
import { BetaCodeFilterOneInput } from './beta-code.input';
import { BETA_CODE_FRAGMENT, BetaCodeFragment } from './beta-code.fragment';

export const BETA_CODE_FETCH_ONE_QUERY: any = gql`
  ${BETA_CODE_FRAGMENT}
  query($filter: BetaCodeFilterOneInput!) {
    betaCode(filter: $filter) {
      ...BetaCodeFragment
    }
  }
`

export interface BetaCodeFetchOneQueryVariables {
  filter: BetaCodeFilterOneInput;
}

export interface BetaCodeFetchOneQueryResponse {
  betaCode: BetaCodeFragment;
}