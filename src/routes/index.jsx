import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginRoute from './LoginRoute'
import AuthorizeRoute from './AuthorizeRoute'

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <LoginRoute />
    </Route>
    <Route exact path="/authorize">
      <AuthorizeRoute />
    </Route>
  </Switch>
);

export default Routes;
