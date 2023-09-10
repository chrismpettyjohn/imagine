import { HTMLProps, ReactNode } from "react";

export type CardElevation = 1 | 2;

export interface CardProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  elevation?: CardElevation;
  header?: ReactNode;
}