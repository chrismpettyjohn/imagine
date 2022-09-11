import gql from 'graphql-tag';
import {RankCreateInputDTO, RankWire} from '@imagine-cms/types';
import {useRunMutation, UseMutationResponse} from '@imagine-cms/web';

const CREATE_RANK = gql`
    mutation($rankCreateInput: RankCreateInput!) {
        rankCreate(newRank: $rankCreateInput) {
            id
            name
            scopes {
                accessAdminPanel
                manageArticles
            }
            badgeCode
            description
        }
    }
`

export function useRankCreate(rankCreateInput: RankCreateInputDTO): UseMutationResponse<{rank: RankWire}> {
  return useRunMutation(CREATE_RANK, {rankCreateInput})
}
