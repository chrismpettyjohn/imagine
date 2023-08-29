import {UserWire} from '../user/User';

export interface ArticleCommentWire {
  id?: number;
  articleID?: number;
  userID?: number;
  user?: UserWire;
  comment?: string;
  createdAt?: string;
  updatedAt?: string;
}
