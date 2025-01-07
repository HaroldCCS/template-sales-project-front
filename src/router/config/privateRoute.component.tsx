import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useToken from '../../hooks/useToken.hook';
import ROUTES from '../router.settings';

const PrivateRoute = () => {
  const {token} = useToken()

  if (!token) {
    return <Navigate to={ROUTES.LOGIN_ROUTE} />;
  }

  return <Outlet />;
};

export default PrivateRoute;
