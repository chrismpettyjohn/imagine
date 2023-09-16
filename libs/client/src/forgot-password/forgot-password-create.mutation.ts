import gql from 'graphql-tag';
import { ForgotPasswordRequestCreateInput } from './forgot-password.input';

export const FORGOT_PASSWORD_REQUEST_CREATE_MUTATION: any = gql`
  mutation($input: ForgotPasswordRequestCreateInput!) {
    forgotPasswordRequestCreate(input: $input)
  }
`

export interface ForgotPasswordRequestCreateMutationVariables {
  input: ForgotPasswordRequestCreateInput;
}

export interface ForgotPasswordRequestCreateMutationResponse {
  forgotPasswordRequestCreate: boolean;
}