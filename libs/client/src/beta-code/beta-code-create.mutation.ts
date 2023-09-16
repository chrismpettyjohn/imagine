import gql from 'graphql-tag';
import { BETA_CODE_FRAGMENT, BetaCodeFragment } from './beta-code.fragment';

export const BETA_CODE_CREATE_MUTATION: any = gql`
  ${BETA_CODE_FRAGMENT}
  mutation {
    betaCodeCreate() {
      ...BetaCodeFragment
    }
  }
`
export interface BetaCodeCreateMutationResponse {
  betaCodeCreate: BetaCodeFragment;
}