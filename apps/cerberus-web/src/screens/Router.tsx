import React from 'react';
import { Switch, Route } from 'wouter';
import { DashboardScreen } from './dashboard-screen/DashboardScreen';
import { PageNotFoundScreen } from './page-not-found-screen/PageNotFoundScreen';
import { UsersOverviewScreen } from './users-overview-screen/UsersOverviewScreen';
import { ReportsOverviewScreen } from './reports-overview-screen/ReportsOverviewScreen';
import { CatalogOverviewScreen } from './catalog-overview-screen/CatalogOverviewScreen';
import { UserEditProfileScreen } from './user-edit-profile-screen/UserEditProfileScreen';
import { PermissionsOverviewScreen } from './permissions-overview-screen/PermissionsOverviewScreen';
import { NewsArticlesOverviewScreen } from './news-articles-overview-screen/NewsArticlesOverviewScreen';
import { ConfigurationOverviewScreen } from './configuration-overview-screen/ConfigurationOverviewScreen';

const SITE_ROUTES: Array<{ path: string, view: any, }> = [
  {
    path: '/dashboard',
    view: DashboardScreen,
  },
  {
    path: '/users',
    view: UsersOverviewScreen,
  },
  {
    path: '/users/:userID',
    view: UserEditProfileScreen,
  },
  {
    path: '/catalog',
    view: CatalogOverviewScreen,
  },
  {
    path: '/articles',
    view: NewsArticlesOverviewScreen,
  },
  {
    path: '/reports',
    view: ReportsOverviewScreen
  },
  {
    path: '/permissions',
    view: PermissionsOverviewScreen
  },
  {
    path: '/configuration',
    view: ConfigurationOverviewScreen,
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
