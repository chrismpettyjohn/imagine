import React, { useContext } from 'react';
import { themeContext } from '@imagine-cms/web';
import { ButtonPrimary } from '../button/Button.remix';

export function ToggleThemeButton() {
  const { theme, setTheme } = useContext(themeContext);

  const onToggleTheme = () => {
    setTheme({ theme: theme === 'dark' ? 'light' : 'dark' })
  }

  return (
    <ButtonPrimary type="button" onClick={onToggleTheme}>
      <i className={`fa fa-${theme === 'dark' ? 'adjust' : 'adjust fa-flip'}`} />
    </ButtonPrimary>
  )
}