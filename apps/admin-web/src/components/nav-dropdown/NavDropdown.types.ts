import {ReactNode} from 'react';

export interface NavDropdownProps {
  icon: string;
  label: ReactNode;
  links: Array<{label: ReactNode, path: string}>;
}
