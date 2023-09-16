import gql from 'graphql-tag';
import { BetaCodeFilterOneInput } from './beta-code.input';

export const BETA_CODE_DELETE_MUTATION: any = gql`
  mutation($filter: BetaCodeFilterOneInput!) {
    betaCodeDelete(filter: $filter)
  }
`

export interface BetaCodeDeleteMutationVariables {
  filter: BetaCodeFilterOneInput;
}

export interface BetaCodeDeleteMutationResponse {
  betaCodeDelete: boolean;
}