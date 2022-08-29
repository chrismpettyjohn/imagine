import React from 'react';
import { Switch, Route } from 'wouter';
import {LoginScreen} from './login-screen/LoginScreen';
import {RegisterScreen} from './register-screen/RegisterScreen';
import {PageNotFoundScreen} from './page-not-found-screen/PageNotFoundScreen';

export function Router() {
  return (
    <Switch>
      <Route path="/login" component={LoginScreen} />
      <Route path="/register" component={RegisterScreen} />
      <Route component={PageNotFoundScreen} />
    </Switch>
  )
}
