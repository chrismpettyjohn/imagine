import {SITE_WEB_URL} from '../imagine.constant';

export const forgotPasswordRequestSentTemplate = (
  requestCode: string
): string => {
  const forgotPasswordRequestLink = `${SITE_WEB_URL}/forgot-password/redeem/${requestCode}`;
  return `
    <div>
      <h1>Password Request</h1>
      <p>Did you request a password change?  if u did plz click the thing below otherwise fuck off u prob bout to get hacked.</p>
      <a href="${forgotPasswordRequestLink}">${forgotPasswordRequestLink}</a>
    </div>
  `;
};
