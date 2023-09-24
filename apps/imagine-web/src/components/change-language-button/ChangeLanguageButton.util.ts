export const FIVE_SECONDS_IN_MS = 5000;

const FIVE_DAYS_IN_MS = 7 * 24 * 60 * 60 * 1000;

export const GOOGLE_TRANSLATE_COOKIE = 'googtrans';

export const GOOGLE_TRANSLATE_ELEMENT = 'google_translate_element';

export const getCookieValue = (name: string) => (
  document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
)

export const setCookie = (name: string, val: string) => {
  const date = new Date();
  const value = val;
  date.setTime(date.getTime() + FIVE_DAYS_IN_MS);
  document.cookie = name + "=" + value + "; expires=" + date.toUTCString() + "; path=/";
}