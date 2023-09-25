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
  email?: string;
  rankID: number;
  credits: number;
  vipPoints: number;
  activityPoints: number;
  look: string;
  gender: UserGender;
  motto: string;
  accountCreatedAt: number;
  onlineStatus: UserOnlineStatus;
  homeRoomID: number;
  discordID?: string;
  facebookID?: string;
  googleID?: string;
  language?: string;
  hasBetaCode?: boolean;
  rank?: RankWire;
  sessions?: SessionWire[];
  articles?: ArticleWire[];
}
