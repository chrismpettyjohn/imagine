import React from 'react';
import { Switch, Route } from 'wouter';
import {LoginScreen} from './login-screen/LoginScreen';
import {PageNotFoundScreen} from './page-not-found-screen/PageNotFoundScreen';

export function Router() {
  return (
    <Switch>
      <Route path="/login" component={LoginScreen} />
      <Route component={PageNotFoundScreen} />
    </Switch>
  )
}
