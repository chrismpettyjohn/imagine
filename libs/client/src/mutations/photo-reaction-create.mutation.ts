import gql from 'graphql-tag';
import { PhotoReactionCreateInput } from '../input/photo-reaction.input';
import { PHOTO_REACTION_FRAGMENT, PhotoReactionFragment } from '../fragments/photo-reaction.fragment';

export const PHOTO_REACTION_CREATE_MUTATION: any = gql`
  ${PHOTO_REACTION_FRAGMENT}
  mutation($input: PhotoReactionCreateInput) {
    photoReactionCreate(input: $input) {
      ...PhotoReactionFragment
    }
  }
`

export interface PhotoReactionCreateResponse {
  photoReaction: PhotoReactionFragment;
}

export interface PhotoReactionCreateVariables {
  input: PhotoReactionCreateInput;
}