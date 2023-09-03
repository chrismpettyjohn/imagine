import { UserFragment } from "@imagine-cms/client";

export interface CommentContainerProps {
  id: number;
  user: UserFragment;
  comment: string;
}