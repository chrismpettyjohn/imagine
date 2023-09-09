import gql from 'graphql-tag';
import { USER_FRAGMENT, UserFragment } from '../user/user.fragment';

export const ARTICLE_FRAGMENT: any = gql`
  ${USER_FRAGMENT}
  fragment ArticleFragment on ArticleModel {
    id
    name
    description
    content
    imageURL
    userID
    user {
      ...UserFragment
    }
  }
`

export interface ArticleFragment {
  id: number;
  name: string;
  description: string;
  content: string;
  imageURL: string;
  userID: number;
  user: UserFragment;
}