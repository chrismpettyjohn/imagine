import gql from 'graphql-tag';
import { ForgotPasswordRequestRedeemInput } from './forgot-password.input';

export const FORGOT_PASSWORD_REQUEST_REDEEM_MUTATION: any = gql`
  mutation($input: ForgotPasswordRequestRedeemInput!) {
    forgotPasswordRequestRedeem(input: $input)
  }
`

export interface ForgotPasswordRequestRedeemMutationVariables {
  input: ForgotPasswordRequestRedeemInput;
}

export interface ForgotPasswordRequestRedeemMutationResponse {
  forgotPasswordRequestRedeem: boolean;
}