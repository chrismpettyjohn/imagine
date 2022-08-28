import {Request} from 'express';
import {UserEntity} from '../user/user.entity';

export interface RequestWithSession extends Request {
  user: UserEntity;
  sessionID: number;
}

export interface SessionContents {
  userID: number;
  sessionID: number;
}

export interface RawRequest extends Request {
  user?: UserEntity;
  sessionID?: number;
}
