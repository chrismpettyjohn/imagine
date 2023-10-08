import { HTMLProps } from "react";
import { GroupFragment } from "@imagine-cms/client";

export interface GroupBadgeProps extends HTMLProps<HTMLImageElement> {
  group: GroupFragment;
}