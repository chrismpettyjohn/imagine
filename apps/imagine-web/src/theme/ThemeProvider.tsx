import React from 'react';
import { lightTheme } from './LightTheme.styled';
import { ThemeProviderProps } from 'react-bootstrap';
import { ThemeProvider as BaseThemeProvider } from 'styled-components';

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <BaseThemeProvider theme={lightTheme}>
      {children}
    </BaseThemeProvider>
  )
}