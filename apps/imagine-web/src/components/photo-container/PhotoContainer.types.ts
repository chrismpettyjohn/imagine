import { PhotoFragment } from "@imagine-cms/client";
import { HTMLProps } from "react";

export interface PhotoContainerProps extends HTMLProps<HTMLImageElement> {
  story: PhotoFragment;
}