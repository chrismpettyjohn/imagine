import gql from 'graphql-tag';
import { USER_FRAGMENT, UserFragment } from '../fragments/user.fragment';
import { UserFilterManyInput } from 'apps/imagine-api/src/user/user.input';

export const USER_FETCH_MANY_QUERY: any = gql`
  ${USER_FRAGMENT}
  query($filter: UserFilterManyInput!) {
    users(filter: $filter) {
      ...UserFragment
    }
  }
`

export interface UserFetchManyResponse {
  users: UserFragment[];
}

export interface UserFetchManyVariables {
  filter: UserFilterManyInput;
}