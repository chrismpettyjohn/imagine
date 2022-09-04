import React from 'react';
import {Router} from './screens/Router';
import {ToastContainer} from 'react-toastify';
import { ApolloProvider } from "@apollo/react-hooks";
import {SiteFooter} from './components/site-footer/SiteFooter';
import {SiteSidebar} from './components/site-sidebar/SiteSidebar';
import {SiteNavigation} from './components/site-navigation/SiteNavigation';
import {ConfigContextProvider, SessionContextProvider, graphqlClient} from '@imagine-cms/web';

export function ImagineWeb() {
  return (
    <ApolloProvider client={graphqlClient as any}>
      <ConfigContextProvider>
        <SessionContextProvider>
          <ToastContainer />
          <SiteSidebar />
          <div className="container-fluid page-body-wrapper" style={{position: 'relative'}}>
            <SiteNavigation />
            <div className="main-panel">
              <div className="content-wrapper">
                <Router />
              </div>
              <SiteFooter />
            </div>
          </div>
        </SessionContextProvider>
      </ConfigContextProvider>
    </ApolloProvider>
  )
}
