import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'base/layout/header';
// import Notifications from 'base/layout/notifications';

interface MainLayoutProps {}

const MainLayout: React.FC<MainLayoutProps> = (): React.ReactElement => {
  return (
    <div className="main">
      <Header />
      <Outlet />
      {/* <Notifications /> */}
    </div>
  );
};
export default MainLayout;
