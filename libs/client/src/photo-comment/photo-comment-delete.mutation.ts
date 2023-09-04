import gql from 'graphql-tag';
import { PhotoCommentDeleteInput } from './photo-comment.input';

export const PHOTO_COMMENT_DELETE_MUTATION: any = gql`
  mutation($input: PhotoCommentDeleteInput) {
    photoCommentDelete(input: $input)
  }
`

export interface PhotoCommentDeleteResponse {
  data: boolean;
}

export interface PhotoCommentDeleteVariables {
  input: PhotoCommentDeleteInput;
}