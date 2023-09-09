import gql from 'graphql-tag';
import { GroupMembershipFilterManyInput } from './group-membership.input';
import { GROUP_MEMBERSHIP_FRAGMENT, GroupMembershipFragment } from './group-membership.fragment';

export const GROUP_MEMBERSHIP_FETCH_MANY_QUERY: any = gql`
  ${GROUP_MEMBERSHIP_FRAGMENT}
  query($filter: GroupMembershipFilterManyInput!) {
    groupMemberships(filter: $filter) {
      ...GroupMembershipFragment
    }
  }
`

export interface GroupMembershipFetchManyQueryVariables {
  filter: GroupMembershipFilterManyInput;
}

export interface GroupMembershipFetchManyQueryResponse {
  groupMemberships: GroupMembershipFragment[];
}