import { lazy } from 'react';

// project imports
import AuthGuard from 'utils/route-guard/AuthGuard';
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// sample page routing
const AthanorPage = Loadable(lazy(() => import('views/athanor-page')));
const SamplePage = Loadable(lazy(() => import('views/sample-page')));
const PruebaPage = Loadable(lazy(() => import('views/prueba-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: (
        <AuthGuard>
            <MainLayout />
        </AuthGuard>
    ),
    children: [
        {
            path: '/',
            element: <SamplePage />
        },
        {
            path: '/athanor-page',
            element: <AthanorPage />
        },
        {
            path: '/sample-page',
            element: <SamplePage />
        },
        {
            path: '/prueba-page',
            element: <PruebaPage />
        }
    ]
};

export default MainRoutes;
