import {ReactNode} from 'react';

export interface NavDropdownProps {
  label: ReactNode;
  links: Array<{label: ReactNode, href: string}>
}
