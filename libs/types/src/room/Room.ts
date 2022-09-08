import {UserWire} from '../user/User';

export interface RoomWire {
  id?: number;
  name?: string;
  description?: string;
  userID?: number;
  user?: UserWire;
  usersNow?: number;
  usersMax?: number;
}
