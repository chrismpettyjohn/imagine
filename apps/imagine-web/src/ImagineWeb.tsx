import React from 'react';
import { ThemeProvider } from './theme/ThemeProvider';
import { ImagineContextProviders } from '@imagine-cms/web';
import { SiteContainer } from './components/site-container/SiteContainer';
import { LoadingMessage } from './components/loading-message/LoadingMessage';

export function LoadingScreen() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, background: '#5F8A96', width: '100%', height: '100%', textAlign: 'center' }}>
      <div style={{ marginTop: '10%' }}>
        <LoadingMessage />
      </div>
    </div>
  )
}

export function ImagineWeb() {

  return (
    <ThemeProvider>
      <ImagineContextProviders loadingScreen={<LoadingScreen />}>
        <SiteContainer />
      </ImagineContextProviders>
    </ThemeProvider >
  )
}
