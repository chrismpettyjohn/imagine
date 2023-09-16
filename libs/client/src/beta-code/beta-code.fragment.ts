import gql from 'graphql-tag';

export const BETA_CODE_FRAGMENT: any = gql`
  fragment BetaCodeFragment on BetaCodeModel {
    id
    betaCode
    userID
  }
`

export interface BetaCodeFragment {
  id: number;
  betaCode: string;
  userID?: number;
}