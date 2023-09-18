import { ReactNode } from "react";

export interface AccordionProps {
  defaultIsOpen?: boolean;
  header?: ReactNode;
  children: ReactNode;
}