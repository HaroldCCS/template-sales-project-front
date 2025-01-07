//@LIBRERIAS
import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

//@SETTINGS
import ROUTES from './router.settings';

//@LAYOUTS
import EmptyLayout from '../layouts/empty/empty.layout';

//@PAGES
import NotFoundPage from '../pages/notFound/notFound.page';
import HomePage from '../pages/home/home.page';

//@ELEMENTS
import PrivateRoute from './config/privateRoute.component';
import PublicRoute from './config/publicRoute.component';
import LoginPage from '../pages/login/login.page';



const RouterComponent: React.FC = () => {
    return (
        <Router>
            <Routes>

                <Route element={<PrivateRoute />}>
                    <Route path="*" element={<EmptyLayout><NotFoundPage /></EmptyLayout>} />
                    <Route path={ROUTES.HOMEPAGE_ROUTE} element={<EmptyLayout><HomePage /></EmptyLayout>} />
                </Route>


                <Route element={<PublicRoute />}>
                    <Route path="/" element={<Navigate to={ROUTES.HOMEPAGE_ROUTE} replace />} />
                    <Route path="*" element={<EmptyLayout><NotFoundPage /></EmptyLayout>} />
                    <Route path={ROUTES.HOMEPAGE_ROUTE} element={<EmptyLayout><HomePage /></EmptyLayout>} />
                    <Route path={ROUTES.LOGIN_ROUTE} element={<EmptyLayout><LoginPage /></EmptyLayout>} />
                </Route>
            </Routes>
        </Router>
    );
};

export default RouterComponent
