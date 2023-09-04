import gql from 'graphql-tag';
import { DISCORD_AUTH_FRAGMENT, DiscordAuthFragment } from './discord.fragment';
import { DiscordAuthInput } from 'apps/imagine-api/src/discord/discord-auth.input';

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
  auth: DiscordAuthFragment;
}