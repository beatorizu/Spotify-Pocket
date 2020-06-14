import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, useRouteMatch } from "react-router-dom";

import {
  getCategoriesRequest,
  getUserFailed,
  getUserRequest,
  getUserSuccess,
  logout } from "../actions";

import { endpoints } from "../modules/endpoints";
import { request } from "../modules/request";

import { Categories, Dashboard, PrivateRoute, Topbar } from "../containers";
import { WelcomeBox } from "../components";

const { getCategories, getUserProfile } = endpoints;

const DashboardRoute = () => {
  const { auth, content, user } = useSelector(state => state);
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

  useEffect(() => {
    const requestOptions = {
      ...getCategories.options,
      headers: { 'Authorization': `Bearer ${auth.accessToken}` }
    }

    dispatch(getCategoriesRequest());
  }, [auth, dispatch]);

  return (
    <Dashboard>
      <Topbar />
      <Switch>
        <PrivateRoute exact path={path}>
          <WelcomeBox name={user.name} />

          <Categories isLoading={content.status === 'running' && content.categories.length === 0} url={url} data={content.categories} />
        </PrivateRoute>
      </Switch>
    </Dashboard>
  );
}

export default DashboardRoute;
