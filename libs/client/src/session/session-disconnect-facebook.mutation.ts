import gql from 'graphql-tag';
import { SessionDisconnectAccountInput } from './session.input';

export const SESSION_DISCONNECT_FACEBOOK_MUTATION: any = gql`
  mutation($input: SessionDisconnectAccountInput!) {
    sessionDisconnectFacebook(input: $input) {
      success
    }
  }
`

export interface SessionDisconnectFacebookResponse {
  success: boolean;
}

export interface SessionDisconnectFacebookVariables {
  input: SessionDisconnectAccountInput;
}