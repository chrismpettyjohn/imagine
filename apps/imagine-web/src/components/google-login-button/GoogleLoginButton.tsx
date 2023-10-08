import React from 'react';
import { getGoogleLoginRedirect } from '../../hooks/google-login-redirect.hook';
import { ButtonBrand } from '../button/Button.remix';


export function GoogleLoginButton() {
  const googleLoginRedirectUrl = getGoogleLoginRedirect();
  return (
    <a href={googleLoginRedirectUrl}>
      <ButtonBrand style={{ width: '100%' }}>
        <i className="fab fa-google" />&nbsp;
        Google
      </ButtonBrand>
    </a>
  )
}
