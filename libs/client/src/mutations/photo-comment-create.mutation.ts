import gql from 'graphql-tag';
import { PhotoCommentCreateInput } from '../input/photo-comment.input';
import { PHOTO_COMMENT_FRAGMENT, PhotoCommentFragment } from '../fragments/photo-comment.fragment';

export const PHOTO_COMMENT_CREATE_MUTATION: any = gql`
  ${PHOTO_COMMENT_FRAGMENT}
  mutation($input: PhotoCommentCreateInput!) {
    photoCommentCreate(input: $input) {
      ...PhotoCommentFragment
    }
  }
`

export interface PhotoCommentCreateResponse {
  photoComment: PhotoCommentFragment;
}

export interface PhotoCommentCreateVariables {
  input: PhotoCommentCreateInput;
}