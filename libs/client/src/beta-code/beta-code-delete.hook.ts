import { useMutation } from "@apollo/client";
import { BetaCodeFilterOneInput } from "./beta-code.input";
import { BETA_CODE_DELETE_MUTATION, BetaCodeDeleteMutationResponse, BetaCodeDeleteMutationVariables } from "./beta-code-delete.mutation";

export interface UseBetaCodeDeleteResponse {
  execute(filter: BetaCodeFilterOneInput): Promise<boolean>;
  error?: Error;
  loading: boolean;
  data?: boolean;
}

export function useBetaCodeDelete(): UseBetaCodeDeleteResponse {
  const [deletaBetaCode, { loading, error, data }] = useMutation<BetaCodeDeleteMutationResponse, BetaCodeDeleteMutationVariables>(BETA_CODE_DELETE_MUTATION);

  const onDeleteBetaCode = async (filter: BetaCodeFilterOneInput): Promise<boolean> => {
    const matchingBetaCode = await deletaBetaCode({ fetchPolicy: "network-only", variables: { fetchPolicy: "network-only", filter } });
    return matchingBetaCode.data!.betaCodeDelete;
  }

  return {
    execute: onDeleteBetaCode,
    error,
    loading,
    data: data?.betaCodeDelete,
  }
}