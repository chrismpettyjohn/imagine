import React from 'react';
import { Router } from './screens/Router';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from './theme/ThemeProvider';
import { ImagineContextProviders } from '@imagine-cms/web';
import { GameClient } from './components/game-client/GameClient';
import { SiteFooter } from './components/site-footer/SiteFooter';
import { SiteHeader } from './components/site-header/SiteHeader';
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
