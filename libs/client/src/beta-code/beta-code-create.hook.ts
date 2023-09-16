import { useMutation } from "@apollo/client";
import { BetaCodeFragment } from "./beta-code.fragment";
import { BETA_CODE_CREATE_MUTATION, BetaCodeCreateMutationResponse } from "./beta-code-create.mutation";

export interface UseBetaCodeCreateResponse {
  execute(): Promise<BetaCodeFragment>;
  error?: Error;
  loading: boolean;
  data?: BetaCodeFragment;
}

export function useBetaCodeCreate(): UseBetaCodeCreateResponse {
  const [createBetaCode, { loading, error, data }] = useMutation<BetaCodeCreateMutationResponse>(BETA_CODE_CREATE_MUTATION);

  const onFetchBetaCode = async (): Promise<BetaCodeFragment> => {
    const matchingBetaCode = await createBetaCode();
    return matchingBetaCode.data!.betaCodeCreate;
  }

  return {
    execute: onFetchBetaCode,
    error,
    loading,
    data: data?.betaCodeCreate,
  }
}