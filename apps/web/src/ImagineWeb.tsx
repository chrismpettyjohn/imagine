import React from 'react';
import {Router} from './screens/Router';
import {SiteFooter} from './components/site-footer/SiteFooter';
import {SiteHeader} from './components/site-header/SiteHeader';
import {SiteNavigation} from './components/site-navigation/SiteNavigation';

export function ImagineWeb() {
  return (
    <>
      <SiteHeader />
      <SiteNavigation />
      <Router />
      <SiteFooter />
      </>
  )
}
