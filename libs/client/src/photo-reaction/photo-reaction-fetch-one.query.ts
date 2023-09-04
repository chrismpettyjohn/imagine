import gql from 'graphql-tag';
import { PhotoReactionFilterOneInput } from './photo-reaction.input';
import { PHOTO_REACTION_FRAGMENT, PhotoReactionFragment } from './photo-reaction.fragment';

export const PHOTO_REACTION_FETCH_ONE_QUERY: any = gql`
  ${PHOTO_REACTION_FRAGMENT}
  query($filter: PhotoReactionFilterOneInput) {
    photoReaction(filter: $filter) {
      ...PhotoReactionFragment
    }
  }
`

export interface PhotoReactionFetchOneResponse {
  photoReaction: PhotoReactionFragment;
}

export interface PhotoReactionFetchOneVariables {
  filter: PhotoReactionFilterOneInput;
}