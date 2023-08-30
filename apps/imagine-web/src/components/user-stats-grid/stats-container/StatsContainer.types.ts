import { HTMLAttributes, ReactNode } from "react";

export interface StatsContainerProps extends HTMLAttributes<HTMLDivElement> {
  imageURL: string;
  label: string;
  value: number;
}