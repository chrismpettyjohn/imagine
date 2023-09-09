import gql from 'graphql-tag';
import { UserFilterOneInput } from './user.input';
import { USER_FRAGMENT, UserFragment } from './user.fragment';

export const USER_FETCH_ONE_QUERY: any = gql`
  ${USER_FRAGMENT}
  query($filter: UserFilterOneInput!) {
    user(filter: $filter) {
      ...UserFragment
    }
  }
`

export interface UserFetchOneVariables {
  filter: UserFilterOneInput;
}

export interface UserFetchOneResponse {
  user: UserFragment;
}