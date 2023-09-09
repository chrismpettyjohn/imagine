import gql from 'graphql-tag';
import { RankFilterOneInput, USER_FRAGMENT, UserFragment } from '@imagine-cms/client';

export const RANK_FETCH_ONE_WITH_USERS_QUERY: any = gql`
  ${USER_FRAGMENT}
  query($filter: RankFilterOneInput!) {
    rank(filter: $filter) {
      users {
        ...UserFragment
      }
    }
  }
`

export interface RankWithUsersFragment {
  users: UserFragment[];
}

export interface RankFetchOneWithUsersQueryResponse {
  rank: RankWithUsersFragment;
}

export interface RankFetchOneWithUsersQueryVariables {
  filter: RankFilterOneInput;
}