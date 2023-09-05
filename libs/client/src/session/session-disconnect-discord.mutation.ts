import { SessionDisconnectAccountInput } from 'apps/imagine-api/src/session/session.input';
import gql from 'graphql-tag';

export const SESSION_DISCONNECT_DISCORD_MUTATION: any = gql`
  mutation($input: SessionDisconnectAccountInput!) {
    sessionDisconnectDiscord(input: $input) {
      success
    }
  }
`

export interface SessionDisconnectDiscordResponse {
  sessionDisconnectDiscord: {
    success: boolean;
  }
}

export interface SessionDisconnectDiscordVariables {
  input: SessionDisconnectAccountInput;
}