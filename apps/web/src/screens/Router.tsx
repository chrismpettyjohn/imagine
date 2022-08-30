import React from 'react';
import { Switch, Route } from 'wouter';
import {MeScreen} from './me-screen/MeScreen';
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

export function Router() {
  return (
    <Switch>
      <Route path="/login">
        <GuestGuard>
          <LoginScreen />
        </GuestGuard>
      </Route>
      <Route path="/register">
        <GuestGuard>
          <RegisterScreen />
        </GuestGuard>
      </Route>
      <Route path="/logout">
        <UserGuard>
          <LogoutScreen />
        </UserGuard>
      </Route>
      <Route path="/me">
        <UserGuard>
          <MeScreen />
        </UserGuard>
      </Route>
      <Route path="/community">
        <UserGuard>
          <CommunityScreen />
        </UserGuard>
      </Route>
      <Route path="/community/staff">
        <UserGuard>
          <CommunityStaffScreen />
        </UserGuard>
      </Route>
      <Route path="/community/online-players">
        <UserGuard>
          <CommunityOnlinePlayersScreen />
        </UserGuard>
      </Route>
      <Route path="/community/leaderboards">
        <CommunityLeaderboardsScreen />
      </Route>
      <Route component={PageNotFoundScreen} />
    </Switch>
  )
}
