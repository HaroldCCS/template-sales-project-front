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



const RouterComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to={ROUTES.HOMEPAGE_ROUTE} replace />} />

                <Route path="*" element={<EmptyLayout><NotFoundPage /></EmptyLayout>} />
                <Route path={ROUTES.HOMEPAGE_ROUTE} element={<EmptyLayout><HomePage /></EmptyLayout>} />

            </Routes>
        </Router>
    );
};

export default RouterComponent
