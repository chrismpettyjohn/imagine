import { HTMLProps } from "react";
import { BadgeWire } from "@imagine-cms/types";

export interface BadgeProps extends HTMLProps<HTMLImageElement> {
  badge: BadgeWire;
}