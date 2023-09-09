import { gql } from 'graphql-tag';

export interface UserFragment {
  id: number;
  email: string;
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
  ipReg: string;
  ipLast: string;
}

export const USER_FRAGMENT: any = gql`
  fragment UserFragment on UserModel {
    id
    email
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
    ipReg
  }`
