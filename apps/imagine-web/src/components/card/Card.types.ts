import { HTMLProps, ReactNode } from "react";

export interface CardProps extends HTMLProps<HTMLDivElement> {
  header?: ReactNode;
  children: ReactNode;
}