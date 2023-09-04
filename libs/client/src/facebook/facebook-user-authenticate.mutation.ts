import gql from 'graphql-tag';
import { FacebookAuthInput } from './facebook.input';
import { FACEBOOK_AUTH_FRAGMENT, FacebookAuthFragment } from './facebook.fragment';

export const FACEBOOK_USER_AUTHENTICATE_MUTATION: any = gql`
  ${FACEBOOK_AUTH_FRAGMENT}
  mutation($input: FacebookAuthInput!) {
    facebookUserAuthenticate(input: $input) {
      ...FacebookAuthFragment
    }
  }
`
export interface FacebookUserAuthenticateVariables {
  input: FacebookAuthInput;
}

export interface FacebookUserAuthenticateResponse {
  facebookUserAuthenticate: FacebookAuthFragment;
}