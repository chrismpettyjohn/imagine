import { useMemo } from 'react';
import QueryString from 'query-string';
import { GOOGLE_APP_ID, GOOGLE_REDIRECT_URL } from '@imagine-cms/web';

const GOOGLE_OAUTH_URL = 'https://accounts.google.com/o/oauth2/v2/auth';

export function getGoogleLoginRedirect(): string {
  const googleLoginRedirectUrl = useMemo(() => {
    const params = QueryString.stringify({
      scope: 'email',
      client_id: GOOGLE_APP_ID,
      response_type: 'token',
      redirect_uri: GOOGLE_REDIRECT_URL,
    });
    return `${GOOGLE_OAUTH_URL}?${params}`;
  }, []);
  return googleLoginRedirectUrl;
}