import React from 'react';
import { Switch, Route } from 'wouter';
import {HomeScreen} from './home-screen/HomeScreen';
import {LoginScreen} from './login-screen/LoginScreen';
import {LandingScreen} from './landing-screen/LandingScreen';
import {PageNotFoundScreen} from './page-not-found-screen/PageNotFound';

const SITE_ROUTES: Array<{path: string, view: any, }> = [
  {
    path: '/',
    view: LandingScreen,
  },
  {
    path: '/login',
    view: LoginScreen,
  },
  {
    path: '/me',
    view: HomeScreen,
  },
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
