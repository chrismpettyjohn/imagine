import gql from 'graphql-tag';

export const DISCORD_AUTH_FRAGMENT: any = gql`
  fragment DiscordAuthFragment on DiscordAuthModel {
    success
  }
`

export interface DiscordAuthFragment {
  success: boolean;
}