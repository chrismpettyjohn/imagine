import { useMutation } from "@apollo/client";
import { BetaCodeRedeemInput } from "./beta-code.input";
import { BETA_CODE_REDEEM_MUTATION, BetaCodeRedeemMutationResponse, BetaCodeRedeemMutationVariables } from "./beta-code-redeem.mutation";

export interface UseBetaCodeRedeemResponse {
  execute(input: BetaCodeRedeemInput): Promise<boolean>;
  error?: Error;
  loading: boolean;
  data?: boolean;
}

export function useBetaCodeRedeem(): UseBetaCodeRedeemResponse {
  const [RedeemBetaCode, { loading, error, data }] = useMutation<BetaCodeRedeemMutationResponse, BetaCodeRedeemMutationVariables>(BETA_CODE_REDEEM_MUTATION);

  const onFetchBetaCode = async (input: BetaCodeRedeemInput): Promise<boolean> => {
    const matchingBetaCode = await RedeemBetaCode({ variables: { input } });
    return matchingBetaCode.data!.betaCodeRedeem;
  }

  return {
    execute: onFetchBetaCode,
    error,
    loading,
    data: data?.betaCodeRedeem,
  }
}