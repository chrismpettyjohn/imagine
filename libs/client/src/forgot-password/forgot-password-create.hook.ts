import { useMutation } from "@apollo/client";
import { ForgotPasswordRequestCreateInput } from "./forgot-password.input";
import { FORGOT_PASSWORD_REQUEST_CREATE_MUTATION, ForgotPasswordRequestCreateMutationResponse, ForgotPasswordRequestCreateMutationVariables } from "./forgot-password-create.mutation";

export interface UseForgotPasswordRequestCreateResponse {
  execute(input: ForgotPasswordRequestCreateInput): Promise<boolean>;
  error?: Error;
  loading: boolean;
  data?: boolean;
}

export function useForgotPasswordRequestCreate(): UseForgotPasswordRequestCreateResponse {
  const [forgotPasswordRequestCreate, { loading, error, data }] = useMutation<ForgotPasswordRequestCreateMutationResponse, ForgotPasswordRequestCreateMutationVariables>(FORGOT_PASSWORD_REQUEST_CREATE_MUTATION);

  const onForgotPasswordRequestCreate = async (input: ForgotPasswordRequestCreateInput): Promise<boolean> => {
    const matchingArticleReaction = await forgotPasswordRequestCreate({ variables: { input } })
    return matchingArticleReaction.data!.forgotPasswordRequestCreate;
  }

  return {
    execute: onForgotPasswordRequestCreate,
    error,
    loading,
    data: data?.forgotPasswordRequestCreate,
  }
}