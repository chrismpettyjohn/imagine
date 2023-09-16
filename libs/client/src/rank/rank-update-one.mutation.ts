import gql from 'graphql-tag';
import { RankFilterOneInput, RankUpdateInput } from './rank.input';

export const RANK_UPDATE_ONE_MUTATION: any = gql`
  mutation($filter: RankFilterOneInput!, $input: RankUpdateInput!) {
    rankUpdate(filter: $filter, input: $input)
  }
`

export interface RankUpdateOneMutationVariables {
  filter: RankFilterOneInput;
  input: RankUpdateInput;
}

export interface RankUpdateOneMutationResponse {
  rankUpdate: boolean
}