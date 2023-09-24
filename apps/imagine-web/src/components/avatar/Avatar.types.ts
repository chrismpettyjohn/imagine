import { HTMLProps } from "react";

export interface AvatarProps extends Omit<HTMLProps<HTMLImageElement>, 'size'> {
  overrideImgSrc?: string;
  look: string;
  headOnly?: boolean;
  size?: string;
  direction?: number;
  headDirection?: number;
  gesture?: string;
}
