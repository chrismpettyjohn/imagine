import QueryString from 'query-string';
import React, { useMemo } from 'react';
import { GoogleLoginButtonElement } from './GoogleLoginButton.styled';
import { GOOGLE_APP_ID, GOOGLE_REDIRECT_URL } from '@imagine-cms/web';

const GOOGLE_OAUTH_URL = 'https://accounts.google.com/o/oauth2/v2/auth';

export function GoogleLoginButton() {
  const googleLoginRedirectUrl = useMemo(() => {
    const params = QueryString.stringify({
      scope: 'email',
      client_id: GOOGLE_APP_ID,
      response_type: 'token',
      redirect_uri: GOOGLE_REDIRECT_URL,
    });
    return `${GOOGLE_OAUTH_URL}?${params}`;
  }, []);

  return (
    <a href={googleLoginRedirectUrl}>
      <GoogleLoginButtonElement>
        Google
      </GoogleLoginButtonElement>
    </a>
  )
}
