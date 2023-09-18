import gql from 'graphql-tag';
import { DiscordAuthInput } from './discord.input';
import { DISCORD_AUTH_FRAGMENT, DiscordAuthFragment } from './discord.fragment';

export const DISCORD_USER_AUTHENTICATE_MUTATION: any = gql`
  ${DISCORD_AUTH_FRAGMENT}
  mutation($input: DiscordAuthInput!) {
    discordUserAuthenticate(input: $input) {
      ...DiscordAuthFragment
    }
  }
`
export interface DiscordUserAuthenticateVariables {
  input: DiscordAuthInput;
}

export interface DiscordUserAuthenticateResponse {
  discordUserAuthenticate: DiscordAuthFragment;
}