import gql from 'graphql-tag';
import { GroupFilterOneInput } from './group.input';
import { GROUP_FRAGMENT, GroupFragment } from './group.fragment';

export const GROUP_FETCH_ONE_QUERY: any = gql`
  ${GROUP_FRAGMENT}
  query($filter: GroupFilterOneInput!) {
    group(filter: $filter) {
      ...GroupFragment
    }
  }
`

export interface GroupFetchOneQueryVariables {
  filter: GroupFilterOneInput;
}

export interface GroupFetchOneQueryResponse {
  group: GroupFragment;
}