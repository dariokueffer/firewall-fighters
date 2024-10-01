import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
  const accessToken = useSelector((state) => state.user.accessToken);
  const isAuthenticated = !!accessToken;

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
