import {UserWire} from '../user/User';
import {RoomWire} from '../room/Room';

export interface ChatlogWire {
  id?: number;
  userID?: number;
  user?: UserWire;
  roomID?: number;
  room?: RoomWire;
  message?: string;
  createdAt?: string;
}
