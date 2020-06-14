import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { PrivateRoute } from "../containers";

import LoginRoute from './LoginRoute'
import AuthorizeRoute from './AuthorizeRoute'
import DashboardRoute from './DashboardRoute'

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <LoginRoute />
    </Route>
    <Route exact path="/authorize">
      <AuthorizeRoute />
    </Route>
    <PrivateRoute path="/dashboard" comp={DashboardRoute} />
  </Switch>
);

export default Routes;
