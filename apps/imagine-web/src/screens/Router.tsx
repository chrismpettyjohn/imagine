import React from 'react';
import { Switch, Route } from 'wouter';
import {HomeScreen} from './home-screen/HomeScreen';
import {LoginScreen} from './login-screen/LoginScreen';
import {PageNotFoundScreen} from './page-not-found-screen/PageNotFound';

const SITE_ROUTES: Array<{path: string, view: any, }> = [
  {
    path: '/',
    view: HomeScreen,
  },
  {
    path: '/login',
    view: LoginScreen,
  }
]

export function Router() {
  return (
    <Switch>
      <>
        {
          SITE_ROUTES.map(route => (
            <Route key={`route_${route.path}`} path={route.path} component={route.view} />
          ))
        }
        </>
      <Route component={PageNotFoundScreen} />
    </Switch>
  )
}
