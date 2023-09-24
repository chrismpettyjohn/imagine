import { useMutation } from "@apollo/client";
import { SessionUpdateLanguageInput } from "./session.input";
import { SESSION_UPDATE_LANGUAGE_MUTATION, SessionUpdateLanguageResponse, SessionUpdateLanguageVariables } from "./session-update-language.mutation";

export interface UseSessionUpdateLanguageResponse {
  execute(input: SessionUpdateLanguageInput): Promise<SessionUpdateLanguageResponse>;
  error?: Error;
  loading: boolean;
  data?: SessionUpdateLanguageResponse;
}

export function useSessionUpdateLanguage(): UseSessionUpdateLanguageResponse {
  const [sessionUpdateLanguage, { loading, error, data }] = useMutation<SessionUpdateLanguageResponse, SessionUpdateLanguageVariables>(SESSION_UPDATE_LANGUAGE_MUTATION);

  const onSessionUpdateLanguage = async (input: SessionUpdateLanguageInput): Promise<SessionUpdateLanguageResponse> => {
    const response = await sessionUpdateLanguage({ variables: { input } })
    return response.data!;
  }

  return {
    execute: onSessionUpdateLanguage,
    error,
    loading,
    data: data ?? undefined,
  }
}