import gql from 'graphql-tag';

export const GROUP_FRAGMENT: any = gql`
  fragment GroupFragment on GroupModel {
    id
    name
    badge
    description
    userID
  }
`

export interface GroupFragment {
  id: number;
  name: string;
  badge: string;
  description: string;
  userID: number;
}