import { useMutation } from "@apollo/client";
import { SESSION_DISCONNECT_GOOGLE_MUTATION, SessionDisconnectGoogleResponse, SessionDisconnectGoogleVariables } from "./session-disconnect-google.mutation";

export interface UseSessionDisconnectGoogleResponse {
  execute(): Promise<SessionDisconnectGoogleResponse>;
  error?: Error;
  loading: boolean;
  data?: SessionDisconnectGoogleResponse;
}

export function useSessionDisconnectGoogle(): UseSessionDisconnectGoogleResponse {
  const [disconnectGoogle, { loading, error, data }] = useMutation<SessionDisconnectGoogleResponse, SessionDisconnectGoogleVariables>(SESSION_DISCONNECT_GOOGLE_MUTATION);

  const onDisconnectGoogle = async (): Promise<SessionDisconnectGoogleResponse> => {
    const matchingPhotoReaction = await disconnectGoogle({
      variables: {
        input: {
          confirm: true
        }
      }
    });
    return matchingPhotoReaction.data!;
  }

  return {
    execute: onDisconnectGoogle,
    error,
    loading,
    data: data ?? undefined,
  }
}