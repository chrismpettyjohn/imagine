import React from 'react';
import { GoogleLoginButtonElement } from './GoogleLoginButton.styled';
import { getGoogleLoginRedirect } from '../../hooks/google-login-redirect.hook';


export function GoogleLoginButton() {
  const googleLoginRedirectUrl = getGoogleLoginRedirect();
  return (
    <a href={googleLoginRedirectUrl}>
      <GoogleLoginButtonElement>
        Google
      </GoogleLoginButtonElement>
    </a>
  )
}
