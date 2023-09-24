import React from 'react';
import { Router } from './screens/Router';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from './theme/ThemeProvider';
import { ImagineContextProviders } from '@imagine-cms/web';
import { SiteSidebar } from './components/site-sidebar/SiteSidebar';
import { LoadingMessage } from './components/loading-message/LoadingMessage';
import { PageContainerElement, SiteContainerElement } from './AdminWeb.styled';
import { ChangeLanguageButton } from './components/change-language-button/ChangeLanguageButton';

export function ImagineWeb() {

  return (
    <ThemeProvider>
      <ImagineContextProviders loadingScreen={<LoadingMessage />}>
        <SiteContainerElement>
          <ToastContainer />
          <SiteSidebar />
          <PageContainerElement>
            <ChangeLanguageButton />
            <Router />
          </PageContainerElement>
        </SiteContainerElement>
      </ImagineContextProviders>
    </ThemeProvider>
  )
}
