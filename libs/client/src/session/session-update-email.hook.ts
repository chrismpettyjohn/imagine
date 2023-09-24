import { useMutation } from "@apollo/client";
import { SessionUpdateEmailInput } from "./session.input";
import { SESSION_UPDATE_EMAIL_MUTATION, SessionUpdateEmailResponse, SessionUpdateEmailVariables } from "./session-update-email.mutation";

export interface UseSessionUpdateEmailResponse {
  execute(input: SessionUpdateEmailInput): Promise<SessionUpdateEmailResponse>;
  error?: Error;
  loading: boolean;
  data?: SessionUpdateEmailResponse;
}

export function useSessionUpdateEmail(): UseSessionUpdateEmailResponse {
  const [sessionUpdateEmail, { loading, error, data }] = useMutation<SessionUpdateEmailResponse, SessionUpdateEmailVariables>(SESSION_UPDATE_EMAIL_MUTATION);

  const onSessionUpdateEmail = async (input: SessionUpdateEmailInput): Promise<SessionUpdateEmailResponse> => {
    const matchingPhotoReaction = await sessionUpdateEmail({ fetchPolicy: "network-only", variables: { fetchPolicy: "network-only", input } })
    return matchingPhotoReaction.data!;
  }

  return {
    execute: onSessionUpdateEmail,
    error,
    loading,
    data: data ?? undefined,
  }
}