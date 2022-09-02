import React from 'react';
import { Switch, Route } from 'wouter';
import {LogoutScreen} from './logout-screen/LogoutScreen';
import {LandingScreen} from './landing-screen/LandingScreen';
import {DashboardScreen} from './dashboard-screen/DashboardScreen';
import {PageNotFoundScreen} from './page-not-found-screen/PageNotFoundScreen';
import {ActionNotAllowedScreen} from './action-not-allowed-screen/ActionNotAllowedScreen';

const SITE_ROUTES: Array<{path: string, view: any, }> = [
  {
    path: '/',
    view: LandingScreen,
  },
  {
    path: '/not-allowed',
    view: ActionNotAllowedScreen,
  },
  {
    path: '/logout',
    view: LogoutScreen,
  },
  {
    path: '/dashboard',
    view: DashboardScreen,
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
