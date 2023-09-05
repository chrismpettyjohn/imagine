import React from 'react';
import { FacebookLoginButtonElement } from './FacebookLoginButton.styled';
import { getFacebookLoginRedirect } from '../../hooks/facebook-login-redirect.hook';

export function FacebookLoginButton() {
  const facebookLoginRedirectUrl = getFacebookLoginRedirect();
  return (
    <a href={`${facebookLoginRedirectUrl}`}>
      <FacebookLoginButtonElement>
        Facebook
      </FacebookLoginButtonElement>
    </a>
  )
}