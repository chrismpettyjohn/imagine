import gql from 'graphql-tag';
import { USER_FRAGMENT, UserFragment } from '../user/user.fragment';

export const BETA_CODE_FRAGMENT: any = gql`
  ${USER_FRAGMENT}
  fragment BetaCodeFragment on BetaCodeModel {
    id
    betaCode
    userID
    user {
      ...UserFragment
    }
  }
`

export interface BetaCodeFragment {
  id: number;
  betaCode: string;
  userID?: number;
  user?: UserFragment;
}