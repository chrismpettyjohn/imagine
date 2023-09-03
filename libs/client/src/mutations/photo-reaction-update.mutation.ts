import gql from 'graphql-tag';
import { PhotoReactionFilterOneInput, PhotoReactionUpdateInput } from '../input/photo-reaction.input';
import { PHOTO_REACTION_FRAGMENT, PhotoReactionFragment } from '../fragments/photo-reaction.fragment';

export const PHOTO_REACTION_UPDATE_MUTATION: any = gql`
  ${PHOTO_REACTION_FRAGMENT}
  mutation($filter: PhotoReactionFilterOneInput!, $input: PhotoReactionUpdateInput!) {
    photoReactionUpdate(filter: $filter, input: $input) {
      ...PhotoReactionFragment
    }
  }
`

export interface PhotoReactionUpdateResponse {
  photoReaction: PhotoReactionFragment;
}

export interface PhotoReactionUpdateVariables {
  filter: PhotoReactionFilterOneInput;
  input: PhotoReactionUpdateInput;
}