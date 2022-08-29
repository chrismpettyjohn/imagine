import React from 'react';
import { Switch, Route } from 'wouter';
import {MeScreen} from './me-screen/MeScreen';
import {LoginScreen} from './login-screen/LoginScreen';
import {RegisterScreen} from './register-screen/RegisterScreen';
import {CommunityScreen} from './community-screen/CommunityScreen';
import {PageNotFoundScreen} from './page-not-found-screen/PageNotFoundScreen';
import {CommunityStaffScreen} from './community-staff-screen/CommunityStaffScreen';
import {CommunityLeaderboardsScreen} from './community-leaderboards-screen/CommunityLeaderboardsScreen';
import {CommunityOnlinePlayersScreen} from './community-online-players-screen/CommunityOnlinePlayersScreen';

export function Router() {
  return (
    <Switch>
      <Route path="/login" component={LoginScreen} />
      <Route path="/register" component={RegisterScreen} />
      <Route path="/me" component={MeScreen} />
      <Route path="/community" component={CommunityScreen} />
      <Route path="/community/staff" component={CommunityStaffScreen} />
      <Route path="/community/online-players" component={CommunityOnlinePlayersScreen} />
      <Route path="/community/leaderboards" component={CommunityLeaderboardsScreen} />
      <Route component={PageNotFoundScreen} />
    </Switch>
  )
}
