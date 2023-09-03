import gql from 'graphql-tag';
import { PhotoCommentFilterOneInput } from '../input/photo-comment.input';
import { PHOTO_COMMENT_FRAGMENT, PhotoCommentFragment } from '../fragments/photo-comment.fragment';

export const PHOTO_COMMENT_FETCH_ONE_QUERY: any = gql`
  ${PHOTO_COMMENT_FRAGMENT}
  query($filter: PhotoCommentFilterOneInput!) {
    photoComment(filter: $filter) {
      ...PhotoCommentFragment
    }
  }
`

export interface PhotoCommentFetchOneResponse {
  photoComment: PhotoCommentFragment;
}

export interface PhotoCommentFetchOneVariables {
  filter: PhotoCommentFilterOneInput;
}