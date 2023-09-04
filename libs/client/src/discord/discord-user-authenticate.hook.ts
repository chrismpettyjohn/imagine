import { useMutation } from "@apollo/client";
import { DiscordAuthInput } from "apps/imagine-api/src/discord/discord-auth.input";
import { DISCORD_USER_AUTHENTICATE_MUTATION, DiscordUserAuthenticateResponse, DiscordUserAuthenticateVariables } from "./discord-user-authenticate.mutation";

export interface UseDiscordUserAuthenticateResponse {
  execute(input: DiscordAuthInput): Promise<void>;
  error?: Error;
  loading: boolean;
}

export function useDiscordUserAuthenticate(): UseDiscordUserAuthenticateResponse {
  const [discordAuth, { loading, error }] = useMutation<DiscordUserAuthenticateResponse, DiscordUserAuthenticateVariables>(DISCORD_USER_AUTHENTICATE_MUTATION);

  const onDiscordAuth = async (input: DiscordAuthInput): Promise<void> => {
    const newUserSession = await discordAuth({ variables: { input } })
  }

  return {
    execute: onDiscordAuth,
    error,
    loading,
  }
}