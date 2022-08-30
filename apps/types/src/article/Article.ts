import {UserWire} from '../user/User';

export interface ArticleWire {
  id?: number;
  name?: string;
  description?: string;
  content?: string;
  imageURL?: string;
  userID?: number;
  user?: UserWire;
  createdAt?: string;
  updatedAt?: string;
}
