import React, { useState } from 'react';
import { themeContext } from './ThemeContext';
import { defaultThemeContextInterface, ThemeContext, ThemeContextProviderProps } from './Theme.types';

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [state, setState] = useState<ThemeContext>(
    defaultThemeContextInterface
  );

  function setStore(changes: Partial<ThemeContext>): void {
    setState(_ => ({
      ..._,
      ...changes,
    }));
  }

  return (
    <themeContext.Provider value={{ ...state, setTheme: setStore }}>
      {children}
    </themeContext.Provider>
  );
}
