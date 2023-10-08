import { ReactNode } from 'react';

export type SiteTheme = 'light' | 'dark';

export interface ThemeContext {
  theme: SiteTheme;
  showClient: boolean;
  showFooter: boolean;
  showModalOverlay: boolean;
  applicationMode: boolean;
  setTheme: (changes: Partial<ThemeContext>) => void;
}

export const defaultThemeContextInterface: ThemeContext = {
  theme: window.matchMedia("(prefers-color-scheme: dark)") ? 'dark' : 'light',
  showClient: false,
  showFooter: true,
  showModalOverlay: true,
  applicationMode: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setTheme: (changes: Partial<ThemeContext>) => { },
};

export interface ThemeContextProviderProps {
  children: ReactNode;
}
