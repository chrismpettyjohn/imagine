import gql from 'graphql-tag';
import { BetaCodeRedeemInput } from './beta-code.input';

export const BETA_CODE_REDEEM_MUTATION: any = gql`
  mutation($input: BetaCodeRedeemInput!) {
    betaCodeRedeem(input: $input)
  }
`

export interface BetaCodeRedeemMutationVariables {
  input: BetaCodeRedeemInput;
}
export interface BetaCodeRedeemMutationResponse {
  betaCodeRedeem: boolean;
}