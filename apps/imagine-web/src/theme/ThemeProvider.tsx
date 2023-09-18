import React from 'react';
import { lightTheme } from './LightTheme.styled';
import { ThemeProviderProps } from './ThemeProvider.types';
import { ThemeProvider as BaseThemeProvider } from 'styled-components';

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <BaseThemeProvider theme={lightTheme}>
      {children}
    </BaseThemeProvider>
  )
}