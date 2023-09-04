import gql from 'graphql-tag';

export const FACEBOOK_AUTH_FRAGMENT: any = gql`
  fragment FacebookAuthFragment on FacebookAuthModel {
    sessionID
    userID
    sessionToken
  }
`

export interface FacebookAuthFragment {
  sessionID: number;
  userID: number;
  sessionToken: string;
}