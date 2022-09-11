import gql from 'graphql-tag';
import {useRunMutation, UseMutationResponse} from '@imagine-cms/web';

const DELETE_RANK = gql`
    mutation($rankID: Float!) {
        rankDelete(id: $rankID)
    }
`

export function useRankDelete(rankID: number): UseMutationResponse<boolean> {
  return useRunMutation(DELETE_RANK, {rankID})
}
