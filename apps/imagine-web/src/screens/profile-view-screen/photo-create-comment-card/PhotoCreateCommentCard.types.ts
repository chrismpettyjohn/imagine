import { PhotoCommentFragment } from "@imagine-cms/client";

export interface PhotoCreateCommentCardProps {
  photoID: number;
  onCreation(newComment: PhotoCommentFragment): void;
}