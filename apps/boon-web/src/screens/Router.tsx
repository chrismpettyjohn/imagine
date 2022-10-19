import React from 'react';
import { Switch, Route } from 'wouter';
import {MeScreen} from './me-screen/MeScreen';
import {LoginScreen} from './login-screen/LoginScreen';
import {LogoutScreen} from './logout-screen/LogoutScreen';
import {GalleryScreen} from './gallery-screen/GalleryScreen';
import {LandingScreen} from './landing-screen/LandingScreen';
import {RegisterScreen} from './register-screen/RegisterScreen';
import {CommunityScreen} from './community-screen/CommunityScreen';
import {PageNotFoundScreen} from './page-not-found-screen/PageNotFoundScreen';
import {CommunityStaffScreen} from './community-staff-screen/CommunityStaffScreen';
import {CommunityArticleScreen} from './community-article-screen/CommunityArticleScreen';
import {CommunityLeaderboardsScreen} from './community-leaderboards-screen/CommunityLeaderboardsScreen';
import {CommunityOnlinePlayersScreen} from './community-online-players-screen/CommunityOnlinePlayersScreen';
import {PlayGameScreen} from './play-game-screen/PlayGameScreen';

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
    path: '/play',
    view: PlayGameScreen,
  },
  {
    path: '/community',
    view: CommunityScreen,
  },
  {
    path: '/community',
    view: CommunityScreen,
  },
  {
    path: '/community/staff',
    view: CommunityStaffScreen,
  },
  {
    path: '/community/online-players',
    view: CommunityOnlinePlayersScreen,
  },
  {
    path: '/community/leaderboards',
    view: CommunityLeaderboardsScreen,
  },
  {
    path: '/community/articles/:articleID',
    view: CommunityArticleScreen,
  },
  {
    path: '/gallery',
    view: GalleryScreen,
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
