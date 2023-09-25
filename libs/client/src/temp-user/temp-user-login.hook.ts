import { useMutation } from "@apollo/client";
import { TEMP_USER_LOGIN_MUTATION, TempUserLoginResponse, TempUserSession } from "./temp-user-login.mutation";

export interface UseTempUserLoginResponse {
  execute(): Promise<TempUserSession>;
  error?: Error;
  loading: boolean;
  data?: TempUserSession;
}

export function useTempUserLogin(): UseTempUserLoginResponse {
  const [onLoginTempUser, { loading, error, data }] = useMutation<TempUserLoginResponse>(TEMP_USER_LOGIN_MUTATION);

  const onFetch = async (): Promise<TempUserSession> => {
    const newTempUser = await onLoginTempUser({ fetchPolicy: "network-only" })
    return newTempUser.data!.tempUserLogin;
  }

  return {
    execute: onFetch,
    error,
    loading,
    data: data?.tempUserLogin,
  }
}