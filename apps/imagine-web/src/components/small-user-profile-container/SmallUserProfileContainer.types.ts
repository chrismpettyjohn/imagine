import { UserWire } from "@imagine-cms/types";
import { HTMLProps, ReactNode } from "react";

export interface SmallUserProfileContainerProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  user: UserWire;
  showOnlineStatus?: boolean;
  showMotto?: boolean;
  showRank?: boolean;
}