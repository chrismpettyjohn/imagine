import { HTMLProps, ReactNode } from "react";

export type GridSize = 'normal' | 'wide';

export interface GridProps extends Omit<HTMLProps<HTMLDivElement>, 'size'> {
  children: ReactNode;
  size?: GridSize;
}