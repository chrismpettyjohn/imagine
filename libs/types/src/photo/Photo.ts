import {UserWire} from '../user/User';
import {RoomWire} from '../room/Room';

export interface PhotoWire {
  id?: number;
  userID?: number;
  user?: UserWire;
  roomID?: number;
  room?: RoomWire;
  photoURL?: string;
  createdAt?: number;
}
