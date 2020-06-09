import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginRoute from './LoginRoute'

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <LoginRoute />
    </Route>
  </Switch>
);

export default Routes;
