import React from 'react';
import { Router } from './screens/Router';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from './theme/ThemeProvider';
import { SiteFooter } from './components/site-footer/SiteFooter';
import { SiteHeader } from './components/site-header/SiteHeader';
import { GameClient, ImagineContextProviders } from '@imagine-cms/web';
import { PageContainerElement, SiteContainerElement } from './components/site-container/SiteContainer.styled';

export function ImagineWeb() {
  return (
    <ThemeProvider>
      <ImagineContextProviders>
        <SiteContainerElement>
          <GameClient />
          <ToastContainer />
          <PageContainerElement>
            <SiteHeader />
            <Router />
          </PageContainerElement>
          <SiteFooter />
        </SiteContainerElement>
      </ImagineContextProviders>
    </ThemeProvider >
  )
}
