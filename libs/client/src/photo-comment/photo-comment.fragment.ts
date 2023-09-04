import gql from 'graphql-tag';
import { USER_FRAGMENT, UserFragment } from '../user/user.fragment';

export const PHOTO_COMMENT_FRAGMENT: any = gql`
  ${USER_FRAGMENT}
  fragment PhotoCommentFragment on PhotoCommentModel {
    id
    photoID
    userID
    user {
      ...UserFragment
    }
    comment
    createdAt
    updatedAt
  }
`
export interface PhotoCommentFragment {
  id: number;
  photoID: number;
  userID: number;
  user: UserFragment;
  comment: string;
  createdAt: number;
  updatedAt: number;
}