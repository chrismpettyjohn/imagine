import React from 'react';
import {MeScreen} from './me-screen/MeScreen';
import { Routes, Route } from 'react-router-dom';
import {LoginScreen} from './login-screen/LoginScreen';
import {LogoutScreen} from './logout-screen/LogoutScreen';
import {UserGuard} from '../components/user-guard/UserGuard';
import {GuestGuard} from '../components/guest-guard/GuestGuard';
import {RegisterScreen} from './register-screen/RegisterScreen';
import {CommunityScreen} from './community-screen/CommunityScreen';
import {PageNotFoundScreen} from './page-not-found-screen/PageNotFoundScreen';
import {CommunityStaffScreen} from './community-staff-screen/CommunityStaffScreen';
import {CommunityLeaderboardsScreen} from './community-leaderboards-screen/CommunityLeaderboardsScreen';
import {CommunityOnlinePlayersScreen} from './community-online-players-screen/CommunityOnlinePlayersScreen';

const SITE_ROUTES: Array<{path: string, guard: any, view: any, }> = [
  {
    path: '/login',
    guard: GuestGuard,
    view: LoginScreen,
  },
  {
    path: '/register',
    guard: GuestGuard,
    view: RegisterScreen,
  },
  {
    path: '/logout',
    guard: GuestGuard,
    view: LogoutScreen,
  },
  {
    path: '/me',
    guard: UserGuard,
    view: MeScreen,
  },
  {
    path: '/community',
    guard: UserGuard,
    view: CommunityScreen,
  },
  {
    path: '/community',
    guard: UserGuard,
    view: CommunityScreen,
  },
  {
    path: '/community/staff',
    guard: UserGuard,
    view: CommunityStaffScreen,
  },
  {
    path: '/community/online-players',
    guard: UserGuard,
    view: CommunityOnlinePlayersScreen,
  },
  {
    path: '/community/leaderboards',
    guard: UserGuard,
    view: CommunityLeaderboardsScreen,
  },
]

export function Router() {
  return (
    <Routes>
      {
        SITE_ROUTES.map(route => {
          const routeElement = (
            <route.guard>
              <route.view />
            </route.guard>
          )
          return <Route key={`route_${route.path}`} path={route.path} element={routeElement} />
        })
      }

      <Route path="*" element={<PageNotFoundScreen />} />
    </Routes>
  )
}
