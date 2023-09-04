import gql from 'graphql-tag';
import { PhotoReactionDeleteInput } from './photo-reaction.input';

export const PHOTO_REACTION_DELETE_MUTATION: any = gql`
  mutation($input: PhotoReactionDeleteInput) {
    photoReactionDelete(input: $input)
  }
`

export interface PhotoReactionDeleteResponse {
  data: boolean;
}

export interface PhotoReactionDeleteVariables {
  input: PhotoReactionDeleteInput;
}