import gql from 'graphql-tag';
import {RankUpdateInputDTO} from '@imagine-cms/types';
import {useRunMutation, UseMutationResponse} from '@imagine-cms/web';

const UPDATE_RANK = gql`
    mutation($rankID: Float!, $rankChanges: RankUpdateInput!) {
        rankUpdate(id: $rankID, rankChanges: $rankChanges)
    }
`

export function useRankUpdateByID(rankID: number, rankChanges: RankUpdateInputDTO): UseMutationResponse<boolean> {
  return useRunMutation(UPDATE_RANK, {rankID, rankChanges})
}
