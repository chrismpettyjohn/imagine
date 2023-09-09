import gql from 'graphql-tag';
import { GROUP_FRAGMENT, GroupFragment } from '../group/group.fragment';

export const GROUP_MEMBERSHIP_FRAGMENT: any = gql`
  ${GROUP_FRAGMENT}
  fragment GroupMembershipFragment on GroupMembershipModel {
    id
    userID
    groupID
    group {
      ...GroupFragment
    }
    createdAt
  }
`

export interface GroupMembershipFragment {
  id: number;
  userID: number;
  groupID: number;
  group: GroupFragment;
  createdAt: number;
}