//@LIBRERIAS
import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

//@SETTINGS
import ROUTES from './router.settings';

//@LAYOUTS
import EmptyLayout from '../layouts/empty/empty.layout';
import LoggedLayout from '../layouts/logged/logged.layout';

//@ELEMENTS
import PrivateRoute from './config/privateRoute.component';
import PublicRoute from './config/publicRoute.component';

//@PAGES
import RegisterPage from '../pages/register/register.page';
import SalesLogPage from '../pages/salesLog/salesLog.page';
import ReportsPage from '../pages/reports/reports.page';
import LoginPage from '../pages/login/login.page';
import SettingsPage from '../pages/settings/settings.page';
import HeadquartersPage from '../pages/settings/headquarters/headquarters.page';
import PaymentMethodsPage from '../pages/settings/paymentMethods/paymentMethods.page';
import EmployeesPage from '../pages/settings/employees/employees.page';
import PaymentLinkPage from '../pages/paymentQR/paymentQR.page';


const RouterComponent: React.FC = () => {
    return (
        <Router>
            <Routes>

                <Route element={<PrivateRoute />}>
                    <Route path="*" element={<Navigate to={ROUTES.SALES_LOG_ROUTE} replace />} />
                    <Route path={ROUTES.SALES_LOG_ROUTE} element={<LoggedLayout><SalesLogPage /></LoggedLayout>} />
                    <Route path={ROUTES.REPORT_ROUTE} element={<LoggedLayout><ReportsPage /></LoggedLayout>} />
                    <Route path={ROUTES.LINK_PAYMENT_ROUTE} element={<LoggedLayout><PaymentLinkPage /></LoggedLayout>} />

                    {/* SETTINGS */}
                    <Route path={ROUTES.SETTINGS_ROUTE} element={<LoggedLayout><SettingsPage /></LoggedLayout>} />
                    <Route path={ROUTES.SETTINGS_HEADQUARTERS} element={<LoggedLayout><HeadquartersPage /></LoggedLayout>} />
                    <Route path={ROUTES.SETTINGS_PAYMENT_METHODS} element={<LoggedLayout><PaymentMethodsPage /></LoggedLayout>} />
                    <Route path={ROUTES.SETTINGS_EMPLOYEES} element={<LoggedLayout><EmployeesPage /></LoggedLayout>} />
                </Route>

                <Route element={<PublicRoute />}>
                    <Route path="*" element={<Navigate to={ROUTES.LOGIN_ROUTE} replace />} />
                    <Route path={ROUTES.LOGIN_ROUTE} element={<EmptyLayout><LoginPage /></EmptyLayout>} />
                    <Route path={ROUTES.REGISTER_ROUTE} element={<EmptyLayout><RegisterPage /></EmptyLayout>} />
                </Route>
            </Routes>
        </Router>
    );
};

export default RouterComponent
