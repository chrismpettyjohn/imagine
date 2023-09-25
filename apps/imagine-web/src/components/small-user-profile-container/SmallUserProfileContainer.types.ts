import { UserWire } from "@imagine-cms/types";
import { ReactNode } from "react";

export interface SmallUserProfileContainerProps {
  children?: ReactNode;
  user: UserWire;
  showOnlineStatus?: boolean;
}