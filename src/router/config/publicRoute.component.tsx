import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import ROUTES from '../router.settings';
// import useToken from 'hooks/useToken.hook';

const PublicRoute = () => {
	// const {token} =  useToken()


  if (false) {
    return <Navigate to={ROUTES.HOMEPAGE_ROUTE} />;
  }

  return <Outlet />;
};

export default PublicRoute;
