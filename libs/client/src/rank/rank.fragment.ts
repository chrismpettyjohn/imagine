import { gql } from 'graphql-tag';
import { USER_FRAGMENT, UserFragment } from '../user/user.fragment';

export interface RankFragment {
  id: number;
  name: string;
  description: string;
  badgeCode: string;
  showStaff: boolean;
  users: UserFragment[];
}

export const RANK_FRAGMENT: any = gql`
  ${USER_FRAGMENT}
  fragment RankFragment on RankModel {
    id
    name
    description
    badgeCode
    showStaff
    users {
      ...UserFragment
    }
  }`