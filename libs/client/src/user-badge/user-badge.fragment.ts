import gql from 'graphql-tag';

export const USER_BADGE_FRAGMENT: any = gql`
  fragment UserBadgeFragment on UserBadgeModel {
    id
    userID
    slotID
    badgeCode
  }
`

export interface UserBadgeFragment {
  id: number;
  userID: number;
  slotID: number;
  badgeCode: string;
}