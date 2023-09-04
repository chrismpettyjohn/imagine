import gql from 'graphql-tag';

export const PHOTO_REACTION_FRAGMENT: any = gql`
  fragment PhotoReactionFragment on PhotoReactionModel {
    id
    photoID
    userID
    reaction
    createdAt
    updatedAt
  }
`

export enum PhotoReactionType {
  Like = 1,
  Dislike = 2,
}

export interface PhotoReactionFragment {
  id: number;
  photoID: number;
  userID: number;
  reaction: PhotoReactionType;
  createdAt: number;
  updatedAt: number;
}