import { HTMLProps } from "react";
import { UserFragment } from "@imagine-cms/client";

export interface SmallUserContainerProps extends HTMLProps<HTMLButtonElement> {
  user: UserFragment;
}