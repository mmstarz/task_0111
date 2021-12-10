import React from 'react';

const Landing = React.lazy(() => import('pages/landing/landing'));
const NotFound = React.lazy(() => import('pages/404/404'));
const Profile = React.lazy(() => import('pages/profile/profile'));

const routes = {
  NotFound: {
    path: '404',
    element: <NotFound />,
  },
  Landing: {
    path: '/',
    element: <Landing />,
  },
  Profile: {
    path: '/profile/:username',
    element: <Profile />,
  },
};

export default routes;
