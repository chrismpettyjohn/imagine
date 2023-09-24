import { useMutation } from "@apollo/client";
import { FacebookAuthInput } from "./facebook.input";
import { FACEBOOK_USER_AUTHENTICATE_MUTATION, FacebookUserAuthenticateResponse, FacebookUserAuthenticateVariables } from "./facebook-user-authenticate.mutation";
import { FacebookAuthFragment } from "./facebook.fragment";

export interface UseFacebookUserAuthenticateResponse {
  data?: FacebookAuthFragment;
  execute(input: FacebookAuthInput): Promise<FacebookAuthFragment>;
  error?: Error;
  loading: boolean;
}

export function useFacebookUserAuthenticate(): UseFacebookUserAuthenticateResponse {
  const [facebookAuth, { loading, data, error }] = useMutation<FacebookUserAuthenticateResponse, FacebookUserAuthenticateVariables>(FACEBOOK_USER_AUTHENTICATE_MUTATION);

  const onFacebookAuth = async (input: FacebookAuthInput): Promise<FacebookAuthFragment> => {
    const response = await facebookAuth({ fetchPolicy: "network-only", variables: { input } })
    return response.data!.facebookUserAuthenticate;
  }

  return {
    execute: onFacebookAuth,
    error,
    loading,
    data: data?.facebookUserAuthenticate,
  }
}