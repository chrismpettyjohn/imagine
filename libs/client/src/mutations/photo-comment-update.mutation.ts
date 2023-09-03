import gql from 'graphql-tag';
import { PhotoCommentFilterOneInput, PhotoCommentUpdateInput } from '../input/photo-comment.input';
import { PHOTO_COMMENT_FRAGMENT, PhotoCommentFragment } from '../fragments/photo-comment.fragment';

export const PHOTO_COMMENT_UPDATE_MUTATION: any = gql`
  ${PHOTO_COMMENT_FRAGMENT}
  mutation($filter: PhotoCommentFilterOneInput!, $input: PhotoCommentUpdateInput!) {
    photoCommentUpdate(filter: $filter, input: $input) {
      ...PhotoCommentFragment
    }
  }
`

export interface PhotoCommentUpdateResponse {
  photoComment: PhotoCommentFragment;
}

export interface PhotoCommentUpdateVariables {
  filter: PhotoCommentFilterOneInput;
  input: PhotoCommentUpdateInput;
}