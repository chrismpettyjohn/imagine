import React from 'react';
import { Switch, Route } from 'wouter';
import {MeScreen} from './me-screen/MeScreen';
import {LoginScreen} from './login-screen/LoginScreen';
import {LogoutScreen} from './logout-screen/LogoutScreen';
import {LandingScreen} from './landing-screen/LandingScreen';
import {RegisterScreen} from './register-screen/RegisterScreen';
import {PageNotFoundScreen} from './page-not-found-screen/PageNotFoundScreen';
import {CommunityPhotosScreen} from './community-photos-screen/CommunityPhotosScreen';
import {CommunityArticleScreen} from './community-article-screen/CommunityArticleScreen';

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
    path: '/community/photos',
    view: CommunityPhotosScreen,
  },
  {
    path: '/community/news',
    view: CommunityArticleScreen,
  },
  {
    path: '/community/news/:articleID',
    view: CommunityArticleScreen,
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
