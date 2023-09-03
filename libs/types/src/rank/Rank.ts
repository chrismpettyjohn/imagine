import {UserWire} from '../user/User';
import {RankScopesWire} from './RankScopes';

export interface RankWire {
  id?: number;
  name?: string;
  description?: string;
  badgeCode?: string;
  showStaff?: boolean;
  users?: UserWire[];
  scopes?: RankScopesWire;
}
