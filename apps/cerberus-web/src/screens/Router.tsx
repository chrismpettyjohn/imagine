import React from 'react';
import { Switch, Route } from 'wouter';
import { GuestGuard, RouteScopeGuard, ScopeGuard, UserGuard } from '@imagine-cms/web';
import { SignInScreen } from './sign-in-screen/SignInScreen';
import { SiteRoute } from '../components/site-route/SiteRoute';
import { DashboardScreen } from './dashboard-screen/DashboardScreen';
import { SiteRouteProps } from '../components/site-route/SiteRoute.types';
import { PageNotFoundScreen } from './page-not-found-screen/PageNotFoundScreen';
import { UsersOverviewScreen } from './users-overview-screen/UsersOverviewScreen';
import { ReportsOverviewScreen } from './reports-overview-screen/ReportsOverviewScreen';
import { CatalogOverviewScreen } from './catalog-overview-screen/CatalogOverviewScreen';
import { UserEditProfileScreen } from './user-edit-profile-screen/UserEditProfileScreen';
import { PermissionsOverviewScreen } from './permissions-overview-screen/PermissionsOverviewScreen';
import { NewsArticlesOverviewScreen } from './news-articles-overview-screen/NewsArticlesOverviewScreen';
import { ConfigurationOverviewScreen } from './configuration-overview-screen/ConfigurationOverviewScreen';
import { RoomsViewRoomScreen } from './rooms-view-room-screen/RoomsViewRoomScreen';
import { PermissionsEditRankScreen } from './permissions-edit-rank-screen/PermissionsEditRankScreen';

const SITE_ROUTES: SiteRouteProps[] = [
  {
    path: '/login',
    view: SignInScreen,
    guard: GuestGuard
  },
  {
    path: '/me',
    view: DashboardScreen,
    guard: UserGuard,
  },
  {
    path: '/dashboard',
    view: DashboardScreen,
    guard: UserGuard,
  },
  {
    path: '/users',
    view: UsersOverviewScreen,
    guard: RouteScopeGuard('manageUsers'),
  },
  {
    path: '/users/:username',
    view: UserEditProfileScreen,
    guard: RouteScopeGuard('manageUsers'),
  },
  {
    path: '/rooms/:roomID',
    view: RoomsViewRoomScreen,
    guard: RouteScopeGuard('manageUsers'),
  },
  {
    path: '/catalog',
    view: CatalogOverviewScreen,
    guard: UserGuard,
  },
  {
    path: '/articles',
    view: NewsArticlesOverviewScreen,
    guard: UserGuard,
  },
  {
    path: '/reports',
    view: ReportsOverviewScreen,
    guard: UserGuard,
  },
  {
    path: '/permissions',
    view: PermissionsOverviewScreen,
    guard: RouteScopeGuard('managePermissions'),
  },
  {
    path: '/permissions/:rankID',
    view: PermissionsEditRankScreen,
    guard: RouteScopeGuard('managePermissions'),
  },
  {
    path: '/configuration',
    view: ConfigurationOverviewScreen,
    guard: UserGuard,
  }
]

export function Router() {
  return (
    <Switch>
      <>
        {
          SITE_ROUTES.map(route => (
            <SiteRoute key={`route_${route.path}`} {...route} />
          ))
        }
      </>
      <Route component={PageNotFoundScreen} />
    </Switch>
  )
}
