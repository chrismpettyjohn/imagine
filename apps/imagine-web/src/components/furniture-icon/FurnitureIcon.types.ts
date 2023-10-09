import { HTMLProps } from "react";
import { FurnitureFragment } from "@imagine-cms/client";

export interface FurnitureIconProps extends HTMLProps<HTMLImageElement> {
  furniture?: FurnitureFragment;
}