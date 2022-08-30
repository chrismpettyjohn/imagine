import React from 'react';
import {Router} from './screens/Router';
import {BrowserRouter} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ApolloProvider } from "@apollo/react-hooks";
import {graphqlClient} from './graphql/graphql.client'
import {SiteFooter} from './components/site-footer/SiteFooter';
import {SiteHeader} from './components/site-header/SiteHeader';
import {SiteNavigation} from './components/site-navigation/SiteNavigation';
import {SessionContextProvider} from './context/session/SessionContextProvider';

export function ImagineWeb() {
  return (
    <BrowserRouter>
      <ApolloProvider client={graphqlClient as any}>
        <SessionContextProvider>
          <ToastContainer />
          <SiteHeader />
          <SiteNavigation />
          <Router />
          <SiteFooter />
        </SessionContextProvider>
      </ApolloProvider>
    </BrowserRouter>
  )
}
