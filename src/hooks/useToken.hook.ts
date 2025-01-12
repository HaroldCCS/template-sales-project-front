import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';


import { useAppDispatch, useAppSelector } from '../store';
import ROUTES from '../router/router.settings';
import tokenAction from '../store/auth/token/token.action';
import headquartersAction from '../store/app/settings/headquarters/headquarters.action';
import paymentMethodsAction from '../store/app/settings/paymentMehtods/paymentMethods.action';
import salesLogsAction from '../store/app/salesLogs/salesLogs.action';
import employeesAction from '../store/app/settings/employees/employees.action';

function useToken() {
  const token = useAppSelector(state => state?.user?.token?.token);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(tokenAction.drop());
    dispatch(salesLogsAction.dropAll());
    dispatch(headquartersAction.dropAll());
    dispatch(paymentMethodsAction.dropAll());
    dispatch(employeesAction.dropAll());

    navigate(ROUTES.LOGIN_ROUTE);
  }


  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000; // Convertir a segundos
      if (decodedToken && decodedToken?.exp &&  decodedToken?.exp < currentTime) logout()
    }
  }, [token]);

  return {
    logout,
    token
  };
}

export default useToken;