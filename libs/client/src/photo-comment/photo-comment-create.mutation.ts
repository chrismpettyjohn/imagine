import gql from 'graphql-tag';
import { PhotoCommentCreateInput } from './photo-comment.input';
import { PHOTO_COMMENT_FRAGMENT, PhotoCommentFragment } from './photo-comment.fragment';

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