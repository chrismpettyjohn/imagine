import {UserWire} from '../user/User';
import {RankScopesWire} from './RankScopes';

export interface RankWire {
  id?: number;
  name?: string;
  badgeCode?: string;
  siteShowStaff?: boolean;
  users?: UserWire[];
  scopes?: RankScopesWire;
}
