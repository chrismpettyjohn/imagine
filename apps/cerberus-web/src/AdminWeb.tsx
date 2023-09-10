import React from 'react';
import { Router } from './screens/Router';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from './theme/ThemeProvider';
import { ImagineContextProviders } from '@imagine-cms/web';
import { SiteSidebar } from './blocks/site-sidebar/SiteSidebar';
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
