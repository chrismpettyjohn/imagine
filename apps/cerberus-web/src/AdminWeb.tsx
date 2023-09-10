import React from 'react';
import { Router } from './screens/Router';
import { ToastContainer } from 'react-toastify';
import { ImagineContextProviders } from '@imagine-cms/web';
import { SiteSidebar } from './components/site-sidebar/SiteSidebar';
import { ThemeProvider } from './theme/ThemeProvider';
import { PageContainerElement, SiteContainerElement } from './AdminWeb.styled';

export function ImagineWeb() {

  return (
    <ThemeProvider>
      <ImagineContextProviders>
        <SiteContainerElement>
          <ToastContainer />
          <SiteSidebar />
          <PageContainerElement>
            <Router />
          </PageContainerElement>
        </SiteContainerElement>
      </ImagineContextProviders>
    </ThemeProvider>
  )
}
