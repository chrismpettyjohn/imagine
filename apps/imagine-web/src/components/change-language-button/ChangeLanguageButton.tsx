import './ChangeLanguageButton.css';
import React, { useContext, useEffect, useState } from 'react';
import { useSessionUpdateLanguage } from '@imagine-cms/client';
import { configContext, sessionContext } from '@imagine-cms/web';
import { FIVE_SECONDS_IN_MS, GOOGLE_TRANSLATE_COOKIE, GOOGLE_TRANSLATE_ELEMENT, getCookieValue, setCookie } from './ChangeLanguageButton.util';

export function ChangeLanguageButton() {
  const { config } = useContext(configContext);
  const { session, setSession } = useContext(sessionContext);
  const allowedLanguages = config?.allowedLanguages ?? ['en'];
  console.log(allowedLanguages)
  const userLanguage = session?.language ?? config?.defaultLanguage ?? 'en';
  const [syncInterval, setSyncInterval] = useState<any>();
  const sessionChangeLanguage = useSessionUpdateLanguage();

  const syncGoogleAndProfileLanguage = async () => {
    const currentTranslation = getCookieValue(GOOGLE_TRANSLATE_COOKIE);
    const currentLang = currentTranslation.split('/')?.[2]
    if (!currentLang) {
      return;
    }
    const langIsTheSame = userLanguage === currentLang;
    if (langIsTheSame) {
      return;
    }
    await sessionChangeLanguage.execute({ language: currentLang });
    setSession({ language: currentLang });
  }

  useEffect(() => {
    if (userLanguage) {
      setCookie(GOOGLE_TRANSLATE_COOKIE, userLanguage);
    }
    // @ts-ignore - google is a global dep imported in the index.html
    new google.translate.TranslateElement({ layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL, pageLanguage: 'en', includedLanguages: allowedLanguages.toString(',') }, GOOGLE_TRANSLATE_ELEMENT);
    const newInterval = setInterval(syncGoogleAndProfileLanguage, FIVE_SECONDS_IN_MS);
    setSyncInterval(newInterval);
    return (() => {
      clearInterval(syncInterval)
    })
  }, []);

  return (
    <div id={GOOGLE_TRANSLATE_ELEMENT} />

  )
}