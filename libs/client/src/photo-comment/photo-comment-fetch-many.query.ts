import gql from 'graphql-tag';
import { PhotoCommentFilterManyInput } from './photo-comment.input';
import { PHOTO_COMMENT_FRAGMENT, PhotoCommentFragment } from "./photo-comment.fragment";

export const PHOTO_COMMENT_FETCH_MANY_QUERY: any = gql`
  ${PHOTO_COMMENT_FRAGMENT}
  query($filter: PhotoCommentFilterManyInput!) {
    photoComments(filter: $filter) {
      ...PhotoCommentFragment
    }
  }
`
export interface PhotoCommentFetchManyQueryResponse {
  photoComments: PhotoCommentFragment[];
}

export interface PhotoCommentFetchManyQueryVariables {
  filter: PhotoCommentFilterManyInput;
}