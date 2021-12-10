import React, { Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import routes from 'routes/routes';
import MainLayout from 'base/layout/mainLayout';

interface AppProps {}

const App: React.FC<AppProps> = (): React.ReactElement => {
  const mainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '*', element: <Navigate to="/404" /> },
      { path: 'profile', element: <Navigate to="/404" /> },
      { path: routes.NotFound.path, element: routes.NotFound.element },
      { path: routes.Landing.path, element: routes.Landing.element },
    ],
  };

  const profileRotes = {
    path: '/profile',
    element: <MainLayout />,
    children: [
      { path: '*', element: <Navigate to="/404" /> },
      { path: routes.Profile.path, element: routes.Profile.element },
      { path: routes.NotFound.path, element: routes.NotFound.element },
    ],
  };

  const routing = useRoutes([mainRoutes, profileRotes]);

  return <Suspense fallback={<div>Loading...</div>}>{routing}</Suspense>;
};
export default App;
