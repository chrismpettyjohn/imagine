import React from 'react';
import { Switch, Route } from 'wouter';
import {MeScreen} from './me-screen/MeScreen';
import {LogoutScreen} from './logout-screen/LogoutScreen';
import {LandingScreen} from './landing-screen/LandingScreen';
import {RegisterScreen} from './register-screen/RegisterScreen';
import {PageNotFoundScreen} from './page-not-found-screen/PageNotFoundScreen';
import {CommunityStaffScreen} from './community-staff-screen/CommunityStaffScreen';
import {CommunityArticleScreen} from './community-article-screen/CommunityArticleScreen';
import {CommunityLeaderboardsScreen} from './community-leaderboards-screen/CommunityLeaderboardsScreen';

const SITE_ROUTES: Array<{path: string, view: any, }> = [
  {
    path: '/',
    view: LandingScreen,
  },
  {
    path: '/register',
    view: RegisterScreen,
  },
  {
    path: '/logout',
    view: LogoutScreen,
  },
  {
    path: '/me',
    view: MeScreen,
  },
  {
    path: '/community/staff',
    view: CommunityStaffScreen,
  },
  {
    path: '/community/leaderboards',
    view: CommunityLeaderboardsScreen,
  },
  {
    path: '/community/articles/:articleID',
    view: CommunityArticleScreen,
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
