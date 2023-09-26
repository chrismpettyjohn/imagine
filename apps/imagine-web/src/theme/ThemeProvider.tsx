import React, { useContext, useMemo } from 'react';
import { darkTheme } from './DarkTheme.styled';
import { ThemeProviderProps } from './ThemeProvider.types';
import { ThemeProvider as BaseThemeProvider } from 'styled-components';
import { themeContext } from '@imagine-cms/web';
import { lightTheme } from './LightTheme.styled';

export function ThemeProvider({ children }: ThemeProviderProps) {
  const { theme } = useContext(themeContext);
  const currentTheme = useMemo(() => {
    if (theme === 'light') {
      return lightTheme;
    }

    return darkTheme;
  }, [theme]);
  return (
    <BaseThemeProvider theme={currentTheme}>
      {children}
    </BaseThemeProvider>
  )
}