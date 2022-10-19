import {themeContext} from './ThemeContext';
import React, {useEffect, useState} from 'react';
import {defaultThemeContextInterface, ThemeContext, ThemeContextProviderProps} from './Theme.types';

export function ThemeContextProvider({children}: ThemeContextProviderProps) {
  const [state, setState] = useState<ThemeContext>(
    defaultThemeContextInterface
  );

  useEffect(() => {
    const clientSet = document.body.classList.contains('client-modal');
    if (state.showClient && !clientSet) {
      document.body.classList.add('client-modal');
      return;
    }

    if (clientSet) {
      document.body.classList.remove('client-modal');
    }
  }, [state.showClient]);

  function setStore(changes: Partial<ThemeContext>): void {
    setState(_ => ({
      ..._,
      ...changes,
    }));
  }

  return (
    <themeContext.Provider value={{...state, setTheme: setStore}}>
      {children}
    </themeContext.Provider>
  );
}
