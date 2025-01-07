import { Navigate, Outlet } from 'react-router-dom';
import ROUTES from '../router.settings';
import useToken from '../../hooks/useToken.hook';

const PublicRoute = () => {
	const {token} =  useToken()

  if (token) {
    return <Navigate to={ROUTES.SALES_LOG_ROUTE} />;
  }

  return <Outlet />;
};

export default PublicRoute;
