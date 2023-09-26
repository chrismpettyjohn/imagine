import { HTMLProps, ReactNode } from "react";
import { GridSizes } from "../../theme/ThemeProvider.types";

export interface GridProps extends Omit<HTMLProps<HTMLDivElement>, 'size'> {
  children: ReactNode;
  size?: GridSizes;
}