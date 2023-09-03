import gql from 'graphql-tag';
import { RankFilterManyInput } from '../input/rank.input';
import { RANK_FRAGMENT, RankFragment } from '../fragments/rank.fragment';

export const RANK_FETCH_MANY_QUERY: any = gql`
  ${RANK_FRAGMENT}
  query($filter: RankFilterManyInput!) {
    ranks(filter: $filter) {
      ...RankFragment
    }
  }
`

export interface RankFetchManyResponse {
  ranks: RankFragment[];
}

export interface RankFetchManyVariables {
  filter: RankFilterManyInput;
}