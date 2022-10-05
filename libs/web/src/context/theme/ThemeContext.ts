import {createContext} from 'react';
import {defaultThemeContextInterface, ThemeContext} from './Theme.types';

export const themeContext = createContext<ThemeContext>(
  defaultThemeContextInterface
);
