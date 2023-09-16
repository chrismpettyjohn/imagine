import React from 'react';
import { getGoogleLoginRedirect } from '../../hooks/google-login-redirect.hook';
import { ButtonPrimary } from '../button/Button.remix';


export function GoogleLoginButton() {
  const googleLoginRedirectUrl = getGoogleLoginRedirect();
  return (
    <a href={googleLoginRedirectUrl}>
      <ButtonPrimary style={{ width: '100%' }}>
        <i className="fab fa-google" />&nbsp;
        Google
      </ButtonPrimary>
    </a>
  )
}
