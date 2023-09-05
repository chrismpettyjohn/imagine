import gql from 'graphql-tag';
import { SessionDisconnectAccountInput } from './session.input';

export const SESSION_DISCONNECT_GOOGLE_MUTATION: any = gql`
  mutation($input: SessionDisconnectAccountInput!) {
    sessionDisconnectGoogle(input: $input) {
      success
    }
  }
`

export interface SessionDisconnectGoogleResponse {
  success: boolean;
}

export interface SessionDisconnectGoogleVariables {
  input: SessionDisconnectAccountInput;
}