import { PhotoReactionType } from "./photo-reaction.fragment";

export interface PhotoReactionCreateInput {
  photoID: number;
  reaction: PhotoReactionType;
}

export interface PhotoReactionUpdateInput {
  reaction: PhotoReactionType;
}

export interface PhotoReactionFilterManyInput {
  ids?: number[];
  photoIDs?: number[];
  userIDS?: number[];
}

export interface PhotoReactionFilterOneInput {
  id: number;
}

export interface PhotoReactionDeleteInput {
  id: number;
}