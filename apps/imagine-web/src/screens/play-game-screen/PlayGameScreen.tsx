import React, { useContext, useEffect } from 'react';
import { GuestGuard, themeContext } from '@imagine-cms/web';

export function PlayGameScreen() {
  const { setTheme } = useContext(themeContext);

  useEffect(() => {
    setTheme({ showClient: true });
  }, []);

  return (
    <GuestGuard redirect>&nbsp;</GuestGuard>
  );
}
