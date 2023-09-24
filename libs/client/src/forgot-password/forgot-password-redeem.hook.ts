import { useMutation } from "@apollo/client";
import { ForgotPasswordRequestRedeemInput } from "./forgot-password.input";
import { FORGOT_PASSWORD_REQUEST_REDEEM_MUTATION, ForgotPasswordRequestRedeemMutationResponse, ForgotPasswordRequestRedeemMutationVariables } from "./forgot-password-redeem.mutation";

export interface UseForgotPasswordRequestRedeemResponse {
  execute(input: ForgotPasswordRequestRedeemInput): Promise<boolean>;
  error?: Error;
  loading: boolean;
  data?: boolean;
}

export function useForgotPasswordRequestRedeem(): UseForgotPasswordRequestRedeemResponse {
  const [forgotPasswordRequestRedeem, { loading, error, data }] = useMutation<ForgotPasswordRequestRedeemMutationResponse, ForgotPasswordRequestRedeemMutationVariables>(FORGOT_PASSWORD_REQUEST_REDEEM_MUTATION);

  const onForgotPasswordRequestRedeem = async (input: ForgotPasswordRequestRedeemInput): Promise<boolean> => {
    const matchingArticleReaction = await forgotPasswordRequestRedeem({ fetchPolicy: "network-only", variables: { fetchPolicy: "network-only", input } })
    return matchingArticleReaction.data!.forgotPasswordRequestRedeem;
  }

  return {
    execute: onForgotPasswordRequestRedeem,
    error,
    loading,
    data: data?.forgotPasswordRequestRedeem,
  }
}