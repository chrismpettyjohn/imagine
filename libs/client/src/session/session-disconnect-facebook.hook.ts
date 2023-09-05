import { useMutation } from "@apollo/client";
import { SESSION_DISCONNECT_FACEBOOK_MUTATION, SessionDisconnectFacebookResponse, SessionDisconnectFacebookVariables } from "./session-disconnect-facebook.mutation";

export interface UseSessionDisconnectFacebookResponse {
  execute(): Promise<SessionDisconnectFacebookResponse>;
  error?: Error;
  loading: boolean;
  data?: SessionDisconnectFacebookResponse;
}

export function useSessionDisconnectFacebook(): UseSessionDisconnectFacebookResponse {
  const [disconnectFacebook, { loading, error, data }] = useMutation<SessionDisconnectFacebookResponse, SessionDisconnectFacebookVariables>(SESSION_DISCONNECT_FACEBOOK_MUTATION);

  const onDisconnectFacebook = async (): Promise<SessionDisconnectFacebookResponse> => {
    const matchingPhotoReaction = await disconnectFacebook({
      variables: {
        input: {
          confirm: true
        }
      }
    });
    return matchingPhotoReaction.data!;
  }

  return {
    execute: onDisconnectFacebook,
    error,
    loading,
    data: data ?? undefined,
  }
}