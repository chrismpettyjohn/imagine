import gql from 'graphql-tag';
import { UserBadgeFilterManyInput } from './user-badge.input';
import { USER_BADGE_FRAGMENT, UserBadgeFragment } from './user-badge.fragment';

export const USER_BADGE_FETCH_MANY_QUERY: any = gql`
  ${USER_BADGE_FRAGMENT}
  query($filter: UserBadgeFilterManyInput!) {
    userBadges(filter: $filter) {
      ...UserBadgeFragment
    }
  }
`

export interface UserBadgeFetchManyQueryResponse {
  userBadges: UserBadgeFragment[];
}
export interface UserBadgeFetchManyQueryVariables {
  filter: UserBadgeFilterManyInput;
}