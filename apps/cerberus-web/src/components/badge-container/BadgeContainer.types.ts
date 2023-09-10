import { BadgeWire } from "@imagine-cms/types";
import { HTMLProps } from "react";

export interface BadgeContainerProps extends HTMLProps<HTMLDivElement> {
  badge: BadgeWire;
}