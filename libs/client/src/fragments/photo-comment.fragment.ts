import gql from 'graphql-tag';

export const PHOTO_COMMENT_FRAGMENT: any = gql`
  fragment PhotoCommentFragment on PhotoCommentModel {
    id
    photoID
    userID
    comment
    createdAt
    updatedAt
  }
`
export interface PhotoCommentFragment {
  id: number;
  photoID: number;
  userID: number;
  comment: string;
  createdAt: number;
  updatedAt: number;
}