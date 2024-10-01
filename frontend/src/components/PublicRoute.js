import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = ({ restricted, children }) => {
  const accessToken = useSelector((state) => state.user.accessToken);
  const isAuthenticated = !!accessToken;

  return isAuthenticated && restricted ? <Navigate to="/" /> : children;
};

export default PublicRoute;
