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


const RouterComponent: React.FC = () => {
    return (
        <Router>
            <Routes>

                <Route element={<PrivateRoute />}>
                    <Route path="*" element={<Navigate to={ROUTES.SALES_LOG_ROUTE} replace />} />
                    <Route path={ROUTES.SALES_LOG_ROUTE} element={<LoggedLayout><SalesLogPage /></LoggedLayout>} />
                    <Route path={ROUTES.REPORT_ROUTE} element={<LoggedLayout><ReportsPage /></LoggedLayout>} />

                    {/* SETTINGS */}
                    <Route path={ROUTES.SETTINGS_ROUTE} element={<LoggedLayout><SettingsPage /></LoggedLayout>} />
                    <Route path={ROUTES.SETTINGS_HEADQUARTERS} element={<LoggedLayout><HeadquartersPage /></LoggedLayout>} />
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
