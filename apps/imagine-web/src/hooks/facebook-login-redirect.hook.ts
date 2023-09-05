import { useMemo } from "react";
import QueryString from 'query-string';
import { FACEBOOK_APP_ID, FACEBOOK_REDIRECT_URL } from "@imagine-cms/web";

const FACEBOOK_OAUTH_URL = 'https://www.facebook.com/v17.0/dialog/oauth';


export function getFacebookLoginRedirect(): string {
  const facebookLoginRedirectUrl = useMemo(() => {
    const params = QueryString.stringify({
      client_id: FACEBOOK_APP_ID,
      redirect_uri: FACEBOOK_REDIRECT_URL,
      scope: ['email'].join(','),
      response_type: 'token',
    });
    return `${FACEBOOK_OAUTH_URL}?${params}`;
  }, []);
  return facebookLoginRedirectUrl;
}