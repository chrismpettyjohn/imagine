import gql from 'graphql-tag';

export const GOOGLE_AUTH_FRAGMENT: any = gql`
  fragment GoogleAuthFragment on GoogleAuthModel {
    sessionID
    userID
    sessionToken
  }
`

export interface GoogleAuthFragment {
  sessionID: number;
  userID: number;
  sessionToken: string;
}