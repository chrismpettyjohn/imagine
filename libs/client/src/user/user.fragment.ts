import { gql } from 'graphql-tag';

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
  ipLast?: string;
  ipRegistered?: string;
  machineAddress?: string;
}

export const USER_FRAGMENT: any = gql`
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
    ipLast
    ipRegistered
    machineAddress
  }`
