import React from 'react';
import { Router } from './screens/Router';
import { ToastContainer } from 'react-toastify';
import { ImagineContextProviders } from '@imagine-cms/web';
import { SiteFooter } from './components/site-footer/SiteFooter';
import { SiteHeader } from './components/site-header/SiteHeader';
import { SiteSidebar } from './components/site-sidebar/SiteSidebar';

export function ImagineWeb() {
  return (
    <ImagineContextProviders>
      <ToastContainer />
      <SiteSidebar />
      <div className="container-fluid page-body-wrapper" style={{ position: 'relative' }}>
        <SiteHeader />
        <div className="main-panel">
          <div className="content-wrapper">
            <Router />
          </div>
          <SiteFooter />
        </div>
      </div>
    </ImagineContextProviders>
  )
}
