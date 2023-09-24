import { useMutation } from "@apollo/client";
import { RankFilterOneInput, RankUpdateInput } from "./rank.input";
import { RANK_UPDATE_ONE_MUTATION, RankUpdateOneMutationResponse, RankUpdateOneMutationVariables } from "./rank-update-one.mutation";

export interface UseRankUpdateOneResponse {
  data?: boolean;
  execute(filter: RankFilterOneInput, input: RankUpdateInput): Promise<boolean>;
  error?: Error;
  loading: boolean;
}

export function useRankUpdateOne(): UseRankUpdateOneResponse {
  const [RankUpdateOne, { loading, data, error }] = useMutation<RankUpdateOneMutationResponse, RankUpdateOneMutationVariables>(RANK_UPDATE_ONE_MUTATION);

  const onRankUpdateOne = async (filter: RankFilterOneInput, input: RankUpdateInput): Promise<boolean> => {
    const response = await RankUpdateOne({ fetchPolicy: "network-only", variables: { filter, input } })
    return response.data!.rankUpdate;
  }

  return {
    execute: onRankUpdateOne,
    error,
    loading,
    data: data?.rankUpdate ?? undefined,
  }
}