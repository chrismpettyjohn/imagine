import React from 'react';
import {Router} from './screens/Router';
import {ToastContainer} from 'react-toastify';
import {ImagineContextProviders} from '@imagine-cms/web';
import {SiteHeader} from './components/site-header/SiteHeader';
import {SiteNavigation} from './components/site-navigation/SiteNavigation';

export function ImagineWeb() {
  return (
    <ImagineContextProviders>
      <ToastContainer />
      <SiteNavigation />
      <SiteHeader />
      <main className="container content-container">
        <Router />
      </main>
    </ImagineContextProviders>
  )
}
