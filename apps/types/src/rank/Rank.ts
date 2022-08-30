import {UserWire} from '../user/User';

export interface RankWire {
  id: number;
  name?: string;
  description?: string;
  badgeCode?: string;
  users?: UserWire[];
}
