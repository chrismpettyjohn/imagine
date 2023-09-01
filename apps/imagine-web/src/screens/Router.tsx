import React from 'react';
import { Switch, Route } from 'wouter';
import { MeScreen } from './me-screen/MeScreen';
import { LoginScreen } from './login-screen/LoginScreen';
import { LogoutScreen } from './logout-screen/LogoutScreen';
import { GalleryScreen } from './gallery-screen/GalleryScreen';
import { LandingScreen } from './landing-screen/LandingScreen';
import { RegisterScreen } from './register-screen/RegisterScreen';
import { PlayGameScreen } from './play-game-screen/PlayGameScreen';
import { PageNotFoundScreen } from './page-not-found-screen/PageNotFoundScreen';
import { CommunityStaffScreen } from './community-staff-screen/CommunityStaffScreen';
import { CommunityViewArticleScreen } from './community-view-article-screen/CommunityViewArticleScreen';
import { CommunityListArticlesScreen } from './community-list-articles-screen/CommunityListArticlesScreen';
import { CommunityOnlinePlayersScreen } from './community-online-players-screen/CommunityOnlinePlayersScreen';

const SITE_ROUTES: Array<{ path: string, view: any, }> = [
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
    path: '/community/staff',
    view: CommunityStaffScreen,
  },
  {
    path: '/community/online-players',
    view: CommunityOnlinePlayersScreen,
  },
  {
    path: '/community/articles',
    view: CommunityListArticlesScreen,
  },
  {
    path: '/community/articles/:articleID',
    view: CommunityViewArticleScreen,
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
