import React from 'react';
import { Switch, Route } from 'wouter';
import { DashboardScreen } from './dashboard-screen/DashboardScreen';
import { PageNotFoundScreen } from './page-not-found-screen/PageNotFoundScreen';

const SITE_ROUTES: Array<{ path: string, view: any, }> = [
  {
    path: '/dashboard',
    view: DashboardScreen,
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
