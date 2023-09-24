import { useMutation } from "@apollo/client";
import { GoogleAuthInput } from "./google.input";
import { GOOGLE_USER_AUTHENTICATE_MUTATION, GoogleUserAuthenticateResponse, GoogleUserAuthenticateVariables } from "./google-user-authenticate.mutation";
import { GoogleAuthFragment } from "./google.fragment";

export interface UseGoogleUserAuthenticateResponse {
  data?: GoogleAuthFragment;
  execute(input: GoogleAuthInput): Promise<GoogleAuthFragment>;
  error?: Error;
  loading: boolean;
}

export function useGoogleUserAuthenticate(): UseGoogleUserAuthenticateResponse {
  const [googleAuth, { loading, data, error }] = useMutation<GoogleUserAuthenticateResponse, GoogleUserAuthenticateVariables>(GOOGLE_USER_AUTHENTICATE_MUTATION);

  const onGoogleAuth = async (input: GoogleAuthInput): Promise<GoogleAuthFragment> => {
    const response = await googleAuth({ fetchPolicy: "network-only", variables: { input } })
    return response.data!.googleUserAuthenticate;
  }

  return {
    execute: onGoogleAuth,
    error,
    loading,
    data: data?.googleUserAuthenticate,
  }
}