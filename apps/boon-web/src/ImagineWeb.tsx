import React from 'react';
import {Router} from './screens/Router';
import {ToastContainer} from 'react-toastify';
import { ApolloProvider } from "@apollo/react-hooks";
import {graphqlClient} from './graphql/graphql.client';
import {SiteFooter} from './components/site-footer/SiteFooter';
import {SiteHeader} from './components/site-header/SiteHeader';
import {SiteNavigation} from './components/site-navigation/SiteNavigation';
import {ConfigContextProvider} from './context/config/ConfigContextProvider';
import {SessionContextProvider} from './context/session/SessionContextProvider';

export function ImagineWeb() {
  return (
    <ApolloProvider client={graphqlClient as any}>
      <ConfigContextProvider>
        <SessionContextProvider>
          <div style={{height: '100%'}}>
            <ToastContainer />
            <SiteHeader />
            <SiteNavigation />
            <Router />
          </div>
          <SiteFooter />
        </SessionContextProvider>
      </ConfigContextProvider>
    </ApolloProvider>
  )
}
