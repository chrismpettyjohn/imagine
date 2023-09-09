import gql from 'graphql-tag';
import { GroupFilterManyInput } from './group.input';
import { GROUP_FRAGMENT, GroupFragment } from './group.fragment';

export const GROUP_FETCH_MANY_QUERY: any = gql`
  ${GROUP_FRAGMENT}
  query($filter: GroupFilterManyInput!) {
    groups(filter: $filter) {
      ...GroupFragment
    }
  }
`

export interface GroupFetchManyQueryVariables {
  filter: GroupFilterManyInput;
}
export interface GroupFetchManyQueryResponse {
  groups: GroupFragment[];
}