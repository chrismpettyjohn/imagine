import gql from 'graphql-tag';
import { RankFilterOneInput } from './rank.input';
import { RANK_FRAGMENT, RankFragment } from './rank.fragment';

export const RANK_FETCH_ONE_QUERY: any = gql`
  ${RANK_FRAGMENT}
  query($filter: RankFilterOneInput!) {
    rank(filter: $filter) {
      ...RankFragment
    }
  }
`

export interface RankFetchOneResponse {
  rank: RankFragment;
}

export interface RankFetchOneVariables {
  filter: RankFilterOneInput;
}