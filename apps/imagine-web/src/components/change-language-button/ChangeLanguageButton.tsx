import './ChangeLanguageButton.css';
import React, { useEffect } from 'react';

export function ChangeLanguageButton() {

  useEffect(() => {
    // @ts-ignore
    new google.translate.TranslateElement({ layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL, pageLanguage: 'en' }, 'google_translate_element');
  }, []);

  return (
    <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
      <div id="google_translate_element" />
    </div>
  )
}