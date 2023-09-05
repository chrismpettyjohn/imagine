import { useMutation } from "@apollo/client";
import { SESSION_DISCONNECT_DISCORD_MUTATION, SessionDisconnectDiscordResponse, SessionDisconnectDiscordVariables } from "./session-disconnect-discord.mutation";

export interface UseSessionDisconnectDiscordResponse {
  execute(): Promise<SessionDisconnectDiscordResponse>;
  error?: Error;
  loading: boolean;
  data?: SessionDisconnectDiscordResponse;
}

export function useSessionDisconnectDiscord(): UseSessionDisconnectDiscordResponse {
  const [disconnectDiscord, { loading, error, data }] = useMutation<SessionDisconnectDiscordResponse, SessionDisconnectDiscordVariables>(SESSION_DISCONNECT_DISCORD_MUTATION);

  const onDisconnectDiscord = async (): Promise<SessionDisconnectDiscordResponse> => {
    const matchingPhotoReaction = await disconnectDiscord({
      variables: {
        input: {
          confirm: true
        }
      }
    });
    return matchingPhotoReaction.data!;
  }

  return {
    execute: onDisconnectDiscord,
    error,
    loading,
    data: data ?? undefined,
  }
}