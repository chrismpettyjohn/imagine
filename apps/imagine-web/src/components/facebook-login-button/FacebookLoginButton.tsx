import React from 'react';
import { getFacebookLoginRedirect } from '../../hooks/facebook-login-redirect.hook';
import { ButtonPrimary } from '../button/Button.remix';

export function FacebookLoginButton() {
  const facebookLoginRedirectUrl = getFacebookLoginRedirect();
  return (
    <a href={`${facebookLoginRedirectUrl}`}>
      <ButtonPrimary style={{ width: '100%' }}>
        <i className="fab fa-facebook" />&nbsp;
        Facebook
      </ButtonPrimary>
    </a>
  )
}