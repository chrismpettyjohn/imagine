import { gql } from 'graphql-tag';
import { RANK_FRAGMENT, RankFragment } from '../rank/rank.fragment';

export interface UserFragment {
  id: number;
  username: string;
  rankID: number;
  credits: number;
  vipPoints: number;
  activityPoints: number;
  look: string;
  gender: string;
  motto: string;
  accountCreatedAt: number;
  onlineStatus: 0 | 1;
  homeRoomID: number;
  discordID?: string;
  facebookID?: string;
  googleID?: string;
  language?: string;
  ipLast?: string;
  ipRegistered?: string;
  machineAddress?: string;
  rank: RankFragment;
}

export const USER_FRAGMENT: any = gql`
  ${RANK_FRAGMENT}
  fragment UserFragment on UserModel {
    id
    username
    rankID
    credits
    vipPoints
    activityPoints
    look
    gender
    motto
    accountCreatedAt
    onlineStatus
    homeRoomID
    discordID
    facebookID
    googleID
    language
    ipLast
    ipRegistered
    machineAddress
    rank {
      ...RankFragment
    }
  }`
