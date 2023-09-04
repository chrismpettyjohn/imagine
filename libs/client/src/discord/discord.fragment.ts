import gql from 'graphql-tag';

export const DISCORD_AUTH_FRAGMENT: any = gql`
  fragment DiscordAuthFragment on DiscordAuthModel {
    sessionID
    userID
    sessionToken
  }
`

export interface DiscordAuthFragment {
  sessionID: number;
  userID: number;
  sessionToken: string;
}