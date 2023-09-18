import { HTMLProps } from "react";
import { BadgeWire } from "@imagine-cms/types";

export interface BadgeProps extends HTMLProps<HTMLImageElement> {
  badge: BadgeWire;
  overrideBadgeURL?: string;
  overrideBadgeEXT?: string;
}