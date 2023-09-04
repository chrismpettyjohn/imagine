import gql from 'graphql-tag';
import { GoogleAuthInput } from './google.input';
import { GOOGLE_AUTH_FRAGMENT, GoogleAuthFragment } from './google.fragment';

export const GOOGLE_USER_AUTHENTICATE_MUTATION: any = gql`
  ${GOOGLE_AUTH_FRAGMENT}
  mutation($input: GoogleAuthInput!) {
    googleUserAuthenticate(input: $input) {
      ...GoogleAuthFragment
    }
  }
`
export interface GoogleUserAuthenticateVariables {
  input: GoogleAuthInput;
}

export interface GoogleUserAuthenticateResponse {
  googleUserAuthenticate: GoogleAuthFragment;
}