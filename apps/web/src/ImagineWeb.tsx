import React from 'react';
import {Router} from './screens/Router';
import { ApolloProvider } from "@apollo/react-hooks";
import {graphqlClient} from './graphql/graphql.client';
import {SiteFooter} from './components/site-footer/SiteFooter';
import {SiteHeader} from './components/site-header/SiteHeader';
import {SiteNavigation} from './components/site-navigation/SiteNavigation';

export function ImagineWeb() {
  return (
    <ApolloProvider client={graphqlClient as any}>
    <SiteHeader />
      <SiteNavigation />
      <Router />
      <SiteFooter />
    </ApolloProvider>
  )
}
