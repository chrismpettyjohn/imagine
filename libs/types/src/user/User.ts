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

export interface UserWire {
  id: number;
  username: string;
  email: string;
  gameSSO: string;
  rankID: number;
  credits: number;
  vipPoints: number;
  activityPoints: number;
  look: string;
  gender: UserGender;
  motto: string;
  accountCreatedAt: number;
  onlineStatus: UserOnlineStatus;
  ipLast: string;
  ipRegistered: string;
  homeRoomID: number;
  discordID?: string;
  facebookID?: string;
  googleID?: string;
  language?: string;
  rank?: RankWire;
  sessions?: SessionWire[];
  articles?: ArticleWire[];
}
