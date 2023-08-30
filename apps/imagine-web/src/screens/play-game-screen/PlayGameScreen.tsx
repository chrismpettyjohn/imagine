import {themeContext} from '@imagine-cms/web';
import React, {useContext, useEffect} from 'react';

export function PlayGameScreen() {
  const {setTheme} = useContext(themeContext);

  useEffect(() => {
    setTheme({ showClient: true });
    return () => {
      setTheme({ showClient: false });
    }
  }, []);

  return null;
}
