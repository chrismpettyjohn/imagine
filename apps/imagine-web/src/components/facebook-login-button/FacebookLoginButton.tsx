import React from 'react';
import { getFacebookLoginRedirect } from '../../hooks/facebook-login-redirect.hook';
import { ButtonBrand } from '../button/Button.remix';

export function FacebookLoginButton() {
  const facebookLoginRedirectUrl = getFacebookLoginRedirect();
  return (
    <a href={`${facebookLoginRedirectUrl}`}>
      <ButtonBrand style={{ width: '100%' }}>
        <i className="fab fa-facebook" />&nbsp;
        Facebook
      </ButtonBrand>
    </a>
  )
}