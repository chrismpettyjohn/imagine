import React from 'react';
import {Router} from './screens/Router';
import {ToastContainer} from 'react-toastify';
import {ImagineContextProviders} from '@imagine-cms/web';

export function ImagineWeb() {
  return (
    <ImagineContextProviders>
      <ToastContainer />
      <Router />
    </ImagineContextProviders>
  )
}
