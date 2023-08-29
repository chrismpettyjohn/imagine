import {ReactNode} from 'react';

export interface ThemeContext {
  showClient: boolean;
  showFooter: boolean;
  showModalOverlay: boolean;
  applicationMode: boolean;
  setTheme: (changes: Partial<ThemeContext>) => void;
}

export const defaultThemeContextInterface: ThemeContext = {
  showClient: false,
  showFooter: true,
  showModalOverlay: true,
  applicationMode: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setTheme: (changes: Partial<ThemeContext>) => {},
};

export interface ThemeContextProviderProps {
  children: ReactNode;
}
