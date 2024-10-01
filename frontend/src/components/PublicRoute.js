import React from 'react';
import { Route, Switch } from 'react-router-dom';

const PublicRoute = ({ component: Component, restricted, ...rest }) => (
  // restricted = false meaning public route
  // restricted = true meaning restricted route
  <Route {...rest} render={(props) => (restricted ? <Switch to="/" /> : <Component {...props} />)} />
);

export default PublicRoute;
