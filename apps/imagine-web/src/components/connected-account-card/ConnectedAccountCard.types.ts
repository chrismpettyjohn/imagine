import { HTMLProps, ReactNode } from "react";

export interface ConnectedAccountCardProps extends HTMLProps<HTMLDivElement> {
  icon: ReactNode;
  connected: boolean;
  onToggle(): void | Promise<void>;
}