import React from 'react';
import {Router} from './screens/Router';
import {ToastContainer} from 'react-toastify';
import { ApolloProvider } from "@apollo/react-hooks";
import {SiteFooter} from './components/site-footer/SiteFooter';
import {SiteHeader} from './components/site-header/SiteHeader';
import {SiteNavigation} from './components/site-navigation/SiteNavigation';
import {ConfigContextProvider, SessionContextProvider, graphqlClient} from '@imagine-cms/web';

export function ImagineWeb() {
  return (
    <ApolloProvider client={graphqlClient as any}>
      <ConfigContextProvider>
        <SessionContextProvider>
          <div style={{minHeight: 'calc(100% - 200px)'}}>
            <ToastContainer />
            <SiteNavigation />
            <SiteHeader />
            <main className="container content-container">
             <Router />
            </main>
          </div>
          <SiteFooter />
        </SessionContextProvider>
      </ConfigContextProvider>
    </ApolloProvider>
  )
}
