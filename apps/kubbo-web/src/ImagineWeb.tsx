import React from 'react';
import { Router } from './screens/Router';
import { ToastContainer } from 'react-toastify';
import { SiteFooter } from './components/site-footer/SiteFooter';
import { SiteHeader } from './components/site-header/SiteHeader';
import { GameClient, ImagineContextProviders } from '@imagine-cms/web';

export function ImagineWeb() {
  return (
    <ImagineContextProviders>
      <GameClient />
      <div style={{ minHeight: 'calc(100% - 200px)' }}>
        <ToastContainer />
        <SiteHeader />
        <main className="container-fluid no-padding-container">
          <Router />
        </main>
      </div>
      <SiteFooter />
    </ImagineContextProviders>
  )
}
