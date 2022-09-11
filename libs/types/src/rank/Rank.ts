import {UserWire} from '../user/User';
import {RankScopesWire} from './RankScopes';

export interface RankWire {
  id?: number;
  name?: string;
  description?: string;
  badgeCode?: string;
  users?: UserWire[];
  scopes?: RankScopesWire;
}
