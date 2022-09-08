import React from 'react';
import {Router} from './screens/Router';
import {ToastContainer} from 'react-toastify';
import { ApolloProvider } from "@apollo/react-hooks";
import {SiteHeader} from './components/site-header/SiteHeader';
import {SiteNavigation} from './components/site-navigation/SiteNavigation';
import {ConfigContextProvider, SessionContextProvider, graphqlClient} from '@imagine-cms/web';

export function ImagineWeb() {
  return (
    <ApolloProvider client={graphqlClient as any}>
      <ConfigContextProvider>
        <SessionContextProvider>
          <ToastContainer />
          <SiteNavigation />
          <SiteHeader />
          <main className="container content-container">
            <Router />
          </main>
        </SessionContextProvider>
      </ConfigContextProvider>
    </ApolloProvider>
  )
}
