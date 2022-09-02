import React from 'react';
import {Router} from './screens/Router';
import {ToastContainer} from 'react-toastify';
import { ApolloProvider } from "@apollo/react-hooks";
import {SiteFooter} from './components/site-footer/SiteFooter';
import {SiteNavigation} from './components/site-navigation/SiteNavigation';
import {ConfigContextProvider, SessionContextProvider, graphqlClient} from '@imagine-cms/web';

export function ImagineWeb() {
  return (
    <ApolloProvider client={graphqlClient as any}>
      <ConfigContextProvider>
        <SessionContextProvider>
          <div style={{minHeight: 'calc(100% - 100px)'}}>
            <ToastContainer />
            <SiteNavigation />
            <Router />
          </div>
          <SiteFooter />
        </SessionContextProvider>
      </ConfigContextProvider>
    </ApolloProvider>
  )
}
