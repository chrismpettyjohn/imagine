import React from 'react';
import { lightTheme } from './LightTheme.styled';
import { ThemeProvider as BaseThemeProvider } from 'styled-components';

export function ThemeProvider({ children }: any) {
  return (
    <BaseThemeProvider theme={lightTheme}>
      {children}
    </BaseThemeProvider>
  )
}