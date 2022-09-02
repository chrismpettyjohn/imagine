import {RankWire} from '../rank/Rank';
import {SessionWire} from '../session/Session';
import {ArticleWire} from '../article/Article';

export enum UserGender {
  Male = 'M',
  Female = 'F',
}

export enum UserOnlineStatus {
  Online = '1',
  Offline = '0',
}

export enum UserMuteStatus {
  IsMuted = '1',
  NotMuted = '0',
}

export enum UserAllowingNewFriendsStatus {
  Yes = '1',
  No = '0',
}

export enum UserShowOnlineStatus {
  Hidden = '1',
  Visible = '0',
}

export enum UserShowRoomStatus {
  Hidden = '1',
  Visible = '0',
}

export enum UserVipStatus {
  Yes = '1',
  No = '0',
}

export interface UserWire {
  id: number;
  username?: string;
  password?: string;
  email?: string;
  gameSSO?: string;
  rankID?: number;
  rankVipID?: number;
  credits?: number;
  vipPoints?: number;
  activityPoints?: number;
  look?: string;
  gender?: UserGender;
  motto?: string;
  accountCreatedAt?: number;
  lastOnline?: number;
  onlineStatus?: UserOnlineStatus;
  ipLast?: string;
  ipRegisteredWith?: string;
  homeRoomID?: number;
  muteStatus?: UserMuteStatus;
  allowingNewFriends?: UserAllowingNewFriendsStatus;
  showOnlineStatus?: UserShowOnlineStatus;
  showRoomStatus?: UserShowRoomStatus;
  vipStatus?: UserVipStatus;
  rank?: RankWire;
  rankVip?: RankWire;
  sessions?: SessionWire[];
  articles?: ArticleWire[];
}
