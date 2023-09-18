import React from 'react';
import { ThemeProvider } from './theme/ThemeProvider';
import { ImagineContextProviders } from '@imagine-cms/web';
import { SiteContainer } from './components/site-container/SiteContainer';

export function ImagineWeb() {

  return (
    <ThemeProvider>
      <ImagineContextProviders>
        <SiteContainer />
      </ImagineContextProviders>
    </ThemeProvider >
  )
}
