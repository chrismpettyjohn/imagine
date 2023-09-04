import React, { useMemo } from 'react';
import QueryString from 'query-string';
import { FacebookLoginButtonElement } from './FacebookLoginButton.styled';
import { FACEBOOK_APP_ID, FACEBOOK_REDIRECT_URL } from '@imagine-cms/web';

const FACEBOOK_OAUTH_URL = 'https://www.facebook.com/v17.0/dialog/oauth';

export function FacebookLoginButton() {
  const facebookLoginRedirectUrl = useMemo(() => {
    const params = QueryString.stringify({
      client_id: FACEBOOK_APP_ID,
      redirect_uri: FACEBOOK_REDIRECT_URL,
      scope: ['email'].join(','),
      response_type: 'token',
    });
    return `${FACEBOOK_OAUTH_URL}?${params}`;
  }, []);
  return (
    <a href={`${facebookLoginRedirectUrl}`}>
      <FacebookLoginButtonElement>
        Facebook
      </FacebookLoginButtonElement>
    </a>
  )
}