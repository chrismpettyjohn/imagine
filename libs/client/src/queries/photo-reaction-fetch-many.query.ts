import gql from 'graphql-tag';
import { PhotoReactionFilterManyInput } from '../input/photo-reaction.input';
import { PHOTO_REACTION_FRAGMENT, PhotoReactionFragment } from "../fragments/photo-reaction.fragment";

export const PHOTO_REACTION_FETCH_MANY_QUERY: any = gql`
  ${PHOTO_REACTION_FRAGMENT}
  query($filter: PhotoReactionFilterManyInput) {
    photoReactions(filter: $filter) {
      ...PhotoReactionFragment
    }
  }
`
export interface PhotoReactionFetchManyQueryResponse {
  photoReactions: PhotoReactionFragment[];
}

export interface PhotoReactionFetchManyQueryVariables {
  filter: PhotoReactionFilterManyInput;
}