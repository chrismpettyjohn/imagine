import React from 'react';
import { Router } from './screens/Router';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from './theme/ThemeProvider';
import { SiteFooter } from './components/site-footer/SiteFooter';
import { SiteHeader } from './components/site-header/SiteHeader';
import { GameClient, ImagineContextProviders } from '@imagine-cms/web';
import { SiteContainerElement } from './components/site-container/SiteContainer.styled';

export function ImagineWeb() {
  return (
    <ThemeProvider>
      <ImagineContextProviders>
        <GameClient />
        <ToastContainer />
        <SiteContainerElement>
          <SiteHeader />
          <Router />
        </SiteContainerElement>
        <SiteFooter />
      </ImagineContextProviders>
    </ThemeProvider>
  )
}
