import gql from 'graphql-tag';
import { USER_FRAGMENT, UserFragment } from '../user/user.fragment';

export const ARTICLE_COMMENT_FRAGMENT: any = gql`
  ${USER_FRAGMENT}
  fragment ArticleCommentFragment on ArticleCommentModel {
    id
    articleID
    userID
    user {
      ...UserFragment
    }
    comment
    createdAt
    updatedAt
  }
`
export interface ArticleCommentFragment {
  id: number;
  articleID: number;
  userID: number;
  user: UserFragment;
  comment: string;
  createdAt: number;
  updatedAt: number;
}