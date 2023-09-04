import gql from 'graphql-tag';
import { SessionUpdatePasswordInput } from './session.input';

export const SESSION_UPDATE_PASSWORD_MUTATION: any = gql`
  mutation($input: SessionUpdatePasswordInput!) {
    sessionUpdatePassword(input: $input) {
      success
    }
  }
`

export interface SessionUpdatePasswordResponse {
  sessionUpdatePassword: {
    success: boolean;
  }
}
export interface SessionUpdatePasswordVariables {
  input: SessionUpdatePasswordInput;
}