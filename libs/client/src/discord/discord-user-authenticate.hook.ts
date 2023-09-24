import { useMutation } from "@apollo/client";
import { DiscordAuthInput } from "./discord.input";
import { DISCORD_USER_AUTHENTICATE_MUTATION, DiscordUserAuthenticateResponse, DiscordUserAuthenticateVariables } from "./discord-user-authenticate.mutation";
import { DiscordAuthFragment } from "./discord.fragment";

export interface UseDiscordUserAuthenticateResponse {
  data?: DiscordAuthFragment;
  execute(input: DiscordAuthInput): Promise<DiscordAuthFragment>;
  error?: Error;
  loading: boolean;
}

export function useDiscordUserAuthenticate(): UseDiscordUserAuthenticateResponse {
  const [discordAuth, { loading, data, error }] = useMutation<DiscordUserAuthenticateResponse, DiscordUserAuthenticateVariables>(DISCORD_USER_AUTHENTICATE_MUTATION);

  const onDiscordAuth = async (input: DiscordAuthInput): Promise<DiscordAuthFragment> => {
    const response = await discordAuth({ fetchPolicy: "network-only", variables: { fetchPolicy: "network-only", input } })
    return response.data!.discordUserAuthenticate;
  }

  return {
    execute: onDiscordAuth,
    error,
    loading,
    data: data?.discordUserAuthenticate,
  }
}