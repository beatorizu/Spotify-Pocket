import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, useRouteMatch } from "react-router-dom";

import {
  getUserFailed,
  getUserRequest,
  getUserSuccess,
  logout } from "../actions";

import { endpoints } from "../modules/endpoints";
import { request } from "../modules/request";

import { Dashboard, PrivateRoute, Topbar } from "../containers";
import { WelcomeBox } from "../components";

const { getUserProfile } = endpoints;

const DashboardRoute = () => {
  const { auth, user } = useSelector(state => state);
  const { path, url } = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    const requestOptions = {
      ...getUserProfile.options,
      headers: { 'Authorization': `Bearer ${auth.accessToken}` }
    }

    dispatch(getUserRequest());

    request(getUserProfile.url, requestOptions)
      .then(data => dispatch(getUserSuccess(data)))
      .catch(error => {
        if (error === 401) {
          dispatch(logout);

          return;
        }

        dispatch(getUserFailed(error));
      })
  }, [auth, dispatch]);

  return (
    <Dashboard>
      <Topbar />
      <Switch>
        <PrivateRoute exact path={path}>
          <WelcomeBox name={user.name} />
        </PrivateRoute>
      </Switch>
    </Dashboard>
  );
}

export default DashboardRoute;
